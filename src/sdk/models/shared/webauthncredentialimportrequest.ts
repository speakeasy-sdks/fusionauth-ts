/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebAuthnCredential } from "./webauthncredential";
import { Expose, Type } from "class-transformer";

/**
 * API request to import an existing WebAuthn credential(s)
 */
export class WebAuthnCredentialImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WebAuthnCredential })
  @Expose({ name: "credentials" })
  @Type(() => WebAuthnCredential)
  credentials?: WebAuthnCredential[];

  @SpeakeasyMetadata()
  @Expose({ name: "validateDbConstraints" })
  validateDbConstraints?: boolean;
}
