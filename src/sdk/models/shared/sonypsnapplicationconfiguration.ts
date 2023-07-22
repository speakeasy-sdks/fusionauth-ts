/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class SonyPSNApplicationConfigurationData extends SpeakeasyBase {}

export class SonyPSNApplicationConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "buttonText" })
    buttonText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client_id" })
    clientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client_secret" })
    clientSecret?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createRegistration" })
    createRegistration?: boolean;

    @SpeakeasyMetadata({ elemType: SonyPSNApplicationConfigurationData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, SonyPSNApplicationConfigurationData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], SonyPSNApplicationConfigurationData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, SonyPSNApplicationConfigurationData>;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope?: string;
}
