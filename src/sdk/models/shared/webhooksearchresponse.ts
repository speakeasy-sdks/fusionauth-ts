/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Expose, Type } from "class-transformer";

/**
 * Webhook search response
 */
export class WebhookSearchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;

    @SpeakeasyMetadata({ elemType: Webhook })
    @Expose({ name: "webhooks" })
    @Type(() => Webhook)
    webhooks?: Webhook[];
}
