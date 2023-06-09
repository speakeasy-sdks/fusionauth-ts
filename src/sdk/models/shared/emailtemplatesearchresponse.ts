/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { Expose, Type } from "class-transformer";

/**
 * Email template search response
 */
export class EmailTemplateSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EmailTemplate })
  @Expose({ name: "emailTemplates" })
  @Type(() => EmailTemplate)
  emailTemplates?: EmailTemplate[];

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
