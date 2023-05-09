/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationMultiFactorTrustPolicyEnum } from "./applicationmultifactortrustpolicyenum";
import { MultiFactorEmailTemplate } from "./multifactoremailtemplate";
import { MultiFactorLoginPolicyEnum } from "./multifactorloginpolicyenum";
import { MultiFactorSMSTemplate } from "./multifactorsmstemplate";
import { Expose, Type } from "class-transformer";

export class ApplicationMultiFactorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  @Type(() => MultiFactorEmailTemplate)
  email?: MultiFactorEmailTemplate;

  @SpeakeasyMetadata()
  @Expose({ name: "loginPolicy" })
  loginPolicy?: MultiFactorLoginPolicyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "sms" })
  @Type(() => MultiFactorSMSTemplate)
  sms?: MultiFactorSMSTemplate;

  @SpeakeasyMetadata()
  @Expose({ name: "trustPolicy" })
  trustPolicy?: ApplicationMultiFactorTrustPolicyEnum;
}