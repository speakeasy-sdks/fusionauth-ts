/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PublicKeyCredentialDescriptor } from "./publickeycredentialdescriptor";
import { UserVerificationRequirement } from "./userverificationrequirement";
import { Expose, Type } from "class-transformer";

/**
 * Provides the <i>authenticator<i> with the data it needs to generate an assertion.
 */
export class PublicKeyCredentialRequestOptions extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PublicKeyCredentialDescriptor })
    @Expose({ name: "allowCredentials" })
    @Type(() => PublicKeyCredentialDescriptor)
    allowCredentials?: PublicKeyCredentialDescriptor[];

    @SpeakeasyMetadata()
    @Expose({ name: "challenge" })
    challenge?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rpId" })
    rpId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "timeout" })
    timeout?: number;

    /**
     * Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userVerification" })
    userVerification?: UserVerificationRequirement;
}
