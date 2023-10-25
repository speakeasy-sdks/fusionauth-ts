/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {isBooleanRecord, isNumberRecord, isStringRecord, SerializationMethodToContentType, valToString,} from "./utils";

import FormData from "form-data";
import {RFCDate} from "../../sdk/types";
import {classToPlain} from "class-transformer";

export const requestMetadataKey = "request";
const mpFormMetadataKey = "multipart_form";

export function serializeRequestBody(
  request: any,
  requestFieldName: string,
  serializationMethod: string
): [Record<string, any>, any] {
  if (
    request !== Object(request) ||
    !request.hasOwnProperty(requestFieldName)
  ) {
    return serializeContentType(
      SerializationMethodToContentType[serializationMethod],
      request
    );
  }

  const requestBodyAnn: string = Reflect.getMetadata(
    requestMetadataKey,
    request,
    requestFieldName
  );
  if (!requestBodyAnn) {
    throw new Error("invalid request type");
  }

  const requestDecorator: RequestDecorator =
    parseRequestDecorator(requestBodyAnn);
  return serializeContentType(
    requestDecorator.MediaType,
    request[requestFieldName]
  );
}

const serializeContentType = (
  contentType: string,
  reqBody: any
): [Record<string, any>, any] => {
  let [requestHeaders, requestBody]: [Record<string, string>, any] = [{}, {}];

  switch (contentType) {
    case "multipart/form-data":
      requestBody = encodeMultipartFormData(reqBody);
      break;

    case "multipart/mixed":
      requestBody = encodeMultipartFormData(reqBody);
      requestHeaders = (requestBody as FormData).getHeaders();
      break;

    case "application/x-www-form-urlencoded":
      [requestHeaders, requestBody] = [
        {"Content-Type": `${contentType}`},
        encodeFormUrlEncodeData(reqBody),
      ];
      break;

    case "application/json":
      [requestHeaders, requestBody] = [
        {"Content-Type": `${contentType}`},
        classToPlain(reqBody, {exposeUnsetFields: false}),
      ];
      break;
    case "text/json":
      [requestHeaders, requestBody] = [
        {"Content-Type": `${contentType}`},
        reqBody,
      ];
      break;

    default: {
      requestBody = reqBody;
      const requestBodyType: string = typeof requestBody;
      if (
        requestBodyType === "string" ||
        requestBody instanceof String ||
        requestBody instanceof Uint8Array
      )
        requestHeaders = {"Content-Type": `${contentType}`};
      else
        throw new Error(
          `invalid request body type ${requestBodyType} for mediaType ${contentType}`
        );
    }
  }
  return [requestHeaders, requestBody];
};

const encodeFormUrlEncodeData = (data: any): FormData => {
  const formData: FormData = new FormData();
  const fieldNames: string[] = Object.getOwnPropertyNames(data);

  if (isNumberRecord(data) || isBooleanRecord(data) || isStringRecord(data)) {
    fieldNames.forEach((fname) => {
      formData.append(fname, String(data[fname]));
    });
  } else {
    fieldNames.forEach((fname) => {
      const formAnn: string = Reflect.getMetadata("form", data, fname);
      if (formAnn === null) {
        return;
      }
      const formDecorator: FormDecorator = parseFormDecorator(formAnn);

      if (formDecorator.JSON) {
        formData.append(
          formDecorator.Name ?? fname,
          JSON.stringify(data[fname])
        );
        return;
      }

      if (formDecorator.Style === "form") {
        let parsed: Record<string, string[]>;
        if (formDecorator.Explode === true) {
          parsed = formExplode(fname, data[fname]);
        } else {
          parsed = formNotExplode(fname, data[fname]);
        }

        Object.keys(parsed).forEach((key) => {
          parsed[key].forEach((v) => formData.append(key, v));
        });
        return;
      }
    });
  }
  return formData;
};

const formExplode = (fname: string, data: any): Record<string, string[]> => {
  const exploded: Record<string, string[]> = {};

  if (Array.isArray(data)) {
    data.forEach((value) => {
      if (!exploded[fname]) {
        exploded[fname] = [];
      }
      exploded[fname].push(value);
    });
  } else if (typeof data === "object") {
    if (data instanceof Date || data instanceof RFCDate) {
      if (!exploded[fname]) {
        exploded[fname] = [];
      }
      exploded[fname].push(valToString(data));
    } else {
      Object.keys(data).forEach((key) => {
        if (!exploded[key]) {
          exploded[key] = [];
        }
        exploded[key].push(data[key]);
      });
    }
  } else {
    if (!exploded[fname]) {
      exploded[fname] = [];
    }
    exploded[fname].push(valToString(data));
  }
  return exploded;
};

const formNotExplode = (fname: string, data: any): Record<string, string[]> => {
  const notExploded: Record<string, string[]> = {};

  if (Array.isArray(data)) {
    if (!notExploded[fname]) {
      notExploded[fname] = [];
    }
    notExploded[fname].push(data.map((item) => item.toString()).join(","));
  } else if (typeof data === "object") {
    if (data instanceof Date || data instanceof RFCDate) {
      if (!notExploded[fname]) {
        notExploded[fname] = [];
      }
      notExploded[fname].push(valToString(data));
    } else {
      Object.keys(data).forEach((key) => {
        if (!notExploded[key]) {
          notExploded[key] = [];
        }
        notExploded[fname].push(`${key}=${data[key]}`);
      });
    }
  } else {
    if (!notExploded[fname]) {
      notExploded[fname] = [];
    }
    notExploded[fname].push(valToString(data));
  }
  return notExploded;
};

function parseFormDecorator(formAnn: string): FormDecorator {
  const formDecorator: FormDecorator = new FormDecorator(
    "",
    "form",
    false,
    false
  );
  formAnn.split(";").forEach((formAnnPart) => {
    const [formKey, formVal]: string[] = formAnnPart.split("=");
    switch (formKey) {
      case "name":
        formDecorator.Name = formVal;
        break;
      case "style":
        formDecorator.Style = formVal;
        break;
      case "explode":
        formDecorator.Explode = formVal === "true";
        break;
      case "json":
        formDecorator.JSON = formVal === "true";
        break;
    }
  });

  return formDecorator;
}

class FormDecorator {
  Name?: string;
  Style?: string;
  Explode?: boolean;
  JSON?: boolean;

  constructor(
    Name?: string,
    Style?: string,
    Explode?: boolean,
    JSON?: boolean
  ) {
    this.Name = Name;
    this.Style = Style;
    this.Explode = Explode;
    this.JSON = JSON;
  }
}

function encodeMultipartFormData(form: any): FormData {
  const formData: FormData = new FormData();

  const fieldNames: string[] = Object.getOwnPropertyNames(form);
  fieldNames.forEach((fname) => {
    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      form,
      fname
    );

    if (mpFormAnn == null) return;

    const mpFormDecorator: MultipartFormDecorator =
      parseMultipartFormDecorator(mpFormAnn);

    if (mpFormDecorator.File)
      return encodeMultipartFormDataFile(formData, form[fname]);
    else if (mpFormDecorator.JSON) {
      formData.append(mpFormDecorator.Name, JSON.stringify(form[fname]));
    } else {
      if (Array.isArray(form[fname])) {
        form[fname].forEach((val: any) => {
          formData.append(mpFormDecorator.Name + "[]", valToString(val));
        });
      } else {
        formData.append(mpFormDecorator.Name, valToString(form[fname]));
      }
    }
  });
  return formData;
}

function encodeMultipartFormDataFile(formData: FormData, file: any): FormData {
  if (typeof file !== "object" || Array.isArray(file) || file == null) {
    throw new Error("invalid type for multipart/form-data file");
  }
  let content: any = null;
  let fileName = "";
  let mpFormDecoratorName = "";

  const fieldNames: string[] = Object.getOwnPropertyNames(file);
  fieldNames.forEach((fname) => {
    const mpFormAnn: string = Reflect.getMetadata(
      mpFormMetadataKey,
      file,
      fname
    );

    if (mpFormAnn == null) return;

    const mpFormDecorator: MultipartFormDecorator =
      parseMultipartFormDecorator(mpFormAnn);

    if (!mpFormDecorator.Content && mpFormDecorator.Name == "") return;
    if (mpFormDecorator.Content) content = file[fname];
    else {
      mpFormDecoratorName = mpFormDecorator.Name;
      fileName = file[fname];
    }
  });

  if (mpFormDecoratorName === "" || fileName === "" || content == null) {
    throw new Error("invalid multipart/form-data file");
  }
  formData.append(mpFormDecoratorName, Buffer.from(content), fileName);
  return formData;
}

function parseMultipartFormDecorator(
  mpFormAnn: string
): MultipartFormDecorator {
  // example "name=file"
  const mpFormDecorator: MultipartFormDecorator = new MultipartFormDecorator(
    false,
    false,
    false,
    ""
  );
  mpFormAnn.split(";").forEach((mpFormAnnPart) => {
    const [mpFormKey, mpFormVal]: string[] = mpFormAnnPart.split("=");
    switch (mpFormKey) {
      case "file":
        mpFormDecorator.File = mpFormVal == "true";
        break;
      case "content":
        mpFormDecorator.Content = mpFormVal == "true";
        break;
      case "name":
        mpFormDecorator.Name = mpFormVal;
        break;
      case "json":
        mpFormDecorator.JSON = mpFormVal == "true";
        break;
    }
  });

  return mpFormDecorator;
}

class MultipartFormDecorator {
  File: boolean;
  Content: boolean;
  JSON: boolean;
  Name: string;

  constructor(File: boolean, Content: boolean, JSON: boolean, Name: string) {
    this.File = File;
    this.Content = Content;
    this.JSON = JSON;
    this.Name = Name;
  }
}

function parseRequestDecorator(requestAnn: string): RequestDecorator {
  // example "media_type=multipart/form-data"
  const requestDecorator: RequestDecorator = new RequestDecorator(
    "application/octet-stream"
  );
  const [mediaTypeKey, mediaTypeVal]: string[] = requestAnn.split("=");
  if (mediaTypeKey === "media_type") requestDecorator.MediaType = mediaTypeVal;
  return requestDecorator;
}

class RequestDecorator {
  MediaType: string;

  constructor(MediaType: string) {
    this.MediaType = MediaType;
  }
}
