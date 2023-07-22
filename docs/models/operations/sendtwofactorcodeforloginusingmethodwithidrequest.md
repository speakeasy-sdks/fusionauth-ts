# SendTwoFactorCodeForLoginUsingMethodWithIdRequest


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `twoFactorId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The Id returned by the Login API necessary to complete Two Factor authentication. |
| `twoFactorSendRequest`                                                            | [shared.TwoFactorSendRequest](../../models/shared/twofactorsendrequest.md)        | :heavy_minus_sign:                                                                | N/A                                                                               |