/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UsernameModeration } from "./usernamemoderation";
import { Expose, Type } from "class-transformer";

/**
 * CleanSpeak configuration at the system and application level.
 */
export class CleanSpeakConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "applicationIds" })
  applicationIds?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "usernameModeration" })
  @Type(() => UsernameModeration)
  usernameModeration?: UsernameModeration;
}