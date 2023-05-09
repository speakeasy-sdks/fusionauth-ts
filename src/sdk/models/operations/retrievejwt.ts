/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveJwtRequest extends SpeakeasyBase {
  /**
   * The Id of the Application for which this key is used.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=applicationId",
  })
  applicationId?: string;

  /**
   * The Id of the public key (kid).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyId" })
  keyId?: string;
}

export class RetrieveJwtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  publicKeyResponse?: shared.PublicKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
