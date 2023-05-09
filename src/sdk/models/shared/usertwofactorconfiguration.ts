/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TwoFactorMethod } from "./twofactormethod";
import { Expose, Type } from "class-transformer";

export class UserTwoFactorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TwoFactorMethod })
  @Expose({ name: "methods" })
  @Type(() => TwoFactorMethod)
  methods?: TwoFactorMethod[];

  @SpeakeasyMetadata()
  @Expose({ name: "recoveryCodes" })
  recoveryCodes?: string[];
}
