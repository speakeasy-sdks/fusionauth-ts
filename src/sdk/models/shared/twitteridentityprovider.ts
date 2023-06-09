/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { IdentityProviderLinkingStrategyEnum } from "./identityproviderlinkingstrategyenum";
import { IdentityProviderTenantConfiguration } from "./identityprovidertenantconfiguration";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { ProviderLambdaConfiguration } from "./providerlambdaconfiguration";
import { TwitterApplicationConfiguration } from "./twitterapplicationconfiguration";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Twitter social login provider.
 */
export class TwitterIdentityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TwitterApplicationConfiguration })
  @Expose({ name: "applicationConfiguration" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, TwitterApplicationConfiguration> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], TwitterApplicationConfiguration);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  applicationConfiguration?: Record<string, TwitterApplicationConfiguration>;

  @SpeakeasyMetadata()
  @Expose({ name: "buttonText" })
  buttonText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "consumerKey" })
  consumerKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "consumerSecret" })
  consumerSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "debug" })
  debug?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "insertInstant" })
  insertInstant?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lambdaConfiguration" })
  @Type(() => ProviderLambdaConfiguration)
  lambdaConfiguration?: ProviderLambdaConfiguration;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateInstant" })
  lastUpdateInstant?: number;

  /**
   * The IdP behavior when no user link has been made yet.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "linkingStrategy" })
  linkingStrategy?: IdentityProviderLinkingStrategyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: IdentityProviderTenantConfiguration })
  @Expose({ name: "tenantConfiguration" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, IdentityProviderTenantConfiguration> = {};
      for (const key in value) {
        obj[key] = objectToClass(
          value[key],
          IdentityProviderTenantConfiguration
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  tenantConfiguration?: Record<string, IdentityProviderTenantConfiguration>;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: IdentityProviderTypeEnum;
}
