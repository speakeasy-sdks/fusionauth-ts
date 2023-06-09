/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveEntityTypeWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the Entity Type.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=entityTypeId",
  })
  entityTypeId: string;
}

export class RetrieveEntityTypeWithIdResponse extends SpeakeasyBase {
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
