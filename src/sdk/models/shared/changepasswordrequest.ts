/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { Expose, Type } from "class-transformer";

/**
 * Change password request object.
 */
export class ChangePasswordRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "changePasswordId" })
    changePasswordId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currentPassword" })
    currentPassword?: string;

    /**
     * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventInfo" })
    @Type(() => EventInfo)
    eventInfo?: EventInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "loginId" })
    loginId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refreshToken" })
    refreshToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trustChallenge" })
    trustChallenge?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trustToken" })
    trustToken?: string;
}
