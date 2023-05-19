/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleIdentityProviderProperties } from "./googleidentityproviderproperties";
import { IdentityProviderLoginMethod } from "./identityproviderloginmethod";
import { Expose, Type } from "class-transformer";

export class GoogleApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "buttonText" })
  buttonText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createRegistration" })
  createRegistration?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "loginMethod" })
  loginMethod?: IdentityProviderLoginMethod;

  /**
   * Google social login provider parameters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  @Type(() => GoogleIdentityProviderProperties)
  properties?: GoogleIdentityProviderProperties;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: string;
}
