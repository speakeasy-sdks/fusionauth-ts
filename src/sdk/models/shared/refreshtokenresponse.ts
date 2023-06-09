/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RefreshToken } from "./refreshtoken";
import { Expose, Type } from "class-transformer";

/**
 * API response for retrieving Refresh Tokens
 */
export class RefreshTokenResponse extends SpeakeasyBase {
  /**
   * Models a JWT Refresh Token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "refreshToken" })
  @Type(() => RefreshToken)
  refreshToken?: RefreshToken;

  @SpeakeasyMetadata({ elemType: RefreshToken })
  @Expose({ name: "refreshTokens" })
  @Type(() => RefreshToken)
  refreshTokens?: RefreshToken[];
}
