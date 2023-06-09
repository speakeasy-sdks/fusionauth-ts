/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LambdaTypeEnum } from "./lambdatypeenum";
import { Expose } from "class-transformer";

/**
 * Search criteria for Lambdas
 */
export class LambdaSearchCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "startRow" })
  startRow?: number;

  /**
   * The types of lambdas that indicate how they are invoked by FusionAuth.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: LambdaTypeEnum;
}
