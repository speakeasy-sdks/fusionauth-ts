/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationMultiFactorTrustPolicy } from "./applicationmultifactortrustpolicy";
import { MultiFactorEmailTemplate } from "./multifactoremailtemplate";
import { MultiFactorLoginPolicy } from "./multifactorloginpolicy";
import { MultiFactorSMSTemplate } from "./multifactorsmstemplate";
import { Expose, Type } from "class-transformer";

export class ApplicationMultiFactorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  @Type(() => MultiFactorEmailTemplate)
  email?: MultiFactorEmailTemplate;

  @SpeakeasyMetadata()
  @Expose({ name: "loginPolicy" })
  loginPolicy?: MultiFactorLoginPolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "sms" })
  @Type(() => MultiFactorSMSTemplate)
  sms?: MultiFactorSMSTemplate;

  @SpeakeasyMetadata()
  @Expose({ name: "trustPolicy" })
  trustPolicy?: ApplicationMultiFactorTrustPolicy;
}
