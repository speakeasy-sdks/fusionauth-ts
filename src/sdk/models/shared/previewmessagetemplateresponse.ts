/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Errors } from "./errors";
import { SMSMessage } from "./smsmessage";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class PreviewMessageTemplateResponse extends SpeakeasyBase {
  /**
   * Standard error domain object that can also be used as the response from an API call.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  @Type(() => Errors)
  errors?: Errors;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  @Type(() => SMSMessage)
  message?: SMSMessage;
}
