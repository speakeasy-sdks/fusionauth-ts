/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IPAccessControlEntryAction } from "./ipaccesscontrolentryaction";
import { Expose } from "class-transformer";

export class IPAccessControlEntry extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action?: IPAccessControlEntryAction;

    @SpeakeasyMetadata()
    @Expose({ name: "endIPAddress" })
    endIPAddress?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "startIPAddress" })
    startIPAddress?: string;
}
