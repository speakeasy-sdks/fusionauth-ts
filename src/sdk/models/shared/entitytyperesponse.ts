/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EntityType } from "./entitytype";
import { EntityTypePermission } from "./entitytypepermission";
import { Expose, Type } from "class-transformer";

/**
 * Entity Type API response object.
 */
export class EntityTypeResponse extends SpeakeasyBase {
  /**
   * Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "entityType" })
  @Type(() => EntityType)
  entityType?: EntityType;

  @SpeakeasyMetadata({ elemType: EntityType })
  @Expose({ name: "entityTypes" })
  @Type(() => EntityType)
  entityTypes?: EntityType[];

  /**
   * Models a specific entity type permission. This permission can be granted to users or other entities.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "permission" })
  @Type(() => EntityTypePermission)
  permission?: EntityTypePermission;
}
