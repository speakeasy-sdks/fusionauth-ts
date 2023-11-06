# DeleteUserLinkWithIdRequest


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `identityProviderId`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the identity provider.                                 |
| `identityProviderUserId`                                                | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the user in the 3rd party identity provider to unlink. |
| `userId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the FusionAuth user to unlink.                         |