/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { Expose, Type } from "class-transformer";

/**
 * Email template request.
 */
export class EmailTemplateRequest extends SpeakeasyBase {
    /**
     * Stores an email template used to send emails to users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailTemplate" })
    @Type(() => EmailTemplate)
    emailTemplate?: EmailTemplate;
}
