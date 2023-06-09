/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { Expose, Type } from "class-transformer";

export class TwoFactorDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  /**
   * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "eventInfo" })
  @Type(() => EventInfo)
  eventInfo?: EventInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "methodId" })
  methodId?: string;
}
