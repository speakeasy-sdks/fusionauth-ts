/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FormControl } from "./formcontrol";
import { FormDataType } from "./formdatatype";
import { FormFieldValidator } from "./formfieldvalidator";
import { Expose, Type } from "class-transformer";

export class FormField extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "confirm" })
    confirm?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "consentId" })
    consentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "control" })
    control?: FormControl;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: Record<string, Record<string, any>>;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insertInstant" })
    insertInstant?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastUpdateInstant" })
    lastUpdateInstant?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "options" })
    options?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: FormDataType;

    @SpeakeasyMetadata()
    @Expose({ name: "validator" })
    @Type(() => FormFieldValidator)
    validator?: FormFieldValidator;
}
