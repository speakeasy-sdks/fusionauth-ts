/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * SAML v2 IdP Initiated identity provider configuration.
 */
export class SAMLv2IdPInitiatedIdentityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emailClaim" })
  emailClaim?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issuer" })
  issuer?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "keyId" })
  keyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uniqueIdClaim" })
  uniqueIdClaim?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "useNameIdForEmail" })
  useNameIdForEmail?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "usernameClaim" })
  usernameClaim?: string;
}