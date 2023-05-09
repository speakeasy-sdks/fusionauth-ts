/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An audit log.
 */
export class AuditLog extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "insertInstant" })
  insertInstant?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "insertUser" })
  insertUser?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "newValue" })
  newValue?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "oldValue" })
  oldValue?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}
