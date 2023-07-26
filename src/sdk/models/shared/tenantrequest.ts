/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { Tenant } from "./tenant";
import { Expose, Type } from "class-transformer";

export class TenantRequest extends SpeakeasyBase {
    /**
     * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventInfo" })
    @Type(() => EventInfo)
    eventInfo?: EventInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceTenantId" })
    sourceTenantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tenant" })
    @Type(() => Tenant)
    tenant?: Tenant;

    @SpeakeasyMetadata()
    @Expose({ name: "webhookIds" })
    webhookIds?: string[];
}
