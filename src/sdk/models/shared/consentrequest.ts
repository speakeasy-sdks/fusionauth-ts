/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Consent } from "./consent";
import { Expose, Type } from "class-transformer";

/**
 * API request for User consent types.
 */
export class ConsentRequest extends SpeakeasyBase {
  /**
   * Models a consent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "consent" })
  @Type(() => Consent)
  consent?: Consent;
}