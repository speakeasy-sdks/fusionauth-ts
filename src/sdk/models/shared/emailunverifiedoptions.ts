/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UnverifiedBehaviorEnum } from "./unverifiedbehaviorenum";
import { Expose } from "class-transformer";

export class EmailUnverifiedOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allowEmailChangeWhenGated" })
  allowEmailChangeWhenGated?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "behavior" })
  behavior?: UnverifiedBehaviorEnum;
}
