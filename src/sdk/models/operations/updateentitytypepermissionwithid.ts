/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateEntityTypePermissionWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the entityType that the permission belongs to.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=entityTypeId",
  })
  entityTypeId: string;

  /**
   * The Id of the permission to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=permissionId",
  })
  permissionId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  entityTypeRequest?: shared.EntityTypeRequest;
}

export class UpdateEntityTypePermissionWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  entityTypeResponse?: shared.EntityTypeResponse;

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