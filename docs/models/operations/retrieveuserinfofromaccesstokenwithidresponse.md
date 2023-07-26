# RetrieveUserInfoFromAccessTokenWithIdResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `oAuthError`                                                       | [shared.OAuthError](../../models/shared/oautherror.md)             | :heavy_minus_sign:                                                 | Error                                                              |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse>](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                 | N/A                                                                |
| `userinfoResponse`                                                 | [shared.UserinfoResponse](../../models/shared/userinforesponse.md) | :heavy_minus_sign:                                                 | Success                                                            |