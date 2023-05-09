/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OAuthErrorReasonEnum } from "./oautherrorreasonenum";
import { OAuthErrorTypeEnum } from "./oautherrortypeenum";
import { TwoFactorMethod } from "./twofactormethod";
import { Expose, Type } from "class-transformer";

/**
 * Error
 */
export class OAuthError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "change_password_id" })
  changePasswordId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: OAuthErrorTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "error_description" })
  errorDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error_reason" })
  errorReason?: OAuthErrorReasonEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "error_uri" })
  errorUri?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "two_factor_id" })
  twoFactorId?: string;

  @SpeakeasyMetadata({ elemType: TwoFactorMethod })
  @Expose({ name: "two_factor_methods" })
  @Type(() => TwoFactorMethod)
  twoFactorMethods?: TwoFactorMethod[];
}