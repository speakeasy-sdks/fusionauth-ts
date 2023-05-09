/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class JWTVendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "claims" })
  claims?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "keyId" })
  keyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timeToLiveInSeconds" })
  timeToLiveInSeconds?: number;
}
