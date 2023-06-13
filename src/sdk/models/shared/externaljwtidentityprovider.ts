/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExternalJWTApplicationConfiguration } from "./externaljwtapplicationconfiguration";
import { IdentityProviderLinkingStrategy } from "./identityproviderlinkingstrategy";
import { IdentityProviderOauth2Configuration } from "./identityprovideroauth2configuration";
import { IdentityProviderTenantConfiguration } from "./identityprovidertenantconfiguration";
import { IdentityProviderType } from "./identityprovidertype";
import { ProviderLambdaConfiguration } from "./providerlambdaconfiguration";
import { Expose, Transform, Type } from "class-transformer";

export class ExternalJWTIdentityProviderData extends SpeakeasyBase {}

/**
 * External JWT-only identity provider.
 */
export class ExternalJWTIdentityProvider extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ExternalJWTApplicationConfiguration })
    @Expose({ name: "applicationConfiguration" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ExternalJWTApplicationConfiguration> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ExternalJWTApplicationConfiguration);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    applicationConfiguration?: Record<string, ExternalJWTApplicationConfiguration>;

    @SpeakeasyMetadata()
    @Expose({ name: "claimMap" })
    claimMap?: Record<string, string>;

    @SpeakeasyMetadata({ elemType: ExternalJWTIdentityProviderData })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ExternalJWTIdentityProviderData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ExternalJWTIdentityProviderData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, ExternalJWTIdentityProviderData>;

    @SpeakeasyMetadata()
    @Expose({ name: "debug" })
    debug?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultKeyId" })
    defaultKeyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "domains" })
    domains?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "headerKeyParameter" })
    headerKeyParameter?: string;

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
    @Expose({ name: "oauth2" })
    @Type(() => IdentityProviderOauth2Configuration)
    oauth2?: IdentityProviderOauth2Configuration;

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
    @Expose({ name: "uniqueIdentityClaim" })
    uniqueIdentityClaim?: string;
}
