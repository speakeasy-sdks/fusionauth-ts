# CreateConnectorWithIdRequest


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `connectorId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The Id for the connector. If not provided a secure random UUID will be generated. |
| `connectorRequest`                                                                | [shared.ConnectorRequest](../../models/shared/connectorrequest.md)                | :heavy_minus_sign:                                                                | N/A                                                                               |