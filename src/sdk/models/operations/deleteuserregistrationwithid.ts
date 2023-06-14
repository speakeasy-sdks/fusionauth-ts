/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteUserRegistrationWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the application to remove the registration for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
    applicationId: string;

    /**
     * The Id of the user whose registration is being deleted.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
    userId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    registrationDeleteRequest?: shared.RegistrationDeleteRequest;

    /**
     * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId" })
    xFusionAuthTenantId?: string;
}

export class DeleteUserRegistrationWithIdResponse extends SpeakeasyBase {
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
