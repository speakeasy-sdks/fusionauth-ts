/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TOTPAlgorithm } from "./totpalgorithm";
import { Expose } from "class-transformer";

export class AuthenticatorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "algorithm" })
  algorithm?: TOTPAlgorithm;

  @SpeakeasyMetadata()
  @Expose({ name: "codeLength" })
  codeLength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeStep" })
  timeStep?: number;
}
