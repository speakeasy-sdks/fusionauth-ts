/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateMessengerWithIdRequest extends SpeakeasyBase {
  /**
   * The Id for the messenger. If not provided a secure random UUID will be generated.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=messengerId",
  })
  messengerId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  messengerRequest?: shared.MessengerRequest;
}

export class CreateMessengerWithIdResponse extends SpeakeasyBase {
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
  messengerResponse?: shared.MessengerResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}