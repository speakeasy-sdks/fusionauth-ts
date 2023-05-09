/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveUserActionReasonWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the user action reason.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userActionReasonId",
  })
  userActionReasonId: string;
}

export class RetrieveUserActionReasonWithIdResponse extends SpeakeasyBase {
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
  userActionReasonResponse?: shared.UserActionReasonResponse;
}
