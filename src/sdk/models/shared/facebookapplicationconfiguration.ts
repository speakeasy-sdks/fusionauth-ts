/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdentityProviderLoginMethodEnum } from "./identityproviderloginmethodenum";
import { Expose } from "class-transformer";

export class FacebookApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "appId" })
  appId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "buttonText" })
  buttonText?: string;

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
  @Expose({ name: "fields" })
  fields?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "loginMethod" })
  loginMethod?: IdentityProviderLoginMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "permissions" })
  permissions?: string;
}
