/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WebAuthnWorkflowEnum } from "./webauthnworkflowenum";
import { Expose } from "class-transformer";

/**
 * API request to start a WebAuthn authentication ceremony
 */
export class WebAuthnStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "credentialId" })
  credentialId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "loginId" })
  loginId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  @Expose({ name: "userId" })
  userId?: string;

  /**
   * Identifies the WebAuthn workflow. This will affect the parameters used for credential creation  and request based on the Tenant configuration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow" })
  workflow?: WebAuthnWorkflowEnum;
}