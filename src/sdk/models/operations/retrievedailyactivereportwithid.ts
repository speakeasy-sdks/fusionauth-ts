/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveDailyActiveReportWithIdRequest extends SpeakeasyBase {
    /**
     * The application id.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
    applicationId?: string;

    /**
     * The end instant as UTC milliseconds since Epoch.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
    end?: string;

    /**
     * The start instant as UTC milliseconds since Epoch.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
    start?: string;
}

export class RetrieveDailyActiveReportWithIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    dailyActiveUserReportResponse?: shared.DailyActiveUserReportResponse;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    errors?: shared.Errors;

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
