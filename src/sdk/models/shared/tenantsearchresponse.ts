/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Tenant } from "./tenant";
import { Expose, Type } from "class-transformer";

/**
 * Tenant search response
 */
export class TenantSearchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Tenant })
    @Expose({ name: "tenants" })
    @Type(() => Tenant)
    tenants?: Tenant[];

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}
