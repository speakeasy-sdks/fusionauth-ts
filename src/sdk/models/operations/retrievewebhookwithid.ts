/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveWebhookWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the webhook.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhookId",
  })
  webhookId: string;
}

export class RetrieveWebhookWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

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
