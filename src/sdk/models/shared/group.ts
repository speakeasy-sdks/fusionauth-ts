/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationRole } from "./applicationrole";
import { Expose, Transform, Type } from "class-transformer";

export class GroupData extends SpeakeasyBase {}

export class Group extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GroupData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GroupData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GroupData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, GroupData>;

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

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata({ elemType: ApplicationRole })
    @Expose({ name: "roles" })
    @Type(() => ApplicationRole)
    roles?: ApplicationRole[];

    @SpeakeasyMetadata()
    @Expose({ name: "tenantId" })
    tenantId?: string;
}
