# CreateWebhookWithIdRequest


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `webhookId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The Id for the webhook. If not provided a secure random UUID will be generated. |
| `webhookRequest`                                                                | [shared.WebhookRequest](../../models/shared/webhookrequest.md)                  | :heavy_minus_sign:                                                              | N/A                                                                             |