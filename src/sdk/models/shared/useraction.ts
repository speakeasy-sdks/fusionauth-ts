/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LocalizedStrings } from "./localizedstrings";
import { TransactionType } from "./transactiontype";
import { UserActionOption } from "./useractionoption";
import { Expose, Type } from "class-transformer";

/**
 * An action that can be executed on a user (discipline or reward potentially).
 */
export class UserAction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "cancelEmailTemplateId" })
    cancelEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "endEmailTemplateId" })
    endEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "includeEmailInEventJSON" })
    includeEmailInEventJSON?: boolean;

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

    /**
     * Models a set of localized Strings that can be stored as JSON.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "localizedNames" })
    @Type(() => LocalizedStrings)
    localizedNames?: LocalizedStrings;

    @SpeakeasyMetadata()
    @Expose({ name: "modifyEmailTemplateId" })
    modifyEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata({ elemType: UserActionOption })
    @Expose({ name: "options" })
    @Type(() => UserActionOption)
    options?: UserActionOption[];

    @SpeakeasyMetadata()
    @Expose({ name: "preventLogin" })
    preventLogin?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sendEndEvent" })
    sendEndEvent?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "startEmailTemplateId" })
    startEmailTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "temporal" })
    temporal?: boolean;

    /**
     * The transaction types for Webhooks and other event systems within FusionAuth.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionType" })
    transactionType?: TransactionType;

    @SpeakeasyMetadata()
    @Expose({ name: "userEmailingEnabled" })
    userEmailingEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "userNotificationsEnabled" })
    userNotificationsEnabled?: boolean;
}
