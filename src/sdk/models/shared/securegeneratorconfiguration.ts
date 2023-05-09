/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SecureGeneratorTypeEnum } from "./securegeneratortypeenum";
import { Expose } from "class-transformer";

export class SecureGeneratorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "length" })
  length?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SecureGeneratorTypeEnum;
}