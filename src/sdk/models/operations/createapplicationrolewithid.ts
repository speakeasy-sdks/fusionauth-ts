/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateApplicationRoleWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the application to create the role on.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
    applicationId: string;

    /**
     * The Id of the role. If not provided a secure random UUID will be generated.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleId" })
    roleId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    applicationRequest?: shared.ApplicationRequest;

    /**
     * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId" })
    xFusionAuthTenantId?: string;
}

export class CreateApplicationRoleWithIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    applicationResponse?: shared.ApplicationResponse;

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
