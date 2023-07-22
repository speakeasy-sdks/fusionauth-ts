/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ExternalJWTApplicationConfigurationData extends SpeakeasyBase {}

export class ExternalJWTApplicationConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createRegistration" })
    createRegistration?: boolean;

    @SpeakeasyMetadata({ elemType: ExternalJWTApplicationConfigurationData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ExternalJWTApplicationConfigurationData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ExternalJWTApplicationConfigurationData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, ExternalJWTApplicationConfigurationData>;
}
