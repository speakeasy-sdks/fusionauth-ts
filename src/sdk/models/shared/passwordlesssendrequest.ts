/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PasswordlessSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "loginId" })
  loginId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: Record<string, Record<string, any>>;
}
