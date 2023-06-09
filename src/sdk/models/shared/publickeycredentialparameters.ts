/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CoseAlgorithmIdentifierEnum } from "./cosealgorithmidentifierenum";
import { PublicKeyCredentialTypeEnum } from "./publickeycredentialtypeenum";
import { Expose } from "class-transformer";

/**
 * Supply information on credential type and algorithm to the <i>authenticator<i>.
 */
export class PublicKeyCredentialParameters extends SpeakeasyBase {
  /**
   * A number identifying a cryptographic algorithm. Values should be registered with the <a  href="https:www.iana.orgassignmentscosecose.xhtml#algorithms">IANA COSE Algorithms registry<a>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alg" })
  alg?: CoseAlgorithmIdentifierEnum;

  /**
   * Defines valid credential types. This is an extension point in the WebAuthn spec. The only defined value at this time is "public-key"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PublicKeyCredentialTypeEnum;
}
