/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OAuth2Configuration } from "./oauth2configuration";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class OAuthConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "httpSessionMaxInactiveInterval" })
  httpSessionMaxInactiveInterval?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logoutURL" })
  logoutURL?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "oauthConfiguration" })
  @Type(() => OAuth2Configuration)
  oauthConfiguration?: OAuth2Configuration;
}
