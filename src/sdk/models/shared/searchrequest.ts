/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserSearchCriteria } from "./usersearchcriteria";
import { Expose, Type } from "class-transformer";

/**
 * Search API request.
 */
export class SearchRequest extends SpeakeasyBase {
  /**
   * This class is the user query. It provides a build pattern as well as public fields for use on forms and in actions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "search" })
  @Type(() => UserSearchCriteria)
  search?: UserSearchCriteria;
}