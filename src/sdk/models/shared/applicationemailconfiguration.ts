/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApplicationEmailConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "emailUpdateEmailTemplateId" })
    emailUpdateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailVerificationEmailTemplateId" })
    emailVerificationEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailVerifiedEmailTemplateId" })
    emailVerifiedEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "forgotPasswordEmailTemplateId" })
    forgotPasswordEmailTemplateId?: string;

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
    @Expose({ name: "passwordResetSuccessEmailTemplateId" })
    passwordResetSuccessEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passwordUpdateEmailTemplateId" })
    passwordUpdateEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passwordlessEmailTemplateId" })
    passwordlessEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "setPasswordEmailTemplateId" })
    setPasswordEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twoFactorMethodAddEmailTemplateId" })
    twoFactorMethodAddEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twoFactorMethodRemoveEmailTemplateId" })
    twoFactorMethodRemoveEmailTemplateId?: string;
}
