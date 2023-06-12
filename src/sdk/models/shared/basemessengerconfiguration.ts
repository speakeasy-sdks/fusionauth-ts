/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MessengerType } from "./messengertype";
import { Expose, Transform } from "class-transformer";

export class BaseMessengerConfigurationData extends SpeakeasyBase {}

/**
 * Do not require a setter for 'type', it is defined by the concrete class and is not mutable
 */
export class BaseMessengerConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BaseMessengerConfigurationData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, BaseMessengerConfigurationData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], BaseMessengerConfigurationData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, BaseMessengerConfigurationData>;

    @SpeakeasyMetadata()
    @Expose({ name: "debug" })
    debug?: boolean;

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

    @SpeakeasyMetadata()
    @Expose({ name: "transport" })
    transport?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: MessengerType;
}
