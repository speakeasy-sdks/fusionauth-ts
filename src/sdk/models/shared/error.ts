/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ErrorData extends SpeakeasyBase {}

/**
 * Defines an error.
 */
export class ErrorT extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    @SpeakeasyMetadata({ elemType: ErrorData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ErrorData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ErrorData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, ErrorData>;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}
