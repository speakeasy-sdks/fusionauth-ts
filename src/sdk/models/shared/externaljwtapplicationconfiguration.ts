/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ExternalJWTApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createRegistration" })
  createRegistration?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;
}
