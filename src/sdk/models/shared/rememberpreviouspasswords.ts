/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RememberPreviousPasswords extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;
}
