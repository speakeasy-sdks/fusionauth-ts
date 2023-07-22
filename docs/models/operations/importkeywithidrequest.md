# ImportKeyWithIdRequest


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `keyId`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | The Id for the key. If not provided a secure random UUID will be generated. |
| `keyRequest`                                                                | [shared.KeyRequest](../../models/shared/keyrequest.md)                      | :heavy_minus_sign:                                                          | N/A                                                                         |