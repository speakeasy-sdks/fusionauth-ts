/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Group Member Delete Request
 */
export class MemberDeleteRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "memberIds" })
    memberIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "members" })
    members?: string[];
}
