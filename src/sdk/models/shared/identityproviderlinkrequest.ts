/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { IdentityProviderLink } from "./identityproviderlink";
import { Expose, Type } from "class-transformer";

export class IdentityProviderLinkRequest extends SpeakeasyBase {
  /**
   * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "eventInfo" })
  @Type(() => EventInfo)
  eventInfo?: EventInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "identityProviderLink" })
  @Type(() => IdentityProviderLink)
  identityProviderLink?: IdentityProviderLink;

  @SpeakeasyMetadata()
  @Expose({ name: "pendingIdPLinkId" })
  pendingIdPLinkId?: string;
}
