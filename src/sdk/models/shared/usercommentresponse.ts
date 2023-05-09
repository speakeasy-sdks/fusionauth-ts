/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserComment } from "./usercomment";
import { Expose, Type } from "class-transformer";

/**
 * User Comment Response
 */
export class UserCommentResponse extends SpeakeasyBase {
  /**
   * A log for an event that happened to a User.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userComment" })
  @Type(() => UserComment)
  userComment?: UserComment;

  @SpeakeasyMetadata({ elemType: UserComment })
  @Expose({ name: "userComments" })
  @Type(() => UserComment)
  userComments?: UserComment[];
}