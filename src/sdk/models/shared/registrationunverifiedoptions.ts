/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UnverifiedBehavior } from "./unverifiedbehavior";
import { Expose } from "class-transformer";

export class RegistrationUnverifiedOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "behavior" })
  behavior?: UnverifiedBehavior;
}
