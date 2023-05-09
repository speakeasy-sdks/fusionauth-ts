/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Location } from "./location";
import { Expose, Type } from "class-transformer";

/**
 * Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).
 */
export class EventInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "deviceDescription" })
  deviceDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "deviceType" })
  deviceType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ipAddress" })
  ipAddress?: string;

  /**
   * Location information. Useful for IP addresses and other displayable data objects.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  @Type(() => Location)
  location?: Location;

  @SpeakeasyMetadata()
  @Expose({ name: "os" })
  os?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "userAgent" })
  userAgent?: string;
}
