/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserAction } from "./useraction";
import { Expose, Type } from "class-transformer";

/**
 * User Action API response object.
 */
export class UserActionResponse extends SpeakeasyBase {
  /**
   * An action that can be executed on a user (discipline or reward potentially).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userAction" })
  @Type(() => UserAction)
  userAction?: UserAction;

  @SpeakeasyMetadata({ elemType: UserAction })
  @Expose({ name: "userActions" })
  @Type(() => UserAction)
  userActions?: UserAction[];
}
