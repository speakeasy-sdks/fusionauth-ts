/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ImportKeyWithIdRequest extends SpeakeasyBase {
  /**
   * The Id for the key. If not provided a secure random UUID will be generated.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=keyId",
  })
  keyId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  keyRequest?: shared.KeyRequest;
}

export class ImportKeyWithIdResponse extends SpeakeasyBase {
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
  keyResponse?: shared.KeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
