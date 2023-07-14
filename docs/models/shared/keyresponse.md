# KeyResponse

Key API response object.


## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                              | [Key](../../models/shared/key.md)                                                                                  | :heavy_minus_sign:                                                                                                 | Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc. |
| `keys`                                                                                                             | [Key](../../models/shared/key.md)[]                                                                                | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |