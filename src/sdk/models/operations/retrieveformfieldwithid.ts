/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveFormFieldWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the form field.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fieldId",
  })
  fieldId: string;
}

export class RetrieveFormFieldWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  formFieldResponse?: shared.FormFieldResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
