/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Form } from "./form";
import { Expose, Type } from "class-transformer";

/**
 * Form response.
 */
export class FormRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "form" })
    @Type(() => Form)
    form?: Form;
}
