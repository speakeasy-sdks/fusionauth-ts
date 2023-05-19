/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CanonicalizationMethod } from "./canonicalizationmethod";
import { Expose } from "class-transformer";

export class SAMLv2SingleLogout extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "keyId" })
  keyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  /**
   * XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "xmlSignatureC14nMethod" })
  xmlSignatureC14nMethod?: CanonicalizationMethod;
}
