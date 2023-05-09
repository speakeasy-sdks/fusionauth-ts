/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FormField } from "./formfield";
import { Expose, Type } from "class-transformer";

/**
 * Form field response.
 */
export class FormFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  @Type(() => FormField)
  field?: FormField;

  @SpeakeasyMetadata({ elemType: FormField })
  @Expose({ name: "fields" })
  @Type(() => FormField)
  fields?: FormField[];
}
