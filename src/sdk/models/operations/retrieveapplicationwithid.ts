/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveApplicationWithIdRequest extends SpeakeasyBase {
  /**
   * The application id.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=applicationId",
  })
  applicationId: string;

  /**
   * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId",
  })
  xFusionAuthTenantId?: string;
}

export class RetrieveApplicationWithIdResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  applicationResponse?: shared.ApplicationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
