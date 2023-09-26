/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchLambdaWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the lambda to update.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lambdaId" })
    lambdaId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    lambdaRequest?: shared.LambdaRequest;
}

export class PatchLambdaWithIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
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
    lambdaResponse?: shared.LambdaResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
