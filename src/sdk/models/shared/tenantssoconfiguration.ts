/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TenantSSOConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deviceTrustTimeToLiveInSeconds" })
  deviceTrustTimeToLiveInSeconds?: number;
}