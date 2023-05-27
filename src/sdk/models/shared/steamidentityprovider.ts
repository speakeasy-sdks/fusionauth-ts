/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IdentityProviderLinkingStrategy } from "./identityproviderlinkingstrategy";
import { IdentityProviderTenantConfiguration } from "./identityprovidertenantconfiguration";
import { IdentityProviderType } from "./identityprovidertype";
import { ProviderLambdaConfiguration } from "./providerlambdaconfiguration";
import { SteamAPIMode } from "./steamapimode";
import { SteamApplicationConfiguration } from "./steamapplicationconfiguration";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Steam gaming login provider.
 */
export class SteamIdentityProvider extends SpeakeasyBase {
    /**
     * Steam API modes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiMode" })
    apiMode?: SteamAPIMode;

    @SpeakeasyMetadata({ elemType: SteamApplicationConfiguration })
    @Expose({ name: "applicationConfiguration" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, SteamApplicationConfiguration> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], SteamApplicationConfiguration);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    applicationConfiguration?: Record<string, SteamApplicationConfiguration>;

    @SpeakeasyMetadata()
    @Expose({ name: "buttonText" })
    buttonText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "client_id" })
    clientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: Record<string, Record<string, any>>;

    @SpeakeasyMetadata()
    @Expose({ name: "debug" })
    debug?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insertInstant" })
    insertInstant?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lambdaConfiguration" })
    @Type(() => ProviderLambdaConfiguration)
    lambdaConfiguration?: ProviderLambdaConfiguration;

    /**
     * The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastUpdateInstant" })
    lastUpdateInstant?: number;

    /**
     * The IdP behavior when no user link has been made yet.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linkingStrategy" })
    linkingStrategy?: IdentityProviderLinkingStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope?: string;

    @SpeakeasyMetadata({ elemType: IdentityProviderTenantConfiguration })
    @Expose({ name: "tenantConfiguration" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IdentityProviderTenantConfiguration> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IdentityProviderTenantConfiguration);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    tenantConfiguration?: Record<string, IdentityProviderTenantConfiguration>;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: IdentityProviderType;

    @SpeakeasyMetadata()
    @Expose({ name: "webAPIKey" })
    webAPIKey?: string;
}
