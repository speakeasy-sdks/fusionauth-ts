/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LoginRecordSearchCriteria extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end" })
    end?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "numberOfResults" })
    numberOfResults?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "orderBy" })
    orderBy?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start" })
    start?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "startRow" })
    startRow?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
