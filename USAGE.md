<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ActionUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.actionUserWithId({
  action: {
    actioneeUserId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    actionerUserId: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    applicationIds: [
      "b7392059-2939-46fe-a759-6eb10faaa235",
      "2c595590-7aff-41a3-a2fa-9467739251aa",
      "52c3f5ad-019d-4a1f-be78-f097b0074f15",
      "471b5e6e-13b9-49d4-88e1-e91e450ad2ab",
    ],
    comment: "quibusdam",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "labore",
    reasonId: "4269802d-502a-494b-b4f6-3c969e9a3efa",
    userActionId: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "perferendis": {
        "magnam": "distinctio",
        "id": "labore",
      },
      "labore": {
        "natus": "nobis",
        "eum": "vero",
      },
    },
    deviceDescription: "aspernatur",
    deviceName: "architecto",
    deviceType: "magnam",
    ipAddress: "et",
    location: {
      city: "Fernestead",
      country: "Marshall Islands",
      displayString: "sint",
      latitude: 336.25,
      longitude: 6532.01,
      region: "reiciendis",
      zipcode: "34281-3049",
    },
    os: "debitis",
    userAgent: "eius",
  },
}).then((res: ActionUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->