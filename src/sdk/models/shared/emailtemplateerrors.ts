/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EmailTemplateErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "parseErrors" })
    parseErrors?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "renderErrors" })
    renderErrors?: Record<string, string>;
}
