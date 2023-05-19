/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientAuthenticationPolicy } from "./clientauthenticationpolicy";
import { LogoutBehavior } from "./logoutbehavior";
import { Oauth2AuthorizedURLValidationPolicy } from "./oauth2authorizedurlvalidationpolicy";
import { ProofKeyForCodeExchangePolicy } from "./proofkeyforcodeexchangepolicy";
import { Expose } from "class-transformer";

export class OAuth2Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "authorizedOriginURLs" })
  authorizedOriginURLs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "authorizedRedirectURLs" })
  authorizedRedirectURLs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "authorizedURLValidationPolicy" })
  authorizedURLValidationPolicy?: Oauth2AuthorizedURLValidationPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "clientAuthenticationPolicy" })
  clientAuthenticationPolicy?: ClientAuthenticationPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "debug" })
  debug?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deviceVerificationURL" })
  deviceVerificationURL?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "enabledGrants" })
  enabledGrants?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "generateRefreshTokens" })
  generateRefreshTokens?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "logoutBehavior" })
  logoutBehavior?: LogoutBehavior;

  @SpeakeasyMetadata()
  @Expose({ name: "logoutURL" })
  logoutURL?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "proofKeyForCodeExchangePolicy" })
  proofKeyForCodeExchangePolicy?: ProofKeyForCodeExchangePolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "requireClientAuthentication" })
  requireClientAuthentication?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "requireRegistration" })
  requireRegistration?: boolean;
}
