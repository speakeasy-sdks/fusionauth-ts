/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateWebhookWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the webhook to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhookId",
  })
  webhookId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  webhookRequest?: shared.WebhookRequest;
}

export class UpdateWebhookWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  errors?: shared.Errors;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  webhookResponse?: shared.WebhookResponse;
}
