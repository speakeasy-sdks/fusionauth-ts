/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContentStatusEnum } from "./contentstatusenum";
import { Expose } from "class-transformer";

/**
 * User registration information for a single application.
 */
export class UserRegistration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "authenticationToken" })
  authenticationToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "cleanSpeakId" })
  cleanSpeakId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

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
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastLoginInstant" })
  lastLoginInstant?: number;

  /**
   * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdateInstant" })
  lastUpdateInstant?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "preferredLanguages" })
  preferredLanguages?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "roles" })
  roles?: any[];

  /**
   * Timezone Identifier
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tokens" })
  tokens?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username?: string;

  /**
   * Status for content like usernames, profile attributes, etc.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "usernameStatus" })
  usernameStatus?: ContentStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "verified" })
  verified?: boolean;
}
