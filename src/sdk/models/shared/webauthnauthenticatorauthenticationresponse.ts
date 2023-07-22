/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The <i>authenticator's<i> response for the authentication ceremony in its encoded format
 */
export class WebAuthnAuthenticatorAuthenticationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "authenticatorData" })
    authenticatorData?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientDataJSON" })
    clientDataJSON?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "signature" })
    signature?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userHandle" })
    userHandle?: string;
}
