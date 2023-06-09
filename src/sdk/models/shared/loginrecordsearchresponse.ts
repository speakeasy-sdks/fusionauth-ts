/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DisplayableRawLogin } from "./displayablerawlogin";
import { Expose, Type } from "class-transformer";

/**
 * A raw login record response
 */
export class LoginRecordSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DisplayableRawLogin })
  @Expose({ name: "logins" })
  @Type(() => DisplayableRawLogin)
  logins?: DisplayableRawLogin[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
