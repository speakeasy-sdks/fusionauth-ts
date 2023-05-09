/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveActionWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the action to retrieve.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=actionId",
  })
  actionId: string;
}

export class RetrieveActionWithIdResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  actionResponse?: shared.ActionResponse;

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