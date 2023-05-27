/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SMSMessage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "phoneNumber" })
    phoneNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "textMessage" })
    textMessage?: string;
}
