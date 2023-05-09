/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Change password response object.
 */
export class ChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "oneTimePassword" })
  oneTimePassword?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: Record<string, Record<string, any>>;
}