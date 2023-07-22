/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * Import request.
 */
export class ImportRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "encryptionScheme" })
    encryptionScheme?: string;

    /**
     * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventInfo" })
    @Type(() => EventInfo)
    eventInfo?: EventInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "factor" })
    factor?: number;

    @SpeakeasyMetadata({ elemType: User })
    @Expose({ name: "users" })
    @Type(() => User)
    users?: User[];

    @SpeakeasyMetadata()
    @Expose({ name: "validateDbConstraints" })
    validateDbConstraints?: boolean;
}
