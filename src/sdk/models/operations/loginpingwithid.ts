/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class LoginPingWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the application that they logged into.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
    applicationId: string;

    /**
     * The Id of the user that was logged in.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;

    /**
     * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId" })
    xFusionAuthTenantId?: string;

    /**
     * The IP address of the end-user that is logging in. If a null value is provided the IP address will be that of the client or last proxy that sent the request.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callerIPAddress" })
    callerIPAddress?: string;
}

export class LoginPingWithIdResponse extends SpeakeasyBase {
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
    loginResponse?: shared.LoginResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
