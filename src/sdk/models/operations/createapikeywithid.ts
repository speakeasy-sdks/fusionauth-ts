/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateApiKeyWithIdRequest extends SpeakeasyBase {
  /**
   * The unique Id of the API key. If not provided a secure random Id will be generated.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=keyId",
  })
  keyId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiKeyRequest?: shared.APIKeyRequest;
}

export class CreateApiKeyWithIdResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  apiKeyResponse?: shared.APIKeyResponse;

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