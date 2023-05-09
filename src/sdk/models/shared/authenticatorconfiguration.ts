/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TOTPAlgorithmEnum } from "./totpalgorithmenum";
import { Expose } from "class-transformer";

export class AuthenticatorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "algorithm" })
  algorithm?: TOTPAlgorithmEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "codeLength" })
  codeLength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeStep" })
  timeStep?: number;
}
