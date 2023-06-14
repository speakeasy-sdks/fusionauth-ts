/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailHeader } from "./emailheader";
import { EmailSecurityType } from "./emailsecuritytype";
import { EmailUnverifiedOptions } from "./emailunverifiedoptions";
import { VerificationStrategy } from "./verificationstrategy";
import { Expose, Type } from "class-transformer";

export class EmailConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: EmailHeader })
    @Expose({ name: "additionalHeaders" })
    @Type(() => EmailHeader)
    additionalHeaders?: EmailHeader[];

    @SpeakeasyMetadata()
    @Expose({ name: "debug" })
    debug?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultFromEmail" })
    defaultFromEmail?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultFromName" })
    defaultFromName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailUpdateEmailTemplateId" })
    emailUpdateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailVerifiedEmailTemplateId" })
    emailVerifiedEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "forgotPasswordEmailTemplateId" })
    forgotPasswordEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "host" })
    host?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "implicitEmailVerificationAllowed" })
    implicitEmailVerificationAllowed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "loginIdInUseOnCreateEmailTemplateId" })
    loginIdInUseOnCreateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "loginIdInUseOnUpdateEmailTemplateId" })
    loginIdInUseOnUpdateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "loginNewDeviceEmailTemplateId" })
    loginNewDeviceEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "loginSuspiciousEmailTemplateId" })
    loginSuspiciousEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passwordResetSuccessEmailTemplateId" })
    passwordResetSuccessEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passwordUpdateEmailTemplateId" })
    passwordUpdateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passwordlessEmailTemplateId" })
    passwordlessEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "properties" })
    properties?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "security" })
    security?: EmailSecurityType;

    @SpeakeasyMetadata()
    @Expose({ name: "setPasswordEmailTemplateId" })
    setPasswordEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twoFactorMethodAddEmailTemplateId" })
    twoFactorMethodAddEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twoFactorMethodRemoveEmailTemplateId" })
    twoFactorMethodRemoveEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unverified" })
    @Type(() => EmailUnverifiedOptions)
    unverified?: EmailUnverifiedOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationEmailTemplateId" })
    verificationEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationStrategy" })
    verificationStrategy?: VerificationStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyEmail" })
    verifyEmail?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "verifyEmailWhenChanged" })
    verifyEmailWhenChanged?: boolean;
}
