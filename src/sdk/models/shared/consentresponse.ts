/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Consent } from "./consent";
import { Expose, Type } from "class-transformer";

/**
 * API response for consent.
 */
export class ConsentResponse extends SpeakeasyBase {
  /**
   * Models a consent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "consent" })
  @Type(() => Consent)
  consent?: Consent;

  @SpeakeasyMetadata({ elemType: Consent })
  @Expose({ name: "consents" })
  @Type(() => Consent)
  consents?: Consent[];
}
