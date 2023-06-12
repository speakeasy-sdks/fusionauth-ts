/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateUserVerifyEmailRequest extends SpeakeasyBase {
    /**
     * The unique Application Id to used to resolve an application specific email template.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
    applicationId?: string;

    /**
     * The email address of the user that needs a new verification email.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
    email?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendVerifyEmail" })
    sendVerifyEmail?: string;
}

export class UpdateUserVerifyEmailResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    errors?: shared.Errors;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    verifyEmailResponse?: shared.VerifyEmailResponse;
}
