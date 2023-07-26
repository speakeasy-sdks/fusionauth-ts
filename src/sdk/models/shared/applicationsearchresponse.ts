/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Application } from "./application";
import { Expose, Type } from "class-transformer";

/**
 * Application search response
 */
export class ApplicationSearchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Application })
    @Expose({ name: "applications" })
    @Type(() => Application)
    applications?: Application[];

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}
