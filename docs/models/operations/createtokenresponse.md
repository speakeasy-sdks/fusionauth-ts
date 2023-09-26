# CreateTokenResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accessToken`                                            | [shared.AccessToken](../../models/shared/accesstoken.md) | :heavy_minus_sign:                                       | Success                                                  |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | HTTP response content type for this operation            |
| `oAuthError`                                             | [shared.OAuthError](../../models/shared/oautherror.md)   | :heavy_minus_sign:                                       | Error                                                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP response status code for this operation             |
| `rawResponse`                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)  | :heavy_minus_sign:                                       | Raw HTTP response; suitable for custom response parsing  |