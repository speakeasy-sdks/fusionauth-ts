/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveIdentityProviderRequest extends SpeakeasyBase {
  /**
   * The unique Id of the identity provider.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=identityProviderId",
  })
  identityProviderId?: string;

  /**
   * The unique Id of the user in the 3rd party identity provider.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=identityProviderUserId",
  })
  identityProviderUserId?: string;

  /**
   * The unique Id of the FusionAuth user.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=userId",
  })
  userId?: string;
}

export class RetrieveIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  errors?: shared.Errors;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  identityProviderLinkResponse?: shared.IdentityProviderLinkResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
