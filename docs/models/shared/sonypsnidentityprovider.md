# SonyPSNIdentityProvider

SonyPSN gaming login provider.


## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `applicationConfiguration`                                                                                        | Record<string, [SonyPSNApplicationConfiguration](../../models/shared/sonypsnapplicationconfiguration.md)>         | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `buttonText`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `clientId`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `clientSecret`                                                                                                    | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `data`                                                                                                            | Record<string, [SonyPSNIdentityProviderData](../../models/shared/sonypsnidentityproviderdata.md)>                 | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `debug`                                                                                                           | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `insertInstant`                                                                                                   | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.       | 1659380719000                                                                                                     |
| `lambdaConfiguration`                                                                                             | [ProviderLambdaConfiguration](../../models/shared/providerlambdaconfiguration.md)                                 | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `lastUpdateInstant`                                                                                               | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.       | 1659380719000                                                                                                     |
| `linkingStrategy`                                                                                                 | [IdentityProviderLinkingStrategy](../../models/shared/identityproviderlinkingstrategy.md)                         | :heavy_minus_sign:                                                                                                | The IdP behavior when no user link has been made yet.                                                             |                                                                                                                   |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `scope`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `tenantConfiguration`                                                                                             | Record<string, [IdentityProviderTenantConfiguration](../../models/shared/identityprovidertenantconfiguration.md)> | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `type`                                                                                                            | [IdentityProviderType](../../models/shared/identityprovidertype.md)                                               | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |