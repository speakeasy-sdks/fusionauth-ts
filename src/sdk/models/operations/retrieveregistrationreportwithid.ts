/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetrieveRegistrationReportWithIdRequest extends SpeakeasyBase {
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

export class RetrieveRegistrationReportWithIdResponse extends SpeakeasyBase {
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
    registrationReportResponse?: shared.RegistrationReportResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
