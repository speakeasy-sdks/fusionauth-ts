/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserActionLog } from "./useractionlog";
import { Expose, Type } from "class-transformer";

/**
 * The user action response object.
 */
export class ActionResponse extends SpeakeasyBase {
    /**
     * A log for an action that was taken on a User.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    @Type(() => UserActionLog)
    action?: UserActionLog;

    @SpeakeasyMetadata({ elemType: UserActionLog })
    @Expose({ name: "actions" })
    @Type(() => UserActionLog)
    actions?: UserActionLog[];
}
