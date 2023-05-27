/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveMessageTemplateWithIdRequest extends SpeakeasyBase {
    /**
     * The Id of the message template.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageTemplateId" })
    messageTemplateId: string;
}

export class RetrieveMessageTemplateWithIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    messageTemplateResponse?: shared.MessageTemplateResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
