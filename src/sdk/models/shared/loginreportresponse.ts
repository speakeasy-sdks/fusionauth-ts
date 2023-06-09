/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Count } from "./count";
import { Expose, Type } from "class-transformer";

/**
 * Response for the login report.
 */
export class LoginReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Count })
  @Expose({ name: "hourlyCounts" })
  @Type(() => Count)
  hourlyCounts?: Count[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
