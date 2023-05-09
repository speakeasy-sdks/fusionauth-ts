/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APIKey } from "./apikey";
import { Expose, Type } from "class-transformer";

/**
 * Authentication key response object.
 */
export class APIKeyResponse extends SpeakeasyBase {
  /**
   * domain POJO to represent AuthenticationKey
   */
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  @Type(() => APIKey)
  apiKey?: APIKey;
}
