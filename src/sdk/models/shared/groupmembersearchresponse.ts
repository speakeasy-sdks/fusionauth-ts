/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupMember } from "./groupmember";
import { Expose, Type } from "class-transformer";

/**
 * Search response for Group Members
 */
export class GroupMemberSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GroupMember })
  @Expose({ name: "members" })
  @Type(() => GroupMember)
  members?: GroupMember[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
