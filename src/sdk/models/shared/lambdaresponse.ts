/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Lambda } from "./lambda";
import { Expose, Type } from "class-transformer";

/**
 * Lambda API response object.
 */
export class LambdaResponse extends SpeakeasyBase {
    /**
     * A JavaScript lambda function that is executed during certain events inside FusionAuth.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lambda" })
    @Type(() => Lambda)
    lambda?: Lambda;

    @SpeakeasyMetadata({ elemType: Lambda })
    @Expose({ name: "lambdas" })
    @Type(() => Lambda)
    lambdas?: Lambda[];
}
