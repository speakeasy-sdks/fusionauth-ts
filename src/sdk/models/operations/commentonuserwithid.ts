/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CommentOnUserWithIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    userCommentRequest?: shared.UserCommentRequest;

    /**
     * The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-FusionAuth-TenantId" })
    xFusionAuthTenantId?: string;
}

export class CommentOnUserWithIdResponse extends SpeakeasyBase {
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
