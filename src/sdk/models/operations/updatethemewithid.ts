/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateThemeWithIdRequest extends SpeakeasyBase {
  /**
   * The Id of the theme to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=themeId",
  })
  themeId: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  themeRequest?: shared.ThemeRequest;
}

export class UpdateThemeWithIdResponse extends SpeakeasyBase {
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

  /**
   * Success
   */
  @SpeakeasyMetadata()
  themeResponse?: shared.ThemeResponse;
}
