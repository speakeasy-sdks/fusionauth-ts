/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailPlus } from "./emailplus";
import { Expose, Type } from "class-transformer";

/**
 * Models a consent.
 */
export class Consent extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "consentEmailTemplateId" })
    consentEmailTemplateId?: string;

    /**
     * Models a set of localized Integers that can be stored as JSON.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "countryMinimumAgeForSelfConsent" })
    countryMinimumAgeForSelfConsent?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: Record<string, Record<string, any>>;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultMinimumAgeForSelfConsent" })
    defaultMinimumAgeForSelfConsent?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "emailPlus" })
    @Type(() => EmailPlus)
    emailPlus?: EmailPlus;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

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

    @SpeakeasyMetadata()
    @Expose({ name: "multipleValuesAllowed" })
    multipleValuesAllowed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "values" })
    values?: string[];
}
