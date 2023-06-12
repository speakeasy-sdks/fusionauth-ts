/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class LookupIdentityProviderWithIdRequest extends SpeakeasyBase {
    /**
     * The domain or email address to lookup.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
    domain?: string;
}

export class LookupIdentityProviderWithIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    lookupResponse?: shared.LookupResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
