# User

The global view of a User. This object contains all global information about the user including birth date, registration information  preferred languages, global attributes, etc.


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                    | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `birthDate`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.                             | 2007-12-03                                                                                                  |
| `breachedPasswordLastCheckedInstant`                                                                        | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `breachedPasswordStatus`                                                                                    | [BreachedPasswordStatus](../../models/shared/breachedpasswordstatus.md)                                     | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `cleanSpeakId`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `connectorId`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `data`                                                                                                      | Record<string, [UserData](../../models/shared/userdata.md)>                                                 | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `email`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `encryptionScheme`                                                                                          | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `expiry`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `factor`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `firstName`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `fullName`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `imageUrl`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `insertInstant`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `lastLoginInstant`                                                                                          | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `lastName`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `lastUpdateInstant`                                                                                         | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `memberships`                                                                                               | [GroupMember](../../models/shared/groupmember.md)[]                                                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `middleName`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `mobilePhone`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `parentEmail`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `password`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `passwordChangeReason`                                                                                      | [ChangePasswordReason](../../models/shared/changepasswordreason.md)                                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `passwordChangeRequired`                                                                                    | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `passwordLastUpdateInstant`                                                                                 | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. | 1659380719000                                                                                               |
| `preferredLanguages`                                                                                        | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `registrations`                                                                                             | [UserRegistration](../../models/shared/userregistration.md)[]                                               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `salt`                                                                                                      | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `tenantId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `timezone`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Timezone Identifier                                                                                         | America/Denver                                                                                              |
| `twoFactor`                                                                                                 | [UserTwoFactorConfiguration](../../models/shared/usertwofactorconfiguration.md)                             | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `uniqueUsername`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `username`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `usernameStatus`                                                                                            | [ContentStatus](../../models/shared/contentstatus.md)                                                       | :heavy_minus_sign:                                                                                          | Status for content like usernames, profile attributes, etc.                                                 |                                                                                                             |
| `verified`                                                                                                  | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |