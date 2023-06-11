/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FamilyMember } from "./familymember";
import { Expose, Type } from "class-transformer";

/**
 * API request for managing families and members.
 */
export class FamilyRequest extends SpeakeasyBase {
    /**
     * Models a single family member.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "familyMember" })
    @Type(() => FamilyMember)
    familyMember?: FamilyMember;
}
