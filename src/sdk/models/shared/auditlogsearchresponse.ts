/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuditLog } from "./auditlog";
import { Expose, Type } from "class-transformer";

/**
 * Audit log response.
 */
export class AuditLogSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AuditLog })
  @Expose({ name: "auditLogs" })
  @Type(() => AuditLog)
  auditLogs?: AuditLog[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}