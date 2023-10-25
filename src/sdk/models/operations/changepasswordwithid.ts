/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ChangePasswordWithIdRequest extends SpeakeasyBase {
    /**
     * The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changePasswordId" })
    changePasswordId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    changePasswordRequest?: shared.ChangePasswordRequest;
}

export class ChangePasswordWithIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    changePasswordResponse?: shared.ChangePasswordResponse;

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
