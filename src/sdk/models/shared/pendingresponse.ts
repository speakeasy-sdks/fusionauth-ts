/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class PendingResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: User })
    @Expose({ name: "users" })
    @Type(() => User)
    users?: User[];
}
