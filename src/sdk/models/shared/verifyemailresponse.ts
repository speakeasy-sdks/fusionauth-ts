/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class VerifyEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "oneTimeCode" })
  oneTimeCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verificationId" })
  verificationId?: string;
}
