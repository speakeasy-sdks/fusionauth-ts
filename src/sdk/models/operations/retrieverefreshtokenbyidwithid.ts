/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveRefreshTokenByIdWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the token.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=tokenId",
  })
  tokenId: string;
}

export class RetrieveRefreshTokenByIdWithIdResponse extends SpeakeasyBase {
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
  refreshTokenResponse?: shared.RefreshTokenResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
