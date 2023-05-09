/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Config for regular SAML IDP configurations that support IdP initiated requests
 */
export class SAMLv2IdpInitiatedConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "issuer" })
  issuer?: string;
}