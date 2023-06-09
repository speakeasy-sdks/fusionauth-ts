/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * This class is a simple attachment with a byte array, name and MIME type.
 */
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachment" })
  attachment?: Uint8Array;

  @SpeakeasyMetadata()
  @Expose({ name: "mime" })
  mime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
