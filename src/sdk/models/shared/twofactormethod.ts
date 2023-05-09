/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthenticatorConfiguration } from "./authenticatorconfiguration";
import { Expose, Type } from "class-transformer";

export class TwoFactorMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "authenticator" })
  @Type(() => AuthenticatorConfiguration)
  authenticator?: AuthenticatorConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastUsed" })
  lastUsed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;
}