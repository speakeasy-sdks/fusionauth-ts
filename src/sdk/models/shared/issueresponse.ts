/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class IssueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;
}
