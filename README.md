<div align="center">
    <img src="https://github.com/speakeasy-sdks/fusionauth-ts/assets/6267663/92437ebd-a6fe-4497-8c15-ec4dd6eccea5" width="350px">
    <h1>Typescript SDK</h1>
   <p>Auth. Built for Devs, by Devs</p>
   <a href="https://fusionauth.io/docs/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/fusionauth-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/fusionauth-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
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
import { RetrieveKeyWithIdRequest, RetrieveKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "",
  },
});
const keyId: string = "provident";

sdk.retrieveKeyWithId(keyId).then((res: RetrieveKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdks/sdk/README.md)

* [actionUserWithId](docs/sdks/sdk/README.md#actionuserwithid) - Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.
* [activateReactorWithId](docs/sdks/sdk/README.md#activatereactorwithid) - Activates the FusionAuth Reactor using a license id and optionally a license text (for air-gapped deployments)
* [addUserToFamilyWithId](docs/sdks/sdk/README.md#addusertofamilywithid) - Adds a user to an existing family. The family id must be specified.
* [cancelActionWithId](docs/sdks/sdk/README.md#cancelactionwithid) - Cancels the user action.
* [changePasswordByIdentityWithId](docs/sdks/sdk/README.md#changepasswordbyidentitywithid) - Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.
* [changePasswordWithId](docs/sdks/sdk/README.md#changepasswordwithid) - Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.
* [checkChangePasswordUsingIdWithId](docs/sdks/sdk/README.md#checkchangepasswordusingidwithid) - Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [commentOnUserWithId](docs/sdks/sdk/README.md#commentonuserwithid) - Adds a comment to the user's account.
* [completeWebAuthnAssertionWithId](docs/sdks/sdk/README.md#completewebauthnassertionwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in
* [completeWebAuthnLoginWithId](docs/sdks/sdk/README.md#completewebauthnloginwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in
* [completeWebAuthnRegistrationWithId](docs/sdks/sdk/README.md#completewebauthnregistrationwithid) - Complete a WebAuthn registration ceremony by validating the client request and saving the new credential
* [createAPIKey](docs/sdks/sdk/README.md#createapikey) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.
* [createApiKeyWithId](docs/sdks/sdk/README.md#createapikeywithid) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant. OR Updates an authentication API key by given id
* [createApplication](docs/sdks/sdk/README.md#createapplication) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createApplicationRole](docs/sdks/sdk/README.md#createapplicationrole) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationRoleWithId](docs/sdks/sdk/README.md#createapplicationrolewithid) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationWithId](docs/sdks/sdk/README.md#createapplicationwithid) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createAuditLogWithId](docs/sdks/sdk/README.md#createauditlogwithid) - Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.
* [createConnector](docs/sdks/sdk/README.md#createconnector) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConnectorWithId](docs/sdks/sdk/README.md#createconnectorwithid) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConsent](docs/sdks/sdk/README.md#createconsent) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createConsentWithId](docs/sdks/sdk/README.md#createconsentwithid) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createEmailTemplate](docs/sdks/sdk/README.md#createemailtemplate) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEmailTemplateWithId](docs/sdks/sdk/README.md#createemailtemplatewithid) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEntity](docs/sdks/sdk/README.md#createentity) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createEntityType](docs/sdks/sdk/README.md#createentitytype) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityTypePermission](docs/sdks/sdk/README.md#createentitytypepermission) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypePermissionWithId](docs/sdks/sdk/README.md#createentitytypepermissionwithid) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypeWithId](docs/sdks/sdk/README.md#createentitytypewithid) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityWithId](docs/sdks/sdk/README.md#createentitywithid) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createFamily](docs/sdks/sdk/README.md#createfamily) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createFamilyWithId](docs/sdks/sdk/README.md#createfamilywithid) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createForm](docs/sdks/sdk/README.md#createform) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormField](docs/sdks/sdk/README.md#createformfield) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormFieldWithId](docs/sdks/sdk/README.md#createformfieldwithid) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormWithId](docs/sdks/sdk/README.md#createformwithid) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createGroup](docs/sdks/sdk/README.md#creategroup) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createGroupMembersWithId](docs/sdks/sdk/README.md#creategroupmemberswithid) - Creates a member in a group.
* [createGroupWithId](docs/sdks/sdk/README.md#creategroupwithid) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createIPAccessControlList](docs/sdks/sdk/README.md#createipaccesscontrollist) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIPAccessControlListWithId](docs/sdks/sdk/README.md#createipaccesscontrollistwithid) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIdentityProvider](docs/sdks/sdk/README.md#createidentityprovider) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createIdentityProviderWithId](docs/sdks/sdk/README.md#createidentityproviderwithid) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createLambda](docs/sdks/sdk/README.md#createlambda) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLambdaWithId](docs/sdks/sdk/README.md#createlambdawithid) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLogout](docs/sdks/sdk/README.md#createlogout) - The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body.
* [createMessageTemplate](docs/sdks/sdk/README.md#createmessagetemplate) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessageTemplateWithId](docs/sdks/sdk/README.md#createmessagetemplatewithid) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessenger](docs/sdks/sdk/README.md#createmessenger) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createMessengerWithId](docs/sdks/sdk/README.md#createmessengerwithid) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createTenant](docs/sdks/sdk/README.md#createtenant) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTenantWithId](docs/sdks/sdk/README.md#createtenantwithid) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTheme](docs/sdks/sdk/README.md#createtheme) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createThemeWithId](docs/sdks/sdk/README.md#createthemewithid) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createToken](docs/sdks/sdk/README.md#createtoken) - Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token.
* [createUser](docs/sdks/sdk/README.md#createuser) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createUserAction](docs/sdks/sdk/README.md#createuseraction) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserActionReason](docs/sdks/sdk/README.md#createuseractionreason) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionReasonWithId](docs/sdks/sdk/README.md#createuseractionreasonwithid) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionWithId](docs/sdks/sdk/README.md#createuseractionwithid) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserConsent](docs/sdks/sdk/README.md#createuserconsent) - Creates a single User consent.
* [createUserConsentWithId](docs/sdks/sdk/README.md#createuserconsentwithid) - Creates a single User consent.
* [createUserLinkWithId](docs/sdks/sdk/README.md#createuserlinkwithid) - Link an external user from a 3rd party identity provider to a FusionAuth user.
* [createUserVerifyEmail](docs/sdks/sdk/README.md#createuserverifyemail) - Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.
* [createUserWithId](docs/sdks/sdk/README.md#createuserwithid) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createWebhook](docs/sdks/sdk/README.md#createwebhook) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [createWebhookWithId](docs/sdks/sdk/README.md#createwebhookwithid) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [deleteAPIKeyWithId](docs/sdks/sdk/README.md#deleteapikeywithid) - Deletes the API key for the given Id.
* [deleteApplicationRoleWithId](docs/sdks/sdk/README.md#deleteapplicationrolewithid) - Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.
* [deleteApplicationWithId](docs/sdks/sdk/README.md#deleteapplicationwithid) - Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.
* [deleteConnectorWithId](docs/sdks/sdk/README.md#deleteconnectorwithid) - Deletes the connector for the given Id.
* [deleteConsentWithId](docs/sdks/sdk/README.md#deleteconsentwithid) - Deletes the consent for the given Id.
* [deleteEmailTemplateWithId](docs/sdks/sdk/README.md#deleteemailtemplatewithid) - Deletes the email template for the given Id.
* [deleteEntityGrantWithId](docs/sdks/sdk/README.md#deleteentitygrantwithid) - Deletes an Entity Grant for the given User or Entity.
* [deleteEntityTypePermissionWithId](docs/sdks/sdk/README.md#deleteentitytypepermissionwithid) - Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.
* [deleteEntityTypeWithId](docs/sdks/sdk/README.md#deleteentitytypewithid) - Deletes the Entity Type for the given Id.
* [deleteEntityWithId](docs/sdks/sdk/README.md#deleteentitywithid) - Deletes the Entity for the given Id.
* [deleteFormFieldWithId](docs/sdks/sdk/README.md#deleteformfieldwithid) - Deletes the form field for the given Id.
* [deleteFormWithId](docs/sdks/sdk/README.md#deleteformwithid) - Deletes the form for the given Id.
* [deleteGroupMembersWithId](docs/sdks/sdk/README.md#deletegroupmemberswithid) - Removes users as members of a group.
* [deleteGroupWithId](docs/sdks/sdk/README.md#deletegroupwithid) - Deletes the group for the given Id.
* [deleteIPAccessControlListWithId](docs/sdks/sdk/README.md#deleteipaccesscontrollistwithid) - Deletes the IP Access Control List for the given Id.
* [deleteIdentityProviderWithId](docs/sdks/sdk/README.md#deleteidentityproviderwithid) - Deletes the identity provider for the given Id.
* [deleteJwt](docs/sdks/sdk/README.md#deletejwt) - Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication
* [deleteKeyWithId](docs/sdks/sdk/README.md#deletekeywithid) - Deletes the key for the given Id.
* [deleteLambdaWithId](docs/sdks/sdk/README.md#deletelambdawithid) - Deletes the lambda for the given Id.
* [deleteMessageTemplateWithId](docs/sdks/sdk/README.md#deletemessagetemplatewithid) - Deletes the message template for the given Id.
* [deleteMessengerWithId](docs/sdks/sdk/README.md#deletemessengerwithid) - Deletes the messenger for the given Id.
* [deleteTenantWithId](docs/sdks/sdk/README.md#deletetenantwithid) - Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).
* [deleteThemeWithId](docs/sdks/sdk/README.md#deletethemewithid) - Deletes the theme for the given Id.
* [deleteUserActionReasonWithId](docs/sdks/sdk/README.md#deleteuseractionreasonwithid) - Deletes the user action reason for the given Id.
* [deleteUserActionWithId](docs/sdks/sdk/README.md#deleteuseractionwithid) - Deactivates the user action with the given Id. OR Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users.
* [deleteUserBulk](docs/sdks/sdk/README.md#deleteuserbulk) - Deactivates the users with the given ids. OR Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users.
* [deleteUserLinkWithId](docs/sdks/sdk/README.md#deleteuserlinkwithid) - Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.
* [deleteUserRegistrationWithId](docs/sdks/sdk/README.md#deleteuserregistrationwithid) - Deletes the user registration for the given user and application. OR Deletes the user registration for the given user and application along with the given JSON body that contains the event information.
* [deleteUserTwoFactorWithId](docs/sdks/sdk/README.md#deleteusertwofactorwithid) - Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.
* [deleteUserWithId](docs/sdks/sdk/README.md#deleteuserwithid) - Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.
* [deleteWebAuthnCredentialWithId](docs/sdks/sdk/README.md#deletewebauthncredentialwithid) - Deletes the WebAuthn credential for the given Id.
* [deleteWebhookWithId](docs/sdks/sdk/README.md#deletewebhookwithid) - Deletes the webhook for the given Id.
* [enableTwoFactorWithId](docs/sdks/sdk/README.md#enabletwofactorwithid) - Enable two-factor authentication for a user.
* [exchangeRefreshTokenForJWTWithId](docs/sdks/sdk/README.md#exchangerefreshtokenforjwtwithid) - Exchange a refresh token for a new JWT.
* [forgotPasswordWithId](docs/sdks/sdk/README.md#forgotpasswordwithid) - Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.
* [generateKey](docs/sdks/sdk/README.md#generatekey) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateKeyWithId](docs/sdks/sdk/README.md#generatekeywithid) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateTwoFactorRecoveryCodesWithId](docs/sdks/sdk/README.md#generatetwofactorrecoverycodeswithid) - Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.
* [generateTwoFactorSecretUsingJWTWithId](docs/sdks/sdk/README.md#generatetwofactorsecretusingjwtwithid) - Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.
* [identityProviderLoginWithId](docs/sdks/sdk/README.md#identityproviderloginwithid) - Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.
* [importKey](docs/sdks/sdk/README.md#importkey) - Import an existing RSA or EC key pair or an HMAC secret.
* [importKeyWithId](docs/sdks/sdk/README.md#importkeywithid) - Import an existing RSA or EC key pair or an HMAC secret.
* [importRefreshTokensWithId](docs/sdks/sdk/README.md#importrefreshtokenswithid) - Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importUsersWithId](docs/sdks/sdk/README.md#importuserswithid) - Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importWebAuthnCredentialWithId](docs/sdks/sdk/README.md#importwebauthncredentialwithid) - Import a WebAuthn credential
* [introspectAccessTokenWithId](docs/sdks/sdk/README.md#introspectaccesstokenwithid) - Inspect an access token issued by FusionAuth.
* [issueJWTWithId](docs/sdks/sdk/README.md#issuejwtwithid) - Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.
* [loginPingWithId](docs/sdks/sdk/README.md#loginpingwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginPingWithRequestWithId](docs/sdks/sdk/README.md#loginpingwithrequestwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginWithId](docs/sdks/sdk/README.md#loginwithid) - Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.
* [lookupIdentityProviderWithId](docs/sdks/sdk/README.md#lookupidentityproviderwithid) - Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.
* [modifyActionWithId](docs/sdks/sdk/README.md#modifyactionwithid) - Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.
* [passwordlessLoginWithId](docs/sdks/sdk/README.md#passwordlessloginwithid) - Complete a login request using a passwordless code
* [patchApplicationRoleWithId](docs/sdks/sdk/README.md#patchapplicationrolewithid) - Updates, via PATCH, the application role with the given id for the application.
* [patchApplicationWithId](docs/sdks/sdk/README.md#patchapplicationwithid) - Updates, via PATCH, the application with the given Id.
* [patchConnectorWithId](docs/sdks/sdk/README.md#patchconnectorwithid) - Updates, via PATCH, the connector with the given Id.
* [patchConsentWithId](docs/sdks/sdk/README.md#patchconsentwithid) - Updates, via PATCH, the consent with the given Id.
* [patchEmailTemplateWithId](docs/sdks/sdk/README.md#patchemailtemplatewithid) - Updates, via PATCH, the email template with the given Id.
* [patchEntityTypeWithId](docs/sdks/sdk/README.md#patchentitytypewithid) - Updates, via PATCH, the Entity Type with the given Id.
* [patchGroupWithId](docs/sdks/sdk/README.md#patchgroupwithid) - Updates, via PATCH, the group with the given Id.
* [patchIdentityProviderWithId](docs/sdks/sdk/README.md#patchidentityproviderwithid) - Updates, via PATCH, the identity provider with the given Id.
* [patchIntegrationsWithId](docs/sdks/sdk/README.md#patchintegrationswithid) - Updates, via PATCH, the available integrations.
* [patchLambdaWithId](docs/sdks/sdk/README.md#patchlambdawithid) - Updates, via PATCH, the lambda with the given Id.
* [patchMessageTemplateWithId](docs/sdks/sdk/README.md#patchmessagetemplatewithid) - Updates, via PATCH, the message template with the given Id.
* [patchMessengerWithId](docs/sdks/sdk/README.md#patchmessengerwithid) - Updates, via PATCH, the messenger with the given Id.
* [patchRegistrationWithId](docs/sdks/sdk/README.md#patchregistrationwithid) - Updates, via PATCH, the registration for the user with the given id and the application defined in the request.
* [patchSystemConfigurationWithId](docs/sdks/sdk/README.md#patchsystemconfigurationwithid) - Updates, via PATCH, the system configuration.
* [patchTenantWithId](docs/sdks/sdk/README.md#patchtenantwithid) - Updates, via PATCH, the tenant with the given Id.
* [patchThemeWithId](docs/sdks/sdk/README.md#patchthemewithid) - Updates, via PATCH, the theme with the given Id.
* [patchUserActionReasonWithId](docs/sdks/sdk/README.md#patchuseractionreasonwithid) - Updates, via PATCH, the user action reason with the given Id.
* [patchUserActionWithId](docs/sdks/sdk/README.md#patchuseractionwithid) - Updates, via PATCH, the user action with the given Id.
* [patchUserConsentWithId](docs/sdks/sdk/README.md#patchuserconsentwithid) - Updates, via PATCH, a single User consent by Id.
* [patchUserWithId](docs/sdks/sdk/README.md#patchuserwithid) - Updates, via PATCH, the user with the given Id.
* [reconcileJWTWithId](docs/sdks/sdk/README.md#reconcilejwtwithid) - Reconcile a User to FusionAuth using JWT issued from another Identity Provider.
* [register](docs/sdks/sdk/README.md#register) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [registerWithId](docs/sdks/sdk/README.md#registerwithid) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [reindexWithId](docs/sdks/sdk/README.md#reindexwithid) - Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.
* [removeUserFromFamilyWithId](docs/sdks/sdk/README.md#removeuserfromfamilywithid) - Removes a user from the family with the given id.
* [retrieveAPIKeyWithId](docs/sdks/sdk/README.md#retrieveapikeywithid) - Retrieves an authentication API key for the given id
* [retrieveActionWithId](docs/sdks/sdk/README.md#retrieveactionwithid) - Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.
* [retrieveApplication](docs/sdks/sdk/README.md#retrieveapplication) - Retrieves the application for the given id or all of the applications if the id is null. OR Retrieves all the applications that are currently inactive.
* [retrieveApplicationWithId](docs/sdks/sdk/README.md#retrieveapplicationwithid) - Retrieves the application for the given id or all of the applications if the id is null.
* [retrieveAuditLogWithId](docs/sdks/sdk/README.md#retrieveauditlogwithid) - Retrieves a single audit log for the given Id.
* [retrieveConnectorWithId](docs/sdks/sdk/README.md#retrieveconnectorwithid) - Retrieves the connector with the given Id.
* [retrieveConsentWithId](docs/sdks/sdk/README.md#retrieveconsentwithid) - Retrieves the Consent for the given Id.
* [retrieveDailyActiveReportWithId](docs/sdks/sdk/README.md#retrievedailyactivereportwithid) - Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.
* [retrieveEmailTemplate](docs/sdks/sdk/README.md#retrieveemailtemplate) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEmailTemplatePreviewWithId](docs/sdks/sdk/README.md#retrieveemailtemplatepreviewwithid) - Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.
* [retrieveEmailTemplateWithId](docs/sdks/sdk/README.md#retrieveemailtemplatewithid) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEntityGrantWithId](docs/sdks/sdk/README.md#retrieveentitygrantwithid) - Retrieves an Entity Grant for the given Entity and User/Entity.
* [retrieveEntityTypeWithId](docs/sdks/sdk/README.md#retrieveentitytypewithid) - Retrieves the Entity Type for the given Id.
* [retrieveEntityWithId](docs/sdks/sdk/README.md#retrieveentitywithid) - Retrieves the Entity for the given Id.
* [retrieveEventLogWithId](docs/sdks/sdk/README.md#retrieveeventlogwithid) - Retrieves a single event log for the given Id.
* [retrieveFamiliesWithId](docs/sdks/sdk/README.md#retrievefamilieswithid) - Retrieves all the families that a user belongs to.
* [retrieveFamilyMembersByFamilyIdWithId](docs/sdks/sdk/README.md#retrievefamilymembersbyfamilyidwithid) - Retrieves all the members of a family by the unique Family Id.
* [retrieveFormFieldWithId](docs/sdks/sdk/README.md#retrieveformfieldwithid) - Retrieves the form field with the given Id.
* [retrieveFormWithId](docs/sdks/sdk/README.md#retrieveformwithid) - Retrieves the form with the given Id.
* [retrieveGroupWithId](docs/sdks/sdk/README.md#retrievegroupwithid) - Retrieves the group for the given Id.
* [retrieveIPAccessControlListWithId](docs/sdks/sdk/README.md#retrieveipaccesscontrollistwithid) - Retrieves the IP Access Control List with the given Id.
* [retrieveIdentityProvider](docs/sdks/sdk/README.md#retrieveidentityprovider) - Retrieve a single Identity Provider user (link). OR Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP.
* [retrieveIdentityProviderByTypeWithId](docs/sdks/sdk/README.md#retrieveidentityproviderbytypewithid) - Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.
* [retrieveIdentityProviderWithId](docs/sdks/sdk/README.md#retrieveidentityproviderwithid) - Retrieves the identity provider for the given id or all of the identity providers if the id is null.
* [retrieveJwt](docs/sdks/sdk/README.md#retrievejwt) - Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid). OR Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.
* [retrieveKeyWithId](docs/sdks/sdk/README.md#retrievekeywithid) - Retrieves the key for the given Id.
* [retrieveLambdaWithId](docs/sdks/sdk/README.md#retrievelambdawithid) - Retrieves the lambda for the given Id.
* [retrieveLambdasByTypeWithId](docs/sdks/sdk/README.md#retrievelambdasbytypewithid) - Retrieves all the lambdas for the provided type.
* [retrieveMessageTemplate](docs/sdks/sdk/README.md#retrievemessagetemplate) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessageTemplatePreviewWithId](docs/sdks/sdk/README.md#retrievemessagetemplatepreviewwithid) - Creates a preview of the message template provided in the request, normalized to a given locale.
* [retrieveMessageTemplateWithId](docs/sdks/sdk/README.md#retrievemessagetemplatewithid) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessengerWithId](docs/sdks/sdk/README.md#retrievemessengerwithid) - Retrieves the messenger with the given Id.
* [retrieveMonthlyActiveReportWithId](docs/sdks/sdk/README.md#retrievemonthlyactivereportwithid) - Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.
* [retrieveOauthConfigurationWithId](docs/sdks/sdk/README.md#retrieveoauthconfigurationwithid) - Retrieves the Oauth2 configuration for the application for the given Application Id.
* [retrievePasswordValidationRulesWithTenantIdWithId](docs/sdks/sdk/README.md#retrievepasswordvalidationruleswithtenantidwithid) - Retrieves the password validation rules for a specific tenant.  This API does not require an API key.
* [retrievePendingChildrenWithId](docs/sdks/sdk/README.md#retrievependingchildrenwithid) - Retrieves all the children for the given parent email address.
* [retrieveRefreshTokenByIdWithId](docs/sdks/sdk/README.md#retrieverefreshtokenbyidwithid) - Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.
* [retrieveRefreshTokensWithId](docs/sdks/sdk/README.md#retrieverefreshtokenswithid) - Retrieves the refresh tokens that belong to the user with the given Id.
* [retrieveRegistrationReportWithId](docs/sdks/sdk/README.md#retrieveregistrationreportwithid) - Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.
* [retrieveRegistrationWithId](docs/sdks/sdk/README.md#retrieveregistrationwithid) - Retrieves the user registration for the user with the given id and the given application id.
* [retrieveReport](docs/sdks/sdk/README.md#retrievereport) - Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application.
* [retrieveTenantWithId](docs/sdks/sdk/README.md#retrievetenantwithid) - Retrieves the tenant for the given Id.
* [retrieveThemeWithId](docs/sdks/sdk/README.md#retrievethemewithid) - Retrieves the theme for the given Id.
* [retrieveTwoFactorRecoveryCodesWithId](docs/sdks/sdk/README.md#retrievetwofactorrecoverycodeswithid) - Retrieve two-factor recovery codes for a user.
* [retrieveTwoFactorStatusWithId](docs/sdks/sdk/README.md#retrievetwofactorstatuswithid) - Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.
* [retrieveUser](docs/sdks/sdk/README.md#retrieveuser) - Retrieves the user for the given username. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user for the given email. OR Retrieves the user for the loginId. The loginId can be either the username or the email.
* [retrieveUserAction](docs/sdks/sdk/README.md#retrieveuseraction) - Retrieves all the user actions that are currently inactive. OR Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActionReason](docs/sdks/sdk/README.md#retrieveuseractionreason) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionReasonWithId](docs/sdks/sdk/README.md#retrieveuseractionreasonwithid) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionWithId](docs/sdks/sdk/README.md#retrieveuseractionwithid) - Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActioning](docs/sdks/sdk/README.md#retrieveuseractioning) - Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based.
* [retrieveUserChangePassword](docs/sdks/sdk/README.md#retrieveuserchangepassword) - Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [retrieveUserCommentsWithId](docs/sdks/sdk/README.md#retrieveusercommentswithid) - Retrieves all the comments for the user with the given Id.
* [retrieveUserConsentWithId](docs/sdks/sdk/README.md#retrieveuserconsentwithid) - Retrieve a single User consent by Id.
* [retrieveUserConsentsWithId](docs/sdks/sdk/README.md#retrieveuserconsentswithid) - Retrieves all the consents for a User.
* [retrieveUserInfoFromAccessTokenWithId](docs/sdks/sdk/README.md#retrieveuserinfofromaccesstokenwithid) - Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.
* [retrieveUserRecentLogin](docs/sdks/sdk/README.md#retrieveuserrecentlogin) - Retrieves the last number of login records. OR Retrieves the last number of login records for a user.
* [retrieveUserWithId](docs/sdks/sdk/README.md#retrieveuserwithid) - Retrieves the user for the given Id.
* [retrieveWebAuthnCredentialWithId](docs/sdks/sdk/README.md#retrievewebauthncredentialwithid) - Retrieves the WebAuthn credential for the given Id.
* [retrieveWebAuthnCredentialsForUserWithId](docs/sdks/sdk/README.md#retrievewebauthncredentialsforuserwithid) - Retrieves all WebAuthn credentials for the given user.
* [retrieveWebhook](docs/sdks/sdk/README.md#retrievewebhook) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [retrieveWebhookWithId](docs/sdks/sdk/README.md#retrievewebhookwithid) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [revokeRefreshTokenByIdWithId](docs/sdks/sdk/README.md#revokerefreshtokenbyidwithid) - Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.
* [revokeUserConsentWithId](docs/sdks/sdk/README.md#revokeuserconsentwithid) - Revokes a single User consent by Id.
* [searchApplicationsWithId](docs/sdks/sdk/README.md#searchapplicationswithid) - Searches applications with the specified criteria and pagination.
* [searchAuditLogsWithId](docs/sdks/sdk/README.md#searchauditlogswithid) - Searches the audit logs with the specified criteria and pagination.
* [searchConsentsWithId](docs/sdks/sdk/README.md#searchconsentswithid) - Searches consents with the specified criteria and pagination.
* [searchEmailTemplatesWithId](docs/sdks/sdk/README.md#searchemailtemplateswithid) - Searches email templates with the specified criteria and pagination.
* [searchEntitiesByIdsWithId](docs/sdks/sdk/README.md#searchentitiesbyidswithid) - Retrieves the entities for the given ids. If any id is invalid, it is ignored.
* [searchEntitiesWithId](docs/sdks/sdk/README.md#searchentitieswithid) - Searches entities with the specified criteria and pagination.
* [searchEntityGrantsWithId](docs/sdks/sdk/README.md#searchentitygrantswithid) - Searches Entity Grants with the specified criteria and pagination.
* [searchEntityTypesWithId](docs/sdks/sdk/README.md#searchentitytypeswithid) - Searches the entity types with the specified criteria and pagination.
* [searchEventLogsWithId](docs/sdks/sdk/README.md#searcheventlogswithid) - Searches the event logs with the specified criteria and pagination.
* [searchGroupMembersWithId](docs/sdks/sdk/README.md#searchgroupmemberswithid) - Searches group members with the specified criteria and pagination.
* [searchGroupsWithId](docs/sdks/sdk/README.md#searchgroupswithid) - Searches groups with the specified criteria and pagination.
* [searchIPAccessControlListsWithId](docs/sdks/sdk/README.md#searchipaccesscontrollistswithid) - Searches the IP Access Control Lists with the specified criteria and pagination.
* [searchIdentityProvidersWithId](docs/sdks/sdk/README.md#searchidentityproviderswithid) - Searches identity providers with the specified criteria and pagination.
* [searchKeysWithId](docs/sdks/sdk/README.md#searchkeyswithid) - Searches keys with the specified criteria and pagination.
* [searchLambdasWithId](docs/sdks/sdk/README.md#searchlambdaswithid) - Searches lambdas with the specified criteria and pagination.
* [searchLoginRecordsWithId](docs/sdks/sdk/README.md#searchloginrecordswithid) - Searches the login records with the specified criteria and pagination.
* [searchTenantsWithId](docs/sdks/sdk/README.md#searchtenantswithid) - Searches tenants with the specified criteria and pagination.
* [searchThemesWithId](docs/sdks/sdk/README.md#searchthemeswithid) - Searches themes with the specified criteria and pagination.
* [searchUserCommentsWithId](docs/sdks/sdk/README.md#searchusercommentswithid) - Searches user comments with the specified criteria and pagination.
* [searchUsersByIdsWithId](docs/sdks/sdk/README.md#searchusersbyidswithid) - Retrieves the users for the given ids. If any id is invalid, it is ignored.
* [searchUsersByQueryWithId](docs/sdks/sdk/README.md#searchusersbyquerywithid) - Retrieves the users for the given search criteria and pagination.
* [searchWebhooksWithId](docs/sdks/sdk/README.md#searchwebhookswithid) - Searches webhooks with the specified criteria and pagination.
* [sendEmailWithId](docs/sdks/sdk/README.md#sendemailwithid) - Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.
* [sendFamilyRequestEmailWithId](docs/sdks/sdk/README.md#sendfamilyrequestemailwithid) - Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.
* [sendPasswordlessCodeWithId](docs/sdks/sdk/README.md#sendpasswordlesscodewithid) - Send a passwordless authentication code in an email to complete login.
* [sendTwoFactorCodeForEnableDisableWithId](docs/sdks/sdk/README.md#sendtwofactorcodeforenabledisablewithid) - Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.
* [sendTwoFactorCodeForLoginUsingMethodWithId](docs/sdks/sdk/README.md#sendtwofactorcodeforloginusingmethodwithid) - Send a Two Factor authentication code to allow the completion of Two Factor authentication.
* [startIdentityProviderLoginWithId](docs/sdks/sdk/README.md#startidentityproviderloginwithid) - Begins a login request for a 3rd party login that requires user interaction such as HYPR.
* [startPasswordlessLoginWithId](docs/sdks/sdk/README.md#startpasswordlessloginwithid) - Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.
* [startTwoFactorLoginWithId](docs/sdks/sdk/README.md#starttwofactorloginwithid) - Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside of a normal login that originated from the Login API (/api/login).
* [startWebAuthnLoginWithId](docs/sdks/sdk/README.md#startwebauthnloginwithid) - Start a WebAuthn authentication ceremony by generating a new challenge for the user
* [startWebAuthnRegistrationWithId](docs/sdks/sdk/README.md#startwebauthnregistrationwithid) - Start a WebAuthn registration ceremony by generating a new challenge for the user
* [twoFactorLoginWithId](docs/sdks/sdk/README.md#twofactorloginwithid) - Complete login using a 2FA challenge
* [updateAPIKeyWithId](docs/sdks/sdk/README.md#updateapikeywithid) - Updates an API key by given id
* [updateApplicationRoleWithId](docs/sdks/sdk/README.md#updateapplicationrolewithid) - Updates the application role with the given id for the application.
* [updateApplicationWithId](docs/sdks/sdk/README.md#updateapplicationwithid) - Updates the application with the given Id. OR Reactivates the application with the given Id.
* [updateConnectorWithId](docs/sdks/sdk/README.md#updateconnectorwithid) - Updates the connector with the given Id.
* [updateConsentWithId](docs/sdks/sdk/README.md#updateconsentwithid) - Updates the consent with the given Id.
* [updateEmailTemplateWithId](docs/sdks/sdk/README.md#updateemailtemplatewithid) - Updates the email template with the given Id.
* [updateEntityTypePermissionWithId](docs/sdks/sdk/README.md#updateentitytypepermissionwithid) - Updates the permission with the given id for the entity type.
* [updateEntityTypeWithId](docs/sdks/sdk/README.md#updateentitytypewithid) - Updates the Entity Type with the given Id.
* [updateEntityWithId](docs/sdks/sdk/README.md#updateentitywithid) - Updates the Entity with the given Id.
* [updateFormFieldWithId](docs/sdks/sdk/README.md#updateformfieldwithid) - Updates the form field with the given Id.
* [updateFormWithId](docs/sdks/sdk/README.md#updateformwithid) - Updates the form with the given Id.
* [updateGroupMembersWithId](docs/sdks/sdk/README.md#updategroupmemberswithid) - Creates a member in a group.
* [updateGroupWithId](docs/sdks/sdk/README.md#updategroupwithid) - Updates the group with the given Id.
* [updateIPAccessControlListWithId](docs/sdks/sdk/README.md#updateipaccesscontrollistwithid) - Updates the IP Access Control List with the given Id.
* [updateIdentityProviderWithId](docs/sdks/sdk/README.md#updateidentityproviderwithid) - Updates the identity provider with the given Id.
* [updateIntegrationsWithId](docs/sdks/sdk/README.md#updateintegrationswithid) - Updates the available integrations.
* [updateKeyWithId](docs/sdks/sdk/README.md#updatekeywithid) - Updates the key with the given Id.
* [updateLambdaWithId](docs/sdks/sdk/README.md#updatelambdawithid) - Updates the lambda with the given Id.
* [updateMessageTemplateWithId](docs/sdks/sdk/README.md#updatemessagetemplatewithid) - Updates the message template with the given Id.
* [updateMessengerWithId](docs/sdks/sdk/README.md#updatemessengerwithid) - Updates the messenger with the given Id.
* [updateRegistrationWithId](docs/sdks/sdk/README.md#updateregistrationwithid) - Updates the registration for the user with the given id and the application defined in the request.
* [updateSystemConfigurationWithId](docs/sdks/sdk/README.md#updatesystemconfigurationwithid) - Updates the system configuration.
* [updateTenantWithId](docs/sdks/sdk/README.md#updatetenantwithid) - Updates the tenant with the given Id.
* [updateThemeWithId](docs/sdks/sdk/README.md#updatethemewithid) - Updates the theme with the given Id.
* [updateUserActionReasonWithId](docs/sdks/sdk/README.md#updateuseractionreasonwithid) - Updates the user action reason with the given Id.
* [updateUserActionWithId](docs/sdks/sdk/README.md#updateuseractionwithid) - Reactivates the user action with the given Id. OR Updates the user action with the given Id.
* [updateUserConsentWithId](docs/sdks/sdk/README.md#updateuserconsentwithid) - Updates a single User consent by Id.
* [updateUserVerifyEmail](docs/sdks/sdk/README.md#updateuserverifyemail) - Re-sends the verification email to the user. OR Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.
* [updateUserVerifyRegistration](docs/sdks/sdk/README.md#updateuserverifyregistration) - Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system. OR Re-sends the application registration verification email to the user.
* [updateUserWithId](docs/sdks/sdk/README.md#updateuserwithid) - Reactivates the user with the given Id. OR Updates the user with the given Id.
* [updateWebhookWithId](docs/sdks/sdk/README.md#updatewebhookwithid) - Updates the webhook with the given Id.
* [upsertEntityGrantWithId](docs/sdks/sdk/README.md#upsertentitygrantwithid) - Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.
* [validateDeviceWithId](docs/sdks/sdk/README.md#validatedevicewithid) - Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.
* [validateJWTWithId](docs/sdks/sdk/README.md#validatejwtwithid) - Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.
* [vendJWTWithId](docs/sdks/sdk/README.md#vendjwtwithid) - It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.
* [verifyUserRegistrationWithId](docs/sdks/sdk/README.md#verifyuserregistrationwithid) - Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

