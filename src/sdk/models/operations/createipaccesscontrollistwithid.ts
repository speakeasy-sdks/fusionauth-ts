/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateIPAccessControlListWithIdRequest extends SpeakeasyBase {
    /**
     * The Id for the IP Access Control List. If not provided a secure random UUID will be generated.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessControlListId" })
    accessControlListId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    ipAccessControlListRequest?: shared.IPAccessControlListRequest;
}

export class CreateIPAccessControlListWithIdResponse extends SpeakeasyBase {
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
    ipAccessControlListResponse?: shared.IPAccessControlListResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
