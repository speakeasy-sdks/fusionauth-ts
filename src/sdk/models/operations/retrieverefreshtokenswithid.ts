/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveRefreshTokensWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userId",
  })
  userId?: string;
}

export class RetrieveRefreshTokensWithIdResponse extends SpeakeasyBase {
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