/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveEventLogWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the event log to retrieve.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=eventLogId",
  })
  eventLogId: string;
}

export class RetrieveEventLogWithIdResponse extends SpeakeasyBase {
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
  eventLogResponse?: shared.EventLogResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}