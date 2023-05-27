/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Templates } from "./templates";
import { Expose, Type } from "class-transformer";

export class Theme extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: Record<string, Record<string, any>>;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultMessages" })
    defaultMessages?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insertInstant" })
    insertInstant?: number;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastUpdateInstant" })
    lastUpdateInstant?: number;

    /**
     * Models a set of localized Strings that can be stored as JSON.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "localizedMessages" })
    localizedMessages?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "stylesheet" })
    stylesheet?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "templates" })
    @Type(() => Templates)
    templates?: Templates;
}
