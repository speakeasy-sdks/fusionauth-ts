# IdentityProviderLoginRequest

Login API request object used for login to third-party systems (i.e. Login with Facebook).


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `applicationId`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `data`                                      | Record<string, *string*>                    | :heavy_minus_sign:                          | N/A                                         |
| `encodedJWT`                                | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `identityProviderId`                        | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `ipAddress`                                 | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `metaData`                                  | [MetaData](../../models/shared/metadata.md) | :heavy_minus_sign:                          | N/A                                         |
| `newDevice`                                 | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         |
| `noJWT`                                     | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         |
| `noLink`                                    | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         |