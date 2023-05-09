/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateUserVerifyRegistrationRequest extends SpeakeasyBase {
  /**
   * The Id of the application to be verified.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=applicationId",
  })
  applicationId?: string;

  /**
   * The email address of the user that needs a new verification email.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sendVerifyPasswordEmail",
  })
  sendVerifyPasswordEmail?: string;
}

export class UpdateUserVerifyRegistrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  verifyRegistrationResponse?: shared.VerifyRegistrationResponse;
}
