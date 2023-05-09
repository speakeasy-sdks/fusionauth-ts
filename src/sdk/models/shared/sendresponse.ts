/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { EmailTemplateErrors } from "./emailtemplateerrors";
import { Expose, Transform } from "class-transformer";

/**
 * Success
 */
export class SendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EmailTemplateErrors })
  @Expose({ name: "anonymousResults" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, EmailTemplateErrors> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], EmailTemplateErrors);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  anonymousResults?: Record<string, EmailTemplateErrors>;

  @SpeakeasyMetadata({ elemType: EmailTemplateErrors })
  @Expose({ name: "results" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, EmailTemplateErrors> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], EmailTemplateErrors);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  results?: Record<string, EmailTemplateErrors>;
}
