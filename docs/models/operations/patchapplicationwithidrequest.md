# PatchApplicationWithIdRequest


## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to update.                                                                                                               |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |