/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteEntityTypePermissionWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the entityType the the permission belongs to.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityTypeId" })
    entityTypeId: string;

    /**
     * The Id of the permission to delete.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" })
    permissionId: string;
}

export class DeleteEntityTypePermissionWithIdResponse extends SpeakeasyBase {
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
