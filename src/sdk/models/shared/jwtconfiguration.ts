/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RefreshTokenExpirationPolicy } from "./refreshtokenexpirationpolicy";
import { RefreshTokenRevocationPolicy } from "./refreshtokenrevocationpolicy";
import { RefreshTokenUsagePolicy } from "./refreshtokenusagepolicy";
import { Expose, Type } from "class-transformer";

/**
 * JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>.
 */
export class JWTConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accessTokenKeyId" })
  accessTokenKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "idTokenKeyId" })
  idTokenKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshTokenExpirationPolicy" })
  refreshTokenExpirationPolicy?: RefreshTokenExpirationPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshTokenRevocationPolicy" })
  @Type(() => RefreshTokenRevocationPolicy)
  refreshTokenRevocationPolicy?: RefreshTokenRevocationPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshTokenTimeToLiveInMinutes" })
  refreshTokenTimeToLiveInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "refreshTokenUsagePolicy" })
  refreshTokenUsagePolicy?: RefreshTokenUsagePolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "timeToLiveInSeconds" })
  timeToLiveInSeconds?: number;
}
