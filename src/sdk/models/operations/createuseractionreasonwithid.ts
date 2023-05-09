/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateUserActionReasonWithIdRequest extends SpeakeasyBase {
  /**
   * The Id for the user action reason. If not provided a secure random UUID will be generated.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userActionReasonId",
  })
  userActionReasonId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userActionReasonRequest?: shared.UserActionReasonRequest;
}

export class CreateUserActionReasonWithIdResponse extends SpeakeasyBase {
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
  userActionReasonResponse?: shared.UserActionReasonResponse;
}
