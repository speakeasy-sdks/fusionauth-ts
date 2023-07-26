/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Jwt } from "./jwt";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ValidateResponse extends SpeakeasyBase {
    /**
     * JSON Web Token (JWT) as defined by RFC 7519.  <pre>  From RFC 7519 Section 1. Introduction:     The suggested pronunciation of JWT is the same as the English word "jot".  <pre>  The JWT is not Thread-Safe and should not be re-used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "jwt" })
    @Type(() => Jwt)
    jwt?: Jwt;
}
