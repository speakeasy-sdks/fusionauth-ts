/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserActionReason } from "./useractionreason";
import { Expose, Type } from "class-transformer";

/**
 * User Action Reason API request object.
 */
export class UserActionReasonRequest extends SpeakeasyBase {
    /**
     * Models action reasons.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userActionReason" })
    @Type(() => UserActionReason)
    userActionReason?: UserActionReason;
}
