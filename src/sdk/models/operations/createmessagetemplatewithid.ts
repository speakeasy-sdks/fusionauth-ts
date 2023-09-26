/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateMessageTemplateWithIdRequest extends SpeakeasyBase {
    /**
     * The Id for the template. If not provided a secure random UUID will be generated.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageTemplateId" })
    messageTemplateId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    messageTemplateRequest?: shared.MessageTemplateRequest;
}

export class CreateMessageTemplateWithIdResponse extends SpeakeasyBase {
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
    messageTemplateResponse?: shared.MessageTemplateResponse;

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
