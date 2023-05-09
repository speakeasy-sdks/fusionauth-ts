/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserConsent } from "./userconsent";
import { Expose, Type } from "class-transformer";

/**
 * API response for User consent.
 */
export class UserConsentResponse extends SpeakeasyBase {
  /**
   * Models a User consent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userConsent" })
  @Type(() => UserConsent)
  userConsent?: UserConsent;

  @SpeakeasyMetadata({ elemType: UserConsent })
  @Expose({ name: "userConsents" })
  @Type(() => UserConsent)
  userConsents?: UserConsent[];
}
