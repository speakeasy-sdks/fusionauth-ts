/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class TwitterApplicationConfigurationData extends SpeakeasyBase {}

export class TwitterApplicationConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "buttonText" })
    buttonText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "consumerKey" })
    consumerKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "consumerSecret" })
    consumerSecret?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createRegistration" })
    createRegistration?: boolean;

    @SpeakeasyMetadata({ elemType: TwitterApplicationConfigurationData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, TwitterApplicationConfigurationData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], TwitterApplicationConfigurationData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, TwitterApplicationConfigurationData>;
}
