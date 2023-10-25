<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async () => {
    const sdk = new SDK({
        security: {
            apiKeyAuth: "",
        },
    });
    const keyId: string = "string";

    const res = await sdk.sdk.retrieveKeyWithId(keyId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->