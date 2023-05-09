/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetaData } from "./metadata";
import { Expose, Type } from "class-transformer";

/**
 * Login API request object used for login to third-party systems (i.e. Login with Facebook).
 */
export class IdentityProviderLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "encodedJWT" })
  encodedJWT?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identityProviderId" })
  identityProviderId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metaData" })
  @Type(() => MetaData)
  metaData?: MetaData;

  @SpeakeasyMetadata()
  @Expose({ name: "newDevice" })
  newDevice?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "noJWT" })
  noJWT?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "noLink" })
  noLink?: boolean;
}