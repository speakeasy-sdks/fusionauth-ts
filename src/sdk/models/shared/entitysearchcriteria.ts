/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SortField } from "./sortfield";
import { Expose, Type } from "class-transformer";

/**
 * This class is the entity query. It provides a build pattern as well as public fields for use on forms and in actions.
 */
export class EntitySearchCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accurateTotal" })
  accurateTotal?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ids" })
  ids?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ elemType: SortField })
  @Expose({ name: "sortFields" })
  @Type(() => SortField)
  sortFields?: SortField[];
}
