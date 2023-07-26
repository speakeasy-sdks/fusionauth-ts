/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserComment } from "./usercomment";
import { Expose, Type } from "class-transformer";

/**
 * User comment search response
 */
export class UserCommentSearchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;

    @SpeakeasyMetadata({ elemType: UserComment })
    @Expose({ name: "userComments" })
    @Type(() => UserComment)
    userComments?: UserComment[];
}
