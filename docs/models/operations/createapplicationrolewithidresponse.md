# CreateApplicationRoleWithIdResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `applicationResponse`                                                    | [shared.ApplicationResponse](../../models/shared/applicationresponse.md) | :heavy_minus_sign:                                                       | Success                                                                  |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `errors`                                                                 | [shared.Errors](../../models/shared/errors.md)                           | :heavy_minus_sign:                                                       | Error                                                                    |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)                  | :heavy_minus_sign:                                                       | Raw HTTP response; suitable for custom response parsing                  |