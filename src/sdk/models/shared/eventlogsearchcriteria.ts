/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventLogTypeEnum } from "./eventlogtypeenum";
import { Expose } from "class-transformer";

/**
 * Search criteria for the event log.
 */
export class EventLogSearchCriteria extends SpeakeasyBase {
  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end" })
  end?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "orderBy" })
  orderBy?: string;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start" })
  start?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "startRow" })
  startRow?: number;

  /**
   * Event Log Type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: EventLogTypeEnum;
}
