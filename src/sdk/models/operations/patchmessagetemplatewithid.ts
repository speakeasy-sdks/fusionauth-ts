/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchMessageTemplateWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the message template to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=messageTemplateId",
  })
  messageTemplateId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  messageTemplateRequest?: shared.MessageTemplateRequest;
}

export class PatchMessageTemplateWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  errors?: shared.Errors;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  messageTemplateResponse?: shared.MessageTemplateResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}