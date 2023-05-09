<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.retrieveKeyWithId("corrupti").then((res: RetrieveKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->