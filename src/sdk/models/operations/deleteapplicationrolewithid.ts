/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteApplicationRoleWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the application to deactivate.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=applicationId",
  })
  applicationId: string;

  /**
   * The Id of the role to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=roleId",
  })
  roleId: string;

  /**
   * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId",
  })
  xFusionAuthTenantId?: string;
}

export class DeleteApplicationRoleWithIdResponse extends SpeakeasyBase {
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
