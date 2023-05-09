/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RevokeRefreshTokenByIdWithIdRequest extends SpeakeasyBase {
  /**
   * The unique Id of the token to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=tokenId",
  })
  tokenId: string;
}

export class RevokeRefreshTokenByIdWithIdResponse extends SpeakeasyBase {
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