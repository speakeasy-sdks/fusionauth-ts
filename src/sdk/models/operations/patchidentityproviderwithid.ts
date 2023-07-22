/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchIdentityProviderWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the identity provider to update.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identityProviderId" })
    identityProviderId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    identityProviderRequest?: shared.IdentityProviderRequest;
}

export class PatchIdentityProviderWithIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    errors?: shared.Errors;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    identityProviderResponse?: shared.IdentityProviderResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
