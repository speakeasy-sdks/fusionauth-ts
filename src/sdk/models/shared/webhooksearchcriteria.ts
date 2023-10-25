/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Search criteria for webhooks.
 */
export class WebhookSearchCriteria extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "numberOfResults" })
    numberOfResults?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "orderBy" })
    orderBy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "startRow" })
    startRow?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tenantId" })
    tenantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
