/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApplicationAccessControlConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "uiIPAccessControlListId" })
  uiIPAccessControlListId?: string;
}
