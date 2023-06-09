/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Models action reasons.
 */
export class UserActionReason extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "insertInstant" })
  insertInstant?: number;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateInstant" })
  lastUpdateInstant?: number;

  /**
   * Models a set of localized Strings that can be stored as JSON.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "localizedTexts" })
  localizedTexts?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}
