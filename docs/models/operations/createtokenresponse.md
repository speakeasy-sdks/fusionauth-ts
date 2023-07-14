# CreateTokenResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accessToken`                                            | [shared.AccessToken](../../models/shared/accesstoken.md) | :heavy_minus_sign:                                       | Success                                                  |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `oAuthError`                                             | [shared.OAuthError](../../models/shared/oautherror.md)   | :heavy_minus_sign:                                       | Error                                                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |