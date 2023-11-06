/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetaData } from "./metadata";
import { Expose, Type } from "class-transformer";

export class PasswordlessLoginRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ipAddress" })
    ipAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metaData" })
    @Type(() => MetaData)
    metaData?: MetaData;

    @SpeakeasyMetadata()
    @Expose({ name: "newDevice" })
    newDevice?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "noJWT" })
    noJWT?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "twoFactorTrustId" })
    twoFactorTrustId?: string;
}
