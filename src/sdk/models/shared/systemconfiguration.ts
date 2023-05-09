/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuditLogConfiguration } from "./auditlogconfiguration";
import { CORSConfiguration } from "./corsconfiguration";
import { EventLogConfiguration } from "./eventlogconfiguration";
import { LoginRecordConfiguration } from "./loginrecordconfiguration";
import { UIConfiguration } from "./uiconfiguration";
import { Expose, Type } from "class-transformer";

export class SystemConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auditLogConfiguration" })
  @Type(() => AuditLogConfiguration)
  auditLogConfiguration?: AuditLogConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "corsConfiguration" })
  @Type(() => CORSConfiguration)
  corsConfiguration?: CORSConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "eventLogConfiguration" })
  @Type(() => EventLogConfiguration)
  eventLogConfiguration?: EventLogConfiguration;

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

  @SpeakeasyMetadata()
  @Expose({ name: "loginRecordConfiguration" })
  @Type(() => LoginRecordConfiguration)
  loginRecordConfiguration?: LoginRecordConfiguration;

  /**
   * Timezone Identifier
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportTimezone" })
  reportTimezone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uiConfiguration" })
  @Type(() => UIConfiguration)
  uiConfiguration?: UIConfiguration;
}
