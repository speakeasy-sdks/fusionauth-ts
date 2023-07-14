# PatchUserConsentWithIdResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `errors`                                                                 | [shared.Errors](../../models/shared/errors.md)                           | :heavy_minus_sign:                                                       | Error                                                                    |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `userConsentResponse`                                                    | [shared.UserConsentResponse](../../models/shared/userconsentresponse.md) | :heavy_minus_sign:                                                       | Success                                                                  |