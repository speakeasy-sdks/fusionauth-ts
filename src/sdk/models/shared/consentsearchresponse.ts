/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Consent } from "./consent";
import { Expose, Type } from "class-transformer";

/**
 * Consent search response
 */
export class ConsentSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Consent })
  @Expose({ name: "consents" })
  @Type(() => Consent)
  consents?: Consent[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
