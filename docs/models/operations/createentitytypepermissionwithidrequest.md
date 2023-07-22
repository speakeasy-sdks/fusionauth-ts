# CreateEntityTypePermissionWithIdRequest


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `entityTypeId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | The Id of the entity type to create the permission on.                            |
| `permissionId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | The Id of the permission. If not provided a secure random UUID will be generated. |
| `entityTypeRequest`                                                               | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md)              | :heavy_minus_sign:                                                                | N/A                                                                               |