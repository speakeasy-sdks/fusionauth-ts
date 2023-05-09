<div align="center">
    <img src="https://github.com/speakeasy-sdks/fusionauth-ts/assets/6267663/c7f37cf0-163b-4245-a27e-88330f8e24aa" width="350px">
    <h1>Typescript SDK</h1>
   <p>Auth. Built for Devs, by Devs</p>
   <a href="https://fusionauth.io/docs/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/fusionauth-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/fusionauth-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/fusionauth-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/fusionauth-ts?sort=semver&style=for-the-badge" /></a>
</div>


<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/fusionauth-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/fusionauth-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [actionUserWithId](docs/sdk/README.md#actionuserwithid) - Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.
* [activateReactorWithId](docs/sdk/README.md#activatereactorwithid) - Activates the FusionAuth Reactor using a license id and optionally a license text (for air-gapped deployments)
* [addUserToFamilyWithId](docs/sdk/README.md#addusertofamilywithid) - Adds a user to an existing family. The family id must be specified.
* [cancelActionWithId](docs/sdk/README.md#cancelactionwithid) - Cancels the user action.
* [changePasswordByIdentityWithId](docs/sdk/README.md#changepasswordbyidentitywithid) - Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.
* [changePasswordWithId](docs/sdk/README.md#changepasswordwithid) - Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.
* [checkChangePasswordUsingIdWithId](docs/sdk/README.md#checkchangepasswordusingidwithid) - Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [commentOnUserWithId](docs/sdk/README.md#commentonuserwithid) - Adds a comment to the user's account.
* [completeWebAuthnAssertionWithId](docs/sdk/README.md#completewebauthnassertionwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in
* [completeWebAuthnLoginWithId](docs/sdk/README.md#completewebauthnloginwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in
* [completeWebAuthnRegistrationWithId](docs/sdk/README.md#completewebauthnregistrationwithid) - Complete a WebAuthn registration ceremony by validating the client request and saving the new credential
* [createAPIKey](docs/sdk/README.md#createapikey) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.
* [createApiKeyWithId](docs/sdk/README.md#createapikeywithid) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant. OR Updates an authentication API key by given id
* [createApplication](docs/sdk/README.md#createapplication) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createApplicationRole](docs/sdk/README.md#createapplicationrole) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationRoleWithId](docs/sdk/README.md#createapplicationrolewithid) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationWithId](docs/sdk/README.md#createapplicationwithid) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createAuditLogWithId](docs/sdk/README.md#createauditlogwithid) - Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.
* [createConnector](docs/sdk/README.md#createconnector) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConnectorWithId](docs/sdk/README.md#createconnectorwithid) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConsent](docs/sdk/README.md#createconsent) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createConsentWithId](docs/sdk/README.md#createconsentwithid) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createEmailTemplate](docs/sdk/README.md#createemailtemplate) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEmailTemplateWithId](docs/sdk/README.md#createemailtemplatewithid) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEntity](docs/sdk/README.md#createentity) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createEntityType](docs/sdk/README.md#createentitytype) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityTypePermission](docs/sdk/README.md#createentitytypepermission) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypePermissionWithId](docs/sdk/README.md#createentitytypepermissionwithid) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypeWithId](docs/sdk/README.md#createentitytypewithid) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityWithId](docs/sdk/README.md#createentitywithid) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createFamily](docs/sdk/README.md#createfamily) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createFamilyWithId](docs/sdk/README.md#createfamilywithid) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createForm](docs/sdk/README.md#createform) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormField](docs/sdk/README.md#createformfield) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormFieldWithId](docs/sdk/README.md#createformfieldwithid) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormWithId](docs/sdk/README.md#createformwithid) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createGroup](docs/sdk/README.md#creategroup) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createGroupMembersWithId](docs/sdk/README.md#creategroupmemberswithid) - Creates a member in a group.
* [createGroupWithId](docs/sdk/README.md#creategroupwithid) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createIPAccessControlList](docs/sdk/README.md#createipaccesscontrollist) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIPAccessControlListWithId](docs/sdk/README.md#createipaccesscontrollistwithid) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIdentityProvider](docs/sdk/README.md#createidentityprovider) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createIdentityProviderWithId](docs/sdk/README.md#createidentityproviderwithid) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createLambda](docs/sdk/README.md#createlambda) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLambdaWithId](docs/sdk/README.md#createlambdawithid) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLogout](docs/sdk/README.md#createlogout) - The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body.
* [createMessageTemplate](docs/sdk/README.md#createmessagetemplate) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessageTemplateWithId](docs/sdk/README.md#createmessagetemplatewithid) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessenger](docs/sdk/README.md#createmessenger) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createMessengerWithId](docs/sdk/README.md#createmessengerwithid) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createTenant](docs/sdk/README.md#createtenant) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTenantWithId](docs/sdk/README.md#createtenantwithid) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTheme](docs/sdk/README.md#createtheme) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createThemeWithId](docs/sdk/README.md#createthemewithid) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createToken](docs/sdk/README.md#createtoken) - Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token.
* [createUser](docs/sdk/README.md#createuser) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createUserAction](docs/sdk/README.md#createuseraction) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserActionReason](docs/sdk/README.md#createuseractionreason) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionReasonWithId](docs/sdk/README.md#createuseractionreasonwithid) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionWithId](docs/sdk/README.md#createuseractionwithid) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserConsent](docs/sdk/README.md#createuserconsent) - Creates a single User consent.
* [createUserConsentWithId](docs/sdk/README.md#createuserconsentwithid) - Creates a single User consent.
* [createUserLinkWithId](docs/sdk/README.md#createuserlinkwithid) - Link an external user from a 3rd party identity provider to a FusionAuth user.
* [createUserVerifyEmail](docs/sdk/README.md#createuserverifyemail) - Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.
* [createUserWithId](docs/sdk/README.md#createuserwithid) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createWebhook](docs/sdk/README.md#createwebhook) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [createWebhookWithId](docs/sdk/README.md#createwebhookwithid) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [deleteAPIKeyWithId](docs/sdk/README.md#deleteapikeywithid) - Deletes the API key for the given Id.
* [deleteApplicationRoleWithId](docs/sdk/README.md#deleteapplicationrolewithid) - Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.
* [deleteApplicationWithId](docs/sdk/README.md#deleteapplicationwithid) - Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.
* [deleteConnectorWithId](docs/sdk/README.md#deleteconnectorwithid) - Deletes the connector for the given Id.
* [deleteConsentWithId](docs/sdk/README.md#deleteconsentwithid) - Deletes the consent for the given Id.
* [deleteEmailTemplateWithId](docs/sdk/README.md#deleteemailtemplatewithid) - Deletes the email template for the given Id.
* [deleteEntityGrantWithId](docs/sdk/README.md#deleteentitygrantwithid) - Deletes an Entity Grant for the given User or Entity.
* [deleteEntityTypePermissionWithId](docs/sdk/README.md#deleteentitytypepermissionwithid) - Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.
* [deleteEntityTypeWithId](docs/sdk/README.md#deleteentitytypewithid) - Deletes the Entity Type for the given Id.
* [deleteEntityWithId](docs/sdk/README.md#deleteentitywithid) - Deletes the Entity for the given Id.
* [deleteFormFieldWithId](docs/sdk/README.md#deleteformfieldwithid) - Deletes the form field for the given Id.
* [deleteFormWithId](docs/sdk/README.md#deleteformwithid) - Deletes the form for the given Id.
* [deleteGroupMembersWithId](docs/sdk/README.md#deletegroupmemberswithid) - Removes users as members of a group.
* [deleteGroupWithId](docs/sdk/README.md#deletegroupwithid) - Deletes the group for the given Id.
* [deleteIPAccessControlListWithId](docs/sdk/README.md#deleteipaccesscontrollistwithid) - Deletes the IP Access Control List for the given Id.
* [deleteIdentityProviderWithId](docs/sdk/README.md#deleteidentityproviderwithid) - Deletes the identity provider for the given Id.
* [deleteJwt](docs/sdk/README.md#deletejwt) - Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication
* [deleteKeyWithId](docs/sdk/README.md#deletekeywithid) - Deletes the key for the given Id.
* [deleteLambdaWithId](docs/sdk/README.md#deletelambdawithid) - Deletes the lambda for the given Id.
* [deleteMessageTemplateWithId](docs/sdk/README.md#deletemessagetemplatewithid) - Deletes the message template for the given Id.
* [deleteMessengerWithId](docs/sdk/README.md#deletemessengerwithid) - Deletes the messenger for the given Id.
* [deleteTenantWithId](docs/sdk/README.md#deletetenantwithid) - Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).
* [deleteThemeWithId](docs/sdk/README.md#deletethemewithid) - Deletes the theme for the given Id.
* [deleteUserActionReasonWithId](docs/sdk/README.md#deleteuseractionreasonwithid) - Deletes the user action reason for the given Id.
* [deleteUserActionWithId](docs/sdk/README.md#deleteuseractionwithid) - Deactivates the user action with the given Id. OR Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users.
* [deleteUserBulk](docs/sdk/README.md#deleteuserbulk) - Deactivates the users with the given ids. OR Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users.
* [deleteUserLinkWithId](docs/sdk/README.md#deleteuserlinkwithid) - Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.
* [deleteUserRegistrationWithId](docs/sdk/README.md#deleteuserregistrationwithid) - Deletes the user registration for the given user and application. OR Deletes the user registration for the given user and application along with the given JSON body that contains the event information.
* [deleteUserTwoFactorWithId](docs/sdk/README.md#deleteusertwofactorwithid) - Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.
* [deleteUserWithId](docs/sdk/README.md#deleteuserwithid) - Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.
* [deleteWebAuthnCredentialWithId](docs/sdk/README.md#deletewebauthncredentialwithid) - Deletes the WebAuthn credential for the given Id.
* [deleteWebhookWithId](docs/sdk/README.md#deletewebhookwithid) - Deletes the webhook for the given Id.
* [enableTwoFactorWithId](docs/sdk/README.md#enabletwofactorwithid) - Enable two-factor authentication for a user.
* [exchangeRefreshTokenForJWTWithId](docs/sdk/README.md#exchangerefreshtokenforjwtwithid) - Exchange a refresh token for a new JWT.
* [forgotPasswordWithId](docs/sdk/README.md#forgotpasswordwithid) - Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.
* [generateKey](docs/sdk/README.md#generatekey) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateKeyWithId](docs/sdk/README.md#generatekeywithid) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateTwoFactorRecoveryCodesWithId](docs/sdk/README.md#generatetwofactorrecoverycodeswithid) - Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.
* [generateTwoFactorSecretUsingJWTWithId](docs/sdk/README.md#generatetwofactorsecretusingjwtwithid) - Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.
* [identityProviderLoginWithId](docs/sdk/README.md#identityproviderloginwithid) - Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.
* [importKey](docs/sdk/README.md#importkey) - Import an existing RSA or EC key pair or an HMAC secret.
* [importKeyWithId](docs/sdk/README.md#importkeywithid) - Import an existing RSA or EC key pair or an HMAC secret.
* [importRefreshTokensWithId](docs/sdk/README.md#importrefreshtokenswithid) - Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importUsersWithId](docs/sdk/README.md#importuserswithid) - Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importWebAuthnCredentialWithId](docs/sdk/README.md#importwebauthncredentialwithid) - Import a WebAuthn credential
* [introspectAccessTokenWithId](docs/sdk/README.md#introspectaccesstokenwithid) - Inspect an access token issued by FusionAuth.
* [issueJWTWithId](docs/sdk/README.md#issuejwtwithid) - Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.
* [loginPingWithId](docs/sdk/README.md#loginpingwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginPingWithRequestWithId](docs/sdk/README.md#loginpingwithrequestwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginWithId](docs/sdk/README.md#loginwithid) - Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.
* [lookupIdentityProviderWithId](docs/sdk/README.md#lookupidentityproviderwithid) - Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.
* [modifyActionWithId](docs/sdk/README.md#modifyactionwithid) - Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.
* [passwordlessLoginWithId](docs/sdk/README.md#passwordlessloginwithid) - Complete a login request using a passwordless code
* [patchApplicationRoleWithId](docs/sdk/README.md#patchapplicationrolewithid) - Updates, via PATCH, the application role with the given id for the application.
* [patchApplicationWithId](docs/sdk/README.md#patchapplicationwithid) - Updates, via PATCH, the application with the given Id.
* [patchConnectorWithId](docs/sdk/README.md#patchconnectorwithid) - Updates, via PATCH, the connector with the given Id.
* [patchConsentWithId](docs/sdk/README.md#patchconsentwithid) - Updates, via PATCH, the consent with the given Id.
* [patchEmailTemplateWithId](docs/sdk/README.md#patchemailtemplatewithid) - Updates, via PATCH, the email template with the given Id.
* [patchEntityTypeWithId](docs/sdk/README.md#patchentitytypewithid) - Updates, via PATCH, the Entity Type with the given Id.
* [patchGroupWithId](docs/sdk/README.md#patchgroupwithid) - Updates, via PATCH, the group with the given Id.
* [patchIdentityProviderWithId](docs/sdk/README.md#patchidentityproviderwithid) - Updates, via PATCH, the identity provider with the given Id.
* [patchIntegrationsWithId](docs/sdk/README.md#patchintegrationswithid) - Updates, via PATCH, the available integrations.
* [patchLambdaWithId](docs/sdk/README.md#patchlambdawithid) - Updates, via PATCH, the lambda with the given Id.
* [patchMessageTemplateWithId](docs/sdk/README.md#patchmessagetemplatewithid) - Updates, via PATCH, the message template with the given Id.
* [patchMessengerWithId](docs/sdk/README.md#patchmessengerwithid) - Updates, via PATCH, the messenger with the given Id.
* [patchRegistrationWithId](docs/sdk/README.md#patchregistrationwithid) - Updates, via PATCH, the registration for the user with the given id and the application defined in the request.
* [patchSystemConfigurationWithId](docs/sdk/README.md#patchsystemconfigurationwithid) - Updates, via PATCH, the system configuration.
* [patchTenantWithId](docs/sdk/README.md#patchtenantwithid) - Updates, via PATCH, the tenant with the given Id.
* [patchThemeWithId](docs/sdk/README.md#patchthemewithid) - Updates, via PATCH, the theme with the given Id.
* [patchUserActionReasonWithId](docs/sdk/README.md#patchuseractionreasonwithid) - Updates, via PATCH, the user action reason with the given Id.
* [patchUserActionWithId](docs/sdk/README.md#patchuseractionwithid) - Updates, via PATCH, the user action with the given Id.
* [patchUserConsentWithId](docs/sdk/README.md#patchuserconsentwithid) - Updates, via PATCH, a single User consent by Id.
* [patchUserWithId](docs/sdk/README.md#patchuserwithid) - Updates, via PATCH, the user with the given Id.
* [reconcileJWTWithId](docs/sdk/README.md#reconcilejwtwithid) - Reconcile a User to FusionAuth using JWT issued from another Identity Provider.
* [register](docs/sdk/README.md#register) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [registerWithId](docs/sdk/README.md#registerwithid) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [reindexWithId](docs/sdk/README.md#reindexwithid) - Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.
* [removeUserFromFamilyWithId](docs/sdk/README.md#removeuserfromfamilywithid) - Removes a user from the family with the given id.
* [retrieveAPIKeyWithId](docs/sdk/README.md#retrieveapikeywithid) - Retrieves an authentication API key for the given id
* [retrieveActionWithId](docs/sdk/README.md#retrieveactionwithid) - Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.
* [retrieveApplication](docs/sdk/README.md#retrieveapplication) - Retrieves the application for the given id or all of the applications if the id is null. OR Retrieves all the applications that are currently inactive.
* [retrieveApplicationWithId](docs/sdk/README.md#retrieveapplicationwithid) - Retrieves the application for the given id or all of the applications if the id is null.
* [retrieveAuditLogWithId](docs/sdk/README.md#retrieveauditlogwithid) - Retrieves a single audit log for the given Id.
* [retrieveConnectorWithId](docs/sdk/README.md#retrieveconnectorwithid) - Retrieves the connector with the given Id.
* [retrieveConsentWithId](docs/sdk/README.md#retrieveconsentwithid) - Retrieves the Consent for the given Id.
* [retrieveDailyActiveReportWithId](docs/sdk/README.md#retrievedailyactivereportwithid) - Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.
* [retrieveEmailTemplate](docs/sdk/README.md#retrieveemailtemplate) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEmailTemplatePreviewWithId](docs/sdk/README.md#retrieveemailtemplatepreviewwithid) - Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.
* [retrieveEmailTemplateWithId](docs/sdk/README.md#retrieveemailtemplatewithid) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEntityGrantWithId](docs/sdk/README.md#retrieveentitygrantwithid) - Retrieves an Entity Grant for the given Entity and User/Entity.
* [retrieveEntityTypeWithId](docs/sdk/README.md#retrieveentitytypewithid) - Retrieves the Entity Type for the given Id.
* [retrieveEntityWithId](docs/sdk/README.md#retrieveentitywithid) - Retrieves the Entity for the given Id.
* [retrieveEventLogWithId](docs/sdk/README.md#retrieveeventlogwithid) - Retrieves a single event log for the given Id.
* [retrieveFamiliesWithId](docs/sdk/README.md#retrievefamilieswithid) - Retrieves all the families that a user belongs to.
* [retrieveFamilyMembersByFamilyIdWithId](docs/sdk/README.md#retrievefamilymembersbyfamilyidwithid) - Retrieves all the members of a family by the unique Family Id.
* [retrieveFormFieldWithId](docs/sdk/README.md#retrieveformfieldwithid) - Retrieves the form field with the given Id.
* [retrieveFormWithId](docs/sdk/README.md#retrieveformwithid) - Retrieves the form with the given Id.
* [retrieveGroupWithId](docs/sdk/README.md#retrievegroupwithid) - Retrieves the group for the given Id.
* [retrieveIPAccessControlListWithId](docs/sdk/README.md#retrieveipaccesscontrollistwithid) - Retrieves the IP Access Control List with the given Id.
* [retrieveIdentityProvider](docs/sdk/README.md#retrieveidentityprovider) - Retrieve a single Identity Provider user (link). OR Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP.
* [retrieveIdentityProviderByTypeWithId](docs/sdk/README.md#retrieveidentityproviderbytypewithid) - Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.
* [retrieveIdentityProviderWithId](docs/sdk/README.md#retrieveidentityproviderwithid) - Retrieves the identity provider for the given id or all of the identity providers if the id is null.
* [retrieveJwt](docs/sdk/README.md#retrievejwt) - Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid). OR Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.
* [retrieveKeyWithId](docs/sdk/README.md#retrievekeywithid) - Retrieves the key for the given Id.
* [retrieveLambdaWithId](docs/sdk/README.md#retrievelambdawithid) - Retrieves the lambda for the given Id.
* [retrieveLambdasByTypeWithId](docs/sdk/README.md#retrievelambdasbytypewithid) - Retrieves all the lambdas for the provided type.
* [retrieveMessageTemplate](docs/sdk/README.md#retrievemessagetemplate) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessageTemplatePreviewWithId](docs/sdk/README.md#retrievemessagetemplatepreviewwithid) - Creates a preview of the message template provided in the request, normalized to a given locale.
* [retrieveMessageTemplateWithId](docs/sdk/README.md#retrievemessagetemplatewithid) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessengerWithId](docs/sdk/README.md#retrievemessengerwithid) - Retrieves the messenger with the given Id.
* [retrieveMonthlyActiveReportWithId](docs/sdk/README.md#retrievemonthlyactivereportwithid) - Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.
* [retrieveOauthConfigurationWithId](docs/sdk/README.md#retrieveoauthconfigurationwithid) - Retrieves the Oauth2 configuration for the application for the given Application Id.
* [retrievePasswordValidationRulesWithTenantIdWithId](docs/sdk/README.md#retrievepasswordvalidationruleswithtenantidwithid) - Retrieves the password validation rules for a specific tenant.  This API does not require an API key.
* [retrievePendingChildrenWithId](docs/sdk/README.md#retrievependingchildrenwithid) - Retrieves all the children for the given parent email address.
* [retrieveRefreshTokenByIdWithId](docs/sdk/README.md#retrieverefreshtokenbyidwithid) - Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.
* [retrieveRefreshTokensWithId](docs/sdk/README.md#retrieverefreshtokenswithid) - Retrieves the refresh tokens that belong to the user with the given Id.
* [retrieveRegistrationReportWithId](docs/sdk/README.md#retrieveregistrationreportwithid) - Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.
* [retrieveRegistrationWithId](docs/sdk/README.md#retrieveregistrationwithid) - Retrieves the user registration for the user with the given id and the given application id.
* [retrieveReport](docs/sdk/README.md#retrievereport) - Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application.
* [retrieveTenantWithId](docs/sdk/README.md#retrievetenantwithid) - Retrieves the tenant for the given Id.
* [retrieveThemeWithId](docs/sdk/README.md#retrievethemewithid) - Retrieves the theme for the given Id.
* [retrieveTwoFactorRecoveryCodesWithId](docs/sdk/README.md#retrievetwofactorrecoverycodeswithid) - Retrieve two-factor recovery codes for a user.
* [retrieveTwoFactorStatusWithId](docs/sdk/README.md#retrievetwofactorstatuswithid) - Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.
* [retrieveUser](docs/sdk/README.md#retrieveuser) - Retrieves the user for the given username. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user for the given email. OR Retrieves the user for the loginId. The loginId can be either the username or the email.
* [retrieveUserAction](docs/sdk/README.md#retrieveuseraction) - Retrieves all the user actions that are currently inactive. OR Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActionReason](docs/sdk/README.md#retrieveuseractionreason) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionReasonWithId](docs/sdk/README.md#retrieveuseractionreasonwithid) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionWithId](docs/sdk/README.md#retrieveuseractionwithid) - Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActioning](docs/sdk/README.md#retrieveuseractioning) - Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based.
* [retrieveUserChangePassword](docs/sdk/README.md#retrieveuserchangepassword) - Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [retrieveUserCommentsWithId](docs/sdk/README.md#retrieveusercommentswithid) - Retrieves all the comments for the user with the given Id.
* [retrieveUserConsentWithId](docs/sdk/README.md#retrieveuserconsentwithid) - Retrieve a single User consent by Id.
* [retrieveUserConsentsWithId](docs/sdk/README.md#retrieveuserconsentswithid) - Retrieves all the consents for a User.
* [retrieveUserInfoFromAccessTokenWithId](docs/sdk/README.md#retrieveuserinfofromaccesstokenwithid) - Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.
* [retrieveUserRecentLogin](docs/sdk/README.md#retrieveuserrecentlogin) - Retrieves the last number of login records. OR Retrieves the last number of login records for a user.
* [retrieveUserWithId](docs/sdk/README.md#retrieveuserwithid) - Retrieves the user for the given Id.
* [retrieveWebAuthnCredentialWithId](docs/sdk/README.md#retrievewebauthncredentialwithid) - Retrieves the WebAuthn credential for the given Id.
* [retrieveWebAuthnCredentialsForUserWithId](docs/sdk/README.md#retrievewebauthncredentialsforuserwithid) - Retrieves all WebAuthn credentials for the given user.
* [retrieveWebhook](docs/sdk/README.md#retrievewebhook) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [retrieveWebhookWithId](docs/sdk/README.md#retrievewebhookwithid) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [revokeRefreshTokenByIdWithId](docs/sdk/README.md#revokerefreshtokenbyidwithid) - Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.
* [revokeUserConsentWithId](docs/sdk/README.md#revokeuserconsentwithid) - Revokes a single User consent by Id.
* [searchApplicationsWithId](docs/sdk/README.md#searchapplicationswithid) - Searches applications with the specified criteria and pagination.
* [searchAuditLogsWithId](docs/sdk/README.md#searchauditlogswithid) - Searches the audit logs with the specified criteria and pagination.
* [searchConsentsWithId](docs/sdk/README.md#searchconsentswithid) - Searches consents with the specified criteria and pagination.
* [searchEmailTemplatesWithId](docs/sdk/README.md#searchemailtemplateswithid) - Searches email templates with the specified criteria and pagination.
* [searchEntitiesByIdsWithId](docs/sdk/README.md#searchentitiesbyidswithid) - Retrieves the entities for the given ids. If any id is invalid, it is ignored.
* [searchEntitiesWithId](docs/sdk/README.md#searchentitieswithid) - Searches entities with the specified criteria and pagination.
* [searchEntityGrantsWithId](docs/sdk/README.md#searchentitygrantswithid) - Searches Entity Grants with the specified criteria and pagination.
* [searchEntityTypesWithId](docs/sdk/README.md#searchentitytypeswithid) - Searches the entity types with the specified criteria and pagination.
* [searchEventLogsWithId](docs/sdk/README.md#searcheventlogswithid) - Searches the event logs with the specified criteria and pagination.
* [searchGroupMembersWithId](docs/sdk/README.md#searchgroupmemberswithid) - Searches group members with the specified criteria and pagination.
* [searchGroupsWithId](docs/sdk/README.md#searchgroupswithid) - Searches groups with the specified criteria and pagination.
* [searchIPAccessControlListsWithId](docs/sdk/README.md#searchipaccesscontrollistswithid) - Searches the IP Access Control Lists with the specified criteria and pagination.
* [searchIdentityProvidersWithId](docs/sdk/README.md#searchidentityproviderswithid) - Searches identity providers with the specified criteria and pagination.
* [searchKeysWithId](docs/sdk/README.md#searchkeyswithid) - Searches keys with the specified criteria and pagination.
* [searchLambdasWithId](docs/sdk/README.md#searchlambdaswithid) - Searches lambdas with the specified criteria and pagination.
* [searchLoginRecordsWithId](docs/sdk/README.md#searchloginrecordswithid) - Searches the login records with the specified criteria and pagination.
* [searchTenantsWithId](docs/sdk/README.md#searchtenantswithid) - Searches tenants with the specified criteria and pagination.
* [searchThemesWithId](docs/sdk/README.md#searchthemeswithid) - Searches themes with the specified criteria and pagination.
* [searchUserCommentsWithId](docs/sdk/README.md#searchusercommentswithid) - Searches user comments with the specified criteria and pagination.
* [searchUsersByIdsWithId](docs/sdk/README.md#searchusersbyidswithid) - Retrieves the users for the given ids. If any id is invalid, it is ignored.
* [searchUsersByQueryWithId](docs/sdk/README.md#searchusersbyquerywithid) - Retrieves the users for the given search criteria and pagination.
* [searchWebhooksWithId](docs/sdk/README.md#searchwebhookswithid) - Searches webhooks with the specified criteria and pagination.
* [sendEmailWithId](docs/sdk/README.md#sendemailwithid) - Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.
* [sendFamilyRequestEmailWithId](docs/sdk/README.md#sendfamilyrequestemailwithid) - Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.
* [sendPasswordlessCodeWithId](docs/sdk/README.md#sendpasswordlesscodewithid) - Send a passwordless authentication code in an email to complete login.
* [sendTwoFactorCodeForEnableDisableWithId](docs/sdk/README.md#sendtwofactorcodeforenabledisablewithid) - Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.
* [sendTwoFactorCodeForLoginUsingMethodWithId](docs/sdk/README.md#sendtwofactorcodeforloginusingmethodwithid) - Send a Two Factor authentication code to allow the completion of Two Factor authentication.
* [startIdentityProviderLoginWithId](docs/sdk/README.md#startidentityproviderloginwithid) - Begins a login request for a 3rd party login that requires user interaction such as HYPR.
* [startPasswordlessLoginWithId](docs/sdk/README.md#startpasswordlessloginwithid) - Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.
* [startTwoFactorLoginWithId](docs/sdk/README.md#starttwofactorloginwithid) - Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside of a normal login that originated from the Login API (/api/login).
* [startWebAuthnLoginWithId](docs/sdk/README.md#startwebauthnloginwithid) - Start a WebAuthn authentication ceremony by generating a new challenge for the user
* [startWebAuthnRegistrationWithId](docs/sdk/README.md#startwebauthnregistrationwithid) - Start a WebAuthn registration ceremony by generating a new challenge for the user
* [twoFactorLoginWithId](docs/sdk/README.md#twofactorloginwithid) - Complete login using a 2FA challenge
* [updateAPIKeyWithId](docs/sdk/README.md#updateapikeywithid) - Updates an API key by given id
* [updateApplicationRoleWithId](docs/sdk/README.md#updateapplicationrolewithid) - Updates the application role with the given id for the application.
* [updateApplicationWithId](docs/sdk/README.md#updateapplicationwithid) - Updates the application with the given Id. OR Reactivates the application with the given Id.
* [updateConnectorWithId](docs/sdk/README.md#updateconnectorwithid) - Updates the connector with the given Id.
* [updateConsentWithId](docs/sdk/README.md#updateconsentwithid) - Updates the consent with the given Id.
* [updateEmailTemplateWithId](docs/sdk/README.md#updateemailtemplatewithid) - Updates the email template with the given Id.
* [updateEntityTypePermissionWithId](docs/sdk/README.md#updateentitytypepermissionwithid) - Updates the permission with the given id for the entity type.
* [updateEntityTypeWithId](docs/sdk/README.md#updateentitytypewithid) - Updates the Entity Type with the given Id.
* [updateEntityWithId](docs/sdk/README.md#updateentitywithid) - Updates the Entity with the given Id.
* [updateFormFieldWithId](docs/sdk/README.md#updateformfieldwithid) - Updates the form field with the given Id.
* [updateFormWithId](docs/sdk/README.md#updateformwithid) - Updates the form with the given Id.
* [updateGroupMembersWithId](docs/sdk/README.md#updategroupmemberswithid) - Creates a member in a group.
* [updateGroupWithId](docs/sdk/README.md#updategroupwithid) - Updates the group with the given Id.
* [updateIPAccessControlListWithId](docs/sdk/README.md#updateipaccesscontrollistwithid) - Updates the IP Access Control List with the given Id.
* [updateIdentityProviderWithId](docs/sdk/README.md#updateidentityproviderwithid) - Updates the identity provider with the given Id.
* [updateIntegrationsWithId](docs/sdk/README.md#updateintegrationswithid) - Updates the available integrations.
* [updateKeyWithId](docs/sdk/README.md#updatekeywithid) - Updates the key with the given Id.
* [updateLambdaWithId](docs/sdk/README.md#updatelambdawithid) - Updates the lambda with the given Id.
* [updateMessageTemplateWithId](docs/sdk/README.md#updatemessagetemplatewithid) - Updates the message template with the given Id.
* [updateMessengerWithId](docs/sdk/README.md#updatemessengerwithid) - Updates the messenger with the given Id.
* [updateRegistrationWithId](docs/sdk/README.md#updateregistrationwithid) - Updates the registration for the user with the given id and the application defined in the request.
* [updateSystemConfigurationWithId](docs/sdk/README.md#updatesystemconfigurationwithid) - Updates the system configuration.
* [updateTenantWithId](docs/sdk/README.md#updatetenantwithid) - Updates the tenant with the given Id.
* [updateThemeWithId](docs/sdk/README.md#updatethemewithid) - Updates the theme with the given Id.
* [updateUserActionReasonWithId](docs/sdk/README.md#updateuseractionreasonwithid) - Updates the user action reason with the given Id.
* [updateUserActionWithId](docs/sdk/README.md#updateuseractionwithid) - Reactivates the user action with the given Id. OR Updates the user action with the given Id.
* [updateUserConsentWithId](docs/sdk/README.md#updateuserconsentwithid) - Updates a single User consent by Id.
* [updateUserVerifyEmail](docs/sdk/README.md#updateuserverifyemail) - Re-sends the verification email to the user. OR Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.
* [updateUserVerifyRegistration](docs/sdk/README.md#updateuserverifyregistration) - Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system. OR Re-sends the application registration verification email to the user.
* [updateUserWithId](docs/sdk/README.md#updateuserwithid) - Reactivates the user with the given Id. OR Updates the user with the given Id.
* [updateWebhookWithId](docs/sdk/README.md#updatewebhookwithid) - Updates the webhook with the given Id.
* [upsertEntityGrantWithId](docs/sdk/README.md#upsertentitygrantwithid) - Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.
* [validateDeviceWithId](docs/sdk/README.md#validatedevicewithid) - Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.
* [validateJWTWithId](docs/sdk/README.md#validatejwtwithid) - Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.
* [vendJWTWithId](docs/sdk/README.md#vendjwtwithid) - It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.
* [verifyUserRegistrationWithId](docs/sdk/README.md#verifyuserregistrationwithid) - Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

