/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An email address.
 */
export class EmailAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  address?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "display" })
  display?: string;
}
