# Email

This class is an abstraction of a simple email message.


## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `attachments`                                         | [Attachment](../../models/shared/attachment.md)[]     | :heavy_minus_sign:                                    | N/A                                                   |
| `bcc`                                                 | [EmailAddress](../../models/shared/emailaddress.md)[] | :heavy_minus_sign:                                    | N/A                                                   |
| `cc`                                                  | [EmailAddress](../../models/shared/emailaddress.md)[] | :heavy_minus_sign:                                    | N/A                                                   |
| `from`                                                | [EmailAddress](../../models/shared/emailaddress.md)   | :heavy_minus_sign:                                    | An email address.                                     |
| `html`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `replyTo`                                             | [EmailAddress](../../models/shared/emailaddress.md)   | :heavy_minus_sign:                                    | An email address.                                     |
| `subject`                                             | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `text`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `to`                                                  | [EmailAddress](../../models/shared/emailaddress.md)[] | :heavy_minus_sign:                                    | N/A                                                   |