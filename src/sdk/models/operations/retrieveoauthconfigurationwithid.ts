/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveOauthConfigurationWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the Application to retrieve OAuth configuration.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
    applicationId: string;

    /**
     * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId" })
    xFusionAuthTenantId?: string;
}

export class RetrieveOauthConfigurationWithIdResponse extends SpeakeasyBase {
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
    oAuthConfigurationResponse?: shared.OAuthConfigurationResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
