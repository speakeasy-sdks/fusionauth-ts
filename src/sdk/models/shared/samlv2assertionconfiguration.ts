/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SAMLv2DestinationAssertionConfiguration } from "./samlv2destinationassertionconfiguration";
import { Expose, Type } from "class-transformer";

export class SAMLv2AssertionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "destination" })
  @Type(() => SAMLv2DestinationAssertionConfiguration)
  destination?: SAMLv2DestinationAssertionConfiguration;
}
