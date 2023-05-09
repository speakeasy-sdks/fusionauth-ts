/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PublicKeyCredentialCreationOptions } from "./publickeycredentialcreationoptions";
import { Expose, Type } from "class-transformer";

/**
 * API response for starting a WebAuthn registration ceremony
 */
export class WebAuthnRegisterStartResponse extends SpeakeasyBase {
  /**
   * Allows the Relying Party to specify desired attributes of a new credential.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => PublicKeyCredentialCreationOptions)
  options?: PublicKeyCredentialCreationOptions;
}
