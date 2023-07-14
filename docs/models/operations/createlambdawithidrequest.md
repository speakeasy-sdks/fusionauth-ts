# CreateLambdaWithIdRequest


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `lambdaId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The Id for the lambda. If not provided a secure random UUID will be generated. |
| `lambdaRequest`                                                                | [shared.LambdaRequest](../../models/shared/lambdarequest.md)                   | :heavy_minus_sign:                                                             | N/A                                                                            |