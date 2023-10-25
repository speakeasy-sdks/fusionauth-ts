/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteUserTwoFactorWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the User for which you're disabling two-factor authentication.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    twoFactorDisableRequest?: shared.TwoFactorDisableRequest;

    /**
     * The two-factor code used verify the the caller knows the two-factor secret.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
    code?: string;

    /**
     * The two-factor method identifier you wish to disable
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=methodId" })
    methodId?: string;
}

export class DeleteUserTwoFactorWithIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    errors?: shared.Errors;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
