/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateTenantWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the tenant to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=tenantId",
  })
  tenantId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tenantRequest?: shared.TenantRequest;

  /**
   * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId",
  })
  xFusionAuthTenantId?: string;
}

export class UpdateTenantWithIdResponse extends SpeakeasyBase {
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
  tenantResponse?: shared.TenantResponse;
}
