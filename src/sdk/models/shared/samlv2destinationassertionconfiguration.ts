/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SAMLv2DestinationAssertionPolicy } from "./samlv2destinationassertionpolicy";
import { Expose } from "class-transformer";

export class SAMLv2DestinationAssertionConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "alternates" })
    alternates?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    policy?: SAMLv2DestinationAssertionPolicy;
}
