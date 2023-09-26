# UpdateEntityWithIdResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `contentType`                                                  | *string*                                                       | :heavy_check_mark:                                             | HTTP response content type for this operation                  |
| `entityResponse`                                               | [shared.EntityResponse](../../models/shared/entityresponse.md) | :heavy_minus_sign:                                             | Success                                                        |
| `errors`                                                       | [shared.Errors](../../models/shared/errors.md)                 | :heavy_minus_sign:                                             | Error                                                          |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | HTTP response status code for this operation                   |
| `rawResponse`                                                  | [AxiosResponse](https://axios-http.com/docs/res_schema)        | :heavy_minus_sign:                                             | Raw HTTP response; suitable for custom response parsing        |