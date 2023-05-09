/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebAuthnAuthenticatorRegistrationResponse } from "./webauthnauthenticatorregistrationresponse";
import { WebAuthnExtensionsClientOutputs } from "./webauthnextensionsclientoutputs";
import { Expose, Type } from "class-transformer";

/**
 * Request to register a new public key with WebAuthn
 */
export class WebAuthnPublicKeyRegistrationRequest extends SpeakeasyBase {
  /**
   * Contains extension output for requested extensions during a WebAuthn ceremony
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clientExtensionResults" })
  @Type(() => WebAuthnExtensionsClientOutputs)
  clientExtensionResults?: WebAuthnExtensionsClientOutputs;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The <i>authenticator's<i> response for the registration ceremony in its encoded format
   */
  @SpeakeasyMetadata()
  @Expose({ name: "response" })
  @Type(() => WebAuthnAuthenticatorRegistrationResponse)
  response?: WebAuthnAuthenticatorRegistrationResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "rpId" })
  rpId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "transports" })
  transports?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}