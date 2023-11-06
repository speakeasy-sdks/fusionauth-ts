/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttestationConveyancePreference } from "./attestationconveyancepreference";
import { AuthenticatorSelectionCriteria } from "./authenticatorselectioncriteria";
import { PublicKeyCredentialDescriptor } from "./publickeycredentialdescriptor";
import { PublicKeyCredentialParameters } from "./publickeycredentialparameters";
import { PublicKeyCredentialRelyingPartyEntity } from "./publickeycredentialrelyingpartyentity";
import { PublicKeyCredentialUserEntity } from "./publickeycredentialuserentity";
import { WebAuthnRegistrationExtensionOptions } from "./webauthnregistrationextensionoptions";
import { Expose, Type } from "class-transformer";

/**
 * Allows the Relying Party to specify desired attributes of a new credential.
 */
export class PublicKeyCredentialCreationOptions extends SpeakeasyBase {
    /**
     * Used to communicate whether and how authenticator attestation should be delivered to the Relying Party
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attestation" })
    attestation?: AttestationConveyancePreference;

    /**
     * Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authenticatorSelection" })
    @Type(() => AuthenticatorSelectionCriteria)
    authenticatorSelection?: AuthenticatorSelectionCriteria;

    @SpeakeasyMetadata()
    @Expose({ name: "challenge" })
    challenge?: string;

    @SpeakeasyMetadata({ elemType: PublicKeyCredentialDescriptor })
    @Expose({ name: "excludeCredentials" })
    @Type(() => PublicKeyCredentialDescriptor)
    excludeCredentials?: PublicKeyCredentialDescriptor[];

    /**
     * Options to request extensions during credential registration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "extensions" })
    @Type(() => WebAuthnRegistrationExtensionOptions)
    extensions?: WebAuthnRegistrationExtensionOptions;

    @SpeakeasyMetadata({ elemType: PublicKeyCredentialParameters })
    @Expose({ name: "pubKeyCredParams" })
    @Type(() => PublicKeyCredentialParameters)
    pubKeyCredParams?: PublicKeyCredentialParameters[];

    /**
     * Supply additional information about the Relying Party when creating a new credential
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rp" })
    @Type(() => PublicKeyCredentialRelyingPartyEntity)
    rp?: PublicKeyCredentialRelyingPartyEntity;

    @SpeakeasyMetadata()
    @Expose({ name: "timeout" })
    timeout?: number;

    /**
     * Supply additional information about the user account when creating a new credential
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => PublicKeyCredentialUserEntity)
    user?: PublicKeyCredentialUserEntity;
}
