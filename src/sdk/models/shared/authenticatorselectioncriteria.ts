/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthenticatorAttachment } from "./authenticatorattachment";
import { ResidentKeyRequirement } from "./residentkeyrequirement";
import { UserVerificationRequirement } from "./userverificationrequirement";
import { Expose } from "class-transformer";

/**
 * Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1.
 */
export class AuthenticatorSelectionCriteria extends SpeakeasyBase {
  /**
   * Describes the <a href="https:www.w3.orgTRwebauthn-2#authenticator-attachment-modality">authenticator attachment modality<a>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authenticatorAttachment" })
  authenticatorAttachment?: AuthenticatorAttachment;

  @SpeakeasyMetadata()
  @Expose({ name: "requireResidentKey" })
  requireResidentKey?: boolean;

  /**
   * Describes the Relying Party's requirements for <a href="https:www.w3.orgTRwebauthn-2#client-side-discoverable-credential">client-side  discoverable credentials<a> (formerly known as "resident keys")
   */
  @SpeakeasyMetadata()
  @Expose({ name: "residentKey" })
  residentKey?: ResidentKeyRequirement;

  /**
   * Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userVerification" })
  userVerification?: UserVerificationRequirement;
}
