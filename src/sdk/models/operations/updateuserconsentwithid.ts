/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateUserConsentWithIdRequest extends SpeakeasyBase {
  /**
   * The User Consent Id
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userConsentId",
  })
  userConsentId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userConsentRequest?: shared.UserConsentRequest;
}

export class UpdateUserConsentWithIdResponse extends SpeakeasyBase {
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
  userConsentResponse?: shared.UserConsentResponse;
}
