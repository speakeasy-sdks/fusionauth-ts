/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteJwtRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    refreshTokenRevokeRequest?: shared.RefreshTokenRevokeRequest;

    /**
     * The unique Id of the application that you want to delete refresh tokens for.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
    applicationId?: string;

    /**
     * The refresh token to delete.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
    token?: string;

    /**
     * The unique Id of the user that you want to delete all refresh tokens for.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
    userId?: string;
}

export class DeleteJwtResponse extends SpeakeasyBase {
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
}
