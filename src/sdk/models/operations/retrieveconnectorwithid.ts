/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveConnectorWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the connector.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectorId",
  })
  connectorId: string;
}

export class RetrieveConnectorWithIdResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  connectorResponse?: shared.ConnectorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
