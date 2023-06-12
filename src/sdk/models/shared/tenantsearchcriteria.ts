/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Search criteria for Tenants
 */
export class TenantSearchCriteria extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "numberOfResults" })
    numberOfResults?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "orderBy" })
    orderBy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "startRow" })
    startRow?: number;
}
