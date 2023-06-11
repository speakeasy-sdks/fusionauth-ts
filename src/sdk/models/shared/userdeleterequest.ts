/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { Expose, Type } from "class-transformer";

/**
 * User API delete request object.
 */
export class UserDeleteRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dryRun" })
    dryRun?: boolean;

    /**
     * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventInfo" })
    @Type(() => EventInfo)
    eventInfo?: EventInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "hardDelete" })
    hardDelete?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "queryString" })
    queryString?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}
