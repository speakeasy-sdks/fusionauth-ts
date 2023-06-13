/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { UserRegistration } from "./userregistration";
import { Expose, Type } from "class-transformer";

/**
 * Registration API request object.
 */
export class RegistrationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "refreshToken" })
    refreshToken?: string;

    /**
     * User registration information for a single application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "registration" })
    @Type(() => UserRegistration)
    registration?: UserRegistration;

    @SpeakeasyMetadata()
    @Expose({ name: "registrationVerificationId" })
    registrationVerificationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tokenExpirationInstant" })
    tokenExpirationInstant?: number;

    /**
     * The global view of a User. This object contains all global information about the user including birth date, registration information  preferred languages, global attributes, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => User)
    user?: User;
}
