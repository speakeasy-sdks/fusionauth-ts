/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateLogoutRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    logoutRequest?: shared.LogoutRequest;

    /**
     * When this value is set to true all of the refresh tokens issued to the owner of the provided token will be revoked.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=global" })
    global?: string;

    /**
     * The refresh_token as a request parameter instead of coming in via a cookie. If provided this takes precedence over the cookie.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshToken" })
    refreshToken?: string;
}

export class CreateLogoutResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
