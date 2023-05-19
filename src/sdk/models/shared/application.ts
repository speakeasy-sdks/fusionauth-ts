/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationAccessControlConfiguration } from "./applicationaccesscontrolconfiguration";
import { ApplicationEmailConfiguration } from "./applicationemailconfiguration";
import { ApplicationExternalIdentifierConfiguration } from "./applicationexternalidentifierconfiguration";
import { ApplicationFormConfiguration } from "./applicationformconfiguration";
import { ApplicationMultiFactorConfiguration } from "./applicationmultifactorconfiguration";
import { ApplicationRegistrationDeletePolicy } from "./applicationregistrationdeletepolicy";
import { ApplicationRole } from "./applicationrole";
import { ApplicationWebAuthnConfiguration } from "./applicationwebauthnconfiguration";
import { AuthenticationTokenConfiguration } from "./authenticationtokenconfiguration";
import { CleanSpeakConfiguration } from "./cleanspeakconfiguration";
import { JWTConfiguration } from "./jwtconfiguration";
import { LambdaConfiguration } from "./lambdaconfiguration";
import { LoginConfiguration } from "./loginconfiguration";
import { OAuth2Configuration } from "./oauth2configuration";
import { ObjectState } from "./objectstate";
import { PasswordlessConfiguration } from "./passwordlessconfiguration";
import { RegistrationConfiguration } from "./registrationconfiguration";
import { RegistrationUnverifiedOptions } from "./registrationunverifiedoptions";
import { SAMLv2Configuration } from "./samlv2configuration";
import { VerificationStrategy } from "./verificationstrategy";
import { Expose, Type } from "class-transformer";

export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accessControlConfiguration" })
  @Type(() => ApplicationAccessControlConfiguration)
  accessControlConfiguration?: ApplicationAccessControlConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "authenticationTokenConfiguration" })
  @Type(() => AuthenticationTokenConfiguration)
  authenticationTokenConfiguration?: AuthenticationTokenConfiguration;

  /**
   * CleanSpeak configuration at the system and application level.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cleanSpeakConfiguration" })
  @Type(() => CleanSpeakConfiguration)
  cleanSpeakConfiguration?: CleanSpeakConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "emailConfiguration" })
  @Type(() => ApplicationEmailConfiguration)
  emailConfiguration?: ApplicationEmailConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "externalIdentifierConfiguration" })
  @Type(() => ApplicationExternalIdentifierConfiguration)
  externalIdentifierConfiguration?: ApplicationExternalIdentifierConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "formConfiguration" })
  @Type(() => ApplicationFormConfiguration)
  formConfiguration?: ApplicationFormConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "insertInstant" })
  insertInstant?: number;

  /**
   * JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jwtConfiguration" })
  @Type(() => JWTConfiguration)
  jwtConfiguration?: JWTConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "lambdaConfiguration" })
  @Type(() => LambdaConfiguration)
  lambdaConfiguration?: LambdaConfiguration;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateInstant" })
  lastUpdateInstant?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "loginConfiguration" })
  @Type(() => LoginConfiguration)
  loginConfiguration?: LoginConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "multiFactorConfiguration" })
  @Type(() => ApplicationMultiFactorConfiguration)
  multiFactorConfiguration?: ApplicationMultiFactorConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "oauthConfiguration" })
  @Type(() => OAuth2Configuration)
  oauthConfiguration?: OAuth2Configuration;

  @SpeakeasyMetadata()
  @Expose({ name: "passwordlessConfiguration" })
  @Type(() => PasswordlessConfiguration)
  passwordlessConfiguration?: PasswordlessConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "registrationConfiguration" })
  @Type(() => RegistrationConfiguration)
  registrationConfiguration?: RegistrationConfiguration;

  /**
   * A Application-level policy for deleting Users.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationDeletePolicy" })
  @Type(() => ApplicationRegistrationDeletePolicy)
  registrationDeletePolicy?: ApplicationRegistrationDeletePolicy;

  @SpeakeasyMetadata({ elemType: ApplicationRole })
  @Expose({ name: "roles" })
  @Type(() => ApplicationRole)
  roles?: ApplicationRole[];

  @SpeakeasyMetadata()
  @Expose({ name: "samlv2Configuration" })
  @Type(() => SAMLv2Configuration)
  samlv2Configuration?: SAMLv2Configuration;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: ObjectState;

  @SpeakeasyMetadata()
  @Expose({ name: "tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "themeId" })
  themeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unverified" })
  @Type(() => RegistrationUnverifiedOptions)
  unverified?: RegistrationUnverifiedOptions;

  @SpeakeasyMetadata()
  @Expose({ name: "verificationEmailTemplateId" })
  verificationEmailTemplateId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verificationStrategy" })
  verificationStrategy?: VerificationStrategy;

  @SpeakeasyMetadata()
  @Expose({ name: "verifyRegistration" })
  verifyRegistration?: boolean;

  /**
   * Application-level configuration for WebAuthn
   */
  @SpeakeasyMetadata()
  @Expose({ name: "webAuthnConfiguration" })
  @Type(() => ApplicationWebAuthnConfiguration)
  webAuthnConfiguration?: ApplicationWebAuthnConfiguration;
}
