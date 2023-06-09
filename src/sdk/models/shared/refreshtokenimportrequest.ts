/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RefreshToken } from "./refreshtoken";
import { Expose, Type } from "class-transformer";

/**
 * Refresh Token Import request.
 */
export class RefreshTokenImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RefreshToken })
  @Expose({ name: "refreshTokens" })
  @Type(() => RefreshToken)
  refreshTokens?: RefreshToken[];

  @SpeakeasyMetadata()
  @Expose({ name: "validateDbConstraints" })
  validateDbConstraints?: boolean;
}
