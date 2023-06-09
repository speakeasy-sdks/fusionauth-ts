/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains the output for the {@code credProps} extension
 */
export class CredentialPropertiesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rk" })
  rk?: boolean;
}
