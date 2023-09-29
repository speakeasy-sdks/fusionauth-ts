<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveKeyWithIdRequest, RetrieveKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});
const keyId: string = "Integrated";

sdk.retrieveKeyWithId(keyId).then((res: RetrieveKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->