/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { Expose } from "class-transformer";

/**
 * Search criteria for Identity Providers.
 */
export class IdentityProviderSearchCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

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

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: IdentityProviderTypeEnum;
}
