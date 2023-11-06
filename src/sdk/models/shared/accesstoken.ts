/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TokenType } from "./tokentype";
import { Expose } from "class-transformer";

export class AccessToken extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expires_in" })
    expiresIn?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id_token" })
    idToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token" })
    refreshToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token_id" })
    refreshTokenId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope?: string;

    /**
     * <ul>  <li>Bearer Token type as defined by <a href="https:tools.ietf.orghtmlrfc6750">RFC 6750<a>.<li>  <li>MAC Token type as referenced by <a href="https:tools.ietf.orghtmlrfc6749">RFC 6749<a> and  <a href="https:tools.ietf.orghtmldraft-ietf-oauth-v2-http-mac-05">  Draft RFC on OAuth 2.0 Message Authentication Code (MAC) Tokens<a>  <li>  <ul>
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_type" })
    tokenType?: TokenType;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
