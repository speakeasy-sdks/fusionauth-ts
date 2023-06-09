/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteConnectorWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the connector to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectorId",
  })
  connectorId: string;
}

export class DeleteConnectorWithIdResponse extends SpeakeasyBase {
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
