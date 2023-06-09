/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChangePasswordReasonEnum } from "./changepasswordreasonenum";
import { LoginPreventedResponse } from "./loginpreventedresponse";
import { TwoFactorMethod } from "./twofactormethod";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class LoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoginPreventedResponse })
  @Expose({ name: "actions" })
  @Type(() => LoginPreventedResponse)
  actions?: LoginPreventedResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "changePasswordId" })
  changePasswordId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "changePasswordReason" })
  changePasswordReason?: ChangePasswordReasonEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "configurableMethods" })
  configurableMethods?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "emailVerificationId" })
  emailVerificationId?: string;

  @SpeakeasyMetadata({ elemType: TwoFactorMethod })
  @Expose({ name: "methods" })
  @Type(() => TwoFactorMethod)
  methods?: TwoFactorMethod[];

  @SpeakeasyMetadata()
  @Expose({ name: "pendingIdPLinkId" })
  pendingIdPLinkId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshTokenId" })
  refreshTokenId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "registrationVerificationId" })
  registrationVerificationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "threatsDetected" })
  threatsDetected?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tokenExpirationInstant" })
  tokenExpirationInstant?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "trustToken" })
  trustToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "twoFactorId" })
  twoFactorId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "twoFactorTrustId" })
  twoFactorTrustId?: string;

  /**
   * The global view of a User. This object contains all global information about the user including birth date, registration information  preferred languages, global attributes, etc.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => User)
  user?: User;
}
