/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Password Encryption Scheme Configuration
 */
export class PasswordEncryptionConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "encryptionScheme" })
    encryptionScheme?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "encryptionSchemeFactor" })
    encryptionSchemeFactor?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "modifyEncryptionSchemeOnLogin" })
    modifyEncryptionSchemeOnLogin?: boolean;
}
