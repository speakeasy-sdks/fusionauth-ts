/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SendTwoFactorCodeForLoginUsingMethodWithIdRequest extends SpeakeasyBase {
  /**
   * The Id returned by the Login API necessary to complete Two Factor authentication.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=twoFactorId",
  })
  twoFactorId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  twoFactorSendRequest?: shared.TwoFactorSendRequest;
}

export class SendTwoFactorCodeForLoginUsingMethodWithIdResponse extends SpeakeasyBase {
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
}