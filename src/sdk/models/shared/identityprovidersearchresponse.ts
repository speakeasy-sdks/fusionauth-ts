/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Identity Provider response.
 */
export class IdentityProviderSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "identityProviders" })
  identityProviders?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}