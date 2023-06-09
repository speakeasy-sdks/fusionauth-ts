/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RegisterWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the user being registered for the application and optionally created.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  registrationRequest?: shared.RegistrationRequest;

  /**
   * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId",
  })
  xFusionAuthTenantId?: string;
}

export class RegisterWithIdResponse extends SpeakeasyBase {
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
  registrationResponse?: shared.RegistrationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
