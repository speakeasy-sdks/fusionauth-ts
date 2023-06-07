# SDK

## Overview

FusionAuth API: This is a FusionAuth server. Find out more at [https://fusionauth.io](https://fusionauth.io). You need to [set up an API key](https://fusionauth.io/docs/v1/tech/apis/authentication#managing-api-keys) in the FusionAuth instance you are using to test out the API calls.

### Available Operations

* [actionUserWithId](#actionuserwithid) - Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.
* [activateReactorWithId](#activatereactorwithid) - Activates the FusionAuth Reactor using a license id and optionally a license text (for air-gapped deployments)
* [addUserToFamilyWithId](#addusertofamilywithid) - Adds a user to an existing family. The family id must be specified.
* [cancelActionWithId](#cancelactionwithid) - Cancels the user action.
* [changePasswordByIdentityWithId](#changepasswordbyidentitywithid) - Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.
* [changePasswordWithId](#changepasswordwithid) - Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.
* [checkChangePasswordUsingIdWithId](#checkchangepasswordusingidwithid) - Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [commentOnUserWithId](#commentonuserwithid) - Adds a comment to the user's account.
* [completeWebAuthnAssertionWithId](#completewebauthnassertionwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in
* [completeWebAuthnLoginWithId](#completewebauthnloginwithid) - Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in
* [completeWebAuthnRegistrationWithId](#completewebauthnregistrationwithid) - Complete a WebAuthn registration ceremony by validating the client request and saving the new credential
* [createAPIKey](#createapikey) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.
* [createApiKeyWithId](#createapikeywithid) - Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant. OR Updates an authentication API key by given id
* [createApplication](#createapplication) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createApplicationRole](#createapplicationrole) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationRoleWithId](#createapplicationrolewithid) - Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.
* [createApplicationWithId](#createapplicationwithid) - Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.
* [createAuditLogWithId](#createauditlogwithid) - Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.
* [createConnector](#createconnector) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConnectorWithId](#createconnectorwithid) - Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.
* [createConsent](#createconsent) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createConsentWithId](#createconsentwithid) - Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.
* [createEmailTemplate](#createemailtemplate) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEmailTemplateWithId](#createemailtemplatewithid) - Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createEntity](#createentity) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createEntityType](#createentitytype) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityTypePermission](#createentitytypepermission) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypePermissionWithId](#createentitytypepermissionwithid) - Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.
* [createEntityTypeWithId](#createentitytypewithid) - Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.
* [createEntityWithId](#createentitywithid) - Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.
* [createFamily](#createfamily) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createFamilyWithId](#createfamilywithid) - Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.
* [createForm](#createform) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormField](#createformfield) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormFieldWithId](#createformfieldwithid) - Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createFormWithId](#createformwithid) - Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.
* [createGroup](#creategroup) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createGroupMembersWithId](#creategroupmemberswithid) - Creates a member in a group.
* [createGroupWithId](#creategroupwithid) - Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.
* [createIPAccessControlList](#createipaccesscontrollist) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIPAccessControlListWithId](#createipaccesscontrollistwithid) - Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.
* [createIdentityProvider](#createidentityprovider) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createIdentityProviderWithId](#createidentityproviderwithid) - Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.
* [createLambda](#createlambda) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLambdaWithId](#createlambdawithid) - Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.
* [createLogout](#createlogout) - The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body.
* [createMessageTemplate](#createmessagetemplate) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessageTemplateWithId](#createmessagetemplatewithid) - Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.
* [createMessenger](#createmessenger) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createMessengerWithId](#createmessengerwithid) - Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.
* [createTenant](#createtenant) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTenantWithId](#createtenantwithid) - Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.
* [createTheme](#createtheme) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createThemeWithId](#createthemewithid) - Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.
* [createToken](#createtoken) - Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token.
* [createUser](#createuser) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createUserAction](#createuseraction) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserActionReason](#createuseractionreason) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionReasonWithId](#createuseractionreasonwithid) - Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.
* [createUserActionWithId](#createuseractionwithid) - Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.
* [createUserConsent](#createuserconsent) - Creates a single User consent.
* [createUserConsentWithId](#createuserconsentwithid) - Creates a single User consent.
* [createUserLinkWithId](#createuserlinkwithid) - Link an external user from a 3rd party identity provider to a FusionAuth user.
* [createUserVerifyEmail](#createuserverifyemail) - Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.
* [createUserWithId](#createuserwithid) - Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.
* [createWebhook](#createwebhook) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [createWebhookWithId](#createwebhookwithid) - Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.
* [deleteAPIKeyWithId](#deleteapikeywithid) - Deletes the API key for the given Id.
* [deleteApplicationRoleWithId](#deleteapplicationrolewithid) - Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.
* [deleteApplicationWithId](#deleteapplicationwithid) - Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.
* [deleteConnectorWithId](#deleteconnectorwithid) - Deletes the connector for the given Id.
* [deleteConsentWithId](#deleteconsentwithid) - Deletes the consent for the given Id.
* [deleteEmailTemplateWithId](#deleteemailtemplatewithid) - Deletes the email template for the given Id.
* [deleteEntityGrantWithId](#deleteentitygrantwithid) - Deletes an Entity Grant for the given User or Entity.
* [deleteEntityTypePermissionWithId](#deleteentitytypepermissionwithid) - Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.
* [deleteEntityTypeWithId](#deleteentitytypewithid) - Deletes the Entity Type for the given Id.
* [deleteEntityWithId](#deleteentitywithid) - Deletes the Entity for the given Id.
* [deleteFormFieldWithId](#deleteformfieldwithid) - Deletes the form field for the given Id.
* [deleteFormWithId](#deleteformwithid) - Deletes the form for the given Id.
* [deleteGroupMembersWithId](#deletegroupmemberswithid) - Removes users as members of a group.
* [deleteGroupWithId](#deletegroupwithid) - Deletes the group for the given Id.
* [deleteIPAccessControlListWithId](#deleteipaccesscontrollistwithid) - Deletes the IP Access Control List for the given Id.
* [deleteIdentityProviderWithId](#deleteidentityproviderwithid) - Deletes the identity provider for the given Id.
* [deleteJwt](#deletejwt) - Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication
* [deleteKeyWithId](#deletekeywithid) - Deletes the key for the given Id.
* [deleteLambdaWithId](#deletelambdawithid) - Deletes the lambda for the given Id.
* [deleteMessageTemplateWithId](#deletemessagetemplatewithid) - Deletes the message template for the given Id.
* [deleteMessengerWithId](#deletemessengerwithid) - Deletes the messenger for the given Id.
* [deleteTenantWithId](#deletetenantwithid) - Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).
* [deleteThemeWithId](#deletethemewithid) - Deletes the theme for the given Id.
* [deleteUserActionReasonWithId](#deleteuseractionreasonwithid) - Deletes the user action reason for the given Id.
* [deleteUserActionWithId](#deleteuseractionwithid) - Deactivates the user action with the given Id. OR Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users.
* [deleteUserBulk](#deleteuserbulk) - Deactivates the users with the given ids. OR Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users.
* [deleteUserLinkWithId](#deleteuserlinkwithid) - Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.
* [deleteUserRegistrationWithId](#deleteuserregistrationwithid) - Deletes the user registration for the given user and application. OR Deletes the user registration for the given user and application along with the given JSON body that contains the event information.
* [deleteUserTwoFactorWithId](#deleteusertwofactorwithid) - Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.
* [deleteUserWithId](#deleteuserwithid) - Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.
* [deleteWebAuthnCredentialWithId](#deletewebauthncredentialwithid) - Deletes the WebAuthn credential for the given Id.
* [deleteWebhookWithId](#deletewebhookwithid) - Deletes the webhook for the given Id.
* [enableTwoFactorWithId](#enabletwofactorwithid) - Enable two-factor authentication for a user.
* [exchangeRefreshTokenForJWTWithId](#exchangerefreshtokenforjwtwithid) - Exchange a refresh token for a new JWT.
* [forgotPasswordWithId](#forgotpasswordwithid) - Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.
* [generateKey](#generatekey) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateKeyWithId](#generatekeywithid) - Generate a new RSA or EC key pair or an HMAC secret.
* [generateTwoFactorRecoveryCodesWithId](#generatetwofactorrecoverycodeswithid) - Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.
* [generateTwoFactorSecretUsingJWTWithId](#generatetwofactorsecretusingjwtwithid) - Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.
* [identityProviderLoginWithId](#identityproviderloginwithid) - Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.
* [importKey](#importkey) - Import an existing RSA or EC key pair or an HMAC secret.
* [importKeyWithId](#importkeywithid) - Import an existing RSA or EC key pair or an HMAC secret.
* [importRefreshTokensWithId](#importrefreshtokenswithid) - Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importUsersWithId](#importuserswithid) - Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.
* [importWebAuthnCredentialWithId](#importwebauthncredentialwithid) - Import a WebAuthn credential
* [introspectAccessTokenWithId](#introspectaccesstokenwithid) - Inspect an access token issued by FusionAuth.
* [issueJWTWithId](#issuejwtwithid) - Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.
* [loginPingWithId](#loginpingwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginPingWithRequestWithId](#loginpingwithrequestwithid) - Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.
* [loginWithId](#loginwithid) - Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.
* [lookupIdentityProviderWithId](#lookupidentityproviderwithid) - Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.
* [modifyActionWithId](#modifyactionwithid) - Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.
* [passwordlessLoginWithId](#passwordlessloginwithid) - Complete a login request using a passwordless code
* [patchApplicationRoleWithId](#patchapplicationrolewithid) - Updates, via PATCH, the application role with the given id for the application.
* [patchApplicationWithId](#patchapplicationwithid) - Updates, via PATCH, the application with the given Id.
* [patchConnectorWithId](#patchconnectorwithid) - Updates, via PATCH, the connector with the given Id.
* [patchConsentWithId](#patchconsentwithid) - Updates, via PATCH, the consent with the given Id.
* [patchEmailTemplateWithId](#patchemailtemplatewithid) - Updates, via PATCH, the email template with the given Id.
* [patchEntityTypeWithId](#patchentitytypewithid) - Updates, via PATCH, the Entity Type with the given Id.
* [patchGroupWithId](#patchgroupwithid) - Updates, via PATCH, the group with the given Id.
* [patchIdentityProviderWithId](#patchidentityproviderwithid) - Updates, via PATCH, the identity provider with the given Id.
* [patchIntegrationsWithId](#patchintegrationswithid) - Updates, via PATCH, the available integrations.
* [patchLambdaWithId](#patchlambdawithid) - Updates, via PATCH, the lambda with the given Id.
* [patchMessageTemplateWithId](#patchmessagetemplatewithid) - Updates, via PATCH, the message template with the given Id.
* [patchMessengerWithId](#patchmessengerwithid) - Updates, via PATCH, the messenger with the given Id.
* [patchRegistrationWithId](#patchregistrationwithid) - Updates, via PATCH, the registration for the user with the given id and the application defined in the request.
* [patchSystemConfigurationWithId](#patchsystemconfigurationwithid) - Updates, via PATCH, the system configuration.
* [patchTenantWithId](#patchtenantwithid) - Updates, via PATCH, the tenant with the given Id.
* [patchThemeWithId](#patchthemewithid) - Updates, via PATCH, the theme with the given Id.
* [patchUserActionReasonWithId](#patchuseractionreasonwithid) - Updates, via PATCH, the user action reason with the given Id.
* [patchUserActionWithId](#patchuseractionwithid) - Updates, via PATCH, the user action with the given Id.
* [patchUserConsentWithId](#patchuserconsentwithid) - Updates, via PATCH, a single User consent by Id.
* [patchUserWithId](#patchuserwithid) - Updates, via PATCH, the user with the given Id.
* [reconcileJWTWithId](#reconcilejwtwithid) - Reconcile a User to FusionAuth using JWT issued from another Identity Provider.
* [register](#register) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [registerWithId](#registerwithid) - Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.
* [reindexWithId](#reindexwithid) - Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.
* [removeUserFromFamilyWithId](#removeuserfromfamilywithid) - Removes a user from the family with the given id.
* [retrieveAPIKeyWithId](#retrieveapikeywithid) - Retrieves an authentication API key for the given id
* [retrieveActionWithId](#retrieveactionwithid) - Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.
* [retrieveApplication](#retrieveapplication) - Retrieves the application for the given id or all of the applications if the id is null. OR Retrieves all the applications that are currently inactive.
* [retrieveApplicationWithId](#retrieveapplicationwithid) - Retrieves the application for the given id or all of the applications if the id is null.
* [retrieveAuditLogWithId](#retrieveauditlogwithid) - Retrieves a single audit log for the given Id.
* [retrieveConnectorWithId](#retrieveconnectorwithid) - Retrieves the connector with the given Id.
* [retrieveConsentWithId](#retrieveconsentwithid) - Retrieves the Consent for the given Id.
* [retrieveDailyActiveReportWithId](#retrievedailyactivereportwithid) - Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.
* [retrieveEmailTemplate](#retrieveemailtemplate) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEmailTemplatePreviewWithId](#retrieveemailtemplatepreviewwithid) - Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.
* [retrieveEmailTemplateWithId](#retrieveemailtemplatewithid) - Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.
* [retrieveEntityGrantWithId](#retrieveentitygrantwithid) - Retrieves an Entity Grant for the given Entity and User/Entity.
* [retrieveEntityTypeWithId](#retrieveentitytypewithid) - Retrieves the Entity Type for the given Id.
* [retrieveEntityWithId](#retrieveentitywithid) - Retrieves the Entity for the given Id.
* [retrieveEventLogWithId](#retrieveeventlogwithid) - Retrieves a single event log for the given Id.
* [retrieveFamiliesWithId](#retrievefamilieswithid) - Retrieves all the families that a user belongs to.
* [retrieveFamilyMembersByFamilyIdWithId](#retrievefamilymembersbyfamilyidwithid) - Retrieves all the members of a family by the unique Family Id.
* [retrieveFormFieldWithId](#retrieveformfieldwithid) - Retrieves the form field with the given Id.
* [retrieveFormWithId](#retrieveformwithid) - Retrieves the form with the given Id.
* [retrieveGroupWithId](#retrievegroupwithid) - Retrieves the group for the given Id.
* [retrieveIPAccessControlListWithId](#retrieveipaccesscontrollistwithid) - Retrieves the IP Access Control List with the given Id.
* [retrieveIdentityProvider](#retrieveidentityprovider) - Retrieve a single Identity Provider user (link). OR Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP.
* [retrieveIdentityProviderByTypeWithId](#retrieveidentityproviderbytypewithid) - Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.
* [retrieveIdentityProviderWithId](#retrieveidentityproviderwithid) - Retrieves the identity provider for the given id or all of the identity providers if the id is null.
* [retrieveJwt](#retrievejwt) - Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid). OR Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.
* [retrieveKeyWithId](#retrievekeywithid) - Retrieves the key for the given Id.
* [retrieveLambdaWithId](#retrievelambdawithid) - Retrieves the lambda for the given Id.
* [retrieveLambdasByTypeWithId](#retrievelambdasbytypewithid) - Retrieves all the lambdas for the provided type.
* [retrieveMessageTemplate](#retrievemessagetemplate) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessageTemplatePreviewWithId](#retrievemessagetemplatepreviewwithid) - Creates a preview of the message template provided in the request, normalized to a given locale.
* [retrieveMessageTemplateWithId](#retrievemessagetemplatewithid) - Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.
* [retrieveMessengerWithId](#retrievemessengerwithid) - Retrieves the messenger with the given Id.
* [retrieveMonthlyActiveReportWithId](#retrievemonthlyactivereportwithid) - Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.
* [retrieveOauthConfigurationWithId](#retrieveoauthconfigurationwithid) - Retrieves the Oauth2 configuration for the application for the given Application Id.
* [retrievePasswordValidationRulesWithTenantIdWithId](#retrievepasswordvalidationruleswithtenantidwithid) - Retrieves the password validation rules for a specific tenant.  This API does not require an API key.
* [retrievePendingChildrenWithId](#retrievependingchildrenwithid) - Retrieves all the children for the given parent email address.
* [retrieveRefreshTokenByIdWithId](#retrieverefreshtokenbyidwithid) - Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.
* [retrieveRefreshTokensWithId](#retrieverefreshtokenswithid) - Retrieves the refresh tokens that belong to the user with the given Id.
* [retrieveRegistrationReportWithId](#retrieveregistrationreportwithid) - Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.
* [retrieveRegistrationWithId](#retrieveregistrationwithid) - Retrieves the user registration for the user with the given id and the given application id.
* [retrieveReport](#retrievereport) - Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application.
* [retrieveTenantWithId](#retrievetenantwithid) - Retrieves the tenant for the given Id.
* [retrieveThemeWithId](#retrievethemewithid) - Retrieves the theme for the given Id.
* [retrieveTwoFactorRecoveryCodesWithId](#retrievetwofactorrecoverycodeswithid) - Retrieve two-factor recovery codes for a user.
* [retrieveTwoFactorStatusWithId](#retrievetwofactorstatuswithid) - Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.
* [retrieveUser](#retrieveuser) - Retrieves the user for the given username. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user for the given email. OR Retrieves the user for the loginId. The loginId can be either the username or the email.
* [retrieveUserAction](#retrieveuseraction) - Retrieves all the user actions that are currently inactive. OR Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActionReason](#retrieveuseractionreason) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionReasonWithId](#retrieveuseractionreasonwithid) - Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.
* [retrieveUserActionWithId](#retrieveuseractionwithid) - Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.
* [retrieveUserActioning](#retrieveuseractioning) - Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based.
* [retrieveUserChangePassword](#retrieveuserchangepassword) - Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.
* [retrieveUserCommentsWithId](#retrieveusercommentswithid) - Retrieves all the comments for the user with the given Id.
* [retrieveUserConsentWithId](#retrieveuserconsentwithid) - Retrieve a single User consent by Id.
* [retrieveUserConsentsWithId](#retrieveuserconsentswithid) - Retrieves all the consents for a User.
* [retrieveUserInfoFromAccessTokenWithId](#retrieveuserinfofromaccesstokenwithid) - Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.
* [retrieveUserRecentLogin](#retrieveuserrecentlogin) - Retrieves the last number of login records. OR Retrieves the last number of login records for a user.
* [retrieveUserWithId](#retrieveuserwithid) - Retrieves the user for the given Id.
* [retrieveWebAuthnCredentialWithId](#retrievewebauthncredentialwithid) - Retrieves the WebAuthn credential for the given Id.
* [retrieveWebAuthnCredentialsForUserWithId](#retrievewebauthncredentialsforuserwithid) - Retrieves all WebAuthn credentials for the given user.
* [retrieveWebhook](#retrievewebhook) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [retrieveWebhookWithId](#retrievewebhookwithid) - Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.
* [revokeRefreshTokenByIdWithId](#revokerefreshtokenbyidwithid) - Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.
* [revokeUserConsentWithId](#revokeuserconsentwithid) - Revokes a single User consent by Id.
* [searchApplicationsWithId](#searchapplicationswithid) - Searches applications with the specified criteria and pagination.
* [searchAuditLogsWithId](#searchauditlogswithid) - Searches the audit logs with the specified criteria and pagination.
* [searchConsentsWithId](#searchconsentswithid) - Searches consents with the specified criteria and pagination.
* [searchEmailTemplatesWithId](#searchemailtemplateswithid) - Searches email templates with the specified criteria and pagination.
* [searchEntitiesByIdsWithId](#searchentitiesbyidswithid) - Retrieves the entities for the given ids. If any id is invalid, it is ignored.
* [searchEntitiesWithId](#searchentitieswithid) - Searches entities with the specified criteria and pagination.
* [searchEntityGrantsWithId](#searchentitygrantswithid) - Searches Entity Grants with the specified criteria and pagination.
* [searchEntityTypesWithId](#searchentitytypeswithid) - Searches the entity types with the specified criteria and pagination.
* [searchEventLogsWithId](#searcheventlogswithid) - Searches the event logs with the specified criteria and pagination.
* [searchGroupMembersWithId](#searchgroupmemberswithid) - Searches group members with the specified criteria and pagination.
* [searchGroupsWithId](#searchgroupswithid) - Searches groups with the specified criteria and pagination.
* [searchIPAccessControlListsWithId](#searchipaccesscontrollistswithid) - Searches the IP Access Control Lists with the specified criteria and pagination.
* [searchIdentityProvidersWithId](#searchidentityproviderswithid) - Searches identity providers with the specified criteria and pagination.
* [searchKeysWithId](#searchkeyswithid) - Searches keys with the specified criteria and pagination.
* [searchLambdasWithId](#searchlambdaswithid) - Searches lambdas with the specified criteria and pagination.
* [searchLoginRecordsWithId](#searchloginrecordswithid) - Searches the login records with the specified criteria and pagination.
* [searchTenantsWithId](#searchtenantswithid) - Searches tenants with the specified criteria and pagination.
* [searchThemesWithId](#searchthemeswithid) - Searches themes with the specified criteria and pagination.
* [searchUserCommentsWithId](#searchusercommentswithid) - Searches user comments with the specified criteria and pagination.
* [searchUsersByIdsWithId](#searchusersbyidswithid) - Retrieves the users for the given ids. If any id is invalid, it is ignored.
* [searchUsersByQueryWithId](#searchusersbyquerywithid) - Retrieves the users for the given search criteria and pagination.
* [searchWebhooksWithId](#searchwebhookswithid) - Searches webhooks with the specified criteria and pagination.
* [sendEmailWithId](#sendemailwithid) - Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.
* [sendFamilyRequestEmailWithId](#sendfamilyrequestemailwithid) - Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.
* [sendPasswordlessCodeWithId](#sendpasswordlesscodewithid) - Send a passwordless authentication code in an email to complete login.
* [sendTwoFactorCodeForEnableDisableWithId](#sendtwofactorcodeforenabledisablewithid) - Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.
* [sendTwoFactorCodeForLoginUsingMethodWithId](#sendtwofactorcodeforloginusingmethodwithid) - Send a Two Factor authentication code to allow the completion of Two Factor authentication.
* [startIdentityProviderLoginWithId](#startidentityproviderloginwithid) - Begins a login request for a 3rd party login that requires user interaction such as HYPR.
* [startPasswordlessLoginWithId](#startpasswordlessloginwithid) - Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.
* [startTwoFactorLoginWithId](#starttwofactorloginwithid) - Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside of a normal login that originated from the Login API (/api/login).
* [startWebAuthnLoginWithId](#startwebauthnloginwithid) - Start a WebAuthn authentication ceremony by generating a new challenge for the user
* [startWebAuthnRegistrationWithId](#startwebauthnregistrationwithid) - Start a WebAuthn registration ceremony by generating a new challenge for the user
* [twoFactorLoginWithId](#twofactorloginwithid) - Complete login using a 2FA challenge
* [updateAPIKeyWithId](#updateapikeywithid) - Updates an API key by given id
* [updateApplicationRoleWithId](#updateapplicationrolewithid) - Updates the application role with the given id for the application.
* [updateApplicationWithId](#updateapplicationwithid) - Updates the application with the given Id. OR Reactivates the application with the given Id.
* [updateConnectorWithId](#updateconnectorwithid) - Updates the connector with the given Id.
* [updateConsentWithId](#updateconsentwithid) - Updates the consent with the given Id.
* [updateEmailTemplateWithId](#updateemailtemplatewithid) - Updates the email template with the given Id.
* [updateEntityTypePermissionWithId](#updateentitytypepermissionwithid) - Updates the permission with the given id for the entity type.
* [updateEntityTypeWithId](#updateentitytypewithid) - Updates the Entity Type with the given Id.
* [updateEntityWithId](#updateentitywithid) - Updates the Entity with the given Id.
* [updateFormFieldWithId](#updateformfieldwithid) - Updates the form field with the given Id.
* [updateFormWithId](#updateformwithid) - Updates the form with the given Id.
* [updateGroupMembersWithId](#updategroupmemberswithid) - Creates a member in a group.
* [updateGroupWithId](#updategroupwithid) - Updates the group with the given Id.
* [updateIPAccessControlListWithId](#updateipaccesscontrollistwithid) - Updates the IP Access Control List with the given Id.
* [updateIdentityProviderWithId](#updateidentityproviderwithid) - Updates the identity provider with the given Id.
* [updateIntegrationsWithId](#updateintegrationswithid) - Updates the available integrations.
* [updateKeyWithId](#updatekeywithid) - Updates the key with the given Id.
* [updateLambdaWithId](#updatelambdawithid) - Updates the lambda with the given Id.
* [updateMessageTemplateWithId](#updatemessagetemplatewithid) - Updates the message template with the given Id.
* [updateMessengerWithId](#updatemessengerwithid) - Updates the messenger with the given Id.
* [updateRegistrationWithId](#updateregistrationwithid) - Updates the registration for the user with the given id and the application defined in the request.
* [updateSystemConfigurationWithId](#updatesystemconfigurationwithid) - Updates the system configuration.
* [updateTenantWithId](#updatetenantwithid) - Updates the tenant with the given Id.
* [updateThemeWithId](#updatethemewithid) - Updates the theme with the given Id.
* [updateUserActionReasonWithId](#updateuseractionreasonwithid) - Updates the user action reason with the given Id.
* [updateUserActionWithId](#updateuseractionwithid) - Reactivates the user action with the given Id. OR Updates the user action with the given Id.
* [updateUserConsentWithId](#updateuserconsentwithid) - Updates a single User consent by Id.
* [updateUserVerifyEmail](#updateuserverifyemail) - Re-sends the verification email to the user. OR Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.
* [updateUserVerifyRegistration](#updateuserverifyregistration) - Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system. OR Re-sends the application registration verification email to the user.
* [updateUserWithId](#updateuserwithid) - Reactivates the user with the given Id. OR Updates the user with the given Id.
* [updateWebhookWithId](#updatewebhookwithid) - Updates the webhook with the given Id.
* [upsertEntityGrantWithId](#upsertentitygrantwithid) - Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.
* [validateDeviceWithId](#validatedevicewithid) - Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.
* [validateJWTWithId](#validatejwtwithid) - Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.
* [vendJWTWithId](#vendjwtwithid) - It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.
* [verifyUserRegistrationWithId](#verifyuserregistrationwithid) - Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.

## actionUserWithId

Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ActionUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.actionUserWithId({
  action: {
    actioneeUserId: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    actionerUserId: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    applicationIds: [
      "73920592-9396-4fea-b596-eb10faaa2352",
      "c5955907-aff1-4a3a-afa9-467739251aa5",
      "2c3f5ad0-19da-41ff-a78f-097b0074f154",
    ],
    comment: "iusto",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "dicta",
    reasonId: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
    userActionId: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "illum": {
        "rerum": "dicta",
        "magnam": "cumque",
        "facere": "ea",
        "aliquid": "laborum",
      },
      "accusamus": {
        "occaecati": "enim",
      },
    },
    deviceDescription: "accusamus",
    deviceName: "delectus",
    deviceType: "quidem",
    ipAddress: "provident",
    location: {
      city: "Olsonmouth",
      country: "Malaysia",
      displayString: "sapiente",
      latitude: 2305.33,
      longitude: 6439.9,
      region: "nisi",
      zipcode: "66404",
    },
    os: "magnam",
    userAgent: "distinctio",
  },
}).then((res: ActionUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## activateReactorWithId

Activates the FusionAuth Reactor using a license id and optionally a license text (for air-gapped deployments)

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ActivateReactorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.activateReactorWithId({
  license: "id",
  licenseId: "labore",
}).then((res: ActivateReactorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## addUserToFamilyWithId

Adds a user to an existing family. The family id must be specified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { AddUserToFamilyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.addUserToFamilyWithId("labore", {
  familyMember: {
    data: {
      "natus": {
        "eum": "vero",
        "aspernatur": "architecto",
        "magnam": "et",
      },
      "excepturi": {
        "provident": "quos",
        "sint": "accusantium",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRole.Teen,
    userId: "fa563e25-16fe-44c8-b711-e5b7fd2ed028",
  },
}, "natus").then((res: AddUserToFamilyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## cancelActionWithId

Cancels the user action.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CancelActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.cancelActionWithId("magni", {
  action: {
    actioneeUserId: "1cddc692-601f-4b57-ab0d-5f0d30c5fbb2",
    actionerUserId: "58705320-2c73-4d5f-a9b9-0c28909b3fe4",
    applicationIds: [
      "a8d9cbf4-8633-4323-b9b7-7f3a4100674e",
      "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
      "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f",
    ],
    comment: "totam",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "nihil",
    reasonId: "0b326b5a-7342-49cd-b1a8-422bb679d232",
    userActionId: "2715bf0c-bb1e-431b-8b90-f3443a1108e0",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "repellendus": {
        "doloribus": "ut",
        "facilis": "cupiditate",
        "qui": "quae",
        "laudantium": "odio",
      },
      "occaecati": {
        "quisquam": "vero",
        "omnis": "quis",
        "ipsum": "delectus",
        "voluptate": "consectetur",
      },
      "vero": {
        "dignissimos": "hic",
        "distinctio": "quod",
        "odio": "similique",
        "facilis": "vero",
      },
    },
    deviceDescription: "ducimus",
    deviceName: "dolore",
    deviceType: "quibusdam",
    ipAddress: "illum",
    location: {
      city: "New Omatown",
      country: "Virgin Islands, British",
      displayString: "exercitationem",
      latitude: 8623.1,
      longitude: 1481.41,
      region: "porro",
      zipcode: "94740-6234",
    },
    os: "aspernatur",
    userAgent: "vel",
  },
}).then((res: CancelActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## changePasswordByIdentityWithId

Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ChangePasswordByIdentityWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.changePasswordByIdentityWithId({
  applicationId: "d436813f-16d9-4f5f-8e6c-556146c3e250",
  changePasswordId: "a",
  currentPassword: "libero",
  eventInfo: {
    data: {
      "aut": {
        "impedit": "aliquam",
        "fugit": "accusamus",
        "inventore": "non",
      },
    },
    deviceDescription: "et",
    deviceName: "dolorum",
    deviceType: "laborum",
    ipAddress: "placeat",
    location: {
      city: "South Helen",
      country: "Saint Kitts and Nevis",
      displayString: "quas",
      latitude: 8296.03,
      longitude: 8605.52,
      region: "voluptas",
      zipcode: "02215-0434",
    },
    os: "eius",
    userAgent: "esse",
  },
  loginId: "esse",
  password: "rem",
  refreshToken: "fuga",
  trustChallenge: "reprehenderit",
  trustToken: "quidem",
}).then((res: ChangePasswordByIdentityWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## changePasswordWithId

Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ChangePasswordWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.changePasswordWithId("fugiat", {
  applicationId: "466d28c1-0ab3-4cdc-a425-1904e523c7e0",
  changePasswordId: "distinctio",
  currentPassword: "quod",
  eventInfo: {
    data: {
      "inventore": {
        "totam": "accusamus",
        "aliquam": "odio",
      },
      "occaecati": {
        "sapiente": "dolores",
        "deserunt": "molestiae",
      },
    },
    deviceDescription: "accusantium",
    deviceName: "porro",
    deviceType: "eum",
    ipAddress: "quas",
    location: {
      city: "Carolstad",
      country: "Cambodia",
      displayString: "fuga",
      latitude: 6494.63,
      longitude: 2775.96,
      region: "atque",
      zipcode: "33191",
    },
    os: "ratione",
    userAgent: "explicabo",
  },
  loginId: "saepe",
  password: "occaecati",
  refreshToken: "atque",
  trustChallenge: "et",
  trustToken: "esse",
}).then((res: ChangePasswordWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## checkChangePasswordUsingIdWithId

Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CheckChangePasswordUsingIdWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.checkChangePasswordUsingIdWithId("eveniet").then((res: CheckChangePasswordUsingIdWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## commentOnUserWithId

Adds a comment to the user's account.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CommentOnUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.commentOnUserWithId({
  userComment: {
    comment: "accusamus",
    commenterId: "17cbe61e-6b7b-495b-80ab-3c20c4f3789f",
    id: "d871f99d-d2ef-4d12-9aa6-f1e674bdb04f",
    insertInstant: 1659380719000,
    userId: "15756082-d68e-4a19-b1d1-7051339d0808",
  },
}, "eum").then((res: CommentOnUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## completeWebAuthnAssertionWithId

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CompleteWebAuthnAssertionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { AttestationType, CoseAlgorithmIdentifier, DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.completeWebAuthnAssertionWithId({
  applicationId: "a1840394-c260-471f-93f5-f0642dac7af5",
  credential: {
    clientExtensionResults: {
      credProps: {
        rk: false,
      },
    },
    id: "15cc413a-a63a-4ae8-9678-64dbb675fd5e",
    response: {
      authenticatorData: "aliquid",
      clientDataJSON: "aperiam",
      signature: "cum",
      userHandle: "consectetur",
    },
    rpId: "in",
    type: "exercitationem",
  },
  ipAddress: "earum",
  metaData: {
    data: {
      "numquam": {
        "suscipit": "reiciendis",
        "quidem": "saepe",
        "necessitatibus": "dolore",
        "sunt": "asperiores",
      },
      "adipisci": {
        "amet": "beatae",
      },
      "dignissimos": {
        "debitis": "consectetur",
        "corporis": "harum",
        "laboriosam": "ipsa",
        "voluptates": "libero",
      },
      "vitae": {
        "similique": "tempora",
        "aspernatur": "voluptas",
        "voluptas": "voluptas",
        "minima": "nobis",
      },
    },
    device: {
      description: "dolorum",
      lastAccessedAddress: "adipisci",
      lastAccessedInstant: 1659380719000,
      name: "Ernest Labadie",
      type: DeviceType.Laptop,
    },
    scopes: [
      "temporibus",
      "ullam",
      "adipisci",
      "cum",
    ],
  },
  newDevice: false,
  noJWT: false,
  origin: "blanditiis",
  rpId: "quas",
  twoFactorTrustId: "hic",
}).then((res: CompleteWebAuthnAssertionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## completeWebAuthnLoginWithId

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CompleteWebAuthnLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.completeWebAuthnLoginWithId({
  applicationId: "3a8d8f5c-0b2f-42fb-bb19-4a276b26916f",
  credential: {
    clientExtensionResults: {
      credProps: {
        rk: false,
      },
    },
    id: "e1f08f42-94e3-4698-b447-f603e8b445e8",
    response: {
      authenticatorData: "sit",
      clientDataJSON: "nobis",
      signature: "error",
      userHandle: "veniam",
    },
    rpId: "minima",
    type: "recusandae",
  },
  ipAddress: "reiciendis",
  metaData: {
    data: {
      "magni": {
        "saepe": "numquam",
      },
      "veniam": {
        "officiis": "beatae",
        "laudantium": "exercitationem",
      },
      "praesentium": {
        "laboriosam": "dolorum",
        "voluptatum": "error",
        "hic": "expedita",
      },
      "debitis": {
        "dolorum": "nostrum",
      },
    },
    device: {
      description: "officia",
      lastAccessedAddress: "dolorum",
      lastAccessedInstant: 1659380719000,
      name: "Caleb Goldner",
      type: DeviceType.Laptop,
    },
    scopes: [
      "voluptatem",
      "culpa",
      "expedita",
      "magnam",
    ],
  },
  newDevice: false,
  noJWT: false,
  origin: "consequatur",
  rpId: "esse",
  twoFactorTrustId: "ipsam",
}).then((res: CompleteWebAuthnLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## completeWebAuthnRegistrationWithId

Complete a WebAuthn registration ceremony by validating the client request and saving the new credential

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CompleteWebAuthnRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { AttestationType, CoseAlgorithmIdentifier } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.completeWebAuthnRegistrationWithId({
  credential: {
    clientExtensionResults: {
      credProps: {
        rk: false,
      },
    },
    id: "088e5186-2065-4e90-8f3b-1194b8abf603",
    response: {
      attestationObject: "deserunt",
      clientDataJSON: "voluptate",
    },
    rpId: "unde",
    transports: [
      "provident",
      "repellendus",
      "delectus",
      "voluptates",
    ],
    type: "perferendis",
  },
  origin: "est",
  rpId: "quidem",
  userId: "7da8a50c-e187-4f86-bc17-3d689eee9526",
}).then((res: CompleteWebAuthnRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createAPIKey

Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateAPIKeyResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createAPIKey({
  apiKey: {
    id: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
    insertInstant: 1659380719000,
    ipAccessControlListId: "973e922a-57a1-45be-be06-0807e2b6e3ab",
    key: "voluptatum",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "aliquam": "ad",
        "repellat": "alias",
        "corporis": "perspiciatis",
      },
    },
    permissions: {
      endpoints: {
        "mollitia": [
          "alias",
          "maiores",
        ],
        "reiciendis": [
          "id",
        ],
      },
    },
    tenantId: "54a31e94-764a-43e8-a5e7-956f9251a5a9",
  },
  sourceKeyId: "da660ff5-7bfa-4ad4-b9ef-c1b4512c1032",
}).then((res: CreateAPIKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createApiKeyWithId

Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant. OR Updates an authentication API key by given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApiKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApiKeyWithId("eum", {
  apiKey: {
    id: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
    insertInstant: 1659380719000,
    ipAccessControlListId: "d0117996-312f-4de0-8771-778ff61d0174",
    key: "esse",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "consectetur": "aliquid",
        "ipsa": "laborum",
      },
    },
    permissions: {
      endpoints: {
        "nostrum": [
          "expedita",
          "aliquid",
          "officia",
          "suscipit",
        ],
      },
    },
    tenantId: "60659a1a-deaa-4b58-91d6-c645b08b6189",
  },
  sourceKeyId: "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a",
}).then((res: CreateApiKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createApplication

Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplication({
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "34181430-1042-4181-bd52-08ece7e253b6",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "vel",
      applicationIds: [
        "451c6c6e-205e-416d-aab3-fec9578a6458",
        "4273a841-8d16-4230-9fb0-929921aefb9f",
        "58c4d86e-68e4-4be0-9601-3f59da757a59",
      ],
      enabled: false,
      url: "accusamus",
      usernameModeration: {
        applicationId: "cfef66ef-1caa-4338-bc2b-eb477373c8d7",
        enabled: false,
      },
    },
    data: {
      "voluptatibus": {
        "magnam": "quibusdam",
        "inventore": "facere",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "b1f2c431-0661-4e96-b49e-1cf9e06e3a43",
      emailVerificationEmailTemplateId: "7000ae6b-6bc9-4b8f-b59e-ac55a9741d31",
      emailVerifiedEmailTemplateId: "1352965b-b8a7-4202-a114-35e139dbc225",
      forgotPasswordEmailTemplateId: "9b1abda8-c070-4e10-84cb-0672d1ad879e",
      loginIdInUseOnCreateEmailTemplateId: "eb9665b8-5efb-4d02-bae0-be2d782259e3",
      loginIdInUseOnUpdateEmailTemplateId: "ea4b5197-f924-443d-a7ce-52b895c537c6",
      loginNewDeviceEmailTemplateId: "454efb0b-3489-46c3-8a5a-cfbe2fd57075",
      loginSuspiciousEmailTemplateId: "77929177-deac-4646-acb5-73409e3eb1e5",
      passwordResetSuccessEmailTemplateId: "a2b12eb0-7f11-46db-9954-5fc95fa88970",
      passwordUpdateEmailTemplateId: "e189dbb3-0fcb-433e-a055-b197cd44e2f5",
      passwordlessEmailTemplateId: "2d82d351-3bb6-4f48-b656-bcdb35ff2e4b",
      setPasswordEmailTemplateId: "27537a8c-d9e7-4319-8177-d525f77b114e",
      twoFactorMethodAddEmailTemplateId: "eb52ff78-5fc3-4781-8d4c-98e0c2bb89eb",
      twoFactorMethodRemoveEmailTemplateId: "75dad636-c600-4503-98bb-31180f739ae9",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 920272,
    },
    formConfiguration: {
      adminRegistrationFormId: "057eb809-e281-4033-9f39-81d4c700b607",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "f3c93c73-b9da-43f2-8eda-7e23f2257411",
    },
    id: "faf4b754-4e47-42e8-8285-7a5b40463a7d",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "575f1400-e764-4ad7-b34e-c1b781b36a08",
      enabled: false,
      idTokenKeyId: "088d100e-fada-4200-af04-22eb2164cf9a",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 520678,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 397919,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "6c723ffd-a9e0-46be-a482-5c1fc0e115c8",
      idTokenPopulateId: "0bff9185-44ec-442d-afcc-e8f1977773e6",
      samlv2PopulateId: "3562a7b4-08f0-45e3-948f-daf313a1f5fd",
      selfServiceRegistrationValidationId: "94259c0b-36f2-45ea-944f-3b756c11f6c3",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "7a512624-3835-4bbc-85a2-3a45cefc5fde",
      },
      loginPolicy: MultiFactorLoginPolicy.Disabled,
      sms: {
        templateId: "0a0ce216-9e51-4001-9c6d-c5e34762799b",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.None,
    },
    name: "Rickey Waters",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "perspiciatis",
        "hic",
      ],
      authorizedRedirectURLs: [
        "aspernatur",
        "libero",
        "nam",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.NotRequiredWhenUsingPKCE,
      clientId: "quod",
      clientSecret: "id",
      debug: false,
      deviceVerificationURL: "saepe",
      enabledGrants: [
        "quo",
        "nesciunt",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.AllApplications,
      logoutURL: "nemo",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequiredWhenUsingClientAuthentication,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "b3adebd5-daea-44c5-86a8-aa94c02644cf",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 603650,
      },
    },
    roles: [
      {
        description: "error",
        id: "a4578adc-1ac6-400d-ac00-1ac802e2ec09",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Cary Larkin DVM",
      },
      {
        description: "rem",
        id: "16ff3477-c13e-4902-8141-25b0960a6681",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Amy Murray",
      },
      {
        description: "magni",
        id: "af923c59-49f8-43f3-90cf-876ffb901c6e",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Geoffrey Powlowski",
      },
      {
        description: "fugit",
        id: "43cf789f-fafe-4da5-be5a-e6e0ac184c2b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Kim Crist",
      },
    ],
    samlv2Configuration: {
      audience: "quod",
      authorizedRedirectURLs: [
        "corrupti",
        "amet",
        "molestiae",
      ],
      callbackURL: "amet",
      debug: false,
      defaultVerificationKeyId: "a40e1942-f32e-4550-9575-6f5d56d0bd0a",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "sapiente",
      },
      issuer: "sed",
      keyId: "dfe13db4-f62c-4ba3-b894-1aebc0b80a69",
      logout: {
        behavior: SAMLLogoutBehavior.AllParticipants,
        defaultVerificationKeyId: "4d3b2ecf-cc8f-4895-810f-5dd3d6fa1804",
        keyId: "e54c82f1-68a3-463c-8873-e484380b1f6b",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "8ca275a6-0a04-4c49-9cc6-99171b51c1bd",
          url: "facilis",
          xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      },
      logoutURL: "delectus",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Response,
    },
    state: ObjectState.Inactive,
    tenantId: "88ebdfc4-ccca-499b-87fc-0b2dce10873e",
    themeId: "42b006d6-7887-48ba-8581-a58208c54fef",
    unverified: {
      behavior: UnverifiedBehavior.Gated,
    },
    verificationEmailTemplateId: "9c95f2ea-c556-45d3-87cf-ee81206e2813",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "aliquam": {
        "modi": "sunt",
        "impedit": "eius",
        "voluptatum": "ipsa",
      },
      "at": {
        "repellat": "aspernatur",
      },
      "inventore": {
        "fugit": "fuga",
      },
    },
    deviceDescription: "hic",
    deviceName: "eaque",
    deviceType: "dolorem",
    ipAddress: "architecto",
    location: {
      city: "East Sabinaborough",
      country: "Bangladesh",
      displayString: "magnam",
      latitude: 9618.42,
      longitude: 2550.64,
      region: "optio",
      zipcode: "49057-9531",
    },
    os: "beatae",
    userAgent: "similique",
  },
  role: {
    description: "ea",
    id: "a4f77a87-ee3e-44be-b52c-65b34418e3bb",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Joshua Schiller",
  },
  sourceApplicationId: "975e0e84-19d8-4f84-b144-f3e07edcc4aa",
}, "ad").then((res: CreateApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createApplicationRole

Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationRoleResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationRole("reiciendis", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "3cabd905-a972-4e05-a728-227b2d309470",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "distinctio",
      applicationIds: [
        "7a4fa87c-f535-4a6f-ae54-ebf60c321f02",
        "3b75d236-7fe1-4a0c-88df-79f0a396d90c",
        "364b7c15-dfba-4ce1-88b1-c4ee2c8c6ce6",
        "11feeb1c-7cbd-4b6e-ac74-378ba2531774",
      ],
      enabled: false,
      url: "odio",
      usernameModeration: {
        applicationId: "dc915ad2-caf5-4dd6-b23d-c0f5ae2f3a6b",
        enabled: false,
      },
    },
    data: {
      "doloremque": {
        "laudantium": "iusto",
      },
      "corrupti": {
        "quis": "iure",
        "ab": "quaerat",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "3f5a6c98-b555-4540-80d4-0bcacc6cbd6b",
      emailVerificationEmailTemplateId: "5f3ec909-304f-4926-bad2-553819b474b0",
      emailVerifiedEmailTemplateId: "ed20e562-48ff-4f63-9a91-0abdcab62676",
      forgotPasswordEmailTemplateId: "696e1ec0-0221-4b33-9d89-acb3ecfda8d0",
      loginIdInUseOnCreateEmailTemplateId: "c549ef03-0049-478a-a1fa-1cf20688f77c",
      loginIdInUseOnUpdateEmailTemplateId: "1ffc71dc-a163-4f2a-bc80-a97ff334cddf",
      loginNewDeviceEmailTemplateId: "857a9e61-876c-46ab-a1d2-9dfc94d6fecd",
      loginSuspiciousEmailTemplateId: "79939006-6a6d-42d0-8035-5338cec086fa",
      passwordResetSuccessEmailTemplateId: "21e9152c-b311-4916-bb8e-3c8db03408d6",
      passwordUpdateEmailTemplateId: "d364ffd4-5590-46d1-a63d-48e935c2c9e8",
      passwordlessEmailTemplateId: "1f30be3e-4320-42d7-a165-76506641870d",
      setPasswordEmailTemplateId: "9d21f9ad-030c-44ec-811a-0836429068b8",
      twoFactorMethodAddEmailTemplateId: "502a55e7-f73b-4c84-9e32-0a319f4badf9",
      twoFactorMethodRemoveEmailTemplateId: "47c9a867-bc42-4426-a658-16ddca8ef51f",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 766670,
    },
    formConfiguration: {
      adminRegistrationFormId: "b4c593ec-12cd-4aad-8ec7-afedbd80df44",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "8a47f939-0c58-4880-983d-abf9ef3ffdd9",
    },
    id: "f7f079af-4d35-4724-8db0-f4d281187d56",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "844eded8-5a90-465e-a28b-dfc2032b6c87",
      enabled: false,
      idTokenKeyId: "9923b7e1-3584-4f7a-a12c-6891f82ce115",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 82396,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 151497,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "305377dc-fa89-4df9-b5e3-56686092e9c3",
      idTokenPopulateId: "ddc5f111-dea1-4026-9541-a4d190feb217",
      samlv2PopulateId: "80bccc0d-bbdd-4b48-8708-fb4e391e6bc1",
      selfServiceRegistrationValidationId: "58c4c4e5-4599-4ea3-8226-0e9b200ce78a",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "1bd8fb7a-0a11-46ce-b23d-4097fa30e9af",
      },
      loginPolicy: MultiFactorLoginPolicy.Enabled,
      sms: {
        templateId: "25b29122-030d-483f-9aeb-7799d22e8c1f",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.This,
    },
    name: "Erika Farrell III",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "illum",
        "porro",
        "quaerat",
        "magni",
      ],
      authorizedRedirectURLs: [
        "quos",
        "in",
        "commodi",
        "maxime",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.NotRequiredWhenUsingPKCE,
      clientId: "consequuntur",
      clientSecret: "possimus",
      debug: false,
      deviceVerificationURL: "delectus",
      enabledGrants: [
        "aliquam",
        "eligendi",
        "hic",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.AllApplications,
      logoutURL: "illo",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequiredWhenUsingClientAuthentication,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "76230f84-1fb1-4bd2-bfdb-14db6be5a685",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Username,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 536456,
      },
    },
    roles: [
      {
        description: "aspernatur",
        id: "2ae20da1-6fc2-4b27-9a28-9c57e854e904",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Violet Spinka",
      },
      {
        description: "consequuntur",
        id: "46569462-4070-484f-bab3-7cef02225194",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Willis Heller",
      },
      {
        description: "quasi",
        id: "0adc669a-f90a-426c-bcdc-981f068981d6",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Archie Fahey",
      },
      {
        description: "hic",
        id: "aa348c31-bf40-47ee-8fcf-0c42b78f1562",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Diana Mante",
      },
    ],
    samlv2Configuration: {
      audience: "perferendis",
      authorizedRedirectURLs: [
        "impedit",
        "ducimus",
        "nisi",
        "nisi",
      ],
      callbackURL: "dolor",
      debug: false,
      defaultVerificationKeyId: "24ccb06c-8ca1-42d0-a529-270b8d5722dd",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "praesentium",
      },
      issuer: "sint",
      keyId: "5b8bcf24-db95-4969-b352-f74533994d78",
      logout: {
        behavior: SAMLLogoutBehavior.OnlyOriginator,
        defaultVerificationKeyId: "e3b6e938-9f5a-4bb7-b662-550a28382ac4",
        keyId: "83afd231-5bba-4650-964e-06f5bf6ae591",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "bc8bdef3-612b-463c-a05f-da840774a68a",
          url: "sint",
          xmlSignatureC14nMethod: CanonicalizationMethod.Inclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
      },
      logoutURL: "ad",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Assertion,
    },
    state: ObjectState.Inactive,
    tenantId: "6b6f66fe-f020-4e9f-843b-4257b992c8db",
    themeId: "da6a61ef-a219-4825-8fd0-a9eba47f7d3e",
    unverified: {
      behavior: UnverifiedBehavior.Gated,
    },
    verificationEmailTemplateId: "049640d6-a183-41c8-badf-596fdf1ad837",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "voluptatum": {
        "quisquam": "vitae",
      },
      "cumque": {
        "sint": "eligendi",
      },
      "occaecati": {
        "tempore": "officia",
        "iste": "unde",
      },
      "quas": {
        "ducimus": "voluptatum",
        "sapiente": "deserunt",
      },
    },
    deviceDescription: "dolor",
    deviceName: "hic",
    deviceType: "iure",
    ipAddress: "sint",
    location: {
      city: "Letastead",
      country: "Bahrain",
      displayString: "fuga",
      latitude: 9522.16,
      longitude: 2227.71,
      region: "voluptatum",
      zipcode: "89024-1222",
    },
    os: "quos",
    userAgent: "minus",
  },
  role: {
    description: "voluptate",
    id: "977a0ef2-f536-4028-afee-f934152ed7e2",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Ethel Windler",
  },
  sourceApplicationId: "157deaa7-170f-4445-accf-667aaf9bbad1",
}, "atque").then((res: CreateApplicationRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createApplicationRoleWithId

Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationRoleWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationRoleWithId("ad", "sapiente", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "e431d6bf-5c83-48fb-b8c2-0cb67fc4b425",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "repudiandae",
      applicationIds: [
        "9e6234c9-f7b7-49df-ab77-a5c38d4baf91",
        "e506ef89-0a54-4b47-9f16-f56d385a3c4a",
        "c631b99e-26ce-4d8f-9fdb-9410f63bbf81",
      ],
      enabled: false,
      url: "iusto",
      usernameModeration: {
        applicationId: "837b01af-dd78-4862-8189-eb44873f5033",
        enabled: false,
      },
    },
    data: {
      "architecto": {
        "possimus": "tempore",
        "asperiores": "quasi",
        "consequuntur": "nemo",
      },
      "nobis": {
        "labore": "veritatis",
        "minima": "magni",
        "itaque": "error",
        "expedita": "error",
      },
      "placeat": {
        "voluptate": "earum",
        "minima": "odit",
        "odit": "eius",
        "error": "vel",
      },
      "dolorum": {
        "itaque": "ab",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "23b7847e-c59e-41f6-bf3c-4cce4b6d7696",
      emailVerificationEmailTemplateId: "ff3c5747-5013-457e-84f5-1f8b084c3197",
      emailVerifiedEmailTemplateId: "e193a245-467f-4948-b4c2-d5cc4972233e",
      forgotPasswordEmailTemplateId: "66bd8fe5-d00b-4979-af20-387320590ccc",
      loginIdInUseOnCreateEmailTemplateId: "10964003-13b3-4e50-84f6-5fe72dc4077d",
      loginIdInUseOnUpdateEmailTemplateId: "0cc3f408-efc1-45ce-b4d6-e1eae0f75aed",
      loginNewDeviceEmailTemplateId: "f2acab58-b991-4c92-addb-589461e7421c",
      loginSuspiciousEmailTemplateId: "be6d9502-f0ea-4930-b69f-7ac2f72f8850",
      passwordResetSuccessEmailTemplateId: "09049116-0820-4788-8ec6-6183bfe9659e",
      passwordUpdateEmailTemplateId: "b40ec16f-af75-4b0b-932a-4da37cbaaf44",
      passwordlessEmailTemplateId: "52c4842c-9b2a-4d32-9afe-81a88f444457",
      setPasswordEmailTemplateId: "3fecd473-53f6-43c8-a093-79aa69cd5fbc",
      twoFactorMethodAddEmailTemplateId: "f79da18a-7822-4bf9-9894-e6861adb55f9",
      twoFactorMethodRemoveEmailTemplateId: "e5d751c9-fe8f-4750-abfd-c3450841f176",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 294314,
    },
    formConfiguration: {
      adminRegistrationFormId: "456379f3-fb27-4e21-b862-657b36fc6b9f",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "587ce525-c676-441a-8312-e5047b4c21cc",
    },
    id: "b423abcd-c91f-4aab-9d88-e71f6c48252d",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "7771e7fd-0740-409e-b8d2-9de1dd7097b5",
      enabled: false,
      idTokenKeyId: "da08c57f-a6c7-48a2-96e1-9bafeca61914",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 541046,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 300727,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "0b64ff8a-e170-4ef0-bb5f-37e4aa868555",
      idTokenPopulateId: "966732aa-5dcb-4668-acb7-0f8cfd5fb6e9",
      samlv2PopulateId: "1b9a9f74-846e-42c3-b09d-b0536d9e75ca",
      selfServiceRegistrationValidationId: "006f5392-c11a-425a-8bf9-2f97428ad9a9",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "f8bf8221-1253-459d-9838-7f7a79cd72cd",
      },
      loginPolicy: MultiFactorLoginPolicy.Disabled,
      sms: {
        templateId: "484da217-29f2-4ac4-9ef5-725f1169ac1e",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.Any,
    },
    name: "Paulette Legros",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "impedit",
      ],
      authorizedRedirectURLs: [
        "neque",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.Required,
      clientId: "labore",
      clientSecret: "repellat",
      debug: false,
      deviceVerificationURL: "eos",
      enabledGrants: [
        "repellat",
        "mollitia",
        "quaerat",
        "officia",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.RedirectOnly,
      logoutURL: "perspiciatis",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequired,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "f6de9221-51fe-4171-a099-853e9f543d85",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 222140,
      },
    },
    roles: [
      {
        description: "accusamus",
        id: "e2244604-43bc-4154-988c-2f56e85da783",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Cecelia O'Conner",
      },
      {
        description: "voluptas",
        id: "17c3b0d5-1a44-4bf0-9bad-8706d46082bf",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Dewey Schmeler DVM",
      },
      {
        description: "delectus",
        id: "5d4e2ae4-fb5c-4b35-9176-38f1edb78359",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Kim Rutherford",
      },
    ],
    samlv2Configuration: {
      audience: "rerum",
      authorizedRedirectURLs: [
        "vel",
        "doloremque",
        "delectus",
      ],
      callbackURL: "quas",
      debug: false,
      defaultVerificationKeyId: "cd580ba7-3810-4e4f-a444-7297cd3b1dd3",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "expedita",
      },
      issuer: "libero",
      keyId: "ce247b76-84ef-4f50-926d-71cffbd0eb74",
      logout: {
        behavior: SAMLLogoutBehavior.OnlyOriginator,
        defaultVerificationKeyId: "8421953b-44bd-43c4-b159-d33e5953c001",
        keyId: "139863aa-41e6-4c31-8c2f-1fcb51c9a41f",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "fbe9cbd7-95ee-465e-876c-c7abf616ea5c",
          url: "molestiae",
          xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      },
      logoutURL: "modi",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
      xmlSignatureLocation: XMLSignatureLocation.Response,
    },
    state: ObjectState.Active,
    tenantId: "4b90f2e0-9d19-4d2f-82f9-e2e105944b93",
    themeId: "5d237a72-f908-449d-aaed-4aecb7537cd9",
    unverified: {
      behavior: UnverifiedBehavior.Allow,
    },
    verificationEmailTemplateId: "22c9ff57-491a-4abf-a2e7-61f0ca4d456e",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "sit": {
        "inventore": "saepe",
      },
    },
    deviceDescription: "iure",
    deviceName: "praesentium",
    deviceType: "perspiciatis",
    ipAddress: "omnis",
    location: {
      city: "Arvada",
      country: "Serbia",
      displayString: "explicabo",
      latitude: 381.73,
      longitude: 557.9,
      region: "quasi",
      zipcode: "11783-3780",
    },
    os: "nemo",
    userAgent: "molestias",
  },
  role: {
    description: "modi",
    id: "a184d76d-971f-4c82-8c65-b037bb8e0cc8",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Dan Boehm",
  },
  sourceApplicationId: "e4de04af-28c5-4ddd-b46a-a1cfd6d828da",
}, "ipsa").then((res: CreateApplicationRoleWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createApplicationWithId

Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationWithId("inventore", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "31911296-4664-45c1-981f-29042f569b7a",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "reiciendis",
      applicationIds: [
        "0ea2216c-be07-41bc-963e-279a3b084da9",
        "9257d04f-4084-47a7-82d8-4496cbdeecf6",
        "b99bc635-62eb-4fdf-95c2-94c060b06a12",
        "87764eef-6d0c-46d6-ad9c-73dd63457150",
      ],
      enabled: false,
      url: "occaecati",
      usernameModeration: {
        applicationId: "a8e870d3-c5a1-4f9c-a42c-7b66a1f30c73",
        enabled: false,
      },
    },
    data: {
      "repellat": {
        "quidem": "ea",
        "molestiae": "vitae",
      },
      "excepturi": {
        "iste": "eaque",
        "reiciendis": "magnam",
        "consequuntur": "est",
      },
      "tempora": {
        "expedita": "modi",
        "adipisci": "atque",
        "at": "rem",
      },
      "exercitationem": {
        "eos": "laboriosam",
        "aperiam": "minima",
        "perspiciatis": "dicta",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "d745e3c2-059c-49c3-b567-e0e252765b1d",
      emailVerificationEmailTemplateId: "62fcdace-1f01-4216-8e22-39e8f25cd0d1",
      emailVerifiedEmailTemplateId: "9d959f43-9e39-4266-8bd9-5f7aa2b24113",
      forgotPasswordEmailTemplateId: "695d1e66-98fc-4c45-9621-7c2977676334",
      loginIdInUseOnCreateEmailTemplateId: "254038bf-b597-41e9-8190-557389cedbac",
      loginIdInUseOnUpdateEmailTemplateId: "7fda3959-4d66-4bc2-ae48-0632b9954b6f",
      loginNewDeviceEmailTemplateId: "a2206369-8285-453c-b100-06bef4921ec2",
      loginSuspiciousEmailTemplateId: "053b7493-66ac-48ee-8f2b-f19588d40d03",
      passwordResetSuccessEmailTemplateId: "f3deba29-7be3-4e90-bc40-df868fd52405",
      passwordUpdateEmailTemplateId: "cb331d49-2f4f-4127-bb0e-0bf1f8217978",
      passwordlessEmailTemplateId: "d0acca77-aeb7-4b70-a1a5-2046b64e99fb",
      setPasswordEmailTemplateId: "0e67e094-fdfe-4d55-80ef-53a34a1b8fe9",
      twoFactorMethodAddEmailTemplateId: "9731adc0-5d85-4ae2-9fb7-0fb3874290d3",
      twoFactorMethodRemoveEmailTemplateId: "36561eca-16ef-4894-91bd-76eeeb518c4d",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 626637,
    },
    formConfiguration: {
      adminRegistrationFormId: "1fad3551-2f06-4d4e-9b72-f0f548568a04",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "24e00a1d-6eb9-4434-a45d-03084fbba5cc",
    },
    id: "eff5cb01-fe51-4e52-8a45-ac82b85f8bc2",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "caba8da4-127d-4d59-bff4-711aa1bc74b8",
      enabled: false,
      idTokenKeyId: "6cecc74f-77b4-4848-bd6a-6f0441d2c3b8",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 511921,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 594020,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "4373e060-459b-4ebb-ad02-f2586bcf1525",
      idTokenPopulateId: "58daa95b-e6cd-4027-96c3-54aa432b47e1",
      samlv2PopulateId: "763c5208-c23e-4980-ad82-f0d45eb4a8b6",
      selfServiceRegistrationValidationId: "74ee5cfc-18ed-4c7f-b87e-32e04b3d3ed0",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "c5670ef4-2bd3-4c9f-9cc5-03f6c39bcd0a",
      },
      loginPolicy: MultiFactorLoginPolicy.Enabled,
      sms: {
        templateId: "290f957f-3851-489a-97ef-807aae03f33c",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.This,
    },
    name: "Lindsay Zemlak",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "recusandae",
        "non",
        "aut",
        "neque",
      ],
      authorizedRedirectURLs: [
        "soluta",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.Required,
      clientId: "commodi",
      clientSecret: "a",
      debug: false,
      deviceVerificationURL: "temporibus",
      enabledGrants: [
        "eum",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.AllApplications,
      logoutURL: "expedita",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequired,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "9216bcb4-1583-45c7-b641-723133edc046",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Username,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 364254,
      },
    },
    roles: [
      {
        description: "vel",
        id: "3bbca492-27c4-42c2-ac55-350495c5dbb3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Derek Kihn DVM",
      },
    ],
    samlv2Configuration: {
      audience: "tempora",
      authorizedRedirectURLs: [
        "molestias",
        "beatae",
        "itaque",
      ],
      callbackURL: "atque",
      debug: false,
      defaultVerificationKeyId: "aa257ddc-1912-4ebd-a64b-fcc5469d4015",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "possimus",
      },
      issuer: "reiciendis",
      keyId: "a796206b-ef2b-40a3-a42c-1aa010e9aac2",
      logout: {
        behavior: SAMLLogoutBehavior.OnlyOriginator,
        defaultVerificationKeyId: "9135586d-18f9-4f97-a4bf-ad2bf7d67ca8",
        keyId: "4ad99b41-d612-4435-b187-0cf68b03ad42",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "1bd43d1f-0cb0-4a00-83eb-22d9b3a70d94",
          url: "voluptatibus",
          xmlSignatureC14nMethod: CanonicalizationMethod.Inclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.Inclusive,
      },
      logoutURL: "iure",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Assertion,
    },
    state: ObjectState.PendingDelete,
    tenantId: "57d1fedc-2050-4d38-9c3c-e185472f9ee6",
    themeId: "9166a8be-3444-4eac-8b3a-2875c6c1fe60",
    unverified: {
      behavior: UnverifiedBehavior.Allow,
    },
    verificationEmailTemplateId: "d07d2a9c-87ae-450c-9666-1a1d9136a7e8",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "non": {
        "et": "amet",
      },
      "tenetur": {
        "asperiores": "commodi",
      },
    },
    deviceDescription: "voluptas",
    deviceName: "quos",
    deviceType: "esse",
    ipAddress: "veniam",
    location: {
      city: "Port Mercedesport",
      country: "Ireland",
      displayString: "aliquam",
      latitude: 8030.15,
      longitude: 3456.37,
      region: "occaecati",
      zipcode: "06348-8676",
    },
    os: "pariatur",
    userAgent: "laborum",
  },
  role: {
    description: "consequuntur",
    id: "9ca79181-c956-4716-a3c5-30b5665163a3",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Grace Lesch Sr.",
  },
  sourceApplicationId: "ab2521b9-f2e0-4724-a7b8-a40bc05fab0d",
}, "nisi").then((res: CreateApplicationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createAuditLogWithId

Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateAuditLogWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createAuditLogWithId({
  auditLog: {
    data: {
      "perferendis": {
        "facere": "asperiores",
        "ratione": "eos",
        "laborum": "sint",
        "incidunt": "pariatur",
      },
      "aspernatur": {
        "itaque": "quo",
      },
    },
    id: 595025,
    insertInstant: 1659380719000,
    insertUser: "accusantium",
    message: "debitis",
    newValue: {
      "aliquam": "quasi",
      "repellendus": "architecto",
      "hic": "labore",
    },
    oldValue: {
      "voluptas": "saepe",
      "praesentium": "veniam",
    },
    reason: "ab",
  },
  eventInfo: {
    data: {
      "nisi": {
        "sapiente": "a",
        "molestiae": "amet",
        "voluptatibus": "temporibus",
        "tenetur": "nostrum",
      },
      "tempora": {
        "facere": "illum",
        "exercitationem": "saepe",
        "deserunt": "sint",
        "minima": "dolore",
      },
    },
    deviceDescription: "sequi",
    deviceName: "sequi",
    deviceType: "occaecati",
    ipAddress: "voluptatum",
    location: {
      city: "Paterson",
      country: "Uzbekistan",
      displayString: "soluta",
      latitude: 2625.24,
      longitude: 1703.83,
      region: "dolorum",
      zipcode: "84225-5928",
    },
    os: "deleniti",
    userAgent: "aut",
  },
}).then((res: CreateAuditLogWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createConnector

Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConnectorResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConnector({
  connector: {
    data: {
      "error": {
        "culpa": "quis",
        "asperiores": "iste",
        "harum": "sunt",
        "atque": "similique",
      },
    },
    debug: false,
    id: "244fd619-039d-4acd-b8ed-0dc671dc7f1e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mrs. Molly Ziemann",
    type: ConnectorType.FusionAuth,
  },
}).then((res: CreateConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createConnectorWithId

Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConnectorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConnectorWithId("aut", {
  connector: {
    data: {
      "provident": {
        "repellendus": "ab",
      },
      "cum": {
        "natus": "aperiam",
        "dicta": "repellat",
      },
      "dolores": {
        "quibusdam": "totam",
        "provident": "maxime",
        "totam": "id",
      },
      "neque": {
        "vel": "ipsum",
      },
    },
    debug: false,
    id: "9da5b7b6-902b-4881-a94f-643664a8f0af",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Israel Johns DDS",
    type: ConnectorType.Generic,
  },
}).then((res: CreateConnectorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createConsent

Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConsentResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConsent({
  consent: {
    consentEmailTemplateId: "32d9fbaf-9476-4a2a-a8dc-c50c8a3512c7",
    countryMinimumAgeForSelfConsent: {
      "voluptate": "blanditiis",
    },
    data: {
      "rem": {
        "dolorem": "alias",
        "dignissimos": "minima",
        "eaque": "mollitia",
      },
      "alias": {
        "accusamus": "sint",
      },
    },
    defaultMinimumAgeForSelfConsent: 415589,
    emailPlus: {
      emailTemplateId: "6ec736d4-3194-4398-8783-c92398ed3d3a",
      enabled: false,
      maximumTimeToSendEmailInHours: 748433,
      minimumTimeToSendEmailInHours: 465324,
    },
    id: "ca3c5ca8-649a-470c-bd5d-6989b7206451",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Willie Kling V",
    values: [
      "laborum",
      "voluptatum",
      "ratione",
      "facere",
    ],
  },
}, "eius").then((res: CreateConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createConsentWithId

Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConsentWithId("perspiciatis", {
  consent: {
    consentEmailTemplateId: "2ed14b8a-2c19-4545-85e9-55dcc185ea49",
    countryMinimumAgeForSelfConsent: {
      "dicta": "eligendi",
    },
    data: {
      "cumque": {
        "sequi": "culpa",
        "facere": "explicabo",
      },
      "nulla": {
        "animi": "quam",
        "totam": "incidunt",
        "similique": "nobis",
      },
    },
    defaultMinimumAgeForSelfConsent: 636839,
    emailPlus: {
      emailTemplateId: "3d230edf-7381-41a1-9538-2bd7ed565076",
      enabled: false,
      maximumTimeToSendEmailInHours: 136036,
      minimumTimeToSendEmailInHours: 85002,
    },
    id: "c58f4d73-9656-44c2-8a07-11a961d24a7d",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Wm Little",
    values: [
      "sed",
    ],
  },
}, "assumenda").then((res: CreateConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEmailTemplate

Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEmailTemplateResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEmailTemplate({
  emailTemplate: {
    defaultFromName: "atque",
    defaultHtmlTemplate: "perspiciatis",
    defaultSubject: "odit",
    defaultTextTemplate: "eligendi",
    fromEmail: "earum",
    id: "7812cb51-2c87-4824-8bf5-48f88f8f1bf0",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "quod": "totam",
      "officiis": "dicta",
      "maiores": "dolores",
    },
    localizedHtmlTemplates: {
      "eum": "nulla",
    },
    localizedSubjects: {
      "pariatur": "quas",
      "sequi": "illo",
    },
    localizedTextTemplates: {
      "doloremque": "aperiam",
      "laudantium": "ab",
      "voluptatem": "provident",
      "ipsa": "delectus",
    },
    name: "Marcia Berge",
  },
}, "ducimus").then((res: CreateEmailTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEmailTemplateWithId

Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEmailTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEmailTemplateWithId("adipisci", {
  emailTemplate: {
    defaultFromName: "doloribus",
    defaultHtmlTemplate: "ratione",
    defaultSubject: "id",
    defaultTextTemplate: "ex",
    fromEmail: "quos",
    id: "1c5768dc-e742-4409-a215-e08601489a5f",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "sequi": "debitis",
      "neque": "mollitia",
    },
    localizedHtmlTemplates: {
      "non": "pariatur",
      "vero": "natus",
      "quibusdam": "quibusdam",
      "officia": "dolorem",
    },
    localizedSubjects: {
      "vero": "placeat",
    },
    localizedTextTemplates: {
      "vel": "non",
      "incidunt": "praesentium",
      "ipsum": "itaque",
      "non": "dolorum",
    },
    name: "Amelia Morissette",
  },
}, "modi").then((res: CreateEmailTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntity

Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntity({
  entity: {
    clientId: "assumenda",
    clientSecret: "maiores",
    data: {
      "in": {
        "quaerat": "nostrum",
        "libero": "totam",
        "omnis": "veniam",
        "nostrum": "facere",
      },
    },
    id: "413e13a4-8231-4090-bbd3-54c092bd734f",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Louise Funk",
    parentId: "d86f4bb2-0fe5-4d91-9cbf-e749caf45a27",
    tenantId: "f69e2c9e-6d10-4e9d-b3ad-4c6b03108d9c",
    type: {
      data: {
        "sequi": {
          "modi": "nihil",
          "velit": "aut",
        },
      },
      id: "82b94f2a-b1fd-4567-9e9c-326350a46714",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "3789ce0e-9915-494d-93a7-4c0252fe3b4b",
        enabled: false,
        timeToLiveInSeconds: 292846,
      },
      lastUpdateInstant: 1659380719000,
      name: "Ira Lindgren",
      permissions: [
        {
          data: {
            "voluptates": {
              "nam": "nisi",
              "officiis": "quasi",
              "fugiat": "aspernatur",
            },
            "impedit": {
              "ad": "eaque",
              "aspernatur": "expedita",
              "laborum": "hic",
              "rerum": "explicabo",
            },
            "eligendi": {
              "placeat": "aliquam",
              "aliquid": "adipisci",
              "ipsam": "fugiat",
            },
          },
          description: "enim",
          id: "e65da028-c3e9-451a-9e30-fda966489d7b",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Vickie Howe",
        },
        {
          data: {
            "veritatis": {
              "fuga": "quasi",
            },
            "eos": {
              "vel": "rerum",
              "cupiditate": "excepturi",
              "fugit": "eius",
            },
            "perspiciatis": {
              "corporis": "natus",
              "numquam": "tempora",
            },
            "corrupti": {
              "asperiores": "veniam",
              "cumque": "praesentium",
            },
          },
          description: "ut",
          id: "3836b86b-3cdf-4641-9b04-49f9df13f4ee",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Preston Walsh",
        },
      ],
    },
  },
}, "tempore").then((res: CreateEntityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntityType

Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypeResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntityType({
  entityType: {
    data: {
      "commodi": {
        "ea": "molestias",
      },
      "quia": {
        "rem": "molestias",
        "eius": "necessitatibus",
      },
      "culpa": {
        "aliquid": "amet",
        "fugiat": "corporis",
      },
      "impedit": {
        "fugit": "voluptate",
        "provident": "quis",
      },
    },
    id: "b785148d-6d54-49e5-a35b-33bc0f970c42",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "fc9f4844-225e-475b-b960-65c0efa6f93b",
      enabled: false,
      timeToLiveInSeconds: 563937,
    },
    lastUpdateInstant: 1659380719000,
    name: "Candace Braun",
    permissions: [
      {
        data: {
          "veniam": {
            "accusamus": "vitae",
            "explicabo": "corporis",
            "incidunt": "soluta",
          },
          "nihil": {
            "provident": "reiciendis",
          },
          "dolore": {
            "eveniet": "odio",
            "voluptate": "explicabo",
            "architecto": "perferendis",
            "possimus": "dicta",
          },
        },
        description: "delectus",
        id: "6558c99c-722d-42bc-8f94-087d9caae042",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Marty Klein",
      },
      {
        data: {
          "placeat": {
            "nam": "modi",
            "minus": "id",
            "culpa": "beatae",
          },
          "quod": {
            "eveniet": "sint",
            "saepe": "illo",
            "minima": "nulla",
            "reiciendis": "molestias",
          },
          "ipsa": {
            "natus": "aperiam",
          },
        },
        description: "ducimus",
        id: "f3783198-3d42-4e54-a854-66597c50233c",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Dr. Pauline Koss",
      },
      {
        data: {
          "dolorum": {
            "mollitia": "autem",
            "illum": "at",
            "hic": "nemo",
          },
        },
        description: "laborum",
        id: "bd6487c5-fc2b-4862-a00b-ef69e1001576",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Patricia Renner",
      },
      {
        data: {
          "similique": {
            "quibusdam": "accusamus",
            "illum": "blanditiis",
            "tempora": "similique",
            "dolor": "enim",
          },
          "dolorum": {
            "beatae": "explicabo",
            "nesciunt": "corrupti",
          },
        },
        description: "officiis",
        id: "1a735ac2-6ae3-43be-b971-a8f46bca1106",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Frankie Mohr",
      },
    ],
  },
  permission: {
    data: {
      "esse": {
        "beatae": "pariatur",
      },
      "voluptatem": {
        "eligendi": "tenetur",
        "deleniti": "deleniti",
        "necessitatibus": "cumque",
      },
      "iste": {
        "nihil": "libero",
        "perspiciatis": "occaecati",
        "officia": "nemo",
        "quis": "doloremque",
      },
    },
    description: "similique",
    id: "656ed333-bb0c-4e8a-a654-32a986eb7e14",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Hubert Hilpert",
  },
}).then((res: CreateEntityTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntityTypePermission

Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypePermissionResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntityTypePermission("doloremque", {
  entityType: {
    data: {
      "natus": {
        "nemo": "eaque",
      },
      "aut": {
        "nihil": "accusantium",
        "et": "unde",
        "similique": "eius",
      },
      "rem": {
        "blanditiis": "laudantium",
        "earum": "impedit",
        "accusamus": "reprehenderit",
        "expedita": "hic",
      },
    },
    id: "904e0110-5d38-4908-962c-6beb68a0f657",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "b7d03a14-80f8-4de3-8f06-9d810618d97e",
      enabled: false,
      timeToLiveInSeconds: 124387,
    },
    lastUpdateInstant: 1659380719000,
    name: "Lori Cole",
    permissions: [
      {
        data: {
          "sit": {
            "culpa": "voluptatum",
            "voluptatem": "amet",
            "vitae": "explicabo",
            "quia": "provident",
          },
        },
        description: "fugit",
        id: "cc61c2a7-02bb-497e-a102-da2de35f8e01",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Irvin Emard",
      },
      {
        data: {
          "id": {
            "ut": "veniam",
            "eius": "quae",
            "dolores": "dolorum",
          },
          "quod": {
            "iure": "voluptatem",
          },
          "incidunt": {
            "a": "vitae",
            "maxime": "placeat",
            "cupiditate": "asperiores",
          },
        },
        description: "maxime",
        id: "61aae5eb-5f0c-4492-b574-4d08a2267aae",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Erik Monahan",
      },
    ],
  },
  permission: {
    data: {
      "molestiae": {
        "est": "placeat",
      },
      "sequi": {
        "tempore": "voluptates",
      },
      "cumque": {
        "rem": "consectetur",
        "nulla": "magni",
        "dolor": "esse",
      },
      "deleniti": {
        "debitis": "neque",
        "facilis": "sapiente",
        "maxime": "sed",
      },
    },
    description: "dolor",
    id: "d9450a98-6a49-45ba-8707-f06b28ecc864",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Nicholas Fahey",
  },
}).then((res: CreateEntityTypePermissionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntityTypePermissionWithId

Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypePermissionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntityTypePermissionWithId("a", "aliquid", {
  entityType: {
    data: {
      "eligendi": {
        "eum": "sint",
        "eligendi": "incidunt",
        "quisquam": "quod",
      },
    },
    id: "6b78890a-3fd3-4c81-9a10-f8c23df931da",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "3edb51fa-d94a-4cc9-8351-37726d15321b",
      enabled: false,
      timeToLiveInSeconds: 554508,
    },
    lastUpdateInstant: 1659380719000,
    name: "Norma Pfannerstill",
    permissions: [
      {
        data: {
          "sint": {
            "totam": "alias",
          },
          "hic": {
            "iure": "consequatur",
            "accusamus": "cum",
            "occaecati": "fuga",
            "ex": "autem",
          },
        },
        description: "nostrum",
        id: "8e69a4b8-43d3-482d-bec7-5c68c6065946",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Roosevelt Tremblay I",
      },
      {
        data: {
          "deleniti": {
            "magnam": "cupiditate",
            "expedita": "sapiente",
            "deleniti": "explicabo",
          },
          "veritatis": {
            "eligendi": "amet",
            "ipsum": "nihil",
          },
          "hic": {
            "iure": "libero",
            "cum": "eaque",
            "porro": "vel",
          },
          "omnis": {
            "adipisci": "quam",
            "fugit": "facere",
            "libero": "vitae",
            "non": "labore",
          },
        },
        description: "incidunt",
        id: "ba9f78a5-c0ed-47aa-b62e-97261fb0c58d",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Maureen Rohan V",
      },
      {
        data: {
          "ex": {
            "minima": "expedita",
            "modi": "expedita",
            "quaerat": "accusantium",
          },
          "recusandae": {
            "sapiente": "iusto",
            "quasi": "odit",
            "tempore": "ducimus",
            "animi": "ducimus",
          },
          "similique": {
            "voluptatem": "adipisci",
            "tempora": "modi",
            "soluta": "inventore",
          },
        },
        description: "ducimus",
        id: "10688dee-bef8-497f-bdd0-ccd33f11b3e4",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss John Lehner",
      },
      {
        data: {
          "ipsa": {
            "architecto": "deleniti",
            "eum": "accusamus",
          },
        },
        description: "optio",
        id: "759e02f3-702c-45c8-a2d3-0ead3104fa44",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Patricia Kozey",
      },
    ],
  },
  permission: {
    data: {
      "ducimus": {
        "libero": "ut",
        "tempora": "sed",
      },
    },
    description: "quas",
    id: "2821fdb2-f69e-4592-a7c7-1cc8d3cd4258",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Anthony Fahey",
  },
}).then((res: CreateEntityTypePermissionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntityTypeWithId

Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntityTypeWithId("laborum", {
  entityType: {
    data: {
      "odit": {
        "rem": "aut",
        "atque": "repellat",
        "eveniet": "odit",
        "quam": "ullam",
      },
      "inventore": {
        "fugit": "perferendis",
        "incidunt": "ducimus",
        "quod": "aut",
      },
      "numquam": {
        "omnis": "repudiandae",
        "inventore": "quaerat",
      },
    },
    id: "3f9619bb-7d40-4d5a-91fa-436e6259233f",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "95c9d237-397c-4785-b5db-4f500183febd",
      enabled: false,
      timeToLiveInSeconds: 992586,
    },
    lastUpdateInstant: 1659380719000,
    name: "Allison Jacobs",
    permissions: [
      {
        data: {
          "autem": {
            "deserunt": "facilis",
            "in": "ad",
            "voluptatem": "sit",
            "enim": "qui",
          },
        },
        description: "dolorum",
        id: "5647edc4-39ed-48c4-b20f-41240d4487ac",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Ramona Doyle",
      },
    ],
  },
  permission: {
    data: {
      "nobis": {
        "quidem": "unde",
      },
      "fugiat": {
        "modi": "atque",
      },
    },
    description: "blanditiis",
    id: "d795aa42-fc40-4566-9f69-a006d2124945",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Penny Botsford",
  },
}).then((res: CreateEntityTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEntityWithId

Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createEntityWithId("odio", {
  entity: {
    clientId: "quo",
    clientSecret: "ipsum",
    data: {
      "et": {
        "magnam": "illo",
        "atque": "magnam",
        "incidunt": "consequatur",
      },
      "nisi": {
        "saepe": "accusantium",
      },
      "sit": {
        "veritatis": "ipsa",
      },
    },
    id: "d023dc90-1f5a-4fd2-a6c4-4846ae9d8925",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Della Lubowitz",
    parentId: "2f4896bf-51e4-4652-93c3-43d61778af49",
    tenantId: "1247725e-6219-409e-9104-4a5de59ac770",
    type: {
      data: {
        "ea": {
          "voluptatem": "quisquam",
          "delectus": "et",
        },
        "optio": {
          "quis": "unde",
          "consectetur": "qui",
          "aliquid": "doloremque",
          "enim": "explicabo",
        },
      },
      id: "51e66bb4-2689-47d9-9a2d-335670e93ee6",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "cf59f358-aaea-4cae-b23a-31bf7ba1cc97",
        enabled: false,
        timeToLiveInSeconds: 471141,
      },
      lastUpdateInstant: 1659380719000,
      name: "Carla Schneider Sr.",
      permissions: [
        {
          data: {
            "sint": {
              "alias": "placeat",
              "in": "possimus",
              "iste": "assumenda",
              "neque": "dolores",
            },
            "consectetur": {
              "quae": "animi",
              "est": "autem",
              "sequi": "officiis",
              "nulla": "occaecati",
            },
            "optio": {
              "et": "nobis",
              "quas": "nemo",
              "commodi": "soluta",
              "quo": "libero",
            },
            "id": {
              "inventore": "accusamus",
              "maiores": "odit",
            },
          },
          description: "numquam",
          id: "54a47fac-f116-4cdd-9444-a7562873c7dd",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Sheldon Zulauf",
        },
        {
          data: {
            "adipisci": {
              "impedit": "autem",
              "qui": "consectetur",
              "ea": "aspernatur",
              "consequatur": "delectus",
            },
            "nesciunt": {
              "dolor": "voluptatum",
            },
          },
          description: "doloribus",
          id: "30df3db0-22fa-4a56-9fb8-f652ebb9d383",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Rodney Lockman",
        },
        {
          data: {
            "fugit": {
              "neque": "cum",
              "sed": "error",
            },
          },
          description: "ratione",
          id: "dab30e91-7f50-4fda-84c8-b1bb55a292b0",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Salvatore Franey",
        },
        {
          data: {
            "quaerat": {
              "laboriosam": "nisi",
              "labore": "accusamus",
            },
            "cum": {
              "repellendus": "voluptatem",
            },
          },
          description: "non",
          id: "388b0d1b-b17a-4fee-b4b6-feb9457c7eda",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Vincent Medhurst III",
        },
      ],
    },
  },
}, "tenetur").then((res: CreateEntityWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFamily

Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFamilyResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFamily({
  familyMember: {
    data: {
      "asperiores": {
        "nisi": "hic",
        "assumenda": "ab",
      },
      "eum": {
        "quidem": "sequi",
      },
      "doloremque": {
        "debitis": "consectetur",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRole.Child,
    userId: "23b93e34-316c-4f55-b431-3553ccf1c204",
  },
}, "placeat").then((res: CreateFamilyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFamilyWithId

Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFamilyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFamilyWithId("labore", {
  familyMember: {
    data: {
      "illum": {
        "minus": "sint",
        "occaecati": "voluptatem",
        "labore": "maxime",
        "ad": "illo",
      },
      "provident": {
        "cum": "atque",
        "suscipit": "labore",
      },
      "praesentium": {
        "officiis": "voluptatibus",
        "mollitia": "quam",
        "deleniti": "a",
        "ab": "voluptates",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRole.Child,
    userId: "d3b901e0-952b-4bb4-8bb1-9f713d95a416",
  },
}, "molestias").then((res: CreateFamilyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createForm

Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createForm({
  form: {
    data: {
      "quasi": {
        "corrupti": "in",
      },
      "quia": {
        "dicta": "eveniet",
        "vitae": "quos",
      },
      "eveniet": {
        "perspiciatis": "debitis",
        "non": "veniam",
        "illo": "illo",
      },
      "deleniti": {
        "fugit": "optio",
        "quo": "minima",
        "ducimus": "tenetur",
        "libero": "repellendus",
      },
    },
    id: "60b1a78e-d29a-49d4-aea8-5658c2d4f4c8",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Willis Veum",
    steps: [
      {
        fields: [
          "8fd9667e-46c5-41d2-bfaa-58dcef234c95",
          "5b9bdf21-90ab-4d9b-bcc2-725ec2659ce0",
        ],
      },
    ],
    type: FormType.Registration,
  },
}).then((res: CreateFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFormField

Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormFieldResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormControl, FormDataType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormField({
  field: {
    confirm: false,
    consentId: "80840c69-ef68-4e45-88ad-dfac75450043",
    control: FormControl.Checkbox,
    data: {
      "eum": {
        "amet": "quia",
        "facilis": "magnam",
      },
      "dolor": {
        "inventore": "sapiente",
        "temporibus": "sapiente",
        "ipsa": "vitae",
      },
      "nobis": {
        "itaque": "unde",
      },
      "beatae": {
        "quas": "maiores",
        "voluptate": "libero",
        "quod": "ea",
        "error": "at",
      },
    },
    description: "incidunt",
    id: "60a77ece-b26d-410f-9ef2-631c7c0f0f87",
    insertInstant: 1659380719000,
    key: "dolorem",
    lastUpdateInstant: 1659380719000,
    name: "Jeremiah Schultz",
    options: [
      "nemo",
    ],
    required: false,
    type: FormDataType.String,
    validator: {
      enabled: false,
      expression: "illum",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "e0b4a4a4-253c-4302-9711-f42c7e7dc548",
      control: FormControl.Textarea,
      data: {
        "sit": {
          "recusandae": "numquam",
          "architecto": "fuga",
          "iusto": "culpa",
        },
        "dolores": {
          "ipsam": "impedit",
        },
        "officia": {
          "odit": "similique",
        },
        "labore": {
          "dolorum": "provident",
          "quibusdam": "ipsam",
          "provident": "omnis",
        },
      },
      description: "rem",
      id: "8192cfd0-c77c-453e-be7d-4ee6e8b90bac",
      insertInstant: 1659380719000,
      key: "consectetur",
      lastUpdateInstant: 1659380719000,
      name: "Edwin Turcotte",
      options: [
        "ea",
        "in",
        "ipsa",
      ],
      required: false,
      type: FormDataType.Consent,
      validator: {
        enabled: false,
        expression: "maiores",
      },
    },
  ],
}).then((res: CreateFormFieldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFormFieldWithId

Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormFieldWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormControl, FormDataType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormFieldWithId("itaque", {
  field: {
    confirm: false,
    consentId: "c31c5082-4d18-49a3-aa6b-2d27eb707aa6",
    control: FormControl.Checkbox,
    data: {
      "voluptatum": {
        "officiis": "dolore",
        "commodi": "debitis",
        "commodi": "beatae",
        "voluptate": "voluptate",
      },
      "fugiat": {
        "iste": "pariatur",
        "nobis": "dolor",
        "distinctio": "dignissimos",
      },
      "eaque": {
        "voluptatibus": "cum",
        "facilis": "nisi",
        "occaecati": "ducimus",
        "aperiam": "repudiandae",
      },
      "repudiandae": {
        "nihil": "ipsa",
        "eveniet": "neque",
      },
    },
    description: "autem",
    id: "097ef7c2-06e6-41b0-9308-714c20a3d986",
    insertInstant: 1659380719000,
    key: "sequi",
    lastUpdateInstant: 1659380719000,
    name: "Della Ortiz",
    options: [
      "adipisci",
      "delectus",
      "repudiandae",
      "autem",
    ],
    required: false,
    type: FormDataType.Date,
    validator: {
      enabled: false,
      expression: "ad",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "4dbaf94a-7c98-4f13-af28-db2cf2bf4f3d",
      control: FormControl.Text,
      data: {
        "amet": {
          "ea": "fugiat",
          "esse": "officiis",
        },
        "sunt": {
          "tempore": "dolores",
          "beatae": "eligendi",
        },
        "fugiat": {
          "voluptatum": "beatae",
          "natus": "aliquid",
          "assumenda": "veniam",
        },
        "quis": {
          "delectus": "autem",
          "iste": "mollitia",
          "sunt": "quod",
        },
      },
      description: "labore",
      id: "b79ae336-81c2-43c3-9a7c-0e17cb12c5ba",
      insertInstant: 1659380719000,
      key: "laudantium",
      lastUpdateInstant: 1659380719000,
      name: "Stacy Will Sr.",
      options: [
        "fugiat",
        "enim",
        "optio",
        "tempore",
      ],
      required: false,
      type: FormDataType.Number,
      validator: {
        enabled: false,
        expression: "ex",
      },
    },
    {
      confirm: false,
      consentId: "fbfec932-af68-413d-a5bf-ecec2dd6916f",
      control: FormControl.Radio,
      data: {
        "minus": {
          "quibusdam": "assumenda",
          "animi": "molestiae",
        },
        "ipsa": {
          "placeat": "aliquid",
          "sit": "vero",
          "laboriosam": "aut",
          "reprehenderit": "nostrum",
        },
        "praesentium": {
          "numquam": "fugiat",
          "autem": "et",
          "quisquam": "illo",
        },
        "tempora": {
          "facere": "excepturi",
          "aut": "aspernatur",
          "odit": "molestiae",
          "recusandae": "neque",
        },
      },
      description: "nihil",
      id: "c0d977f1-a549-41ab-a975-1b106d23e03e",
      insertInstant: 1659380719000,
      key: "voluptas",
      lastUpdateInstant: 1659380719000,
      name: "Dwight Casper",
      options: [
        "officiis",
        "omnis",
        "cupiditate",
      ],
      required: false,
      type: FormDataType.String,
      validator: {
        enabled: false,
        expression: "nobis",
      },
    },
  ],
}).then((res: CreateFormFieldWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFormWithId

Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormWithId("repellendus", {
  form: {
    data: {
      "unde": {
        "in": "odit",
        "iste": "eligendi",
        "error": "nulla",
        "tempora": "maiores",
      },
      "eos": {
        "totam": "fuga",
        "aliquam": "tempora",
        "laboriosam": "quaerat",
        "alias": "quisquam",
      },
      "fuga": {
        "ipsa": "illum",
        "tempore": "nihil",
      },
      "neque": {
        "consequuntur": "a",
        "unde": "dolorem",
        "maiores": "labore",
      },
    },
    id: "67dc0d8d-a561-4220-a6ab-8f277485c197",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Marguerite Wiegand",
    steps: [
      {
        fields: [
          "a7a089fc-44db-4274-930e-5cc7c6d0cbcf",
          "dcd334b6-f623-4bce-8ab5-0aee5e0da8b9",
          "af6ad054-86e7-4b41-bcbe-2d176dc1c43d",
          "40f61d17-1157-4cbe-9ee4-f7211840772f",
        ],
      },
    ],
    type: FormType.Registration,
  },
}).then((res: CreateFormWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createGroup

Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateGroupResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createGroup({
  group: {
    data: {
      "itaque": {
        "distinctio": "incidunt",
      },
    },
    id: "9dbe0f23-b7b6-4d99-88d6-eded477680fc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Maggie Bernier",
    roles: [
      {
        description: "dolores",
        id: "e5e82fd2-8d10-440a-be91-392ab44cb183",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mary Bayer",
      },
      {
        description: "eius",
        id: "61ce53e9-1449-48a9-ba46-0addfde410c3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Muriel Murray",
      },
      {
        description: "sunt",
        id: "82a49d96-25d3-4caf-bc19-8eea4452792b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Sammy Fritsch PhD",
      },
    ],
    tenantId: "a98becce-0486-4de0-956d-73b005503e8d",
  },
  roleIds: [
    "626ff77c-6567-45f5-b70e-3e4cfcc6a91e",
    "c52624d0-0014-4ef4-9cea-11ac53ebb658",
    "7f340414-c5b9-4ace-a400-ae9f92caf1b0",
    "25f1d147-18c6-4fa2-bad0-c06c5d95472c",
  ],
}, "at").then((res: CreateGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createGroupMembersWithId

Creates a member in a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateGroupMembersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createGroupMembersWithId({
  members: [
    {
      data: {
        "incidunt": {
          "porro": "eius",
          "nesciunt": "cum",
          "in": "quae",
          "distinctio": "maxime",
        },
      },
      groupId: "a88fa70c-4335-41c3-9d1e-b8f7f75f4f23",
      id: "f1c0a586-c3ae-47d7-b67f-eef5e142d95b",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.None,
        cleanSpeakId: "dbeceff7-c4b1-456e-9278-275eea768174",
        connectorId: "68063f79-9b79-456c-8b0f-a0bb20a40e7c",
        data: {
          "id": {
            "aliquid": "quaerat",
            "eaque": "nisi",
            "eius": "consequuntur",
            "iusto": "explicabo",
          },
          "autem": {
            "esse": "nobis",
            "voluptatem": "ab",
          },
        },
        email: "Andres.Klein52@yahoo.com",
        encryptionScheme: "earum",
        expiry: 1659380719000,
        factor: 859775,
        firstName: "Clinton",
        fullName: "iste",
        id: "21c25793-0d6f-4093-a3ef-a46d366dfa10",
        imageUrl: "architecto",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Brown",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
          {},
        ],
        middleName: "voluptatem",
        mobilePhone: "unde",
        parentEmail: "et",
        password: "cum",
        passwordChangeReason: ChangePasswordReason.Administrative,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "8b53862d-e1a9-4d14-be72-e521f90303df",
            authenticationToken: "quo",
            cleanSpeakId: "338397ff-fa6d-41d3-a090-fc157ac9fe19",
            data: {
              "vitae": {
                "accusamus": "perspiciatis",
                "nam": "vero",
                "aliquam": "architecto",
                "eligendi": "atque",
              },
              "nisi": {
                "nulla": "facere",
                "ducimus": "quibusdam",
                "omnis": "molestiae",
              },
            },
            id: "19d07b20-0a58-4ffd-a967-df8fd882a8e6",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "accusamus",
              "commodi",
              "eos",
            ],
            timezone: "America/Denver",
            tokens: {
              "eligendi": "facere",
            },
            username: "Kenneth63",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
          {
            applicationId: "dd04c375-2512-4bea-a1d8-7ecc5fdcea8e",
            authenticationToken: "molestiae",
            cleanSpeakId: "a8831166-2cda-46d7-bc1d-86066237d422",
            data: {
              "blanditiis": {
                "aliquid": "quibusdam",
                "quidem": "molestias",
              },
              "culpa": {
                "labore": "perspiciatis",
                "officiis": "consectetur",
              },
            },
            id: "984511cc-75e4-4f0c-804b-5bb758cc9456",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "alias",
              "consequatur",
              "suscipit",
              "occaecati",
            ],
            timezone: "America/Denver",
            tokens: {
              "rem": "nemo",
              "a": "maxime",
            },
            username: "Reed.Boyer",
            usernameStatus: ContentStatus.Pending,
            verified: false,
          },
          {
            applicationId: "3d84bbe2-4f29-4834-afb0-735cb6285d4a",
            authenticationToken: "odit",
            cleanSpeakId: "9aaa1e16-9156-4f7d-aee2-09505bf03a93",
            data: {
              "provident": {
                "incidunt": "rem",
                "sit": "cumque",
              },
              "fuga": {
                "in": "voluptatibus",
              },
              "nam": {
                "ipsa": "ducimus",
              },
              "voluptatum": {
                "eaque": "sequi",
                "fugit": "deserunt",
                "porro": "amet",
              },
            },
            id: "33172e2d-d79e-4c74-ba7e-88ddb36fd1cc",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "labore",
            ],
            timezone: "America/Denver",
            tokens: {
              "quisquam": "quas",
            },
            username: "Helen.Halvorson",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          {
            applicationId: "74f0a740-fb4a-4b44-9c3a-09e763995d80",
            authenticationToken: "corrupti",
            cleanSpeakId: "bbe79445-5ebc-4550-a1c4-26b59c8366fd",
            data: {
              "minus": {
                "neque": "veniam",
              },
              "nemo": {
                "quia": "quisquam",
                "et": "expedita",
                "quos": "veniam",
              },
              "ad": {
                "laudantium": "atque",
                "cupiditate": "fugiat",
                "omnis": "officiis",
                "hic": "error",
              },
              "consectetur": {
                "necessitatibus": "omnis",
              },
            },
            id: "000a13ad-8124-4208-afd2-3411898e7387",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "tenetur",
              "facilis",
              "eveniet",
              "voluptatum",
            ],
            timezone: "America/Denver",
            tokens: {
              "officia": "saepe",
              "tempore": "mollitia",
              "libero": "tempore",
            },
            username: "Jazmyne37",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
        ],
        salt: "eum",
        tenantId: "e90351bb-9763-4172-8b77-a5a5365a79f1",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha1,
                codeLength: 455674,
                timeStep: 70555,
              },
              email: "Alexzander.Borer85@hotmail.com",
              id: "361fed8d-c5ef-4fb4-93e9-089e871fdb4d",
              lastUsed: false,
              method: "voluptas",
              mobilePhone: "perspiciatis",
              secret: "molestiae",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha512,
                codeLength: 816935,
                timeStep: 870071,
              },
              email: "Paula.Maggio@yahoo.com",
              id: "e43734a5-d72d-49ed-9785-be5e7afe5529",
              lastUsed: false,
              method: "nihil",
              mobilePhone: "tempore",
              secret: "mollitia",
            },
          ],
          recoveryCodes: [
            "explicabo",
            "laudantium",
          ],
        },
        uniqueUsername: "sunt",
        username: "Zula90",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      userId: "a23394a6-8cc8-40d3-8ff7-2164d0a91fe9",
    },
    {
      data: {
        "iste": {
          "minima": "nemo",
          "adipisci": "tempore",
        },
        "praesentium": {
          "necessitatibus": "perferendis",
          "consequatur": "doloremque",
          "excepturi": "quod",
        },
        "vel": {
          "error": "explicabo",
          "temporibus": "debitis",
        },
        "in": {
          "ipsum": "voluptas",
          "voluptas": "aspernatur",
          "sed": "eaque",
        },
      },
      groupId: "1a6aab4a-e7b1-4a5b-908d-4e30491aa35d",
      id: "4a839f03-bab7-47b9-98f0-313984507e0e",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.ExactMatch,
        cleanSpeakId: "9c7e23ec-b060-4465-ae23-a3d6c657e9de",
        connectorId: "8f7f002d-1986-4aa9-9d3a-1d32329e4583",
        data: {
          "eveniet": {
            "reiciendis": "qui",
            "officia": "fugiat",
            "laboriosam": "tempore",
          },
          "harum": {
            "aut": "debitis",
          },
        },
        email: "Ezekiel_Hills76@gmail.com",
        encryptionScheme: "aliquam",
        expiry: 1659380719000,
        factor: 547454,
        firstName: "Anastasia",
        fullName: "assumenda",
        id: "6e330867-5cbf-4186-856a-7e82cdf9d0fc",
        imageUrl: "fugit",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Lind",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
        ],
        middleName: "quod",
        mobilePhone: "aliquid",
        parentEmail: "ea",
        password: "vel",
        passwordChangeReason: ChangePasswordReason.Expired,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "c3f5589b-ea5d-4264-a41e-2ca84822e513",
            authenticationToken: "asperiores",
            cleanSpeakId: "6d9d2ad3-7c30-4990-b7c1-0b68792163e6",
            data: {
              "repellendus": {
                "rem": "voluptatum",
                "vel": "quae",
              },
              "quis": {
                "consectetur": "porro",
                "aperiam": "officia",
              },
            },
            id: "3049c3cf-6c02-476e-bb21-bad90d2743fd",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "magni",
              "animi",
              "sunt",
              "voluptatem",
            ],
            timezone: "America/Denver",
            tokens: {
              "ea": "placeat",
              "odit": "natus",
              "quam": "atque",
              "saepe": "quo",
            },
            username: "Chaz_Hamill",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
        ],
        salt: "cum",
        tenantId: "09227fcc-4799-46c9-b7bb-c57f38928a86",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha1,
                codeLength: 777563,
                timeStep: 319467,
              },
              email: "Rosetta_Keeling@yahoo.com",
              id: "63e4aa56-8464-4579-8fc6-c0e503f56831",
              lastUsed: false,
              method: "reiciendis",
              mobilePhone: "et",
              secret: "assumenda",
            },
          ],
          recoveryCodes: [
            "itaque",
            "at",
            "rem",
          ],
        },
        uniqueUsername: "quam",
        username: "Neha_Denesik",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      userId: "afabc986-e241-4e43-b234-2417d13e3f62",
    },
    {
      data: {
        "culpa": {
          "culpa": "recusandae",
          "labore": "fuga",
          "necessitatibus": "molestias",
        },
        "animi": {
          "numquam": "id",
          "provident": "cumque",
          "dolore": "sint",
        },
        "quia": {
          "exercitationem": "necessitatibus",
          "deleniti": "quidem",
          "mollitia": "corporis",
          "repellendus": "incidunt",
        },
      },
      groupId: "aa4a508b-d380-4c29-aa8d-d71bddaa30b7",
      id: "b91449ae-69c0-488d-818b-b71804f423d5",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.ExactMatch,
        cleanSpeakId: "3935f377-ac5c-49b7-a93b-6a3c523105e7",
        connectorId: "c34cab0e-cb81-42a6-a148-944a8e908507",
        data: {
          "nam": {
            "qui": "exercitationem",
            "dolorem": "praesentium",
            "sed": "exercitationem",
            "ratione": "nesciunt",
          },
          "tempora": {
            "asperiores": "nobis",
          },
        },
        email: "Lizzie.Gleichner42@gmail.com",
        encryptionScheme: "earum",
        expiry: 1659380719000,
        factor: 636567,
        firstName: "Donnell",
        fullName: "nihil",
        id: "578d171e-2941-4818-bc67-9b6b2f25359b",
        imageUrl: "corrupti",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Hintz",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
        ],
        middleName: "assumenda",
        mobilePhone: "aperiam",
        parentEmail: "et",
        password: "ad",
        passwordChangeReason: ChangePasswordReason.Expired,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "c8b83a38-a8a8-48c1-8420-0c2caeb1ae1e",
            authenticationToken: "impedit",
            cleanSpeakId: "f8c34946-bba7-4a05-a8b4-a9ec5b3688cc",
            data: {
              "consectetur": {
                "dolor": "magni",
                "odio": "magni",
              },
              "dignissimos": {
                "sit": "necessitatibus",
                "occaecati": "vel",
              },
              "autem": {
                "sint": "nihil",
                "voluptates": "accusantium",
                "veniam": "eius",
                "beatae": "aut",
              },
            },
            id: "3347d78f-f249-4114-9fab-9e59a4af3366",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "accusamus",
              "deserunt",
            ],
            timezone: "America/Denver",
            tokens: {
              "autem": "rerum",
              "sapiente": "dolores",
              "reiciendis": "doloribus",
            },
            username: "Avery_Hagenes79",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
        ],
        salt: "expedita",
        tenantId: "352acced-acc5-4227-814e-ca016bc41ea1",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha1,
                codeLength: 127394,
                timeStep: 852547,
              },
              email: "Beatrice63@gmail.com",
              id: "25ef71de-57a1-41d6-94a4-317692ea4867",
              lastUsed: false,
              method: "nesciunt",
              mobilePhone: "vero",
              secret: "nostrum",
            },
          ],
          recoveryCodes: [
            "sunt",
          ],
        },
        uniqueUsername: "rerum",
        username: "Katelin_Denesik",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      userId: "030660f0-24c7-49b4-8c64-c2b3a32c488a",
    },
    {
      data: {
        "debitis": {
          "magni": "reiciendis",
          "autem": "est",
        },
        "dolorum": {
          "exercitationem": "molestias",
          "id": "voluptas",
        },
        "corporis": {
          "eos": "aperiam",
          "deleniti": "amet",
          "aut": "quasi",
          "laboriosam": "maxime",
        },
        "fuga": {
          "modi": "soluta",
        },
      },
      groupId: "b87d4f62-127a-4607-9160-6294514c3db9",
      id: "ca9f38bd-2be8-4787-8349-3f49aa8465a3",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.None,
        cleanSpeakId: "83279b71-9d1c-4ea6-b3d8-6e3b35e49a31",
        connectorId: "35778ce5-4cac-4b0e-bea9-75045bacf63b",
        data: {
          "quasi": {
            "sunt": "quos",
            "commodi": "id",
          },
        },
        email: "Forrest67@hotmail.com",
        encryptionScheme: "alias",
        expiry: 1659380719000,
        factor: 179463,
        firstName: "Christelle",
        fullName: "autem",
        id: "14315d15-6829-49e6-9afc-7186ff20b7a7",
        imageUrl: "dolor",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Senger",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
          {},
          {},
        ],
        middleName: "labore",
        mobilePhone: "accusantium",
        parentEmail: "quo",
        password: "id",
        passwordChangeReason: ChangePasswordReason.Administrative,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "657c1641-bbf0-4552-b1b2-511dd606dd1b",
            authenticationToken: "sunt",
            cleanSpeakId: "8272bc9c-3221-4697-b188-0fcbb2b93c15",
            data: {
              "eum": {
                "alias": "libero",
                "at": "quasi",
              },
              "nihil": {
                "numquam": "blanditiis",
                "sequi": "sunt",
                "vel": "exercitationem",
              },
              "dolor": {
                "necessitatibus": "harum",
                "amet": "tempore",
                "ex": "vero",
                "odit": "quaerat",
              },
              "dicta": {
                "adipisci": "quasi",
                "alias": "occaecati",
                "perspiciatis": "deleniti",
                "dolor": "eum",
              },
            },
            id: "63c66dcb-b7df-46cb-89c8-b408e0713774",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "non",
              "a",
              "voluptates",
              "vero",
            ],
            timezone: "America/Denver",
            tokens: {
              "doloremque": "et",
            },
            username: "Reed_Miller",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          {
            applicationId: "a10c47b9-5040-4d6c-8b2a-5f002207e404",
            authenticationToken: "molestias",
            cleanSpeakId: "f90009ed-2902-478e-b4ae-9d64161e9150",
            data: {
              "ratione": {
                "amet": "rerum",
              },
            },
            id: "2c09b924-771f-4566-9e5b-7ec7626649d8",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "tempore",
              "provident",
              "recusandae",
              "numquam",
            ],
            timezone: "America/Denver",
            tokens: {
              "a": "at",
              "dolores": "odit",
              "molestiae": "ex",
              "officiis": "sit",
            },
            username: "Melyssa_Ledner",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
        ],
        salt: "atque",
        tenantId: "7d6fa5b6-e8db-4f81-af83-b1ca6a9ffc56",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 141113,
                timeStep: 609454,
              },
              email: "Novella.Nikolaus@hotmail.com",
              id: "60a13959-18da-41d4-8e78-e3cf8e1143da",
              lastUsed: false,
              method: "natus",
              mobilePhone: "nesciunt",
              secret: "eaque",
            },
          ],
          recoveryCodes: [
            "nobis",
            "magni",
            "nihil",
          ],
        },
        uniqueUsername: "laborum",
        username: "Adrian_Lemke",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      userId: "2184439b-3de8-4756-8cce-470cd2147b6e",
    },
  ],
}).then((res: CreateGroupMembersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createGroupWithId

Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateGroupWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createGroupWithId("suscipit", {
  group: {
    data: {
      "ipsam": {
        "placeat": "voluptatibus",
      },
    },
    id: "01d0d8c3-a4b9-4a5b-b935-dfe974fa4b1e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Clark Adams",
    roles: [
      {
        description: "temporibus",
        id: "a623442e-1a92-437e-9984-c80b479e8919",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Ms. Connie Romaguera",
      },
      {
        description: "officia",
        id: "8d69c568-9214-4fa2-8207-e4fae038cd7f",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Karla Schinner",
      },
      {
        description: "est",
        id: "baf7fc2c-cba4-4bef-8df6-8eaedb2ee70b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Robert Jenkins",
      },
      {
        description: "nam",
        id: "36add704-080e-40a3-bc73-a5a034b11499",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Esther Dickens",
      },
    ],
    tenantId: "a6987a47-2b70-49a1-93e2-2301068539ce",
  },
  roleIds: [
    "932d10ac-d15d-48cc-b06b-786b3d37bd20",
  ],
}, "ut").then((res: CreateGroupWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createIPAccessControlList

Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIPAccessControlListResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIPAccessControlList({
  ipAccessControlList: {
    data: {
      "quae": {
        "ipsum": "dolore",
        "accusantium": "nam",
        "rerum": "dolor",
        "ex": "voluptatibus",
      },
      "voluptas": {
        "odio": "dolorum",
        "eius": "praesentium",
      },
      "corporis": {
        "provident": "quod",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryAction.Allow,
        endIPAddress: "quam",
        startIPAddress: "incidunt",
      },
    ],
    id: "90284882-6bb0-43c7-bd22-5e47871a88ed",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Norma Padberg",
  },
}).then((res: CreateIPAccessControlListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createIPAccessControlListWithId

Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIPAccessControlListWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIPAccessControlListWithId("eius", {
  ipAccessControlList: {
    data: {
      "repellat": {
        "quasi": "minima",
        "voluptatum": "id",
      },
      "impedit": {
        "repellendus": "doloremque",
      },
      "sapiente": {
        "repellat": "nemo",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryAction.Block,
        endIPAddress: "adipisci",
        startIPAddress: "libero",
      },
      {
        action: IPAccessControlEntryAction.Block,
        endIPAddress: "in",
        startIPAddress: "tempore",
      },
      {
        action: IPAccessControlEntryAction.Allow,
        endIPAddress: "molestiae",
        startIPAddress: "eaque",
      },
    ],
    id: "40d0d98e-9d82-4c5e-b06f-5576f5cdeb02",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Miss Angel Streich",
  },
}).then((res: CreateIPAccessControlListWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createIdentityProvider

Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIdentityProviderResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  CanonicalizationMethod,
  ClientAuthenticationMethod,
  IdentityProviderLinkingStrategy,
  IdentityProviderLoginMethod,
  IdentityProviderType,
  SAMLv2DestinationAssertionPolicy,
  SteamAPIMode,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIdentityProvider({
  identityProvider: {
    assertionConfiguration: {
      destination: {
        alternates: [
          "harum",
        ],
        policy: SAMLv2DestinationAssertionPolicy.Enabled,
      },
    },
    buttonImageURL: "quas",
    buttonText: "id",
    domains: [
      "ipsum",
      "molestiae",
      "corrupti",
    ],
    emailClaim: "sapiente",
    idpEndpoint: "consequuntur",
    idpInitiatedConfiguration: {
      enabled: false,
      issuer: "asperiores",
    },
    issuer: "quisquam",
    keyId: "ff81ddf7-e088-4f74-af54-c9216e892631",
    loginHintConfiguration: {
      enabled: false,
      parameterName: "velit",
    },
    nameIdFormat: "libero",
    postRequest: false,
    requestSigningKeyId: "b6fc2c8d-2701-4096-b66a-d6e3e1d9d3b6",
    signRequest: false,
    uniqueIdClaim: "aliquid",
    useNameIdForEmail: false,
    usernameClaim: "perferendis",
    xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
  },
}).then((res: CreateIdentityProviderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createIdentityProviderWithId

Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  CanonicalizationMethod,
  ClientAuthenticationMethod,
  IdentityProviderLinkingStrategy,
  IdentityProviderLoginMethod,
  IdentityProviderType,
  SAMLv2DestinationAssertionPolicy,
  SteamAPIMode,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIdentityProviderWithId("non", {
  identityProvider: {
    assertionConfiguration: {
      destination: {
        alternates: [
          "dicta",
          "sunt",
          "id",
        ],
        policy: SAMLv2DestinationAssertionPolicy.Disabled,
      },
    },
    buttonImageURL: "ab",
    buttonText: "nulla",
    domains: [
      "at",
      "magni",
    ],
    emailClaim: "quia",
    idpEndpoint: "modi",
    idpInitiatedConfiguration: {
      enabled: false,
      issuer: "nihil",
    },
    issuer: "assumenda",
    keyId: "e9b3d461-70e7-468a-96bb-398788398eba",
    loginHintConfiguration: {
      enabled: false,
      parameterName: "architecto",
    },
    nameIdFormat: "expedita",
    postRequest: false,
    requestSigningKeyId: "bf714335-6f63-449a-9642-49b211ce46b9",
    signRequest: false,
    uniqueIdClaim: "nemo",
    useNameIdForEmail: false,
    usernameClaim: "veritatis",
    xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
  },
}).then((res: CreateIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createLambda

Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateLambdaResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createLambda({
  lambda: {
    body: "enim",
    debug: false,
    engineType: LambdaEngineType.GraalJS,
    id: "b158ca91-42f0-4526-b2b3-1cad692ffc87",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mrs. Bernice Bednar",
    type: LambdaType.SonyPSNReconcile,
  },
}).then((res: CreateLambdaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createLambdaWithId

Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateLambdaWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createLambdaWithId("pariatur", {
  lambda: {
    body: "velit",
    debug: false,
    engineType: LambdaEngineType.Nashorn,
    id: "934e036f-5c38-4866-8f69-85530a2e2aed",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Candace Orn",
    type: LambdaType.TwitterReconcile,
  },
}).then((res: CreateLambdaWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createLogout

The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateLogoutResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createLogout({
  eventInfo: {
    data: {
      "impedit": {
        "praesentium": "illum",
      },
    },
    deviceDescription: "eaque",
    deviceName: "incidunt",
    deviceType: "aut",
    ipAddress: "eligendi",
    location: {
      city: "Lauriannechester",
      country: "Denmark",
      displayString: "pariatur",
      latitude: 6128.01,
      longitude: 326.23,
      region: "voluptas",
      zipcode: "48783-6848",
    },
    os: "maxime",
    userAgent: "dignissimos",
  },
  global: false,
  refreshToken: "neque",
}, "provident", "dolore").then((res: CreateLogoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createMessageTemplate

Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessageTemplateResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessageTemplate({
  messageTemplate: {
    data: {
      "dolores": {
        "repellat": "ex",
        "ratione": "tempora",
      },
      "rerum": {
        "quam": "dolorem",
      },
      "accusantium": {
        "inventore": "numquam",
        "itaque": "commodi",
      },
      "soluta": {
        "corrupti": "minus",
        "dolorem": "debitis",
        "consequatur": "perspiciatis",
        "impedit": "vel",
      },
    },
    id: "4d342ac2-99a6-4e5e-baef-13402e945f53",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Eva Feest",
    type: MessageType.Sms,
  },
}).then((res: CreateMessageTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createMessageTemplateWithId

Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessageTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessageTemplateWithId("placeat", {
  messageTemplate: {
    data: {
      "quasi": {
        "sint": "praesentium",
      },
      "quia": {
        "illo": "repellat",
      },
      "iste": {
        "inventore": "tenetur",
        "nihil": "fugiat",
        "iste": "deserunt",
      },
      "earum": {
        "repudiandae": "eum",
        "omnis": "aliquid",
        "blanditiis": "sed",
        "mollitia": "minus",
      },
    },
    id: "eefb04f8-c512-4caa-bea7-08ed5798d385",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mrs. Leroy Jaskolski",
    type: MessageType.Sms,
  },
}).then((res: CreateMessageTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createMessenger

Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessengerResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessenger({
  messenger: {
    data: {
      "quibusdam": {
        "impedit": "nesciunt",
        "velit": "magnam",
      },
      "cupiditate": {
        "dignissimos": "eum",
        "facere": "minima",
      },
      "ullam": {
        "accusantium": "error",
      },
    },
    debug: false,
    id: "e9a2253b-6d76-4588-aeea-e5fd4b39f8a1",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Sherri Auer",
    transport: "quos",
    type: MessengerType.Twilio,
  },
}).then((res: CreateMessengerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createMessengerWithId

Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessengerWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessengerWithId("sunt", {
  messenger: {
    data: {
      "quisquam": {
        "laudantium": "laboriosam",
        "repellendus": "quos",
      },
    },
    debug: false,
    id: "39fc9e17-5ffa-4906-ae55-9b72eb674603",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Ms. Ora Thompson",
    transport: "reprehenderit",
    type: MessengerType.Kafka,
  },
}).then((res: CreateMessengerWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTenant

Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateTenantResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createTenant({
  eventInfo: {
    data: {
      "explicabo": {
        "earum": "at",
        "eveniet": "vero",
        "iure": "aliquid",
      },
      "dignissimos": {
        "quae": "recusandae",
        "temporibus": "doloremque",
        "porro": "inventore",
      },
      "nisi": {
        "molestiae": "harum",
        "id": "dolore",
        "quam": "rem",
      },
      "tempora": {
        "magnam": "ut",
      },
    },
    deviceDescription: "totam",
    deviceName: "unde",
    deviceType: "repellat",
    ipAddress: "voluptas",
    location: {
      city: "Jeniferton",
      country: "Ukraine",
      displayString: "earum",
      latitude: 559.47,
      longitude: 3059.71,
      region: "praesentium",
      zipcode: "50617",
    },
    os: "culpa",
    userAgent: "fugit",
  },
  sourceTenantId: "5ee6c75a-f8a6-40a7-ae34-6e0979e5afe6",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "0acaca64-5de9-4867-951a-9cce61ec2c79",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethod.HCaptcha,
      enabled: false,
      secretKey: "consectetur",
      siteKey: "excepturi",
      threshold: 6860.16,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "5a4d5a65-b4d5-4562-99b7-d9e2d6fcf557",
        data: {
          "dolores": {
            "nulla": "harum",
            "corrupti": "quam",
            "ad": "quisquam",
          },
          "sequi": {
            "blanditiis": "perspiciatis",
            "sit": "fugit",
            "deleniti": "dolores",
          },
        },
        domains: [
          "enim",
          "quasi",
          "delectus",
        ],
        migrate: false,
      },
      {
        connectorId: "41cf6796-ed3d-4724-818f-581e98cce3f7",
        data: {
          "autem": {
            "accusantium": "aperiam",
            "possimus": "culpa",
          },
        },
        domains: [
          "officiis",
        ],
        migrate: false,
      },
      {
        connectorId: "3aa61c6f-e09d-4852-b53b-32c8c7c3c710",
        data: {
          "inventore": {
            "molestiae": "ipsum",
            "at": "excepturi",
          },
          "perferendis": {
            "quisquam": "expedita",
            "labore": "quidem",
          },
          "recusandae": {
            "itaque": "asperiores",
            "amet": "quod",
            "inventore": "odit",
            "in": "optio",
          },
          "ipsum": {
            "aperiam": "molestias",
            "iste": "quis",
            "veniam": "consequuntur",
          },
        },
        domains: [
          "dolores",
          "ipsam",
          "ipsa",
        ],
        migrate: false,
      },
      {
        connectorId: "dcbbcd3b-121b-488c-9ee5-e7a061391cc8",
        data: {
          "deserunt": {
            "soluta": "iusto",
          },
          "repellendus": {
            "ducimus": "autem",
          },
          "ut": {
            "aspernatur": "eum",
            "facilis": "perferendis",
            "cumque": "doloribus",
          },
          "minima": {
            "ex": "impedit",
            "harum": "aliquid",
            "necessitatibus": "harum",
            "similique": "expedita",
          },
        },
        domains: [
          "quis",
          "accusamus",
          "doloremque",
          "tempore",
        ],
        migrate: false,
      },
    ],
    data: {
      "cupiditate": {
        "velit": "nobis",
        "illo": "amet",
        "enim": "quas",
        "nulla": "nisi",
      },
      "deserunt": {
        "reprehenderit": "nam",
        "soluta": "odio",
        "est": "voluptates",
      },
      "minus": {
        "recusandae": "ullam",
        "eum": "iste",
        "at": "voluptate",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Malcolm Adams",
          value: "occaecati",
        },
      ],
      debug: false,
      defaultFromEmail: "sit",
      defaultFromName: "dignissimos",
      emailUpdateEmailTemplateId: "f9894414-52a9-4f01-b344-2c61be133bac",
      emailVerifiedEmailTemplateId: "de532b65-26f8-4628-93fe-2859ce322231",
      forgotPasswordEmailTemplateId: "fe6664c4-1d2f-4ba5-8ba0-69b8d291beb8",
      host: "quae",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "0a2aa874-9479-4edd-8fcf-7b50cf87f08f",
      loginIdInUseOnUpdateEmailTemplateId: "39271076-a24b-440c-8f08-bff1081e88f8",
      loginNewDeviceEmailTemplateId: "6996c8e2-2be0-4a3c-b478-93bd23f86600",
      loginSuspiciousEmailTemplateId: "c61c7834-273c-4aa9-918b-38f1b61a331a",
      password: "ipsam",
      passwordResetSuccessEmailTemplateId: "4dc10294-f92f-4ed9-b9ba-8f71e2992c20",
      passwordUpdateEmailTemplateId: "ee1228ac-3adc-4647-9240-bc11ea482824",
      passwordlessEmailTemplateId: "ccc6a2f0-f5b9-4d3c-b11a-7687d3100e8e",
      port: 150725,
      properties: "cum",
      security: EmailSecurityType.Ssl,
      setPasswordEmailTemplateId: "b0d746d2-a7c7-4d1e-a0e7-9fa9bbe5f179",
      twoFactorMethodAddEmailTemplateId: "f650b1e7-07e7-4e43-9671-3bacce072abd",
      twoFactorMethodRemoveEmailTemplateId: "61918d27-9c10-4c18-916f-d78be2621272",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehavior.Allow,
      },
      username: "Britney_Lowe35",
      verificationEmailTemplateId: "03962867-e72b-43a6-9024-b157f9bb6ef7",
      verificationStrategy: VerificationStrategy.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "ad": {
          enabled: false,
          transactionType: TransactionType.None,
        },
        "voluptatum": {
          enabled: false,
          transactionType: TransactionType.SimpleMajority,
        },
        "sunt": {
          enabled: false,
          transactionType: TransactionType.AbsoluteMajority,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 599722,
      changePasswordIdGenerator: {
        length: 592279,
        type: SecureGeneratorType.RandomAlpha,
      },
      changePasswordIdTimeToLiveInSeconds: 375101,
      deviceCodeTimeToLiveInSeconds: 422212,
      deviceUserCodeIdGenerator: {
        length: 89246,
        type: SecureGeneratorType.RandomAlpha,
      },
      emailVerificationIdGenerator: {
        length: 498586,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      emailVerificationIdTimeToLiveInSeconds: 918704,
      emailVerificationOneTimeCodeGenerator: {
        length: 959082,
        type: SecureGeneratorType.RandomDigits,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 416745,
      oneTimePasswordTimeToLiveInSeconds: 530871,
      passwordlessLoginGenerator: {
        length: 721629,
        type: SecureGeneratorType.RandomBytes,
      },
      passwordlessLoginTimeToLiveInSeconds: 769788,
      pendingAccountLinkTimeToLiveInSeconds: 759464,
      registrationVerificationIdGenerator: {
        length: 707359,
        type: SecureGeneratorType.RandomDigits,
      },
      registrationVerificationIdTimeToLiveInSeconds: 534610,
      registrationVerificationOneTimeCodeGenerator: {
        length: 171195,
        type: SecureGeneratorType.RandomDigits,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 716005,
      setupPasswordIdGenerator: {
        length: 269101,
        type: SecureGeneratorType.RandomAlpha,
      },
      setupPasswordIdTimeToLiveInSeconds: 594801,
      trustTokenTimeToLiveInSeconds: 517683,
      twoFactorIdTimeToLiveInSeconds: 370447,
      twoFactorOneTimeCodeIdGenerator: {
        length: 4558,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 855665,
      twoFactorTrustIdTimeToLiveInSeconds: 166395,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 987398,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 292802,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 667444,
      actionDurationUnit: ExpiryUnit.Minutes,
      emailUser: false,
      resetCountInSeconds: 933228,
      tooManyAttempts: 566495,
      userActionId: "c4ae5514-0e75-4726-a003-c2f029419251",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "8cee41c9-99f4-469f-af1c-f1a3f023c669",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 929687,
      enabled: false,
      familyRequestEmailTemplateId: "6a626012-eba0-4579-88c6-720c3103f1a4",
      maximumChildAge: 1920,
      minimumOwnerAge: 755941,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "0f3ec868-8fd8-4ec6-bc03-128f0aaaeee0",
    },
    formConfiguration: {
      adminUserFormId: "04eba7bf-8732-4be5-89c5-087131f06f0b",
    },
    httpSessionMaxInactiveInterval: 776795,
    id: "e55a8687-143c-4979-85ff-797a5da664b7",
    insertInstant: 1659380719000,
    issuer: "vero",
    jwtConfiguration: {
      accessTokenKeyId: "778a74ba-aa28-432b-b658-62d2a31f9b14",
      enabled: false,
      idTokenKeyId: "aa6bdec7-f444-4232-a9a5-dee1acd72a89",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 530259,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 698348,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "58fe682e-1c2d-4be2-bd58-e8247d122c9f",
      scimEnterpriseUserResponseConverterId: "67678fa2-7958-4367-b63d-a079096faeb8",
      scimGroupRequestConverterId: "6480730d-8f8b-489d-9ca6-075656fc0ebe",
      scimGroupResponseConverterId: "67155e2d-06a3-4070-96e2-97f581fabaaa",
      scimUserRequestConverterId: "7d801088-076f-4f5f-aed2-9814088269b6",
      scimUserResponseConverterId: "a70b0dd8-2f94-4fff-bd1e-1e21ddc69038",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "quidem",
    maximumPasswordAge: {
      days: 116704,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 842364,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithm.HmacSha1,
        codeLength: 507658,
        enabled: false,
        timeStep: 467579,
      },
      email: {
        enabled: false,
        templateId: "b51eb5fd-30bf-4e03-890c-f20254a95904",
      },
      loginPolicy: MultiFactorLoginPolicy.Disabled,
      sms: {
        enabled: false,
        messengerId: "cb462d6b-c991-47f9-8e47-92b979a413d6",
        templateId: "a8c91683-bd86-41d0-998c-cf89d3861186",
      },
    },
    name: "Marty Kling",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "002facb1-3ac2-44c8-943b-866c575a1e26",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "ex",
      encryptionSchemeFactor: 550645,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchMode.Medium,
        notifyUserEmailTemplateId: "30be37b0-e8fb-4c48-9dc7-e69b53510505",
        onLogin: BreachAction.Off,
      },
      maxLength: 120524,
      minLength: 284389,
      rememberPreviousPasswords: {
        count: 854563,
        enabled: false,
      },
      requireMixedCase: false,
      requireNonAlpha: false,
      requireNumber: false,
      validateOnLogin: false,
    },
    rateLimitConfiguration: {
      failedLogin: {
        enabled: false,
        limit: 782966,
        timePeriodInSeconds: 668148,
      },
      forgotPassword: {
        enabled: false,
        limit: 88109,
        timePeriodInSeconds: 25791,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 366046,
        timePeriodInSeconds: 540160,
      },
      sendPasswordless: {
        enabled: false,
        limit: 512493,
        timePeriodInSeconds: 153803,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 311611,
        timePeriodInSeconds: 511220,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 261986,
        timePeriodInSeconds: 771253,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "commodi",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "e9488927-82d3-44e0-b8fc-0d59f57b9f98",
      enabled: false,
      schemas: {
        "eaque": {
          "accusamus": "ipsa",
          "iusto": "deleniti",
          "aperiam": "quos",
        },
      },
      serverEntityTypeId: "c36c9e2f-7034-44e0-8f47-8eb539483f74",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 504346,
    },
    state: ObjectState.PendingDelete,
    themeId: "efccb69d-541b-44b3-93f3-566625bea322",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 60699,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 76002,
        separator: "temporibus",
        strategy: UniqueUsernameStrategy.OnCollision,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.CrossPlatform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Required,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Preferred,
      },
      relyingPartyId: "optio",
      relyingPartyName: "voluptas",
    },
  },
  webhookIds: [
    "8ea1d48c-5c2f-49e2-9d90-fd53776bfc76",
    "77f0f504-a6e4-4828-bb6d-aee19c26c0cb",
    "618c6331-cabd-4ab7-a7a4-44dd0da0abe5",
  ],
}, "totam").then((res: CreateTenantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTenantWithId

Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateTenantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createTenantWithId("repudiandae", {
  eventInfo: {
    data: {
      "velit": {
        "quis": "labore",
        "nobis": "animi",
        "illo": "eligendi",
        "facilis": "nesciunt",
      },
      "laborum": {
        "aliquam": "sint",
        "expedita": "molestias",
        "saepe": "corporis",
        "maxime": "quasi",
      },
      "totam": {
        "aspernatur": "ipsam",
        "debitis": "rem",
        "dignissimos": "maiores",
      },
    },
    deviceDescription: "ea",
    deviceName: "incidunt",
    deviceType: "corrupti",
    ipAddress: "aspernatur",
    location: {
      city: "East Ethel",
      country: "Haiti",
      displayString: "tempore",
      latitude: 9187.69,
      longitude: 5634.74,
      region: "exercitationem",
      zipcode: "07777-1765",
    },
    os: "iusto",
    userAgent: "sint",
  },
  sourceTenantId: "08d73809-a02f-406e-9228-b56065a5074b",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "efb8af68-49d2-4b99-8043-63a0964c0538",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethod.GoogleRecaptchaV3,
      enabled: false,
      secretKey: "ea",
      siteKey: "eveniet",
      threshold: 1918.52,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "def9c765-dfd7-4354-a5cb-94977017a262",
        data: {
          "eius": {
            "soluta": "explicabo",
            "eum": "quod",
            "laborum": "eius",
          },
        },
        domains: [
          "cupiditate",
          "natus",
          "excepturi",
          "quos",
        ],
        migrate: false,
      },
      {
        connectorId: "2879defc-0b23-4960-acf9-0ad989e1a347",
        data: {
          "veniam": {
            "porro": "possimus",
            "laborum": "voluptatem",
            "quaerat": "eius",
          },
        },
        domains: [
          "officia",
          "deserunt",
          "saepe",
          "illum",
        ],
        migrate: false,
      },
      {
        connectorId: "6e13a620-e2e9-418c-b5b0-486cf398a0b3",
        data: {
          "eius": {
            "beatae": "nihil",
            "quibusdam": "nulla",
          },
          "sint": {
            "minus": "officiis",
            "ipsum": "doloremque",
          },
        },
        domains: [
          "numquam",
          "distinctio",
        ],
        migrate: false,
      },
    ],
    data: {
      "eius": {
        "expedita": "neque",
        "cum": "ipsum",
        "quasi": "eligendi",
        "cum": "corporis",
      },
      "voluptatem": {
        "quo": "amet",
      },
      "et": {
        "aperiam": "repellendus",
        "deleniti": "esse",
      },
      "iusto": {
        "cumque": "ipsam",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Patti Blanda",
          value: "ea",
        },
      ],
      debug: false,
      defaultFromEmail: "tempore",
      defaultFromName: "sapiente",
      emailUpdateEmailTemplateId: "64b454e9-831e-4795-b0e5-7f54ebf2d2b4",
      emailVerifiedEmailTemplateId: "6097efa4-4a8d-4ff4-8cdd-1850bf5a0cbc",
      forgotPasswordEmailTemplateId: "8b7860af-ea6c-4635-932d-53086c10a856",
      host: "dolorum",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "19d4665b-a972-4598-b5dc-0cecbc78bd24",
      loginIdInUseOnUpdateEmailTemplateId: "8ec6e8b2-40b1-4c06-89c0-649d2bdd9e58",
      loginNewDeviceEmailTemplateId: "ddb1665c-312c-47f5-90d4-721c176292dd",
      loginSuspiciousEmailTemplateId: "7878e71b-f8c1-4418-81fe-1f87ea103a98",
      password: "aut",
      passwordResetSuccessEmailTemplateId: "6ea16063-99ef-417b-8175-8d4ab5bc80de",
      passwordUpdateEmailTemplateId: "a77fd993-1ec9-4d10-acff-2c26ab840a28",
      passwordlessEmailTemplateId: "ea0672d6-b73a-434c-a434-cdb3149a19f2",
      port: 339239,
      properties: "sed",
      security: EmailSecurityType.None,
      setPasswordEmailTemplateId: "78a18a4b-0dae-4d4b-9cf0-616ee9227575",
      twoFactorMethodAddEmailTemplateId: "bd60daa0-e149-4cd1-8cdd-362bbf923900",
      twoFactorMethodRemoveEmailTemplateId: "15f26899-cf4f-4feb-9bec-50318a81eb01",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehavior.Gated,
      },
      username: "Charley_Mohr",
      verificationEmailTemplateId: "7b456a85-5e50-488c-8a32-6341acccca66",
      verificationStrategy: VerificationStrategy.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "dolore": {
          enabled: false,
          transactionType: TransactionType.SuperMajority,
        },
        "deleniti": {
          enabled: false,
          transactionType: TransactionType.Any,
        },
        "iste": {
          enabled: false,
          transactionType: TransactionType.Any,
        },
        "minus": {
          enabled: false,
          transactionType: TransactionType.None,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 719737,
      changePasswordIdGenerator: {
        length: 227638,
        type: SecureGeneratorType.RandomDigits,
      },
      changePasswordIdTimeToLiveInSeconds: 694279,
      deviceCodeTimeToLiveInSeconds: 743991,
      deviceUserCodeIdGenerator: {
        length: 165566,
        type: SecureGeneratorType.RandomDigits,
      },
      emailVerificationIdGenerator: {
        length: 233015,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      emailVerificationIdTimeToLiveInSeconds: 202052,
      emailVerificationOneTimeCodeGenerator: {
        length: 689770,
        type: SecureGeneratorType.RandomDigits,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 111913,
      oneTimePasswordTimeToLiveInSeconds: 783111,
      passwordlessLoginGenerator: {
        length: 836578,
        type: SecureGeneratorType.RandomBytes,
      },
      passwordlessLoginTimeToLiveInSeconds: 678419,
      pendingAccountLinkTimeToLiveInSeconds: 350295,
      registrationVerificationIdGenerator: {
        length: 711897,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      registrationVerificationIdTimeToLiveInSeconds: 487429,
      registrationVerificationOneTimeCodeGenerator: {
        length: 278943,
        type: SecureGeneratorType.RandomAlpha,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 41535,
      setupPasswordIdGenerator: {
        length: 428114,
        type: SecureGeneratorType.RandomAlpha,
      },
      setupPasswordIdTimeToLiveInSeconds: 567510,
      trustTokenTimeToLiveInSeconds: 424322,
      twoFactorIdTimeToLiveInSeconds: 789791,
      twoFactorOneTimeCodeIdGenerator: {
        length: 434685,
        type: SecureGeneratorType.RandomDigits,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 423827,
      twoFactorTrustIdTimeToLiveInSeconds: 875896,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 454358,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 306009,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 834845,
      actionDurationUnit: ExpiryUnit.Minutes,
      emailUser: false,
      resetCountInSeconds: 518898,
      tooManyAttempts: 634549,
      userActionId: "48149a1b-8411-4986-8058-76b3087113de",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "4061082d-0953-4c89-8d92-7a5ba5511bb8",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 216426,
      enabled: false,
      familyRequestEmailTemplateId: "70d9784f-b146-4473-b1bc-5be61b3f3717",
      maximumChildAge: 170335,
      minimumOwnerAge: 529061,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "74c377c8-d439-4ec6-bd2c-ad006d77c6eb",
    },
    formConfiguration: {
      adminUserFormId: "bbc9e974-4c5b-4645-a4af-2fcabccbca32",
    },
    httpSessionMaxInactiveInterval: 569907,
    id: "25eb06a6-cabe-422a-91f7-7a75d8ff4452",
    insertInstant: 1659380719000,
    issuer: "harum",
    jwtConfiguration: {
      accessTokenKeyId: "ed7470fc-48c2-482b-8716-c27f6b175780",
      enabled: false,
      idTokenKeyId: "304c40ac-2b4a-4d82-94fd-e37724350ed8",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 679675,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 962525,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "8cc2911a-6b7e-4bdc-a009-f01dd38523cd",
      scimEnterpriseUserResponseConverterId: "a4ebb9fd-83f8-43df-9b0c-46a094e2e9c2",
      scimGroupRequestConverterId: "205dfe76-5bff-4bcb-8601-5f216aa04070",
      scimGroupResponseConverterId: "7fa73982-47a8-4721-bfed-962df3eee7c3",
      scimUserRequestConverterId: "85c7970e-1a1a-48db-8f6e-19b9012c444e",
      scimUserResponseConverterId: "231ba147-727d-4e95-b72a-dabf6800b01b",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "placeat",
    maximumPasswordAge: {
      days: 732387,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 798494,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithm.HmacSha1,
        codeLength: 215727,
        enabled: false,
        timeStep: 125944,
      },
      email: {
        enabled: false,
        templateId: "f2c19dbf-7111-4a96-9f21-523e37136521",
      },
      loginPolicy: MultiFactorLoginPolicy.Enabled,
      sms: {
        enabled: false,
        messengerId: "a6e596aa-41b9-4e20-93ae-8c315325b5e0",
        templateId: "2294725d-8813-48da-8e6d-d2a0991b6d17",
      },
    },
    name: "Angela Beier",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "c799a2a1-8db1-429d-8524-abb7b10caf24",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "magnam",
      encryptionSchemeFactor: 851446,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchMode.High,
        notifyUserEmailTemplateId: "103d0830-ac4d-4070-84e3-96e562c5ccb1",
        onLogin: BreachAction.RecordOnly,
      },
      maxLength: 220719,
      minLength: 468227,
      rememberPreviousPasswords: {
        count: 218541,
        enabled: false,
      },
      requireMixedCase: false,
      requireNonAlpha: false,
      requireNumber: false,
      validateOnLogin: false,
    },
    rateLimitConfiguration: {
      failedLogin: {
        enabled: false,
        limit: 209394,
        timePeriodInSeconds: 78255,
      },
      forgotPassword: {
        enabled: false,
        limit: 278086,
        timePeriodInSeconds: 846919,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 682260,
        timePeriodInSeconds: 842858,
      },
      sendPasswordless: {
        enabled: false,
        limit: 325439,
        timePeriodInSeconds: 558735,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 724297,
        timePeriodInSeconds: 510547,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 624411,
        timePeriodInSeconds: 656,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "numquam",
        "magni",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "e5a55a10-fd8a-4c0f-882f-9e9a53c304da",
      enabled: false,
      schemas: {
        "sunt": {
          "consequuntur": "hic",
        },
        "ipsa": {
          "hic": "debitis",
          "quo": "minus",
          "quaerat": "ab",
        },
        "cupiditate": {
          "sed": "illum",
        },
        "voluptate": {
          "eius": "expedita",
        },
      },
      serverEntityTypeId: "3ae70934-d9eb-4b6a-a8f6-f71b0652fe65",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 228813,
    },
    state: ObjectState.Inactive,
    themeId: "fb30a414-aa29-44d6-8c08-a2ec1a807151",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 645187,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 249506,
        separator: "ullam",
        strategy: UniqueUsernameStrategy.Always,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.CrossPlatform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Discouraged,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Preferred,
      },
      relyingPartyId: "commodi",
      relyingPartyName: "at",
    },
  },
  webhookIds: [
    "ddc39917-b844-4c85-82a9-9e62f4946ca2",
    "d7266cd7-6381-4272-baa0-3f83a1e1e7ab",
  ],
}, "dolorem").then((res: CreateTenantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTheme

Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateThemeResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createTheme({
  sourceThemeId: "e07c05e1-3db8-48f5-91f9-8329f91922f7",
  theme: {
    data: {
      "officia": {
        "alias": "nihil",
        "distinctio": "voluptas",
        "nostrum": "tempora",
        "corporis": "eaque",
      },
      "accusantium": {
        "mollitia": "minima",
      },
      "nobis": {
        "vel": "est",
      },
      "sed": {
        "sunt": "eveniet",
      },
    },
    defaultMessages: "ratione",
    id: "ff770a2b-42e5-4edf-a4a2-a875c6a710e5",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "soluta": "quaerat",
      "iusto": "accusamus",
    },
    name: "Charlie Pacocha",
    stylesheet: "molestias",
    templates: {
      accountEdit: "harum",
      accountIndex: "assumenda",
      accountTwoFactorDisable: "quas",
      accountTwoFactorEnable: "adipisci",
      accountTwoFactorIndex: "quia",
      accountWebAuthnAdd: "molestiae",
      accountWebAuthnDelete: "repudiandae",
      accountWebAuthnIndex: "rem",
      emailComplete: "repellat",
      emailSend: "esse",
      emailSent: "quibusdam",
      emailVerificationRequired: "non",
      emailVerify: "quasi",
      helpers: "nisi",
      index: "vitae",
      oauth2Authorize: "incidunt",
      oauth2AuthorizedNotRegistered: "nemo",
      oauth2ChildRegistrationNotAllowed: "recusandae",
      oauth2ChildRegistrationNotAllowedComplete: "quidem",
      oauth2CompleteRegistration: "vero",
      oauth2Device: "assumenda",
      oauth2DeviceComplete: "praesentium",
      oauth2Error: "eos",
      oauth2Logout: "ratione",
      oauth2Passwordless: "error",
      oauth2Register: "a",
      oauth2StartIdPLink: "consequuntur",
      oauth2TwoFactor: "optio",
      oauth2TwoFactorEnable: "vitae",
      oauth2TwoFactorEnableComplete: "iure",
      oauth2TwoFactorMethods: "nihil",
      oauth2Wait: "excepturi",
      oauth2WebAuthn: "nulla",
      oauth2WebAuthnReauth: "deleniti",
      oauth2WebAuthnReauthEnable: "similique",
      passwordChange: "sit",
      passwordComplete: "fuga",
      passwordForgot: "dolore",
      passwordSent: "nisi",
      registrationComplete: "iure",
      registrationSend: "modi",
      registrationSent: "suscipit",
      registrationVerificationRequired: "itaque",
      registrationVerify: "minus",
      samlv2Logout: "ea",
      unauthorized: "ipsam",
    },
  },
}).then((res: CreateThemeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createThemeWithId

Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateThemeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createThemeWithId("laudantium", {
  sourceThemeId: "e1817cde-0aee-48c7-a213-f425a0338b71",
  theme: {
    data: {
      "neque": {
        "magni": "repellat",
        "fugiat": "neque",
        "facilis": "iure",
        "amet": "voluptas",
      },
      "quisquam": {
        "dignissimos": "adipisci",
      },
      "aperiam": {
        "corrupti": "vero",
        "voluptate": "enim",
        "officia": "rerum",
      },
    },
    defaultMessages: "voluptate",
    id: "ff2a12fb-074c-4d44-823c-0b11281ed683",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "quidem": "iste",
      "amet": "quisquam",
    },
    name: "Rufus Johnston",
    stylesheet: "harum",
    templates: {
      accountEdit: "quidem",
      accountIndex: "eius",
      accountTwoFactorDisable: "corporis",
      accountTwoFactorEnable: "dolorem",
      accountTwoFactorIndex: "hic",
      accountWebAuthnAdd: "dolore",
      accountWebAuthnDelete: "tempora",
      accountWebAuthnIndex: "harum",
      emailComplete: "delectus",
      emailSend: "tempora",
      emailSent: "laboriosam",
      emailVerificationRequired: "dicta",
      emailVerify: "porro",
      helpers: "ducimus",
      index: "placeat",
      oauth2Authorize: "expedita",
      oauth2AuthorizedNotRegistered: "error",
      oauth2ChildRegistrationNotAllowed: "sunt",
      oauth2ChildRegistrationNotAllowedComplete: "placeat",
      oauth2CompleteRegistration: "dignissimos",
      oauth2Device: "provident",
      oauth2DeviceComplete: "accusamus",
      oauth2Error: "unde",
      oauth2Logout: "laboriosam",
      oauth2Passwordless: "odit",
      oauth2Register: "quibusdam",
      oauth2StartIdPLink: "debitis",
      oauth2TwoFactor: "adipisci",
      oauth2TwoFactorEnable: "quia",
      oauth2TwoFactorEnableComplete: "amet",
      oauth2TwoFactorMethods: "blanditiis",
      oauth2Wait: "reprehenderit",
      oauth2WebAuthn: "enim",
      oauth2WebAuthnReauth: "laborum",
      oauth2WebAuthnReauthEnable: "labore",
      passwordChange: "animi",
      passwordComplete: "magni",
      passwordForgot: "earum",
      passwordSent: "corrupti",
      registrationComplete: "voluptate",
      registrationSend: "quibusdam",
      registrationSent: "voluptatum",
      registrationVerificationRequired: "ducimus",
      registrationVerify: "nobis",
      samlv2Logout: "corporis",
      unauthorized: "vitae",
    },
  },
}).then((res: CreateThemeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createToken

Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateTokenResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { OAuthErrorReason, OAuthErrorType, TokenType, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createToken().then((res: CreateTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUser

Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUser({
  applicationId: "e22e77c0-e6e1-41c8-8332-6dc5b103067a",
  currentPassword: "corrupti",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "excepturi": {
        "aspernatur": "enim",
        "minus": "aliquid",
        "dolorum": "ut",
        "quisquam": "dicta",
      },
      "non": {
        "maiores": "quasi",
        "molestias": "molestiae",
        "tempora": "excepturi",
        "molestiae": "rerum",
      },
      "architecto": {
        "consequatur": "laudantium",
        "et": "laboriosam",
      },
    },
    deviceDescription: "velit",
    deviceName: "quasi",
    deviceType: "fuga",
    ipAddress: "dicta",
    location: {
      city: "South Alene",
      country: "Afghanistan",
      displayString: "reprehenderit",
      latitude: 249.7,
      longitude: 7836.77,
      region: "eaque",
      zipcode: "78849-3096",
    },
    os: "modi",
    userAgent: "labore",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.None,
    cleanSpeakId: "101c138b-4629-423d-90f7-51b287a33a86",
    connectorId: "cc3adf85-271a-4065-b902-4bd09d0fc60d",
    data: {
      "doloribus": {
        "hic": "eveniet",
        "aut": "officiis",
        "eaque": "officiis",
      },
      "tempora": {
        "delectus": "qui",
        "fugit": "exercitationem",
      },
      "debitis": {
        "occaecati": "repellendus",
      },
      "reprehenderit": {
        "temporibus": "non",
        "excepturi": "possimus",
        "blanditiis": "esse",
      },
    },
    email: "Adella91@yahoo.com",
    encryptionScheme: "autem",
    expiry: 1659380719000,
    factor: 52462,
    firstName: "Ariane",
    fullName: "labore",
    id: "a33d970b-2b53-41bf-b30e-da3f8e5e392f",
    imageUrl: "fugit",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Davis",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "ducimus": {
            "rerum": "iusto",
            "deserunt": "asperiores",
            "ab": "tempore",
            "suscipit": "neque",
          },
          "eveniet": {
            "pariatur": "officiis",
            "alias": "atque",
            "aperiam": "asperiores",
            "rerum": "deleniti",
          },
        },
        groupId: "0c05636c-53d4-4159-955c-5c717604597f",
        id: "37719dd8-c848-42c0-a65d-92c4c8c9f8a0",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
          cleanSpeakId: "c1e04d2a-ceb0-4cde-80e8-ecf818a9303e",
          connectorId: "93f00a18-b21f-406d-8d17-852d28be1db0",
          data: {
            "at": {
              "error": "sunt",
              "iste": "doloribus",
            },
          },
          email: "Darwin_Bruen@yahoo.com",
          encryptionScheme: "dolorem",
          expiry: 1659380719000,
          factor: 642252,
          firstName: "Karine",
          fullName: "dolore",
          id: "ea7db15c-4c15-4fe6-8d09-7a675597ecbe",
          imageUrl: "distinctio",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Kunze",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "voluptatum",
          mobilePhone: "explicabo",
          parentEmail: "tempore",
          password: "est",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "7da6c29b-938e-451a-be6e-d6f7ff04fda0",
              authenticationToken: "non",
              cleanSpeakId: "669eae81-8240-4365-9aa9-23c49919ebd1",
              data: {
                "tenetur": {
                  "quam": "iste",
                  "nemo": "sequi",
                },
                "quos": {
                  "expedita": "quidem",
                  "voluptatibus": "quod",
                  "temporibus": "earum",
                  "ut": "officiis",
                },
                "porro": {
                  "iste": "eum",
                  "est": "quisquam",
                  "magnam": "reiciendis",
                  "expedita": "modi",
                },
                "fugit": {
                  "dolor": "velit",
                  "ipsa": "ut",
                  "provident": "vel",
                  "illo": "reprehenderit",
                },
              },
              id: "cb71ddc2-50b6-40c7-91d2-aebe8b9828e2",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "iure",
                "ab",
              ],
              timezone: "America/Denver",
              tokens: {
                "veniam": "officiis",
                "minus": "soluta",
                "corrupti": "reprehenderit",
              },
              username: "Vanessa.Koepp",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "04f41446-f793-4d3b-9002-0147cd1b8316",
              authenticationToken: "quae",
              cleanSpeakId: "b3e3e989-60a0-4aaf-87a8-678ba500a8f4",
              data: {
                "nobis": {
                  "dolores": "eveniet",
                  "quibusdam": "ex",
                },
                "optio": {
                  "voluptas": "qui",
                  "dolores": "exercitationem",
                  "fugiat": "corporis",
                  "nostrum": "ea",
                },
                "architecto": {
                  "praesentium": "corrupti",
                  "doloremque": "non",
                },
                "consequuntur": {
                  "aspernatur": "doloribus",
                },
              },
              id: "7b59b715-4642-4b9e-b7c8-4c3d3ca49183",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "odio",
                "corrupti",
                "corrupti",
              ],
              timezone: "America/Denver",
              tokens: {
                "repellendus": "illo",
                "ullam": "ea",
                "earum": "sit",
              },
              username: "Annabell.OKeefe43",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "b8d0028e-3e1d-4c90-99f7-ef0f1385b67c",
              authenticationToken: "qui",
              cleanSpeakId: "4673ac98-f6d2-468f-92a6-bb086152225b",
              data: {
                "veniam": {
                  "qui": "laudantium",
                  "repudiandae": "dignissimos",
                },
              },
              id: "a201ecfb-74fa-4ff5-9e4f-2b0a857bcec8",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "reiciendis",
                "sequi",
                "numquam",
                "rerum",
              ],
              timezone: "America/Denver",
              tokens: {
                "et": "sint",
                "eaque": "accusantium",
              },
              username: "Cordia19",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
          ],
          salt: "voluptates",
          tenantId: "83c6c36a-56b3-4ad5-bf79-40d46d7039d4",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 656898,
                  timeStep: 943764,
                },
                email: "Alexander.Aufderhar@yahoo.com",
                id: "60b05f01-e7bd-4864-b968-dd0d773a07c3",
                lastUsed: false,
                method: "aut",
                mobilePhone: "odio",
                secret: "commodi",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 545503,
                  timeStep: 411133,
                },
                email: "Rasheed.Tromp@gmail.com",
                id: "92f9ea86-c03a-4c3f-a3dc-8373c1769864",
                lastUsed: false,
                method: "officiis",
                mobilePhone: "ad",
                secret: "molestias",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 902511,
                  timeStep: 973020,
                },
                email: "Mason54@hotmail.com",
                id: "aaa3debd-0c90-4035-a4c1-d0624de3534f",
                lastUsed: false,
                method: "magnam",
                mobilePhone: "vitae",
                secret: "accusamus",
              },
            ],
            recoveryCodes: [
              "eos",
              "facere",
            ],
          },
          uniqueUsername: "repellendus",
          username: "Loren26",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "94468999-94dc-4953-b426-6c0e500fc742",
      },
      {
        data: {
          "molestias": {
            "esse": "inventore",
            "aperiam": "totam",
            "occaecati": "vitae",
            "itaque": "voluptatibus",
          },
          "molestiae": {
            "amet": "dicta",
            "laborum": "praesentium",
            "modi": "asperiores",
          },
          "voluptates": {
            "molestiae": "libero",
            "porro": "vero",
            "aperiam": "sapiente",
            "tempore": "deserunt",
          },
          "fugit": {
            "ipsum": "dolore",
            "nulla": "dolor",
          },
        },
        groupId: "134756ee-2a90-4304-a708-e21909b67335",
        id: "519b00c5-0e73-4a8e-a6f6-d65fc9943625",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.ExactMatch,
          cleanSpeakId: "3a8f8c1e-639e-461d-bf23-53545dbfd69d",
          connectorId: "854ee495-6d86-41c1-be03-a43817586546",
          data: {
            "magni": {
              "ducimus": "voluptas",
              "autem": "adipisci",
            },
            "hic": {
              "explicabo": "modi",
              "natus": "iste",
              "delectus": "eius",
            },
          },
          email: "Name_Reichert@gmail.com",
          encryptionScheme: "pariatur",
          expiry: 1659380719000,
          factor: 332233,
          firstName: "Verna",
          fullName: "excepturi",
          id: "a10583aa-80e7-4186-a9e8-08966689a74c",
          imageUrl: "optio",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Grady",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "voluptatem",
          mobilePhone: "officiis",
          parentEmail: "vero",
          password: "eligendi",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "70b6c803-0772-4d93-b21e-4eb4dd4c7f22",
              authenticationToken: "maxime",
              cleanSpeakId: "e20aaaa3-e631-4268-bff4-8c35c49aace0",
              data: {
                "cupiditate": {
                  "voluptatum": "a",
                },
                "laboriosam": {
                  "porro": "blanditiis",
                  "ullam": "officia",
                  "corrupti": "tempore",
                  "vel": "assumenda",
                },
                "in": {
                  "odio": "dignissimos",
                },
              },
              id: "2acf4282-41d1-4ddf-85ce-1d3992dbefed",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "inventore",
              ],
              timezone: "America/Denver",
              tokens: {
                "esse": "esse",
              },
              username: "Maeve_Veum5",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
          ],
          salt: "corporis",
          tenantId: "aeeccd83-1a29-4da5-9964-ee5ebf7e6989",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 54890,
                  timeStep: 372634,
                },
                email: "London_Pfannerstill@gmail.com",
                id: "59e69b7c-0e26-483f-b7aa-8dbe1562afb8",
                lastUsed: false,
                method: "voluptas",
                mobilePhone: "officiis",
                secret: "voluptatem",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 142067,
                  timeStep: 88663,
                },
                email: "Shaina_Beer@gmail.com",
                id: "76f9669a-be38-442b-9c33-0450b65ef68c",
                lastUsed: false,
                method: "illo",
                mobilePhone: "ipsa",
                secret: "quaerat",
              },
            ],
            recoveryCodes: [
              "quaerat",
              "a",
              "corrupti",
            ],
          },
          uniqueUsername: "doloribus",
          username: "Arno.Mayert41",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "fbf04c4b-a168-458a-a373-848982d1f8e9",
      },
      {
        data: {
          "eius": {
            "cumque": "enim",
            "ab": "aut",
            "expedita": "deleniti",
            "aliquid": "quasi",
          },
        },
        groupId: "677bfdc5-3d20-4b95-9c88-3933d5c4dd75",
        id: "ad7f370d-efb4-4ca1-9e62-9d2cfb7a738a",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
          cleanSpeakId: "1cdb3e7c-e0c3-40a7-987d-b981664a0f26",
          connectorId: "4f689726-a926-4b6e-b375-c38034f8e42d",
          data: {
            "alias": {
              "perspiciatis": "excepturi",
            },
            "neque": {
              "omnis": "molestias",
              "fugiat": "dolorem",
              "nisi": "modi",
              "molestiae": "dolorum",
            },
            "reiciendis": {
              "laboriosam": "provident",
              "omnis": "ut",
              "quaerat": "qui",
            },
            "minus": {
              "ea": "amet",
              "illum": "consequuntur",
              "deleniti": "explicabo",
            },
          },
          email: "Myrtie.Hammes92@gmail.com",
          encryptionScheme: "deserunt",
          expiry: 1659380719000,
          factor: 261712,
          firstName: "Richmond",
          fullName: "provident",
          id: "fee3775f-5ff8-4a76-ba94-358b94836226",
          imageUrl: "pariatur",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Kertzmann",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "sapiente",
          mobilePhone: "odit",
          parentEmail: "modi",
          password: "sed",
          passwordChangeReason: ChangePasswordReason.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "d1e41973-662e-4d0d-aba2-94a30d3702a0",
              authenticationToken: "autem",
              cleanSpeakId: "49f70fe2-08a6-4567-9385-c4ab3d36dde0",
              data: {
                "quisquam": {
                  "rem": "tempora",
                },
                "repellendus": {
                  "dolor": "quasi",
                  "voluptas": "reprehenderit",
                },
                "quidem": {
                  "illum": "ea",
                  "iusto": "quibusdam",
                },
                "illum": {
                  "corrupti": "nobis",
                  "asperiores": "nam",
                },
              },
              id: "e369f0c7-81f0-4b63-b1a4-5bb886ac107d",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "suscipit",
                "eos",
                "a",
              ],
              timezone: "America/Denver",
              tokens: {
                "perspiciatis": "accusantium",
                "hic": "aut",
              },
              username: "Khalil48",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "593dc3b8-05cd-41cf-8537-90dd94e87eb2",
              authenticationToken: "quis",
              cleanSpeakId: "d18ce5d7-7414-40cd-870a-ae04ae20749c",
              data: {
                "fugiat": {
                  "hic": "quasi",
                  "aliquam": "corrupti",
                  "porro": "omnis",
                },
              },
              id: "f08f4107-c220-4684-963e-a6ceec848575",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "voluptatem",
                "laborum",
                "occaecati",
              ],
              timezone: "America/Denver",
              tokens: {
                "officia": "recusandae",
                "repellat": "iste",
                "incidunt": "aperiam",
                "itaque": "corrupti",
              },
              username: "Sarah_Jacobson",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "08f10144-1487-4566-bcae-f29407514624",
              authenticationToken: "odit",
              cleanSpeakId: "e339b43f-a193-475d-93d7-4f62f8d4410d",
              data: {
                "occaecati": {
                  "occaecati": "deserunt",
                  "corrupti": "iure",
                  "qui": "qui",
                },
              },
              id: "981eae02-3244-444c-a4b1-91a216434312",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "labore",
                "blanditiis",
              ],
              timezone: "America/Denver",
              tokens: {
                "reiciendis": "quae",
                "minus": "facilis",
                "dolores": "illum",
              },
              username: "Providenci.McLaughlin90",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "iure",
          tenantId: "1d2ba416-1d4c-413d-99f7-e76c8ad6bbbf",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 610802,
                  timeStep: 925944,
                },
                email: "Daisy.Gulgowski88@gmail.com",
                id: "6dbc4320-d3e9-47c3-b4f6-fce8891f8177",
                lastUsed: false,
                method: "autem",
                mobilePhone: "iusto",
                secret: "illum",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 398812,
                  timeStep: 167940,
                },
                email: "Cathy_Wisoky@gmail.com",
                id: "9d4f73f7-007a-47cb-b43c-16c12aa0ebd0",
                lastUsed: false,
                method: "qui",
                mobilePhone: "perspiciatis",
                secret: "recusandae",
              },
            ],
            recoveryCodes: [
              "possimus",
              "rerum",
              "ad",
              "error",
            ],
          },
          uniqueUsername: "non",
          username: "Hollie.Schoen",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        userId: "8608d2de-ba95-4cf1-9994-5c5c14573f90",
      },
    ],
    middleName: "nam",
    mobilePhone: "possimus",
    parentEmail: "dolore",
    password: "fuga",
    passwordChangeReason: ChangePasswordReason.Expired,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "7a0bc33a-c473-4b40-967b-3f53e42a3305",
        authenticationToken: "expedita",
        cleanSpeakId: "a82770bf-6d2d-4ee1-8b27-fde0b648077d",
        data: {
          "harum": {
            "at": "aspernatur",
            "labore": "et",
            "fuga": "vel",
            "sed": "nobis",
          },
          "maiores": {
            "doloribus": "id",
            "consectetur": "officiis",
          },
          "in": {
            "suscipit": "architecto",
            "aliquam": "in",
            "recusandae": "accusantium",
            "eligendi": "magni",
          },
        },
        id: "cce29819-224e-4200-a513-e655c46bb6d8",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "ex",
          "voluptatem",
        ],
        timezone: "America/Denver",
        tokens: {
          "ullam": "ipsa",
          "temporibus": "aut",
        },
        username: "Shayna41",
        usernameStatus: ContentStatus.Rejected,
        verified: false,
      },
      {
        applicationId: "21d9af7f-5b5a-453e-b6c0-72c5d26dffa5",
        authenticationToken: "reprehenderit",
        cleanSpeakId: "7403383a-66db-46bb-b8aa-7310c3d14ba9",
        data: {
          "minus": {
            "ex": "adipisci",
          },
        },
        id: "49d59272-ed50-4664-a2c9-9eaadacd2b86",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "saepe",
          "sunt",
          "iure",
          "at",
        ],
        timezone: "America/Denver",
        tokens: {
          "praesentium": "quae",
          "corrupti": "sunt",
          "repudiandae": "accusantium",
          "fuga": "quidem",
        },
        username: "Arianna95",
        usernameStatus: ContentStatus.Rejected,
        verified: false,
      },
      {
        applicationId: "614494db-b0b5-4068-9a7f-89f7d9ec432b",
        authenticationToken: "officia",
        cleanSpeakId: "73092391-37ea-4c1f-806d-4e2f39e70627",
        data: {
          "est": {
            "quod": "ea",
            "inventore": "adipisci",
            "tempora": "tempora",
          },
          "tempore": {
            "quam": "expedita",
            "amet": "reiciendis",
            "esse": "facilis",
          },
          "possimus": {
            "nesciunt": "velit",
            "voluptates": "deleniti",
          },
        },
        id: "8b613043-56ca-470d-8d4f-5d6074641123",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "laboriosam",
          "odit",
          "repellat",
        ],
        timezone: "America/Denver",
        tokens: {
          "impedit": "dolor",
          "cupiditate": "delectus",
          "corrupti": "possimus",
        },
        username: "Amaya_Hirthe56",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      {
        applicationId: "8ecac330-24ac-45b7-a0f6-cfeb9d3a697f",
        authenticationToken: "amet",
        cleanSpeakId: "71ce361d-2e5d-473e-b95a-a67ac6191874",
        data: {
          "veritatis": {
            "sunt": "tempore",
            "sint": "unde",
            "illo": "optio",
            "voluptate": "ab",
          },
          "necessitatibus": {
            "cupiditate": "nobis",
            "voluptatibus": "vel",
          },
          "labore": {
            "mollitia": "iure",
            "earum": "ad",
            "exercitationem": "hic",
            "deleniti": "quod",
          },
        },
        id: "d95906f4-6816-4b65-b2b1-ebbfc63cca56",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "veniam",
        ],
        timezone: "America/Denver",
        tokens: {
          "accusantium": "voluptatem",
          "omnis": "a",
        },
        username: "Veronica57",
        usernameStatus: ContentStatus.Rejected,
        verified: false,
      },
    ],
    salt: "hic",
    tenantId: "49122f73-6235-4763-b28a-cac3611e1afa",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 345718,
            timeStep: 427549,
          },
          email: "Kennedy92@hotmail.com",
          id: "aec2ecc0-7cb9-4bb6-889a-0b04c745ccb0",
          lastUsed: false,
          method: "molestias",
          mobilePhone: "repellat",
          secret: "beatae",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 66042,
            timeStep: 427535,
          },
          email: "Annetta22@yahoo.com",
          id: "16da0700-ebfe-4793-9ad3-d52d61dcb7d8",
          lastUsed: false,
          method: "explicabo",
          mobilePhone: "assumenda",
          secret: "iure",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 708953,
            timeStep: 105727,
          },
          email: "Lucinda_Bernier12@hotmail.com",
          id: "a05b4300-654d-46ab-9227-2cf3ddee91f1",
          lastUsed: false,
          method: "dignissimos",
          mobilePhone: "deserunt",
          secret: "doloremque",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 223520,
            timeStep: 903578,
          },
          email: "Prince.Pfeffer@gmail.com",
          id: "101f784b-f3a7-44b5-8123-051a423a913e",
          lastUsed: false,
          method: "sunt",
          mobilePhone: "similique",
          secret: "odio",
        },
      ],
      recoveryCodes: [
        "eaque",
        "ratione",
        "distinctio",
      ],
    },
    uniqueUsername: "cum",
    username: "Jaunita_Feil96",
    usernameStatus: ContentStatus.Rejected,
    verified: false,
  },
}, "saepe").then((res: CreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserAction

Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserAction({
  userAction: {
    active: false,
    cancelEmailTemplateId: "fac45984-a74e-4c75-82b0-da948d7cb178",
    endEmailTemplateId: "df7dcd94-3bc5-46d3-94ab-a848afe8902b",
    id: "48534fa3-fc83-4c1f-85b0-acdb04c48b42",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "quibusdam": "molestiae",
      "nulla": "accusamus",
    },
    modifyEmailTemplateId: "963ff03e-497d-4897-802d-e0defd4e15f2",
    name: "Cynthia Effertz",
    options: [
      {
        localizedNames: {
          "magni": "excepturi",
          "amet": "laudantium",
        },
        name: "Amy Emard",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "48aafabd-a028-4e65-8230-924d345419bb",
    temporal: false,
    transactionType: TransactionType.AbsoluteMajority,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "maiores").then((res: CreateUserActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserActionReason

Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionReasonResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserActionReason({
  userActionReason: {
    code: "perferendis",
    id: "ca991e3a-7659-4520-ab36-7d4e1689b618",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "non": "sit",
      "quidem": "rerum",
      "iusto": "a",
    },
    text: "blanditiis",
  },
}).then((res: CreateUserActionReasonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserActionReasonWithId

Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionReasonWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserActionReasonWithId("esse", {
  userActionReason: {
    code: "eius",
    id: "1b4a2d8c-2efc-46f6-91e9-1184c4418da1",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "iusto": "necessitatibus",
      "labore": "quidem",
      "adipisci": "ratione",
    },
    text: "dolor",
  },
}).then((res: CreateUserActionReasonWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserActionWithId

Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserActionWithId("aperiam", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "a9c96e52-bd49-4db4-b0a7-94a7644f0f29",
    endEmailTemplateId: "4e355c0c-95bb-4716-b63b-a3364249f4f6",
    id: "d97e7b5a-7822-44e2-8ecb-724605504be7",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "corporis": "possimus",
      "qui": "perferendis",
    },
    modifyEmailTemplateId: "7f448548-4860-495d-9445-2a0fc3a3bddc",
    name: "Mr. Darrell Quitzon",
    options: [
      {
        localizedNames: {
          "eligendi": "optio",
          "iste": "id",
          "corporis": "laborum",
        },
        name: "Jody Torphy",
      },
      {
        localizedNames: {
          "dolor": "beatae",
          "itaque": "facere",
        },
        name: "Dr. Lindsey Becker",
      },
      {
        localizedNames: {
          "nisi": "ratione",
          "enim": "ut",
          "laudantium": "assumenda",
        },
        name: "Dexter Walsh III",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "4a0bdeb4-4fc0-4aaa-8c22-b908256b16e7",
    temporal: false,
    transactionType: TransactionType.None,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "dolorem").then((res: CreateUserActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserConsent

Creates a single User consent.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserConsentResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserConsent({
  userConsent: {
    consent: {
      consentEmailTemplateId: "eb606728-e452-475f-90bb-960effcef1a8",
      countryMinimumAgeForSelfConsent: {
        "vitae": "maxime",
        "accusantium": "quaerat",
        "autem": "eligendi",
        "consequatur": "sunt",
      },
      data: {
        "praesentium": {
          "eveniet": "quod",
        },
        "rem": {
          "tenetur": "consectetur",
          "suscipit": "modi",
          "rem": "aut",
          "excepturi": "nemo",
        },
      },
      defaultMinimumAgeForSelfConsent: 960498,
      emailPlus: {
        emailTemplateId: "dbd95103-51d8-42fb-937e-850ed86b0def",
        enabled: false,
        maximumTimeToSendEmailInHours: 439877,
        minimumTimeToSendEmailInHours: 251071,
      },
      id: "a085ceff-9d10-49c0-a5a1-742e33cca695",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Ellis Harris DVM",
      values: [
        "nesciunt",
        "nihil",
        "accusamus",
      ],
    },
    consentId: "24d87130-45d2-4f71-be05-b5592bfc7395",
    data: {
      "iusto": {
        "eos": "qui",
      },
      "ipsum": {
        "corporis": "molestias",
        "magnam": "commodi",
        "deserunt": "vitae",
      },
      "tempore": {
        "quisquam": "reprehenderit",
        "commodi": "laborum",
        "dicta": "magnam",
      },
      "earum": {
        "nostrum": "quaerat",
        "accusantium": "nesciunt",
      },
    },
    giverUserId: "68ed30f7-acea-4bf8-8124-59048fa66767",
    id: "e29d4e54-3c4d-4a5a-a4e8-bdc470843fe0",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatus.Revoked,
    userId: "1a2fbffe-931a-478c-8264-cab51b2c0d08",
    values: [
      "voluptas",
      "tempore",
      "natus",
      "sequi",
    ],
  },
}).then((res: CreateUserConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserConsentWithId

Creates a single User consent.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserConsentWithId("qui", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "03cd4d76-2716-4774-b837-d1aaff2becc3",
      countryMinimumAgeForSelfConsent: {
        "rerum": "mollitia",
        "asperiores": "temporibus",
        "labore": "voluptatum",
      },
      data: {
        "deserunt": {
          "voluptatibus": "quod",
          "nam": "suscipit",
          "inventore": "optio",
        },
      },
      defaultMinimumAgeForSelfConsent: 716805,
      emailPlus: {
        emailTemplateId: "2f76901b-943e-4f2a-a20b-7c3190b14424",
        enabled: false,
        maximumTimeToSendEmailInHours: 119743,
        minimumTimeToSendEmailInHours: 736661,
      },
      id: "47d0673b-4158-4358-892c-4b53c23e5dd0",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Daniel Greenfelder PhD",
      values: [
        "recusandae",
        "explicabo",
        "sequi",
        "rem",
      ],
    },
    consentId: "ce69a15d-26b3-44a0-aff6-31fc8db48ad1",
    data: {
      "laboriosam": {
        "dolor": "doloribus",
        "velit": "nihil",
        "delectus": "quam",
      },
    },
    giverUserId: "008aaf52-30c4-427a-bfcd-362ad94af448",
    id: "11837652-62c2-4d81-b59a-f09933473ccb",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatus.Active,
    userId: "911d2669-ffa9-4c8f-a1e7-7baca845249e",
    values: [
      "totam",
    ],
  },
}).then((res: CreateUserConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserLinkWithId

Link an external user from a 3rd party identity provider to a FusionAuth user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserLinkWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserLinkWithId({
  eventInfo: {
    data: {
      "magni": {
        "minus": "expedita",
        "magnam": "recusandae",
        "enim": "sapiente",
        "sit": "nihil",
      },
      "quaerat": {
        "soluta": "voluptatibus",
        "temporibus": "fugiat",
        "itaque": "animi",
      },
      "cum": {
        "reiciendis": "soluta",
        "aspernatur": "ipsa",
      },
      "voluptatem": {
        "cum": "eligendi",
      },
    },
    deviceDescription: "dignissimos",
    deviceName: "explicabo",
    deviceType: "incidunt",
    ipAddress: "placeat",
    location: {
      city: "Godfreyborough",
      country: "Uruguay",
      displayString: "laborum",
      latitude: 639.84,
      longitude: 3028.06,
      region: "blanditiis",
      zipcode: "27105",
    },
    os: "sunt",
    userAgent: "consequatur",
  },
  identityProviderLink: {
    data: {
      "dolorem": {
        "voluptate": "cupiditate",
        "exercitationem": "rerum",
        "pariatur": "numquam",
      },
      "labore": {
        "ad": "assumenda",
        "eveniet": "neque",
      },
    },
    displayName: "dolores",
    identityProviderId: "6956c15c-eff6-4395-92c3-894945d8149a",
    identityProviderUserId: "dignissimos",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    tenantId: "b76ce21f-454d-422c-84a3-caf7ad83b9ca",
    token: "esse",
    userId: "4323809c-959c-4723-aa08-9d0cb8c6685e",
  },
  pendingIdPLinkId: "consectetur",
}).then((res: CreateUserLinkWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserVerifyEmail

Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserVerifyEmailResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserVerifyEmail({
  eventInfo: {
    data: {
      "fugiat": {
        "nihil": "totam",
        "eligendi": "voluptatibus",
        "natus": "necessitatibus",
      },
      "fugit": {
        "magni": "molestiae",
        "eius": "quaerat",
      },
      "nulla": {
        "ad": "a",
      },
    },
    deviceDescription: "officiis",
    deviceName: "sequi",
    deviceType: "similique",
    ipAddress: "error",
    location: {
      city: "Swiftboro",
      country: "Finland",
      displayString: "aperiam",
      latitude: 8402.61,
      longitude: 4538.92,
      region: "corporis",
      zipcode: "73193-6595",
    },
    os: "quod",
    userAgent: "voluptates",
  },
  oneTimeCode: "praesentium",
  userId: "b27a32a6-3777-4c3e-838a-751d851df5b7",
  verificationId: "nemo",
}).then((res: CreateUserVerifyEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUserWithId

Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserWithId("alias", {
  applicationId: "df1ee3a9-1e6f-4959-bb5a-da9da09f96b4",
  currentPassword: "veritatis",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "sed": {
        "iste": "repudiandae",
        "eius": "facere",
        "blanditiis": "dolor",
        "fuga": "labore",
      },
      "nisi": {
        "pariatur": "mollitia",
        "fugit": "velit",
        "reiciendis": "at",
        "temporibus": "saepe",
      },
    },
    deviceDescription: "a",
    deviceName: "culpa",
    deviceType: "consequatur",
    ipAddress: "doloribus",
    location: {
      city: "New Samantahaven",
      country: "Syrian Arab Republic",
      displayString: "aliquam",
      latitude: 7902.09,
      longitude: 9520.68,
      region: "voluptatum",
      zipcode: "70516",
    },
    os: "culpa",
    userAgent: "possimus",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
    cleanSpeakId: "b0672c18-1652-4d11-954d-59103a86fb6d",
    connectorId: "6b4482db-adf2-4ffd-a03c-399b2fc3a558",
    data: {
      "quis": {
        "pariatur": "aut",
      },
      "atque": {
        "alias": "aliquid",
        "eveniet": "deserunt",
        "rem": "incidunt",
        "fuga": "soluta",
      },
    },
    email: "Angel_Morar80@yahoo.com",
    encryptionScheme: "reprehenderit",
    expiry: 1659380719000,
    factor: 3835,
    firstName: "Maxime",
    fullName: "nesciunt",
    id: "de109170-fee4-4221-87d0-f72b1ebf2e4e",
    imageUrl: "odio",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Harvey",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "sint": {
            "ipsam": "nihil",
            "impedit": "sed",
            "fugit": "voluptate",
            "doloremque": "ipsam",
          },
          "officia": {
            "dignissimos": "exercitationem",
          },
        },
        groupId: "8f5ecf39-d133-4b2b-b8ee-3e621504f9cd",
        id: "6528f060-851c-4434-922e-13a0bf1ffb2d",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
          cleanSpeakId: "2712db5a-5fb1-4ca9-a1d5-e0011bd4d2ff",
          connectorId: "fd1a6552-4dde-4adf-8b1a-8ec2fde30306",
          data: {
            "ex": {
              "dolorum": "omnis",
            },
            "alias": {
              "repellendus": "cum",
            },
            "ipsum": {
              "quaerat": "eligendi",
              "facere": "quidem",
            },
          },
          email: "Jasper_Kiehn@hotmail.com",
          encryptionScheme: "et",
          expiry: 1659380719000,
          factor: 227899,
          firstName: "Lyla",
          fullName: "quia",
          id: "a6dc053a-a684-4670-8d14-c597e81377fe",
          imageUrl: "ipsum",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Douglas",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "quos",
          mobilePhone: "et",
          parentEmail: "voluptatibus",
          password: "placeat",
          passwordChangeReason: ChangePasswordReason.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "20984084-9e46-467c-a7b3-658412bc86f9",
              authenticationToken: "at",
              cleanSpeakId: "d5655a97-781f-481f-90a4-3699cb49fc25",
              data: {
                "debitis": {
                  "cum": "reprehenderit",
                  "quibusdam": "laudantium",
                  "repellat": "molestiae",
                },
                "dolores": {
                  "itaque": "ad",
                },
              },
              id: "41ccc7d6-ccfa-466f-a277-316def416a04",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "inventore",
                "laudantium",
                "culpa",
              ],
              timezone: "America/Denver",
              tokens: {
                "reiciendis": "ratione",
                "voluptates": "voluptate",
                "voluptatem": "harum",
              },
              username: "Dominique63",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "87a27cf5-b6b4-414b-a06e-87bf1d1c2718",
              authenticationToken: "consequuntur",
              cleanSpeakId: "f07d3c50-95aa-4820-a816-24aeac44406d",
              data: {
                "rerum": {
                  "unde": "dolorum",
                  "optio": "ad",
                  "eligendi": "cumque",
                  "id": "reprehenderit",
                },
                "facilis": {
                  "dolorum": "animi",
                  "iure": "minima",
                  "odio": "blanditiis",
                },
              },
              id: "b1bddf7e-10dd-4fd7-a8be-0fc4c2f3647d",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "praesentium",
                "provident",
                "facere",
              ],
              timezone: "America/Denver",
              tokens: {
                "at": "maxime",
                "aut": "praesentium",
                "est": "ab",
              },
              username: "Lindsey.Stanton",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "9b31bbdd-00d5-4a3a-89d5-87bd341b25de",
              authenticationToken: "eius",
              cleanSpeakId: "290537fd-8ba5-40ea-9ac2-c35b847491bd",
              data: {
                "culpa": {
                  "perferendis": "saepe",
                  "ipsa": "asperiores",
                  "quis": "corrupti",
                },
                "aliquam": {
                  "vero": "officia",
                  "excepturi": "libero",
                },
                "quasi": {
                  "quasi": "ipsa",
                  "officia": "ratione",
                  "voluptas": "adipisci",
                },
                "hic": {
                  "consequuntur": "earum",
                },
              },
              id: "da2342b0-0495-424d-ba9a-17a84fbb792d",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "quos",
                "vitae",
                "ut",
              ],
              timezone: "America/Denver",
              tokens: {
                "suscipit": "dicta",
                "porro": "cumque",
                "quas": "fugiat",
                "vero": "totam",
              },
              username: "Martin73",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "3a185bc8-bfff-444e-88c4-df61ea60b99b",
              authenticationToken: "nemo",
              cleanSpeakId: "e31a1e36-01a4-4d61-a3ae-1c1e222a250a",
              data: {
                "sed": {
                  "sequi": "asperiores",
                  "neque": "ea",
                  "rem": "quibusdam",
                },
                "suscipit": {
                  "laborum": "hic",
                },
              },
              id: "9000d5de-d9d0-40dc-a661-1fea0de22336",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "odit",
                "reprehenderit",
                "fugit",
              ],
              timezone: "America/Denver",
              tokens: {
                "at": "consequatur",
                "commodi": "doloremque",
              },
              username: "Francis68",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
          ],
          salt: "voluptatum",
          tenantId: "92563ee8-381e-4af4-a279-4752695a9b44",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 391010,
                  timeStep: 337514,
                },
                email: "Tiffany.Treutel@gmail.com",
                id: "9a8df6e2-f33c-4757-bbfb-860857ac07fa",
                lastUsed: false,
                method: "laborum",
                mobilePhone: "possimus",
                secret: "suscipit",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 523047,
                  timeStep: 364171,
                },
                email: "Javier_Reichel@hotmail.com",
                id: "f564eae8-bc3b-463a-a4b2-77d98ae9d4a5",
                lastUsed: false,
                method: "reprehenderit",
                mobilePhone: "suscipit",
                secret: "cumque",
              },
            ],
            recoveryCodes: [
              "ad",
            ],
          },
          uniqueUsername: "neque",
          username: "Deshaun12",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "178e0763-b4fc-47b4-ba02-3edcd221ee3f",
      },
      {
        data: {
          "non": {
            "dolores": "eaque",
            "harum": "nulla",
            "asperiores": "porro",
          },
        },
        groupId: "405f5871-4f8e-4df6-a48e-e833e56841f0",
        id: "3bdb571d-09bc-41e7-864c-170a6903be71",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
          cleanSpeakId: "77708dae-092b-4704-b119-5944dc7f113e",
          connectorId: "7df636c9-2ba3-434c-a89e-71b32ce5a13b",
          data: {
            "aspernatur": {
              "dicta": "maxime",
            },
            "blanditiis": {
              "ea": "fugit",
              "dolores": "eos",
              "laborum": "totam",
              "commodi": "earum",
            },
            "fuga": {
              "suscipit": "deleniti",
              "assumenda": "repellat",
              "sint": "porro",
            },
            "placeat": {
              "error": "nihil",
              "corporis": "reprehenderit",
              "laboriosam": "laboriosam",
            },
          },
          email: "Chance17@hotmail.com",
          encryptionScheme: "molestiae",
          expiry: 1659380719000,
          factor: 629537,
          firstName: "Peyton",
          fullName: "soluta",
          id: "9d3cbfee-d63c-4643-a7ff-b75ff1026286",
          imageUrl: "laudantium",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Rippin",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "temporibus",
          mobilePhone: "ex",
          parentEmail: "totam",
          password: "expedita",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "b002a23f-ae61-49f3-aa5e-e5015f781daf",
              authenticationToken: "architecto",
              cleanSpeakId: "df8ef070-3ed1-4e20-ab35-5db33912ce02",
              data: {
                "deserunt": {
                  "amet": "incidunt",
                  "eligendi": "debitis",
                },
                "qui": {
                  "optio": "eaque",
                },
              },
              id: "81b18084-9c30-49d4-b4e7-7399e412ee76",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "natus",
                "commodi",
                "vero",
                "consequatur",
              ],
              timezone: "America/Denver",
              tokens: {
                "nesciunt": "rerum",
                "temporibus": "dicta",
                "corporis": "molestias",
              },
              username: "Rose_Luettgen",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "0cc15e66-e5e3-409d-bc5f-3f3f1c3fa2b9",
              authenticationToken: "commodi",
              cleanSpeakId: "cf325b26-9333-4c2a-bb69-9061c4cc0aa2",
              data: {
                "totam": {
                  "perferendis": "dolore",
                  "vel": "iste",
                  "impedit": "in",
                  "odit": "cupiditate",
                },
                "quos": {
                  "optio": "tempore",
                  "quidem": "ad",
                  "eos": "eum",
                },
                "hic": {
                  "quod": "consequatur",
                  "qui": "tempora",
                  "porro": "odio",
                },
                "numquam": {
                  "saepe": "distinctio",
                },
              },
              id: "d1abad1a-5eeb-4434-9732-dd9c82956246",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "odit",
                "eius",
                "natus",
              ],
              timezone: "America/Denver",
              tokens: {
                "corrupti": "delectus",
                "laborum": "iste",
                "officia": "veniam",
                "recusandae": "tempore",
              },
              username: "Joseph88",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "c16bb301-cfb0-4601-b690-22b4f0791ed6",
              authenticationToken: "hic",
              cleanSpeakId: "bd19edd6-d7f1-4f5e-afd4-9bed6ff3fd95",
              data: {
                "omnis": {
                  "exercitationem": "eveniet",
                  "quod": "hic",
                  "sit": "nihil",
                  "ex": "dolore",
                },
              },
              id: "51ae3bac-4c0d-4f1c-9fdf-b7c4ce10d318",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "enim",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolorem": "perspiciatis",
                "sequi": "officiis",
              },
              username: "Ari_Sipes",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "9acf2cdb-4621-4661-9d55-128e911ccc8d",
              authenticationToken: "cupiditate",
              cleanSpeakId: "40f37781-3bd3-455f-8149-d58abf333f91",
              data: {
                "a": {
                  "harum": "architecto",
                },
              },
              id: "0cb13ebd-52ff-495b-a31a-2a7e01479829",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "ex",
                "eius",
                "architecto",
                "aliquid",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolores": "quisquam",
                "perspiciatis": "molestiae",
                "at": "quae",
              },
              username: "Jason23",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
          ],
          salt: "suscipit",
          tenantId: "335aed5d-0c58-4c83-b809-8dbe64ae5c55",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 846367,
                  timeStep: 32,
                },
                email: "Calista.Wisoky@gmail.com",
                id: "171477b6-25d4-4a0e-8f74-493b2cfe9045",
                lastUsed: false,
                method: "eius",
                mobilePhone: "molestiae",
                secret: "asperiores",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 644684,
                  timeStep: 336103,
                },
                email: "Virginie43@gmail.com",
                id: "ca496221-ac43-44b9-84ff-8f6bc268a006",
                lastUsed: false,
                method: "repudiandae",
                mobilePhone: "ab",
                secret: "corrupti",
              },
            ],
            recoveryCodes: [
              "libero",
              "illum",
            ],
          },
          uniqueUsername: "hic",
          username: "Alison.Johnston67",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "f7496557-2292-4dee-ab88-5bfd123b4f56",
      },
    ],
    middleName: "quasi",
    mobilePhone: "doloribus",
    parentEmail: "quia",
    password: "ipsum",
    passwordChangeReason: ChangePasswordReason.Validation,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "429edbf4-ce5b-42fe-9a92-452947b5a75c",
        authenticationToken: "beatae",
        cleanSpeakId: "d18927d5-71e7-4d42-95b4-6fe98fd59efe",
        data: {
          "itaque": {
            "corporis": "doloremque",
            "quaerat": "beatae",
            "illo": "placeat",
            "error": "libero",
          },
        },
        id: "198e5600-f1db-4c4d-9673-32bb0ca2bf19",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "recusandae",
          "neque",
          "quam",
        ],
        timezone: "America/Denver",
        tokens: {
          "cupiditate": "consequatur",
          "impedit": "perspiciatis",
          "fugiat": "placeat",
        },
        username: "Baylee.Beatty",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      {
        applicationId: "2bbfa06a-6a66-4fa4-acfc-77daebb9a4b8",
        authenticationToken: "explicabo",
        cleanSpeakId: "2497d622-654b-4405-a357-e14ef9de32ec",
        data: {
          "officiis": {
            "ad": "eum",
            "assumenda": "consequuntur",
          },
          "voluptates": {
            "rerum": "eaque",
            "veniam": "reiciendis",
            "perspiciatis": "autem",
          },
        },
        id: "9d948489-2ca5-45b9-941b-194b8b4b4d8f",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "repellendus",
          "tempora",
        ],
        timezone: "America/Denver",
        tokens: {
          "blanditiis": "dicta",
          "veritatis": "voluptatibus",
          "quis": "labore",
        },
        username: "Emelia_Feeney",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
    ],
    salt: "nobis",
    tenantId: "a77ee710-0b74-4456-af9e-c58b95c6f0b2",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha512,
            codeLength: 356994,
            timeStep: 973458,
          },
          email: "Ola_Bartoletti31@hotmail.com",
          id: "a530600f-1383-4342-8f7a-6004427fd4f9",
          lastUsed: false,
          method: "explicabo",
          mobilePhone: "totam",
          secret: "aliquam",
        },
      ],
      recoveryCodes: [
        "doloremque",
        "alias",
        "dolores",
        "minima",
      ],
    },
    uniqueUsername: "distinctio",
    username: "Chance.Schuster38",
    usernameStatus: ContentStatus.Rejected,
    verified: false,
  },
}, "temporibus").then((res: CreateUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createWebhook

Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateWebhookResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createWebhook({
  webhook: {
    connectTimeout: 420624,
    data: {
      "aliquid": {
        "doloribus": "reprehenderit",
        "nemo": "exercitationem",
        "architecto": "cum",
        "ratione": "qui",
      },
      "similique": {
        "tempore": "ipsa",
        "iste": "libero",
        "eligendi": "impedit",
      },
      "blanditiis": {
        "culpa": "accusamus",
      },
    },
    description: "alias",
    eventsEnabled: {
      "sit": false,
    },
    global: false,
    headers: {
      "veniam": "voluptates",
      "modi": "deserunt",
      "commodi": "excepturi",
    },
    httpAuthenticationPassword: "totam",
    httpAuthenticationUsername: "nam",
    id: "33e47d71-193e-4c17-a411-1dcda6326794",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 698554,
    sslCertificate: "praesentium",
    tenantIds: [
      "6586a240-6987-4247-b51c-6593e3763878",
      "37ebe602-b27a-4da9-b530-6e394431087b",
    ],
    url: "iusto",
  },
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createWebhookWithId

Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateWebhookWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createWebhookWithId("error", {
  webhook: {
    connectTimeout: 387466,
    data: {
      "quasi": {
        "nihil": "iure",
        "sint": "illo",
        "ut": "expedita",
        "delectus": "nihil",
      },
    },
    description: "nostrum",
    eventsEnabled: {
      "dicta": false,
      "quos": false,
    },
    global: false,
    headers: {
      "minima": "eveniet",
    },
    httpAuthenticationPassword: "adipisci",
    httpAuthenticationUsername: "praesentium",
    id: "efcf584a-c5cc-408d-97a1-99553e2cc22c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 479273,
    sslCertificate: "numquam",
    tenantIds: [
      "44f310b7-b33b-4ef1-ab90-cb09665afab9",
      "b364dd5d-055f-45fb-be38-32701ce8685a",
    ],
    url: "voluptate",
  },
}).then((res: CreateWebhookWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteAPIKeyWithId

Deletes the API key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteAPIKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteAPIKeyWithId("ad").then((res: DeleteAPIKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteApplicationRoleWithId

Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteApplicationRoleWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteApplicationRoleWithId("repudiandae", "debitis", "eveniet").then((res: DeleteApplicationRoleWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteApplicationWithId

Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteApplicationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteApplicationWithId("vitae", "numquam", "nesciunt").then((res: DeleteApplicationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteConnectorWithId

Deletes the connector for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteConnectorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteConnectorWithId("corrupti").then((res: DeleteConnectorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteConsentWithId

Deletes the consent for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteConsentWithId("placeat", "eum").then((res: DeleteConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEmailTemplateWithId

Deletes the email template for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEmailTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteEmailTemplateWithId("facere", "aperiam").then((res: DeleteEmailTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntityGrantWithId

Deletes an Entity Grant for the given User or Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityGrantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteEntityGrantWithId("doloremque", "rem", "unde", "cumque").then((res: DeleteEntityGrantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntityTypePermissionWithId

Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityTypePermissionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteEntityTypePermissionWithId("harum", "impedit").then((res: DeleteEntityTypePermissionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntityTypeWithId

Deletes the Entity Type for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteEntityTypeWithId("eos").then((res: DeleteEntityTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntityWithId

Deletes the Entity for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteEntityWithId("tempore", "ex").then((res: DeleteEntityWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteFormFieldWithId

Deletes the form field for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteFormFieldWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteFormFieldWithId("neque").then((res: DeleteFormFieldWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteFormWithId

Deletes the form for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteFormWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteFormWithId("officia").then((res: DeleteFormWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteGroupMembersWithId

Removes users as members of a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteGroupMembersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteGroupMembersWithId({
  memberIds: [
    "12807c63-46c1-4a89-ac41-f347a8f8b8a6",
  ],
  members: [
    "0ad6539f-aab0-496b-8edf-3c8b3ea9adcb",
    "8adfc088-d813-429f-b24a-fa8616c817ba",
    "41d31979-13d1-4e3b-8d62-47090fd987ee",
    "3a2e0191-9d3d-4621-825a-452459d3e094",
  ],
}).then((res: DeleteGroupMembersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteGroupWithId

Deletes the group for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteGroupWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteGroupWithId("commodi", "vero").then((res: DeleteGroupWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteIPAccessControlListWithId

Deletes the IP Access Control List for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteIPAccessControlListWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteIPAccessControlListWithId("fugit").then((res: DeleteIPAccessControlListWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteIdentityProviderWithId

Deletes the identity provider for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteIdentityProviderWithId("vero").then((res: DeleteIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteJwt

Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteJwtResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteJwt({
  applicationId: "2ef3eaf7-84fa-4b9b-aecc-eb411c53da7f",
  eventInfo: {
    data: {
      "tempore": {
        "iste": "voluptatibus",
        "sed": "quas",
        "incidunt": "porro",
      },
      "quibusdam": {
        "a": "in",
        "labore": "tempora",
      },
      "nemo": {
        "corrupti": "quos",
        "amet": "laborum",
      },
      "deserunt": {
        "quia": "doloremque",
      },
    },
    deviceDescription: "sequi",
    deviceName: "voluptatem",
    deviceType: "optio",
    ipAddress: "deleniti",
    location: {
      city: "New Jeremystad",
      country: "Sudan",
      displayString: "odio",
      latitude: 4502.7,
      longitude: 5605.12,
      region: "sit",
      zipcode: "19384",
    },
    os: "blanditiis",
    userAgent: "sit",
  },
  token: "iste",
  userId: "f9e3425e-f63e-4bb4-b82e-e2c80de08cbd",
}, "assumenda", "quas", "amet").then((res: DeleteJwtResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteKeyWithId

Deletes the key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteKeyWithId("esse").then((res: DeleteKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteLambdaWithId

Deletes the lambda for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteLambdaWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteLambdaWithId("nostrum").then((res: DeleteLambdaWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteMessageTemplateWithId

Deletes the message template for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteMessageTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteMessageTemplateWithId("maxime").then((res: DeleteMessageTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteMessengerWithId

Deletes the messenger for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteMessengerWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteMessengerWithId("maxime").then((res: DeleteMessengerWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteTenantWithId

Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteTenantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteTenantWithId("omnis", {
  async: false,
  eventInfo: {
    data: {
      "atque": {
        "molestiae": "possimus",
        "porro": "quo",
        "molestias": "omnis",
      },
      "ab": {
        "error": "magnam",
        "accusantium": "eum",
        "magnam": "impedit",
        "aspernatur": "optio",
      },
    },
    deviceDescription: "eos",
    deviceName: "id",
    deviceType: "ducimus",
    ipAddress: "sunt",
    location: {
      city: "New Kylerworth",
      country: "Bolivia",
      displayString: "modi",
      latitude: 9858.9,
      longitude: 689.72,
      region: "perspiciatis",
      zipcode: "56404",
    },
    os: "recusandae",
    userAgent: "dolorum",
  },
}, "accusamus", "ab").then((res: DeleteTenantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteThemeWithId

Deletes the theme for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteThemeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteThemeWithId("saepe").then((res: DeleteThemeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserActionReasonWithId

Deletes the user action reason for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserActionReasonWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserActionReasonWithId("ea").then((res: DeleteUserActionReasonWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserActionWithId

Deactivates the user action with the given Id. OR Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserActionWithId("deserunt", "ducimus", "voluptatem").then((res: DeleteUserActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserBulk

Deactivates the users with the given ids. OR Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserBulkResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserBulk({
  dryRun: false,
  eventInfo: {
    data: {
      "molestias": {
        "inventore": "voluptate",
        "inventore": "vero",
        "ipsa": "pariatur",
        "sunt": "cum",
      },
      "voluptatum": {
        "excepturi": "accusantium",
      },
    },
    deviceDescription: "quo",
    deviceName: "magnam",
    deviceType: "porro",
    ipAddress: "blanditiis",
    location: {
      city: "Lake Irwin",
      country: "Jordan",
      displayString: "praesentium",
      latitude: 8661.56,
      longitude: 52.66,
      region: "corporis",
      zipcode: "14057-2576",
    },
    os: "corporis",
    userAgent: "ducimus",
  },
  hardDelete: false,
  query: "fuga",
  queryString: "amet",
  userIds: [
    "bd387dd5-d56b-44b0-9e4c-263651fc5979",
    "1b5d4051-19a6-412b-93fb-27df36fdff90",
    "b9b4a3a8-4f90-4bff-84ec-034f166b2319",
  ],
}, "deserunt", "nobis", "deleniti").then((res: DeleteUserBulkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserLinkWithId

Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserLinkWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserLinkWithId("nobis", "accusamus", "rerum").then((res: DeleteUserLinkWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserRegistrationWithId

Deletes the user registration for the given user and application. OR Deletes the user registration for the given user and application along with the given JSON body that contains the event information.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserRegistrationWithId("quia", "enim", {
  eventInfo: {
    data: {
      "iure": {
        "explicabo": "inventore",
        "quos": "debitis",
        "commodi": "delectus",
      },
      "voluptatem": {
        "dolorem": "assumenda",
        "sunt": "dignissimos",
        "veritatis": "quasi",
      },
    },
    deviceDescription: "accusantium",
    deviceName: "ex",
    deviceType: "atque",
    ipAddress: "rem",
    location: {
      city: "Redding",
      country: "Singapore",
      displayString: "aspernatur",
      latitude: 420.14,
      longitude: 4402.31,
      region: "ratione",
      zipcode: "16202-3106",
    },
    os: "sed",
    userAgent: "aliquid",
  },
}, "dolorem").then((res: DeleteUserRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserTwoFactorWithId

Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserTwoFactorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserTwoFactorWithId("eaque", {
  applicationId: "668dd4c6-7041-42ee-8789-0bfb2d17e64c",
  code: "laboriosam",
  eventInfo: {
    data: {
      "placeat": {
        "laudantium": "facere",
      },
      "quam": {
        "tempore": "esse",
        "quisquam": "maiores",
        "dolor": "dolorum",
      },
    },
    deviceDescription: "dolorum",
    deviceName: "aspernatur",
    deviceType: "delectus",
    ipAddress: "exercitationem",
    location: {
      city: "McAllen",
      country: "Kazakhstan",
      displayString: "minus",
      latitude: 1124.5,
      longitude: 8523.53,
      region: "nihil",
      zipcode: "70230-3981",
    },
    os: "sed",
    userAgent: "veritatis",
  },
  methodId: "eius",
}, "voluptatum", "aperiam").then((res: DeleteUserTwoFactorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUserWithId

Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteUserWithId("laboriosam", {
  eventInfo: {
    data: {
      "vero": {
        "exercitationem": "voluptatibus",
      },
      "modi": {
        "nobis": "saepe",
        "ab": "nesciunt",
      },
    },
    deviceDescription: "vero",
    deviceName: "sint",
    deviceType: "at",
    ipAddress: "cum",
    location: {
      city: "San Ramon",
      country: "Slovenia",
      displayString: "est",
      latitude: 6875.33,
      longitude: 9990.2,
      region: "quasi",
      zipcode: "46186-7219",
    },
    os: "cumque",
    userAgent: "voluptates",
  },
  hardDelete: false,
}, "sed", "tempora").then((res: DeleteUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteWebAuthnCredentialWithId

Deletes the WebAuthn credential for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteWebAuthnCredentialWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteWebAuthnCredentialWithId("sed").then((res: DeleteWebAuthnCredentialWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteWebhookWithId

Deletes the webhook for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteWebhookWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.deleteWebhookWithId("dicta").then((res: DeleteWebhookWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## enableTwoFactorWithId

Enable two-factor authentication for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { EnableTwoFactorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.enableTwoFactorWithId("labore", {
  applicationId: "cb79e5fc-a1f4-4fdf-9051-80e5f518fffb",
  authenticatorId: "exercitationem",
  code: "eum",
  email: "Jillian77@gmail.com",
  eventInfo: {
    data: {
      "sunt": {
        "velit": "ipsam",
        "dicta": "iste",
        "accusantium": "repudiandae",
      },
      "temporibus": {
        "perspiciatis": "a",
        "vero": "dolor",
      },
      "sunt": {
        "dolorum": "cupiditate",
        "sint": "quas",
        "temporibus": "voluptas",
      },
      "iusto": {
        "labore": "esse",
      },
    },
    deviceDescription: "praesentium",
    deviceName: "nihil",
    deviceType: "molestiae",
    ipAddress: "odit",
    location: {
      city: "Osinskishire",
      country: "Hungary",
      displayString: "nemo",
      latitude: 8076.01,
      longitude: 5708.05,
      region: "nulla",
      zipcode: "25297",
    },
    os: "minima",
    userAgent: "itaque",
  },
  method: "itaque",
  mobilePhone: "aliquid",
  secret: "cumque",
  secretBase32Encoded: "qui",
  twoFactorId: "libero",
}).then((res: EnableTwoFactorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## exchangeRefreshTokenForJWTWithId

Exchange a refresh token for a new JWT.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ExchangeRefreshTokenForJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.exchangeRefreshTokenForJWTWithId({
  eventInfo: {
    data: {
      "maxime": {
        "atque": "qui",
        "neque": "iure",
      },
      "asperiores": {
        "ut": "libero",
      },
    },
    deviceDescription: "ut",
    deviceName: "sed",
    deviceType: "voluptatum",
    ipAddress: "soluta",
    location: {
      city: "Flossieton",
      country: "Cook Islands",
      displayString: "esse",
      latitude: 3682.09,
      longitude: 3396.24,
      region: "nulla",
      zipcode: "48065-7857",
    },
    os: "consectetur",
    userAgent: "ullam",
  },
  refreshToken: "eligendi",
  token: "consequuntur",
}).then((res: ExchangeRefreshTokenForJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## forgotPasswordWithId

Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ForgotPasswordWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.forgotPasswordWithId({
  applicationId: "4f59d456-0001-4b00-bf1f-36a39c6bffe3",
  changePasswordId: "rem",
  email: "Ona55@hotmail.com",
  eventInfo: {
    data: {
      "error": {
        "tempora": "necessitatibus",
        "ipsam": "doloremque",
        "accusamus": "sed",
      },
      "animi": {
        "pariatur": "asperiores",
        "labore": "laboriosam",
        "illo": "repellendus",
        "aspernatur": "earum",
      },
    },
    deviceDescription: "eius",
    deviceName: "placeat",
    deviceType: "dignissimos",
    ipAddress: "praesentium",
    location: {
      city: "Fort Marielaport",
      country: "San Marino",
      displayString: "officia",
      latitude: 7130.75,
      longitude: 489.85,
      region: "libero",
      zipcode: "55748-9699",
    },
    os: "quam",
    userAgent: "quas",
  },
  loginId: "saepe",
  sendForgotPasswordEmail: false,
  state: {
    "culpa": {
      "repudiandae": "quos",
      "quaerat": "eligendi",
    },
    "fuga": {
      "quam": "aperiam",
      "fugit": "corrupti",
      "minus": "ea",
      "labore": "itaque",
    },
    "perferendis": {
      "deleniti": "possimus",
    },
  },
  username: "Clint_Christiansen89",
}).then((res: ForgotPasswordWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateKey

Generate a new RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateKeyResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateKey({
  key: {
    algorithm: KeyAlgorithm.Rs512,
    certificate: "rerum",
    certificateInformation: {
      issuer: "soluta",
      md5Fingerprint: "omnis",
      serialNumber: "tenetur",
      sha1Fingerprint: "non",
      sha1Thumbprint: "unde",
      sha256Fingerprint: "dolor",
      sha256Thumbprint: "ut",
      subject: "minima",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "d2bcd18a-de1c-4e73-8ce0-3e7f8ea8e261",
    insertInstant: 1659380719000,
    issuer: "consequuntur",
    kid: "error",
    lastUpdateInstant: 1659380719000,
    length: 649365,
    name: "Kent Kozey IV",
    privateKey: "vero",
    publicKey: "atque",
    secret: "libero",
    type: KeyType.Hmac,
  },
}).then((res: GenerateKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateKeyWithId

Generate a new RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateKeyWithId("vero", {
  key: {
    algorithm: KeyAlgorithm.Es512,
    certificate: "nisi",
    certificateInformation: {
      issuer: "officia",
      md5Fingerprint: "natus",
      serialNumber: "rem",
      sha1Fingerprint: "iusto",
      sha1Thumbprint: "quia",
      sha256Fingerprint: "maiores",
      sha256Thumbprint: "esse",
      subject: "laboriosam",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "cd594526-a5fc-48a5-99c2-7a56532a4521",
    insertInstant: 1659380719000,
    issuer: "esse",
    kid: "voluptates",
    lastUpdateInstant: 1659380719000,
    length: 527913,
    name: "Tabitha Mante",
    privateKey: "voluptatum",
    publicKey: "inventore",
    secret: "voluptas",
    type: KeyType.Rsa,
  },
}).then((res: GenerateKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateTwoFactorRecoveryCodesWithId

Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateTwoFactorRecoveryCodesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateTwoFactorRecoveryCodesWithId("quia").then((res: GenerateTwoFactorRecoveryCodesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateTwoFactorSecretUsingJWTWithId

Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateTwoFactorSecretUsingJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateTwoFactorSecretUsingJWTWithId().then((res: GenerateTwoFactorSecretUsingJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## identityProviderLoginWithId

Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IdentityProviderLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.identityProviderLoginWithId({
  applicationId: "06b832ee-3a46-41c1-a4db-0b678e29a7ff",
  data: {
    "architecto": "consequatur",
  },
  encodedJWT: "quasi",
  identityProviderId: "b2c7665a-5bdc-401c-829d-488d5252e328",
  ipAddress: "ratione",
  metaData: {
    data: {
      "aut": {
        "vitae": "incidunt",
        "quia": "cumque",
      },
      "quo": {
        "amet": "necessitatibus",
      },
    },
    device: {
      description: "officiis",
      lastAccessedAddress: "nisi",
      lastAccessedInstant: 1659380719000,
      name: "Delbert Bradtke",
      type: DeviceType.Tv,
    },
    scopes: [
      "numquam",
      "minus",
    ],
  },
  newDevice: false,
  noJWT: false,
  noLink: false,
}, "alias").then((res: IdentityProviderLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importKey

Import an existing RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportKeyResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importKey({
  key: {
    algorithm: KeyAlgorithm.Hs512,
    certificate: "quo",
    certificateInformation: {
      issuer: "commodi",
      md5Fingerprint: "provident",
      serialNumber: "aut",
      sha1Fingerprint: "laborum",
      sha1Thumbprint: "accusantium",
      sha256Fingerprint: "perspiciatis",
      sha256Thumbprint: "minus",
      subject: "consectetur",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "05502e77-c200-49c1-9b4d-837399065df2",
    insertInstant: 1659380719000,
    issuer: "neque",
    kid: "ipsa",
    lastUpdateInstant: 1659380719000,
    length: 328153,
    name: "Gerald Donnelly",
    privateKey: "aliquid",
    publicKey: "quidem",
    secret: "ex",
    type: KeyType.Hmac,
  },
}).then((res: ImportKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importKeyWithId

Import an existing RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importKeyWithId("autem", {
  key: {
    algorithm: KeyAlgorithm.Rs256,
    certificate: "rerum",
    certificateInformation: {
      issuer: "sed",
      md5Fingerprint: "voluptate",
      serialNumber: "sint",
      sha1Fingerprint: "eius",
      sha1Thumbprint: "magnam",
      sha256Fingerprint: "dignissimos",
      sha256Thumbprint: "et",
      subject: "tenetur",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "47723dce-c530-4cc5-9a88-c87342d7eeb0",
    insertInstant: 1659380719000,
    issuer: "aut",
    kid: "molestias",
    lastUpdateInstant: 1659380719000,
    length: 43142,
    name: "Violet Cormier",
    privateKey: "odit",
    publicKey: "blanditiis",
    secret: "saepe",
    type: KeyType.Hmac,
  },
}).then((res: ImportKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importRefreshTokensWithId

Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportRefreshTokensWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importRefreshTokensWithId({
  refreshTokens: [
    {
      applicationId: "9cfa3531-6f54-4f2c-bf96-f0d044a59168",
      data: {
        "nobis": {
          "quos": "quae",
          "modi": "eos",
          "cumque": "corrupti",
        },
        "quod": {
          "corporis": "placeat",
        },
        "harum": {
          "optio": "illo",
          "amet": "quibusdam",
        },
      },
      id: "21d28cce-60e0-4a7f-a3f8-72b25b23bc78",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "temporibus": {
            "aliquam": "ullam",
            "molestias": "dignissimos",
            "cupiditate": "praesentium",
            "adipisci": "ab",
          },
          "libero": {
            "quidem": "reprehenderit",
            "possimus": "unde",
            "quos": "officiis",
          },
          "molestiae": {
            "enim": "laborum",
            "eum": "quas",
          },
        },
        device: {
          description: "provident",
          lastAccessedAddress: "atque",
          lastAccessedInstant: 1659380719000,
          name: "Lila Lang",
          type: DeviceType.Browser,
        },
        scopes: [
          "nostrum",
          "dolor",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "07ddf9db-c3a2-4939-b6e2-fae0d3c0f705",
      token: "rerum",
      userId: "6b971f4a-37e8-4be2-8d97-dc9be549691e",
    },
    {
      applicationId: "419db622-1472-4717-8670-baf2351d6eb1",
      data: {
        "velit": {
          "officiis": "veniam",
        },
        "labore": {
          "illo": "ipsam",
        },
        "accusamus": {
          "nisi": "quas",
          "quae": "rerum",
        },
        "magni": {
          "impedit": "alias",
          "laudantium": "cum",
        },
      },
      id: "b3aa9e36-804e-4148-b35f-dea2452027c1",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "delectus": {
            "omnis": "provident",
          },
        },
        device: {
          description: "ad",
          lastAccessedAddress: "explicabo",
          lastAccessedInstant: 1659380719000,
          name: "Shirley Rohan",
          type: DeviceType.Laptop,
        },
        scopes: [
          "ex",
          "officiis",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "bdc1a08d-1570-411d-94d6-b0564ad72d66",
      token: "vero",
      userId: "f7d5c82d-3759-4261-80c6-80727ec7316e",
    },
    {
      applicationId: "42179daf-12eb-4914-90c8-559f5f475aa9",
      data: {
        "architecto": {
          "tempora": "possimus",
          "dolores": "occaecati",
          "ad": "natus",
          "modi": "quos",
        },
        "adipisci": {
          "eligendi": "vel",
          "illum": "delectus",
          "esse": "aut",
        },
        "quo": {
          "beatae": "qui",
        },
      },
      id: "c299b021-e26c-42dc-ac68-b4d155a9bb6e",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "excepturi": {
            "beatae": "suscipit",
            "fuga": "eveniet",
          },
        },
        device: {
          description: "voluptatem",
          lastAccessedAddress: "illo",
          lastAccessedInstant: 1659380719000,
          name: "Domingo Kozey",
          type: DeviceType.Unknown,
        },
        scopes: [
          "dolorem",
          "magnam",
          "id",
          "quos",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "34cb0664-4ec2-4e20-bdc2-1ada0a1b7e74",
      token: "labore",
      userId: "6f99706b-e2cb-4885-8bdd-84ce76d5d982",
    },
    {
      applicationId: "be5cd13e-fe5a-4be3-81b3-ef4f4017cae1",
      data: {
        "ipsam": {
          "tempora": "at",
          "totam": "voluptate",
          "labore": "distinctio",
          "iure": "voluptas",
        },
        "dolore": {
          "aut": "delectus",
          "quibusdam": "autem",
        },
        "nulla": {
          "delectus": "unde",
          "tempore": "exercitationem",
          "placeat": "voluptas",
          "quae": "quibusdam",
        },
      },
      id: "f3470194-0235-4fb9-ac70-77962c13f640",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "ullam": {
            "quia": "fuga",
            "debitis": "aperiam",
            "eveniet": "dolorum",
          },
          "doloribus": {
            "ad": "optio",
            "ipsam": "corrupti",
            "distinctio": "accusantium",
            "rerum": "dignissimos",
          },
          "deleniti": {
            "atque": "molestias",
            "dolor": "occaecati",
          },
          "amet": {
            "voluptate": "eligendi",
            "accusantium": "exercitationem",
          },
        },
        device: {
          description: "nihil",
          lastAccessedAddress: "amet",
          lastAccessedInstant: 1659380719000,
          name: "Mrs. Dana Klocko",
          type: DeviceType.Tablet,
        },
        scopes: [
          "ipsa",
          "illo",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "c1585bee-ae66-4a92-9d17-4da31457fd36",
      token: "optio",
      userId: "c0bb662a-304c-4f20-86bd-9443de0e3122",
    },
  ],
  validateDbConstraints: false,
}).then((res: ImportRefreshTokensWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importUsersWithId

Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportUsersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importUsersWithId({
  encryptionScheme: "doloremque",
  eventInfo: {
    data: {
      "perspiciatis": {
        "voluptatibus": "accusantium",
        "debitis": "nemo",
        "id": "mollitia",
      },
      "adipisci": {
        "eligendi": "consequatur",
      },
      "recusandae": {
        "laborum": "exercitationem",
        "eligendi": "maiores",
      },
      "minus": {
        "similique": "libero",
        "nihil": "debitis",
        "rem": "impedit",
        "recusandae": "eligendi",
      },
    },
    deviceDescription: "maiores",
    deviceName: "in",
    deviceType: "quibusdam",
    ipAddress: "sed",
    location: {
      city: "New Karson",
      country: "Suriname",
      displayString: "ab",
      latitude: 9315.71,
      longitude: 2377.69,
      region: "dicta",
      zipcode: "20766-5307",
    },
    os: "aspernatur",
    userAgent: "dolorem",
  },
  factor: 590263,
  users: [
    {
      active: false,
      birthDate: "2007-12-03",
      breachedPasswordLastCheckedInstant: 1659380719000,
      breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
      cleanSpeakId: "50e8c0c4-f3e1-46a3-a03a-4aee87418d65",
      connectorId: "e23728ea-3308-47ce-822d-cf4dbc840552",
      data: {
        "laudantium": {
          "assumenda": "perferendis",
          "ducimus": "molestias",
          "possimus": "dolores",
          "iusto": "deleniti",
        },
      },
      email: "Ottilie1@yahoo.com",
      encryptionScheme: "distinctio",
      expiry: 1659380719000,
      factor: 353092,
      firstName: "Mariane",
      fullName: "possimus",
      id: "b56d0b07-e08b-459b-b0fa-b55e54952580",
      imageUrl: "quas",
      insertInstant: 1659380719000,
      lastLoginInstant: 1659380719000,
      lastName: "Kemmer",
      lastUpdateInstant: 1659380719000,
      memberships: [
        {
          data: {
            "fugiat": {
              "id": "recusandae",
              "saepe": "animi",
              "perferendis": "ullam",
              "omnis": "nihil",
            },
            "voluptatem": {
              "quibusdam": "dolore",
              "explicabo": "aperiam",
              "dignissimos": "tempore",
            },
          },
          groupId: "1da88007-c180-47be-9c4d-83a7b585b464",
          id: "7998b034-25c1-4486-b321-3c752beb47c7",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
            cleanSpeakId: "c96bb288-d4e1-4cd3-9ecb-bd979b8e690a",
            connectorId: "9383b239-70bd-4d98-a954-679762a1325d",
            data: {
              "iusto": {
                "dicta": "recusandae",
                "sapiente": "ea",
                "aspernatur": "odit",
                "occaecati": "nemo",
              },
              "atque": {
                "dolorem": "repellendus",
                "aspernatur": "reiciendis",
              },
            },
            email: "Rashawn29@hotmail.com",
            encryptionScheme: "officiis",
            expiry: 1659380719000,
            factor: 555193,
            firstName: "Lloyd",
            fullName: "rerum",
            id: "74e0a988-c0d8-4e57-845b-8387f797a669",
            imageUrl: "aspernatur",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Ziemann",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "alias",
            mobilePhone: "nam",
            parentEmail: "ad",
            password: "praesentium",
            passwordChangeReason: ChangePasswordReason.Breached,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            registrations: [
              {
                applicationId: "cb0082b9-f3df-4c55-b7ea-bfafecd9af7d",
                authenticationToken: "quas",
                cleanSpeakId: "85835450-cb33-471a-9d5a-b33553877097",
                data: {
                  "beatae": {
                    "omnis": "harum",
                    "facere": "doloremque",
                    "pariatur": "culpa",
                  },
                  "earum": {
                    "voluptatibus": "ut",
                    "aperiam": "quos",
                    "saepe": "consequatur",
                  },
                  "atque": {
                    "placeat": "culpa",
                  },
                },
                id: "6a1b8789-6215-4080-a150-1beed33ee881",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "quod",
                  "nihil",
                  "iste",
                  "sapiente",
                ],
                timezone: "America/Denver",
                tokens: {
                  "consequatur": "temporibus",
                  "quis": "quae",
                  "neque": "quod",
                },
                username: "Agustina.Connelly",
                usernameStatus: ContentStatus.Pending,
                verified: false,
              },
              {
                applicationId: "88ec45c0-6a6e-419d-b845-52d8d21328bd",
                authenticationToken: "laborum",
                cleanSpeakId: "de97594d-949b-4e3e-9572-0fbd30eb0266",
                data: {
                  "occaecati": {
                    "ipsam": "aliquid",
                    "laudantium": "harum",
                    "quia": "aut",
                    "quam": "atque",
                  },
                  "corrupti": {
                    "inventore": "non",
                    "est": "dignissimos",
                  },
                },
                id: "4e6e0ac5-8c4c-40e4-ad4a-879232f4bbc8",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "pariatur",
                ],
                timezone: "America/Denver",
                tokens: {
                  "pariatur": "architecto",
                  "ab": "nisi",
                },
                username: "Rosalee.Cassin82",
                usernameStatus: ContentStatus.Rejected,
                verified: false,
              },
            ],
            salt: "laboriosam",
            tenantId: "b9c8ac1f-d07c-426a-a29d-33da0c1ad8b3",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha512,
                    codeLength: 380305,
                    timeStep: 90205,
                  },
                  email: "Jaron_Hackett12@hotmail.com",
                  id: "25edd504-6c43-4c72-a4f1-c4032e9c9f84",
                  lastUsed: false,
                  method: "omnis",
                  mobilePhone: "dolorem",
                  secret: "inventore",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha256,
                    codeLength: 374860,
                    timeStep: 636406,
                  },
                  email: "Tracey_Kilback@hotmail.com",
                  id: "3a746918-5f9f-47b2-834f-63580f7c8b0b",
                  lastUsed: false,
                  method: "culpa",
                  mobilePhone: "a",
                  secret: "dicta",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha512,
                    codeLength: 114512,
                    timeStep: 439756,
                  },
                  email: "Christophe37@gmail.com",
                  id: "e2f3f241-0492-4e9b-a814-400acba34c96",
                  lastUsed: false,
                  method: "expedita",
                  mobilePhone: "debitis",
                  secret: "modi",
                },
              ],
              recoveryCodes: [
                "repudiandae",
                "quasi",
                "hic",
                "quas",
              ],
            },
            uniqueUsername: "mollitia",
            username: "Carson_Gleason",
            usernameStatus: ContentStatus.Pending,
            verified: false,
          },
          userId: "e4b9a29d-4c4a-472e-a166-8068b90b2f68",
        },
        {
          data: {
            "possimus": {
              "iste": "impedit",
            },
            "quibusdam": {
              "accusamus": "illo",
            },
            "eos": {
              "repellat": "magni",
              "illum": "ab",
              "odit": "quae",
            },
          },
          groupId: "d828d829-9bc6-4763-b8ed-c4c347040cad",
          id: "f0ba5810-75a0-472c-a3de-ea8fe4bc45c8",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
            cleanSpeakId: "4813115a-02ee-4886-bf1b-94694866d0ad",
            connectorId: "18b1f3f5-3593-490c-8a96-8bbc933f80cc",
            data: {
              "minima": {
                "veniam": "fuga",
                "provident": "ab",
                "debitis": "enim",
              },
            },
            email: "Chauncey_Hauck@hotmail.com",
            encryptionScheme: "assumenda",
            expiry: 1659380719000,
            factor: 718961,
            firstName: "Roel",
            fullName: "tempore",
            id: "22bda63a-3494-41b4-aa11-bfdb59d8cafc",
            imageUrl: "quidem",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Cassin",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "laudantium",
            mobilePhone: "ratione",
            parentEmail: "quae",
            password: "tempore",
            passwordChangeReason: ChangePasswordReason.Expired,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            registrations: [
              {
                applicationId: "da7f37a5-a62e-4a95-bef2-975de177b57d",
                authenticationToken: "et",
                cleanSpeakId: "9e6158ba-1fc2-4c46-b8df-02c29be22cdb",
                data: {
                  "consectetur": {
                    "nemo": "tenetur",
                    "odit": "molestiae",
                    "hic": "suscipit",
                    "harum": "culpa",
                  },
                  "adipisci": {
                    "fugit": "dolorum",
                  },
                  "veritatis": {
                    "eius": "autem",
                    "blanditiis": "ipsum",
                  },
                  "perferendis": {
                    "quos": "beatae",
                    "molestias": "consequatur",
                    "dolorem": "delectus",
                    "consequatur": "eum",
                  },
                },
                id: "798ff70a-9dff-41c5-9850-3b0fd81a25e6",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "illum",
                  "nostrum",
                ],
                timezone: "America/Denver",
                tokens: {
                  "quis": "et",
                  "eaque": "dolore",
                  "quas": "quisquam",
                  "perferendis": "sequi",
                },
                username: "Ruben99",
                usernameStatus: ContentStatus.Rejected,
                verified: false,
              },
              {
                applicationId: "60676be2-8ed7-4ed5-a561-268f4575966e",
                authenticationToken: "rerum",
                cleanSpeakId: "8779034f-9446-4061-95fa-ef6eac70211b",
                data: {
                  "rem": {
                    "nobis": "molestias",
                    "ut": "eos",
                    "ducimus": "excepturi",
                    "tempora": "laboriosam",
                  },
                  "tempora": {
                    "expedita": "occaecati",
                    "nesciunt": "inventore",
                    "aspernatur": "odit",
                  },
                },
                id: "1fe6d1d1-8508-44c2-a22f-8c25b32ea9fe",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "explicabo",
                  "ratione",
                  "maiores",
                ],
                timezone: "America/Denver",
                tokens: {
                  "molestias": "quaerat",
                  "similique": "reprehenderit",
                },
                username: "Reginald.Denesik44",
                usernameStatus: ContentStatus.Active,
                verified: false,
              },
              {
                applicationId: "83857bb9-763b-443d-9284-7bc03cd9d466",
                authenticationToken: "vero",
                cleanSpeakId: "9a78e9f8-4a06-4371-b58a-4d591898fa43",
                data: {
                  "praesentium": {
                    "tempore": "iure",
                  },
                  "voluptate": {
                    "error": "magnam",
                    "hic": "magni",
                    "sit": "animi",
                    "molestias": "tenetur",
                  },
                  "iusto": {
                    "delectus": "et",
                    "ad": "nobis",
                    "voluptatibus": "consequatur",
                  },
                  "asperiores": {
                    "est": "illum",
                    "id": "eum",
                    "fuga": "ipsum",
                  },
                },
                id: "eee2b6e7-b0b8-4f94-a709-1e686fed59ba",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "doloremque",
                ],
                timezone: "America/Denver",
                tokens: {
                  "esse": "facere",
                  "laborum": "ipsam",
                  "quaerat": "error",
                },
                username: "Myah_Krajcik27",
                usernameStatus: ContentStatus.Active,
                verified: false,
              },
            ],
            salt: "cupiditate",
            tenantId: "007aa816-beaf-4858-8a18-8ae63a056f3e",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha256,
                    codeLength: 925786,
                    timeStep: 872432,
                  },
                  email: "Morgan_Hartmann88@hotmail.com",
                  id: "d1f58d86-f8ef-4ff5-b78c-2ac04eb816fc",
                  lastUsed: false,
                  method: "quasi",
                  mobilePhone: "architecto",
                  secret: "voluptatibus",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha256,
                    codeLength: 456403,
                    timeStep: 565531,
                  },
                  email: "Elda.Hackett93@hotmail.com",
                  id: "9acaeef8-827d-4cfc-b337-8c49d07c3d05",
                  lastUsed: false,
                  method: "architecto",
                  mobilePhone: "cum",
                  secret: "corporis",
                },
              ],
              recoveryCodes: [
                "accusamus",
                "unde",
              ],
            },
            uniqueUsername: "ipsam",
            username: "Christa_Collier3",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
          userId: "a68b0e52-289b-46f6-b270-2f948ba3823a",
        },
        {
          data: {
            "veritatis": {
              "accusamus": "dolorem",
            },
            "fuga": {
              "dolore": "illum",
              "molestias": "odio",
            },
          },
          groupId: "b07f722e-88c9-4faa-aa56-08fbf075845f",
          id: "3112f602-89ab-4e6b-96c0-90acbfacc795",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
            cleanSpeakId: "268f63a8-db17-4391-a3e3-d0709257e44d",
            connectorId: "6045084c-8e1e-4cd8-a752-46dc934fb4d0",
            data: {
              "ex": {
                "tempore": "quas",
                "fugiat": "debitis",
                "magnam": "odio",
                "dolorum": "nostrum",
              },
              "adipisci": {
                "officiis": "voluptas",
              },
            },
            email: "Kara_Sanford10@gmail.com",
            encryptionScheme: "minus",
            expiry: 1659380719000,
            factor: 632222,
            firstName: "Shannon",
            fullName: "porro",
            id: "ca0b6c4e-61b9-492c-b803-0e0f6219d1e5",
            imageUrl: "magnam",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Feeney",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "repudiandae",
            mobilePhone: "nisi",
            parentEmail: "corrupti",
            password: "reprehenderit",
            passwordChangeReason: ChangePasswordReason.Expired,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            registrations: [
              {
                applicationId: "4726000f-d745-47d7-b602-0ab8022cac03",
                authenticationToken: "adipisci",
                cleanSpeakId: "1cdf844e-3408-45a4-b287-19a08a4e95a3",
                data: {
                  "beatae": {
                    "ipsam": "at",
                    "dolorum": "iste",
                    "dicta": "eligendi",
                    "porro": "placeat",
                  },
                  "dolorum": {
                    "laboriosam": "distinctio",
                    "dolores": "esse",
                    "ex": "est",
                    "dignissimos": "reiciendis",
                  },
                  "odit": {
                    "labore": "sed",
                    "consequatur": "vel",
                  },
                },
                id: "0ebd98b7-4295-4b31-abb8-a2c6d013be0e",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "totam",
                  "sit",
                  "amet",
                  "porro",
                ],
                timezone: "America/Denver",
                tokens: {
                  "eius": "placeat",
                  "iure": "quo",
                  "error": "nemo",
                },
                username: "Ismael29",
                usernameStatus: ContentStatus.Rejected,
                verified: false,
              },
              {
                applicationId: "10d3a62f-17b3-42cb-96c3-3853758f46b0",
                authenticationToken: "aperiam",
                cleanSpeakId: "6c983e86-606a-4614-a5f0-a3a4598f667c",
                data: {
                  "eius": {
                    "excepturi": "accusantium",
                    "minus": "nam",
                  },
                },
                id: "1b0c1188-b422-4844-a652-5d19fd920dd3",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "consequuntur",
                ],
                timezone: "America/Denver",
                tokens: {
                  "blanditiis": "doloremque",
                  "alias": "amet",
                  "repellendus": "et",
                },
                username: "Asha24",
                usernameStatus: ContentStatus.Pending,
                verified: false,
              },
            ],
            salt: "consectetur",
            tenantId: "57b527e0-28ab-4f2b-9c85-d9703a6969ad",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithm.HmacSha256,
                    codeLength: 62994,
                    timeStep: 939212,
                  },
                  email: "Kadin29@hotmail.com",
                  id: "00c428cb-9d7a-47b1-a32a-0d7351022320",
                  lastUsed: false,
                  method: "occaecati",
                  mobilePhone: "numquam",
                  secret: "ratione",
                },
              ],
              recoveryCodes: [
                "qui",
                "deserunt",
              ],
            },
            uniqueUsername: "repudiandae",
            username: "Queen.Vandervort",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          userId: "26195064-685d-4213-ba43-7e16c2c7e099",
        },
      ],
      middleName: "recusandae",
      mobilePhone: "laborum",
      parentEmail: "possimus",
      password: "architecto",
      passwordChangeReason: ChangePasswordReason.Breached,
      passwordChangeRequired: false,
      passwordLastUpdateInstant: 1659380719000,
      preferredLanguages: [
        "en_US",
        "en_US",
        "en_US",
      ],
      registrations: [
        {
          applicationId: "6407fde9-85ee-470f-913a-fe0d2b422948",
          authenticationToken: "cupiditate",
          cleanSpeakId: "325be7ca-9608-4128-96b9-39383424803b",
          data: {
            "ad": {
              "minus": "occaecati",
            },
            "esse": {
              "nemo": "possimus",
            },
          },
          id: "d521879e-28a9-44ba-86d5-021319f38907",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "sapiente",
            "iure",
            "reiciendis",
            "dolor",
          ],
          timezone: "America/Denver",
          tokens: {
            "cumque": "ad",
            "voluptatibus": "est",
          },
          username: "Hassan55",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        {
          applicationId: "1b44ec0a-8624-4d48-9f68-d4f2c01749f2",
          authenticationToken: "optio",
          cleanSpeakId: "5465549b-838f-443c-bf3c-d18f0a110f89",
          data: {
            "sit": {
              "dolor": "magnam",
              "totam": "consequatur",
              "hic": "sapiente",
              "eaque": "cum",
            },
            "voluptate": {
              "et": "doloribus",
            },
          },
          id: "6223db47-cc1a-4f58-b39c-89537a9a7fbb",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "laborum",
            "quaerat",
            "incidunt",
          ],
          timezone: "America/Denver",
          tokens: {
            "molestiae": "veritatis",
            "ab": "dicta",
            "assumenda": "eos",
            "deserunt": "omnis",
          },
          username: "Russell0",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        {
          applicationId: "9546ac76-d80b-4967-9a49-4f144a6cd824",
          authenticationToken: "officia",
          cleanSpeakId: "587a145d-1473-4369-ad63-c68257b7a7bf",
          data: {
            "sit": {
              "exercitationem": "magnam",
              "animi": "minima",
              "sequi": "impedit",
              "distinctio": "sunt",
            },
          },
          id: "257da51f-e559-4ebb-b25e-e5b70b0ea5fe",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          roles: [
            "ad",
          ],
          timezone: "America/Denver",
          tokens: {
            "consequatur": "quod",
            "rerum": "minima",
            "commodi": "labore",
            "facilis": "nobis",
          },
          username: "Jonas_Hane",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        {
          applicationId: "ae954da2-8f0e-4e37-8e50-fc4f85e97025",
          authenticationToken: "non",
          cleanSpeakId: "5eed58c1-ecef-46bf-bfad-aec18606d305",
          data: {
            "eius": {
              "officia": "nisi",
              "quaerat": "omnis",
              "magnam": "amet",
              "dolores": "ullam",
            },
            "velit": {
              "perspiciatis": "ducimus",
              "culpa": "eos",
            },
          },
          id: "6abb2c89-a3a2-4831-81b5-e61333a02230",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "molestiae",
            "expedita",
          ],
          timezone: "America/Denver",
          tokens: {
            "quod": "ullam",
            "deserunt": "quam",
            "modi": "reiciendis",
            "nisi": "ipsam",
          },
          username: "Jerod80",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
      ],
      salt: "inventore",
      tenantId: "7bcfeb66-e581-443e-ae1e-274862df908d",
      timezone: "America/Denver",
      twoFactor: {
        methods: [
          {
            authenticator: {
              algorithm: TOTPAlgorithm.HmacSha1,
              codeLength: 763436,
              timeStep: 313465,
            },
            email: "Michael10@gmail.com",
            id: "ca03db8b-e98a-43b3-971f-c54c995f4c70",
            lastUsed: false,
            method: "illo",
            mobilePhone: "quasi",
            secret: "impedit",
          },
        ],
        recoveryCodes: [
          "nam",
        ],
      },
      uniqueUsername: "odio",
      username: "Fidel_Schuster",
      usernameStatus: ContentStatus.Pending,
      verified: false,
    },
  ],
  validateDbConstraints: false,
}).then((res: ImportUsersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importWebAuthnCredentialWithId

Import a WebAuthn credential

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportWebAuthnCredentialWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { AttestationType, CoseAlgorithmIdentifier } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importWebAuthnCredentialWithId({
  credentials: [
    {
      algorithm: CoseAlgorithmIdentifier.Ps256,
      attestationType: AttestationType.AnonymizationCa,
      authenticatorSupportsUserVerification: false,
      credentialId: "at",
      data: {
        "nisi": {
          "quisquam": "ab",
        },
      },
      discoverable: false,
      displayName: "itaque",
      id: "164356d6-e325-4bf9-a998-5132d5c68010",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Mrs. Carl Reichert",
      publicKey: "necessitatibus",
      relyingPartyId: "ipsum",
      signCount: 434737,
      tenantId: "f612de96-6f84-4f52-975f-badf2162d46a",
      transports: [
        "quaerat",
      ],
      userAgent: "velit",
      userId: "a40e3c77-7572-4806-8efc-f6bdccf809f7",
    },
    {
      algorithm: CoseAlgorithmIdentifier.Ps384,
      attestationType: AttestationType.AttestationCa,
      authenticatorSupportsUserVerification: false,
      credentialId: "optio",
      data: {
        "impedit": {
          "optio": "quis",
          "laudantium": "voluptatibus",
        },
        "facere": {
          "consequuntur": "illo",
          "temporibus": "temporibus",
          "neque": "quibusdam",
          "minus": "animi",
        },
        "neque": {
          "amet": "earum",
          "atque": "corporis",
          "labore": "itaque",
          "temporibus": "laboriosam",
        },
      },
      discoverable: false,
      displayName: "aspernatur",
      id: "658fe156-a460-4a1d-a583-fed6dbf90cf0",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Willie Ankunding",
      publicKey: "eos",
      relyingPartyId: "pariatur",
      signCount: 502054,
      tenantId: "659b4cbb-a304-460b-9a81-42a1fe18bd6e",
      transports: [
        "adipisci",
        "iure",
      ],
      userAgent: "officiis",
      userId: "333d57e9-0844-4319-a380-e2959c4d0a66",
    },
    {
      algorithm: CoseAlgorithmIdentifier.Es512,
      attestationType: AttestationType.AnonymizationCa,
      authenticatorSupportsUserVerification: false,
      credentialId: "eos",
      data: {
        "magni": {
          "necessitatibus": "reprehenderit",
          "doloremque": "delectus",
          "maxime": "numquam",
          "eos": "officia",
        },
      },
      discoverable: false,
      displayName: "sed",
      id: "dc3a0c63-813e-4c7b-b99f-09e6b2ff77f5",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Rodolfo Witting",
      publicKey: "et",
      relyingPartyId: "fuga",
      signCount: 87335,
      tenantId: "a1603832-8a3d-438e-9e57-c2d636f9bf0a",
      transports: [
        "veniam",
      ],
      userAgent: "temporibus",
      userId: "d9e7c804-89c0-45f5-b036-5c573814b256",
    },
  ],
  validateDbConstraints: false,
}).then((res: ImportWebAuthnCredentialWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## introspectAccessTokenWithId

Inspect an access token issued by FusionAuth.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IntrospectAccessTokenWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { OAuthErrorReason, OAuthErrorType, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.introspectAccessTokenWithId().then((res: IntrospectAccessTokenWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## issueJWTWithId

Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IssueJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.issueJWTWithId("sequi", "velit").then((res: IssueJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## loginPingWithId

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginPingWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginPingWithId("voluptatum", "iure", "voluptas", "nam").then((res: LoginPingWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## loginPingWithRequestWithId

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginPingWithRequestWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginPingWithRequestWithId({
  applicationId: "1061b795-72fc-4bbf-bca2-f3f126270f4e",
  ipAddress: "mollitia",
  metaData: {
    data: {
      "dolor": {
        "eligendi": "laudantium",
        "voluptate": "sint",
      },
    },
    device: {
      description: "aliquid",
      lastAccessedAddress: "adipisci",
      lastAccessedInstant: 1659380719000,
      name: "Lucille Schuppe",
      type: DeviceType.Mobile,
    },
    scopes: [
      "distinctio",
      "officia",
    ],
  },
  newDevice: false,
  noJWT: false,
  userId: "40378817-e439-47cb-99e4-1ef7ba5214f2",
}, "nisi").then((res: LoginPingWithRequestWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## loginWithId

Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginWithId({
  applicationId: "9d1e6567-2324-4598-a93b-9c6656583cd9",
  ipAddress: "vel",
  loginId: "quia",
  metaData: {
    data: {
      "odit": {
        "inventore": "dignissimos",
      },
      "alias": {
        "nobis": "quasi",
        "quia": "asperiores",
      },
    },
    device: {
      description: "eaque",
      lastAccessedAddress: "quo",
      lastAccessedInstant: 1659380719000,
      name: "Earnest Jaskolski",
      type: DeviceType.Mobile,
    },
    scopes: [
      "velit",
      "vel",
      "deleniti",
    ],
  },
  newDevice: false,
  noJWT: false,
  oneTimePassword: "doloribus",
  password: "odit",
  twoFactorTrustId: "quasi",
}, "illo").then((res: LoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## lookupIdentityProviderWithId

Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LookupIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ClientAuthenticationMethod, IdentityProviderType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.lookupIdentityProviderWithId("aperiam").then((res: LookupIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## modifyActionWithId

Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ModifyActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.modifyActionWithId("molestias", {
  action: {
    actioneeUserId: "53ff0c00-ebe8-4d6a-8eca-455ee23c30c5",
    actionerUserId: "af317abe-5333-46c8-add7-a4d5fca2edbe",
    applicationIds: [
      "2093d997-5a94-4405-a23e-58fdfb424a25",
    ],
    comment: "itaque",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "voluptatum",
    reasonId: "3b62bcb8-fe20-4679-9cd5-fe0f6f424275",
    userActionId: "860f8c0a-0bd5-42a2-824f-fa86c794ca78",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "error": {
        "in": "fugiat",
        "numquam": "illo",
        "maxime": "aut",
        "sequi": "nemo",
      },
      "aperiam": {
        "voluptatem": "ad",
        "natus": "fuga",
        "repellat": "neque",
      },
      "iste": {
        "architecto": "nam",
        "omnis": "nemo",
      },
      "eligendi": {
        "minima": "laudantium",
        "tenetur": "quod",
        "iste": "molestias",
        "repellendus": "dolorum",
      },
    },
    deviceDescription: "aspernatur",
    deviceName: "deserunt",
    deviceType: "ad",
    ipAddress: "aperiam",
    location: {
      city: "Satterfieldbury",
      country: "Denmark",
      displayString: "aperiam",
      latitude: 3055.12,
      longitude: 6879.84,
      region: "sunt",
      zipcode: "43462-7909",
    },
    os: "explicabo",
    userAgent: "beatae",
  },
}).then((res: ModifyActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## passwordlessLoginWithId

Complete a login request using a passwordless code

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PasswordlessLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.passwordlessLoginWithId({
  applicationId: "8b258acd-eba0-45ee-9dd1-f3c88029c983",
  code: "repudiandae",
  ipAddress: "optio",
  metaData: {
    data: {
      "laboriosam": {
        "doloremque": "fuga",
      },
      "modi": {
        "voluptate": "blanditiis",
        "sapiente": "adipisci",
        "unde": "magnam",
      },
      "eum": {
        "iusto": "itaque",
        "praesentium": "tenetur",
        "saepe": "quidem",
      },
      "eaque": {
        "quisquam": "eos",
      },
    },
    device: {
      description: "atque",
      lastAccessedAddress: "sit",
      lastAccessedInstant: 1659380719000,
      name: "Gloria Zieme",
      type: DeviceType.Laptop,
    },
    scopes: [
      "expedita",
    ],
  },
  newDevice: false,
  noJWT: false,
  twoFactorTrustId: "veniam",
}).then((res: PasswordlessLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchApplicationRoleWithId

Updates, via PATCH, the application role with the given id for the application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchApplicationRoleWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchApplicationRoleWithId("illo", "sapiente", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "d82979f7-0aef-4ea9-9cb3-67af98ff89a4",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "iusto",
      applicationIds: [
        "9534ea0e-83d5-462f-9d69-e97b71fbf386",
        "baa65edc-8aa4-4660-8514-72821e7ab72d",
        "3504dda7-2150-45bf-afc2-0d44a0a07f12",
      ],
      enabled: false,
      url: "autem",
      usernameModeration: {
        applicationId: "b8eff69a-9df7-422b-85fa-ac95e8e14ddd",
        enabled: false,
      },
    },
    data: {
      "placeat": {
        "quia": "nisi",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "733c591f-254c-4de2-a5a0-69789b3b0b17",
      emailVerificationEmailTemplateId: "ff950b1e-c955-4b1b-bb60-14847167def1",
      emailVerifiedEmailTemplateId: "f337961a-03d6-45d1-937b-928b8304f807",
      forgotPasswordEmailTemplateId: "5bf6837c-b915-4d09-9e4f-0e5f1559ce63",
      loginIdInUseOnCreateEmailTemplateId: "91371d81-a154-4bcd-8754-b2383475758a",
      loginIdInUseOnUpdateEmailTemplateId: "016bc441-176b-49ad-b6a2-a825cd387380",
      loginNewDeviceEmailTemplateId: "828baf4b-2a43-4a44-8c81-4f9285603f8c",
      loginSuspiciousEmailTemplateId: "ccb2d715-68d4-4731-8474-76fa31d851f3",
      passwordResetSuccessEmailTemplateId: "e548f807-06a5-470a-967a-75bba68006ff",
      passwordUpdateEmailTemplateId: "920d297e-db13-4635-9ade-e9dac71e1af0",
      passwordlessEmailTemplateId: "021d319b-a189-462f-b1c3-97c547ca2bc3",
      setPasswordEmailTemplateId: "de3df12b-bbb2-4f52-ba55-544ee0aed588",
      twoFactorMethodAddEmailTemplateId: "86cd98a1-61ac-4c5b-a9f3-2e1069d01090",
      twoFactorMethodRemoveEmailTemplateId: "1f86281e-7688-4de9-9975-646470a47cac",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 99163,
    },
    formConfiguration: {
      adminRegistrationFormId: "b0a0edd0-67a4-4eeb-8eff-38a907c6d145",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "8799325f-9554-4766-b354-cffc30049ba2",
    },
    id: "d1ea0b22-5f4e-4782-8d28-6f797685cd4e",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "23b7560d-f3e2-4573-b24d-c7d7bef215f4",
      enabled: false,
      idTokenKeyId: "27be7e86-6b5b-49d9-8b2b-a0d83adc0e05",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 393805,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 98852,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "87aee453-e2d9-4d8f-bb41-f1244d5c6820",
      idTokenPopulateId: "22308bc6-40cb-41a3-b625-b4b50dd247ea",
      samlv2PopulateId: "56ee2196-df77-4ad5-91b1-401eaac7241a",
      selfServiceRegistrationValidationId: "ea6430f6-e744-4312-86dc-35032c76f1d7",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "edcf29d6-3826-464e-b53b-13db0c1c69ff",
      },
      loginPolicy: MultiFactorLoginPolicy.Disabled,
      sms: {
        templateId: "56f117f5-1aaf-4a3a-aaf7-ccdb6bfb3b21",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.None,
    },
    name: "Alvin Mosciski",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "nobis",
        "repellat",
        "optio",
      ],
      authorizedRedirectURLs: [
        "voluptates",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.NotRequired,
      clientId: "numquam",
      clientSecret: "magnam",
      debug: false,
      deviceVerificationURL: "ipsam",
      enabledGrants: [
        "quos",
        "eos",
        "architecto",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.AllApplications,
      logoutURL: "saepe",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequiredWhenUsingClientAuthentication,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "7b72721e-2741-495f-85cd-e0ec87ba17d5",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 12275,
      },
    },
    roles: [
      {
        description: "amet",
        id: "1302193c-3cfd-422b-8ee6-7c5cd71cd0d2",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Harriet Huel II",
      },
      {
        description: "vel",
        id: "68524365-79a0-49f2-8cef-24beda26cd9d",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Glenda Fritsch",
      },
      {
        description: "occaecati",
        id: "42d9465a-3d5b-4741-8759-25b80b941a38",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Lynne Kovacek DVM",
      },
    ],
    samlv2Configuration: {
      audience: "ipsa",
      authorizedRedirectURLs: [
        "cum",
      ],
      callbackURL: "illum",
      debug: false,
      defaultVerificationKeyId: "4b887774-b080-48f2-b2de-63f392780c2b",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "perspiciatis",
      },
      issuer: "aspernatur",
      keyId: "410ba920-8c78-4258-bbdc-cc80442d11b4",
      logout: {
        behavior: SAMLLogoutBehavior.AllParticipants,
        defaultVerificationKeyId: "d631be5b-1e70-451f-8500-2b4832ae6731",
        keyId: "81439173-1768-4204-b889-7b3aa7cc804f",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "633b640b-a784-45ee-ba10-0e532f49f573",
          url: "officia",
          xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      },
      logoutURL: "minus",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
      xmlSignatureLocation: XMLSignatureLocation.Assertion,
    },
    state: ObjectState.Inactive,
    tenantId: "2c5ecd75-738c-4046-a21d-87e546c91e27",
    themeId: "4a4d8113-de71-4945-a113-c304be5316c8",
    unverified: {
      behavior: UnverifiedBehavior.Allow,
    },
    verificationEmailTemplateId: "1936801b-1a60-47c2-acca-3d563d30e041",
    verificationStrategy: VerificationStrategy.ClickableLink,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "nam": {
        "dolorem": "eveniet",
        "hic": "quibusdam",
        "a": "in",
      },
      "nobis": {
        "enim": "ullam",
        "velit": "voluptatum",
        "neque": "inventore",
      },
    },
    deviceDescription: "est",
    deviceName: "totam",
    deviceType: "libero",
    ipAddress: "dolore",
    location: {
      city: "Deannafield",
      country: "Greece",
      displayString: "ad",
      latitude: 3666.89,
      longitude: 9461.91,
      region: "culpa",
      zipcode: "89122-9677",
    },
    os: "nesciunt",
    userAgent: "in",
  },
  role: {
    description: "aut",
    id: "b973eab6-7d54-461c-84c2-50936d9f12ba",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Jacqueline Schuppe",
  },
  sourceApplicationId: "aa6bac3e-da88-47ef-95fd-2187ee9f3c92",
}, "in").then((res: PatchApplicationRoleWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchApplicationWithId

Updates, via PATCH, the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchApplicationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchApplicationWithId("officia", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "85e4401c-0990-4f88-b1a1-951337e506c5",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "ad",
      applicationIds: [
        "50839d66-90fb-4508-86cb-14bc6c8e27e1",
      ],
      enabled: false,
      url: "minus",
      usernameModeration: {
        applicationId: "baf3d63f-64ec-4586-9de2-f491c570771f",
        enabled: false,
      },
    },
    data: {
      "a": {
        "nihil": "dolor",
        "expedita": "nesciunt",
      },
      "commodi": {
        "libero": "necessitatibus",
        "beatae": "provident",
        "neque": "soluta",
        "consequuntur": "eos",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "76d80bcd-21dd-4c9f-8a13-059668e8fde6",
      emailVerificationEmailTemplateId: "0e2be5f8-5f3c-466d-aeb1-432674234283",
      emailVerifiedEmailTemplateId: "c4405d8e-ee91-4b2b-a343-70fc0dc5b553",
      forgotPasswordEmailTemplateId: "f3fd38e3-1cbe-494d-85e1-d41f41ea15e3",
      loginIdInUseOnCreateEmailTemplateId: "8ae62ce6-0a14-4bdf-b38c-d2b5346d7c16",
      loginIdInUseOnUpdateEmailTemplateId: "91bf6e65-5a42-418e-96a0-5704411aface",
      loginNewDeviceEmailTemplateId: "f1757d4e-2e21-468b-bafd-cd23ef995cb5",
      loginSuspiciousEmailTemplateId: "e401a75d-1aaf-4dfd-a566-b027d3f6a014",
      passwordResetSuccessEmailTemplateId: "4c50d85b-a7ef-4bc2-9aa5-84fe101b5a2a",
      passwordUpdateEmailTemplateId: "971e16c0-672b-48a8-8fd0-dad475afc415",
      passwordlessEmailTemplateId: "1f790e7f-31b0-48ea-8674-f4c6659b73d5",
      setPasswordEmailTemplateId: "90299f4c-2f29-4f0b-9b49-13627b337456",
      twoFactorMethodAddEmailTemplateId: "f2f3d091-eed3-4e50-9b23-ed0a84325910",
      twoFactorMethodRemoveEmailTemplateId: "2c155c61-8f6b-4ec9-9a75-549526d00809",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 607468,
    },
    formConfiguration: {
      adminRegistrationFormId: "c8cfada8-be10-4687-ac02-2a06860b73ae",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "f80378d5-f919-419f-af23-b183f7eb6b4a",
    },
    id: "4fa0b9f2-8c9d-46a7-962a-75ed34eef606",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "2a4c30b4-9e22-47e7-a0ab-c22226ba4c6f",
      enabled: false,
      idTokenKeyId: "47af09aa-d5f5-4b93-9cec-98544e08f28b",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 843993,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.OneTimeUse,
      timeToLiveInSeconds: 808121,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "2c260976-47f1-4131-90be-b22414af40c8",
      idTokenPopulateId: "805bc715-e2b7-4800-a0b8-cb9feef2b4c6",
      samlv2PopulateId: "fa0fd35a-e2b1-4434-baea-70090ab25e23",
      selfServiceRegistrationValidationId: "6c701613-a366-4006-b3b2-a8ed1b8770d4",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "c2a9c9ea-6e0e-4dc5-ae7b-48283f83c6d7",
      },
      loginPolicy: MultiFactorLoginPolicy.Required,
      sms: {
        templateId: "73d7c9e0-3fa3-4868-9619-2a96380573eb",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.Any,
    },
    name: "David Kuhlman",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "dolore",
      ],
      authorizedRedirectURLs: [
        "quos",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.NotRequired,
      clientId: "aliquid",
      clientSecret: "aut",
      debug: false,
      deviceVerificationURL: "architecto",
      enabledGrants: [
        "similique",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.AllApplications,
      logoutURL: "quidem",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequiredWhenUsingClientAuthentication,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "2ec5dd43-786b-47f2-a5f2-e09a6e025d42",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 325550,
      },
    },
    roles: [
      {
        description: "reiciendis",
        id: "915bc697-a1d7-4553-9d15-2653a77c1257",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Blanche Howe",
      },
    ],
    samlv2Configuration: {
      audience: "libero",
      authorizedRedirectURLs: [
        "ullam",
      ],
      callbackURL: "earum",
      debug: false,
      defaultVerificationKeyId: "07a4f6e9-60ae-4201-a54d-0691dae6d209",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "dolore",
      },
      issuer: "quisquam",
      keyId: "cec330b4-ec47-4291-8a49-78b87c53216b",
      logout: {
        behavior: SAMLLogoutBehavior.AllParticipants,
        defaultVerificationKeyId: "a6b57c8e-1f33-4a10-8e5d-abc8345f9486",
        keyId: "ca1528ed-1886-459b-83f5-1c85df4eb2f9",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "126d4d74-0877-4a47-9599-a0767e4038a8",
          url: "commodi",
          xmlSignatureC14nMethod: CanonicalizationMethod.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      },
      logoutURL: "quasi",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Assertion,
    },
    state: ObjectState.Active,
    tenantId: "837500c4-e6dc-48ae-8b07-2f11a802a1d3",
    themeId: "29b1d1dd-86f7-4536-a7f5-eac60682c9fc",
    unverified: {
      behavior: UnverifiedBehavior.Gated,
    },
    verificationEmailTemplateId: "5ce07e73-f61d-48bd-8894-39ff35030527",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "eaque": {
        "quae": "quas",
      },
    },
    deviceDescription: "ratione",
    deviceName: "maiores",
    deviceType: "quidem",
    ipAddress: "veniam",
    location: {
      city: "Miami Beach",
      country: "Venezuela",
      displayString: "modi",
      latitude: 7256.33,
      longitude: 679.53,
      region: "repudiandae",
      zipcode: "57547",
    },
    os: "recusandae",
    userAgent: "aliquam",
  },
  role: {
    description: "magnam",
    id: "65970d72-4f1c-431f-bb1b-56fc5dc1e5be",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Ben Graham",
  },
  sourceApplicationId: "251ef035-2fcc-41e2-8d4e-5afa9260eafd",
}, "explicabo").then((res: PatchApplicationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchConnectorWithId

Updates, via PATCH, the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchConnectorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchConnectorWithId("architecto", {
  connector: {
    data: {
      "beatae": {
        "odit": "atque",
        "cumque": "explicabo",
        "maxime": "animi",
        "repellat": "officia",
      },
      "animi": {
        "id": "beatae",
        "eveniet": "illum",
      },
      "corporis": {
        "quo": "eos",
        "ad": "dolorem",
        "ex": "at",
      },
    },
    debug: false,
    id: "de2ffa75-98a4-466d-b94e-0f2b1b66d3ba",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Gene Haley",
    type: ConnectorType.Generic,
  },
}).then((res: PatchConnectorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchConsentWithId

Updates, via PATCH, the consent with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchConsentWithId("esse", {
  consent: {
    consentEmailTemplateId: "46921bb9-dc3d-43f6-958e-c52f0a1671d5",
    countryMinimumAgeForSelfConsent: {
      "inventore": "eum",
    },
    data: {
      "veritatis": {
        "beatae": "quidem",
      },
    },
    defaultMinimumAgeForSelfConsent: 957240,
    emailPlus: {
      emailTemplateId: "52ef5c51-4bf8-4213-899e-d55effdc98ad",
      enabled: false,
      maximumTimeToSendEmailInHours: 313265,
      minimumTimeToSendEmailInHours: 914734,
    },
    id: "ff322aa4-d931-4629-a451-7dcfefa85b7e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Genevieve McLaughlin",
    values: [
      "minus",
      "aliquam",
      "neque",
      "amet",
    ],
  },
}, "eos").then((res: PatchConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchEmailTemplateWithId

Updates, via PATCH, the email template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchEmailTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchEmailTemplateWithId("totam", {
  emailTemplate: {
    defaultFromName: "totam",
    defaultHtmlTemplate: "quae",
    defaultSubject: "veritatis",
    defaultTextTemplate: "incidunt",
    fromEmail: "labore",
    id: "5fec33a1-7ad3-4445-9d8c-05a9fa9f4c73",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "nesciunt": "dolore",
      "iure": "cum",
    },
    localizedHtmlTemplates: {
      "nobis": "necessitatibus",
      "dolores": "repellat",
      "rerum": "corporis",
    },
    localizedSubjects: {
      "exercitationem": "incidunt",
      "amet": "doloribus",
      "quasi": "quidem",
      "molestiae": "cupiditate",
    },
    localizedTextTemplates: {
      "quibusdam": "exercitationem",
      "libero": "labore",
    },
    name: "Ms. Al Osinski",
  },
}, "pariatur").then((res: PatchEmailTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchEntityTypeWithId

Updates, via PATCH, the Entity Type with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchEntityTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchEntityTypeWithId("eum", {
  entityType: {
    data: {
      "explicabo": {
        "consequuntur": "dolore",
      },
    },
    id: "67bd0ac7-0218-4127-9d6f-2fe05665bf80",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "42704364-16ea-4e73-afa8-a0c3494876e4",
      enabled: false,
      timeToLiveInSeconds: 50363,
    },
    lastUpdateInstant: 1659380719000,
    name: "Mr. Marty Hane",
    permissions: [
      {
        data: {
          "molestias": {
            "possimus": "consequatur",
            "earum": "quis",
          },
        },
        description: "tenetur",
        id: "4ad180f5-1d7b-4656-ae01-3d802371dd28",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss Ira Stiedemann",
      },
      {
        data: {
          "quidem": {
            "error": "nemo",
          },
        },
        description: "blanditiis",
        id: "6c2d9d56-ab52-4841-8e24-0c806df0bd82",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss Irma Jacobi",
      },
      {
        data: {
          "magnam": {
            "sequi": "ullam",
            "voluptate": "veniam",
            "placeat": "consectetur",
            "odit": "doloribus",
          },
          "natus": {
            "eum": "ipsum",
            "quae": "sit",
            "temporibus": "totam",
          },
          "nam": {
            "deserunt": "rem",
            "eos": "odio",
            "sunt": "quidem",
            "saepe": "temporibus",
          },
          "saepe": {
            "ipsum": "laudantium",
            "nostrum": "tempora",
            "numquam": "maiores",
          },
        },
        description: "animi",
        id: "54a57715-3b45-4fa8-9cea-b52e39aa769b",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Marie Dach",
      },
    ],
  },
  permission: {
    data: {
      "fugit": {
        "provident": "possimus",
      },
      "aliquam": {
        "pariatur": "consequatur",
      },
    },
    description: "voluptate",
    id: "bddfc1f1-6450-4f44-9bc5-3c3055a9b2f8",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Lydia Walter Sr.",
  },
}).then((res: PatchEntityTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchGroupWithId

Updates, via PATCH, the group with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchGroupWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchGroupWithId("perferendis", {
  group: {
    data: {
      "possimus": {
        "error": "asperiores",
        "quae": "in",
        "nisi": "recusandae",
        "maxime": "atque",
      },
      "quaerat": {
        "delectus": "quis",
        "fuga": "culpa",
        "nam": "amet",
      },
      "doloribus": {
        "optio": "vero",
        "dolorum": "molestiae",
        "officia": "labore",
        "fugiat": "tempore",
      },
      "animi": {
        "consequatur": "aliquam",
      },
    },
    id: "a770927c-03eb-4e97-8eae-7c1f5287065e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Jesse Huels",
    roles: [
      {
        description: "beatae",
        id: "bdbf994c-ccd7-401c-8668-b01124392ddd",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mr. Timmy Hane",
      },
    ],
    tenantId: "3fc844bd-87e7-40be-906e-91b403123b78",
  },
  roleIds: [
    "d6c03820-e56a-474f-9f81-21e94b65949a",
    "f2086e28-e9fb-4579-b21e-e608b2fdb8fb",
    "1688e148-364e-4898-8521-bbcf47a2fa71",
  ],
}, "amet").then((res: PatchGroupWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchIdentityProviderWithId

Updates, via PATCH, the identity provider with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  CanonicalizationMethod,
  ClientAuthenticationMethod,
  IdentityProviderLinkingStrategy,
  IdentityProviderLoginMethod,
  IdentityProviderType,
  SAMLv2DestinationAssertionPolicy,
  SteamAPIMode,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchIdentityProviderWithId("tempore", {
  identityProvider: {
    assertionConfiguration: {
      destination: {
        alternates: [
          "eaque",
          "distinctio",
        ],
        policy: SAMLv2DestinationAssertionPolicy.AllowAlternates,
      },
    },
    buttonImageURL: "accusantium",
    buttonText: "quis",
    domains: [
      "porro",
      "aliquam",
    ],
    emailClaim: "maxime",
    idpEndpoint: "voluptates",
    idpInitiatedConfiguration: {
      enabled: false,
      issuer: "repellendus",
    },
    issuer: "laborum",
    keyId: "4606ea54-c0f1-415c-9701-7bcd907e36e5",
    loginHintConfiguration: {
      enabled: false,
      parameterName: "assumenda",
    },
    nameIdFormat: "perferendis",
    postRequest: false,
    requestSigningKeyId: "9328f058-16f2-4a50-a221-097b6d48ab20",
    signRequest: false,
    uniqueIdClaim: "ipsa",
    useNameIdForEmail: false,
    usernameClaim: "impedit",
    xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
  },
}).then((res: PatchIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchIntegrationsWithId

Updates, via PATCH, the available integrations.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchIntegrationsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchIntegrationsWithId({
  integrations: {
    cleanspeak: {
      apiKey: "molestiae",
      applicationIds: [
        "91808fe8-65d4-41a4-855a-192878a4ee62",
      ],
      enabled: false,
      url: "eaque",
      usernameModeration: {
        applicationId: "8285e364-c84c-4705-a773-1e30b9ebed5f",
        enabled: false,
      },
    },
    kafka: {
      defaultTopic: "perspiciatis",
      enabled: false,
      producer: {
        "ex": "repellat",
        "eum": "aliquam",
      },
    },
  },
}).then((res: PatchIntegrationsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchLambdaWithId

Updates, via PATCH, the lambda with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchLambdaWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchLambdaWithId("eos", {
  lambda: {
    body: "libero",
    debug: false,
    engineType: LambdaEngineType.Nashorn,
    id: "041bdfe4-d8bb-41b7-ad41-80b77ee7bde4",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Claude Blanda",
    type: LambdaType.FacebookReconcile,
  },
}).then((res: PatchLambdaWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchMessageTemplateWithId

Updates, via PATCH, the message template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchMessageTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchMessageTemplateWithId("pariatur", {
  messageTemplate: {
    data: {
      "neque": {
        "amet": "unde",
        "quos": "doloribus",
        "eaque": "praesentium",
        "dicta": "similique",
      },
    },
    id: "5d8ffa90-119e-495e-b438-54b27bab2d13",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Everett Daugherty",
    type: MessageType.Sms,
  },
}).then((res: PatchMessageTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchMessengerWithId

Updates, via PATCH, the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchMessengerWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchMessengerWithId("fugiat", {
  messenger: {
    data: {
      "iste": {
        "nostrum": "repellendus",
        "hic": "beatae",
      },
      "deleniti": {
        "repellendus": "provident",
      },
      "fugit": {
        "nostrum": "cum",
        "tempore": "blanditiis",
        "molestias": "omnis",
      },
      "voluptatibus": {
        "ab": "ab",
        "consequatur": "ad",
        "a": "dignissimos",
        "ad": "itaque",
      },
    },
    debug: false,
    id: "1e1fd978-4f58-4d76-9790-74f47ade5bcc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Stacey Breitenberg",
    transport: "modi",
    type: MessengerType.Kafka,
  },
}).then((res: PatchMessengerWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchRegistrationWithId

Updates, via PATCH, the registration for the user with the given id and the application defined in the request.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchRegistrationWithId("magnam", {
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "optio": {
        "commodi": "explicabo",
      },
      "quas": {
        "debitis": "quae",
        "labore": "aut",
        "sapiente": "at",
        "delectus": "voluptate",
      },
      "eum": {
        "quasi": "ducimus",
        "blanditiis": "porro",
      },
    },
    deviceDescription: "eum",
    deviceName: "maiores",
    deviceType: "iure",
    ipAddress: "dolor",
    location: {
      city: "Port Osbornechester",
      country: "Saint Kitts and Nevis",
      displayString: "nesciunt",
      latitude: 3786.67,
      longitude: 3871.54,
      region: "aperiam",
      zipcode: "47062",
    },
    os: "commodi",
    userAgent: "libero",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "182e7208-fdbf-481c-9bae-4d0d9318a3ed",
    authenticationToken: "repellat",
    cleanSpeakId: "81441dbd-542c-47aa-aa41-399f388a06fe",
    data: {
      "ipsum": {
        "ea": "tenetur",
      },
    },
    id: "0df8ea4e-dd79-451c-a21e-23540aa52393",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    roles: [
      "numquam",
      "quidem",
    ],
    timezone: "America/Denver",
    tokens: {
      "tenetur": "placeat",
    },
    username: "Marcelino.Homenick2",
    usernameStatus: ContentStatus.Pending,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
    cleanSpeakId: "826ad0bd-4129-49e6-8e9c-af89f21a26b9",
    connectorId: "59a2ac9d-7fb4-469e-a1ef-d2839031657c",
    data: {
      "minus": {
        "exercitationem": "nihil",
      },
    },
    email: "Vincenza.Kilback@yahoo.com",
    encryptionScheme: "doloribus",
    expiry: 1659380719000,
    factor: 430678,
    firstName: "Lina",
    fullName: "illo",
    id: "89d88202-9221-42fa-a2b2-59a381fea804",
    imageUrl: "voluptate",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Bailey",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "dicta": {
            "at": "similique",
            "aliquid": "nemo",
            "ab": "atque",
            "laboriosam": "odit",
          },
          "eum": {
            "repudiandae": "vitae",
            "incidunt": "alias",
            "itaque": "sint",
          },
          "ipsum": {
            "corrupti": "dolor",
            "excepturi": "saepe",
          },
          "totam": {
            "illo": "fuga",
            "aspernatur": "voluptatem",
          },
        },
        groupId: "4491e4c9-b81e-43ef-b36f-e6e587fd77fa",
        id: "ef481834-6264-4aa6-8592-cea5d248e3ef",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.ExactMatch,
          cleanSpeakId: "1d8f9142-bdef-44c9-b919-eb003267543b",
          connectorId: "42c7e903-dc8f-47c9-b7a7-db36b65c4f9c",
          data: {
            "voluptas": {
              "fuga": "ad",
              "facere": "nulla",
            },
            "nisi": {
              "praesentium": "ullam",
            },
            "fugit": {
              "iure": "ad",
              "quisquam": "velit",
              "ut": "a",
              "eum": "velit",
            },
            "exercitationem": {
              "voluptatum": "est",
              "ex": "explicabo",
            },
          },
          email: "Jaylin67@hotmail.com",
          encryptionScheme: "natus",
          expiry: 1659380719000,
          factor: 149126,
          firstName: "Nicolas",
          fullName: "vitae",
          id: "77d55a91-7540-4504-92ff-158f09d3516b",
          imageUrl: "dolore",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Reilly",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "aliquid",
          mobilePhone: "vero",
          parentEmail: "perspiciatis",
          password: "suscipit",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "73a369fb-f3c0-433b-bb71-edf1a101205f",
              authenticationToken: "cumque",
              cleanSpeakId: "d7f04850-6e0a-49f9-876a-cf69e2b01dc6",
              data: {
                "quam": {
                  "consequatur": "doloremque",
                },
                "error": {
                  "saepe": "optio",
                },
                "quasi": {
                  "beatae": "possimus",
                  "similique": "libero",
                  "illum": "iure",
                  "culpa": "id",
                },
                "modi": {
                  "ex": "blanditiis",
                  "repellendus": "ipsam",
                },
              },
              id: "75d167d3-8894-4521-81a4-e7952c73d8f6",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "fugit",
                "accusamus",
                "quidem",
              ],
              timezone: "America/Denver",
              tokens: {
                "doloribus": "corrupti",
                "dolorum": "blanditiis",
              },
              username: "Macy.Luettgen79",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "c1d11fb5-dfd9-4295-a814-438cdc5e98d7",
              authenticationToken: "esse",
              cleanSpeakId: "dbde5390-e505-4011-b41d-87c45b1a5091",
              data: {
                "incidunt": {
                  "repellendus": "ratione",
                  "tenetur": "optio",
                  "laudantium": "consequuntur",
                  "sequi": "ipsam",
                },
              },
              id: "9601935d-87b8-434e-94a9-b964611a0ed5",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "labore",
                "dolor",
                "soluta",
              ],
              timezone: "America/Denver",
              tokens: {
                "distinctio": "eius",
                "ipsa": "delectus",
                "eos": "quasi",
              },
              username: "Serena25",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "6f8b69aa-c02c-40bf-b5d9-222cc62ad9bc",
              authenticationToken: "officia",
              cleanSpeakId: "259ae724-96f4-4190-83e0-891a402795dc",
              data: {
                "porro": {
                  "tempore": "dignissimos",
                  "alias": "consectetur",
                  "ratione": "possimus",
                  "consequatur": "eum",
                },
                "asperiores": {
                  "earum": "minima",
                  "totam": "repudiandae",
                },
              },
              id: "37953e60-df85-4dad-984d-17ced2468ec3",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "unde",
                "aliquid",
                "distinctio",
                "quisquam",
              ],
              timezone: "America/Denver",
              tokens: {
                "quaerat": "pariatur",
                "odio": "quod",
              },
              username: "Aurelio.Crona",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "33c31c57-6217-41eb-ab26-7a7dcc8810f6",
              authenticationToken: "voluptates",
              cleanSpeakId: "f885157b-21b1-4bd0-bf36-8b029996f35c",
              data: {
                "ipsa": {
                  "cupiditate": "aspernatur",
                },
                "doloremque": {
                  "consequuntur": "assumenda",
                  "excepturi": "repellendus",
                  "nostrum": "minus",
                  "officiis": "cumque",
                },
                "iste": {
                  "itaque": "fugit",
                },
              },
              id: "e68b7d6b-023f-4c3c-a10c-6dbd14e84b32",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "omnis",
                "adipisci",
                "dicta",
                "ipsum",
              ],
              timezone: "America/Denver",
              tokens: {
                "consequatur": "nam",
                "eaque": "inventore",
                "natus": "repellat",
                "fugiat": "itaque",
              },
              username: "Hilma.Ziemann60",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
          ],
          salt: "in",
          tenantId: "719429fa-f83d-47c4-b8f7-f79d5fa170fa",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 682558,
                  timeStep: 1509,
                },
                email: "Mikel.Price59@hotmail.com",
                id: "e790b8aa-eeb7-4d38-81a2-d2489ca70b3e",
                lastUsed: false,
                method: "rerum",
                mobilePhone: "porro",
                secret: "repellat",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 299494,
                  timeStep: 205319,
                },
                email: "Clarabelle.Kshlerin@hotmail.com",
                id: "5755fa10-cb6c-4f6f-bbd1-62ac9ac403b3",
                lastUsed: false,
                method: "modi",
                mobilePhone: "non",
                secret: "perspiciatis",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 824453,
                  timeStep: 421673,
                },
                email: "Angeline81@yahoo.com",
                id: "2018f6cc-cf96-4343-a183-7203639431a6",
                lastUsed: false,
                method: "ducimus",
                mobilePhone: "eaque",
                secret: "magnam",
              },
            ],
            recoveryCodes: [
              "voluptatibus",
              "soluta",
              "autem",
              "porro",
            ],
          },
          uniqueUsername: "perspiciatis",
          username: "Baylee_Torp",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        userId: "aa791e4c-7260-4b56-ad35-8d797dbe0fbc",
      },
      {
        data: {
          "quo": {
            "architecto": "consequatur",
          },
          "expedita": {
            "error": "quas",
            "voluptate": "ex",
            "quas": "suscipit",
            "cumque": "nulla",
          },
          "nemo": {
            "quo": "blanditiis",
            "dicta": "eius",
            "necessitatibus": "dignissimos",
          },
        },
        groupId: "30896d13-d82e-48e2-afda-442d20f479a3",
        id: "3cbd485c-1e20-4482-a90d-c50593fb66c1",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
          cleanSpeakId: "19d90a60-989d-4c35-9f6c-8662b908632c",
          connectorId: "11023c6e-e416-4d28-8a2e-4676be0a7ba5",
          data: {
            "facilis": {
              "sunt": "delectus",
              "dolor": "incidunt",
            },
            "nobis": {
              "facilis": "itaque",
            },
          },
          email: "Cecelia27@yahoo.com",
          encryptionScheme: "cupiditate",
          expiry: 1659380719000,
          factor: 985415,
          firstName: "Jodie",
          fullName: "quasi",
          id: "0ee5617f-047f-48c4-9791-3fd0de398165",
          imageUrl: "sunt",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Durgan",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "sunt",
          mobilePhone: "et",
          parentEmail: "placeat",
          password: "dignissimos",
          passwordChangeReason: ChangePasswordReason.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "f2588fe3-d738-48fc-a5cc-3668baf4e9f0",
              authenticationToken: "voluptatem",
              cleanSpeakId: "36ea64f1-2f70-4804-8e9d-57f258d955a6",
              data: {
                "sint": {
                  "distinctio": "voluptas",
                  "ab": "ullam",
                  "sit": "mollitia",
                  "labore": "inventore",
                },
                "deleniti": {
                  "aut": "qui",
                  "officiis": "aut",
                },
                "sint": {
                  "repellat": "aliquam",
                  "debitis": "fugiat",
                  "sint": "fuga",
                  "dignissimos": "tenetur",
                },
                "eos": {
                  "assumenda": "eligendi",
                  "quae": "consequatur",
                  "porro": "similique",
                  "assumenda": "voluptas",
                },
              },
              id: "d5711800-faa2-4d5d-842f-f5a2176f56b8",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "natus",
                "dolor",
                "atque",
              ],
              timezone: "America/Denver",
              tokens: {
                "cupiditate": "in",
                "mollitia": "esse",
                "provident": "hic",
              },
              username: "Matilda_Sporer",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "illum",
          tenantId: "7889b0c1-9dd0-471f-8029-d6a15880f62c",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 858261,
                  timeStep: 207779,
                },
                email: "Hellen_Bartoletti11@yahoo.com",
                id: "aaaea618-a67f-4508-bd83-80b5ccb68aa6",
                lastUsed: false,
                method: "eius",
                mobilePhone: "vero",
                secret: "deserunt",
              },
            ],
            recoveryCodes: [
              "ab",
              "ullam",
              "incidunt",
            ],
          },
          uniqueUsername: "earum",
          username: "Alana85",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "604a7de7-0896-4514-a9e6-14be4b47a027",
      },
    ],
    middleName: "impedit",
    mobilePhone: "accusamus",
    parentEmail: "optio",
    password: "culpa",
    passwordChangeReason: ChangePasswordReason.Expired,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "0f21fbd7-b256-400b-a03f-89992c4656a0",
        authenticationToken: "assumenda",
        cleanSpeakId: "f757df37-f98d-4963-85a0-5130a18f2aad",
        data: {
          "voluptatem": {
            "magni": "labore",
          },
          "ipsam": {
            "consequatur": "dicta",
            "sint": "amet",
            "et": "impedit",
          },
          "tempore": {
            "dignissimos": "rem",
            "molestias": "cumque",
          },
        },
        id: "c279c206-b70a-48e8-b052-e9a99547f16b",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "non",
          "ratione",
          "quisquam",
          "incidunt",
        ],
        timezone: "America/Denver",
        tokens: {
          "ipsa": "modi",
          "aspernatur": "sint",
          "ex": "hic",
          "quod": "consectetur",
        },
        username: "Javon36",
        usernameStatus: ContentStatus.Rejected,
        verified: false,
      },
      {
        applicationId: "09417b2e-d4e4-4d4c-84eb-011a255a428e",
        authenticationToken: "architecto",
        cleanSpeakId: "bdfacf8d-a156-4f54-8d0c-016e37aa90a8",
        data: {
          "vitae": {
            "asperiores": "odit",
            "ea": "veniam",
            "deleniti": "veritatis",
          },
        },
        id: "99ab6f11-dc49-4c03-bf64-17d397addb57",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "natus",
        ],
        timezone: "America/Denver",
        tokens: {
          "recusandae": "incidunt",
        },
        username: "Orin.Reichert",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
    ],
    salt: "veniam",
    tenantId: "4ac19316-937d-4c54-988e-b9ae087bff14",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 493731,
            timeStep: 748246,
          },
          email: "Kenna_Streich@yahoo.com",
          id: "00ab459f-1a19-4915-8974-8b88b923bc92",
          lastUsed: false,
          method: "nobis",
          mobilePhone: "porro",
          secret: "occaecati",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha512,
            codeLength: 91018,
            timeStep: 51089,
          },
          email: "Rickie36@gmail.com",
          id: "af288e2c-28f4-4dfb-8c6b-713bdc273d9a",
          lastUsed: false,
          method: "magni",
          mobilePhone: "soluta",
          secret: "dolor",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 975361,
            timeStep: 925829,
          },
          email: "Lynn_Gerhold24@yahoo.com",
          id: "bbcb2281-d3db-473b-8fc5-c3d1cf21de20",
          lastUsed: false,
          method: "consectetur",
          mobilePhone: "rem",
          secret: "minus",
        },
      ],
      recoveryCodes: [
        "veniam",
        "molestias",
        "quod",
        "dolorum",
      ],
    },
    uniqueUsername: "similique",
    username: "Linda55",
    usernameStatus: ContentStatus.Pending,
    verified: false,
  },
}, "harum").then((res: PatchRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchSystemConfigurationWithId

Updates, via PATCH, the system configuration.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchSystemConfigurationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { HTTPMethod } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchSystemConfigurationWithId({
  systemConfiguration: {
    auditLogConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 355763,
      },
    },
    corsConfiguration: {
      allowCredentials: false,
      allowedHeaders: [
        "maxime",
        "delectus",
        "doloremque",
        "quia",
      ],
      allowedMethods: [
        HTTPMethod.Options,
        HTTPMethod.Delete,
        HTTPMethod.Patch,
      ],
      allowedOrigins: [
        "earum",
      ],
      debug: false,
      enabled: false,
      exposedHeaders: [
        "reiciendis",
        "praesentium",
        "impedit",
        "iusto",
      ],
      preflightMaxAgeInSeconds: 435173,
    },
    data: {
      "quidem": {
        "nam": "voluptate",
      },
      "corporis": {
        "animi": "iure",
        "expedita": "ducimus",
        "neque": "ex",
      },
    },
    eventLogConfiguration: {
      numberToRetain: 544326,
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    loginRecordConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 626449,
      },
    },
    reportTimezone: "America/Denver",
    uiConfiguration: {
      headerColor: "illum",
      logoURL: "reprehenderit",
      menuFontColor: "est",
    },
  },
}).then((res: PatchSystemConfigurationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchTenantWithId

Updates, via PATCH, the tenant with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchTenantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchTenantWithId("soluta", {
  eventInfo: {
    data: {
      "delectus": {
        "corporis": "consequatur",
        "libero": "amet",
        "rerum": "amet",
        "id": "optio",
      },
      "soluta": {
        "voluptatem": "quos",
        "qui": "quia",
        "ut": "magnam",
        "omnis": "commodi",
      },
      "possimus": {
        "necessitatibus": "unde",
        "asperiores": "iste",
        "omnis": "magni",
        "blanditiis": "voluptatibus",
      },
      "minima": {
        "aliquam": "quisquam",
        "est": "modi",
      },
    },
    deviceDescription: "distinctio",
    deviceName: "quisquam",
    deviceType: "in",
    ipAddress: "similique",
    location: {
      city: "West Rafaelaside",
      country: "Sri Lanka",
      displayString: "sint",
      latitude: 3417.43,
      longitude: 7005.88,
      region: "fugiat",
      zipcode: "79161",
    },
    os: "aliquam",
    userAgent: "similique",
  },
  sourceTenantId: "2a011815-33e4-49f2-9581-d823bfa894cb",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "712cd3d2-7249-4beb-b77f-424df546e657",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethod.HCaptcha,
      enabled: false,
      secretKey: "vel",
      siteKey: "numquam",
      threshold: 1280.62,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "2eec2e1a-e64d-411e-82b7-1405de489df2",
        data: {
          "veniam": {
            "praesentium": "autem",
            "ipsam": "optio",
            "excepturi": "saepe",
            "cumque": "sed",
          },
          "vel": {
            "corporis": "autem",
            "debitis": "quibusdam",
            "itaque": "corporis",
            "delectus": "pariatur",
          },
        },
        domains: [
          "quidem",
          "earum",
          "vero",
        ],
        migrate: false,
      },
      {
        connectorId: "225fa343-1367-4bec-9a21-07eedd2bb628",
        data: {
          "consequuntur": {
            "sunt": "animi",
            "vero": "hic",
            "et": "odit",
            "tenetur": "repudiandae",
          },
        },
        domains: [
          "vero",
        ],
        migrate: false,
      },
    ],
    data: {
      "aliquam": {
        "dolorum": "adipisci",
        "nam": "sit",
        "quo": "unde",
        "a": "quas",
      },
      "ullam": {
        "maxime": "mollitia",
        "occaecati": "nemo",
        "illum": "nemo",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Oscar Berge",
          value: "consequuntur",
        },
        {
          name: "Brian Beatty",
          value: "architecto",
        },
      ],
      debug: false,
      defaultFromEmail: "nam",
      defaultFromName: "quo",
      emailUpdateEmailTemplateId: "2298c551-fd04-458f-a957-31151beb401a",
      emailVerifiedEmailTemplateId: "0035bb6b-f383-4c5e-b0e3-cb7ec0442cb7",
      forgotPasswordEmailTemplateId: "8146a8b8-96c6-4ac5-92fd-fc2088822938",
      host: "ea",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "19ba7b40-3454-4990-8906-c0da273a07cf",
      loginIdInUseOnUpdateEmailTemplateId: "669e83bb-d3ea-41bd-9cfe-7eff11557b64",
      loginNewDeviceEmailTemplateId: "8e14033e-f4c4-4a56-b328-79582567ab7b",
      loginSuspiciousEmailTemplateId: "40e94b0e-8e1b-4d87-8167-d6f66a1ebaf3",
      password: "animi",
      passwordResetSuccessEmailTemplateId: "27388564-2376-40a9-b7ef-d2d7a002ef9f",
      passwordUpdateEmailTemplateId: "c0dcb6bc-c78e-4629-be40-e253fca9d8dd",
      passwordlessEmailTemplateId: "2f35fb1d-b2ef-4895-b6a3-4fe630a2a2e3",
      port: 898322,
      properties: "dolores",
      security: EmailSecurityType.None,
      setPasswordEmailTemplateId: "5031c7eb-3aa4-4939-90d3-4461df8c12b1",
      twoFactorMethodAddEmailTemplateId: "4c280184-b258-4182-b311-f39d277228dd",
      twoFactorMethodRemoveEmailTemplateId: "b8e0fb2c-c04e-4f83-b5f4-7b55e39232bf",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehavior.Gated,
      },
      username: "Sunny.Koelpin87",
      verificationEmailTemplateId: "7f759c39-c195-4c04-b75c-a1f2fa720ff1",
      verificationStrategy: VerificationStrategy.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "quisquam": {
          enabled: false,
          transactionType: TransactionType.Any,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 10677,
      changePasswordIdGenerator: {
        length: 761880,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      changePasswordIdTimeToLiveInSeconds: 626195,
      deviceCodeTimeToLiveInSeconds: 333289,
      deviceUserCodeIdGenerator: {
        length: 600114,
        type: SecureGeneratorType.RandomAlpha,
      },
      emailVerificationIdGenerator: {
        length: 519831,
        type: SecureGeneratorType.RandomDigits,
      },
      emailVerificationIdTimeToLiveInSeconds: 626355,
      emailVerificationOneTimeCodeGenerator: {
        length: 75840,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 246956,
      oneTimePasswordTimeToLiveInSeconds: 232964,
      passwordlessLoginGenerator: {
        length: 511933,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      passwordlessLoginTimeToLiveInSeconds: 866681,
      pendingAccountLinkTimeToLiveInSeconds: 336097,
      registrationVerificationIdGenerator: {
        length: 38183,
        type: SecureGeneratorType.RandomAlpha,
      },
      registrationVerificationIdTimeToLiveInSeconds: 897655,
      registrationVerificationOneTimeCodeGenerator: {
        length: 92845,
        type: SecureGeneratorType.RandomDigits,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 76004,
      setupPasswordIdGenerator: {
        length: 315922,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      setupPasswordIdTimeToLiveInSeconds: 690211,
      trustTokenTimeToLiveInSeconds: 635320,
      twoFactorIdTimeToLiveInSeconds: 927991,
      twoFactorOneTimeCodeIdGenerator: {
        length: 299798,
        type: SecureGeneratorType.RandomDigits,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 800693,
      twoFactorTrustIdTimeToLiveInSeconds: 401443,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 239641,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 279307,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 486587,
      actionDurationUnit: ExpiryUnit.Weeks,
      emailUser: false,
      resetCountInSeconds: 25419,
      tooManyAttempts: 798390,
      userActionId: "a9430221-dd21-4fe6-9b9d-bfa348c74d3e",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "58ab91e6-31c1-41e9-9f4f-6220b786d91f",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 325504,
      enabled: false,
      familyRequestEmailTemplateId: "2d2397ad-5caa-4deb-b0f6-00321968a120",
      maximumChildAge: 621862,
      minimumOwnerAge: 490227,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "a34e81e2-41c6-4ffb-b140-43ca0f566eb1",
    },
    formConfiguration: {
      adminUserFormId: "c19d8aef-63f7-4b31-a5ed-679f13afdaee",
    },
    httpSessionMaxInactiveInterval: 547120,
    id: "34bba958-580e-437e-a54a-96e98ed9ace0",
    insertInstant: 1659380719000,
    issuer: "optio",
    jwtConfiguration: {
      accessTokenKeyId: "45fb9b49-c8b6-4fdf-bc30-f00dac7f38b1",
      enabled: false,
      idTokenKeyId: "2078a16e-d36b-41bc-a1a0-3366acd9150c",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 114443,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.OneTimeUse,
      timeToLiveInSeconds: 201632,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "347815ce-a3ea-4e4b-989f-eff621e8093f",
      scimEnterpriseUserResponseConverterId: "4cf26f55-1e49-4a91-92c2-c7b88e0892c6",
      scimGroupRequestConverterId: "17d40351-84c5-4462-b058-d1a8feb47930",
      scimGroupResponseConverterId: "9d9e7c7e-2645-420f-a391-ceb44d303973",
      scimUserRequestConverterId: "ef344b02-57f4-45f0-b60d-81081e44f5d8",
      scimUserResponseConverterId: "45c27584-6904-4a91-80a5-356873c0e2dc",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "dolore",
    maximumPasswordAge: {
      days: 35399,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 813443,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithm.HmacSha256,
        codeLength: 649666,
        enabled: false,
        timeStep: 874443,
      },
      email: {
        enabled: false,
        templateId: "dd29f12b-a207-4e23-9dcc-765905fc45da",
      },
      loginPolicy: MultiFactorLoginPolicy.Required,
      sms: {
        enabled: false,
        messengerId: "9bbe0cc1-3aa4-4420-ab51-a9b8f13c6c36",
        templateId: "c7617607-2b9e-4ed7-90c6-d91e47aee9ca",
      },
    },
    name: "Nadine Heathcote",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "37463579-ffaa-4463-bd9e-e5dd327d667a",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "aperiam",
      encryptionSchemeFactor: 904643,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchMode.Medium,
        notifyUserEmailTemplateId: "91dc2e1b-4acc-4f79-9511-c2d8634d5b1b",
        onLogin: BreachAction.RecordOnly,
      },
      maxLength: 129508,
      minLength: 996730,
      rememberPreviousPasswords: {
        count: 764175,
        enabled: false,
      },
      requireMixedCase: false,
      requireNonAlpha: false,
      requireNumber: false,
      validateOnLogin: false,
    },
    rateLimitConfiguration: {
      failedLogin: {
        enabled: false,
        limit: 114373,
        timePeriodInSeconds: 248215,
      },
      forgotPassword: {
        enabled: false,
        limit: 875108,
        timePeriodInSeconds: 455459,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 1715,
        timePeriodInSeconds: 828798,
      },
      sendPasswordless: {
        enabled: false,
        limit: 732174,
        timePeriodInSeconds: 192806,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 424117,
        timePeriodInSeconds: 85964,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 189440,
        timePeriodInSeconds: 66043,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "voluptatibus",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "c047b3c4-2eaa-4f90-b8ae-ca44e4543031",
      enabled: false,
      schemas: {
        "a": {
          "rem": "sunt",
          "inventore": "dolorem",
          "voluptatum": "molestias",
        },
        "aliquam": {
          "minus": "ad",
          "aut": "quaerat",
        },
      },
      serverEntityTypeId: "6fa563be-9f88-4275-bcb1-bc13e667937e",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 901074,
    },
    state: ObjectState.PendingDelete,
    themeId: "809ce306-6dee-46e4-9358-d584e5873794",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 530721,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 311543,
        separator: "soluta",
        strategy: UniqueUsernameStrategy.Always,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Required,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.CrossPlatform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Preferred,
      },
      relyingPartyId: "veniam",
      relyingPartyName: "fugiat",
    },
  },
  webhookIds: [
    "0c075be3-8501-477f-81a1-909b77b755b3",
  ],
}, "beatae").then((res: PatchTenantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchThemeWithId

Updates, via PATCH, the theme with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchThemeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchThemeWithId("ipsam", {
  sourceThemeId: "18625bfb-d134-4f2a-b9bb-900bfd8048ad",
  theme: {
    data: {
      "itaque": {
        "eos": "quaerat",
        "nesciunt": "ipsa",
        "adipisci": "quia",
        "quod": "animi",
      },
    },
    defaultMessages: "nam",
    id: "e7aa80cd-0c30-4c4e-9edd-b8d7219f4849",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "laborum": "ducimus",
      "mollitia": "perferendis",
      "quasi": "aut",
      "quos": "voluptate",
    },
    name: "Dr. Desiree Abernathy",
    stylesheet: "animi",
    templates: {
      accountEdit: "incidunt",
      accountIndex: "voluptatum",
      accountTwoFactorDisable: "ex",
      accountTwoFactorEnable: "sed",
      accountTwoFactorIndex: "fugiat",
      accountWebAuthnAdd: "quae",
      accountWebAuthnDelete: "ad",
      accountWebAuthnIndex: "dolores",
      emailComplete: "quisquam",
      emailSend: "sunt",
      emailSent: "possimus",
      emailVerificationRequired: "aliquid",
      emailVerify: "est",
      helpers: "ex",
      index: "saepe",
      oauth2Authorize: "accusamus",
      oauth2AuthorizedNotRegistered: "dolorum",
      oauth2ChildRegistrationNotAllowed: "distinctio",
      oauth2ChildRegistrationNotAllowedComplete: "placeat",
      oauth2CompleteRegistration: "ab",
      oauth2Device: "quia",
      oauth2DeviceComplete: "cumque",
      oauth2Error: "libero",
      oauth2Logout: "iusto",
      oauth2Passwordless: "error",
      oauth2Register: "consequatur",
      oauth2StartIdPLink: "consequatur",
      oauth2TwoFactor: "corporis",
      oauth2TwoFactorEnable: "asperiores",
      oauth2TwoFactorEnableComplete: "dolor",
      oauth2TwoFactorMethods: "exercitationem",
      oauth2Wait: "modi",
      oauth2WebAuthn: "quae",
      oauth2WebAuthnReauth: "aspernatur",
      oauth2WebAuthnReauthEnable: "magni",
      passwordChange: "rerum",
      passwordComplete: "non",
      passwordForgot: "ad",
      passwordSent: "ullam",
      registrationComplete: "magni",
      registrationSend: "facilis",
      registrationSent: "nulla",
      registrationVerificationRequired: "quo",
      registrationVerify: "illum",
      samlv2Logout: "asperiores",
      unauthorized: "natus",
    },
  },
}).then((res: PatchThemeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchUserActionReasonWithId

Updates, via PATCH, the user action reason with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserActionReasonWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserActionReasonWithId("dolores", {
  userActionReason: {
    code: "eos",
    id: "48e6cce1-eb68-4fbd-9ec9-bb8ed8022cb8",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "perferendis": "eos",
      "voluptatibus": "quo",
      "explicabo": "nihil",
      "a": "sed",
    },
    text: "debitis",
  },
}).then((res: PatchUserActionReasonWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchUserActionWithId

Updates, via PATCH, the user action with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserActionWithId("illum", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "87041b58-76e0-467c-a0f8-61de79b3b87a",
    endEmailTemplateId: "2416d1fc-893f-47e6-b6a2-7f3f7e20dac1",
    id: "b6944de6-f229-445a-bb37-659be79aea98",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "aliquid": "ipsa",
      "odio": "eos",
    },
    modifyEmailTemplateId: "5d933ffa-6d1c-4b00-81e8-a874ff319a49",
    name: "Toby Pollich",
    options: [
      {
        localizedNames: {
          "consequatur": "ab",
          "laboriosam": "illo",
          "earum": "repudiandae",
        },
        name: "Gabriel Haag Sr.",
      },
      {
        localizedNames: {
          "eum": "optio",
        },
        name: "Pete Lebsack",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "3022e5bd-bee9-4f2a-99f8-52def3cafc09",
    temporal: false,
    transactionType: TransactionType.Any,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "laborum").then((res: PatchUserActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchUserConsentWithId

Updates, via PATCH, a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserConsentWithId("asperiores", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "2e1613eb-541e-4849-bdb3-504fda502d90",
      countryMinimumAgeForSelfConsent: {
        "quod": "deserunt",
      },
      data: {
        "labore": {
          "repellendus": "magni",
          "possimus": "quae",
        },
        "commodi": {
          "quas": "aperiam",
          "quas": "hic",
          "odio": "magnam",
        },
        "aliquid": {
          "sapiente": "labore",
          "eos": "neque",
          "doloribus": "voluptates",
          "corrupti": "quibusdam",
        },
      },
      defaultMinimumAgeForSelfConsent: 556370,
      emailPlus: {
        emailTemplateId: "95a4bbe5-7b78-4644-a7e3-feb0a077990f",
        enabled: false,
        maximumTimeToSendEmailInHours: 51123,
        minimumTimeToSendEmailInHours: 445663,
      },
      id: "172c5bcc-7398-408d-9bc6-643b7e290d0b",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Ramona Keebler",
      values: [
        "perspiciatis",
        "atque",
        "in",
        "quaerat",
      ],
    },
    consentId: "6afaf9b6-3ad7-497c-b9e6-06df8e0f2b1b",
    data: {
      "earum": {
        "velit": "dolor",
        "autem": "suscipit",
        "odit": "culpa",
      },
      "alias": {
        "dolores": "vitae",
        "quas": "ullam",
        "itaque": "amet",
      },
      "aperiam": {
        "pariatur": "delectus",
        "vitae": "vel",
      },
      "amet": {
        "magnam": "totam",
        "fuga": "architecto",
        "voluptate": "accusantium",
      },
    },
    giverUserId: "6ac8d8e0-c6fa-42cf-be2a-ab5498039b6d",
    id: "2272680a-3d19-4ac2-8053-d4a433e5f38b",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatus.Revoked,
    userId: "ff3bd9f3-7dd4-418b-8d99-cc4ee9c944de",
    values: [
      "saepe",
    ],
  },
}).then((res: PatchUserConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchUserWithId

Updates, via PATCH, the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserWithId("impedit", {
  applicationId: "9302266f-9485-4701-82bc-013c39251f93",
  currentPassword: "quia",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "mollitia": {
        "in": "fuga",
      },
      "maiores": {
        "saepe": "occaecati",
        "atque": "nesciunt",
        "accusantium": "quisquam",
      },
    },
    deviceDescription: "accusamus",
    deviceName: "repudiandae",
    deviceType: "molestias",
    ipAddress: "fugiat",
    location: {
      city: "North Carleton",
      country: "Burkina Faso",
      displayString: "atque",
      latitude: 2455.8,
      longitude: 5607.8,
      region: "animi",
      zipcode: "64423",
    },
    os: "sit",
    userAgent: "nihil",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
    cleanSpeakId: "fe7b08d6-7a02-4878-b942-0835728fb96c",
    connectorId: "739893da-ebcd-4441-94d8-add3608a6857",
    data: {
      "dolorem": {
        "eos": "ex",
      },
    },
    email: "Alison39@yahoo.com",
    encryptionScheme: "unde",
    expiry: 1659380719000,
    factor: 299812,
    firstName: "Aliyah",
    fullName: "deleniti",
    id: "8d11bcf7-8e58-40a5-b594-c0c8a9590abc",
    imageUrl: "sint",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Aufderhar",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "maiores": {
            "non": "dicta",
          },
          "tenetur": {
            "pariatur": "aperiam",
          },
          "laboriosam": {
            "dolorum": "veniam",
            "totam": "vel",
          },
          "aliquid": {
            "odit": "consequuntur",
            "dicta": "fugit",
            "tempore": "illum",
          },
        },
        groupId: "1d9b7f3e-aac2-4895-851a-e58af5fcc083",
        id: "715de569-2ab0-4a81-a8bf-c1315f4ecdb1",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.None,
          cleanSpeakId: "4b3e4e10-9e6e-4cfc-8e21-19758d190d20",
          connectorId: "6f672c42-a65f-4077-a69c-70a6bf345b2f",
          data: {
            "voluptatibus": {
              "error": "labore",
            },
            "soluta": {
              "maiores": "minus",
              "sapiente": "reprehenderit",
              "voluptatum": "soluta",
            },
            "adipisci": {
              "deserunt": "ea",
              "vero": "ullam",
              "illum": "natus",
              "soluta": "cum",
            },
            "doloremque": {
              "iure": "cumque",
              "magni": "voluptatum",
              "autem": "iure",
              "nemo": "repellat",
            },
          },
          email: "Quinn90@hotmail.com",
          encryptionScheme: "incidunt",
          expiry: 1659380719000,
          factor: 171663,
          firstName: "Aron",
          fullName: "accusamus",
          id: "96ee87bd-d653-48c0-8038-755b9ece5d61",
          imageUrl: "quisquam",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Boyer",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "laudantium",
          mobilePhone: "officia",
          parentEmail: "ea",
          password: "expedita",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "6cc8500e-1a46-4d80-93e6-9477ef38d34e",
              authenticationToken: "sunt",
              cleanSpeakId: "56b9ad9b-a607-48d3-b482-93f5a2e991d8",
              data: {
                "odio": {
                  "culpa": "consequuntur",
                },
              },
              id: "56c203e0-e560-47e3-9b8d-a3df9044ea3f",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "quas",
                "recusandae",
              ],
              timezone: "America/Denver",
              tokens: {
                "temporibus": "labore",
                "voluptates": "debitis",
                "neque": "beatae",
                "nobis": "minus",
              },
              username: "Ansel_Predovic",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "31afe010-12db-4c66-8096-b1de3e9d7558",
              authenticationToken: "natus",
              cleanSpeakId: "473927e8-912d-4202-9e64-3475699f33b3",
              data: {
                "recusandae": {
                  "eius": "fugiat",
                  "ducimus": "ducimus",
                  "ducimus": "alias",
                },
                "delectus": {
                  "ipsa": "doloribus",
                  "eos": "ad",
                  "ad": "repellat",
                },
                "quasi": {
                  "aspernatur": "eaque",
                },
                "quidem": {
                  "asperiores": "voluptas",
                  "cupiditate": "autem",
                },
              },
              id: "38656da3-290a-4d51-b0c7-574cc962cbbc",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "libero",
                "officia",
                "neque",
                "animi",
              ],
              timezone: "America/Denver",
              tokens: {
                "iusto": "ad",
                "nemo": "voluptatum",
                "repudiandae": "corrupti",
              },
              username: "Bernice.Sporer37",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "1ba91cd6-2d1f-4a29-ba76-c20ecf4fba28",
              authenticationToken: "maxime",
              cleanSpeakId: "930740da-f1ab-4165-bb38-ad1cfd902eaa",
              data: {
                "omnis": {
                  "odio": "iste",
                  "esse": "ipsa",
                  "hic": "accusamus",
                },
                "et": {
                  "officiis": "expedita",
                  "facilis": "alias",
                  "dolore": "laboriosam",
                  "reiciendis": "expedita",
                },
              },
              id: "ef0bf544-307a-455b-a7fd-555c271552db",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "laboriosam",
                "praesentium",
                "facere",
                "et",
              ],
              timezone: "America/Denver",
              tokens: {
                "omnis": "placeat",
                "laborum": "doloribus",
                "autem": "sit",
                "mollitia": "veritatis",
              },
              username: "Tess45",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "nihil",
          tenantId: "18dfc88f-d0ee-4157-8459-9716192cae9c",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 588722,
                  timeStep: 300329,
                },
                email: "Dessie_Moen@yahoo.com",
                id: "dd94b7e6-2ff9-4d13-81bf-4532b2e6a1c4",
                lastUsed: false,
                method: "laborum",
                mobilePhone: "eligendi",
                secret: "hic",
              },
            ],
            recoveryCodes: [
              "dolores",
            ],
          },
          uniqueUsername: "at",
          username: "Donny76",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "feeb1614-9a3f-4ec6-ac94-0fc121469161",
      },
    ],
    middleName: "distinctio",
    mobilePhone: "impedit",
    parentEmail: "consectetur",
    password: "rem",
    passwordChangeReason: ChangePasswordReason.Administrative,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "a3c21eca-ac9f-410f-b5e9-67f2a0a66c6b",
        authenticationToken: "laborum",
        cleanSpeakId: "0c829e3b-8de6-4b2f-9324-8000c3513bb6",
        data: {
          "quae": {
            "saepe": "quos",
          },
        },
        id: "0058ffd6-ab15-49d9-bfc6-9bf5e2dbbc19",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "aperiam",
          "sequi",
        ],
        timezone: "America/Denver",
        tokens: {
          "voluptate": "odio",
          "soluta": "delectus",
          "dignissimos": "quae",
          "aliquid": "in",
        },
        username: "Velva.Swift",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      {
        applicationId: "fc015c0f-ba65-41b7-99fc-951dac7d8a04",
        authenticationToken: "debitis",
        cleanSpeakId: "f1f81b84-1cb7-4a90-bd83-a0534d942e35",
        data: {
          "iste": {
            "tempore": "rerum",
            "reiciendis": "maiores",
            "temporibus": "earum",
            "temporibus": "voluptate",
          },
        },
        id: "33196889-4886-4956-99f6-e4f48360334b",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "quod",
          "at",
          "pariatur",
          "minima",
        ],
        timezone: "America/Denver",
        tokens: {
          "saepe": "accusamus",
          "distinctio": "ab",
          "rem": "quia",
          "laboriosam": "autem",
        },
        username: "Anais.Schroeder94",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
    ],
    salt: "molestias",
    tenantId: "9a515617-c21a-40ec-87d8-ac7b78bd0053",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 688943,
            timeStep: 790735,
          },
          email: "Shirley_Donnelly35@gmail.com",
          id: "9c601e7c-b247-4d92-9201-3d94eb473c58",
          lastUsed: false,
          method: "eum",
          mobilePhone: "quae",
          secret: "vero",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 288177,
            timeStep: 435623,
          },
          email: "Eleonore_Mosciski@gmail.com",
          id: "1457edfa-7668-47d8-972b-4b2142a83a05",
          lastUsed: false,
          method: "accusantium",
          mobilePhone: "debitis",
          secret: "exercitationem",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 780004,
            timeStep: 656250,
          },
          email: "Cassandre.Farrell53@gmail.com",
          id: "1839bbef-2b74-437c-9ea9-6d07e965f3bf",
          lastUsed: false,
          method: "repudiandae",
          mobilePhone: "excepturi",
          secret: "possimus",
        },
      ],
      recoveryCodes: [
        "deserunt",
        "sint",
        "ab",
      ],
    },
    uniqueUsername: "eveniet",
    username: "Rogelio_Collins95",
    usernameStatus: ContentStatus.Pending,
    verified: false,
  },
}, "odit").then((res: PatchUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## reconcileJWTWithId

Reconcile a User to FusionAuth using JWT issued from another Identity Provider.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ReconcileJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.reconcileJWTWithId({
  applicationId: "81d8157f-eb27-4c36-ba77-00403a676a47",
  data: {
    "labore": "odit",
  },
  encodedJWT: "labore",
  identityProviderId: "bef35020-462c-433a-b614-398e50b91a46",
  ipAddress: "a",
  metaData: {
    data: {
      "voluptatum": {
        "ex": "aut",
      },
      "aspernatur": {
        "atque": "aliquid",
        "sit": "repellendus",
        "nesciunt": "repellat",
        "aperiam": "vitae",
      },
      "deserunt": {
        "provident": "optio",
        "laboriosam": "quo",
        "ut": "iure",
        "nobis": "omnis",
      },
      "molestias": {
        "iure": "voluptatem",
      },
    },
    device: {
      description: "quia",
      lastAccessedAddress: "libero",
      lastAccessedInstant: 1659380719000,
      name: "Harry Daniel Jr.",
      type: DeviceType.Other,
    },
    scopes: [
      "quaerat",
      "nulla",
      "blanditiis",
    ],
  },
  newDevice: false,
  noJWT: false,
  noLink: false,
}).then((res: ReconcileJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## register

Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RegisterResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.register({
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "suscipit": {
        "rem": "repellendus",
        "provident": "impedit",
      },
    },
    deviceDescription: "occaecati",
    deviceName: "dolorem",
    deviceType: "id",
    ipAddress: "non",
    location: {
      city: "Murrayshire",
      country: "Dominica",
      displayString: "distinctio",
      latitude: 3431.36,
      longitude: 8992.81,
      region: "porro",
      zipcode: "69113-1165",
    },
    os: "quisquam",
    userAgent: "tenetur",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "870d8a37-dedf-43f4-a2ba-e53bd6892f7c",
    authenticationToken: "doloremque",
    cleanSpeakId: "ee449497-43be-4eb6-a3e2-2544a1bdd3b7",
    data: {
      "iure": {
        "assumenda": "porro",
        "repellendus": "at",
        "totam": "at",
      },
    },
    id: "b393a967-a50f-4e3d-9891-bec879f97744",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
      "en_US",
    ],
    roles: [
      "iusto",
      "eos",
      "recusandae",
    ],
    timezone: "America/Denver",
    tokens: {
      "voluptatum": "minima",
      "amet": "delectus",
      "nostrum": "iste",
      "maiores": "itaque",
    },
    username: "Cornell.Kutch",
    usernameStatus: ContentStatus.Active,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
    cleanSpeakId: "bc3cd5fd-667f-4ca7-8118-98d634735812",
    connectorId: "e217458c-e6be-4d21-a92e-303ecf62d0a5",
    data: {
      "et": {
        "nesciunt": "provident",
      },
    },
    email: "Skylar0@yahoo.com",
    encryptionScheme: "in",
    expiry: 1659380719000,
    factor: 451126,
    firstName: "Alvena",
    fullName: "molestias",
    id: "75ca7c67-3e82-4d78-a41c-11c0f3a8045a",
    imageUrl: "non",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Spinka",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "ex": {
            "aliquid": "velit",
            "ipsa": "possimus",
            "facere": "recusandae",
            "doloremque": "aliquid",
          },
          "error": {
            "libero": "ex",
          },
        },
        groupId: "958887bd-8991-42af-8d27-38e3f813e2f6",
        id: "7bd73c74-11b2-46c2-83a2-c58d075a0feb",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
          cleanSpeakId: "301edc4e-ade4-4878-a677-3a797d8f36ff",
          connectorId: "3acbf60b-3d29-4910-933e-6f77be6e8d12",
          data: {
            "vero": {
              "laudantium": "quaerat",
            },
            "excepturi": {
              "est": "magnam",
              "veritatis": "consequatur",
              "ducimus": "reprehenderit",
            },
            "ipsa": {
              "in": "illum",
              "esse": "officiis",
              "nobis": "velit",
            },
          },
          email: "Velva_Beatty@yahoo.com",
          encryptionScheme: "aperiam",
          expiry: 1659380719000,
          factor: 64371,
          firstName: "Elroy",
          fullName: "laudantium",
          id: "2b428c9e-2565-4968-a80e-cb84a7f1c43f",
          imageUrl: "cupiditate",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Powlowski",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "asperiores",
          mobilePhone: "nisi",
          parentEmail: "autem",
          password: "natus",
          passwordChangeReason: ChangePasswordReason.Expired,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "a9877bc9-1fbf-47c9-8691-fa07187da621",
              authenticationToken: "veniam",
              cleanSpeakId: "d0fbd36d-588a-442f-aa5f-e0138437bb4f",
              data: {
                "earum": {
                  "architecto": "esse",
                  "neque": "maxime",
                  "in": "vel",
                },
                "debitis": {
                  "perferendis": "maiores",
                  "quidem": "ad",
                  "error": "vero",
                  "fugiat": "rerum",
                },
                "unde": {
                  "in": "maiores",
                  "iusto": "necessitatibus",
                },
                "laborum": {
                  "quidem": "itaque",
                  "accusantium": "nam",
                },
              },
              id: "a8c4b415-7e69-45d3-84ce-0081e14774d8",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "dicta",
              ],
              timezone: "America/Denver",
              tokens: {
                "natus": "ea",
                "ducimus": "unde",
              },
              username: "Rebekah.Reynolds",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "6fc007e7-edeb-4721-b61d-ff7b9636174f",
              authenticationToken: "officiis",
              cleanSpeakId: "b925894c-7fdf-41b1-956e-d394800393ea",
              data: {
                "vel": {
                  "aliquam": "praesentium",
                  "adipisci": "labore",
                  "accusamus": "repudiandae",
                  "impedit": "quas",
                },
                "voluptas": {
                  "corporis": "hic",
                  "maiores": "qui",
                },
                "non": {
                  "alias": "dolor",
                  "tempora": "placeat",
                  "laborum": "omnis",
                  "ipsum": "rem",
                },
                "earum": {
                  "sequi": "et",
                  "amet": "autem",
                },
              },
              id: "a4dfebeb-bbb8-49bd-a1b0-036b922d3708",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "magni",
                "sapiente",
                "veritatis",
                "sint",
              ],
              timezone: "America/Denver",
              tokens: {
                "eligendi": "omnis",
              },
              username: "Giovani54",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "14a65968-00ef-4cc0-9d57-b4882f5714e9",
              authenticationToken: "animi",
              cleanSpeakId: "3a7b5964-bf13-4883-95a8-39e79e02a256",
              data: {
                "ullam": {
                  "in": "et",
                  "animi": "autem",
                },
                "facere": {
                  "veritatis": "saepe",
                },
                "tenetur": {
                  "temporibus": "beatae",
                  "labore": "pariatur",
                },
                "optio": {
                  "consequuntur": "delectus",
                  "debitis": "architecto",
                  "deserunt": "quo",
                  "temporibus": "repellat",
                },
              },
              id: "67d772c2-083b-493a-a103-3be4aae80d69",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "provident",
                "dolore",
                "necessitatibus",
              ],
              timezone: "America/Denver",
              tokens: {
                "nesciunt": "et",
              },
              username: "Joan.Schmeler25",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "8e939a25-409a-440d-a473-94a6a285ecec",
              authenticationToken: "impedit",
              cleanSpeakId: "cfaadc24-b0f7-4a00-8565-521dfb819fe4",
              data: {
                "optio": {
                  "earum": "totam",
                  "repellendus": "odit",
                },
                "fugiat": {
                  "magnam": "eveniet",
                  "pariatur": "unde",
                  "optio": "magnam",
                  "dicta": "saepe",
                },
                "veritatis": {
                  "odio": "alias",
                },
                "sed": {
                  "maxime": "placeat",
                  "quo": "aut",
                },
              },
              id: "bbb9f124-fdaa-4169-a086-a616334f80e9",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "consequatur",
                "dicta",
                "impedit",
              ],
              timezone: "America/Denver",
              tokens: {
                "eaque": "fugit",
                "fugiat": "similique",
              },
              username: "Hermann_Bode58",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "corporis",
          tenantId: "0a51b013-fd66-41dc-8ebd-10f4de273e06",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 874245,
                  timeStep: 425123,
                },
                email: "Guadalupe_Morissette32@gmail.com",
                id: "cf398993-282d-42ff-bb2b-8210cab07e39",
                lastUsed: false,
                method: "eveniet",
                mobilePhone: "veritatis",
                secret: "illum",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 949126,
                  timeStep: 79634,
                },
                email: "Missouri_Kulas56@gmail.com",
                id: "ba7820ac-933f-4729-9461-0623f7f7fe43",
                lastUsed: false,
                method: "amet",
                mobilePhone: "veritatis",
                secret: "voluptate",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 726565,
                  timeStep: 897232,
                },
                email: "Reid.Toy73@gmail.com",
                id: "c709ff81-dfa1-4efa-aa37-75ace3ff0f8f",
                lastUsed: false,
                method: "odio",
                mobilePhone: "ad",
                secret: "minus",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 183286,
                  timeStep: 107087,
                },
                email: "Maximilian30@yahoo.com",
                id: "024aeb60-2ebb-4e0e-b4b6-f84270a2fe83",
                lastUsed: false,
                method: "fugiat",
                mobilePhone: "consequatur",
                secret: "a",
              },
            ],
            recoveryCodes: [
              "alias",
            ],
          },
          uniqueUsername: "perferendis",
          username: "Catherine.Conroy",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "f19f9274-8287-4798-9cbd-61d15a963455",
      },
    ],
    middleName: "autem",
    mobilePhone: "unde",
    parentEmail: "ratione",
    password: "rerum",
    passwordChangeReason: ChangePasswordReason.Validation,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "16414759-c842-4016-9cc5-793569c9e95b",
        authenticationToken: "excepturi",
        cleanSpeakId: "2c211613-61e4-4c24-84cb-7840be7933eb",
        data: {
          "accusamus": {
            "vel": "voluptatibus",
          },
          "eveniet": {
            "vero": "eligendi",
          },
          "in": {
            "labore": "repellat",
            "eveniet": "ad",
            "placeat": "odit",
          },
        },
        id: "04a0a3bd-1498-4b7f-9f18-c45470fc9874",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "atque",
        ],
        timezone: "America/Denver",
        tokens: {
          "sapiente": "voluptatum",
        },
        username: "Laron50",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
    ],
    salt: "quo",
    tenantId: "3f93027d-df89-4e9e-b2b8-942229aeba14",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha512,
            codeLength: 786231,
            timeStep: 174973,
          },
          email: "Kayleigh.McLaughlin53@hotmail.com",
          id: "4eca5922-4021-4f1d-9fe8-3c4565076509",
          lastUsed: false,
          method: "cum",
          mobilePhone: "beatae",
          secret: "inventore",
        },
      ],
      recoveryCodes: [
        "hic",
        "culpa",
      ],
    },
    uniqueUsername: "nostrum",
    username: "Keara94",
    usernameStatus: ContentStatus.Active,
    verified: false,
  },
}, "doloribus").then((res: RegisterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## registerWithId

Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RegisterWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.registerWithId("voluptatibus", {
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "a": {
        "amet": "enim",
        "voluptatum": "omnis",
      },
      "error": {
        "saepe": "iusto",
        "debitis": "voluptates",
      },
      "illum": {
        "voluptatibus": "ipsam",
        "sit": "soluta",
      },
    },
    deviceDescription: "quis",
    deviceName: "commodi",
    deviceType: "sit",
    ipAddress: "aspernatur",
    location: {
      city: "North Johnny",
      country: "Senegal",
      displayString: "velit",
      latitude: 2404.85,
      longitude: 1120.7,
      region: "numquam",
      zipcode: "49970",
    },
    os: "repellendus",
    userAgent: "vel",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "e083f9ad-dfc4-43ec-8ed3-9dc7df36d102",
    authenticationToken: "laboriosam",
    cleanSpeakId: "0b84f426-de33-4fb0-803b-a25acd2b8a51",
    data: {
      "sed": {
        "tenetur": "facere",
      },
    },
    id: "a6c3e724-cc0e-4d7c-bf01-f1147f71a9e7",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
      "en_US",
    ],
    roles: [
      "voluptas",
    ],
    timezone: "America/Denver",
    tokens: {
      "similique": "consequuntur",
    },
    username: "Leatha_Hamill19",
    usernameStatus: ContentStatus.Rejected,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.ExactMatch,
    cleanSpeakId: "922fa7b9-e84c-4a7f-a77c-e17af28b97a8",
    connectorId: "9e5af607-e8fa-4712-ba79-146df92f206d",
    data: {
      "occaecati": {
        "repellat": "sunt",
        "sint": "distinctio",
        "quod": "corrupti",
      },
      "necessitatibus": {
        "exercitationem": "accusamus",
        "ipsam": "rem",
        "similique": "ipsum",
        "possimus": "eaque",
      },
      "unde": {
        "delectus": "facere",
        "debitis": "repellat",
        "repudiandae": "fugiat",
        "esse": "vitae",
      },
      "ipsam": {
        "aliquid": "aspernatur",
        "porro": "corporis",
        "quidem": "ex",
        "suscipit": "perferendis",
      },
    },
    email: "Bessie.Fritsch91@gmail.com",
    encryptionScheme: "nostrum",
    expiry: 1659380719000,
    factor: 862443,
    firstName: "Leo",
    fullName: "fugit",
    id: "d4542abd-7e75-455a-8877-e366f888bf5a",
    imageUrl: "molestias",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Swaniawski",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "quia": {
            "voluptatibus": "dolores",
            "quas": "suscipit",
          },
        },
        groupId: "d19b87e0-5457-4edd-a584-519828289dac",
        id: "49c1c698-987e-44df-91ff-6de26446b07a",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
          cleanSpeakId: "52dbdc74-8e1c-42ae-a1fc-d28df65ddd6c",
          connectorId: "961e3342-e2dc-4fd9-bd3b-bbd1aa502870",
          data: {
            "consequuntur": {
              "fuga": "accusantium",
              "velit": "quos",
              "inventore": "quasi",
              "nemo": "voluptatem",
            },
            "facere": {
              "hic": "rerum",
              "dolorem": "culpa",
              "magnam": "voluptatum",
            },
            "ipsam": {
              "recusandae": "occaecati",
              "harum": "eaque",
              "et": "sint",
              "delectus": "consequuntur",
            },
          },
          email: "Burnice_Kilback@gmail.com",
          encryptionScheme: "voluptatibus",
          expiry: 1659380719000,
          factor: 426113,
          firstName: "Rebeka",
          fullName: "est",
          id: "8b0d17e1-3519-40b8-a899-5d5acd9d9593",
          imageUrl: "optio",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Crist",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "delectus",
          mobilePhone: "aliquam",
          parentEmail: "voluptas",
          password: "maiores",
          passwordChangeReason: ChangePasswordReason.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "f42ce04c-b5d2-42e2-836b-9f96e1679103",
              authenticationToken: "ab",
              cleanSpeakId: "6d4adcec-eeef-43b5-9bd4-7484e9875dbb",
              data: {
                "labore": {
                  "corporis": "harum",
                  "laborum": "nulla",
                  "nostrum": "accusamus",
                  "animi": "ut",
                },
                "a": {
                  "iusto": "facere",
                  "cum": "tenetur",
                  "totam": "voluptatem",
                  "laborum": "sapiente",
                },
              },
              id: "c7c92e05-a9b7-435f-bc08-01e9414a0659",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "voluptatibus",
                "quaerat",
                "sunt",
                "tempore",
              ],
              timezone: "America/Denver",
              tokens: {
                "natus": "repellendus",
                "fugiat": "accusamus",
                "asperiores": "reprehenderit",
              },
              username: "Stuart7",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "144e356b-f4e7-4abd-b1fa-b00c1eeb6791",
              authenticationToken: "nulla",
              cleanSpeakId: "4d26590b-e7c8-4687-8bc7-eef3fa0e3587",
              data: {
                "eius": {
                  "deserunt": "pariatur",
                  "doloremque": "aperiam",
                  "esse": "officiis",
                  "rerum": "ad",
                },
              },
              id: "2ff50354-a948-4684-96b2-5489a6d54f72",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "iste",
                "sunt",
                "assumenda",
                "neque",
              ],
              timezone: "America/Denver",
              tokens: {
                "veritatis": "quae",
                "sapiente": "tempora",
              },
              username: "Lance51",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "24ed0762-53da-4589-b744-af169529d548",
              authenticationToken: "officiis",
              cleanSpeakId: "7ba27c4a-ec4f-4b41-9769-d7bd7b0d5c32",
              data: {
                "assumenda": {
                  "suscipit": "qui",
                  "ab": "libero",
                  "explicabo": "odit",
                  "repellat": "itaque",
                },
                "magni": {
                  "minima": "velit",
                  "sequi": "consequuntur",
                },
                "officia": {
                  "consectetur": "earum",
                  "modi": "est",
                  "maiores": "officiis",
                },
                "ad": {
                  "vero": "perspiciatis",
                },
              },
              id: "e309e2a2-1dca-4470-bc0a-f150eab19baf",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "sed",
                "delectus",
                "rerum",
                "modi",
              ],
              timezone: "America/Denver",
              tokens: {
                "ratione": "consectetur",
              },
              username: "Aliya_Tromp20",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "odio",
          tenantId: "fa15f06c-165a-4367-8e82-2fa9d3160ff8",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 161798,
                  timeStep: 925053,
                },
                email: "Margarita.Carroll@gmail.com",
                id: "5e0152d1-7cc9-48b4-bdc5-6ce31d76a055",
                lastUsed: false,
                method: "rem",
                mobilePhone: "facilis",
                secret: "tenetur",
              },
            ],
            recoveryCodes: [
              "error",
            ],
          },
          uniqueUsername: "quaerat",
          username: "Loyce17",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "bfaa8c45-ed48-46a1-b2bc-8ff5e6ec5477",
      },
      {
        data: {
          "porro": {
            "nostrum": "sapiente",
          },
        },
        groupId: "78fd5c9e-968d-4598-8d64-eb6bfbb57d13",
        id: "b84922ff-819b-48ab-9f4c-6868428e6b0b",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
          cleanSpeakId: "0ef5e2ee-d0f7-44e4-9124-4bfd94e9adde",
          connectorId: "17b36f7e-58c6-4d4e-b294-052a1f82e638",
          data: {
            "dolorem": {
              "omnis": "nesciunt",
              "ipsum": "in",
              "commodi": "accusamus",
            },
            "fugit": {
              "accusamus": "facere",
              "sint": "deleniti",
              "voluptatum": "quae",
              "eveniet": "tenetur",
            },
            "debitis": {
              "aliquam": "quasi",
              "optio": "voluptates",
            },
            "consectetur": {
              "corrupti": "blanditiis",
              "reiciendis": "omnis",
              "ipsa": "perferendis",
              "vel": "culpa",
            },
          },
          email: "Rylan43@hotmail.com",
          encryptionScheme: "cupiditate",
          expiry: 1659380719000,
          factor: 81700,
          firstName: "River",
          fullName: "praesentium",
          id: "d027377a-8021-43a4-bca9-0683ee9aac10",
          imageUrl: "commodi",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Weissnat",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "alias",
          mobilePhone: "itaque",
          parentEmail: "voluptates",
          password: "laborum",
          passwordChangeReason: ChangePasswordReason.Expired,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "c80396f3-bf2d-4027-82c4-cdabb86cccf5",
              authenticationToken: "cupiditate",
              cleanSpeakId: "84eb14ee-90b3-4f26-a97d-961bae9d100c",
              data: {
                "officiis": {
                  "cumque": "quam",
                },
                "sit": {
                  "corporis": "consequuntur",
                  "nisi": "eum",
                },
              },
              id: "16c215e5-85ac-4798-bb9f-99007ba0d662",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "recusandae",
                "modi",
                "sed",
              ],
              timezone: "America/Denver",
              tokens: {
                "consequuntur": "debitis",
                "optio": "neque",
              },
              username: "Cloyd_Goyette69",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
          ],
          salt: "non",
          tenantId: "90db531d-a0b9-4edb-b400-59f09f32f776",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 861914,
                  timeStep: 926671,
                },
                email: "Amelia_Flatley14@yahoo.com",
                id: "9a08ef97-6d7f-4e59-bcbf-bf87b575b3fd",
                lastUsed: false,
                method: "aliquid",
                mobilePhone: "esse",
                secret: "voluptates",
              },
            ],
            recoveryCodes: [
              "voluptas",
              "sunt",
              "distinctio",
            ],
          },
          uniqueUsername: "repudiandae",
          username: "Abe37",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        userId: "55d820d1-8a4c-4ba2-af30-348436827dc6",
      },
      {
        data: {
          "animi": {
            "voluptas": "accusantium",
            "temporibus": "voluptates",
            "animi": "eius",
            "aspernatur": "sapiente",
          },
          "quasi": {
            "nobis": "minima",
            "mollitia": "doloremque",
            "consectetur": "perferendis",
          },
          "eum": {
            "laboriosam": "minus",
            "tempora": "excepturi",
            "debitis": "atque",
            "voluptas": "voluptates",
          },
          "eligendi": {
            "quod": "ullam",
            "eveniet": "magni",
            "eaque": "amet",
            "culpa": "deleniti",
          },
        },
        groupId: "183fc0b3-aa4d-44cf-ac1e-e3b644df39b8",
        id: "ec06dcdc-0912-4130-8ae3-32dc105b7544",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.None,
          cleanSpeakId: "25a9d987-6fcf-4bdd-ade0-3493c158536a",
          connectorId: "a71155d9-f5a1-4243-ac6b-a7dda6d15025",
          data: {
            "libero": {
              "natus": "praesentium",
              "asperiores": "rem",
            },
            "vero": {
              "adipisci": "omnis",
            },
            "excepturi": {
              "quisquam": "qui",
              "iste": "quibusdam",
              "minima": "harum",
            },
          },
          email: "Lori55@gmail.com",
          encryptionScheme: "illum",
          expiry: 1659380719000,
          factor: 730393,
          firstName: "Bernardo",
          fullName: "praesentium",
          id: "9d07f368-d961-4141-9b59-94686d08e399",
          imageUrl: "esse",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Langworth",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "vero",
          mobilePhone: "minus",
          parentEmail: "ea",
          password: "autem",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "d6bc9a43-c39f-4531-a06d-f2f7a72b776a",
              authenticationToken: "molestiae",
              cleanSpeakId: "2e864ee6-cfbb-406a-b6b0-9bca129e236a",
              data: {
                "iste": {
                  "magni": "architecto",
                  "error": "soluta",
                },
                "temporibus": {
                  "fugiat": "aliquid",
                  "rerum": "ea",
                },
              },
              id: "e37f2240-2847-4b3c-b685-b3060dea8bd6",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "iure",
                "ducimus",
                "quisquam",
              ],
              timezone: "America/Denver",
              tokens: {
                "unde": "nulla",
                "cupiditate": "delectus",
                "cupiditate": "sequi",
              },
              username: "Naomi.Towne66",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "c759a360-94e8-499d-a237-9c2abae41591",
              authenticationToken: "quis",
              cleanSpeakId: "17faad7f-1008-464c-a990-13193447048d",
              data: {
                "doloribus": {
                  "fugiat": "repellendus",
                  "adipisci": "tempore",
                  "neque": "excepturi",
                  "totam": "magni",
                },
              },
              id: "2da99bb6-cb46-4d94-900f-c5637a2e9137",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "voluptatibus",
                "sit",
                "dolor",
                "laudantium",
              ],
              timezone: "America/Denver",
              tokens: {
                "vel": "commodi",
                "quas": "quibusdam",
                "dolores": "consequatur",
              },
              username: "Garnet_Kemmer",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "e4cc6fb0-3f90-4a7a-92c3-8509f8a2d87b",
              authenticationToken: "molestias",
              cleanSpeakId: "2a968ea1-b97b-4911-84e6-fdcf0f862837",
              data: {
                "ipsa": {
                  "accusamus": "placeat",
                  "officia": "impedit",
                  "sed": "accusantium",
                  "dolorem": "itaque",
                },
                "quidem": {
                  "excepturi": "quibusdam",
                  "totam": "non",
                  "cumque": "cupiditate",
                },
              },
              id: "2f26c39c-b832-40e8-8c11-3db579e50581",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "dicta",
                "odio",
              ],
              timezone: "America/Denver",
              tokens: {
                "ipsam": "maiores",
                "enim": "aperiam",
              },
              username: "Price44",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "voluptate",
          tenantId: "72ad9b3d-2604-4384-9e16-88553b7ec8d9",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 937230,
                  timeStep: 713970,
                },
                email: "Aurore_Conn27@hotmail.com",
                id: "ff5963ce-e282-4271-b484-7ae41d125bb9",
                lastUsed: false,
                method: "maiores",
                mobilePhone: "laborum",
                secret: "qui",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 126449,
                  timeStep: 506656,
                },
                email: "Abigale.Abshire1@gmail.com",
                id: "c2e8f2e1-1eb3-4343-9b5f-5f7073202ed6",
                lastUsed: false,
                method: "mollitia",
                mobilePhone: "porro",
                secret: "voluptatem",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 511180,
                  timeStep: 294259,
                },
                email: "Antonia54@gmail.com",
                id: "b31de593-4b6b-4d3a-a79b-dbc1c61793e8",
                lastUsed: false,
                method: "dolorum",
                mobilePhone: "corrupti",
                secret: "sit",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 184836,
                  timeStep: 385965,
                },
                email: "Lee23@yahoo.com",
                id: "6c4bf76b-042a-495d-8a0e-b986dabd3e81",
                lastUsed: false,
                method: "unde",
                mobilePhone: "porro",
                secret: "dicta",
              },
            ],
            recoveryCodes: [
              "ut",
              "voluptatem",
              "quos",
              "ipsum",
            ],
          },
          uniqueUsername: "sit",
          username: "Myrtle68",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        userId: "75f76fc5-a84c-4648-98e2-920611998f5f",
      },
      {
        data: {
          "cumque": {
            "facere": "at",
          },
          "in": {
            "nesciunt": "non",
            "repellat": "ad",
          },
        },
        groupId: "ae085d09-97c3-4954-b8ae-92051b6c529d",
        id: "84c6f102-a7a0-4db1-bb2f-14350dbbb358",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
          cleanSpeakId: "0c6046ec-0edb-4f29-a283-65d43faed96b",
          connectorId: "b009f072-8580-4b7f-8746-d8346e849ae2",
          data: {
            "quod": {
              "accusantium": "dolores",
              "accusantium": "molestiae",
              "ex": "autem",
              "excepturi": "ullam",
            },
            "labore": {
              "odio": "commodi",
              "incidunt": "ex",
              "alias": "hic",
            },
          },
          email: "Tyrique8@gmail.com",
          encryptionScheme: "dolor",
          expiry: 1659380719000,
          factor: 312700,
          firstName: "Milo",
          fullName: "similique",
          id: "43804f69-558b-4579-9a49-ef0375b5ada4",
          imageUrl: "repellat",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Harvey",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "distinctio",
          mobilePhone: "id",
          parentEmail: "ratione",
          password: "provident",
          passwordChangeReason: ChangePasswordReason.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "e95a23d0-30a4-42f4-ae44-34fb302f8b54",
              authenticationToken: "deserunt",
              cleanSpeakId: "149bc9ab-5c52-4f5e-bdad-f1206388ab2b",
              data: {
                "aspernatur": {
                  "nemo": "eius",
                },
                "distinctio": {
                  "voluptatem": "officia",
                  "mollitia": "incidunt",
                },
                "ex": {
                  "consequatur": "doloribus",
                  "quia": "dolore",
                  "tempore": "quis",
                },
              },
              id: "86de4426-f295-4ccc-9787-d61fb707e138",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "vitae",
              ],
              timezone: "America/Denver",
              tokens: {
                "corrupti": "mollitia",
                "sequi": "deserunt",
                "maxime": "minus",
                "aliquam": "nulla",
              },
              username: "Eden.Larkin",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "f9ceeb9c-4aa4-49f7-b1c1-3f74818eedc7",
              authenticationToken: "libero",
              cleanSpeakId: "09d251a3-e52e-48d5-9dde-6caf212dd77c",
              data: {
                "similique": {
                  "at": "tenetur",
                  "deserunt": "voluptates",
                  "eum": "mollitia",
                  "quasi": "iste",
                },
                "voluptates": {
                  "impedit": "libero",
                  "molestiae": "eum",
                  "delectus": "modi",
                  "perspiciatis": "ullam",
                },
                "ab": {
                  "adipisci": "vel",
                  "quasi": "doloribus",
                },
                "magnam": {
                  "illum": "labore",
                  "eum": "dolorem",
                  "adipisci": "doloremque",
                  "voluptatibus": "voluptatibus",
                },
              },
              id: "f93fb722-af22-4f18-a8b3-2291376e5879",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "at",
                "autem",
              ],
              timezone: "America/Denver",
              tokens: {
                "ea": "laudantium",
                "dolorem": "odio",
                "nulla": "perspiciatis",
                "quibusdam": "et",
              },
              username: "Raegan_Hackett57",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "9d1585a7-44a4-4c68-bfad-59bcc4e2b92c",
              authenticationToken: "et",
              cleanSpeakId: "9044c5c5-50c2-410a-be54-b593c0dc6b7d",
              data: {
                "nisi": {
                  "cumque": "dolor",
                  "itaque": "ipsam",
                  "adipisci": "voluptatum",
                },
              },
              id: "b7e9dfec-7ee9-41e8-82af-3e4c4c313db7",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "magnam",
                "rem",
                "distinctio",
              ],
              timezone: "America/Denver",
              tokens: {
                "quidem": "atque",
                "deserunt": "reprehenderit",
              },
              username: "Ned91",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "f89fe4b0-149a-46dd-ab48-fce32c375823",
              authenticationToken: "itaque",
              cleanSpeakId: "772070d2-8e71-4c50-b1dd-e0d9783736a7",
              data: {
                "vero": {
                  "perspiciatis": "nulla",
                  "optio": "a",
                  "nam": "saepe",
                },
                "incidunt": {
                  "aut": "autem",
                },
              },
              id: "79879493-d439-4888-bf30-e531a4971d32",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "itaque",
                "voluptate",
                "eum",
                "ducimus",
              ],
              timezone: "America/Denver",
              tokens: {
                "omnis": "alias",
                "nobis": "quos",
                "repellendus": "temporibus",
                "maxime": "unde",
              },
              username: "Ladarius18",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "eius",
          tenantId: "81210b81-2beb-480f-9940-1bd57008c064",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 858637,
                  timeStep: 655564,
                },
                email: "Lucie40@yahoo.com",
                id: "e1b57153-dcc3-441d-959e-46c7fba6ae28",
                lastUsed: false,
                method: "assumenda",
                mobilePhone: "alias",
                secret: "ipsa",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 914101,
                  timeStep: 676151,
                },
                email: "Antonia10@gmail.com",
                id: "3870670d-2cc1-4e74-94b2-0c30e4aac789",
                lastUsed: false,
                method: "beatae",
                mobilePhone: "molestias",
                secret: "odio",
              },
            ],
            recoveryCodes: [
              "voluptatum",
              "soluta",
              "in",
              "asperiores",
            ],
          },
          uniqueUsername: "maiores",
          username: "Jocelyn.Green",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "718658fb-10fc-4e6e-b669-c9c9601d750e",
      },
    ],
    middleName: "voluptate",
    mobilePhone: "qui",
    parentEmail: "optio",
    password: "occaecati",
    passwordChangeReason: ChangePasswordReason.Administrative,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "09307f9a-1242-48da-bd7c-dcb4c5daa25e",
        authenticationToken: "omnis",
        cleanSpeakId: "b708cb8a-f489-49bd-9e4e-f92a6079d2e9",
        data: {
          "asperiores": {
            "nostrum": "aperiam",
            "libero": "veniam",
            "iusto": "aliquid",
          },
          "fuga": {
            "temporibus": "expedita",
            "distinctio": "impedit",
            "ut": "consectetur",
          },
          "fugiat": {
            "maiores": "nemo",
          },
        },
        id: "eb9fe725-394c-4c23-9bbd-7398ad312993",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "dolore",
          "vero",
          "deserunt",
          "omnis",
        ],
        timezone: "America/Denver",
        tokens: {
          "corporis": "illum",
          "quo": "distinctio",
        },
        username: "Dusty_Steuber20",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      {
        applicationId: "29bbb245-3be9-4029-9c5f-1b1c9eb70143",
        authenticationToken: "dicta",
        cleanSpeakId: "fd353964-ddcd-4958-bba2-99d8994c2abe",
        data: {
          "unde": {
            "eius": "voluptates",
            "nisi": "blanditiis",
            "nemo": "accusamus",
          },
          "quidem": {
            "id": "eum",
          },
          "tempora": {
            "recusandae": "eius",
          },
          "aperiam": {
            "at": "accusantium",
          },
        },
        id: "60ffe594-16b2-4b3a-94ba-423b99406844",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "commodi",
          "natus",
          "magni",
        ],
        timezone: "America/Denver",
        tokens: {
          "suscipit": "quae",
          "nesciunt": "amet",
          "saepe": "quod",
        },
        username: "Vada84",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      {
        applicationId: "be1a7d33-2173-433f-b532-84c3fc839288",
        authenticationToken: "facilis",
        cleanSpeakId: "7f4629ea-599b-4394-a796-c6883b3051e5",
        data: {
          "non": {
            "debitis": "illum",
          },
          "officiis": {
            "doloribus": "iusto",
            "nemo": "voluptatem",
          },
          "possimus": {
            "mollitia": "fugiat",
          },
        },
        id: "6e055c6a-1f14-42d0-9568-e9a43c4c0bea",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "architecto",
          "sunt",
        ],
        timezone: "America/Denver",
        tokens: {
          "consequuntur": "atque",
          "eaque": "vel",
          "magnam": "harum",
        },
        username: "Alfonso_Price",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
    ],
    salt: "dolores",
    tenantId: "1416c55c-e408-4556-be20-020955c1fcd4",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha512,
            codeLength: 477671,
            timeStep: 515802,
          },
          email: "Caleigh40@hotmail.com",
          id: "4b8bc994-8bff-464e-8362-3c02f730c516",
          lastUsed: false,
          method: "dolor",
          mobilePhone: "exercitationem",
          secret: "impedit",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 879544,
            timeStep: 953209,
          },
          email: "Kirstin.Friesen97@hotmail.com",
          id: "4a9c3a9e-953e-4a4a-8c53-c923d88ffb7a",
          lastUsed: false,
          method: "aliquam",
          mobilePhone: "nemo",
          secret: "voluptates",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 590931,
            timeStep: 34610,
          },
          email: "Rollin.Macejkovic17@gmail.com",
          id: "bf881c78-b629-4930-a8a0-e525579e42f9",
          lastUsed: false,
          method: "nesciunt",
          mobilePhone: "ut",
          secret: "eveniet",
        },
      ],
      recoveryCodes: [
        "voluptatum",
        "eaque",
        "cupiditate",
        "consequuntur",
      ],
    },
    uniqueUsername: "minus",
    username: "Morris_Beatty65",
    usernameStatus: ContentStatus.Active,
    verified: false,
  },
}, "voluptatibus").then((res: RegisterWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## reindexWithId

Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ReindexWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.reindexWithId({
  index: "similique",
}).then((res: ReindexWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## removeUserFromFamilyWithId

Removes a user from the family with the given id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RemoveUserFromFamilyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.removeUserFromFamilyWithId("dignissimos", "nulla", "quis").then((res: RemoveUserFromFamilyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveAPIKeyWithId

Retrieves an authentication API key for the given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveAPIKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveAPIKeyWithId("eligendi").then((res: RetrieveAPIKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveActionWithId

Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveActionWithId("ipsa").then((res: RetrieveActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveApplication

Retrieves the application for the given id or all of the applications if the id is null. OR Retrieves all the applications that are currently inactive.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveApplicationResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveApplication("ipsum", "deserunt").then((res: RetrieveApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveApplicationWithId

Retrieves the application for the given id or all of the applications if the id is null.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveApplicationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveApplicationWithId("ratione", "quos").then((res: RetrieveApplicationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveAuditLogWithId

Retrieves a single audit log for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveAuditLogWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveAuditLogWithId("velit").then((res: RetrieveAuditLogWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveConnectorWithId

Retrieves the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveConnectorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveConnectorWithId("consectetur").then((res: RetrieveConnectorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveConsentWithId

Retrieves the Consent for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveConsentWithId("ipsa", "optio").then((res: RetrieveConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveDailyActiveReportWithId

Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveDailyActiveReportWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveDailyActiveReportWithId("numquam", "odit", "exercitationem").then((res: RetrieveDailyActiveReportWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEmailTemplate

Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEmailTemplateResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEmailTemplate("sequi").then((res: RetrieveEmailTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEmailTemplatePreviewWithId

Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEmailTemplatePreviewWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEmailTemplatePreviewWithId({
  emailTemplate: {
    defaultFromName: "sunt",
    defaultHtmlTemplate: "nesciunt",
    defaultSubject: "eligendi",
    defaultTextTemplate: "occaecati",
    fromEmail: "ratione",
    id: "006af4cf-c8ea-4664-8f0a-82ef8abc7457",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "odit": "sint",
      "voluptas": "consequatur",
    },
    localizedHtmlTemplates: {
      "libero": "autem",
      "sint": "ab",
      "placeat": "nam",
    },
    localizedSubjects: {
      "quo": "adipisci",
    },
    localizedTextTemplates: {
      "tempore": "adipisci",
      "ratione": "dolorum",
    },
    name: "Velma Metz",
  },
  locale: "en_US",
}).then((res: RetrieveEmailTemplatePreviewWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEmailTemplateWithId

Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEmailTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEmailTemplateWithId("voluptas", "cumque").then((res: RetrieveEmailTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEntityGrantWithId

Retrieves an Entity Grant for the given Entity and User/Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityGrantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEntityGrantWithId("error", "at", "ex", "alias").then((res: RetrieveEntityGrantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEntityTypeWithId

Retrieves the Entity Type for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEntityTypeWithId("atque").then((res: RetrieveEntityTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEntityWithId

Retrieves the Entity for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEntityWithId("ut", "incidunt").then((res: RetrieveEntityWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEventLogWithId

Retrieves a single event log for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEventLogWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventLogType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEventLogWithId("aut").then((res: RetrieveEventLogWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveFamiliesWithId

Retrieves all the families that a user belongs to.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFamiliesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFamiliesWithId("ex", "tempore").then((res: RetrieveFamiliesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveFamilyMembersByFamilyIdWithId

Retrieves all the members of a family by the unique Family Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFamilyMembersByFamilyIdWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFamilyMembersByFamilyIdWithId("ut", "iure").then((res: RetrieveFamilyMembersByFamilyIdWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveFormFieldWithId

Retrieves the form field with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFormFieldWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormControl, FormDataType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFormFieldWithId("deserunt").then((res: RetrieveFormFieldWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveFormWithId

Retrieves the form with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFormWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFormWithId("at").then((res: RetrieveFormWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveGroupWithId

Retrieves the group for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveGroupWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveGroupWithId("consequuntur", "itaque").then((res: RetrieveGroupWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveIPAccessControlListWithId

Retrieves the IP Access Control List with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIPAccessControlListWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveIPAccessControlListWithId("cupiditate").then((res: RetrieveIPAccessControlListWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveIdentityProvider

Retrieve a single Identity Provider user (link). OR Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveIdentityProvider("dignissimos", "occaecati", "deserunt").then((res: RetrieveIdentityProviderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveIdentityProviderByTypeWithId

Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderByTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveIdentityProviderByTypeWithId("facere").then((res: RetrieveIdentityProviderByTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveIdentityProviderWithId

Retrieves the identity provider for the given id or all of the identity providers if the id is null.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveIdentityProviderWithId("ducimus").then((res: RetrieveIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveJwt

Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid). OR Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveJwtResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveJwt("nobis", "ipsum").then((res: RetrieveJwtResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveKeyWithId

Retrieves the key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveKeyWithId("sit").then((res: RetrieveKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveLambdaWithId

Retrieves the lambda for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveLambdaWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveLambdaWithId("enim").then((res: RetrieveLambdaWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveLambdasByTypeWithId

Retrieves all the lambdas for the provided type.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveLambdasByTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveLambdasByTypeWithId("unde").then((res: RetrieveLambdasByTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveMessageTemplate

Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessageTemplateResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessageTemplate().then((res: RetrieveMessageTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveMessageTemplatePreviewWithId

Creates a preview of the message template provided in the request, normalized to a given locale.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessageTemplatePreviewWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessageTemplatePreviewWithId({
  locale: "en_US",
  messageTemplate: {
    data: {
      "inventore": {
        "illo": "laboriosam",
        "temporibus": "in",
        "eius": "libero",
        "cum": "officiis",
      },
      "doloribus": {
        "doloribus": "provident",
        "rerum": "ducimus",
        "molestias": "laboriosam",
        "placeat": "neque",
      },
    },
    id: "2bf73fb9-1922-43c6-b30b-24e50a309f46",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Victoria Douglas",
    type: MessageType.Sms,
  },
}).then((res: RetrieveMessageTemplatePreviewWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveMessageTemplateWithId

Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessageTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessageTemplateWithId("ullam").then((res: RetrieveMessageTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveMessengerWithId

Retrieves the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessengerWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessengerWithId("voluptate").then((res: RetrieveMessengerWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveMonthlyActiveReportWithId

Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMonthlyActiveReportWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMonthlyActiveReportWithId("ullam", "beatae", "dolore").then((res: RetrieveMonthlyActiveReportWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveOauthConfigurationWithId

Retrieves the Oauth2 configuration for the application for the given Application Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveOauthConfigurationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ClientAuthenticationPolicy,
  LogoutBehavior,
  Oauth2AuthorizedURLValidationPolicy,
  ProofKeyForCodeExchangePolicy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveOauthConfigurationWithId("saepe", "quasi").then((res: RetrieveOauthConfigurationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrievePasswordValidationRulesWithTenantIdWithId

Retrieves the password validation rules for a specific tenant.  This API does not require an API key.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrievePasswordValidationRulesWithTenantIdWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachAction, BreachMatchMode } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrievePasswordValidationRulesWithTenantIdWithId("voluptas").then((res: RetrievePasswordValidationRulesWithTenantIdWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrievePendingChildrenWithId

Retrieves all the children for the given parent email address.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrievePendingChildrenWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrievePendingChildrenWithId("distinctio").then((res: RetrievePendingChildrenWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveRefreshTokenByIdWithId

Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRefreshTokenByIdWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRefreshTokenByIdWithId("nisi").then((res: RetrieveRefreshTokenByIdWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveRefreshTokensWithId

Retrieves the refresh tokens that belong to the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRefreshTokensWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRefreshTokensWithId("iste").then((res: RetrieveRefreshTokensWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveRegistrationReportWithId

Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRegistrationReportWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRegistrationReportWithId("sapiente", "doloribus", "voluptates").then((res: RetrieveRegistrationReportWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveRegistrationWithId

Retrieves the user registration for the user with the given id and the given application id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRegistrationWithId("error", "repudiandae", "voluptatem").then((res: RetrieveRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveReport

Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveReportResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveReport({
  applicationId: "hic",
  end: "molestiae",
  loginId: "tempora",
  start: "voluptatem",
  userId: "impedit",
}).then((res: RetrieveReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveTenantWithId

Retrieves the tenant for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTenantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveTenantWithId("minima", "tenetur").then((res: RetrieveTenantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveThemeWithId

Retrieves the theme for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveThemeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveThemeWithId("voluptatum").then((res: RetrieveThemeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveTwoFactorRecoveryCodesWithId

Retrieve two-factor recovery codes for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTwoFactorRecoveryCodesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveTwoFactorRecoveryCodesWithId("nostrum").then((res: RetrieveTwoFactorRecoveryCodesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveTwoFactorStatusWithId

Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTwoFactorStatusWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveTwoFactorStatusWithId("a", "sint", "perferendis").then((res: RetrieveTwoFactorStatusWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUser

Retrieves the user for the given username. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user for the given email. OR Retrieves the user for the loginId. The loginId can be either the username or the email.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUser({
  xFusionAuthTenantId: "illum",
  changePasswordId: "reiciendis",
  email: "Suzanne_Runte9@yahoo.com",
  loginId: "quam",
  username: "Violette.Langosh",
  verificationId: "alias",
}).then((res: RetrieveUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserAction

Retrieves all the user actions that are currently inactive. OR Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserAction("occaecati", "assumenda").then((res: RetrieveUserActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserActionReason

Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionReasonResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserActionReason().then((res: RetrieveUserActionReasonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserActionReasonWithId

Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionReasonWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserActionReasonWithId("quis").then((res: RetrieveUserActionReasonWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserActionWithId

Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserActionWithId("dolor", "corporis").then((res: RetrieveUserActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserActioning

Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActioningResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserActioning("tempora", "nemo", "perspiciatis").then((res: RetrieveUserActioningResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserChangePassword

Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserChangePasswordResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserChangePassword("accusamus").then((res: RetrieveUserChangePasswordResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserCommentsWithId

Retrieves all the comments for the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserCommentsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserCommentsWithId("dicta", "ad").then((res: RetrieveUserCommentsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserConsentWithId

Retrieve a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserConsentWithId("recusandae").then((res: RetrieveUserConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserConsentsWithId

Retrieves all the consents for a User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserConsentsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserConsentsWithId("quidem").then((res: RetrieveUserConsentsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserInfoFromAccessTokenWithId

Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserInfoFromAccessTokenWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { OAuthErrorReason, OAuthErrorType, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserInfoFromAccessTokenWithId().then((res: RetrieveUserInfoFromAccessTokenWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserRecentLogin

Retrieves the last number of login records. OR Retrieves the last number of login records for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserRecentLoginResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserRecentLogin("id", "dicta", "nostrum").then((res: RetrieveUserRecentLoginResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveUserWithId

Retrieves the user for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserWithId("doloremque", "tempore").then((res: RetrieveUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveWebAuthnCredentialWithId

Retrieves the WebAuthn credential for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebAuthnCredentialWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { AttestationType, CoseAlgorithmIdentifier } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebAuthnCredentialWithId("odio").then((res: RetrieveWebAuthnCredentialWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveWebAuthnCredentialsForUserWithId

Retrieves all WebAuthn credentials for the given user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebAuthnCredentialsForUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { AttestationType, CoseAlgorithmIdentifier } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebAuthnCredentialsForUserWithId("pariatur").then((res: RetrieveWebAuthnCredentialsForUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveWebhook

Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebhookResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebhook().then((res: RetrieveWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveWebhookWithId

Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebhookWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebhookWithId("ea").then((res: RetrieveWebhookWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeRefreshTokenByIdWithId

Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RevokeRefreshTokenByIdWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.revokeRefreshTokenByIdWithId("repellendus").then((res: RevokeRefreshTokenByIdWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeUserConsentWithId

Revokes a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RevokeUserConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.revokeUserConsentWithId("hic").then((res: RevokeUserConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchApplicationsWithId

Searches applications with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchApplicationsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchApplicationsWithId({
  search: {
    name: "Allen Schneider",
    numberOfResults: 759090,
    orderBy: "error",
    startRow: 85417,
    state: ObjectState.Inactive,
    tenantId: "a4929010-eeba-49a2-946d-574355b17ec4",
  },
}).then((res: SearchApplicationsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchAuditLogsWithId

Searches the audit logs with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchAuditLogsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchAuditLogsWithId({
  search: {
    end: 1659380719000,
    message: "et",
    newValue: "esse",
    numberOfResults: 498219,
    oldValue: "reiciendis",
    orderBy: "laboriosam",
    reason: "eum",
    start: 1659380719000,
    startRow: 18004,
    user: "provident",
  },
}).then((res: SearchAuditLogsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchConsentsWithId

Searches consents with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchConsentsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchConsentsWithId({
  search: {
    name: "Sabrina Bosco",
    numberOfResults: 881762,
    orderBy: "distinctio",
    startRow: 804792,
  },
}).then((res: SearchConsentsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEmailTemplatesWithId

Searches email templates with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEmailTemplatesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEmailTemplatesWithId({
  search: {
    name: "Preston Mitchell",
    numberOfResults: 568584,
    orderBy: "veritatis",
    startRow: 660757,
  },
}).then((res: SearchEmailTemplatesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEntitiesByIdsWithId

Retrieves the entities for the given ids. If any id is invalid, it is ignored.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEntitiesByIdsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEntitiesByIdsWithId("corrupti").then((res: SearchEntitiesByIdsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEntitiesWithId

Searches entities with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEntitiesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Sort } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEntitiesWithId({
  search: {
    accurateTotal: false,
    ids: [
      "3fd238db-896a-44e8-99c2-2f325b8faf1c",
      "4edcda93-f1a0-4368-926d-b3834ff46d11",
    ],
    query: "quisquam",
    queryString: "dolore",
    sortFields: [
      {
        missing: "ipsam",
        name: "Melody O'Conner",
        order: Sort.Asc,
      },
    ],
  },
}).then((res: SearchEntitiesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEntityGrantsWithId

Searches Entity Grants with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEntityGrantsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEntityGrantsWithId({
  search: {
    entityId: "05afbea9-d20e-4faa-9771-c07e0802e4e8",
    name: "Adrienne Douglas",
    numberOfResults: 935178,
    orderBy: "libero",
    startRow: 184599,
    userId: "6ce365de-6921-4637-845f-8597fed6d4cf",
  },
}).then((res: SearchEntityGrantsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEntityTypesWithId

Searches the entity types with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEntityTypesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEntityTypesWithId({
  search: {
    name: "Ernest Olson",
    numberOfResults: 624178,
    orderBy: "laudantium",
    startRow: 154414,
  },
}).then((res: SearchEntityTypesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchEventLogsWithId

Searches the event logs with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEventLogsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventLogType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEventLogsWithId({
  search: {
    end: 1659380719000,
    message: "tempore",
    numberOfResults: 572925,
    orderBy: "sapiente",
    start: 1659380719000,
    startRow: 980488,
    type: EventLogType.Debug,
  },
}).then((res: SearchEventLogsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchGroupMembersWithId

Searches group members with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchGroupMembersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchGroupMembersWithId({
  search: {
    groupId: "05af4caf-163f-4594-a967-596c71e09a9f",
    numberOfResults: 503026,
    orderBy: "nam",
    startRow: 73203,
    tenantId: "34ee24d3-7059-4808-838d-6dcfca6c6a3e",
    userId: "043c4cba-e643-4e93-b5de-24229e99a8cc",
  },
}).then((res: SearchGroupMembersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchGroupsWithId

Searches groups with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchGroupsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchGroupsWithId({
  search: {
    name: "Dr. Brenda Jaskolski",
    numberOfResults: 887175,
    orderBy: "in",
    startRow: 223108,
    tenantId: "0bca2c6b-9bd7-4816-ab57-3f0c56279d56",
  },
}).then((res: SearchGroupsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchIPAccessControlListsWithId

Searches the IP Access Control Lists with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchIPAccessControlListsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchIPAccessControlListsWithId({
  search: {
    name: "Roderick Hane",
    numberOfResults: 712118,
    orderBy: "sunt",
    startRow: 415911,
  },
}).then((res: SearchIPAccessControlListsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchIdentityProvidersWithId

Searches identity providers with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchIdentityProvidersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IdentityProviderType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchIdentityProvidersWithId({
  search: {
    applicationId: "447384f1-d6c5-4f07-bf2b-8caaa3c810fb",
    name: "Alexis Ziemann MD",
    numberOfResults: 602886,
    orderBy: "aperiam",
    startRow: 778610,
    type: IdentityProviderType.Twitter,
  },
}).then((res: SearchIdentityProvidersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchKeysWithId

Searches keys with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchKeysWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchKeysWithId({
  search: {
    algorithm: KeyAlgorithm.Rs384,
    name: "Caroline Lebsack",
    numberOfResults: 679748,
    orderBy: "deserunt",
    startRow: 269528,
    type: KeyType.Hmac,
  },
}).then((res: SearchKeysWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchLambdasWithId

Searches lambdas with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchLambdasWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchLambdasWithId({
  search: {
    body: "placeat",
    name: "Gabriel Langworth",
    numberOfResults: 669269,
    orderBy: "vero",
    startRow: 832404,
    type: LambdaType.SelfServiceRegistrationValidation,
  },
}).then((res: SearchLambdasWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchLoginRecordsWithId

Searches the login records with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchLoginRecordsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchLoginRecordsWithId({
  retrieveTotal: false,
  search: {
    applicationId: "b9065be0-31c2-4733-a038-524da87338e8",
    end: 1659380719000,
    numberOfResults: 598833,
    orderBy: "molestias",
    start: 1659380719000,
    startRow: 505092,
    userId: "ef7cf8a1-0d34-400e-a84e-ca384167aec7",
  },
}).then((res: SearchLoginRecordsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchTenantsWithId

Searches tenants with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchTenantsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchTenantsWithId({
  search: {
    name: "Stacy Lemke",
    numberOfResults: 15480,
    orderBy: "id",
    startRow: 745507,
  },
}).then((res: SearchTenantsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchThemesWithId

Searches themes with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchThemesWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchThemesWithId({
  search: {
    name: "Myron Conroy",
    numberOfResults: 990299,
    orderBy: "nemo",
    startRow: 573114,
  },
}).then((res: SearchThemesWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchUserCommentsWithId

Searches user comments with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchUserCommentsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchUserCommentsWithId({
  search: {
    comment: "eveniet",
    commenterId: "2de41f2d-d69e-49c1-9560-4f95ccfb19ca",
    numberOfResults: 277273,
    orderBy: "dicta",
    startRow: 542009,
    tenantId: "854c9f46-1322-423c-b929-14cd1565a086",
    userId: "56b7d472-87a5-4752-b643-60aaa7e2f3f7",
  },
}).then((res: SearchUserCommentsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchUsersByIdsWithId

Retrieves the users for the given ids. If any id is invalid, it is ignored.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchUsersByIdsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchUsersByIdsWithId("itaque").then((res: SearchUsersByIdsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchUsersByQueryWithId

Retrieves the users for the given search criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchUsersByQueryWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, Sort, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchUsersByQueryWithId({
  search: {
    accurateTotal: false,
    ids: [
      "9a2739f8-5e51-48f0-8832-b7c12276d8fa",
      "7f916140-241c-40a0-98f1-e2bf0211fa67",
      "c48deeb8-9e6b-47c0-b31f-1651e6325dce",
      "4e00bd46-6283-4679-87d2-139e59193496",
    ],
    query: "quod",
    queryString: "natus",
    sortFields: [
      {
        missing: "commodi",
        name: "John Klocko",
        order: Sort.Asc,
      },
      {
        missing: "quaerat",
        name: "Byron Gutkowski IV",
        order: Sort.Desc,
      },
      {
        missing: "fugit",
        name: "Alexandra Konopelski",
        order: Sort.Desc,
      },
    ],
  },
}).then((res: SearchUsersByQueryWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchWebhooksWithId

Searches webhooks with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchWebhooksWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchWebhooksWithId({
  search: {
    description: "unde",
    numberOfResults: 277031,
    orderBy: "praesentium",
    startRow: 771210,
    tenantId: "5b150d09-8a85-4139-973a-8c0143030756",
    url: "quos",
  },
}).then((res: SearchWebhooksWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## sendEmailWithId

Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendEmailWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.sendEmailWithId("fugiat", {
  applicationId: "c2c709f0-ccf7-4141-a8b6-6f44f5708e4b",
  bccAddresses: [
    "velit",
    "labore",
  ],
  ccAddresses: [
    "deserunt",
    "sunt",
  ],
  preferredLanguages: [
    "en_US",
    "en_US",
    "en_US",
  ],
  requestData: {
    "facere": {
      "numquam": "autem",
      "consequatur": "provident",
      "molestiae": "aut",
    },
  },
  toAddresses: [
    {
      address: "2285 Funk Cape",
      display: "ipsa",
    },
    {
      address: "22081 Micaela Key",
      display: "fugiat",
    },
    {
      address: "7620 Klein Court",
      display: "earum",
    },
    {
      address: "56144 Bette Glens",
      display: "debitis",
    },
  ],
  userIds: [
    "07bd2238-a0eb-41d3-97b4-461d4ad23abd",
    "6f113bcb-f88f-4ac8-83cd-8d647660777e",
  ],
}).then((res: SendEmailWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## sendFamilyRequestEmailWithId

Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendFamilyRequestEmailWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.sendFamilyRequestEmailWithId({
  parentEmail: "et",
}).then((res: SendFamilyRequestEmailWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## sendPasswordlessCodeWithId

Send a passwordless authentication code in an email to complete login.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendPasswordlessCodeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.sendPasswordlessCodeWithId({
  applicationId: "1136cc21-c59b-4a18-aa87-eaed91e3c179",
  code: "quibusdam",
  loginId: "delectus",
  state: {
    "quo": {
      "tempora": "harum",
      "nisi": "placeat",
      "ullam": "cupiditate",
      "sunt": "molestiae",
    },
    "saepe": {
      "ullam": "non",
    },
  },
}).then((res: SendPasswordlessCodeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## sendTwoFactorCodeForEnableDisableWithId

Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendTwoFactorCodeForEnableDisableWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.sendTwoFactorCodeForEnableDisableWithId({
  email: "Carissa_OConner55@hotmail.com",
  method: "perferendis",
  methodId: "ad",
  mobilePhone: "nostrum",
  userId: "48319340-e5c8-49b2-9111-51d03dbc447b",
}).then((res: SendTwoFactorCodeForEnableDisableWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## sendTwoFactorCodeForLoginUsingMethodWithId

Send a Two Factor authentication code to allow the completion of Two Factor authentication.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendTwoFactorCodeForLoginUsingMethodWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.sendTwoFactorCodeForLoginUsingMethodWithId("eum", {
  email: "Rafaela73@gmail.com",
  method: "distinctio",
  methodId: "impedit",
  mobilePhone: "enim",
  userId: "0740a6a0-caa2-41e2-afbb-43210760f11f",
}).then((res: SendTwoFactorCodeForLoginUsingMethodWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startIdentityProviderLoginWithId

Begins a login request for a 3rd party login that requires user interaction such as HYPR.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { StartIdentityProviderLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startIdentityProviderLoginWithId({
  applicationId: "b1419b35-45df-4934-a7fb-120945ff0df7",
  data: {
    "ducimus": "est",
    "voluptas": "ipsum",
    "nobis": "repudiandae",
  },
  identityProviderId: "6f2209d4-2175-4c4d-bd60-6458ed8c8af1",
  ipAddress: "ipsa",
  loginId: "amet",
  metaData: {
    data: {
      "repellat": {
        "doloribus": "dicta",
      },
      "veniam": {
        "laborum": "corrupti",
        "deleniti": "inventore",
        "consectetur": "odit",
        "unde": "delectus",
      },
    },
    device: {
      description: "natus",
      lastAccessedAddress: "aperiam",
      lastAccessedInstant: 1659380719000,
      name: "Mae Altenwerth",
      type: DeviceType.Other,
    },
    scopes: [
      "odio",
      "accusamus",
      "officia",
    ],
  },
  newDevice: false,
  noJWT: false,
  state: {
    "occaecati": {
      "asperiores": "in",
      "sunt": "cum",
    },
    "pariatur": {
      "eos": "ea",
      "quidem": "quam",
    },
    "ratione": {
      "quidem": "veniam",
      "velit": "unde",
      "magni": "quas",
      "voluptate": "ex",
    },
    "corrupti": {
      "veritatis": "ex",
    },
  },
}).then((res: StartIdentityProviderLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startPasswordlessLoginWithId

Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { StartPasswordlessLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startPasswordlessLoginWithId({
  applicationId: "1dd635a9-d293-47dd-99e7-980c5a4e9047",
  loginId: "rem",
  state: {
    "eos": {
      "nemo": "accusamus",
      "reiciendis": "et",
      "quaerat": "ut",
    },
    "aspernatur": {
      "ipsa": "quisquam",
      "perspiciatis": "cupiditate",
      "odio": "laboriosam",
      "voluptatem": "atque",
    },
    "neque": {
      "ipsum": "consectetur",
      "error": "tempore",
      "quas": "numquam",
    },
    "doloribus": {
      "porro": "harum",
      "odio": "ullam",
      "eligendi": "molestiae",
      "fugiat": "accusantium",
    },
  },
}).then((res: StartPasswordlessLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startTwoFactorLoginWithId

Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside of a normal login that originated from the Login API (/api/login).

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { StartTwoFactorLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startTwoFactorLoginWithId({
  applicationId: "c758bb5b-38d7-4fb7-9ec5-e80510eac103",
  code: "ad",
  loginId: "voluptates",
  state: {
    "eaque": {
      "nisi": "tempora",
      "ratione": "earum",
    },
    "maiores": {
      "officia": "officia",
      "eos": "optio",
      "deserunt": "eligendi",
    },
  },
  trustChallenge: "facilis",
  userId: "513988b4-75f6-4b88-8039-ed172c3a26cd",
}).then((res: StartTwoFactorLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startWebAuthnLoginWithId

Start a WebAuthn authentication ceremony by generating a new challenge for the user

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { StartWebAuthnLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { PublicKeyCredentialType, UserVerificationRequirement, WebAuthnWorkflow } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startWebAuthnLoginWithId({
  applicationId: "594a5b3d-dc91-444f-be2b-4480886ce50d",
  credentialId: "1c8eb839-74ba-4c09-a675-ef93b2b41c1e",
  loginId: "omnis",
  state: {
    "saepe": {
      "mollitia": "optio",
      "dolorem": "laborum",
    },
  },
  userId: "39ade331-cd7b-4cb3-8dd9-452bba33a020",
  workflow: WebAuthnWorkflow.Reauthentication,
}).then((res: StartWebAuthnLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startWebAuthnRegistrationWithId

Start a WebAuthn registration ceremony by generating a new challenge for the user

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { StartWebAuthnRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AttestationConveyancePreference,
  AuthenticatorAttachment,
  CoseAlgorithmIdentifier,
  PublicKeyCredentialType,
  ResidentKeyRequirement,
  UserVerificationRequirement,
  WebAuthnWorkflow,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startWebAuthnRegistrationWithId({
  displayName: "sapiente",
  name: "Deanna Lindgren",
  userAgent: "exercitationem",
  userId: "ceaa7e33-dabe-428f-b14a-5cdcc6ab97e9",
  workflow: WebAuthnWorkflow.Bootstrap,
}).then((res: StartWebAuthnRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## twoFactorLoginWithId

Complete login using a 2FA challenge

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { TwoFactorLoginWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  DeviceType,
  TOTPAlgorithm,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.twoFactorLoginWithId({
  applicationId: "3dac402c-54bf-41f8-9d1c-7d91c3de8ec4",
  code: "nesciunt",
  ipAddress: "voluptatum",
  metaData: {
    data: {
      "aperiam": {
        "sapiente": "asperiores",
        "dicta": "necessitatibus",
      },
    },
    device: {
      description: "facilis",
      lastAccessedAddress: "blanditiis",
      lastAccessedInstant: 1659380719000,
      name: "Veronica Gulgowski",
      type: DeviceType.Desktop,
    },
    scopes: [
      "nesciunt",
      "ab",
    ],
  },
  newDevice: false,
  noJWT: false,
  trustComputer: false,
  twoFactorId: "sed",
  userId: "c3e1b8a9-48b0-4dc4-9309-c02e6792bd38",
}).then((res: TwoFactorLoginWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateAPIKeyWithId

Updates an API key by given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateAPIKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateAPIKeyWithId("et", {
  apiKey: {
    id: "540ca562-ce77-466b-91cf-86934b493780",
    insertInstant: 1659380719000,
    ipAccessControlListId: "e918fec6-c9a7-42cf-a5bc-ab9e5ba570e3",
    key: "explicabo",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "officiis": "neque",
        "et": "voluptatum",
        "ipsa": "facilis",
      },
    },
    permissions: {
      endpoints: {
        "neque": [
          "iusto",
          "itaque",
        ],
        "provident": [
          "voluptatibus",
        ],
        "error": [
          "totam",
        ],
      },
    },
    tenantId: "bb1d103d-adcb-490d-96a9-d541f7ef6857",
  },
  sourceKeyId: "d74a063e-d2e5-4a04-94c1-12889d861686",
}).then((res: UpdateAPIKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateApplicationRoleWithId

Updates the application role with the given id for the application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateApplicationRoleWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateApplicationRoleWithId("ipsum", "beatae", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "c92d06dd-58a4-4770-a923-52c712f2a611",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "eveniet",
      applicationIds: [
        "94e7d5f9-b121-4812-8160-367857ef3d24",
      ],
      enabled: false,
      url: "quasi",
      usernameModeration: {
        applicationId: "29e1413f-2115-4066-aeaf-0f22f0626c02",
        enabled: false,
      },
    },
    data: {
      "ratione": {
        "ducimus": "perspiciatis",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "d52053ac-24ab-4b4e-8b25-684b74759ee9",
      emailVerificationEmailTemplateId: "4cb08d46-a840-4ef7-a6b1-c26205726e6c",
      emailVerifiedEmailTemplateId: "032dabce-8480-4320-aefa-b9015e2d3089",
      forgotPasswordEmailTemplateId: "1fad0eb7-c9be-40cf-af5e-4e4f4ba48420",
      loginIdInUseOnCreateEmailTemplateId: "01302539-8ee0-4c3c-a69e-0bcdd9d05c44",
      loginIdInUseOnUpdateEmailTemplateId: "b6e0bf25-f6e2-4161-8fcb-dcbb213d4bb3",
      loginNewDeviceEmailTemplateId: "ce945192-a516-468c-ac42-77177ff61949",
      loginSuspiciousEmailTemplateId: "bd6f817c-e5ac-4746-ae77-475a1050ad15",
      passwordResetSuccessEmailTemplateId: "121798ad-385d-402c-a422-320cf3f18d15",
      passwordUpdateEmailTemplateId: "ef058185-0b62-46b5-8ff8-b83c74cea52f",
      passwordlessEmailTemplateId: "f69b89b9-3368-4652-bfe8-1ff5399a3f85",
      setPasswordEmailTemplateId: "32e383c9-2f14-4b76-ad01-fe9a59720dec",
      twoFactorMethodAddEmailTemplateId: "a80c94bc-a0aa-48d4-ab58-c4acff348796",
      twoFactorMethodRemoveEmailTemplateId: "a3891258-84fe-411a-8d9c-a7460c48509c",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 838640,
    },
    formConfiguration: {
      adminRegistrationFormId: "6e473527-58a0-49d4-a713-e749a0946914",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "e7c172fe-5152-4f00-ae8d-e1837df93ea9",
    },
    id: "5a4c787b-023b-4554-a2df-980a0acf5fb4",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "6de1c76a-5f9d-4a24-ba82-bf667e0b2e08",
      enabled: false,
      idTokenKeyId: "3b704eaa-eeb0-42c4-b293-2b8ecb3aaf36",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 949789,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 928564,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "b5a3417f-28a3-4b94-b2c8-21eec9b2e15a",
      idTokenPopulateId: "b50c5b8b-eeca-415c-b25d-8cbebf90803a",
      samlv2PopulateId: "c22ca3c0-3066-4ed9-b9c1-1cf3133dc838",
      selfServiceRegistrationValidationId: "776a38b9-2289-4c87-ae29-128d3df90c0b",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "38f8763b-24e8-4479-9386-525810deb188",
      },
      loginPolicy: MultiFactorLoginPolicy.Required,
      sms: {
        templateId: "2814ec96-3e15-4440-9455-74090264409a",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.This,
    },
    name: "Walter Treutel",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "perferendis",
        "necessitatibus",
        "rem",
      ],
      authorizedRedirectURLs: [
        "deserunt",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.NotRequiredWhenUsingPKCE,
      clientId: "nobis",
      clientSecret: "natus",
      debug: false,
      deviceVerificationURL: "nemo",
      enabledGrants: [
        "nobis",
        "sed",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.RedirectOnly,
      logoutURL: "voluptatem",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.Required,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "bbb3d0ea-2bac-4d08-acba-9acf7cccdf04",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Username,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 860325,
      },
    },
    roles: [
      {
        description: "impedit",
        id: "13265b96-bcbd-4b92-b413-961c07bfddb3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Kirk Paucek",
      },
    ],
    samlv2Configuration: {
      audience: "sequi",
      authorizedRedirectURLs: [
        "dolores",
        "harum",
      ],
      callbackURL: "ullam",
      debug: false,
      defaultVerificationKeyId: "7764be95-dbb3-4d41-a9d2-25cae0409f47",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "dolores",
      },
      issuer: "eaque",
      keyId: "50bfdf65-d216-4f05-984b-7c4d62ce6125",
      logout: {
        behavior: SAMLLogoutBehavior.OnlyOriginator,
        defaultVerificationKeyId: "cb81d4d7-6985-49de-909d-6cf532b4c1b2",
        keyId: "1315eb9d-b0e0-4377-af16-87d718ede685",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "9a91efa3-254b-4d9e-bfbd-d01c8849279b",
          url: "maiores",
          xmlSignatureC14nMethod: CanonicalizationMethod.Inclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      },
      logoutURL: "explicabo",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Assertion,
    },
    state: ObjectState.PendingDelete,
    tenantId: "9c9b5ea0-52bd-4125-932f-81f49ffb6c68",
    themeId: "797b257d-c50b-45f1-b0ed-652403f4afeb",
    unverified: {
      behavior: UnverifiedBehavior.Allow,
    },
    verificationEmailTemplateId: "733403fb-b710-4213-a328-c6fdaf88e2e4",
    verificationStrategy: VerificationStrategy.FormField,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "magni": {
        "corporis": "maxime",
        "distinctio": "ut",
      },
      "repudiandae": {
        "maiores": "magnam",
        "cupiditate": "ab",
        "facilis": "non",
      },
      "perferendis": {
        "et": "vero",
        "et": "veniam",
        "totam": "cum",
        "beatae": "repellendus",
      },
    },
    deviceDescription: "libero",
    deviceName: "necessitatibus",
    deviceType: "deleniti",
    ipAddress: "in",
    location: {
      city: "Kaileefort",
      country: "Guam",
      displayString: "quam",
      latitude: 1959.22,
      longitude: 6826.08,
      region: "ex",
      zipcode: "55579-7683",
    },
    os: "necessitatibus",
    userAgent: "est",
  },
  role: {
    description: "distinctio",
    id: "6229c722-c8de-4be9-a03e-41cc42502ec2",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Mr. Alfredo Borer",
  },
  sourceApplicationId: "6da3d4f9-496c-43de-88d3-994b0e7c9a58",
}, "soluta").then((res: UpdateApplicationRoleWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateApplicationWithId

Updates the application with the given Id. OR Reactivates the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateApplicationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  ApplicationMultiFactorTrustPolicy,
  CanonicalizationMethod,
  ClientAuthenticationPolicy,
  LoginIdType,
  LogoutBehavior,
  MultiFactorLoginPolicy,
  Oauth2AuthorizedURLValidationPolicy,
  ObjectState,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationType,
  SAMLLogoutBehavior,
  UnverifiedBehavior,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateApplicationWithId("officia", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "1722d6ea-7085-4b56-8c48-edaa9ba00ce7",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "amet",
      applicationIds: [
        "1672f04a-0dee-488d-8bda-6358d92acbd2",
        "cd75eb2d-64f4-41fc-9690-c0764d8c99c0",
      ],
      enabled: false,
      url: "libero",
      usernameModeration: {
        applicationId: "64590925-d888-41a0-8ba5-1f6b29ec8ca2",
        enabled: false,
      },
    },
    data: {
      "corrupti": {
        "possimus": "libero",
        "ullam": "harum",
        "et": "fuga",
        "qui": "accusantium",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "9ce3a6a6-8f05-4c59-abcd-549b717c0195",
      emailVerificationEmailTemplateId: "842aacd6-4ceb-460b-9cc1-96757d01d738",
      emailVerifiedEmailTemplateId: "2a94c547-1d2c-43e1-a8b7-af5fe904e5d8",
      forgotPasswordEmailTemplateId: "e5dfb33c-f82a-434b-bab7-5b8a1cb7e4ae",
      loginIdInUseOnCreateEmailTemplateId: "b917ad48-ca85-4b84-9e34-c324de46e043",
      loginIdInUseOnUpdateEmailTemplateId: "ab60c1e4-69a0-42d1-963f-e4f84697cebc",
      loginNewDeviceEmailTemplateId: "4a070e10-84f9-4fc7-a7d0-50f2a1482690",
      loginSuspiciousEmailTemplateId: "698cd910-baaf-4be3-a9f3-cf5efc8b8f36",
      passwordResetSuccessEmailTemplateId: "8a4d46d6-fba9-4694-bdbb-f297392863a5",
      passwordUpdateEmailTemplateId: "79eaa590-674c-4556-b4ef-0b330fabf9fc",
      passwordlessEmailTemplateId: "87dbd932-8747-4c5c-948d-1692de64adab",
      setPasswordEmailTemplateId: "2c1bcd52-7f29-4480-bcf1-f0ec83fc1501",
      twoFactorMethodAddEmailTemplateId: "cdcd5b1f-ad2a-48dc-b918-ca51154d2c4e",
      twoFactorMethodRemoveEmailTemplateId: "ccc73568-660f-46fc-af92-e78e73d6d96d",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 972723,
    },
    formConfiguration: {
      adminRegistrationFormId: "d43a9dc9-49d1-455a-a75f-400e5dd3be14",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "1a829908-d629-4e3d-bbea-38772a4d735b",
    },
    id: "d35eb911-5097-4ca0-b054-009723fe6e89",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "43e61435-07f9-4565-ad0e-8a0dff767842",
      enabled: false,
      idTokenKeyId: "2e0a9ec6-4f29-40bf-a503-46ec9219a364",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 352570,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.Reusable,
      timeToLiveInSeconds: 984665,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "f7ce1531-d630-4f66-b03b-e6a9c8268d5c",
      idTokenPopulateId: "ff37052c-a6e0-48c3-bbae-e13606156927",
      samlv2PopulateId: "96caa658-6013-4d6c-87f3-532f116f518f",
      selfServiceRegistrationValidationId: "0dc33dfa-40f9-4d08-8242-79434a6739be",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "2d170708-37b0-406d-aa7e-901acfe6e6cd",
      },
      loginPolicy: MultiFactorLoginPolicy.Disabled,
      sms: {
        templateId: "6ed7986f-2ef2-44b3-b12a-f612eafb72cd",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicy.Any,
    },
    name: "Abraham White V",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "inventore",
        "illo",
        "sed",
        "accusamus",
      ],
      authorizedRedirectURLs: [
        "occaecati",
        "expedita",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicy.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicy.Required,
      clientId: "eos",
      clientSecret: "neque",
      debug: false,
      deviceVerificationURL: "impedit",
      enabledGrants: [
        "omnis",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehavior.RedirectOnly,
      logoutURL: "laborum",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicy.NotRequired,
      requireClientAuthentication: false,
      requireRegistration: false,
    },
    passwordlessConfiguration: {
      enabled: false,
    },
    registrationConfiguration: {
      birthDate: {
        enabled: false,
        required: false,
      },
      confirmPassword: false,
      enabled: false,
      firstName: {
        enabled: false,
        required: false,
      },
      formId: "692cf1d7-4480-4b43-b40e-d646efb2311a",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdType.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationType.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 873587,
      },
    },
    roles: [
      {
        description: "eum",
        id: "68ca9800-31ce-4018-ac3f-b2df4ba1bf3d",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Lee Koepp PhD",
      },
      {
        description: "at",
        id: "6758c976-eb7e-4d9b-a6f4-125fd737c446",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Jacob Anderson",
      },
    ],
    samlv2Configuration: {
      audience: "nihil",
      authorizedRedirectURLs: [
        "tenetur",
        "animi",
        "facere",
      ],
      callbackURL: "blanditiis",
      debug: false,
      defaultVerificationKeyId: "5e4c98c3-9461-4593-b614-47b6720eece3",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "fugit",
      },
      issuer: "nisi",
      keyId: "b8b01294-790d-4823-9013-c01fca897ca7",
      logout: {
        behavior: SAMLLogoutBehavior.OnlyOriginator,
        defaultVerificationKeyId: "8e47c062-d8f9-42d1-9e30-4fd42e8d809a",
        keyId: "25da96a7-3a19-4abc-aaab-8052c91ad39a",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "e0a1d0cd-3a8f-4ed0-bce5-1fdea988a071",
          url: "neque",
          xmlSignatureC14nMethod: CanonicalizationMethod.InclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      },
      logoutURL: "deserunt",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethod.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocation.Response,
    },
    state: ObjectState.PendingDelete,
    tenantId: "26c139c6-961b-484e-b9db-7cb05c6fb48b",
    themeId: "236fb3ef-e6d2-47c6-b839-d46a9b94e559",
    unverified: {
      behavior: UnverifiedBehavior.Allow,
    },
    verificationEmailTemplateId: "aef233e7-8dd0-4c3f-9ee2-7990fbc8125a",
    verificationStrategy: VerificationStrategy.ClickableLink,
    verifyRegistration: false,
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        enabled: false,
      },
      enabled: false,
      reauthenticationWorkflow: {
        enabled: false,
      },
    },
  },
  eventInfo: {
    data: {
      "voluptatem": {
        "reprehenderit": "alias",
      },
      "earum": {
        "autem": "quisquam",
        "animi": "molestiae",
        "consectetur": "nemo",
      },
    },
    deviceDescription: "veniam",
    deviceName: "eligendi",
    deviceType: "corporis",
    ipAddress: "consequatur",
    location: {
      city: "Rachelside",
      country: "Cambodia",
      displayString: "voluptatem",
      latitude: 2934.2,
      longitude: 6380.77,
      region: "iste",
      zipcode: "80106",
    },
    os: "ex",
    userAgent: "ea",
  },
  role: {
    description: "quia",
    id: "44666fd9-80de-42bd-84ab-a7395aaa8e9a",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Sergio Kuhlman",
  },
  sourceApplicationId: "d240716c-82f3-4078-9352-28d89b145026",
}, "voluptates", "magnam").then((res: UpdateApplicationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateConnectorWithId

Updates the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateConnectorWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateConnectorWithId("ipsa", {
  connector: {
    data: {
      "fugiat": {
        "eveniet": "maxime",
        "nam": "reiciendis",
      },
      "suscipit": {
        "perferendis": "est",
      },
      "pariatur": {
        "tenetur": "consequatur",
        "molestias": "veritatis",
        "doloremque": "similique",
        "ipsa": "quos",
      },
      "quaerat": {
        "voluptates": "reiciendis",
      },
    },
    debug: false,
    id: "447eeb7e-696e-4bbb-b83a-e7c383363455",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Madeline Schulist",
    type: ConnectorType.Generic,
  },
}).then((res: UpdateConnectorWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateConsentWithId

Updates the consent with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateConsentWithId("quos", {
  consent: {
    consentEmailTemplateId: "64535172-9f21-4418-9ff7-9736ea7ba975",
    countryMinimumAgeForSelfConsent: {
      "incidunt": "eaque",
    },
    data: {
      "corrupti": {
        "inventore": "error",
      },
      "temporibus": {
        "repellendus": "similique",
        "similique": "cupiditate",
      },
      "voluptatem": {
        "cupiditate": "voluptatum",
        "soluta": "earum",
      },
    },
    defaultMinimumAgeForSelfConsent: 57015,
    emailPlus: {
      emailTemplateId: "407070a3-a800-4246-8163-db748868e54f",
      enabled: false,
      maximumTimeToSendEmailInHours: 263537,
      minimumTimeToSendEmailInHours: 93164,
    },
    id: "f52902bf-1488-44b5-ab2e-b33ecc316b51",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Tony Daugherty",
    values: [
      "doloribus",
      "magnam",
    ],
  },
}, "illum").then((res: UpdateConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateEmailTemplateWithId

Updates the email template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEmailTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateEmailTemplateWithId("ad", {
  emailTemplate: {
    defaultFromName: "iusto",
    defaultHtmlTemplate: "doloribus",
    defaultSubject: "adipisci",
    defaultTextTemplate: "enim",
    fromEmail: "impedit",
    id: "4ff634d2-4b29-40d6-8a21-262aad20f0ab",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "ipsum": "nulla",
    },
    localizedHtmlTemplates: {
      "praesentium": "aut",
      "commodi": "praesentium",
      "expedita": "sint",
    },
    localizedSubjects: {
      "tenetur": "ut",
      "quos": "dolorem",
    },
    localizedTextTemplates: {
      "quas": "id",
      "laborum": "nobis",
      "ullam": "aut",
      "blanditiis": "dolores",
    },
    name: "Roman Pollich",
  },
}, "labore").then((res: UpdateEmailTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateEntityTypePermissionWithId

Updates the permission with the given id for the entity type.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityTypePermissionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateEntityTypePermissionWithId("mollitia", "quam", {
  entityType: {
    data: {
      "quaerat": {
        "eaque": "facilis",
        "necessitatibus": "enim",
        "nulla": "officiis",
      },
    },
    id: "aa107533-2acb-402d-ab65-39a7dc9cc8c5",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "860a319e-643f-4348-9368-4cb5a9a12594",
      enabled: false,
      timeToLiveInSeconds: 119946,
    },
    lastUpdateInstant: 1659380719000,
    name: "Tina Bergstrom",
    permissions: [
      {
        data: {
          "mollitia": {
            "odio": "voluptatum",
            "ab": "voluptatem",
          },
          "ducimus": {
            "quis": "saepe",
            "tenetur": "harum",
            "minima": "esse",
            "labore": "commodi",
          },
          "quasi": {
            "adipisci": "voluptas",
            "inventore": "perspiciatis",
            "quidem": "ducimus",
            "facere": "blanditiis",
          },
          "fuga": {
            "ea": "soluta",
            "minima": "quia",
            "enim": "voluptas",
            "facere": "esse",
          },
        },
        description: "porro",
        id: "1ed215bd-169a-4187-9dc2-73d4b73eda5b",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Louise Harris",
      },
    ],
  },
  permission: {
    data: {
      "tempore": {
        "maxime": "consequatur",
        "animi": "quisquam",
        "velit": "fuga",
      },
      "alias": {
        "eaque": "quas",
      },
      "optio": {
        "sapiente": "natus",
        "id": "ab",
      },
      "eius": {
        "porro": "officiis",
        "perferendis": "odio",
        "nostrum": "quis",
      },
    },
    description: "expedita",
    id: "abedbaff-8114-4845-b27d-3fe81521f9dd",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Mr. Peter Shields",
  },
}).then((res: UpdateEntityTypePermissionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateEntityTypeWithId

Updates the Entity Type with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityTypeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateEntityTypeWithId("hic", {
  entityType: {
    data: {
      "eum": {
        "aperiam": "quo",
        "cum": "ducimus",
        "cupiditate": "odit",
        "quia": "incidunt",
      },
      "eum": {
        "facere": "culpa",
        "neque": "assumenda",
        "pariatur": "nemo",
      },
      "molestias": {
        "expedita": "veritatis",
        "accusantium": "vero",
        "cumque": "molestiae",
        "recusandae": "asperiores",
      },
    },
    id: "943aab50-d527-4295-a6b7-2f777623cf4d",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "35b1414c-50bb-44b8-86f5-34806e4771f8",
      enabled: false,
      timeToLiveInSeconds: 182987,
    },
    lastUpdateInstant: 1659380719000,
    name: "Marlon Torphy",
    permissions: [
      {
        data: {
          "architecto": {
            "vel": "impedit",
          },
          "natus": {
            "tempora": "a",
          },
          "voluptatum": {
            "officia": "deleniti",
            "ab": "odio",
            "vitae": "vitae",
            "amet": "aut",
          },
          "dicta": {
            "consectetur": "praesentium",
            "tempora": "ab",
            "quam": "nisi",
          },
        },
        description: "sint",
        id: "b1f8b29d-2ce7-481c-97b1-a3d1affd380f",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Aaron Skiles",
      },
      {
        data: {
          "debitis": {
            "occaecati": "pariatur",
            "aliquid": "accusantium",
            "et": "quibusdam",
            "veniam": "minima",
          },
          "ad": {
            "pariatur": "necessitatibus",
            "neque": "quaerat",
          },
          "atque": {
            "nemo": "maiores",
          },
          "quo": {
            "illo": "eaque",
            "deleniti": "pariatur",
            "officia": "molestiae",
            "ratione": "atque",
          },
        },
        description: "reiciendis",
        id: "c5d3ed9b-3079-4a9d-9773-56621f83980d",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Gladys Hodkiewicz",
      },
    ],
  },
  permission: {
    data: {
      "dolores": {
        "mollitia": "illo",
        "sequi": "beatae",
      },
      "quam": {
        "veniam": "sunt",
      },
      "ipsa": {
        "corporis": "quam",
        "consectetur": "iste",
        "maxime": "qui",
        "esse": "soluta",
      },
    },
    description: "assumenda",
    id: "0de87a6d-0503-47f8-9faa-a44970eb79e8",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Lucy Green",
  },
}).then((res: UpdateEntityTypeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateEntityWithId

Updates the Entity with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateEntityWithId("est", {
  entity: {
    clientId: "velit",
    clientSecret: "ipsum",
    data: {
      "adipisci": {
        "quod": "exercitationem",
        "vitae": "voluptates",
        "nesciunt": "in",
        "cum": "qui",
      },
      "voluptatem": {
        "quidem": "perspiciatis",
      },
      "veritatis": {
        "molestias": "deleniti",
      },
    },
    id: "80ce744b-899c-4d08-93d7-4f1e286202bc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Billy Volkman",
    parentId: "125642fc-b351-4024-8bf4-438d5d509007",
    tenantId: "4e826dea-4958-4888-9898-8f19dc5dcfae",
    type: {
      data: {
        "aliquid": {
          "temporibus": "quo",
          "maxime": "cumque",
          "dolore": "labore",
        },
        "voluptate": {
          "pariatur": "fugit",
          "aspernatur": "accusantium",
          "voluptates": "quia",
        },
        "dolor": {
          "rem": "delectus",
          "quis": "ducimus",
          "ut": "sit",
        },
        "fuga": {
          "minus": "quas",
          "vitae": "quia",
        },
      },
      id: "6d85936c-6114-4414-960b-871db43bf5be",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "e4f0ff9e-76be-46d0-be2e-0c3631077cd1",
        enabled: false,
        timeToLiveInSeconds: 651861,
      },
      lastUpdateInstant: 1659380719000,
      name: "Dennis Braun",
      permissions: [
        {
          data: {
            "expedita": {
              "accusantium": "unde",
              "dolorum": "consequuntur",
            },
            "omnis": {
              "at": "consequatur",
            },
          },
          description: "molestiae",
          id: "bb744503-c842-40bd-acb7-c5439ba6c1f1",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Edmund Kemmer",
        },
        {
          data: {
            "libero": {
              "odit": "sed",
              "consequatur": "quia",
              "cupiditate": "similique",
            },
            "quam": {
              "excepturi": "iure",
              "quas": "necessitatibus",
              "sint": "excepturi",
            },
          },
          description: "blanditiis",
          id: "c9e24a7f-7450-440d-bb6d-217df3a6d48d",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Hannah Reynolds",
        },
        {
          data: {
            "eos": {
              "saepe": "ex",
            },
            "vel": {
              "quasi": "corporis",
            },
            "adipisci": {
              "ipsa": "molestiae",
              "suscipit": "repellat",
              "sit": "voluptatibus",
            },
            "repellendus": {
              "libero": "tempora",
            },
          },
          description: "enim",
          id: "96acbb0b-ee84-445d-a864-a412c9b53b93",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "John Abshire",
        },
        {
          data: {
            "velit": {
              "laborum": "vitae",
              "iste": "est",
              "ea": "eligendi",
              "eum": "nulla",
            },
            "nam": {
              "excepturi": "hic",
              "esse": "necessitatibus",
            },
            "perferendis": {
              "repudiandae": "harum",
            },
            "quia": {
              "doloremque": "id",
              "libero": "placeat",
              "facere": "in",
              "ea": "omnis",
            },
          },
          description: "occaecati",
          id: "e48feac3-3580-4f6f-b739-8ee4ec79cae8",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Faye Turner",
        },
      ],
    },
  },
}, "blanditiis").then((res: UpdateEntityWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateFormFieldWithId

Updates the form field with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateFormFieldWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormControl, FormDataType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateFormFieldWithId("itaque", {
  field: {
    confirm: false,
    consentId: "3e24b0ae-36ba-4f5f-b1c3-d87ea5ddd18d",
    control: FormControl.Textarea,
    data: {
      "dolorum": {
        "voluptas": "cum",
        "minus": "excepturi",
        "nisi": "autem",
        "ab": "vel",
      },
    },
    description: "voluptates",
    id: "bfef1afa-b17c-4a91-b626-46e9dc819c88",
    insertInstant: 1659380719000,
    key: "nulla",
    lastUpdateInstant: 1659380719000,
    name: "Arturo Veum",
    options: [
      "culpa",
    ],
    required: false,
    type: FormDataType.Consent,
    validator: {
      enabled: false,
      expression: "et",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "1e0e79d8-6d38-402b-9769-5aa60c663444",
      control: FormControl.Textarea,
      data: {
        "architecto": {
          "accusantium": "maxime",
          "error": "non",
        },
        "nemo": {
          "mollitia": "aut",
          "nemo": "earum",
          "et": "quibusdam",
          "cumque": "labore",
        },
        "dignissimos": {
          "ratione": "fuga",
          "laborum": "libero",
        },
        "mollitia": {
          "nisi": "dignissimos",
        },
      },
      description: "tenetur",
      id: "a84b877f-6a76-4d0d-9e02-337fdc558b5d",
      insertInstant: 1659380719000,
      key: "iste",
      lastUpdateInstant: 1659380719000,
      name: "Andre Haag",
      options: [
        "placeat",
        "tempore",
      ],
      required: false,
      type: FormDataType.Consent,
      validator: {
        enabled: false,
        expression: "in",
      },
    },
    {
      confirm: false,
      consentId: "0c71df62-83e5-4439-ac86-d1772c754218",
      control: FormControl.Number,
      data: {
        "dicta": {
          "harum": "dolor",
          "assumenda": "reprehenderit",
          "impedit": "nesciunt",
          "facere": "fugiat",
        },
        "laudantium": {
          "in": "laudantium",
          "expedita": "omnis",
          "sit": "quos",
        },
      },
      description: "temporibus",
      id: "3b4095ae-7aa6-43ed-a78f-592e19663d12",
      insertInstant: 1659380719000,
      key: "vel",
      lastUpdateInstant: 1659380719000,
      name: "Alton Fisher",
      options: [
        "aperiam",
        "aspernatur",
        "commodi",
      ],
      required: false,
      type: FormDataType.Date,
      validator: {
        enabled: false,
        expression: "quisquam",
      },
    },
  ],
}).then((res: UpdateFormFieldWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateFormWithId

Updates the form with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateFormWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateFormWithId("non", {
  form: {
    data: {
      "assumenda": {
        "quos": "nam",
        "dolorem": "asperiores",
      },
    },
    id: "17e15242-fbff-4a11-b364-021f2d0b2a04",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Kristine Abernathy PhD",
    steps: [
      {
        fields: [
          "5f4436bf-4905-498e-9c27-512b5e4526be",
        ],
      },
      {
        fields: [
          "f2477eab-3085-4a44-ab84-7fa6a562d45d",
          "b9751c33-5374-4db3-853b-71bb6be990de",
          "aae956b6-090b-4d8a-ac8a-b457e3810c87",
          "c7be12de-ed5e-4502-b7b7-a1165c48ced2",
        ],
      },
    ],
    type: FormType.AdminRegistration,
  },
}).then((res: UpdateFormWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateGroupMembersWithId

Creates a member in a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateGroupMembersWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateGroupMembersWithId({
  members: [
    {
      data: {
        "alias": {
          "modi": "fugit",
          "modi": "necessitatibus",
        },
        "veritatis": {
          "quisquam": "beatae",
          "at": "nisi",
          "iusto": "repellendus",
          "blanditiis": "expedita",
        },
        "officiis": {
          "dignissimos": "praesentium",
          "ratione": "alias",
        },
      },
      groupId: "b59ca87d-e024-47ba-a8b5-f1fa5fddc80f",
      id: "8f9f83c9-2666-42de-86e2-2119f07c8212",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
        cleanSpeakId: "c296525b-afde-4ca0-8585-559be8c52c07",
        connectorId: "8a92c982-e85d-43b7-871b-6442daa8b0e7",
        data: {
          "ipsam": {
            "ipsa": "sit",
            "excepturi": "laborum",
            "eveniet": "illum",
            "nisi": "tempora",
          },
        },
        email: "Easton.Kihn17@hotmail.com",
        encryptionScheme: "accusamus",
        expiry: 1659380719000,
        factor: 62475,
        firstName: "Christophe",
        fullName: "magni",
        id: "31551310-c024-4c5e-a36d-eef8bf20dad7",
        imageUrl: "fuga",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Ortiz",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
        ],
        middleName: "exercitationem",
        mobilePhone: "ex",
        parentEmail: "rerum",
        password: "deserunt",
        passwordChangeReason: ChangePasswordReason.Validation,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "1fdf98b0-6b7b-4862-8346-bdab8fc688ef",
            authenticationToken: "quidem",
            cleanSpeakId: "c3de29ee-2c99-4bc7-b071-c3d0abf5f5f4",
            data: {
              "quidem": {
                "libero": "porro",
                "vitae": "quasi",
                "facilis": "odit",
              },
              "minima": {
                "enim": "maiores",
                "optio": "quia",
              },
              "quas": {
                "illum": "nobis",
                "fugit": "dicta",
                "soluta": "quod",
                "consequatur": "harum",
              },
              "laudantium": {
                "dolorem": "iure",
                "similique": "ea",
                "corporis": "commodi",
                "cum": "iste",
              },
            },
            id: "f12362c3-4ee0-43e0-bda4-f6ac4823e85d",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "numquam",
              "ex",
            ],
            timezone: "America/Denver",
            tokens: {
              "ex": "sed",
              "tempora": "vel",
              "molestias": "repellat",
            },
            username: "Federico.Wisoky",
            usernameStatus: ContentStatus.Pending,
            verified: false,
          },
          {
            applicationId: "3ab9742f-6809-427c-b78c-9130bcc65fa5",
            authenticationToken: "laborum",
            cleanSpeakId: "53c1379d-4106-4e85-acfd-4aea82c6c8ae",
            data: {
              "totam": {
                "odio": "earum",
                "suscipit": "eligendi",
                "pariatur": "animi",
                "itaque": "nam",
              },
              "vitae": {
                "suscipit": "maiores",
              },
            },
            id: "f7693ec5-6cc2-49c5-a3e2-6139c44b6200",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "ratione",
              "illum",
            ],
            timezone: "America/Denver",
            tokens: {
              "molestias": "sed",
              "ipsum": "sed",
              "aspernatur": "omnis",
            },
            username: "Adam_Bradtke",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
        ],
        salt: "voluptate",
        tenantId: "3980003d-0381-4260-b57b-bd0cd21b15d3",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 205839,
                timeStep: 299671,
              },
              email: "Abdul_Feest19@gmail.com",
              id: "4316ab05-9f69-4e12-a897-f8b9ba86e805",
              lastUsed: false,
              method: "corrupti",
              mobilePhone: "molestias",
              secret: "ipsum",
            },
          ],
          recoveryCodes: [
            "illo",
            "mollitia",
          ],
        },
        uniqueUsername: "repudiandae",
        username: "Glenna.Volkman38",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      userId: "72056820-9848-49be-b2c7-fe13d53d4a7a",
    },
    {
      data: {
        "sint": {
          "pariatur": "laborum",
          "commodi": "nisi",
          "ullam": "sint",
          "est": "perspiciatis",
        },
      },
      groupId: "cb1e0cdc-fec5-4faf-9b4a-25937fe18e8a",
      id: "a265607c-dafc-40f5-b8a3-6e5b897687d6",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.None,
        cleanSpeakId: "b20f6896-30d7-4ac7-8f7d-29ea309ff76b",
        connectorId: "02301c89-cadb-4e9d-a81b-1d810f7f8bdb",
        data: {
          "iure": {
            "commodi": "aperiam",
            "quam": "vel",
            "quasi": "nesciunt",
            "doloremque": "qui",
          },
          "voluptatum": {
            "velit": "deleniti",
          },
          "distinctio": {
            "adipisci": "consequuntur",
            "nam": "quo",
            "consectetur": "tempora",
            "id": "cum",
          },
        },
        email: "Camden22@hotmail.com",
        encryptionScheme: "accusantium",
        expiry: 1659380719000,
        factor: 80776,
        firstName: "Elton",
        fullName: "quae",
        id: "1e5a3ec8-a5a7-4018-b05b-4017a7a62988",
        imageUrl: "amet",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Dickinson",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
        ],
        middleName: "vitae",
        mobilePhone: "nihil",
        parentEmail: "quasi",
        password: "sit",
        passwordChangeReason: ChangePasswordReason.Breached,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "b738fbf8-611c-4954-aa82-936d6eed2250",
            authenticationToken: "optio",
            cleanSpeakId: "3d6af5de-dc4b-4395-bbce-7097765d8d2b",
            data: {
              "cupiditate": {
                "beatae": "aliquam",
                "corporis": "excepturi",
                "incidunt": "dicta",
                "ea": "eligendi",
              },
              "quo": {
                "natus": "maiores",
                "debitis": "earum",
                "quis": "quod",
                "dolores": "atque",
              },
              "porro": {
                "sequi": "ducimus",
                "officia": "aut",
              },
              "repudiandae": {
                "error": "rerum",
                "quibusdam": "quae",
                "sint": "pariatur",
              },
            },
            id: "b19c8cd3-1029-4206-aca8-0758ecd6741f",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "ad",
              "quibusdam",
              "dolorum",
              "quo",
            ],
            timezone: "America/Denver",
            tokens: {
              "doloremque": "reprehenderit",
              "repellendus": "harum",
              "libero": "commodi",
            },
            username: "Nyasia.OHara9",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          {
            applicationId: "61ed278c-4eff-407e-8699-cee68e5a13f2",
            authenticationToken: "ea",
            cleanSpeakId: "97cc1e6c-a11e-4ec7-9882-67f5c0f9d489",
            data: {
              "necessitatibus": {
                "ullam": "rerum",
                "eligendi": "saepe",
                "placeat": "nemo",
                "beatae": "porro",
              },
              "possimus": {
                "consectetur": "perferendis",
                "fugiat": "ut",
                "occaecati": "nam",
              },
            },
            id: "1a3b16ca-cd1b-4ee9-96ec-780efa5c175b",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "deleniti",
            ],
            timezone: "America/Denver",
            tokens: {
              "natus": "sequi",
            },
            username: "Kennedy.Osinski",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          {
            applicationId: "1c64bba4-32af-488f-8f21-cea1e0149aea",
            authenticationToken: "maiores",
            cleanSpeakId: "712af67a-7ccd-43c7-8819-e2606bb03f15",
            data: {
              "animi": {
                "libero": "iusto",
              },
            },
            id: "8d5716f6-a76d-420f-b5d0-7dbda7a477f2",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "mollitia",
              "nulla",
            ],
            timezone: "America/Denver",
            tokens: {
              "reiciendis": "eos",
            },
            username: "Jameson_Swift",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
          {
            applicationId: "fb408c4a-fc61-43cb-9217-1db9fd78d1dd",
            authenticationToken: "consectetur",
            cleanSpeakId: "54baa888-dce1-4ba7-b197-2932f75631a6",
            data: {
              "sapiente": {
                "suscipit": "rerum",
                "quia": "enim",
                "eveniet": "quod",
                "illo": "aliquam",
              },
              "facilis": {
                "nemo": "saepe",
                "labore": "quidem",
                "itaque": "temporibus",
              },
            },
            id: "492fa312-2976-464a-8f28-b366f2a4df1b",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "sequi",
              "facilis",
              "nesciunt",
            ],
            timezone: "America/Denver",
            tokens: {
              "dolorem": "veritatis",
              "consequuntur": "necessitatibus",
              "non": "recusandae",
              "consequatur": "excepturi",
            },
            username: "Deon.Greenholt21",
            usernameStatus: ContentStatus.Pending,
            verified: false,
          },
        ],
        salt: "sit",
        tenantId: "89560e42-204f-4990-8975-4116cccf9abf",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 173654,
                timeStep: 448233,
              },
              email: "Delilah_Raynor@hotmail.com",
              id: "ed2f5261-9e14-473b-8466-b198101593f4",
              lastUsed: false,
              method: "fugit",
              mobilePhone: "iste",
              secret: "ea",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha512,
                codeLength: 513378,
                timeStep: 346787,
              },
              email: "Mallory0@yahoo.com",
              id: "7c19f0b0-6a53-4ad2-ad1b-afa1caa7c599",
              lastUsed: false,
              method: "quasi",
              mobilePhone: "nesciunt",
              secret: "provident",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha1,
                codeLength: 361821,
                timeStep: 895759,
              },
              email: "Nadia98@yahoo.com",
              id: "f70527e0-0ebf-4a2b-9013-c89b2c0b6c42",
              lastUsed: false,
              method: "praesentium",
              mobilePhone: "cupiditate",
              secret: "quae",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 405955,
                timeStep: 668252,
              },
              email: "Monroe62@yahoo.com",
              id: "1b4c5b12-55d3-421f-85f8-81b02cae7690",
              lastUsed: false,
              method: "ducimus",
              mobilePhone: "cupiditate",
              secret: "quas",
            },
          ],
          recoveryCodes: [
            "accusamus",
            "exercitationem",
            "maiores",
            "voluptatum",
          ],
        },
        uniqueUsername: "natus",
        username: "Felix_Cartwright60",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      userId: "2179edba-bb18-4f6b-9ddc-7bc9a3412a23",
    },
    {
      data: {
        "aliquam": {
          "autem": "ad",
        },
      },
      groupId: "30c41f9f-59b0-47b3-b4a1-0013a1e59a3a",
      id: "b8474475-9dba-43b3-87ea-4340c99cd756",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
        cleanSpeakId: "b1e02b74-575c-40fe-8e14-fac60d12f7e7",
        connectorId: "ba0673ce-9526-4a16-8122-ca2f19517092",
        data: {
          "nulla": {
            "saepe": "a",
            "libero": "ullam",
            "natus": "aut",
          },
          "inventore": {
            "eius": "facere",
          },
          "dolor": {
            "sed": "nihil",
            "perferendis": "eum",
            "praesentium": "maxime",
          },
          "delectus": {
            "assumenda": "nisi",
            "maxime": "reiciendis",
          },
        },
        email: "Kasandra.Keebler76@hotmail.com",
        encryptionScheme: "eius",
        expiry: 1659380719000,
        factor: 720830,
        firstName: "Magdalena",
        fullName: "consequatur",
        id: "ade5518d-6f41-49ea-9c02-235c2b9b4667",
        imageUrl: "illum",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Howell",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
        ],
        middleName: "beatae",
        mobilePhone: "nobis",
        parentEmail: "ratione",
        password: "at",
        passwordChangeReason: ChangePasswordReason.Expired,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "b97d510c-58bf-4ca9-9f12-f9e1d8d98944",
            authenticationToken: "aspernatur",
            cleanSpeakId: "acbf7a4b-8bc5-4fec-963e-882d5d606d37",
            data: {
              "rerum": {
                "quis": "quo",
                "corporis": "laudantium",
              },
              "saepe": {
                "expedita": "enim",
              },
              "hic": {
                "inventore": "cupiditate",
                "quae": "soluta",
              },
              "explicabo": {
                "placeat": "fugiat",
                "nisi": "optio",
                "reprehenderit": "rem",
              },
            },
            id: "0f5c5596-ba09-41f8-920b-f685cd0a279a",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "ipsa",
              "excepturi",
              "eligendi",
              "maiores",
            ],
            timezone: "America/Denver",
            tokens: {
              "commodi": "magnam",
              "soluta": "qui",
              "exercitationem": "perferendis",
            },
            username: "Robin26",
            usernameStatus: ContentStatus.Pending,
            verified: false,
          },
          {
            applicationId: "bd549c62-ef65-4eaa-bdfa-90f3ff1a1e21",
            authenticationToken: "fugit",
            cleanSpeakId: "eef78003-b8c6-492c-9811-1e086e8d6256",
            data: {
              "quaerat": {
                "accusantium": "iure",
                "praesentium": "cumque",
              },
              "sunt": {
                "ut": "enim",
                "dolor": "adipisci",
                "quae": "eaque",
              },
            },
            id: "b9e9bdd0-0b8b-46c7-bc47-7ec79fab4b7c",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "deserunt",
            ],
            timezone: "America/Denver",
            tokens: {
              "ipsa": "cum",
              "nisi": "quo",
              "sapiente": "voluptate",
            },
            username: "Ike_Towne45",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
        ],
        salt: "necessitatibus",
        tenantId: "d762147d-417d-4525-88d2-e6045ff60751",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha1,
                codeLength: 73589,
                timeStep: 517468,
              },
              email: "Tre_Schuppe96@hotmail.com",
              id: "39786350-2563-4ff3-8204-e012bca853b3",
              lastUsed: false,
              method: "ullam",
              mobilePhone: "consectetur",
              secret: "similique",
            },
          ],
          recoveryCodes: [
            "pariatur",
            "culpa",
          ],
        },
        uniqueUsername: "aliquam",
        username: "Elise.Becker7",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
      userId: "a8ae6ea1-036a-4956-9852-001331a2feba",
    },
    {
      data: {
        "aliquid": {
          "reiciendis": "aspernatur",
        },
        "expedita": {
          "nulla": "dicta",
          "eum": "quia",
        },
        "provident": {
          "sed": "facere",
          "ea": "quo",
        },
        "recusandae": {
          "suscipit": "libero",
          "delectus": "quibusdam",
        },
      },
      groupId: "cbe4ecd8-19b1-4f79-a3d9-a49db49e675d",
      id: "15c08ce2-c9d7-40a2-9712-0a324206c598",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatus.None,
        cleanSpeakId: "5a3fdd18-9d6e-4ddb-b0d4-970df261f626",
        connectorId: "5b78f1d4-e923-4834-b2b0-d545b391239d",
        data: {
          "minus": {
            "ipsum": "repudiandae",
            "ex": "eaque",
            "nemo": "corporis",
          },
          "fuga": {
            "quos": "numquam",
          },
          "est": {
            "rerum": "reiciendis",
            "voluptatum": "occaecati",
          },
        },
        email: "Lenora.Nikolaus99@yahoo.com",
        encryptionScheme: "quam",
        expiry: 1659380719000,
        factor: 489825,
        firstName: "Ruthe",
        fullName: "sunt",
        id: "58b09a21-e5f0-4a0e-a7f9-52926f4127c3",
        imageUrl: "expedita",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "McGlynn",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
        ],
        middleName: "est",
        mobilePhone: "dicta",
        parentEmail: "perferendis",
        password: "modi",
        passwordChangeReason: ChangePasswordReason.Expired,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "442ad7d6-e265-468d-bc4d-72fb26b87079",
            authenticationToken: "ad",
            cleanSpeakId: "ae0bd15c-a305-434b-b336-366e538e4cb9",
            data: {
              "repellendus": {
                "est": "deserunt",
                "maxime": "incidunt",
              },
            },
            id: "a2c464dc-5ce1-4dc6-a656-ee85c0ab6408",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "fugit",
              "minus",
            ],
            timezone: "America/Denver",
            tokens: {
              "deleniti": "velit",
              "saepe": "ex",
            },
            username: "Brooke_Crona",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
          {
            applicationId: "f944c209-ffe0-4f35-9c11-c83077cf9113",
            authenticationToken: "rem",
            cleanSpeakId: "a2635068-0f7f-44c2-a777-59597dcf42e6",
            data: {
              "ea": {
                "at": "vitae",
                "cupiditate": "fuga",
                "adipisci": "vero",
                "nam": "nihil",
              },
            },
            id: "b58e4c90-03bd-4f96-b271-45e62d377a81",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "ducimus",
              "ad",
            ],
            timezone: "America/Denver",
            tokens: {
              "omnis": "dignissimos",
              "totam": "debitis",
            },
            username: "Aniyah30",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
          {
            applicationId: "9830ea4c-286a-444f-ad2c-c9e3ee4b1880",
            authenticationToken: "nostrum",
            cleanSpeakId: "2b1abe85-3a8f-40b2-b50b-7d957fb7cc0c",
            data: {
              "non": {
                "voluptates": "voluptas",
                "voluptas": "aut",
                "iusto": "a",
                "rem": "molestiae",
              },
              "dolorum": {
                "ut": "ratione",
                "dignissimos": "explicabo",
              },
              "corporis": {
                "commodi": "eius",
                "non": "vitae",
                "sequi": "ipsa",
                "quas": "labore",
              },
            },
            id: "75c73689-bc57-4a92-9c61-23d096cd8e5d",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "minima",
              "fugit",
              "minima",
              "saepe",
            ],
            timezone: "America/Denver",
            tokens: {
              "voluptatem": "nulla",
              "aliquam": "autem",
              "iure": "ad",
            },
            username: "Adela_Hyatt89",
            usernameStatus: ContentStatus.Active,
            verified: false,
          },
          {
            applicationId: "4b31db5c-1ded-49a0-994e-6700b486b2c5",
            authenticationToken: "maiores",
            cleanSpeakId: "aef8cfe5-b305-4f4b-8786-9ee0a1c34f0a",
            data: {
              "culpa": {
                "dolor": "eligendi",
                "eaque": "consequatur",
                "sed": "molestias",
              },
              "delectus": {
                "doloremque": "asperiores",
                "eius": "quam",
              },
            },
            id: "f3135789-85eb-4f97-a0d6-53315a474f59",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "necessitatibus",
              "fuga",
              "est",
            ],
            timezone: "America/Denver",
            tokens: {
              "eveniet": "id",
              "inventore": "atque",
            },
            username: "Darrick_Koepp91",
            usernameStatus: ContentStatus.Rejected,
            verified: false,
          },
        ],
        salt: "omnis",
        tenantId: "2a341715-6129-4272-a1c3-f0b0181e0146",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 204411,
                timeStep: 978387,
              },
              email: "Mallie_Trantow@hotmail.com",
              id: "1b9fac8c-5639-4aaa-a960-98726100ee59",
              lastUsed: false,
              method: "sunt",
              mobilePhone: "doloremque",
              secret: "voluptates",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithm.HmacSha256,
                codeLength: 701698,
                timeStep: 869283,
              },
              email: "Kobe38@yahoo.com",
              id: "5c2259ba-5d8b-4178-b52b-d905bf7ea4aa",
              lastUsed: false,
              method: "at",
              mobilePhone: "doloremque",
              secret: "expedita",
            },
          ],
          recoveryCodes: [
            "voluptas",
            "asperiores",
            "libero",
          ],
        },
        uniqueUsername: "illo",
        username: "Ignacio.Lynch",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      userId: "df1bf7b4-4d3e-4de7-a0cc-9ad7cdd18844",
    },
  ],
}).then((res: UpdateGroupMembersWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateGroupWithId

Updates the group with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateGroupWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateGroupWithId("voluptas", {
  group: {
    data: {
      "quibusdam": {
        "nulla": "distinctio",
        "a": "eum",
        "error": "necessitatibus",
      },
      "deserunt": {
        "pariatur": "consequatur",
        "amet": "vitae",
        "enim": "expedita",
        "eveniet": "magnam",
      },
      "enim": {
        "ipsa": "molestias",
      },
    },
    id: "f93e42e6-8827-4095-a93e-8966ab9b0ccc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Milton Reilly",
    roles: [
      {
        description: "ipsa",
        id: "549e093f-e001-4927-aa00-a24781d7b4c8",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Celia Koch",
      },
      {
        description: "dolores",
        id: "8f612b79-5b82-464e-afa2-c5f2d76c29e2",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mrs. Leon Gerlach",
      },
      {
        description: "laudantium",
        id: "3a96a5f7-713e-4642-8955-657e7960c571",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Dr. Adrian Roob",
      },
      {
        description: "voluptatum",
        id: "f15c1d37-da2f-4969-9e8f-cbe8aa6ee297",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Katie Jacobson IV",
      },
    ],
    tenantId: "72945ea3-f929-4de4-b5dc-b0170bbe46df",
  },
  roleIds: [
    "8fb29bc5-a2e7-49df-bf2b-2c2ec3ebd2cf",
    "9095862a-2665-41b1-9016-ecfb2440fc71",
    "a5265730-ea72-4c4f-ae06-7e9b8aa830cd",
  ],
}, "possimus").then((res: UpdateGroupWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateIPAccessControlListWithId

Updates the IP Access Control List with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateIPAccessControlListWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateIPAccessControlListWithId("sed", {
  ipAccessControlList: {
    data: {
      "nulla": {
        "rerum": "quasi",
        "nobis": "quidem",
        "iste": "sed",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryAction.Allow,
        endIPAddress: "sunt",
        startIPAddress: "officia",
      },
      {
        action: IPAccessControlEntryAction.Block,
        endIPAddress: "explicabo",
        startIPAddress: "ab",
      },
      {
        action: IPAccessControlEntryAction.Allow,
        endIPAddress: "quos",
        startIPAddress: "consequatur",
      },
      {
        action: IPAccessControlEntryAction.Block,
        endIPAddress: "unde",
        startIPAddress: "porro",
      },
    ],
    id: "d447c674-0a2a-4adc-9c0d-2f87ffc0a436",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Rickey Schaefer",
  },
}).then((res: UpdateIPAccessControlListWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateIdentityProviderWithId

Updates the identity provider with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateIdentityProviderWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  CanonicalizationMethod,
  ClientAuthenticationMethod,
  IdentityProviderLinkingStrategy,
  IdentityProviderLoginMethod,
  IdentityProviderType,
  SAMLv2DestinationAssertionPolicy,
  SteamAPIMode,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateIdentityProviderWithId("reiciendis", {
  identityProvider: {
    applicationConfiguration: {
      "eaque": {
        buttonText: "iusto",
        clientId: "id",
        clientSecret: "minus",
        createRegistration: false,
        data: {
          "libero": {
            "asperiores": "pariatur",
            "perspiciatis": "beatae",
          },
        },
        loginMethod: IdentityProviderLoginMethod.UsePopup,
        properties: {
          api: "dicta",
          button: "ratione",
        },
        scope: "quae",
      },
      "laborum": {
        buttonText: "iusto",
        clientId: "autem",
        clientSecret: "illum",
        createRegistration: false,
        data: {
          "officiis": {
            "itaque": "quam",
            "laboriosam": "ratione",
          },
        },
        loginMethod: IdentityProviderLoginMethod.UseVendorJavaScript,
        properties: {
          api: "tempora",
          button: "consequatur",
        },
        scope: "eaque",
      },
      "architecto": {
        buttonText: "sint",
        clientId: "suscipit",
        clientSecret: "cupiditate",
        createRegistration: false,
        data: {
          "eius": {
            "voluptatem": "voluptate",
          },
          "tempore": {
            "vitae": "sapiente",
            "dolore": "enim",
            "laboriosam": "fugit",
            "quis": "eveniet",
          },
          "aut": {
            "dolore": "cumque",
            "cum": "nihil",
            "odit": "repudiandae",
            "maiores": "rerum",
          },
        },
        loginMethod: IdentityProviderLoginMethod.UseVendorJavaScript,
        properties: {
          api: "quaerat",
          button: "explicabo",
        },
        scope: "vitae",
      },
      "dolorum": {
        buttonText: "ipsam",
        clientId: "ullam",
        clientSecret: "facilis",
        createRegistration: false,
        data: {
          "facere": {
            "error": "eligendi",
            "ex": "ducimus",
            "commodi": "dicta",
          },
        },
        loginMethod: IdentityProviderLoginMethod.UsePopup,
        properties: {
          api: "autem",
          button: "ad",
        },
        scope: "mollitia",
      },
    },
    buttonText: "ipsam",
    clientId: "beatae",
    clientSecret: "amet",
    data: {
      "voluptate": {
        "quia": "blanditiis",
        "esse": "recusandae",
      },
      "suscipit": {
        "numquam": "ut",
        "quas": "natus",
        "deserunt": "laborum",
        "illo": "rerum",
      },
    },
    debug: false,
    id: "e47bd9d7-f1a1-4982-a1cd-9813e5ca0aad",
    insertInstant: 1659380719000,
    lambdaConfiguration: {
      reconcileId: "cb96ab11-1e5d-49dd-a12e-412dbec4c483",
    },
    lastUpdateInstant: 1659380719000,
    linkingStrategy: IdentityProviderLinkingStrategy.LinkByEmailForExistingUser,
    loginMethod: IdentityProviderLoginMethod.UseVendorJavaScript,
    name: "Mrs. William Hodkiewicz",
    properties: {
      api: "id",
      button: "deleniti",
    },
    scope: "pariatur",
    tenantConfiguration: {
      "repudiandae": {
        data: {
          "quasi": {
            "ipsam": "dolor",
            "architecto": "maxime",
          },
          "velit": {
            "in": "expedita",
            "quis": "similique",
            "blanditiis": "labore",
            "vero": "assumenda",
          },
          "esse": {
            "sit": "voluptate",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 392868,
        },
      },
      "impedit": {
        data: {
          "nostrum": {
            "quis": "ab",
            "nesciunt": "nihil",
            "voluptates": "assumenda",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 308826,
        },
      },
    },
    type: IdentityProviderType.OpenIDConnect,
  },
}).then((res: UpdateIdentityProviderWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateIntegrationsWithId

Updates the available integrations.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateIntegrationsWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateIntegrationsWithId({
  integrations: {
    cleanspeak: {
      apiKey: "quod",
      applicationIds: [
        "d3839efe-8ed8-4270-bec4-3a380990093c",
        "b94699cb-f4e0-4962-b0df-2c8a24b337af",
        "b5b1c7ee-0308-452a-a1d9-9bdb9ba366c5",
      ],
      enabled: false,
      url: "optio",
      usernameModeration: {
        applicationId: "ca4ab4a3-d1ad-4490-9a55-296e0bff3ae9",
        enabled: false,
      },
    },
    kafka: {
      defaultTopic: "quia",
      enabled: false,
      producer: {
        "laboriosam": "rerum",
        "repellat": "impedit",
        "minima": "itaque",
      },
    },
  },
}).then((res: UpdateIntegrationsWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateKeyWithId

Updates the key with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateKeyWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateKeyWithId("officia", {
  key: {
    algorithm: KeyAlgorithm.Rs512,
    certificate: "cum",
    certificateInformation: {
      issuer: "earum",
      md5Fingerprint: "quam",
      serialNumber: "consectetur",
      sha1Fingerprint: "deserunt",
      sha1Thumbprint: "rerum",
      sha256Fingerprint: "dolorum",
      sha256Thumbprint: "placeat",
      subject: "fugit",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "bfc7a8b9-cd5b-4d02-a695-de3b9fbc7ac3",
    insertInstant: 1659380719000,
    issuer: "accusantium",
    kid: "corrupti",
    lastUpdateInstant: 1659380719000,
    length: 922479,
    name: "Jessie Legros",
    privateKey: "illum",
    publicKey: "doloremque",
    secret: "soluta",
    type: KeyType.Rsa,
  },
}).then((res: UpdateKeyWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateLambdaWithId

Updates the lambda with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateLambdaWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateLambdaWithId("aliquid", {
  lambda: {
    body: "impedit",
    debug: false,
    engineType: LambdaEngineType.Nashorn,
    id: "7cae6bf2-fc99-486e-b410-79e80e228e71",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Allison Oberbrunner",
    type: LambdaType.NintendoReconcile,
  },
}).then((res: UpdateLambdaWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMessageTemplateWithId

Updates the message template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateMessageTemplateWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateMessageTemplateWithId("quisquam", {
  messageTemplate: {
    data: {
      "quis": {
        "nostrum": "aut",
      },
    },
    id: "759de338-9030-4692-a6ce-9c91f57b0fc9",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Rita Feeney III",
    type: MessageType.Sms,
  },
}).then((res: UpdateMessageTemplateWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMessengerWithId

Updates the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateMessengerWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateMessengerWithId("minus", {
  messenger: {
    data: {
      "quae": {
        "voluptatum": "ullam",
        "repudiandae": "magnam",
        "nisi": "consectetur",
        "eos": "autem",
      },
      "occaecati": {
        "modi": "reiciendis",
      },
      "debitis": {
        "incidunt": "error",
        "repellendus": "aperiam",
        "dolor": "reprehenderit",
      },
      "occaecati": {
        "vero": "facilis",
        "est": "labore",
      },
    },
    debug: false,
    id: "4c987761-d9d7-4d6f-8ccf-f8f025f2bfc7",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Alonzo Bartoletti",
    transport: "molestiae",
    type: MessengerType.Twilio,
  },
}).then((res: UpdateMessengerWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateRegistrationWithId

Updates the registration for the user with the given id and the application defined in the request.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateRegistrationWithId("officia", {
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "sint": {
        "possimus": "modi",
        "ipsam": "dicta",
      },
      "molestiae": {
        "architecto": "maiores",
        "dolorum": "suscipit",
        "eum": "tenetur",
      },
      "assumenda": {
        "ipsum": "sequi",
      },
      "expedita": {
        "perferendis": "temporibus",
      },
    },
    deviceDescription: "voluptas",
    deviceName: "iusto",
    deviceType: "cupiditate",
    ipAddress: "atque",
    location: {
      city: "Jimmyborough",
      country: "Guernsey",
      displayString: "nam",
      latitude: 5824.48,
      longitude: 7765.27,
      region: "perspiciatis",
      zipcode: "09943-6563",
    },
    os: "neque",
    userAgent: "repellendus",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "d8a0d1b9-fcf9-4632-828d-cc410efc30e0",
    authenticationToken: "sapiente",
    cleanSpeakId: "b62ef05f-67ac-44ab-8b06-7071fa51f25b",
    data: {
      "corporis": {
        "nam": "consectetur",
        "at": "dolores",
        "quis": "odit",
        "repellendus": "officiis",
      },
    },
    id: "614f8818-3c3e-4cdd-a0dd-f23b422b6cf0",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
      "en_US",
    ],
    roles: [
      "recusandae",
    ],
    timezone: "America/Denver",
    tokens: {
      "natus": "magnam",
      "soluta": "minus",
      "architecto": "sit",
    },
    username: "Keshawn_Kiehn73",
    usernameStatus: ContentStatus.Pending,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
    cleanSpeakId: "f11f429d-8b35-4d0c-b6a5-9f39710f30a8",
    connectorId: "0c9f210d-a0c1-468f-8a0a-1e63d05ae618",
    data: {
      "rem": {
        "molestiae": "exercitationem",
        "quas": "modi",
        "animi": "nihil",
        "neque": "atque",
      },
      "reiciendis": {
        "tempore": "eaque",
        "voluptatum": "fuga",
      },
      "voluptas": {
        "adipisci": "quidem",
      },
      "nesciunt": {
        "a": "molestias",
        "expedita": "libero",
        "facilis": "earum",
        "neque": "recusandae",
      },
    },
    email: "Halle_Leannon54@hotmail.com",
    encryptionScheme: "dolore",
    expiry: 1659380719000,
    factor: 220128,
    firstName: "Johnathan",
    fullName: "quos",
    id: "084817b3-606f-42b3-9b0f-3be90e23d4c0",
    imageUrl: "enim",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Brakus",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "facere": {
            "impedit": "quod",
          },
          "numquam": {
            "perferendis": "modi",
          },
          "qui": {
            "laboriosam": "explicabo",
            "sed": "illum",
            "aperiam": "eius",
            "beatae": "voluptates",
          },
          "laudantium": {
            "facere": "quam",
          },
        },
        groupId: "67499ad4-cb7a-49a1-8d74-50d8b1e15b81",
        id: "976d264b-0472-4089-9e0a-ca40ee9ca131",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.PasswordOnly,
          cleanSpeakId: "f2a52687-7c4f-47c4-b4cf-097c850c4c6c",
          connectorId: "044c43df-7420-45f2-80c4-baeab4b45bb3",
          data: {
            "ut": {
              "illo": "magnam",
              "error": "sed",
            },
          },
          email: "Sidney.Smitham@gmail.com",
          encryptionScheme: "deleniti",
          expiry: 1659380719000,
          factor: 967843,
          firstName: "Jayce",
          fullName: "molestiae",
          id: "6cbe22a8-3773-4d27-8a36-8914077403d7",
          imageUrl: "libero",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Cartwright",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "commodi",
          mobilePhone: "incidunt",
          parentEmail: "in",
          password: "architecto",
          passwordChangeReason: ChangePasswordReason.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "306391c7-75b1-4e87-8f53-65fd26f35348",
              authenticationToken: "cupiditate",
              cleanSpeakId: "a60afc16-4ce7-4290-9df8-cfa408000057",
              data: {
                "architecto": {
                  "mollitia": "occaecati",
                  "nobis": "a",
                },
              },
              id: "90caf056-3552-46b4-bbad-d9fbf75357ef",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "explicabo",
                "facilis",
              ],
              timezone: "America/Denver",
              tokens: {
                "sunt": "incidunt",
                "alias": "veritatis",
                "hic": "nobis",
                "magni": "a",
              },
              username: "Jeanie82",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "1627314c-bdae-4a73-841b-76e2ec99106e",
              authenticationToken: "alias",
              cleanSpeakId: "aed33ea1-3f8b-4959-84d1-b599f6994f77",
              data: {
                "nisi": {
                  "unde": "et",
                  "tempora": "nobis",
                  "maxime": "dolor",
                },
              },
              id: "34cbff3a-397d-43dc-8990-936cb2387b05",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "magnam",
                "natus",
                "corrupti",
                "eaque",
              ],
              timezone: "America/Denver",
              tokens: {
                "qui": "doloremque",
                "provident": "et",
                "perferendis": "illum",
                "sit": "omnis",
              },
              username: "Korey.Kessler45",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
          ],
          salt: "fugit",
          tenantId: "eb3a73e4-15a2-4de1-96b6-092377092f83",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 762619,
                  timeStep: 220797,
                },
                email: "Melissa.McKenzie@yahoo.com",
                id: "cb47a67b-bdd3-4de5-b6e5-a351eb7d3cf5",
                lastUsed: false,
                method: "excepturi",
                mobilePhone: "quae",
                secret: "natus",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 718563,
                  timeStep: 846273,
                },
                email: "Olga_Carter79@gmail.com",
                id: "682759b9-a23e-440d-b6a5-2ca73ccfeef0",
                lastUsed: false,
                method: "delectus",
                mobilePhone: "optio",
                secret: "similique",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 907533,
                  timeStep: 288620,
                },
                email: "Isabelle.Kub@hotmail.com",
                id: "e9aa943a-9d61-4d23-9681-549b771696b0",
                lastUsed: false,
                method: "assumenda",
                mobilePhone: "placeat",
                secret: "culpa",
              },
            ],
            recoveryCodes: [
              "debitis",
            ],
          },
          uniqueUsername: "asperiores",
          username: "Grady_Macejkovic67",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "9a717e85-84f2-4312-952f-68fb5a329c77",
      },
      {
        data: {
          "cupiditate": {
            "dignissimos": "quam",
            "dolores": "tempore",
            "quaerat": "aliquid",
            "sunt": "voluptas",
          },
          "rem": {
            "maxime": "corporis",
            "nobis": "consectetur",
          },
        },
        groupId: "731b21aa-81fe-4638-8281-88222a497461",
        id: "8efe00a2-cd8c-4295-9ed5-3bd566df0a5b",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
          cleanSpeakId: "eed24273-d123-4121-8279-be41b0c74de0",
          connectorId: "a4289b1d-febb-415f-b3d7-5856722a72d7",
          data: {
            "delectus": {
              "laudantium": "aut",
            },
            "quasi": {
              "temporibus": "nostrum",
              "ipsum": "cupiditate",
            },
            "quisquam": {
              "similique": "dolorum",
              "repudiandae": "nam",
              "sint": "itaque",
            },
            "odio": {
              "deserunt": "fugit",
              "quibusdam": "ipsa",
              "magnam": "consequatur",
              "nemo": "impedit",
            },
          },
          email: "Abbigail95@gmail.com",
          encryptionScheme: "quaerat",
          expiry: 1659380719000,
          factor: 419619,
          firstName: "Mackenzie",
          fullName: "odio",
          id: "3d47097c-1958-4d01-90a5-a280992cd5e6",
          imageUrl: "nostrum",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Reilly",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "culpa",
          mobilePhone: "sed",
          parentEmail: "atque",
          password: "earum",
          passwordChangeReason: ChangePasswordReason.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "a0698a50-8a6f-4b3b-ad39-f015149fd2fc",
              authenticationToken: "at",
              cleanSpeakId: "d268f981-5838-489d-8bff-e915d70b3c97",
              data: {
                "iste": {
                  "error": "ex",
                  "exercitationem": "in",
                  "earum": "nobis",
                  "quae": "at",
                },
                "laboriosam": {
                  "et": "saepe",
                  "sed": "corrupti",
                  "doloribus": "rerum",
                },
                "ipsam": {
                  "neque": "autem",
                  "facilis": "magnam",
                },
                "ad": {
                  "consequuntur": "recusandae",
                  "laudantium": "occaecati",
                },
              },
              id: "29bac359-164e-458d-ac66-248e69d0df9b",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "iusto",
              ],
              timezone: "America/Denver",
              tokens: {
                "hic": "ex",
                "doloribus": "nostrum",
                "aperiam": "officiis",
              },
              username: "Hailie16",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
            {
              applicationId: "cf9d53d7-cc70-41e9-8252-15fc28ac7875",
              authenticationToken: "ex",
              cleanSpeakId: "9f347f1b-816e-41e0-b958-f518a437133c",
              data: {
                "exercitationem": {
                  "libero": "unde",
                  "qui": "reprehenderit",
                },
                "rem": {
                  "nesciunt": "nisi",
                  "eius": "eaque",
                  "nostrum": "quaerat",
                  "minus": "eum",
                },
                "quidem": {
                  "aperiam": "molestias",
                  "impedit": "officiis",
                  "vel": "aspernatur",
                  "assumenda": "deserunt",
                },
              },
              id: "0a64060e-8f98-49c0-8cf7-eaced31459e7",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "illum",
                "ex",
                "dolorem",
              ],
              timezone: "America/Denver",
              tokens: {
                "nulla": "dolor",
                "maiores": "expedita",
                "delectus": "sapiente",
              },
              username: "Lloyd15",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
          ],
          salt: "nobis",
          tenantId: "cef1324e-6ad9-4f10-8853-36ac7e931bb6",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 430929,
                  timeStep: 510997,
                },
                email: "Donald0@hotmail.com",
                id: "3c4a4baa-c7e6-4c91-a484-38ac3dcfdeb6",
                lastUsed: false,
                method: "blanditiis",
                mobilePhone: "sint",
                secret: "dolore",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 391869,
                  timeStep: 103034,
                },
                email: "Filiberto_Rutherford@gmail.com",
                id: "4dbbcdf0-5c65-4d6c-bff4-ca977c8b7314",
                lastUsed: false,
                method: "facilis",
                mobilePhone: "aliquid",
                secret: "deleniti",
              },
            ],
            recoveryCodes: [
              "vero",
            ],
          },
          uniqueUsername: "nostrum",
          username: "Sonny.Graham",
          usernameStatus: ContentStatus.Rejected,
          verified: false,
        },
        userId: "dc2e5b02-b137-4e67-802d-f43578d0d680",
      },
    ],
    middleName: "praesentium",
    mobilePhone: "tempora",
    parentEmail: "fugit",
    password: "ipsum",
    passwordChangeReason: ChangePasswordReason.Validation,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "46e9effa-e7e4-4d2b-88d5-44e08118d932",
        authenticationToken: "voluptatibus",
        cleanSpeakId: "a34c5dd2-b830-47f8-a9c4-9b4273927f77",
        data: {
          "quas": {
            "culpa": "totam",
            "nam": "quia",
          },
        },
        id: "e713ab48-ce5b-479f-b81b-71a52f4b327f",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "quos",
          "commodi",
          "ea",
          "cumque",
        ],
        timezone: "America/Denver",
        tokens: {
          "nesciunt": "tempore",
          "reiciendis": "et",
        },
        username: "Joelle.Effertz",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
    ],
    salt: "sed",
    tenantId: "85224cbb-e601-4a03-b8c3-6cff106e66b9",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 867412,
            timeStep: 329017,
          },
          email: "Louvenia_Jacobs5@hotmail.com",
          id: "b3c5bf43-0379-4df4-87f5-5b38269903c5",
          lastUsed: false,
          method: "laborum",
          mobilePhone: "consequuntur",
          secret: "quam",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha512,
            codeLength: 973543,
            timeStep: 516541,
          },
          email: "Chloe_Schmitt@yahoo.com",
          id: "cfaf4223-6161-458c-a564-af97edf9d818",
          lastUsed: false,
          method: "aliquam",
          mobilePhone: "doloremque",
          secret: "quae",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha256,
            codeLength: 590914,
            timeStep: 566910,
          },
          email: "Ashleigh40@gmail.com",
          id: "ecd1db48-db35-4635-bf29-b904b00a4c81",
          lastUsed: false,
          method: "vero",
          mobilePhone: "beatae",
          secret: "vero",
        },
      ],
      recoveryCodes: [
        "doloribus",
        "sapiente",
        "cum",
      ],
    },
    uniqueUsername: "facilis",
    username: "Keegan41",
    usernameStatus: ContentStatus.Active,
    verified: false,
  },
}, "debitis").then((res: UpdateRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateSystemConfigurationWithId

Updates the system configuration.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateSystemConfigurationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { HTTPMethod } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateSystemConfigurationWithId({
  systemConfiguration: {
    auditLogConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 231382,
      },
    },
    corsConfiguration: {
      allowCredentials: false,
      allowedHeaders: [
        "unde",
        "sapiente",
        "dolores",
        "non",
      ],
      allowedMethods: [
        HTTPMethod.Get,
      ],
      allowedOrigins: [
        "sit",
        "iusto",
      ],
      debug: false,
      enabled: false,
      exposedHeaders: [
        "ut",
        "ea",
        "amet",
      ],
      preflightMaxAgeInSeconds: 452253,
    },
    data: {
      "ut": {
        "assumenda": "dolor",
        "error": "nulla",
        "assumenda": "iusto",
        "fugiat": "ullam",
      },
      "velit": {
        "cupiditate": "vel",
      },
    },
    eventLogConfiguration: {
      numberToRetain: 47839,
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    loginRecordConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 821956,
      },
    },
    reportTimezone: "America/Denver",
    uiConfiguration: {
      headerColor: "quasi",
      logoURL: "numquam",
      menuFontColor: "numquam",
    },
  },
}).then((res: UpdateSystemConfigurationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateTenantWithId

Updates the tenant with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateTenantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  EmailSecurityType,
  ExpiryUnit,
  MultiFactorLoginPolicy,
  ObjectState,
  RefreshTokenExpirationPolicy,
  RefreshTokenUsagePolicy,
  SecureGeneratorType,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateTenantWithId("ipsam", {
  eventInfo: {
    data: {
      "quisquam": {
        "minus": "esse",
        "modi": "perspiciatis",
        "iusto": "dolorem",
        "odio": "ad",
      },
    },
    deviceDescription: "temporibus",
    deviceName: "ab",
    deviceType: "culpa",
    ipAddress: "totam",
    location: {
      city: "Omaha",
      country: "Lithuania",
      displayString: "sint",
      latitude: 4760.04,
      longitude: 7872.12,
      region: "eveniet",
      zipcode: "20539-9109",
    },
    os: "similique",
    userAgent: "eligendi",
  },
  sourceTenantId: "28a6811b-1592-44da-9dbd-c4b84e18b6d4",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "083554dd-f21c-49c9-ab54-0d5ce4339633",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethod.GoogleRecaptchaV3,
      enabled: false,
      secretKey: "doloribus",
      siteKey: "eum",
      threshold: 3021.03,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "54ad3f09-2c2f-48f2-85f7-5a06df4e19eb",
        data: {
          "eum": {
            "quidem": "reiciendis",
            "porro": "officia",
            "assumenda": "ut",
            "ipsa": "quia",
          },
        },
        domains: [
          "dolore",
        ],
        migrate: false,
      },
    ],
    data: {
      "corrupti": {
        "adipisci": "dolore",
      },
      "repellendus": {
        "debitis": "excepturi",
      },
      "animi": {
        "dolorum": "nihil",
        "rem": "accusantium",
        "dolor": "eaque",
        "officiis": "eos",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Anthony Von I",
          value: "dolorem",
        },
        {
          name: "Ms. Rosalie Spinka",
          value: "modi",
        },
        {
          name: "Devin Von",
          value: "error",
        },
      ],
      debug: false,
      defaultFromEmail: "laudantium",
      defaultFromName: "quaerat",
      emailUpdateEmailTemplateId: "b414bd6b-b86a-4678-a387-ab2aebaa4f17",
      emailVerifiedEmailTemplateId: "9be75fc9-1a1f-4439-a93e-2a2c467bbf86",
      forgotPasswordEmailTemplateId: "33ba93a0-4e03-4f30-b127-20b02f02e12a",
      host: "neque",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "6d4deedc-8571-4985-a316-63f7086afd00",
      loginIdInUseOnUpdateEmailTemplateId: "f1e7bca5-e9a6-4c00-8e0e-b5d549678780",
      loginNewDeviceEmailTemplateId: "85014b89-5793-49c7-b1cb-838e3ed61453",
      loginSuspiciousEmailTemplateId: "99c2821b-a410-463e-8358-f402eb9e8450",
      password: "quas",
      passwordResetSuccessEmailTemplateId: "f4ab3134-727b-46f4-b5e1-03a563c3cf82",
      passwordUpdateEmailTemplateId: "c6beaa8f-b177-47ff-b1d5-589f66e8bf51",
      passwordlessEmailTemplateId: "54c5860f-c017-44e3-9e5d-3efe6e82dcf5",
      port: 994741,
      properties: "nesciunt",
      security: EmailSecurityType.Ssl,
      setPasswordEmailTemplateId: "2a92b387-827a-467b-8b3e-7b0c4228867f",
      twoFactorMethodAddEmailTemplateId: "befecaf3-ca7c-4421-9ea8-3c481195b0dd",
      twoFactorMethodRemoveEmailTemplateId: "cb7fb07c-89b4-4638-9fc6-e86783c99bc0",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehavior.Gated,
      },
      username: "Doug23",
      verificationEmailTemplateId: "c2c8a507-ef4e-4824-ba71-81738d28a897",
      verificationStrategy: VerificationStrategy.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "molestiae": {
          enabled: false,
          transactionType: TransactionType.AbsoluteMajority,
        },
        "numquam": {
          enabled: false,
          transactionType: TransactionType.Any,
        },
        "praesentium": {
          enabled: false,
          transactionType: TransactionType.SimpleMajority,
        },
        "quae": {
          enabled: false,
          transactionType: TransactionType.AbsoluteMajority,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 291975,
      changePasswordIdGenerator: {
        length: 20176,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      changePasswordIdTimeToLiveInSeconds: 48760,
      deviceCodeTimeToLiveInSeconds: 230709,
      deviceUserCodeIdGenerator: {
        length: 802238,
        type: SecureGeneratorType.RandomDigits,
      },
      emailVerificationIdGenerator: {
        length: 575258,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      emailVerificationIdTimeToLiveInSeconds: 576543,
      emailVerificationOneTimeCodeGenerator: {
        length: 670394,
        type: SecureGeneratorType.RandomDigits,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 428173,
      oneTimePasswordTimeToLiveInSeconds: 358474,
      passwordlessLoginGenerator: {
        length: 452716,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      passwordlessLoginTimeToLiveInSeconds: 856002,
      pendingAccountLinkTimeToLiveInSeconds: 166189,
      registrationVerificationIdGenerator: {
        length: 867884,
        type: SecureGeneratorType.RandomDigits,
      },
      registrationVerificationIdTimeToLiveInSeconds: 732375,
      registrationVerificationOneTimeCodeGenerator: {
        length: 846535,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 831487,
      setupPasswordIdGenerator: {
        length: 785899,
        type: SecureGeneratorType.RandomDigits,
      },
      setupPasswordIdTimeToLiveInSeconds: 781158,
      trustTokenTimeToLiveInSeconds: 15483,
      twoFactorIdTimeToLiveInSeconds: 287825,
      twoFactorOneTimeCodeIdGenerator: {
        length: 45040,
        type: SecureGeneratorType.RandomAlphaNumeric,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 438854,
      twoFactorTrustIdTimeToLiveInSeconds: 945375,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 353279,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 768967,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 272849,
      actionDurationUnit: ExpiryUnit.Weeks,
      emailUser: false,
      resetCountInSeconds: 122706,
      tooManyAttempts: 309168,
      userActionId: "907a9586-7dfb-42d7-85cd-cf8a4e7748b4",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "52fa68fd-da52-4244-9510-a1549ebcf6c0",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 522597,
      enabled: false,
      familyRequestEmailTemplateId: "1e24d0e6-b7bd-4049-9570-e9194c867abc",
      maximumChildAge: 103097,
      minimumOwnerAge: 787065,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "e6d8040b-f465-4721-911c-223f2260a587",
    },
    formConfiguration: {
      adminUserFormId: "b7d51fc5-9060-47d5-8dfa-65259a633097",
    },
    httpSessionMaxInactiveInterval: 635793,
    id: "15118e09-22c4-49f5-9394-8bd3ffadcee0",
    insertInstant: 1659380719000,
    issuer: "aliquam",
    jwtConfiguration: {
      accessTokenKeyId: "2cfbe2df-21d9-4187-8e6f-e79c0dfc7e18",
      enabled: false,
      idTokenKeyId: "d81dc8f9-8f76-49e6-a5bb-305708ae6e32",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicy.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 886853,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicy.OneTimeUse,
      timeToLiveInSeconds: 294683,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "a6783dd6-de4d-42e5-942d-94fea8e15f84",
      scimEnterpriseUserResponseConverterId: "6a5984f9-4d43-48fe-8eac-5869be0d42dd",
      scimGroupRequestConverterId: "7e3e1093-e228-4d8e-a5e6-97415d9d19b6",
      scimGroupResponseConverterId: "bee9195b-c498-4d26-8b3c-1edac17de120",
      scimUserRequestConverterId: "a4598e28-9e4c-4c77-8785-83a0ab7c014c",
      scimUserResponseConverterId: "1e8ab14f-b165-4aeb-8163-99d441287fd3",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "sunt",
    maximumPasswordAge: {
      days: 6420,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 904920,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithm.HmacSha1,
        codeLength: 783908,
        enabled: false,
        timeStep: 167685,
      },
      email: {
        enabled: false,
        templateId: "88b5648e-6301-4546-bd25-6d57ffa86687",
      },
      loginPolicy: MultiFactorLoginPolicy.Enabled,
      sms: {
        enabled: false,
        messengerId: "48183b97-7bf6-4db1-9599-c496d2bd7104",
        templateId: "82cf31af-3878-4aa8-81ee-e5795c0163e0",
      },
    },
    name: "Mrs. Billy Kunde",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "c0ccff39-7543-4736-a4d7-f4396e2f3dda",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "quos",
      encryptionSchemeFactor: 774270,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchMode.Low,
        notifyUserEmailTemplateId: "f853a2ef-63b0-45e5-b891-230f68de43ac",
        onLogin: BreachAction.RequireChange,
      },
      maxLength: 616674,
      minLength: 956050,
      rememberPreviousPasswords: {
        count: 553474,
        enabled: false,
      },
      requireMixedCase: false,
      requireNonAlpha: false,
      requireNumber: false,
      validateOnLogin: false,
    },
    rateLimitConfiguration: {
      failedLogin: {
        enabled: false,
        limit: 570165,
        timePeriodInSeconds: 51283,
      },
      forgotPassword: {
        enabled: false,
        limit: 413157,
        timePeriodInSeconds: 833758,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 254005,
        timePeriodInSeconds: 316526,
      },
      sendPasswordless: {
        enabled: false,
        limit: 972682,
        timePeriodInSeconds: 134090,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 749555,
        timePeriodInSeconds: 183231,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 218699,
        timePeriodInSeconds: 148515,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "fuga",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "34e792d5-4028-4221-94bd-11c23b15e8cb",
      enabled: false,
      schemas: {
        "optio": {
          "esse": "consequatur",
          "necessitatibus": "doloremque",
        },
        "architecto": {
          "quasi": "doloremque",
          "non": "commodi",
        },
        "voluptatem": {
          "blanditiis": "et",
          "eum": "ut",
          "repellat": "nulla",
          "ducimus": "totam",
        },
      },
      serverEntityTypeId: "e2c8e7fc-0823-4b68-9dc1-e87f8254e9c9",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 579319,
    },
    state: ObjectState.PendingDelete,
    themeId: "681fa03e-aa7c-4f2a-bb08-cbd64725a654",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 722988,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 267891,
        separator: "accusantium",
        strategy: UniqueUsernameStrategy.OnCollision,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Preferred,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreference.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirement.Preferred,
      },
      relyingPartyId: "itaque",
      relyingPartyName: "asperiores",
    },
  },
  webhookIds: [
    "56bed9d9-0b46-4cf0-a2bf-faeca713f72e",
  ],
}, "ipsam").then((res: UpdateTenantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateThemeWithId

Updates the theme with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateThemeWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateThemeWithId("quo", {
  sourceThemeId: "009fc60e-d982-4ba4-9e25-4802e0a5acdd",
  theme: {
    data: {
      "facilis": {
        "eaque": "asperiores",
        "eligendi": "possimus",
        "quod": "recusandae",
        "officiis": "nulla",
      },
      "cumque": {
        "itaque": "sunt",
        "unde": "fugiat",
        "labore": "perspiciatis",
        "vitae": "in",
      },
    },
    defaultMessages: "repellendus",
    id: "37fb0f16-e73c-4c18-b977-d83ba7c4f781",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "ipsa": "sit",
      "possimus": "quia",
    },
    name: "Laura Douglas",
    stylesheet: "accusamus",
    templates: {
      accountEdit: "quasi",
      accountIndex: "repellat",
      accountTwoFactorDisable: "dolor",
      accountTwoFactorEnable: "consequatur",
      accountTwoFactorIndex: "ducimus",
      accountWebAuthnAdd: "impedit",
      accountWebAuthnDelete: "corrupti",
      accountWebAuthnIndex: "ex",
      emailComplete: "porro",
      emailSend: "ipsa",
      emailSent: "dolorem",
      emailVerificationRequired: "enim",
      emailVerify: "rerum",
      helpers: "ea",
      index: "tenetur",
      oauth2Authorize: "accusamus",
      oauth2AuthorizedNotRegistered: "nostrum",
      oauth2ChildRegistrationNotAllowed: "laudantium",
      oauth2ChildRegistrationNotAllowedComplete: "expedita",
      oauth2CompleteRegistration: "culpa",
      oauth2Device: "quos",
      oauth2DeviceComplete: "ipsam",
      oauth2Error: "laudantium",
      oauth2Logout: "similique",
      oauth2Passwordless: "reiciendis",
      oauth2Register: "quidem",
      oauth2StartIdPLink: "sed",
      oauth2TwoFactor: "distinctio",
      oauth2TwoFactorEnable: "illum",
      oauth2TwoFactorEnableComplete: "magnam",
      oauth2TwoFactorMethods: "aspernatur",
      oauth2Wait: "at",
      oauth2WebAuthn: "aliquid",
      oauth2WebAuthnReauth: "numquam",
      oauth2WebAuthnReauthEnable: "quis",
      passwordChange: "dolorum",
      passwordComplete: "perspiciatis",
      passwordForgot: "dolor",
      passwordSent: "assumenda",
      registrationComplete: "accusantium",
      registrationSend: "occaecati",
      registrationSent: "quos",
      registrationVerificationRequired: "eius",
      registrationVerify: "odit",
      samlv2Logout: "non",
      unauthorized: "ullam",
    },
  },
}).then((res: UpdateThemeWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserActionReasonWithId

Updates the user action reason with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserActionReasonWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserActionReasonWithId("ex", {
  userActionReason: {
    code: "et",
    id: "9f993718-f6de-4301-af2a-6328763925ec",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "praesentium": "distinctio",
      "sunt": "veritatis",
      "sed": "dolorem",
    },
    text: "explicabo",
  },
}).then((res: UpdateUserActionReasonWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserActionWithId

Reactivates the user action with the given Id. OR Updates the user action with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserActionWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TransactionType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserActionWithId("saepe", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "ec45afdd-3d0f-4e6b-9cf6-acbec88d7c2c",
    endEmailTemplateId: "dd3d5894-0caa-468c-9046-99f16da5c345",
    id: "820bab6e-8281-4df0-ab3a-0e793dd76067",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "culpa": "reprehenderit",
      "fuga": "quasi",
      "maxime": "nihil",
      "a": "nostrum",
    },
    modifyEmailTemplateId: "085c5738-a617-45e0-8f7e-92b445c5b62c",
    name: "Angie Mraz DVM",
    options: [
      {
        localizedNames: {
          "minus": "odio",
          "mollitia": "omnis",
        },
        name: "Dean Hettinger",
      },
      {
        localizedNames: {
          "quaerat": "non",
        },
        name: "Megan Thiel",
      },
      {
        localizedNames: {
          "facilis": "praesentium",
          "alias": "neque",
          "nulla": "voluptates",
          "maiores": "cum",
        },
        name: "Ethel Morissette",
      },
      {
        localizedNames: {
          "fugit": "sint",
          "aliquam": "quos",
          "minus": "distinctio",
        },
        name: "Fredrick Mertz",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "ed49af77-b90b-4e5a-b090-7d4545ef7d80",
    temporal: false,
    transactionType: TransactionType.SimpleMajority,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "fuga", "voluptatem").then((res: UpdateUserActionWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserConsentWithId

Updates a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserConsentWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserConsentWithId("voluptates", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "2faed6ec-9846-4f6f-b37a-a76cf28746c8",
      countryMinimumAgeForSelfConsent: {
        "optio": "id",
        "magni": "reprehenderit",
        "quibusdam": "reprehenderit",
      },
      data: {
        "sequi": {
          "aperiam": "repellendus",
          "officiis": "labore",
        },
        "fugiat": {
          "nisi": "rem",
          "consectetur": "expedita",
          "deserunt": "amet",
          "minus": "beatae",
        },
        "fugit": {
          "velit": "eum",
        },
        "ducimus": {
          "beatae": "corporis",
          "vel": "perferendis",
        },
      },
      defaultMinimumAgeForSelfConsent: 404609,
      emailPlus: {
        emailTemplateId: "aa8aafb2-f1b8-455c-9122-5017dbf4d67b",
        enabled: false,
        maximumTimeToSendEmailInHours: 926557,
        minimumTimeToSendEmailInHours: 340720,
      },
      id: "7925f0cd-02f4-493e-afdb-382d8fb8149f",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Miss Alonzo Stoltenberg",
      values: [
        "iure",
        "necessitatibus",
        "id",
        "ullam",
      ],
    },
    consentId: "6eb8249b-5f7a-4fcb-9122-85a0c32ab19a",
    data: {
      "deserunt": {
        "voluptate": "quaerat",
        "dolorum": "odio",
        "ad": "ipsa",
        "voluptates": "temporibus",
      },
    },
    giverUserId: "d2dee560-0b94-45af-81c5-fa85e0cbdca8",
    id: "5eb95ac4-f29f-4e47-b559-44520125ac5c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatus.Active,
    userId: "294ac416-ddb9-4097-9195-bbe1b4f8e117",
    values: [
      "recusandae",
      "repudiandae",
      "quisquam",
      "aspernatur",
    ],
  },
}).then((res: UpdateUserConsentWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserVerifyEmail

Re-sends the verification email to the user. OR Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserVerifyEmailResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserVerifyEmail("corrupti", "exercitationem", "suscipit").then((res: UpdateUserVerifyEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserVerifyRegistration

Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system. OR Re-sends the application registration verification email to the user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserVerifyRegistrationResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserVerifyRegistration("perspiciatis", "culpa", "doloribus").then((res: UpdateUserVerifyRegistrationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserWithId

Reactivates the user with the given Id. OR Updates the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserWithId("explicabo", {
  applicationId: "008d4b7e-d90d-4e96-b8b9-e1f838dda1a8",
  currentPassword: "assumenda",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "consectetur": {
        "dignissimos": "occaecati",
        "nobis": "ratione",
        "voluptas": "nobis",
        "magnam": "odio",
      },
    },
    deviceDescription: "ipsa",
    deviceName: "vitae",
    deviceType: "molestias",
    ipAddress: "vel",
    location: {
      city: "New Geovanny",
      country: "Samoa",
      displayString: "nihil",
      latitude: 3651.79,
      longitude: 7442.56,
      region: "eaque",
      zipcode: "01348-5231",
    },
    os: "cumque",
    userAgent: "exercitationem",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
    cleanSpeakId: "284d39f8-fd5b-4aa5-8e80-25d38de4f3a6",
    connectorId: "469c544e-7869-49cd-9547-dd23d2a82de5",
    data: {
      "culpa": {
        "consequatur": "excepturi",
        "eveniet": "nam",
        "unde": "exercitationem",
        "eius": "cum",
      },
      "inventore": {
        "dolor": "ut",
        "similique": "cupiditate",
        "est": "dolorem",
      },
      "expedita": {
        "illum": "beatae",
        "deleniti": "omnis",
      },
    },
    email: "Evans.Wisozk@gmail.com",
    encryptionScheme: "eos",
    expiry: 1659380719000,
    factor: 293759,
    firstName: "Virgil",
    fullName: "expedita",
    id: "29f8b18f-d225-4563-b84d-bcc794d6bf7f",
    imageUrl: "unde",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Orn",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "a": {
            "dignissimos": "iusto",
            "ipsa": "architecto",
            "accusantium": "praesentium",
            "vel": "omnis",
          },
        },
        groupId: "12eaf417-8d5a-4ef0-bf8d-910dca647943",
        id: "f33bd336-efef-4ea1-ad33-2019585d7d46",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.SubAddressMatch,
          cleanSpeakId: "2332164f-13ed-4272-91bb-05f404badc40",
          connectorId: "28a0fddf-10d4-457d-9039-6810f8a3b0b8",
          data: {
            "nostrum": {
              "quisquam": "officiis",
            },
            "assumenda": {
              "inventore": "quasi",
              "autem": "eaque",
              "autem": "aliquid",
              "ipsum": "animi",
            },
          },
          email: "Clifford.Rath@yahoo.com",
          encryptionScheme: "consequatur",
          expiry: 1659380719000,
          factor: 503894,
          firstName: "Pauline",
          fullName: "nihil",
          id: "34b46597-24a8-46c7-ab12-a8b748d94bbb",
          imageUrl: "amet",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Gleason",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "soluta",
          mobilePhone: "impedit",
          parentEmail: "error",
          password: "modi",
          passwordChangeReason: ChangePasswordReason.Expired,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "5cfd4b1f-61ba-4f2a-a85c-d95a18e49cd7",
              authenticationToken: "praesentium",
              cleanSpeakId: "6b0359e3-0520-4b5a-a958-892a786ab0d7",
              data: {
                "autem": {
                  "quo": "molestiae",
                },
                "amet": {
                  "cumque": "unde",
                  "blanditiis": "illo",
                  "est": "laudantium",
                  "aperiam": "quidem",
                },
              },
              id: "d98b973a-d74e-4dae-ac0f-f2f30d2712c1",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "distinctio",
                "officia",
                "a",
              ],
              timezone: "America/Denver",
              tokens: {
                "natus": "sint",
                "laboriosam": "aperiam",
                "omnis": "delectus",
                "consequuntur": "corrupti",
              },
              username: "Willa.Ernser9",
              usernameStatus: ContentStatus.Pending,
              verified: false,
            },
          ],
          salt: "harum",
          tenantId: "80d2fe2d-7f56-440b-97fa-df87afc28cc0",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha1,
                  codeLength: 865450,
                  timeStep: 315188,
                },
                email: "Carol.Hamill@yahoo.com",
                id: "5a9a4c19-357e-41e5-98ea-5b9b2f41fa82",
                lastUsed: false,
                method: "repellendus",
                mobilePhone: "illum",
                secret: "at",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha256,
                  codeLength: 623137,
                  timeStep: 601713,
                },
                email: "Vicky.Schuster@gmail.com",
                id: "903a7537-50fe-44e0-aa7b-20e8b4669a4d",
                lastUsed: false,
                method: "laboriosam",
                mobilePhone: "veniam",
                secret: "error",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 272593,
                  timeStep: 439696,
                },
                email: "Odessa23@yahoo.com",
                id: "c4d2492f-d605-40af-a83c-c22966520883",
                lastUsed: false,
                method: "provident",
                mobilePhone: "consequatur",
                secret: "autem",
              },
            ],
            recoveryCodes: [
              "at",
              "vitae",
              "atque",
              "dignissimos",
            ],
          },
          uniqueUsername: "sunt",
          username: "Wilton61",
          usernameStatus: ContentStatus.Pending,
          verified: false,
        },
        userId: "70287404-37bb-4d98-994b-c101ece7003c",
      },
      {
        data: {
          "ipsa": {
            "officia": "molestiae",
            "facere": "vero",
          },
          "in": {
            "harum": "asperiores",
            "at": "explicabo",
            "esse": "alias",
            "nostrum": "vero",
          },
        },
        groupId: "4cf951e6-812b-419e-96a0-31c8e3401aa2",
        id: "b4036885-d357-4ae8-aa60-c55530b7c379",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatus.CommonPassword,
          cleanSpeakId: "3ce22a76-394b-4ffe-9236-e56211a37769",
          connectorId: "03019396-6756-4234-8950-1ca89cd71a88",
          data: {
            "optio": {
              "magnam": "laboriosam",
            },
            "veniam": {
              "non": "voluptates",
              "ullam": "excepturi",
              "amet": "quasi",
            },
            "in": {
              "repellendus": "neque",
              "molestias": "tempore",
            },
            "odit": {
              "exercitationem": "enim",
            },
          },
          email: "Larry.Gutmann53@gmail.com",
          encryptionScheme: "dignissimos",
          expiry: 1659380719000,
          factor: 189561,
          firstName: "Clemens",
          fullName: "molestias",
          id: "9c936381-dc99-41dc-ac11-10aa69456466",
          imageUrl: "saepe",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Koch",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "velit",
          mobilePhone: "alias",
          parentEmail: "illo",
          password: "eum",
          passwordChangeReason: ChangePasswordReason.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "9199831e-9a38-43bb-8f5d-6beddea7e8ea",
              authenticationToken: "sit",
              cleanSpeakId: "e11d6d05-34ec-4e77-a79e-e3e487a370b5",
              data: {
                "facilis": {
                  "labore": "quidem",
                  "doloremque": "maxime",
                  "delectus": "aperiam",
                },
                "earum": {
                  "natus": "perferendis",
                  "maiores": "temporibus",
                  "fugiat": "atque",
                },
              },
              id: "0fa0933e-df3e-45b6-ac00-bb20824d41d5",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "nisi",
              ],
              timezone: "America/Denver",
              tokens: {
                "praesentium": "eaque",
                "accusamus": "odit",
                "atque": "a",
              },
              username: "Peyton_Kuhlman19",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
            {
              applicationId: "b9af3946-e044-4254-8947-84221c201aec",
              authenticationToken: "rem",
              cleanSpeakId: "2c96d645-76d8-433e-9b3b-7edc7676afd7",
              data: {
                "ducimus": {
                  "adipisci": "impedit",
                  "molestiae": "quia",
                  "nostrum": "occaecati",
                },
                "quas": {
                  "iure": "facilis",
                },
                "vero": {
                  "quam": "nisi",
                },
                "deserunt": {
                  "quaerat": "architecto",
                  "numquam": "explicabo",
                  "quo": "maiores",
                },
              },
              id: "fa98e649-a651-4719-b6cf-124e3390a656",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "dignissimos",
                "blanditiis",
                "tenetur",
                "repellendus",
              ],
              timezone: "America/Denver",
              tokens: {
                "repellendus": "blanditiis",
                "molestias": "voluptatem",
                "aliquam": "tempore",
              },
              username: "Adriana56",
              usernameStatus: ContentStatus.Rejected,
              verified: false,
            },
            {
              applicationId: "bca21ba5-f274-416e-8600-4e5027c50353",
              authenticationToken: "id",
              cleanSpeakId: "313ae9d8-6f80-49c1-964f-41da61ff89f1",
              data: {
                "consectetur": {
                  "nobis": "ducimus",
                  "rerum": "earum",
                  "eos": "magni",
                },
              },
              id: "360a3882-9d0a-49d9-b1e3-5c93898f6522",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "sint",
                "ipsa",
                "ducimus",
              ],
              timezone: "America/Denver",
              tokens: {
                "reprehenderit": "hic",
                "temporibus": "ipsum",
              },
              username: "Chelsie.Marquardt",
              usernameStatus: ContentStatus.Active,
              verified: false,
            },
          ],
          salt: "nobis",
          tenantId: "171ef32c-74eb-4d06-83c1-99063c0fe7c7",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithm.HmacSha512,
                  codeLength: 394579,
                  timeStep: 140525,
                },
                email: "Troy.Macejkovic75@gmail.com",
                id: "d4c00dfe-e605-4d2d-9466-2f75dd9c3773",
                lastUsed: false,
                method: "eum",
                mobilePhone: "corporis",
                secret: "tempore",
              },
            ],
            recoveryCodes: [
              "cumque",
              "hic",
            ],
          },
          uniqueUsername: "tempora",
          username: "Gus.Bergnaum72",
          usernameStatus: ContentStatus.Active,
          verified: false,
        },
        userId: "9da8f43d-b2ac-4153-96d3-7836e3d20d06",
      },
    ],
    middleName: "rem",
    mobilePhone: "laborum",
    parentEmail: "maxime",
    password: "quo",
    passwordChangeReason: ChangePasswordReason.Breached,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "b2f385ef-105f-4aaf-add5-a7122d4ca6d6",
        authenticationToken: "qui",
        cleanSpeakId: "2ce9399e-3317-4bb7-bf29-2eea92b15c0e",
        data: {
          "libero": {
            "ducimus": "ad",
            "ratione": "nemo",
            "esse": "reiciendis",
            "labore": "nulla",
          },
        },
        id: "b0571131-445f-4b55-9ebf-b94148796f59",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "nesciunt",
          "consequatur",
          "tempora",
        ],
        timezone: "America/Denver",
        tokens: {
          "eius": "dolore",
          "sint": "omnis",
          "amet": "eligendi",
          "eius": "voluptatum",
        },
        username: "Jacklyn.Balistreri",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      {
        applicationId: "8195ade6-de41-48ef-b5cd-b60cefffae10",
        authenticationToken: "omnis",
        cleanSpeakId: "3ce70d48-2ef2-4c83-83cf-f0c863292b45",
        data: {
          "inventore": {
            "id": "totam",
            "quaerat": "quis",
            "porro": "adipisci",
          },
        },
        id: "900688ec-d47a-4b1b-aa1e-a1bb14e26651",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "minima",
          "eum",
        ],
        timezone: "America/Denver",
        tokens: {
          "possimus": "corrupti",
          "nihil": "debitis",
          "placeat": "incidunt",
        },
        username: "Carolyne76",
        usernameStatus: ContentStatus.Rejected,
        verified: false,
      },
      {
        applicationId: "18668b1f-0b4a-4f7a-921b-025d5565c48d",
        authenticationToken: "aspernatur",
        cleanSpeakId: "d12a20ab-75af-4c90-98c9-55b5f0484e3e",
        data: {
          "expedita": {
            "numquam": "ex",
          },
          "vel": {
            "repellendus": "ducimus",
            "maxime": "necessitatibus",
          },
          "recusandae": {
            "rem": "quibusdam",
            "rem": "quas",
          },
          "dolorum": {
            "nihil": "quis",
            "itaque": "consectetur",
            "dignissimos": "numquam",
            "et": "sequi",
          },
        },
        id: "40634aa9-81f6-46e8-b421-2fd47d39d3ac",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "exercitationem",
          "quia",
        ],
        timezone: "America/Denver",
        tokens: {
          "placeat": "perferendis",
          "totam": "fugit",
        },
        username: "Talia28",
        usernameStatus: ContentStatus.Pending,
        verified: false,
      },
      {
        applicationId: "831a5f77-2065-4a8d-923c-da6ee2c444e0",
        authenticationToken: "ipsa",
        cleanSpeakId: "0dd8b0fc-4bf4-416d-bc46-5f167c0c7307",
        data: {
          "doloribus": {
            "aspernatur": "maxime",
            "ullam": "modi",
          },
          "quaerat": {
            "ab": "corrupti",
          },
          "neque": {
            "eligendi": "quisquam",
            "reprehenderit": "consequuntur",
            "repudiandae": "dolores",
          },
        },
        id: "0e84b6b6-3343-4c77-af3f-58e10bb433cd",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "numquam",
        ],
        timezone: "America/Denver",
        tokens: {
          "aperiam": "omnis",
        },
        username: "Stanton.Considine",
        usernameStatus: ContentStatus.Active,
        verified: false,
      },
    ],
    salt: "aut",
    tenantId: "a7247b31-5bd5-495e-9e68-a632a3a32459",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 272566,
            timeStep: 448173,
          },
          email: "Enoch2@hotmail.com",
          id: "1891ea54-b0c3-4220-890f-06e439fd7150",
          lastUsed: false,
          method: "eveniet",
          mobilePhone: "eaque",
          secret: "quae",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 610161,
            timeStep: 501217,
          },
          email: "Yesenia_Huel@hotmail.com",
          id: "5f7d0e1e-364c-41f0-85e7-0c42995341ea",
          lastUsed: false,
          method: "aperiam",
          mobilePhone: "odit",
          secret: "exercitationem",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithm.HmacSha1,
            codeLength: 324189,
            timeStep: 198508,
          },
          email: "Clyde.Konopelski@gmail.com",
          id: "3aaa1447-d2c6-4fa4-beec-0f66f5817b87",
          lastUsed: false,
          method: "in",
          mobilePhone: "natus",
          secret: "veritatis",
        },
      ],
      recoveryCodes: [
        "enim",
        "mollitia",
        "sint",
      ],
    },
    uniqueUsername: "amet",
    username: "Malinda.Becker",
    usernameStatus: ContentStatus.Pending,
    verified: false,
  },
}, "aliquam", "doloribus").then((res: UpdateUserWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateWebhookWithId

Updates the webhook with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateWebhookWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateWebhookWithId("non", {
  webhook: {
    connectTimeout: 799110,
    data: {
      "doloribus": {
        "non": "consequuntur",
        "deserunt": "cum",
        "sunt": "vero",
      },
      "libero": {
        "tempore": "aliquid",
        "molestias": "quidem",
        "natus": "quis",
      },
      "eligendi": {
        "quod": "ducimus",
      },
    },
    description: "et",
    eventsEnabled: {
      "quas": false,
      "occaecati": false,
      "nemo": false,
      "molestiae": false,
    },
    global: false,
    headers: {
      "iure": "inventore",
      "sed": "perspiciatis",
      "illo": "culpa",
    },
    httpAuthenticationPassword: "laudantium",
    httpAuthenticationUsername: "ullam",
    id: "471aa5b3-bd72-44be-8b2f-375b6621d0a5",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 545568,
    sslCertificate: "est",
    tenantIds: [
      "b40e1901-00cd-407b-95f5-bb5058daeba2",
    ],
    url: "nam",
  },
}).then((res: UpdateWebhookWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upsertEntityGrantWithId

Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpsertEntityGrantWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.upsertEntityGrantWithId("illo", {
  grant: {
    data: {
      "enim": {
        "numquam": "labore",
        "eius": "repellat",
        "at": "hic",
      },
      "sint": {
        "non": "fuga",
        "nisi": "delectus",
        "placeat": "ex",
      },
      "labore": {
        "provident": "hic",
        "aliquam": "cupiditate",
      },
    },
    entity: {
      clientId: "soluta",
      clientSecret: "assumenda",
      data: {
        "nisi": {
          "consectetur": "hic",
          "veniam": "accusamus",
          "eveniet": "ex",
          "esse": "ipsum",
        },
        "vitae": {
          "consectetur": "quia",
          "omnis": "facilis",
        },
        "perferendis": {
          "dolorem": "accusantium",
          "quia": "qui",
        },
      },
      id: "e40f2ec9-8784-4f28-8899-083bbcb50ad4",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      name: "Whitney Towne",
      parentId: "7eff2aa1-b4a3-4d57-aa89-984b86bb72a1",
      tenantId: "f558bc12-dcdf-4142-affb-3b91af3c5126",
      type: {
        data: {
          "reiciendis": {
            "in": "eveniet",
            "reprehenderit": "in",
            "assumenda": "amet",
          },
          "atque": {
            "voluptas": "maiores",
            "molestiae": "mollitia",
            "magni": "iste",
          },
          "explicabo": {
            "error": "ea",
          },
          "suscipit": {
            "minus": "expedita",
          },
        },
        id: "4ed6a98f-6805-4e4c-82cd-f5fb81bf18f5",
        insertInstant: 1659380719000,
        jwtConfiguration: {
          accessTokenKeyId: "ca0f1e22-75d7-45fd-82d1-5fda9327d067",
          enabled: false,
          timeToLiveInSeconds: 431423,
        },
        lastUpdateInstant: 1659380719000,
        name: "Nicholas Weissnat",
        permissions: [
          {
            data: {
              "aspernatur": {
                "accusamus": "vitae",
                "eveniet": "corrupti",
              },
              "repellendus": {
                "aliquid": "ullam",
                "consequuntur": "odit",
              },
            },
            description: "autem",
            id: "5722af1e-f012-4d43-a347-14df78342176",
            insertInstant: 1659380719000,
            isDefault: false,
            lastUpdateInstant: 1659380719000,
            name: "Cary Zieme",
          },
          {
            data: {
              "beatae": {
                "nisi": "eos",
                "esse": "eligendi",
                "excepturi": "assumenda",
                "corrupti": "adipisci",
              },
              "tenetur": {
                "dolorem": "dicta",
                "commodi": "dicta",
                "numquam": "mollitia",
                "magni": "tempora",
              },
              "perspiciatis": {
                "assumenda": "sed",
                "ad": "cumque",
              },
              "mollitia": {
                "maiores": "odit",
                "ex": "culpa",
                "illum": "rerum",
                "at": "reprehenderit",
              },
            },
            description: "exercitationem",
            id: "72c6ed24-56cc-4658-bdeb-4679a16bb335",
            insertInstant: 1659380719000,
            isDefault: false,
            lastUpdateInstant: 1659380719000,
            name: "Joseph Schroeder",
          },
          {
            data: {
              "tempora": {
                "nihil": "iusto",
                "dicta": "eligendi",
                "numquam": "rerum",
                "adipisci": "molestiae",
              },
              "suscipit": {
                "qui": "illo",
                "similique": "quas",
                "repellendus": "eaque",
                "harum": "eligendi",
              },
            },
            description: "laudantium",
            id: "59965120-24fe-4aa2-9618-823e9d99dbf4",
            insertInstant: 1659380719000,
            isDefault: false,
            lastUpdateInstant: 1659380719000,
            name: "Mathew Murazik IV",
          },
        ],
      },
    },
    id: "af7f79c7-7b45-4270-bda8-93c47a7596e6",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    permissions: [
      "doloribus",
      "consequatur",
    ],
    recipientEntityId: "126d33e0-26bc-4be4-a3ad-367468e6c719",
    userId: "67f288de-fefc-42f5-975c-547981d55fee",
  },
}, "quod").then((res: UpsertEntityGrantWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## validateDeviceWithId

Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ValidateDeviceWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.validateDeviceWithId("ratione", "dignissimos").then((res: ValidateDeviceWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## validateJWTWithId

Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ValidateJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.validateJWTWithId().then((res: ValidateJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## vendJWTWithId

It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { VendJWTWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.vendJWTWithId({
  claims: {
    "ipsam": {
      "labore": "odit",
    },
    "sequi": {
      "possimus": "harum",
      "minima": "blanditiis",
      "nemo": "rem",
    },
    "consectetur": {
      "voluptatibus": "dicta",
    },
  },
  keyId: "f1dd8aaf-41f4-4446-b43b-ec7e597b3fde",
  timeToLiveInSeconds: 403710,
}).then((res: VendJWTWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## verifyUserRegistrationWithId

Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { VerifyUserRegistrationWithIdResponse } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.verifyUserRegistrationWithId({
  eventInfo: {
    data: {
      "repellendus": {
        "labore": "nobis",
        "enim": "velit",
      },
      "odio": {
        "perspiciatis": "tempore",
        "quia": "voluptatem",
        "illo": "quod",
      },
      "error": {
        "delectus": "facere",
      },
      "ducimus": {
        "quod": "consequatur",
        "ea": "eum",
        "aperiam": "praesentium",
      },
    },
    deviceDescription: "dolor",
    deviceName: "consequatur",
    deviceType: "incidunt",
    ipAddress: "recusandae",
    location: {
      city: "Casa Grande",
      country: "Slovenia",
      displayString: "deserunt",
      latitude: 1567.01,
      longitude: 9054.67,
      region: "suscipit",
      zipcode: "88341-9987",
    },
    os: "vero",
    userAgent: "quidem",
  },
  oneTimeCode: "nesciunt",
  verificationId: "consequuntur",
}).then((res: VerifyUserRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
