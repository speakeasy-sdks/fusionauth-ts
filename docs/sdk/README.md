# SDK

## Overview

This is a FusionAuth server. Find out more at [https://fusionauth.io](https://fusionauth.io). You need to [set up an API key](https://fusionauth.io/docs/v1/tech/apis/authentication#managing-api-keys) in the FusionAuth instance you are using to test out the API calls.

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
    actioneeUserId: "c8b711e5-b7fd-42ed-8289-21cddc692601",
    actionerUserId: "fb576b0d-5f0d-430c-9fbb-2587053202c7",
    applicationIds: [
      "d5fe9b90-c289-409b-bfe4-9a8d9cbf4863",
    ],
    comment: "dolorem",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "dolor",
    reasonId: "23f9b77f-3a41-4006-b4eb-f69280d1ba77",
    userActionId: "a89ebf73-7ae4-4203-8e5e-6a95d8a0d446",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "officiis": {
        "dolorum": "a",
      },
      "esse": {
        "iusto": "ipsum",
        "quisquam": "tenetur",
        "amet": "tempore",
      },
      "accusamus": {
        "enim": "dolorem",
        "sapiente": "totam",
      },
      "nihil": {
        "expedita": "neque",
      },
    },
    deviceDescription: "sed",
    deviceName: "vel",
    deviceType: "libero",
    ipAddress: "voluptas",
    location: {
      city: "Kohlerberg",
      country: "Faroe Islands",
      displayString: "qui",
      latitude: 5867.84,
      longitude: 8075.81,
      region: "pariatur",
      zipcode: "16521-1773",
    },
    os: "quam",
    userAgent: "molestias",
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
  license: "temporibus",
  licenseId: "qui",
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
import { FamilyRoleEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.addUserToFamilyWithId("neque", {
  familyMember: {
    data: {
      "magni": {
        "sunt": "ullam",
        "nam": "hic",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRoleEnum.Child,
    userId: "cbb1e31b-8b90-4f34-83a1-108e0adcf4b9",
  },
}, "qui").then((res: AddUserToFamilyWithIdResponse) => {
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

sdk.sdk.cancelActionWithId("quae", {
  action: {
    actioneeUserId: "879fce95-3f73-4ef7-bbc7-abd74dd39c0f",
    actionerUserId: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
    applicationIds: [
      "e6c55614-6c3e-4250-bb00-8c42e141aac3",
      "66c8dd6b-1442-4907-8747-78a7bd466d28",
      "c10ab3cd-ca42-4519-84e5-23c7e0bc7178",
      "e4796f2a-70c6-4882-82aa-482562f222e9",
    ],
    comment: "atque",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "et",
    reasonId: "7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37",
    userActionId: "89fd871f-99dd-42ef-9121-aa6f1e674bdb",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "aliquam": {
        "dicta": "ullam",
        "reprehenderit": "ullam",
        "nisi": "aut",
        "voluptatum": "qui",
      },
    },
    deviceDescription: "quibusdam",
    deviceName: "ex",
    deviceType: "deleniti",
    ipAddress: "itaque",
    location: {
      city: "Bradtkefurt",
      country: "United States of America",
      displayString: "quasi",
      latitude: 8694.89,
      longitude: 920.27,
      region: "voluptate",
      zipcode: "30226",
    },
    os: "temporibus",
    userAgent: "accusantium",
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
  applicationId: "8086a184-0394-4c26-871f-93f5f0642dac",
  changePasswordId: "dignissimos",
  currentPassword: "officia",
  eventInfo: {
    data: {
      "nemo": {
        "quaerat": "porro",
      },
      "quod": {
        "ab": "adipisci",
        "fuga": "id",
      },
      "suscipit": {
        "culpa": "est",
      },
      "recusandae": {
        "fugiat": "vel",
        "ducimus": "quos",
        "vel": "labore",
      },
    },
    deviceDescription: "possimus",
    deviceName: "facilis",
    deviceType: "cum",
    ipAddress: "commodi",
    location: {
      city: "Forestworth",
      country: "South Georgia and the South Sandwich Islands",
      displayString: "nemo",
      latitude: 9249.67,
      longitude: 3975.33,
      region: "aperiam",
      zipcode: "24398-2939",
    },
    os: "quidem",
    userAgent: "saepe",
  },
  loginId: "necessitatibus",
  password: "dolore",
  refreshToken: "sunt",
  trustChallenge: "asperiores",
  trustToken: "adipisci",
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

sdk.sdk.changePasswordWithId("non", {
  applicationId: "317fe35b-60eb-41ea-8265-55ba3c28744e",
  changePasswordId: "temporibus",
  currentPassword: "ullam",
  eventInfo: {
    data: {
      "cum": {
        "quas": "hic",
        "nesciunt": "culpa",
        "corrupti": "pariatur",
      },
    },
    deviceDescription: "totam",
    deviceName: "hic",
    deviceType: "exercitationem",
    ipAddress: "nobis",
    location: {
      city: "Lake Calistaworth",
      country: "Bulgaria",
      displayString: "asperiores",
      latitude: 7079.18,
      longitude: 4518.22,
      region: "expedita",
      zipcode: "62614",
    },
    os: "commodi",
    userAgent: "quidem",
  },
  loginId: "explicabo",
  password: "voluptas",
  refreshToken: "unde",
  trustChallenge: "architecto",
  trustToken: "suscipit",
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

sdk.sdk.checkChangePasswordUsingIdWithId("sapiente").then((res: CheckChangePasswordUsingIdWithIdResponse) => {
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
    comment: "debitis",
    commenterId: "1f08f429-4e36-498f-847f-603e8b445e80",
    id: "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa",
    insertInstant: 1659380719000,
    userId: "8e4824d0-ab40-4750-88e5-1862065e904f",
  },
}, "dolorem").then((res: CommentOnUserWithIdResponse) => {
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
import { AttestationTypeEnum, CoseAlgorithmIdentifierEnum, DeviceTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.completeWebAuthnAssertionWithId({
  applicationId: "b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50",
  credential: {
    clientExtensionResults: {
      credProps: {
        rk: false,
      },
    },
    id: "ce187f86-bc17-43d6-89ee-e9526f8d986e",
    response: {
      authenticatorData: "atque",
      clientDataJSON: "atque",
      signature: "sunt",
      userHandle: "recusandae",
    },
    rpId: "dolorum",
    type: "repellendus",
  },
  ipAddress: "labore",
  metaData: {
    data: {
      "doloremque": {
        "dicta": "accusantium",
        "beatae": "dolores",
        "enim": "laboriosam",
        "velit": "a",
      },
      "molestias": {
        "saepe": "consequuntur",
        "occaecati": "officiis",
      },
      "perspiciatis": {
        "adipisci": "eveniet",
        "occaecati": "consequuntur",
      },
      "fugit": {
        "quis": "reprehenderit",
        "error": "illo",
        "corporis": "quidem",
      },
    },
    device: {
      description: "eveniet",
      lastAccessedAddress: "non",
      lastAccessedInstant: 1659380719000,
      name: "Ms. Brian Kerluke IV",
      type: DeviceTypeEnum.Unknown,
    },
    scopes: [
      "cum",
    ],
  },
  newDevice: false,
  noJWT: false,
  origin: "iure",
  rpId: "necessitatibus",
  twoFactorTrustId: "ratione",
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.completeWebAuthnLoginWithId({
  applicationId: "ab8845f0-597a-460f-b2a5-4a31e94764a3",
  credential: {
    clientExtensionResults: {
      credProps: {
        rk: false,
      },
    },
    id: "e865e795-6f92-451a-9a9d-a660ff57bfaa",
    response: {
      authenticatorData: "placeat",
      clientDataJSON: "modi",
      signature: "voluptatibus",
      userHandle: "molestias",
    },
    rpId: "officiis",
    type: "sapiente",
  },
  ipAddress: "cumque",
  metaData: {
    data: {
      "rerum": {
        "quis": "inventore",
        "fugit": "cumque",
      },
    },
    device: {
      description: "quae",
      lastAccessedAddress: "perferendis",
      lastAccessedInstant: 1659380719000,
      name: "Judy Kemmer",
      type: DeviceTypeEnum.Tv,
    },
    scopes: [
      "eos",
      "sapiente",
      "eum",
      "dicta",
    ],
  },
  newDevice: false,
  noJWT: false,
  origin: "minima",
  rpId: "beatae",
  twoFactorTrustId: "cupiditate",
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
import { AttestationTypeEnum, CoseAlgorithmIdentifierEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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
    id: "9ebfd0e9-fe6c-4632-8a3a-ed0117996312",
    response: {
      attestationObject: "doloribus",
      clientDataJSON: "nulla",
    },
    rpId: "necessitatibus",
    transports: [
      "tempora",
    ],
    type: "nihil",
  },
  origin: "molestiae",
  rpId: "dicta",
  userId: "778ff61d-0174-4763-a0a1-5db6a660659a",
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
    id: "1adeaab5-851d-46c6-85b0-8b61891baa0f",
    insertInstant: 1659380719000,
    ipAccessControlListId: "e1ade008-e6f8-4c5f-b50d-8cdb5a341814",
    key: "dolor",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "architecto": "sit",
      },
    },
    permissions: {
      endpoints: {
        "fugit": [
          "laudantium",
        ],
        "quae": [
          "fugiat",
        ],
      },
    },
    tenantId: "5208ece7-e253-4b66-8451-c6c6e205e16d",
  },
  sourceKeyId: "eab3fec9-578a-4645-8427-3a8418d16230",
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

sdk.sdk.createApiKeyWithId("cupiditate", {
  apiKey: {
    id: "fb092992-1aef-4b9f-98c4-d86e68e4be05",
    insertInstant: 1659380719000,
    ipAccessControlListId: "6013f59d-a757-4a59-acfe-f66ef1caa338",
    key: "ipsum",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "magni": "soluta",
        "repudiandae": "nam",
        "dolore": "iusto",
        "voluptate": "sequi",
      },
    },
    permissions: {
      endpoints: {
        "neque": [
          "deleniti",
          "quibusdam",
          "iure",
          "odit",
        ],
        "voluptatibus": [
          "magnam",
          "quibusdam",
        ],
      },
    },
    tenantId: "1db1f2c4-3106-461e-9634-9e1cf9e06e3a",
  },
  sourceKeyId: "437000ae-6b6b-4c9b-8f75-9eac55a9741d",
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplication({
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "31135296-5bb8-4a72-8261-1435e139dbc2",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "quia",
      applicationIds: [
        "9b1abda8-c070-4e10-84cb-0672d1ad879e",
        "eb9665b8-5efb-4d02-bae0-be2d782259e3",
      ],
      enabled: false,
      url: "recusandae",
      usernameModeration: {
        applicationId: "a4b5197f-9244-43da-bce5-2b895c537c64",
        enabled: false,
      },
    },
    data: {
      "magnam": {
        "maiores": "tempore",
        "aperiam": "libero",
        "ratione": "labore",
        "totam": "occaecati",
      },
      "voluptas": {
        "velit": "minus",
        "fuga": "nostrum",
        "est": "impedit",
        "delectus": "tempore",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "e2fd5707-5779-4291-b7de-ac646ecb5734",
      emailVerificationEmailTemplateId: "09e3eb1e-5a2b-412e-b07f-116db99545fc",
      emailVerifiedEmailTemplateId: "95fa8897-0e18-49db-b30f-cb33ea055b19",
      forgotPasswordEmailTemplateId: "7cd44e2f-52d8-42d3-913b-b6f48b656bcd",
      loginIdInUseOnCreateEmailTemplateId: "b35ff2e4-b275-437a-8cd9-e7319c177d52",
      loginIdInUseOnUpdateEmailTemplateId: "5f77b114-eeb5-42ff-b85f-c37814d4c98e",
      loginNewDeviceEmailTemplateId: "0c2bb89e-b75d-4ad6-b6c6-00503d8bb311",
      loginSuspiciousEmailTemplateId: "80f739ae-9e05-47eb-809e-2810331f3981",
      passwordResetSuccessEmailTemplateId: "d4c700b6-07f3-4c93-873b-9da3f2ceda7e",
      passwordUpdateEmailTemplateId: "23f22574-11fa-4f4b-b544-e472e802857a",
      passwordlessEmailTemplateId: "5b40463a-7d57-45f1-800e-764ad7334ec1",
      setPasswordEmailTemplateId: "b781b36a-0808-48d1-80ef-ada200ef0422",
      twoFactorMethodAddEmailTemplateId: "eb2164cf-9ab8-4366-8723-ffda9e06bee4",
      twoFactorMethodRemoveEmailTemplateId: "825c1fc0-e115-4c80-bff9-18544ec42def",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 773711,
    },
    formConfiguration: {
      adminRegistrationFormId: "ce8f1977-773e-4635-a2a7-b408f05e3d48",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "fdaf313a-1f5f-4d94-a59c-0b36f25ea944",
    },
    id: "f3b756c1-1f6c-437a-9126-243835bbc05a",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "23a45cef-c5fd-4e10-a0ce-2169e510019c",
      enabled: false,
      idTokenKeyId: "6dc5e347-6279-49bf-bbe6-949fb2bb4eca",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 423054,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 198991,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "d5db3ade-bd5d-4aea-8c50-6a8aa94c0264",
      idTokenPopulateId: "4cf5e9d9-a457-48ad-81ac-600dec001ac8",
      samlv2PopulateId: "02e2ec09-ff8f-40f8-96ff-3477c13e902c",
      selfServiceRegistrationValidationId: "14125b09-60a6-4681-91a4-72af923c5949",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "f83f350c-f876-4ffb-901c-6ecbb4e243cf",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Enabled,
      sms: {
        templateId: "89ffafed-a53e-45ae-ae0a-c184c2b9c247",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.None,
    },
    name: "Byron Farrell",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "modi",
        "perferendis",
        "necessitatibus",
      ],
      authorizedRedirectURLs: [
        "molestias",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.Required,
      clientId: "maiores",
      clientSecret: "neque",
      debug: false,
      deviceVerificationURL: "odit",
      enabledGrants: [
        "veniam",
        "ipsam",
        "eaque",
        "exercitationem",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "nihil",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.Required,
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
      formId: "6f5d56d0-bd0a-4f2d-be13-db4f62cba3f8",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Username,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 97810,
      },
    },
    roles: [
      {
        description: "accusamus",
        id: "bc0b80a6-924d-43b2-acfc-c8f895010f5d",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Tony Streich",
      },
      {
        description: "mollitia",
        id: "1804e54c-82f1-468a-b63c-8873e484380b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mandy Johnston",
      },
      {
        description: "porro",
        id: "a275a60a-04c4-495c-8699-171b51c1bdb1",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Toby Grant",
      },
    ],
    samlv2Configuration: {
      audience: "rem",
      authorizedRedirectURLs: [
        "officiis",
        "cum",
        "pariatur",
      ],
      callbackURL: "sapiente",
      debug: false,
      defaultVerificationKeyId: "c4ccca99-bc7f-4c0b-adce-10873e42b006",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "at",
      },
      issuer: "eum",
      keyId: "78878ba8-581a-4582-88c5-4fefa9c95f2e",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.OnlyOriginator,
        defaultVerificationKeyId: "c5565d30-7cfe-4e81-a06e-2813fa4a41c4",
        keyId: "80d3f213-2af0-4310-ad51-4f4cc6f18bf9",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "621a6a4f-77a8-47ee-be4b-e752c65b3441",
          url: "praesentium",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.InclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      },
      logoutURL: "expedita",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      xmlSignatureLocation: XMLSignatureLocationEnum.Response,
    },
    state: ObjectStateEnum.Active,
    tenantId: "c8d975e0-e841-49d8-b84f-144f3e07edcc",
    themeId: "4aa5f3ca-bd90-45a9-b2e0-56728227b2d3",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Allow,
    },
    verificationEmailTemplateId: "9470bf7a-4fa8-47cf-935a-6fae54ebf60c",
    verificationStrategy: VerificationStrategyEnum.ClickableLink,
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
      "vitae": {
        "doloremque": "sed",
        "amet": "rerum",
        "in": "nostrum",
        "temporibus": "ratione",
      },
    },
    deviceDescription: "dolor",
    deviceName: "nisi",
    deviceType: "dignissimos",
    ipAddress: "reiciendis",
    location: {
      city: "Brooklyn Park",
      country: "Norway",
      displayString: "accusantium",
      latitude: 7980.79,
      longitude: 7961.17,
      region: "quos",
      zipcode: "94590-6154",
    },
    os: "repellendus",
    userAgent: "unde",
  },
  role: {
    description: "alias",
    id: "c364b7c1-5dfb-4ace-988b-1c4ee2c8c6ce",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Heather Bogisich",
  },
  sourceApplicationId: "eb1c7cbd-b6ee-4c74-b78b-a25317747dc9",
}, "illo").then((res: CreateApplicationResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationRole("exercitationem", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "ad2caf5d-d672-43dc-8f5a-e2f3a6b70087",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "corrupti",
      applicationIds: [
        "56143f5a-6c98-4b55-9540-80d40bcacc6c",
        "bd6b5f3e-c909-4304-b926-bad2553819b4",
      ],
      enabled: false,
      url: "voluptate",
      usernameModeration: {
        applicationId: "4b0ed20e-5624-48ff-b639-a910abdcab62",
        enabled: false,
      },
    },
    data: {
      "voluptate": {
        "aliquid": "provident",
        "laboriosam": "accusamus",
      },
      "ab": {
        "quisquam": "eaque",
        "alias": "qui",
        "consequuntur": "vitae",
        "quidem": "sequi",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "35d89acb-3ecf-4da8-90c5-49ef03004978",
      emailVerificationEmailTemplateId: "a61fa1cf-2068-48f7-bc1f-fc71dca163f2",
      emailVerifiedEmailTemplateId: "a3c80a97-ff33-44cd-9f85-7a9e61876c6a",
      forgotPasswordEmailTemplateId: "b21d29df-c94d-46fe-8d79-9390066a6d2d",
      loginIdInUseOnCreateEmailTemplateId: "00035533-8cec-4086-ba21-e9152cb31191",
      loginIdInUseOnUpdateEmailTemplateId: "67b8e3c8-db03-4408-96d3-64ffd455906d",
      loginNewDeviceEmailTemplateId: "1263d48e-935c-42c9-a81f-30be3e43202d",
      loginSuspiciousEmailTemplateId: "72165765-0664-4187-8d9d-21f9ad030c4e",
      passwordResetSuccessEmailTemplateId: "cc11a083-6429-4068-b850-2a55e7f73bc8",
      passwordUpdateEmailTemplateId: "45e320a3-19f4-4bad-b947-c9a867bc4242",
      passwordlessEmailTemplateId: "6665816d-dca8-4ef5-9fcb-4c593ec12cda",
      setPasswordEmailTemplateId: "ad0ec7af-edbd-480d-b448-a47f9390c588",
      twoFactorMethodAddEmailTemplateId: "80983dab-f9ef-43ff-9d9f-7f079af4d357",
      twoFactorMethodRemoveEmailTemplateId: "24cdb0f4-d281-4187-9568-44eded85a906",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 341405,
    },
    formConfiguration: {
      adminRegistrationFormId: "e628bdfc-2032-4b6c-8799-23b7e13584f7",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "ae12c689-1f82-4ce1-9571-72305377dcfa",
    },
    id: "89df975e-3566-4860-92e9-c3ddc5f111de",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "a1026d54-1a4d-4190-beb2-1780bccc0dbb",
      enabled: false,
      idTokenKeyId: "ddb48470-8fb4-4e39-9e6b-c158c4c4e545",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 578610,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 683602,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "342260e9-b200-4ce7-8a1b-d8fb7a0a116c",
      idTokenPopulateId: "e723d409-7fa3-40e9-af72-5b29122030d8",
      samlv2PopulateId: "3f5aeb77-99d2-42e8-81f8-493825fdc42c",
      selfServiceRegistrationValidationId: "876c2c2d-fb4c-4fc1-8762-30f841fb1bd2",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "3fdb14db-6be5-4a68-9998-e22ae20da16f",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Required,
      sms: {
        templateId: "2b271a28-9c57-4e85-8e90-439d22246569",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.Any,
    },
    name: "Ms. Janice Gleichner IV",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "delectus",
        "quam",
      ],
      authorizedRedirectURLs: [
        "libero",
        "ratione",
        "molestiae",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.NotRequiredWhenUsingPKCE,
      clientId: "maiores",
      clientSecret: "accusantium",
      debug: false,
      deviceVerificationURL: "sed",
      enabledGrants: [
        "consequuntur",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "vitae",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.NotRequired,
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
      formId: "4db55410-adc6-469a-b90a-26c7cdc981f0",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 601944,
      },
    },
    roles: [
      {
        description: "quae",
        id: "d6bb33cf-aa34-48c3-9bf4-07ee4fcf0c42",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Neil Lemke II",
      },
      {
        description: "nisi",
        id: "26398a0d-c766-4324-8cb0-6c8ca12d0252",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss Victor Kuhlman",
      },
      {
        description: "possimus",
        id: "5722dd89-5b8b-4cf2-8db9-59693352f745",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Josephine McCullough",
      },
    ],
    samlv2Configuration: {
      audience: "fugiat",
      authorizedRedirectURLs: [
        "quas",
        "repellendus",
      ],
      callbackURL: "saepe",
      debug: false,
      defaultVerificationKeyId: "3b6e9389-f5ab-4b7f-a625-50a28382ac48",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "dolor",
      },
      issuer: "est",
      keyId: "fd2315bb-a650-4164-a06f-5bf6ae591bc8",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.OnlyOriginator,
        defaultVerificationKeyId: "def3612b-63c2-405f-9a84-0774a68a9a35",
        keyId: "d086b6f6-6fef-4020-a9f4-43b4257b992c",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "8dbda6a6-1efa-4219-8258-fd0a9eba47f7",
          url: "nulla",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.InclusiveWithComments,
      },
      logoutURL: "a",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      xmlSignatureLocation: XMLSignatureLocationEnum.Assertion,
    },
    state: ObjectStateEnum.Inactive,
    tenantId: "640d6a18-31c8-47ad-b596-fdf1ad837ae8",
    themeId: "0c1c19c9-5ba9-4986-b8fa-3f696991af38",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Gated,
    },
    verificationEmailTemplateId: "ce036144-48c7-4977-a0ef-2f536028efee",
    verificationStrategy: VerificationStrategyEnum.FormField,
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
      "adipisci": {
        "illo": "veniam",
        "sed": "necessitatibus",
      },
      "possimus": {
        "itaque": "explicabo",
        "ullam": "non",
      },
      "delectus": {
        "quod": "sunt",
        "ullam": "quam",
      },
    },
    deviceDescription: "illum",
    deviceName: "voluptates",
    deviceType: "officia",
    ipAddress: "est",
    location: {
      city: "Antoninaport",
      country: "Albania",
      displayString: "delectus",
      latitude: 2762.47,
      longitude: 2930.23,
      region: "nemo",
      zipcode: "78933-4669",
    },
    os: "cupiditate",
    userAgent: "soluta",
  },
  role: {
    description: "tempore",
    id: "ad185fe4-31d6-4bf5-8838-fbb8c20cb67f",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Bernard Rau",
  },
  sourceApplicationId: "5e99e623-4c9f-47b7-9dfe-b77a5c38d4ba",
}, "maiores").then((res: CreateApplicationRoleResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationRoleWithId("cupiditate", "illo", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "e506ef89-0a54-4b47-9f16-f56d385a3c4a",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "eligendi",
      applicationIds: [
        "31b99e26-ced8-4f9f-9b94-10f63bbf8178",
        "37b01afd-d788-4624-989e-b44873f5033f",
      ],
      enabled: false,
      url: "architecto",
      usernameModeration: {
        applicationId: "9dbf125c-e415-42ea-b9cd-7e5224a6a0e1",
        enabled: false,
      },
    },
    data: {
      "amet": {
        "iusto": "corrupti",
        "non": "esse",
        "vero": "eligendi",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "59e1f67f-3c4c-4ce4-b6d7-696ff3c57475",
      emailVerificationEmailTemplateId: "01357e44-f51f-48b0-84c3-197e193a2454",
      emailVerifiedEmailTemplateId: "67f94874-c2d5-4cc4-9722-33e66bd8fe5d",
      forgotPasswordEmailTemplateId: "00b979ef-2038-4732-8590-ccc109640031",
      loginIdInUseOnCreateEmailTemplateId: "3b3e5044-f65f-4e72-9c40-77d0cc3f408e",
      loginIdInUseOnUpdateEmailTemplateId: "fc15ceb4-d6e1-4eae-8f75-aedf2acab58b",
      loginNewDeviceEmailTemplateId: "991c926d-db58-4946-9e74-21cbe6d9502f",
      loginSuspiciousEmailTemplateId: "0ea930b6-9f7a-4c2f-b2f8-850090491160",
      passwordResetSuccessEmailTemplateId: "8207888e-c661-483b-be96-59eb40ec16fa",
      passwordUpdateEmailTemplateId: "f75b0b53-2a4d-4a37-8baa-f4452c4842c9",
      passwordlessEmailTemplateId: "b2ad32da-fe81-4a88-b444-4573fecd4735",
      setPasswordEmailTemplateId: "3f63c820-9379-4aa6-9cd5-fbcf79da18a7",
      twoFactorMethodAddEmailTemplateId: "822bf958-94e6-4861-adb5-5f9e5d751c9f",
      twoFactorMethodRemoveEmailTemplateId: "e8f7502b-fdc3-4450-841f-1764456379f3",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 944260,
    },
    formConfiguration: {
      adminRegistrationFormId: "b27e21f8-6265-47b3-afc6-b9f587ce525c",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "67641a83-12e5-4047-b4c2-1ccb423abcdc",
    },
    id: "91faabdd-88e7-41f6-8482-52d7771e7fd0",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "74009ef8-d29d-4e1d-9709-7b5da08c57fa",
      enabled: false,
      idTokenKeyId: "6c78a216-e19b-4afe-8a61-91498140b64f",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 549710,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 884812,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "170ef03b-5f37-4e4a-a868-555966732aa5",
      idTokenPopulateId: "dcb6682c-b70f-48cf-95fb-6e91b9a9f748",
      samlv2PopulateId: "46e2c330-9db0-4536-99e7-5ca006f5392c",
      selfServiceRegistrationValidationId: "11a25a8b-f92f-4974-a8ad-9a9f8bf82211",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "25359d98-387f-47a7-9cd7-2cd2484da217",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Disabled,
      sms: {
        templateId: "9f2ac41e-f572-45f1-969a-c1e41d8a23c2",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.Any,
    },
    name: "Allen Grant",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "repellat",
        "mollitia",
        "quaerat",
        "officia",
      ],
      authorizedRedirectURLs: [
        "perspiciatis",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.NotRequiredWhenUsingPKCE,
      clientId: "iure",
      clientSecret: "nulla",
      debug: false,
      deviceVerificationURL: "recusandae",
      enabledGrants: [
        "aspernatur",
        "aspernatur",
        "et",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "et",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.NotRequiredWhenUsingClientAuthentication,
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
      formId: "e1712099-853e-49f5-83d8-54439ee22446",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 302228,
      },
    },
    roles: [
      {
        description: "expedita",
        id: "c154188c-2f56-4e85-9a78-32eabd617c3b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss Meredith Hand",
      },
    ],
    samlv2Configuration: {
      audience: "ut",
      authorizedRedirectURLs: [
        "doloribus",
        "sit",
        "architecto",
      ],
      callbackURL: "tempore",
      debug: false,
      defaultVerificationKeyId: "ad8706d4-6082-4bfb-9c41-ff5d4e2ae4fb",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "minima",
      },
      issuer: "impedit",
      keyId: "b35d1763-8f1e-4db7-8359-ecc5cb860f8c",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.OnlyOriginator,
        defaultVerificationKeyId: "580ba738-10e4-4fe4-8472-97cd3b1dd3bb",
        keyId: "ce247b76-84ef-4f50-926d-71cffbd0eb74",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "b8421953-b44b-4d3c-8315-9d33e5953c00",
          url: "dicta",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      },
      logoutURL: "occaecati",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      xmlSignatureLocation: XMLSignatureLocationEnum.Assertion,
    },
    state: ObjectStateEnum.Active,
    tenantId: "aa41e6c3-1cc2-4f1f-8b51-c9a41ffbe9cb",
    themeId: "d795ee65-e076-4cc7-abf6-16ea5c716419",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Allow,
    },
    verificationEmailTemplateId: "4b90f2e0-9d19-4d2f-82f9-e2e105944b93",
    verificationStrategy: VerificationStrategyEnum.ClickableLink,
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
      "sed": {
        "reprehenderit": "id",
      },
      "ducimus": {
        "asperiores": "occaecati",
      },
      "doloremque": {
        "magnam": "excepturi",
        "fugiat": "laboriosam",
        "id": "itaque",
      },
      "assumenda": {
        "id": "eveniet",
        "optio": "soluta",
      },
    },
    deviceDescription: "dignissimos",
    deviceName: "nemo",
    deviceType: "neque",
    ipAddress: "esse",
    location: {
      city: "Sunnyvale",
      country: "Mayotte",
      displayString: "eos",
      latitude: 1395.05,
      longitude: 1542.68,
      region: "maxime",
      zipcode: "99342-6066",
    },
    os: "harum",
    userAgent: "sapiente",
  },
  role: {
    description: "laborum",
    id: "2e761f0c-a4d4-456e-b103-1e6899f0c200",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Jenna Crist",
  },
  sourceApplicationId: "d55cc058-4a18-44d7-ad97-1fc820c65b03",
}, "in").then((res: CreateApplicationRoleWithIdResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createApplicationWithId("rerum", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "b8e0cc88-5187-4e4d-a04a-f28c5dddb46a",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "similique",
      applicationIds: [
        "cfd6d828-da01-4319-9129-646645c1d81f",
      ],
      enabled: false,
      url: "explicabo",
      usernameModeration: {
        applicationId: "9042f569-b7af-4f0e-a221-6cbe071bc163",
        enabled: false,
      },
    },
    data: {
      "sed": {
        "unde": "harum",
        "sequi": "libero",
      },
      "ipsa": {
        "aliquam": "vero",
        "dolorum": "omnis",
        "occaecati": "consequuntur",
      },
      "veniam": {
        "repellendus": "eaque",
        "incidunt": "asperiores",
      },
      "eius": {
        "quas": "incidunt",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "7a742d84-496c-4bde-acf6-b99bc63562eb",
      emailVerificationEmailTemplateId: "fdf55c29-4c06-40b0-aa12-87764eef6d0c",
      emailVerifiedEmailTemplateId: "6d6ed9c7-3dd6-4345-b150-9a8e870d3c5a",
      forgotPasswordEmailTemplateId: "1f9c242c-7b66-4a1f-b0c7-3df5b6719890",
      loginIdInUseOnCreateEmailTemplateId: "f42a4bb4-38d8-45b2-a059-1d745e3c2059",
      loginIdInUseOnUpdateEmailTemplateId: "c9c3f567-e0e2-4527-a5b1-d62fcdace1f0",
      loginNewDeviceEmailTemplateId: "1216ce22-39e8-4f25-8d0d-19d959f439e3",
      loginSuspiciousEmailTemplateId: "9266cbd9-5f7a-4a2b-a411-3695d1e6698f",
      passwordResetSuccessEmailTemplateId: "cc459621-7c29-4776-b633-4254038bfb59",
      passwordUpdateEmailTemplateId: "71e98190-5573-489c-adba-c7fda39594d6",
      passwordlessEmailTemplateId: "6bc2ae48-0632-4b99-94b6-fa2206369828",
      setPasswordEmailTemplateId: "553cb100-06be-4f49-a1ec-2053b749366a",
      twoFactorMethodAddEmailTemplateId: "c8ee0f2b-f195-488d-80d0-3f3deba297be",
      twoFactorMethodRemoveEmailTemplateId: "3e90bc40-df86-48fd-9240-5cb331d492f4",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 987085,
    },
    formConfiguration: {
      adminRegistrationFormId: "127fb0e0-bf1f-4821-b978-d0acca77aeb7",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "b7021a52-046b-464e-99fb-0e67e094fdfe",
    },
    id: "d5540ef5-3a34-4a1b-8fe9-9731adc05d85",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "ae2dfb70-fb38-4742-90d3-36561eca16ef",
      enabled: false,
      idTokenKeyId: "89451bd7-6eee-4b51-8c4d-a1fad35512f0",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 857507,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.Reusable,
      timeToLiveInSeconds: 932883,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "5b72f0f5-4856-48a0-824e-00a1d6eb9434",
      idTokenPopulateId: "645d0308-4fbb-4a5c-8eff-5cb01fe51e52",
      samlv2PopulateId: "8a45ac82-b85f-48bc-acab-a8da4127dd59",
      selfServiceRegistrationValidationId: "7ff4711a-a1bc-474b-86ce-cc74f77b4848",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "bd6a6f04-41d2-4c3b-8080-94373e060459",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Required,
      sms: {
        templateId: "ebbad02f-2586-4bcf-9525-58daa95be6cd",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.Any,
    },
    name: "Maureen Halvorson",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "quis",
      ],
      authorizedRedirectURLs: [
        "est",
        "fuga",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.Required,
      clientId: "ratione",
      clientSecret: "cum",
      debug: false,
      deviceVerificationURL: "magnam",
      enabledGrants: [
        "officiis",
        "inventore",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "ex",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.Required,
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
      formId: "c5208c23-e980-42d8-af0d-45eb4a8b674e",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Username,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 788995,
      },
    },
    roles: [
      {
        description: "optio",
        id: "18edc7f7-87e3-42e0-8b3d-3ed0c5670ef4",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Maryann Stark",
      },
      {
        description: "iste",
        id: "f1cc503f-6c39-4bcd-8a62-90f957f38518",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Shannon Schuster",
      },
      {
        description: "reiciendis",
        id: "807aae03-f33c-4a79-bb9d-e4032ba26fd3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Gwendolyn Ratke",
      },
      {
        description: "dolores",
        id: "16bcb415-835c-4736-8172-3133edc046bc",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Alice Kautzer",
      },
    ],
    samlv2Configuration: {
      audience: "libero",
      authorizedRedirectURLs: [
        "deserunt",
        "eius",
        "molestias",
        "dolores",
      ],
      callbackURL: "dolores",
      debug: false,
      defaultVerificationKeyId: "7c42c22c-5535-4049-9c5d-bb3c57c1e498",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "beatae",
      },
      issuer: "itaque",
      keyId: "8aa257dd-c191-42eb-9e64-bfcc5469d401",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.AllParticipants,
        defaultVerificationKeyId: "dfa79620-6bef-42b0-a3e4-2c1aa010e9aa",
        keyId: "c2e91355-86d1-48f9-b97a-4bfad2bf7d67",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "ca84ad99-b41d-4612-8353-1870cf68b03a",
          url: "assumenda",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.ExclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      },
      logoutURL: "beatae",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      xmlSignatureLocation: XMLSignatureLocationEnum.Response,
    },
    state: ObjectStateEnum.Active,
    tenantId: "3d1f0cb0-a000-43eb-a2d9-b3a70d94faa7",
    themeId: "41c57d1f-edc2-4050-938d-c3ce185472f9",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Gated,
    },
    verificationEmailTemplateId: "e69166a8-be34-444e-ac8b-3a2875c6c1fe",
    verificationStrategy: VerificationStrategyEnum.ClickableLink,
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
      "nisi": {
        "alias": "voluptate",
        "repellendus": "qui",
        "deserunt": "error",
        "impedit": "laudantium",
      },
    },
    deviceDescription: "nihil",
    deviceName: "officia",
    deviceType: "repudiandae",
    ipAddress: "nemo",
    location: {
      city: "Port Betteview",
      country: "Haiti",
      displayString: "laboriosam",
      latitude: 851.05,
      longitude: 6263.81,
      region: "veritatis",
      zipcode: "50246-4958",
    },
    os: "minima",
    userAgent: "non",
  },
  role: {
    description: "qui",
    id: "13f3f658-752d-4b76-8c59-f0a56cebcada",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Geneva Schmitt",
  },
  sourceApplicationId: "9181c956-7166-43c5-b0b5-665163a36385",
}, "illo").then((res: CreateApplicationWithIdResponse) => {
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
      "id": {
        "fugit": "nostrum",
        "magni": "sunt",
        "quidem": "perspiciatis",
      },
    },
    id: 990978,
    insertInstant: 1659380719000,
    insertUser: "eos",
    message: "saepe",
    newValue: {
      "esse": "consequuntur",
    },
    oldValue: {
      "autem": "reprehenderit",
      "quidem": "quas",
    },
    reason: "officia",
  },
  eventInfo: {
    data: {
      "alias": {
        "minus": "sit",
        "quis": "hic",
        "dolorum": "libero",
      },
      "voluptatem": {
        "nisi": "quis",
        "perferendis": "itaque",
        "facere": "asperiores",
        "ratione": "eos",
      },
    },
    deviceDescription: "laborum",
    deviceName: "sint",
    deviceType: "incidunt",
    ipAddress: "pariatur",
    location: {
      city: "North Tomfort",
      country: "Montserrat",
      displayString: "accusantium",
      latitude: 8906.31,
      longitude: 6547.18,
      region: "aliquam",
      zipcode: "81923",
    },
    os: "voluptas",
    userAgent: "saepe",
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
import { ConnectorTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConnector({
  connector: {
    data: {
      "veniam": {
        "minima": "nisi",
      },
      "repellat": {
        "a": "molestiae",
        "amet": "voluptatibus",
        "temporibus": "tenetur",
        "nostrum": "tempora",
      },
      "maiores": {
        "illum": "exercitationem",
        "saepe": "deserunt",
        "sint": "minima",
        "dolore": "sequi",
      },
    },
    debug: false,
    id: "398dafb4-2a8d-4633-88e4-d8039ea5f9b1",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Otis Deckow",
    type: ConnectorTypeEnum.Ldap,
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
import { ConnectorTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createConnectorWithId("possimus", {
  connector: {
    data: {
      "ab": {
        "aut": "ipsum",
        "iste": "nulla",
        "dolorum": "maxime",
      },
      "assumenda": {
        "voluptatum": "eveniet",
      },
    },
    debug: false,
    id: "d0dc671d-c7f1-4e3a-b159-20c90d1b4901",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Phillip Pollich",
    type: ConnectorTypeEnum.Generic,
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
    consentEmailTemplateId: "c8a32639-da5b-47b6-902b-881a94f64366",
    countryMinimumAgeForSelfConsent: {
      "mollitia": "quas",
      "hic": "doloremque",
    },
    data: {
      "asperiores": {
        "quod": "commodi",
        "natus": "beatae",
        "placeat": "molestiae",
      },
      "dolor": {
        "nulla": "occaecati",
      },
      "doloribus": {
        "culpa": "tenetur",
        "molestias": "magnam",
        "voluptate": "aliquid",
      },
    },
    defaultMinimumAgeForSelfConsent: 642652,
    emailPlus: {
      emailTemplateId: "2ae8dcc5-0c8a-4351-ac73-7848930750a0",
      enabled: false,
      maximumTimeToSendEmailInHours: 25872,
      minimumTimeToSendEmailInHours: 880322,
    },
    id: "966ec736-d431-4943-98c7-83c92398ed3d",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Joanna Rohan",
    values: [
      "non",
      "placeat",
      "veniam",
    ],
  },
}, "minus").then((res: CreateConsentResponse) => {
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

sdk.sdk.createConsentWithId("similique", {
  consent: {
    consentEmailTemplateId: "8649a70c-fd5d-4698-9b72-06451077d19e",
    countryMinimumAgeForSelfConsent: {
      "voluptatum": "ratione",
      "facere": "eius",
      "perspiciatis": "consequuntur",
    },
    data: {
      "quibusdam": {
        "ut": "tempore",
      },
      "molestias": {
        "odit": "minus",
        "sunt": "sint",
        "exercitationem": "magnam",
      },
      "veniam": {
        "minima": "officiis",
        "unde": "ullam",
      },
      "enim": {
        "cumque": "cumque",
        "et": "praesentium",
        "minima": "eveniet",
        "est": "magnam",
      },
    },
    defaultMinimumAgeForSelfConsent: 602932,
    emailPlus: {
      emailTemplateId: "01c7c43a-d2da-4a78-8aba-3d230edf7381",
      enabled: false,
      maximumTimeToSendEmailInHours: 114762,
      minimumTimeToSendEmailInHours: 673592,
    },
    id: "115382bd-7ed5-4650-b621-c58f4d739656",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Miss Jacquelyn Corkery III",
    values: [
      "veritatis",
    ],
  },
}, "similique").then((res: CreateConsentWithIdResponse) => {
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
    defaultFromName: "omnis",
    defaultHtmlTemplate: "commodi",
    defaultSubject: "dicta",
    defaultTextTemplate: "illum",
    fromEmail: "aspernatur",
    id: "4a7dbb8f-532d-4892-8f78-12cb512c8782",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "accusantium": "nobis",
      "asperiores": "corporis",
    },
    localizedHtmlTemplates: {
      "voluptatum": "a",
      "corrupti": "blanditiis",
    },
    localizedSubjects: {
      "blanditiis": "maiores",
      "et": "harum",
      "a": "alias",
      "tempore": "quod",
    },
    localizedTextTemplates: {
      "officiis": "dicta",
      "maiores": "dolores",
      "perferendis": "eum",
    },
    name: "Corey Streich",
  },
}, "illo").then((res: CreateEmailTemplateResponse) => {
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

sdk.sdk.createEmailTemplateWithId("temporibus", {
  emailTemplate: {
    defaultFromName: "doloremque",
    defaultHtmlTemplate: "aperiam",
    defaultSubject: "laudantium",
    defaultTextTemplate: "ab",
    fromEmail: "voluptatem",
    id: "90f67066-73f3-4a68-9c57-68dce742409a",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "beatae": "exercitationem",
    },
    localizedHtmlTemplates: {
      "eaque": "blanditiis",
      "voluptas": "aut",
      "vitae": "tempora",
      "molestias": "cupiditate",
    },
    localizedSubjects: {
      "minima": "doloribus",
      "suscipit": "sequi",
      "debitis": "neque",
    },
    localizedTextTemplates: {
      "tenetur": "non",
      "pariatur": "vero",
      "natus": "quibusdam",
    },
    name: "Luke Ebert",
  },
}, "placeat").then((res: CreateEmailTemplateWithIdResponse) => {
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
    clientId: "pariatur",
    clientSecret: "vel",
    data: {
      "incidunt": {
        "ipsum": "itaque",
        "non": "dolorum",
        "esse": "id",
      },
    },
    id: "98e4df37-e45b-4895-9d41-3e13a4823109",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Charlene Ritchie",
    parentId: "54c092bd-734f-4024-89d8-6f4bb20fe5d9",
    tenantId: "11cbfe74-9caf-445a-a7f6-9e2c9e6d10e9",
    type: {
      data: {
        "quidem": {
          "est": "repellendus",
        },
        "tempora": {
          "vel": "cum",
          "doloremque": "adipisci",
          "quasi": "accusantium",
          "molestias": "facere",
        },
        "occaecati": {
          "nesciunt": "sequi",
          "in": "modi",
          "nihil": "velit",
          "aut": "rem",
        },
        "odit": {
          "error": "incidunt",
          "asperiores": "eos",
          "mollitia": "distinctio",
        },
      },
      id: "1fd5671e-9c32-4635-8a46-7143789ce0e9",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "91594d93-a74c-4025-afe3-b4b4db8b778e",
        enabled: false,
        timeToLiveInSeconds: 717018,
      },
      lastUpdateInstant: 1659380719000,
      name: "Dr. Ramon Towne",
      permissions: [
        {
          data: {
            "ad": {
              "aspernatur": "expedita",
            },
            "laborum": {
              "rerum": "explicabo",
              "eligendi": "nam",
              "placeat": "aliquam",
              "aliquid": "adipisci",
            },
            "ipsam": {
              "enim": "eveniet",
              "eum": "exercitationem",
              "at": "culpa",
              "alias": "eos",
            },
            "quos": {
              "dolor": "accusamus",
              "sint": "enim",
              "veritatis": "mollitia",
              "veritatis": "vero",
            },
          },
          description: "ratione",
          id: "0fda9664-89d7-4b78-a73e-13a12a6b9924",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Theodore Hettinger",
        },
        {
          data: {
            "corrupti": {
              "asperiores": "veniam",
              "cumque": "praesentium",
            },
            "ut": {
              "blanditiis": "nesciunt",
            },
          },
          description: "ex",
          id: "b86b3cdf-6415-4b04-89f9-df13f4eedbe7",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Geoffrey Witting III",
        },
        {
          data: {
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
          description: "expedita",
          id: "785148d6-d549-4e56-b5b3-3bc0f970c42f",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Eduardo Windler",
        },
        {
          data: {
            "numquam": {
              "consequuntur": "veniam",
            },
            "voluptates": {
              "minima": "expedita",
              "ducimus": "excepturi",
            },
          },
          description: "eum",
          id: "065c0efa-6f93-4b90-a1b8-c95be1254b73",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Van Grimes",
        },
      ],
    },
  },
}, "odio").then((res: CreateEntityResponse) => {
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
      "explicabo": {
        "perferendis": "possimus",
      },
      "dicta": {
        "voluptas": "exercitationem",
        "quis": "quos",
        "impedit": "cupiditate",
        "excepturi": "quod",
      },
    },
    id: "722d2bc0-f940-487d-9caa-e042dd7caac9",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "b4caa1cf-e9e1-45df-9039-07f37831983d",
      enabled: false,
      timeToLiveInSeconds: 262824,
    },
    lastUpdateInstant: 1659380719000,
    name: "Sophie Hane",
    permissions: [
      {
        data: {
          "dolore": {
            "commodi": "quis",
            "provident": "iusto",
          },
          "optio": {
            "consequatur": "fugit",
            "dolorem": "nesciunt",
          },
        },
        description: "maxime",
        id: "1471d51a-aa6d-4df5-abd6-487c5fc2b862",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "George Ankunding",
      },
      {
        data: {
          "autem": {
            "saepe": "illo",
            "aperiam": "quae",
            "veritatis": "enim",
          },
          "ducimus": {
            "dolor": "alias",
            "libero": "quibusdam",
          },
          "fuga": {
            "similique": "repellat",
            "quibusdam": "accusamus",
          },
          "illum": {
            "tempora": "similique",
            "dolor": "enim",
            "dolorum": "aliquam",
          },
        },
        description: "beatae",
        id: "238e1a73-5ac2-46ae-b3be-f971a8f46bca",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Amy Anderson",
      },
      {
        data: {
          "omnis": {
            "ipsam": "soluta",
            "esse": "vitae",
          },
          "beatae": {
            "voluptatem": "blanditiis",
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
          "similique": {
            "quis": "commodi",
            "eveniet": "possimus",
          },
        },
        description: "dolor",
        id: "33bb0ce8-aa65-4432-a986-eb7e14ca5640",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Nick Braun Jr.",
      },
    ],
  },
  permission: {
    data: {
      "nihil": {
        "et": "unde",
      },
      "similique": {
        "rem": "delectus",
        "blanditiis": "laudantium",
      },
      "earum": {
        "accusamus": "reprehenderit",
        "expedita": "hic",
        "occaecati": "perferendis",
        "non": "saepe",
      },
    },
    description: "consequatur",
    id: "1105d389-0816-42c6-beb6-8a0f657b7d03",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Albert Gerhold DVM",
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

sdk.sdk.createEntityTypePermission("blanditiis", {
  entityType: {
    data: {
      "repudiandae": {
        "voluptatem": "tenetur",
      },
      "aut": {
        "cupiditate": "fugiat",
        "atque": "beatae",
      },
      "aut": {
        "architecto": "atque",
        "temporibus": "unde",
      },
      "voluptate": {
        "sunt": "ad",
        "quia": "aspernatur",
        "iste": "molestiae",
        "minima": "et",
      },
    },
    id: "0da80312-292c-4c61-82a7-02bb97ee102d",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "a2de35f8-e01b-4f33-aaab-45402ac1704b",
      enabled: false,
      timeToLiveInSeconds: 952820,
    },
    lastUpdateInstant: 1659380719000,
    name: "Jody Schroeder",
    permissions: [
      {
        data: {
          "dicta": {
            "laborum": "itaque",
            "ad": "voluptates",
            "harum": "quaerat",
          },
          "delectus": {
            "porro": "labore",
          },
        },
        description: "molestias",
        id: "2b5744d0-8a22-467a-aee7-9e3c71ad31be",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Rudy Ledner",
      },
      {
        data: {
          "dolor": {
            "deleniti": "mollitia",
            "debitis": "neque",
          },
        },
        description: "facilis",
        id: "fc23d945-0a98-46a4-95ba-c707f06b28ec",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Ivan Johnston",
      },
      {
        data: {
          "amet": {
            "commodi": "a",
            "aliquid": "qui",
            "eligendi": "perspiciatis",
          },
        },
        description: "eum",
        id: "9c4cc6b7-8890-4a3f-93c8-1da10f8c23df",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Marvin Bergnaum",
      },
      {
        data: {
          "debitis": {
            "tempore": "minima",
            "vitae": "repellat",
            "est": "facere",
            "iste": "numquam",
          },
        },
        description: "similique",
        id: "cc943513-7726-4d15-b21b-832a56d69180",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Dr. Saul Kertzmann",
      },
    ],
  },
  permission: {
    data: {
      "fuga": {
        "autem": "nostrum",
        "atque": "saepe",
      },
      "eum": {
        "fuga": "non",
        "nam": "totam",
        "ut": "non",
      },
      "illum": {
        "totam": "explicabo",
      },
    },
    description: "quibusdam",
    id: "bec75c68-c606-4594-a8ce-304d8849bf82",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Amber Rosenbaum",
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

sdk.sdk.createEntityTypePermissionWithId("nihil", "hic", {
  entityType: {
    data: {
      "iure": {
        "cum": "eaque",
        "porro": "vel",
        "omnis": "recusandae",
      },
      "adipisci": {
        "fugit": "facere",
        "libero": "vitae",
      },
      "non": {
        "incidunt": "tempore",
        "deserunt": "error",
      },
    },
    id: "f78a5c0e-d7aa-4b62-a972-61fb0c58d27b",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "51996b5b-4b50-4eef-b12b-7a7ab0344b17",
      enabled: false,
      timeToLiveInSeconds: 113541,
    },
    lastUpdateInstant: 1659380719000,
    name: "Ella Legros",
    permissions: [
      {
        data: {
          "facilis": {
            "asperiores": "rem",
            "perspiciatis": "quam",
            "earum": "velit",
            "fugiat": "pariatur",
          },
          "voluptatem": {
            "minus": "pariatur",
            "dolor": "amet",
            "tenetur": "quasi",
            "dicta": "rerum",
          },
          "neque": {
            "aliquam": "voluptates",
            "alias": "voluptatum",
            "aut": "officia",
            "officia": "vitae",
          },
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
      {
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
      {
        data: {
          "quas": {
            "placeat": "rem",
          },
          "aut": {
            "repellat": "eveniet",
            "odit": "quam",
            "ullam": "inventore",
          },
          "laborum": {
            "perferendis": "incidunt",
          },
        },
        description: "ducimus",
        id: "c0449e14-3f96-419b-b7d4-0d5a11fa436e",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Jane Heidenreich I",
      },
      {
        data: {
          "hic": {
            "minima": "minus",
            "provident": "quibusdam",
            "explicabo": "adipisci",
          },
        },
        description: "iusto",
        id: "397c785b-5db4-4f50-8183-febdf676b720",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Mercedes Nolan",
      },
    ],
  },
  permission: {
    data: {
      "voluptatem": {
        "enim": "qui",
      },
      "dolorum": {
        "nisi": "dolore",
        "in": "officiis",
      },
    },
    description: "fugiat",
    id: "c439ed8c-4320-4f41-a40d-4487ac693b94",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Antonio Powlowski",
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

sdk.sdk.createEntityTypeWithId("magni", {
  entityType: {
    data: {
      "atque": {
        "quibusdam": "odio",
        "unde": "ad",
        "officia": "fuga",
      },
      "incidunt": {
        "asperiores": "maxime",
      },
    },
    id: "405669f6-9a00-46d2-9249-450819d7c3b1",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "b4184406-0e00-4310-9023-dc901f5afd2a",
      enabled: false,
      timeToLiveInSeconds: 413436,
    },
    lastUpdateInstant: 1659380719000,
    name: "Tom Gutkowski",
    permissions: [
      {
        data: {
          "itaque": {
            "assumenda": "praesentium",
            "occaecati": "eos",
            "veniam": "amet",
          },
          "nobis": {
            "provident": "ea",
            "consequuntur": "delectus",
            "quaerat": "quos",
          },
          "excepturi": {
            "rerum": "a",
            "ad": "et",
          },
        },
        description: "eveniet",
        id: "4652d3c3-43d6-4177-8af4-91247725e621",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Charles Mayert",
      },
      {
        data: {
          "ipsa": {
            "labore": "id",
            "ullam": "quibusdam",
          },
        },
        description: "recusandae",
        id: "59ac7706-670c-4f1c-b593-2605251e66bb",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Rachel Howe",
      },
    ],
  },
  permission: {
    data: {
      "facere": {
        "omnis": "dolorum",
        "qui": "nulla",
        "velit": "amet",
      },
      "ipsam": {
        "odio": "ipsa",
        "accusamus": "error",
      },
    },
    description: "velit",
    id: "ee6cf59f-358a-4aea-8ae3-23a31bf7ba1c",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Virgil Koepp III",
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

sdk.sdk.createEntityWithId("maxime", {
  entity: {
    clientId: "deleniti",
    clientSecret: "accusantium",
    data: {
      "minus": {
        "sint": "voluptates",
        "alias": "placeat",
        "in": "possimus",
        "iste": "assumenda",
      },
    },
    id: "323f1aa6-3ed9-4cf1-8856-bcba51ef2454",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Jim Kris",
    parentId: "cf116cdd-5444-4a75-a287-3c7dd9efaf43",
    tenantId: "dc623620-f313-48f3-8df3-db022faa565f",
    type: {
      data: {
        "rem": {
          "suscipit": "veniam",
          "consequuntur": "repudiandae",
          "nam": "libero",
          "perspiciatis": "illum",
        },
        "dolor": {
          "non": "deleniti",
          "dolor": "corrupti",
          "ducimus": "molestias",
        },
        "aperiam": {
          "labore": "neque",
        },
      },
      id: "b293dab3-0e91-47f5-8fda-04c8b1bb55a2",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "92b0bc3b-b744-4664-ab1d-03388b0d1bb1",
        enabled: false,
        timeToLiveInSeconds: 448063,
      },
      lastUpdateInstant: 1659380719000,
      name: "Roman Ullrich",
      permissions: [
        {
          data: {
            "voluptas": {
              "repudiandae": "quidem",
              "occaecati": "labore",
              "ipsam": "voluptate",
              "quod": "nihil",
            },
            "recusandae": {
              "laborum": "reiciendis",
              "consectetur": "provident",
              "possimus": "illo",
              "autem": "tenetur",
            },
            "rerum": {
              "odio": "nisi",
              "hic": "assumenda",
              "ab": "eum",
              "quia": "quidem",
            },
          },
          description: "sequi",
          id: "03e3023b-93e3-4431-acf5-5b4313553ccf",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Mrs. Adrienne Conroy",
        },
        {
          data: {
            "culpa": {
              "quod": "minus",
              "sint": "occaecati",
              "voluptatem": "labore",
              "maxime": "ad",
            },
            "illo": {
              "exercitationem": "cum",
              "atque": "suscipit",
              "labore": "praesentium",
            },
          },
          description: "optio",
          id: "efa78f1e-2d3b-4901-a095-2bbb4cbb19f7",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Dawn Stroman",
        },
      ],
    },
  },
}, "culpa").then((res: CreateEntityWithIdResponse) => {
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
import { FamilyRoleEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFamily({
  familyMember: {
    data: {
      "sunt": {
        "molestias": "impedit",
        "quasi": "nesciunt",
      },
      "corrupti": {
        "quia": "odio",
        "dicta": "eveniet",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRoleEnum.Child,
    userId: "8ea9e451-18c2-4cc5-bfbd-60b1a78ed29a",
  },
}, "occaecati").then((res: CreateFamilyResponse) => {
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
import { FamilyRoleEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFamilyWithId("pariatur", {
  familyMember: {
    data: {
      "itaque": {
        "animi": "totam",
        "ullam": "nisi",
        "nemo": "atque",
        "optio": "fugit",
      },
      "at": {
        "delectus": "aliquam",
        "optio": "laudantium",
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    owner: false,
    role: FamilyRoleEnum.Teen,
    userId: "be4f278f-d966-47e4-ac51-d2ffaa58dcef",
  },
}, "sed").then((res: CreateFamilyWithIdResponse) => {
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
import { FormTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createForm({
  form: {
    data: {
      "quaerat": {
        "natus": "nostrum",
        "veniam": "tempore",
        "natus": "facilis",
        "assumenda": "repellat",
      },
    },
    id: "2190abd9-bbcc-4272-9ec2-659ce0280840",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Charlie Mante",
    steps: [
      {
        fields: [
          "e45c8add-fac7-4545-8043-0c6632b4391f",
          "df01c3e9-1e8f-47bc-a9d4-60a77eceb26d",
          "10f1ef26-31c7-4c0f-8f87-3f9d5c25fd3e",
        ],
      },
      {
        fields: [
          "b4a4a425-3c30-4257-91f4-2c7e7dc548be",
        ],
      },
    ],
    type: FormTypeEnum.Registration,
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
import { FormControlEnum, FormDataTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormField({
  field: {
    confirm: false,
    consentId: "9e41a7a2-15ca-412a-8ba9-d59988192cfd",
    control: FormControlEnum.Checkbox,
    data: {
      "odio": {
        "eligendi": "ullam",
        "dolorem": "vero",
      },
      "esse": {
        "dignissimos": "facere",
        "eius": "accusamus",
        "vero": "nisi",
        "recusandae": "deleniti",
      },
      "nobis": {
        "consequatur": "distinctio",
        "similique": "porro",
        "consectetur": "molestias",
      },
      "modi": {
        "qui": "dolor",
        "sint": "ea",
        "in": "ipsa",
        "sequi": "maiores",
      },
    },
    description: "itaque",
    id: "c31c5082-4d18-49a3-aa6b-2d27eb707aa6",
    insertInstant: 1659380719000,
    key: "aut",
    lastUpdateInstant: 1659380719000,
    name: "Jaime Yundt",
    options: [
      "debitis",
      "commodi",
    ],
    required: false,
    type: FormDataTypeEnum.Bool,
    validator: {
      enabled: false,
      expression: "voluptate",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "db9db3b7-0ffb-4b69-b0ee-770e36097ef7",
      control: FormControlEnum.Textarea,
      data: {
        "doloremque": {
          "itaque": "suscipit",
          "vitae": "tempore",
        },
      },
      description: "sit",
      id: "d308714c-20a3-4d98-a37c-a85c3fe65574",
      insertInstant: 1659380719000,
      key: "possimus",
      lastUpdateInstant: 1659380719000,
      name: "Shannon Witting",
      options: [
        "quam",
        "placeat",
        "sint",
      ],
      required: false,
      type: FormDataTypeEnum.Email,
      validator: {
        enabled: false,
        expression: "a",
      },
    },
    {
      confirm: false,
      consentId: "13af28db-2cf2-4bf4-b3de-d356d7e14b21",
      control: FormControlEnum.Textarea,
      data: {
        "occaecati": {
          "beatae": "natus",
          "aliquid": "assumenda",
          "veniam": "quis",
        },
        "id": {
          "autem": "iste",
          "mollitia": "sunt",
          "quod": "labore",
          "facilis": "ducimus",
        },
        "natus": {
          "saepe": "nesciunt",
          "non": "vel",
          "praesentium": "beatae",
        },
        "eligendi": {
          "dolor": "eligendi",
        },
      },
      description: "dolorem",
      id: "9a7c0e17-cb12-4c5b-a825-fe22cd5cba6f",
      insertInstant: 1659380719000,
      key: "nobis",
      lastUpdateInstant: 1659380719000,
      name: "Alonzo Schamberger",
      options: [
        "fuga",
      ],
      required: false,
      type: FormDataTypeEnum.String,
      validator: {
        enabled: false,
        expression: "aliquid",
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
import { FormControlEnum, FormDataTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormFieldWithId("voluptatum", {
  field: {
    confirm: false,
    consentId: "13d65bfe-cec2-4dd6-916f-7fc7dda70ec6",
    control: FormControlEnum.Checkbox,
    data: {
      "laboriosam": {
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
      "nihil": {
        "eaque": "facere",
        "iste": "reprehenderit",
        "voluptate": "reiciendis",
        "et": "culpa",
      },
    },
    description: "exercitationem",
    id: "491abe97-51b1-406d-a3e0-3e69815aae99",
    insertInstant: 1659380719000,
    key: "earum",
    lastUpdateInstant: 1659380719000,
    name: "Levi Tremblay",
    options: [
      "odit",
      "iste",
    ],
    required: false,
    type: FormDataTypeEnum.Number,
    validator: {
      enabled: false,
      expression: "error",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "4f2d8a44-640c-4a60-9b73-a2f93f467dc0",
      control: FormControlEnum.Textarea,
      data: {
        "facere": {
          "minima": "voluptas",
          "et": "explicabo",
          "sed": "aut",
        },
        "quia": {
          "laborum": "soluta",
          "quas": "asperiores",
        },
        "eos": {
          "voluptate": "dolore",
          "praesentium": "exercitationem",
        },
      },
      description: "quo",
      id: "1976af98-0da7-4a08-9fc4-4db274530e5c",
      insertInstant: 1659380719000,
      key: "placeat",
      lastUpdateInstant: 1659380719000,
      name: "Bethany Hodkiewicz DDS",
      options: [
        "cumque",
        "delectus",
        "repellendus",
      ],
      required: false,
      type: FormDataTypeEnum.Number,
      validator: {
        enabled: false,
        expression: "possimus",
      },
    },
    {
      confirm: false,
      consentId: "334b6f62-3bce-4cab-90ae-e5e0da8b9af6",
      control: FormControlEnum.Select,
      data: {
        "perferendis": {
          "incidunt": "deleniti",
          "nisi": "repudiandae",
        },
        "odio": {
          "aliquam": "quasi",
          "ipsum": "quo",
          "expedita": "saepe",
        },
        "magni": {
          "et": "molestiae",
          "ea": "assumenda",
          "placeat": "illo",
          "optio": "numquam",
        },
        "adipisci": {
          "modi": "doloremque",
          "doloribus": "aliquid",
          "illo": "nulla",
          "inventore": "in",
        },
      },
      description: "et",
      id: "157cbe5e-e4f7-4211-8407-72f32e3b49db",
      insertInstant: 1659380719000,
      key: "officiis",
      lastUpdateInstant: 1659380719000,
      name: "Mindy Considine",
      options: [
        "distinctio",
        "suscipit",
      ],
      required: false,
      type: FormDataTypeEnum.String,
      validator: {
        enabled: false,
        expression: "perspiciatis",
      },
    },
    {
      confirm: false,
      consentId: "948d6ede-d477-4680-bc7a-17a82e5e82fd",
      control: FormControlEnum.Number,
      data: {
        "fugiat": {
          "perferendis": "quaerat",
        },
        "aperiam": {
          "iusto": "debitis",
          "sint": "beatae",
          "ratione": "omnis",
        },
        "qui": {
          "distinctio": "incidunt",
          "quaerat": "eligendi",
          "expedita": "architecto",
        },
      },
      description: "totam",
      id: "35008f46-1ce5-43e9-9449-8a9ba460addf",
      insertInstant: 1659380719000,
      key: "temporibus",
      lastUpdateInstant: 1659380719000,
      name: "Miss Francis Boehm",
      options: [
        "possimus",
        "culpa",
      ],
      required: false,
      type: FormDataTypeEnum.Email,
      validator: {
        enabled: false,
        expression: "iste",
      },
    },
    {
      confirm: false,
      consentId: "182a49d9-625d-43ca-bfc1-98eea4452792",
      control: FormControlEnum.Textarea,
      data: {
        "possimus": {
          "ut": "ipsa",
          "saepe": "id",
        },
        "occaecati": {
          "nam": "itaque",
          "placeat": "porro",
          "itaque": "accusantium",
        },
        "labore": {
          "nisi": "pariatur",
          "necessitatibus": "perferendis",
          "repellendus": "ipsam",
        },
        "aliquid": {
          "nihil": "non",
          "distinctio": "aut",
          "quae": "quis",
          "nemo": "accusantium",
        },
      },
      description: "neque",
      id: "e8dc626f-f77c-4656-b5f5-b70e3e4cfcc6",
      insertInstant: 1659380719000,
      key: "dolorum",
      lastUpdateInstant: 1659380719000,
      name: "Andrew Treutel",
      options: [
        "aliquid",
      ],
      required: false,
      type: FormDataTypeEnum.Bool,
      validator: {
        enabled: false,
        expression: "modi",
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
import { FormTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createFormWithId("at", {
  form: {
    data: {
      "alias": {
        "quae": "tempora",
      },
    },
    id: "ef45cea1-1ac5-43eb-b658-7f340414c5b9",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Forrest Veum",
    steps: [
      {
        fields: [
          "ae9f92ca-f1b0-425f-9d14-718c6fa2fad0",
        ],
      },
    ],
    type: FormTypeEnum.SelfServiceUser,
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
      "commodi": {
        "veniam": "facere",
        "excepturi": "exercitationem",
        "quaerat": "in",
        "magni": "quo",
      },
    },
    id: "dd14fc43-b70b-4ca8-8fa7-0c43351c3dd1",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Kerry Lesch",
    roles: [
      {
        description: "quam",
        id: "5f4f23f1-c0a5-486c-bae7-d7b67feef5e1",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Lori Stracke",
      },
      {
        description: "nam",
        id: "1dbeceff-7c4b-4156-a927-8275eea76817",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mrs. Katie Lang",
      },
      {
        description: "tenetur",
        id: "799b7956-c0b0-4fa0-bb20-a40e7c4ae640",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Monica Cronin",
      },
      {
        description: "autem",
        id: "57b01a07-c08f-4d39-a1c2-57930d6f093a",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Cecelia Witting",
      },
    ],
    tenantId: "6d366dfa-1011-4a09-9b3e-c8b53862de1a",
  },
  roleIds: [
    "d14fe72e-521f-4903-83df-c338397fffa6",
    "d1d32090-fc15-47ac-9fe1-961ce9be41c8",
    "69dd7d97-19d0-47b2-80a5-8ffd2967df8f",
  ],
}, "facere").then((res: CreateGroupResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createGroupMembersWithId({
  members: [
    {
      data: {
        "sed": {
          "deleniti": "accusamus",
          "voluptas": "eaque",
          "tempore": "accusamus",
        },
        "commodi": {
          "perferendis": "eligendi",
        },
        "facere": {
          "quisquam": "veniam",
          "officia": "sapiente",
          "possimus": "quibusdam",
        },
      },
      groupId: "04c37525-12be-4ae1-987e-cc5fdcea8e7a",
      id: "88311662-cda6-4d77-81d8-6066237d4227",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
        cleanSpeakId: "66db8a74-9e39-4845-91cc-75e4f0c004b5",
        connectorId: "bb758cc9-4562-4f00-a968-5fcd1a173d84",
        data: {
          "cum": {
            "odit": "modi",
            "tenetur": "explicabo",
            "error": "praesentium",
            "sequi": "magnam",
          },
          "mollitia": {
            "harum": "doloremque",
            "odio": "ratione",
            "corporis": "eligendi",
            "expedita": "laboriosam",
          },
          "magni": {
            "corporis": "facere",
            "labore": "est",
            "odit": "unde",
          },
        },
        email: "Marisa89@hotmail.com",
        encryptionScheme: "quasi",
        expiry: 1659380719000,
        factor: 378939,
        firstName: "Lenora",
        fullName: "veritatis",
        id: "56f7d2ee-2095-405b-b03a-93e94480ca37",
        imageUrl: "voluptatibus",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Reilly",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
        ],
        middleName: "ipsa",
        mobilePhone: "ducimus",
        parentEmail: "voluptatum",
        password: "natus",
        passwordChangeReason: ChangePasswordReasonEnum.Administrative,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        registrations: [
          {
            applicationId: "ac333172-e2dd-479e-874b-a7e88ddb36fd",
            authenticationToken: "inventore",
            cleanSpeakId: "ccc341c8-6573-4474-b0a7-40fb4ab441c3",
            data: {
              "doloremque": {
                "saepe": "esse",
                "commodi": "velit",
                "perspiciatis": "omnis",
              },
              "minima": {
                "rem": "voluptatem",
                "corrupti": "tempore",
                "nam": "accusamus",
                "odio": "natus",
              },
              "dolore": {
                "minima": "exercitationem",
                "recusandae": "nobis",
              },
            },
            id: "c550a1c4-26b5-49c8-b66f-dcc135582c1b",
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
              "accusamus",
            ],
            timezone: "America/Denver",
            tokens: {
              "atque": "cupiditate",
              "fugiat": "omnis",
              "officiis": "hic",
            },
            username: "Lindsay89",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
        ],
        salt: "eaque",
        tenantId: "00a13ad8-1242-408e-bd23-411898e73879",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha512,
                codeLength: 708283,
                timeStep: 908643,
              },
              email: "Mayra_Nikolaus64@yahoo.com",
              id: "bb794536-e903-451b-b976-31720b77a5a5",
              lastUsed: false,
              method: "dolorem",
              mobilePhone: "eum",
              secret: "ipsam",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha512,
                codeLength: 483585,
                timeStep: 600948,
              },
              email: "Antoinette45@hotmail.com",
              id: "1f01c0d3-61fe-4d8d-85ef-fb453e9089e8",
              lastUsed: false,
              method: "reprehenderit",
              mobilePhone: "inventore",
              secret: "asperiores",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha512,
                codeLength: 747107,
                timeStep: 281711,
              },
              email: "Garrison_Metz@hotmail.com",
              id: "dd9c985e-4373-44a5-972d-9edd785be5e7",
              lastUsed: false,
              method: "mollitia",
              mobilePhone: "hic",
              secret: "accusamus",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha256,
                codeLength: 324243,
                timeStep: 172985,
              },
              email: "Jany.Rice@yahoo.com",
              id: "281f44e3-a233-494a-a8cc-80d30ff72164",
              lastUsed: false,
              method: "temporibus",
              mobilePhone: "alias",
              secret: "deserunt",
            },
          ],
          recoveryCodes: [
            "dicta",
            "repellat",
            "voluptates",
          ],
        },
        uniqueUsername: "provident",
        username: "Rowland.Monahan",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      userId: "3b89e000-9c66-492d-a7b3-562201a6aab4",
    },
    {
      data: {
        "voluptates": {
          "harum": "vitae",
          "fuga": "ipsam",
        },
        "harum": {
          "alias": "rem",
          "placeat": "dolore",
          "repudiandae": "consectetur",
        },
        "perferendis": {
          "perspiciatis": "quae",
          "dolorum": "fuga",
        },
      },
      groupId: "35d4a839-f03b-4ab7-bb91-8f0313984507",
      id: "e0e39c7e-23ec-4b06-8465-2e23a3d6c657",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
        cleanSpeakId: "9de8f7f0-02d1-4986-aa99-d3a1d32329e4",
        connectorId: "5837e8f2-ad6b-4b10-a255-fdc480d6e330",
        data: {
          "aliquid": {
            "exercitationem": "quod",
            "tempore": "sapiente",
          },
          "quae": {
            "voluptas": "molestias",
            "nostrum": "vel",
            "deserunt": "ducimus",
          },
          "officiis": {
            "fugit": "eligendi",
            "facere": "doloribus",
            "omnis": "assumenda",
          },
        },
        email: "Vallie53@gmail.com",
        encryptionScheme: "magni",
        expiry: 1659380719000,
        factor: 799929,
        firstName: "Graciela",
        fullName: "ea",
        id: "6af3c3f5-589b-4ea5-9264-e41e2ca84822",
        imageUrl: "officiis",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Harris",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
        ],
        middleName: "neque",
        mobilePhone: "asperiores",
        parentEmail: "autem",
        password: "nulla",
        passwordChangeReason: ChangePasswordReasonEnum.Expired,
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
            applicationId: "ad37c309-9077-4c10-b687-92163e67d488",
            authenticationToken: "vel",
            cleanSpeakId: "0543c0a3-049c-43cf-ac02-76e7b21bad90",
            data: {
              "aspernatur": {
                "ut": "velit",
                "doloribus": "nulla",
              },
              "ex": {
                "magni": "animi",
                "sunt": "voluptatem",
                "saepe": "ea",
                "placeat": "odit",
              },
              "natus": {
                "atque": "saepe",
                "quo": "eos",
              },
              "enim": {
                "officia": "veniam",
                "cum": "voluptatem",
              },
            },
            id: "9227fcc4-7996-4c97-bbbc-57f38928a860",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "ad",
              "atque",
              "illum",
              "eum",
            ],
            timezone: "America/Denver",
            tokens: {
              "facere": "ea",
              "sequi": "voluptates",
            },
            username: "Donna.Murphy",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
        ],
        salt: "quos",
        tenantId: "464579cf-c6c0-4e50-bf56-831f1d8ed87b",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha256,
                codeLength: 927771,
                timeStep: 539450,
              },
              email: "Van_Nader56@yahoo.com",
              id: "86e241e4-3b23-4424-97d1-3e3f62aa9ae4",
              lastUsed: false,
              method: "fuga",
              mobilePhone: "necessitatibus",
              secret: "molestias",
            },
          ],
          recoveryCodes: [
            "expedita",
            "numquam",
            "id",
          ],
        },
        uniqueUsername: "provident",
        username: "Ocie.Gulgowski",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      userId: "5e8ba5d4-aa4a-4508-bd38-0c29aa8dd71b",
    },
    {
      data: {
        "repellendus": {
          "mollitia": "ipsum",
          "quae": "cum",
          "odio": "cum",
        },
        "perspiciatis": {
          "labore": "modi",
        },
        "omnis": {
          "saepe": "suscipit",
          "unde": "cumque",
          "perferendis": "deleniti",
        },
        "totam": {
          "labore": "vitae",
          "deleniti": "tempore",
          "libero": "quam",
          "dicta": "totam",
        },
      },
      groupId: "04f423d5-4393-45f3-b7ac-5c9b7e93b6a3",
      id: "c523105e-7c34-4cab-8ecb-812a66148944",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
        cleanSpeakId: "8e908507-5bc2-4538-a533-43fb0a4e66ea",
        connectorId: "47578d17-1e29-4418-98fc-679b6b2f2535",
        data: {
          "quidem": {
            "ipsam": "minima",
            "assumenda": "aperiam",
            "et": "ad",
          },
          "quidem": {
            "quia": "eligendi",
            "quos": "cum",
          },
          "praesentium": {
            "dolorum": "amet",
          },
        },
        email: "Lizzie_Littel@yahoo.com",
        encryptionScheme: "molestias",
        expiry: 1659380719000,
        factor: 778678,
        firstName: "Berta",
        fullName: "modi",
        id: "4200c2ca-eb1a-4e1e-8f8c-34946bba7a05",
        imageUrl: "deserunt",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Leannon",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
          {},
        ],
        middleName: "magnam",
        mobilePhone: "deserunt",
        parentEmail: "perspiciatis",
        password: "voluptates",
        passwordChangeReason: ChangePasswordReasonEnum.Validation,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "3688cca3-6327-4276-8e96-6e97e0541033",
            authenticationToken: "aliquam",
            cleanSpeakId: "7d78ff24-9114-45fa-b9e5-9a4af336664e",
            data: {
              "mollitia": {
                "rerum": "sapiente",
                "dolores": "reiciendis",
              },
              "doloribus": {
                "quaerat": "recusandae",
              },
              "praesentium": {
                "beatae": "expedita",
                "velit": "nemo",
                "magni": "dolorum",
                "porro": "placeat",
              },
            },
            id: "edacc522-7814-4eca-816b-c41ea1342d41",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "similique",
              "dolores",
            ],
            timezone: "America/Denver",
            tokens: {
              "debitis": "asperiores",
              "iusto": "quasi",
            },
            username: "Russel49",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
          {
            applicationId: "11d614a4-3176-492e-a486-73d522b828a9",
            authenticationToken: "doloremque",
            cleanSpeakId: "30660f02-4c79-4b4c-864c-2b3a32c488ad",
            data: {
              "ex": {
                "reiciendis": "autem",
              },
              "est": {
                "quaerat": "exercitationem",
                "molestias": "id",
                "voluptas": "corporis",
              },
              "eveniet": {
                "aperiam": "deleniti",
              },
              "amet": {
                "quasi": "laboriosam",
              },
            },
            id: "ca34bb87-d4f6-4212-ba60-7d1606294514",
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
              "pariatur",
            ],
            timezone: "America/Denver",
            tokens: {
              "cupiditate": "cumque",
              "similique": "omnis",
              "sapiente": "consectetur",
            },
            username: "Katlynn.Powlowski72",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
          {
            applicationId: "87870349-3f49-4aa8-865a-3283279b719d",
            authenticationToken: "ab",
            cleanSpeakId: "cea673d8-6e3b-435e-89a3-135778ce54ca",
            data: {
              "libero": {
                "accusamus": "ratione",
              },
              "vero": {
                "sint": "ducimus",
                "minima": "voluptatem",
                "labore": "corporis",
              },
              "harum": {
                "quod": "asperiores",
                "ea": "neque",
                "nam": "sed",
              },
              "quasi": {
                "sunt": "quos",
                "commodi": "id",
              },
            },
            id: "b5e3a022-6143-415d-9568-299e61afc718",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "voluptatibus",
              "dolores",
              "alias",
              "tempore",
            ],
            timezone: "America/Denver",
            tokens: {
              "fuga": "nihil",
              "dolor": "possimus",
            },
            username: "Virginie77",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
        ],
        salt: "alias",
        tenantId: "d7657c16-41bb-4f05-9271-b2511dd606dd",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha512,
                codeLength: 125701,
                timeStep: 526942,
              },
              email: "Jett_Cormier58@gmail.com",
              id: "c3221697-b188-40fc-bb2b-93c15f670bd1",
              lastUsed: false,
              method: "nihil",
              mobilePhone: "blanditiis",
              secret: "numquam",
            },
          ],
          recoveryCodes: [
            "sequi",
            "sunt",
            "vel",
          ],
        },
        uniqueUsername: "exercitationem",
        username: "Damion_Toy22",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      userId: "6e241c31-0998-4366-bc66-dcbb7df6cb09",
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

sdk.sdk.createGroupWithId("nobis", {
  group: {
    data: {
      "distinctio": {
        "aperiam": "praesentium",
        "recusandae": "eaque",
      },
      "nihil": {
        "adipisci": "molestiae",
      },
      "in": {
        "repellendus": "saepe",
        "non": "a",
      },
    },
    id: "ee101d97-80a1-40c4-bb95-040d6c8b2a5f",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Lisa Collier IV",
    roles: [
      {
        description: "ut",
        id: "048f9000-9ed2-4902-b8eb-4ae9d64161e9",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mr. Renee Berge",
      },
      {
        description: "amet",
        id: "b2c09b92-4771-4f56-a9e5-b7ec7626649d",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Jay Tremblay",
      },
      {
        description: "recusandae",
        id: "4cfd2276-e0b8-48fb-87d6-fa5b6e8dbf81",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Nettie Kuvalis",
      },
      {
        description: "inventore",
        id: "ca6a9ffc-5619-429c-8a95-60a1395918da",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Hope Gusikowski",
      },
    ],
    tenantId: "78e3cf8e-1143-4da9-b08b-27a08af22184",
  },
  roleIds: [
    "39b3de87-56cc-4ce4-b0cd-2147b6e6152c",
    "f01d0d8c-3a4b-49a5-bf93-5dfe974fa4b1",
  ],
}, "voluptates").then((res: CreateGroupWithIdResponse) => {
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
import { IPAccessControlEntryActionEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIPAccessControlList({
  ipAccessControlList: {
    data: {
      "placeat": {
        "natus": "molestiae",
      },
      "accusamus": {
        "animi": "autem",
        "fugit": "neque",
        "magnam": "numquam",
        "fugit": "voluptates",
      },
      "beatae": {
        "unde": "consequuntur",
        "ratione": "quam",
        "recusandae": "iste",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryActionEnum.Block,
        endIPAddress: "numquam",
        startIPAddress: "porro",
      },
      {
        action: IPAccessControlEntryActionEnum.Block,
        endIPAddress: "consequatur",
        startIPAddress: "facilis",
      },
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "nihil",
        startIPAddress: "sint",
      },
    ],
    id: "e891923c-18ca-48d6-9c56-89214fa20207",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Herbert Wintheiser",
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
import { IPAccessControlEntryActionEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIPAccessControlListWithId("aut", {
  ipAccessControlList: {
    data: {
      "voluptatum": {
        "facere": "esse",
        "tenetur": "ab",
        "cum": "minus",
        "ratione": "placeat",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryActionEnum.Block,
        endIPAddress: "dolorum",
        startIPAddress: "repellat",
      },
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "asperiores",
        startIPAddress: "optio",
      },
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "impedit",
        startIPAddress: "minus",
      },
    ],
    id: "ba4bef0d-f68e-4aed-b2ee-70be069fb36a",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mrs. Gilberto Kuhic V",
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
  CanonicalizationMethodEnum,
  ClientAuthenticationMethodEnum,
  IdentityProviderLinkingStrategyEnum,
  IdentityProviderLoginMethodEnum,
  IdentityProviderTypeEnum,
  SAMLv2DestinationAssertionPolicyEnum,
  SteamAPIModeEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIdentityProvider({
  identityProvider: {
    apiMode: SteamAPIModeEnum.Partner,
    applicationConfiguration: {
      "fuga": {
        apiMode: SteamAPIModeEnum.Public,
        buttonText: "tenetur",
        clientId: "maxime",
        createRegistration: false,
        data: {
          "dolor": {
            "ullam": "similique",
            "aperiam": "adipisci",
            "aliquam": "soluta",
          },
          "inventore": {
            "ut": "sint",
          },
        },
        scope: "sint",
        webAPIKey: "eos",
      },
    },
    buttonText: "eius",
    clientId: "ratione",
    data: {
      "maiores": {
        "suscipit": "occaecati",
        "totam": "in",
        "est": "eius",
      },
      "ducimus": {
        "libero": "esse",
      },
      "sit": {
        "dolorum": "vitae",
        "minima": "ipsum",
        "accusamus": "eos",
      },
    },
    debug: false,
    id: "23010685-39ce-4093-ad10-acd15d8cc306",
    insertInstant: 1659380719000,
    lambdaConfiguration: {
      reconcileId: "b786b3d3-7bd2-404a-9f34-0bb36f677a48",
    },
    lastUpdateInstant: 1659380719000,
    linkingStrategy: IdentityProviderLinkingStrategyEnum.LinkAnonymously,
    name: "Ramona Schinner",
    scope: "quam",
    tenantConfiguration: {
      "sint": {
        data: {
          "odit": {
            "aliquam": "deleniti",
            "quos": "qui",
            "ex": "nam",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 715995,
        },
      },
      "aperiam": {
        data: {
          "porro": {
            "asperiores": "possimus",
            "consequuntur": "odit",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 314732,
        },
      },
    },
    type: IdentityProviderTypeEnum.Twitter,
    webAPIKey: "dolore",
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
  CanonicalizationMethodEnum,
  ClientAuthenticationMethodEnum,
  IdentityProviderLinkingStrategyEnum,
  IdentityProviderLoginMethodEnum,
  IdentityProviderTypeEnum,
  SAMLv2DestinationAssertionPolicyEnum,
  SteamAPIModeEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createIdentityProviderWithId("in", {
  identityProvider: {
    applicationConfiguration: {
      "architecto": {
        buttonImageURL: "culpa",
        buttonText: "blanditiis",
        createRegistration: false,
        data: {
          "necessitatibus": {
            "in": "qui",
            "laborum": "explicabo",
            "repellendus": "eius",
            "est": "repellat",
          },
          "quaerat": {
            "minima": "voluptatum",
          },
          "id": {
            "magni": "repellendus",
            "doloremque": "sapiente",
            "sit": "repellat",
            "nemo": "quos",
          },
        },
        oauth2: {
          authorizationEndpoint: "optio",
          clientAuthenticationMethod: ClientAuthenticationMethodEnum.None,
          clientId: "libero",
          clientSecret: "totam",
          emailClaim: "in",
          issuer: "tempore",
          scope: "ut",
          tokenEndpoint: "molestiae",
          uniqueIdClaim: "eaque",
          userinfoEndpoint: "tempora",
          usernameClaim: "aut",
        },
      },
      "possimus": {
        buttonImageURL: "aut",
        buttonText: "assumenda",
        createRegistration: false,
        data: {
          "quos": {
            "unde": "fugiat",
            "laudantium": "eos",
            "porro": "nostrum",
            "officiis": "adipisci",
          },
          "alias": {
            "voluptatibus": "corporis",
            "nostrum": "molestiae",
          },
          "aliquid": {
            "nemo": "quisquam",
            "quibusdam": "voluptates",
            "cum": "consequatur",
            "eos": "totam",
          },
        },
        oauth2: {
          authorizationEndpoint: "ea",
          clientAuthenticationMethod: ClientAuthenticationMethodEnum.ClientSecretPost,
          clientId: "alias",
          clientSecret: "distinctio",
          emailClaim: "maxime",
          issuer: "aliquam",
          scope: "adipisci",
          tokenEndpoint: "harum",
          uniqueIdClaim: "veritatis",
          userinfoEndpoint: "quas",
          usernameClaim: "id",
        },
      },
    },
    buttonImageURL: "expedita",
    buttonText: "ipsum",
    data: {
      "corrupti": {
        "consequuntur": "asperiores",
        "quisquam": "maiores",
        "maiores": "laudantium",
        "beatae": "assumenda",
      },
      "quibusdam": {
        "dignissimos": "vero",
        "eaque": "deleniti",
        "totam": "repellat",
        "iusto": "labore",
      },
    },
    debug: false,
    domains: [
      "delectus",
      "quis",
      "quaerat",
      "eligendi",
    ],
    id: "9216e892-6313-4bb6-bc2c-8d2701096b66",
    insertInstant: 1659380719000,
    lambdaConfiguration: {
      reconcileId: "ad6e3e1d-9d3b-4660-b34a-11aa1d5d2247",
    },
    lastUpdateInstant: 1659380719000,
    linkingStrategy: IdentityProviderLinkingStrategyEnum.LinkByUsernameForExistingUser,
    name: "Freddie Renner",
    oauth2: {
      authorizationEndpoint: "labore",
      clientAuthenticationMethod: ClientAuthenticationMethodEnum.ClientSecretBasic,
      clientId: "quasi",
      clientSecret: "ducimus",
      emailClaim: "eaque",
      issuer: "debitis",
      scope: "iusto",
      tokenEndpoint: "eum",
      uniqueIdClaim: "quos",
      userinfoEndpoint: "est",
      usernameClaim: "perspiciatis",
    },
    postRequest: false,
    tenantConfiguration: {
      "nobis": {
        data: {
          "sequi": {
            "totam": "reprehenderit",
            "voluptatum": "corrupti",
            "sequi": "perspiciatis",
          },
          "rem": {
            "tempore": "dolorum",
            "architecto": "expedita",
            "cum": "reiciendis",
            "dignissimos": "ab",
          },
          "dolore": {
            "dolor": "enim",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 403754,
        },
      },
      "tenetur": {
        data: {
          "amet": {
            "molestias": "id",
            "dicta": "voluptas",
          },
          "tempora": {
            "incidunt": "cupiditate",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 708466,
        },
      },
    },
    type: IdentityProviderTypeEnum.ExternalJWT,
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createLambda({
  lambda: {
    body: "beatae",
    debug: false,
    engineType: LambdaEngineTypeEnum.GraalJS,
    id: "ce46b951-652b-4158-8a91-42f052632b31",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Horace Stroman",
    type: LambdaTypeEnum.SAMLv2Populate,
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createLambdaWithId("a", {
  lambda: {
    body: "maiores",
    debug: false,
    engineType: LambdaEngineTypeEnum.Nashorn,
    id: "8745005e-9d3d-4934-a036-f5c388664f69",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Lewis Hauck MD",
    type: LambdaTypeEnum.SAMLv2Populate,
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
      "sed": {
        "repudiandae": "assumenda",
        "vel": "fuga",
        "est": "tenetur",
      },
      "atque": {
        "nesciunt": "impedit",
        "eos": "praesentium",
      },
      "illum": {
        "incidunt": "aut",
      },
      "eligendi": {
        "perspiciatis": "id",
        "amet": "pariatur",
      },
    },
    deviceDescription: "iste",
    deviceName: "voluptatem",
    deviceType: "voluptas",
    ipAddress: "hic",
    location: {
      city: "Shaynafort",
      country: "Tajikistan",
      displayString: "nostrum",
      latitude: 6426.7,
      longitude: 8549.04,
      region: "quam",
      zipcode: "84252-9139",
    },
    os: "ex",
    userAgent: "ratione",
  },
  global: false,
  refreshToken: "tempora",
}, "rerum", "ratione").then((res: CreateLogoutResponse) => {
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessageTemplate({
  messageTemplate: {
    data: {
      "dolorem": {
        "ducimus": "inventore",
      },
      "numquam": {
        "commodi": "soluta",
        "recusandae": "corrupti",
        "minus": "dolorem",
        "debitis": "consequatur",
      },
    },
    id: "9c64d342-ac29-49a6-a5e7-aef13402e945",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Corey Fadel",
    type: MessageTypeEnum.Sms,
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessageTemplateWithId("consectetur", {
  messageTemplate: {
    data: {
      "hic": {
        "repudiandae": "quasi",
        "quae": "sint",
        "praesentium": "quia",
        "dolores": "illo",
      },
      "repellat": {
        "libero": "inventore",
        "tenetur": "nihil",
        "fugiat": "iste",
      },
      "deserunt": {
        "a": "repudiandae",
        "eum": "omnis",
        "aliquid": "blanditiis",
        "sed": "mollitia",
      },
      "minus": {
        "recusandae": "asperiores",
        "cum": "accusantium",
        "magnam": "reiciendis",
        "voluptatum": "maxime",
      },
    },
    id: "512caabe-a708-4ed5-b98d-385d460599d5",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Bryan Franecki",
    type: MessageTypeEnum.Sms,
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
import { MessengerTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessenger({
  messenger: {
    data: {
      "dignissimos": {
        "facere": "minima",
        "ullam": "dolores",
      },
      "accusantium": {
        "officiis": "perspiciatis",
        "est": "eos",
        "qui": "corporis",
      },
    },
    debug: false,
    id: "3b6d7658-86ee-4ae5-bd4b-39f8a1490678",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Lawrence Fadel",
    transport: "laudantium",
    type: MessengerTypeEnum.Kafka,
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
import { MessengerTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createMessengerWithId("repellendus", {
  messenger: {
    data: {
      "neque": {
        "earum": "eligendi",
        "occaecati": "saepe",
        "illo": "esse",
      },
      "enim": {
        "maiores": "similique",
        "iste": "consequatur",
        "autem": "similique",
        "voluptates": "enim",
      },
      "corporis": {
        "soluta": "nihil",
        "fugit": "debitis",
        "quidem": "vel",
      },
    },
    debug: false,
    id: "746030fe-1837-46c2-bede-e76790ed0c16",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Clinton Pouros",
    transport: "quam",
    type: MessengerTypeEnum.Kafka,
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createTenant({
  eventInfo: {
    data: {
      "alias": {
        "ut": "totam",
        "unde": "repellat",
      },
      "voluptas": {
        "dignissimos": "ipsa",
        "itaque": "earum",
      },
    },
    deviceDescription: "ipsa",
    deviceName: "aliquam",
    deviceType: "praesentium",
    ipAddress: "doloremque",
    location: {
      city: "Antoninachester",
      country: "Chad",
      displayString: "soluta",
      latitude: 6341.57,
      longitude: 1475.97,
      region: "nemo",
      zipcode: "94743-6956",
    },
    os: "autem",
    userAgent: "perferendis",
  },
  sourceTenantId: "a7ae346e-0979-4e5a-be60-acaca645de98",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "67551a9c-ce61-4ec2-879a-39ae5a4d5a65",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethodEnum.HCaptcha,
      enabled: false,
      secretKey: "tempora",
      siteKey: "fugiat",
      threshold: 3499.61,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "62d9b7d9-e2d6-4fcf-9576-29db875c3a89",
        data: {
          "fugit": {
            "dolores": "est",
            "enim": "quasi",
            "delectus": "magnam",
          },
        },
        domains: [
          "optio",
        ],
        migrate: false,
      },
      {
        connectorId: "f6796ed3-d724-4c18-b581-e98cce3f7166",
        data: {
          "aperiam": {
            "culpa": "doloremque",
            "officiis": "dolor",
            "harum": "deserunt",
            "laboriosam": "veritatis",
          },
        },
        domains: [
          "ex",
          "repellat",
          "earum",
          "alias",
        ],
        migrate: false,
      },
    ],
    data: {
      "assumenda": {
        "minima": "explicabo",
        "soluta": "ad",
        "adipisci": "rerum",
      },
      "nesciunt": {
        "placeat": "blanditiis",
      },
      "cumque": {
        "placeat": "ratione",
        "eligendi": "esse",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Eloise Blick",
          value: "ipsum",
        },
      ],
      debug: false,
      defaultFromEmail: "at",
      defaultFromName: "excepturi",
      emailUpdateEmailTemplateId: "05cb4bed-ef3c-4127-8390-995528250dcb",
      emailVerifiedEmailTemplateId: "bcd3b121-b88c-41ee-9e7a-061391cc8fa0",
      forgotPasswordEmailTemplateId: "b7d17649-26b0-4cf5-a6cb-6ebabe5e0b99",
      host: "tenetur",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "3b1358d6-a87b-4b7a-acbe-569d70cb0699",
      loginIdInUseOnUpdateEmailTemplateId: "07f98944-1452-4a9f-81f3-442c61be133b",
      loginNewDeviceEmailTemplateId: "acde532b-6526-4f86-a853-fe2859ce3222",
      loginSuspiciousEmailTemplateId: "31fe6664-c41d-42fb-a5cb-a069b8d291be",
      password: "libero",
      passwordResetSuccessEmailTemplateId: "810a2aa8-7494-479e-9d4f-cf7b50cf87f0",
      passwordUpdateEmailTemplateId: "8f392710-76a2-44b4-8c8f-08bff1081e88",
      passwordlessEmailTemplateId: "f86996c8-e22b-4e0a-bcf4-7893bd23f866",
      port: 20,
      properties: "eaque",
      security: EmailSecurityTypeEnum.Tls,
      setPasswordEmailTemplateId: "61c78342-73ca-4a91-98b3-8f1b61a331a5",
      twoFactorMethodAddEmailTemplateId: "4dc10294-f92f-4ed9-b9ba-8f71e2992c20",
      twoFactorMethodRemoveEmailTemplateId: "ee1228ac-3adc-4647-9240-bc11ea482824",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehaviorEnum.Gated,
      },
      username: "Nicolette_Sawayn",
      verificationEmailTemplateId: "2f0f5b9d-3cb1-41a7-a87d-3100e8e2b9b0",
      verificationStrategy: VerificationStrategyEnum.FormField,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "quaerat": {
          enabled: false,
          transactionType: TransactionTypeEnum.Any,
        },
        "possimus": {
          enabled: false,
          transactionType: TransactionTypeEnum.None,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 676665,
      changePasswordIdGenerator: {
        length: 467847,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      changePasswordIdTimeToLiveInSeconds: 477169,
      deviceCodeTimeToLiveInSeconds: 853605,
      deviceUserCodeIdGenerator: {
        length: 67881,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      emailVerificationIdGenerator: {
        length: 676908,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      emailVerificationIdTimeToLiveInSeconds: 913700,
      emailVerificationOneTimeCodeGenerator: {
        length: 461817,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 948895,
      oneTimePasswordTimeToLiveInSeconds: 627191,
      passwordlessLoginGenerator: {
        length: 576904,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      passwordlessLoginTimeToLiveInSeconds: 715976,
      pendingAccountLinkTimeToLiveInSeconds: 936071,
      registrationVerificationIdGenerator: {
        length: 334801,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      registrationVerificationIdTimeToLiveInSeconds: 92763,
      registrationVerificationOneTimeCodeGenerator: {
        length: 492685,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 945008,
      setupPasswordIdGenerator: {
        length: 427587,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      setupPasswordIdTimeToLiveInSeconds: 25091,
      trustTokenTimeToLiveInSeconds: 727645,
      twoFactorIdTimeToLiveInSeconds: 95788,
      twoFactorOneTimeCodeIdGenerator: {
        length: 936796,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 16232,
      twoFactorTrustIdTimeToLiveInSeconds: 499229,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 920544,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 496681,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 885051,
      actionDurationUnit: ExpiryUnitEnum.Hours,
      emailUser: false,
      resetCountInSeconds: 205486,
      tooManyAttempts: 564250,
      userActionId: "6713bacc-e072-4abd-a191-8d279c10c185",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "16fd78be-2621-4272-a28f-a503962867e7",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 133836,
      enabled: false,
      familyRequestEmailTemplateId: "b3a65024-b157-4f9b-b6ef-72a50871d99b",
      maximumChildAge: 375101,
      minimumOwnerAge: 422212,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "1a7def16-8b6c-4cb2-822b-4a9850ed2f4a",
    },
    formConfiguration: {
      adminUserFormId: "1e9c4ae5-5140-4e75-b26e-003c2f029419",
    },
    httpSessionMaxInactiveInterval: 148389,
    id: "518cee41-c999-4f46-9f6f-1cf1a3f023c6",
    insertInstant: 1659380719000,
    issuer: "autem",
    jwtConfiguration: {
      accessTokenKeyId: "9e6a6260-12eb-4a05-b988-c6720c3103f1",
      enabled: false,
      idTokenKeyId: "a40c0f3e-c868-48fd-8ec6-fc03128f0aaa",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 877838,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 27034,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "04eba7bf-8732-4be5-89c5-087131f06f0b",
      scimEnterpriseUserResponseConverterId: "ce55a868-7143-4c97-905f-f797a5da664b",
      scimGroupRequestConverterId: "7e778a74-baaa-4283-abb6-5862d2a31f9b",
      scimGroupResponseConverterId: "14aa6bde-c7f4-4442-b2e9-a5dee1acd72a",
      scimUserRequestConverterId: "89981b58-fe68-42e1-82db-e23d58e8247d",
      scimUserResponseConverterId: "122c9f67-678f-4a27-9583-67363da07909",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "ea",
    maximumPasswordAge: {
      days: 987897,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 645320,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithmEnum.HmacSha512,
        codeLength: 720066,
        enabled: false,
        timeStep: 517567,
      },
      email: {
        enabled: false,
        templateId: "6480730d-8f8b-489d-9ca6-075656fc0ebe",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Enabled,
      sms: {
        enabled: false,
        messengerId: "7155e2d0-6a30-470d-ae29-7f581fabaaa7",
        templateId: "d8010880-76ff-45f6-ad29-814088269b6a",
      },
    },
    name: "Dr. Mary Rempel",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "82f94fff-bd1e-41e2-9ddc-69038b1d187b",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "enim",
      encryptionSchemeFactor: 112932,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchModeEnum.High,
        notifyUserEmailTemplateId: "b5fd30bf-e034-490c-b202-54a959043cb4",
        onLogin: BreachActionEnum.RecordOnly,
      },
      maxLength: 133575,
      minLength: 820286,
      rememberPreviousPasswords: {
        count: 395897,
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
        limit: 738980,
        timePeriodInSeconds: 793978,
      },
      forgotPassword: {
        enabled: false,
        limit: 585987,
        timePeriodInSeconds: 586909,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 94475,
        timePeriodInSeconds: 493610,
      },
      sendPasswordless: {
        enabled: false,
        limit: 982000,
        timePeriodInSeconds: 612307,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 520673,
        timePeriodInSeconds: 884077,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 260179,
        timePeriodInSeconds: 490709,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "aspernatur",
        "facilis",
        "cupiditate",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "79a413d6-a8c9-4168-bbd8-61d0d98ccf89",
      enabled: false,
      schemas: {
        "amet": {
          "ex": "quae",
          "beatae": "praesentium",
          "commodi": "vero",
        },
        "temporibus": {
          "nisi": "minus",
          "eaque": "consequatur",
        },
        "magni": {
          "est": "cumque",
          "harum": "dicta",
          "nesciunt": "dolorum",
          "placeat": "sed",
        },
        "ut": {
          "quas": "ab",
          "quaerat": "sequi",
          "quidem": "corrupti",
          "voluptas": "suscipit",
        },
      },
      serverEntityTypeId: "c575a1e2-6687-430b-a37b-0e8fbc48ddc7",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 885626,
    },
    state: ObjectStateEnum.Inactive,
    themeId: "9b535105-0501-44dc-a105-882484c36e94",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 546439,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 549079,
        separator: "occaecati",
        strategy: UniqueUsernameStrategyEnum.Always,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Preferred,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Discouraged,
      },
      relyingPartyId: "adipisci",
      relyingPartyName: "aliquam",
    },
  },
  webhookIds: [
    "0b8fc0d5-9f57-4b9f-9820-be07808c36c9",
    "e2f70344-e00f-4478-ab53-9483f748eefc",
    "cb69d541-b4b3-493f-b566-625bea32201d",
    "ec379c59-8ea1-4d48-85c2-f9e21d90fd53",
  ],
}, "esse").then((res: CreateTenantResponse) => {
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createTenantWithId("odio", {
  eventInfo: {
    data: {
      "libero": {
        "porro": "dignissimos",
        "ex": "molestiae",
        "ducimus": "voluptatibus",
        "voluptatem": "doloribus",
      },
      "nostrum": {
        "eius": "mollitia",
      },
    },
    deviceDescription: "laboriosam",
    deviceName: "debitis",
    deviceType: "magnam",
    ipAddress: "deleniti",
    location: {
      city: "New Trudiecester",
      country: "Israel",
      displayString: "assumenda",
      latitude: 6378.03,
      longitude: 9226.93,
      region: "recusandae",
      zipcode: "57137",
    },
    os: "quae",
    userAgent: "impedit",
  },
  sourceTenantId: "b618c633-1cab-4dab-b67a-444dd0da0abe",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "58eb3d54-ba1c-4b3a-949b-8e5c18b25e87",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethodEnum.HCaptchaEnterprise,
      enabled: false,
      secretKey: "ea",
      siteKey: "incidunt",
      threshold: 5477.53,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "3255be95-c0cb-4cb2-8a87-908d73809a02",
        data: {
          "quae": {
            "itaque": "unde",
            "sed": "qui",
          },
          "totam": {
            "nemo": "ex",
            "aperiam": "nisi",
            "enim": "similique",
          },
          "exercitationem": {
            "dignissimos": "numquam",
          },
          "facilis": {
            "repellat": "cum",
            "totam": "laborum",
            "hic": "eum",
            "rem": "ut",
          },
        },
        domains: [
          "possimus",
          "odit",
          "harum",
        ],
        migrate: false,
      },
    ],
    data: {
      "iste": {
        "consequatur": "tempora",
        "neque": "eum",
      },
      "adipisci": {
        "sit": "natus",
        "nisi": "aliquam",
        "impedit": "voluptatem",
      },
      "ipsam": {
        "praesentium": "voluptate",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Chris Monahan",
          value: "tenetur",
        },
        {
          name: "Sylvester Kihn",
          value: "temporibus",
        },
      ],
      debug: false,
      defaultFromEmail: "reiciendis",
      defaultFromName: "fugiat",
      emailUpdateEmailTemplateId: "7354e5cb-9497-4701-ba26-204bb26ca4e9",
      emailVerifiedEmailTemplateId: "9982879d-efc0-4b23-9606-cf90ad989e1a",
      forgotPasswordEmailTemplateId: "34715acd-a044-4faa-ad6e-13a620e2e918",
      host: "eligendi",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "75b0486c-f398-4a0b-b746-17dd95ce3044",
      loginIdInUseOnUpdateEmailTemplateId: "be4eb3b3-1cb5-403c-b140-d8772c535e1d",
      loginNewDeviceEmailTemplateId: "d6bf64b4-54e9-4831-a795-f0e57f54ebf2",
      loginSuspiciousEmailTemplateId: "d2b46097-efa4-44a8-9ff4-0cdd1850bf5a",
      password: "ipsa",
      passwordResetSuccessEmailTemplateId: "cbc8b786-0afe-4a6c-a351-32d53086c10a",
      passwordUpdateEmailTemplateId: "856a19d4-665b-4a97-a598-75dc0cecbc78",
      passwordlessEmailTemplateId: "bd248ec6-e8b2-440b-9c06-c9c0649d2bdd",
      port: 621066,
      properties: "necessitatibus",
      security: EmailSecurityTypeEnum.Ssl,
      setPasswordEmailTemplateId: "8ddb1665-c312-4c7f-950d-4721c176292d",
      twoFactorMethodAddEmailTemplateId: "d7878e71-bf8c-4141-841f-e1f87ea103a9",
      twoFactorMethodRemoveEmailTemplateId: "806ea160-6399-4ef1-bb81-758d4ab5bc80",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehaviorEnum.Gated,
      },
      username: "Shaun.Olson",
      verificationEmailTemplateId: "fd9931ec-9d10-46cf-b2c2-6ab840a28ea0",
      verificationStrategy: VerificationStrategyEnum.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "quia": {
          enabled: false,
          transactionType: TransactionTypeEnum.AbsoluteMajority,
        },
        "autem": {
          enabled: false,
          transactionType: TransactionTypeEnum.SuperMajority,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 477409,
      changePasswordIdGenerator: {
        length: 207771,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      changePasswordIdTimeToLiveInSeconds: 196433,
      deviceCodeTimeToLiveInSeconds: 284513,
      deviceUserCodeIdGenerator: {
        length: 804099,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      emailVerificationIdGenerator: {
        length: 290242,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      emailVerificationIdTimeToLiveInSeconds: 278294,
      emailVerificationOneTimeCodeGenerator: {
        length: 764909,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 722112,
      oneTimePasswordTimeToLiveInSeconds: 241225,
      passwordlessLoginGenerator: {
        length: 117748,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      passwordlessLoginTimeToLiveInSeconds: 592655,
      pendingAccountLinkTimeToLiveInSeconds: 684597,
      registrationVerificationIdGenerator: {
        length: 88050,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      registrationVerificationIdTimeToLiveInSeconds: 969125,
      registrationVerificationOneTimeCodeGenerator: {
        length: 185440,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 150467,
      setupPasswordIdGenerator: {
        length: 20261,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      setupPasswordIdTimeToLiveInSeconds: 503615,
      trustTokenTimeToLiveInSeconds: 627421,
      twoFactorIdTimeToLiveInSeconds: 121862,
      twoFactorOneTimeCodeIdGenerator: {
        length: 510606,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 301578,
      twoFactorTrustIdTimeToLiveInSeconds: 731006,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 8955,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 859266,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 685758,
      actionDurationUnit: ExpiryUnitEnum.Years,
      emailUser: false,
      resetCountInSeconds: 830979,
      tooManyAttempts: 309449,
      userActionId: "b5cf0616-ee92-4275-b5bd-60daa0e149cd",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "1ccdd362-bbf9-4239-8015-f26899cf4ffe",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 741149,
      enabled: false,
      familyRequestEmailTemplateId: "9bec5031-8a81-4eb0-9d29-7f7b456a855e",
      maximumChildAge: 344249,
      minimumOwnerAge: 19684,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "88c8a326-341a-4ccc-8a66-3d4a8595c1b3",
    },
    formConfiguration: {
      adminUserFormId: "2bb213e3-b31c-4d6a-9be7-4906b96c636e",
    },
    httpSessionMaxInactiveInterval: 454358,
    id: "4d28a481-49a1-4b84-9198-6405876b3087",
    insertInstant: 1659380719000,
    issuer: "dicta",
    jwtConfiguration: {
      accessTokenKeyId: "13de4061-082d-4095-bc89-cd927a5ba551",
      enabled: false,
      idTokenKeyId: "1bb8370d-9784-4fb1-8647-331bc5be61b3",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 212191,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.Reusable,
      timeToLiveInSeconds: 108159,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "72874c37-7c8d-4439-ac6b-d2cad006d77c",
      scimEnterpriseUserResponseConverterId: "6ebbbc9e-9744-4c5b-a45a-4af2fcabccbc",
      scimGroupRequestConverterId: "a32925eb-06a6-4cab-a22a-11f77a75d8ff",
      scimGroupResponseConverterId: "4452bed7-470f-4c48-8282-b8716c27f6b1",
      scimUserRequestConverterId: "75780304-c40a-4c2b-8ad8-254fde377243",
      scimUserResponseConverterId: "50ed85a7-f8cc-4291-9a6b-7ebdc6009f01",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "temporibus",
    maximumPasswordAge: {
      days: 848389,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 240039,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithmEnum.HmacSha256,
        codeLength: 333131,
        enabled: false,
        timeStep: 149535,
      },
      email: {
        enabled: false,
        templateId: "3cda4ebb-9fd8-43f8-bdf9-b0c46a094e2e",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Enabled,
      sms: {
        enabled: false,
        messengerId: "c2205dfe-765b-4ffb-8b86-015f216aa040",
        templateId: "707fa739-8247-4a87-a17f-ed962df3eee7",
      },
    },
    name: "Travis MacGyver",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "7970e1a1-a8db-4cf6-a19b-9012c444e231",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "quidem",
      encryptionSchemeFactor: 645419,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchModeEnum.Low,
        notifyUserEmailTemplateId: "47727de9-5f72-4ada-bf68-00b01bcbc032",
        onLogin: BreachActionEnum.RequireChange,
      },
      maxLength: 147235,
      minLength: 792902,
      rememberPreviousPasswords: {
        count: 74484,
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
        limit: 604590,
        timePeriodInSeconds: 843086,
      },
      forgotPassword: {
        enabled: false,
        limit: 734952,
        timePeriodInSeconds: 989095,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 468314,
        timePeriodInSeconds: 102755,
      },
      sendPasswordless: {
        enabled: false,
        limit: 92847,
        timePeriodInSeconds: 103669,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 636930,
        timePeriodInSeconds: 565505,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 416228,
        timePeriodInSeconds: 824983,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "quia",
        "quae",
        "ullam",
        "consequuntur",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "3e371365-217a-46e5-96aa-41b9e2053ae8",
      enabled: false,
      schemas: {
        "nesciunt": {
          "ullam": "consectetur",
        },
        "fugit": {
          "expedita": "ad",
          "eveniet": "eaque",
        },
        "dolores": {
          "iste": "ut",
        },
        "iusto": {
          "voluptas": "assumenda",
        },
      },
      serverEntityTypeId: "88138dac-e6dd-42a0-991b-6d1760043c79",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 618082,
    },
    state: ObjectStateEnum.Inactive,
    themeId: "2a18db12-9dc5-424a-bb7b-10caf244de10",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 204281,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 861729,
        separator: "consequatur",
        strategy: UniqueUsernameStrategyEnum.OnCollision,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Required,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Discouraged,
      },
      relyingPartyId: "dolore",
      relyingPartyName: "nulla",
    },
  },
  webhookIds: [
    "70c4e396-e562-4c5c-8b16-373314dad58b",
  ],
}, "praesentium").then((res: CreateTenantWithIdResponse) => {
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
  sourceThemeId: "90542e5a-55a1-40fd-8ac0-f482f9e9a53c",
  theme: {
    data: {
      "quae": {
        "assumenda": "dolorum",
        "officiis": "sunt",
      },
    },
    defaultMessages: "qui",
    id: "2f0bfecc-4193-42d7-84b3-ae70934d9ebb",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "est": "fugit",
      "voluptatum": "hic",
    },
    name: "Miss Nettie Kessler III",
    stylesheet: "nemo",
    templates: {
      accountEdit: "consequuntur",
      accountIndex: "earum",
      accountTwoFactorDisable: "accusamus",
      accountTwoFactorEnable: "suscipit",
      accountTwoFactorIndex: "nemo",
      accountWebAuthnAdd: "amet",
      accountWebAuthnDelete: "vel",
      accountWebAuthnIndex: "voluptatibus",
      emailComplete: "tempore",
      emailSend: "consectetur",
      emailSent: "eaque",
      emailVerificationRequired: "fuga",
      emailVerify: "modi",
      helpers: "vitae",
      index: "aliquam",
      oauth2Authorize: "culpa",
      oauth2AuthorizedNotRegistered: "id",
      oauth2ChildRegistrationNotAllowed: "fugit",
      oauth2ChildRegistrationNotAllowedComplete: "unde",
      oauth2CompleteRegistration: "incidunt",
      oauth2Device: "nulla",
      oauth2DeviceComplete: "iure",
      oauth2Error: "dolore",
      oauth2Logout: "cumque",
      oauth2Passwordless: "quae",
      oauth2Register: "quas",
      oauth2StartIdPLink: "officia",
      oauth2TwoFactor: "eos",
      oauth2TwoFactorEnable: "accusamus",
      oauth2TwoFactorEnableComplete: "eligendi",
      oauth2TwoFactorMethods: "inventore",
      oauth2Wait: "officia",
      oauth2WebAuthn: "laudantium",
      oauth2WebAuthnReauth: "perferendis",
      oauth2WebAuthnReauthEnable: "reprehenderit",
      passwordChange: "quae",
      passwordComplete: "nemo",
      passwordForgot: "et",
      passwordSent: "deserunt",
      registrationComplete: "non",
      registrationSend: "ullam",
      registrationSent: "incidunt",
      registrationVerificationRequired: "soluta",
      registrationVerify: "dolorum",
      samlv2Logout: "quae",
      unauthorized: "mollitia",
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

sdk.sdk.createThemeWithId("commodi", {
  sourceThemeId: "d7ddc399-17b8-444c-8502-a99e62f4946c",
  theme: {
    data: {
      "sed": {
        "reprehenderit": "odit",
        "voluptas": "autem",
        "impedit": "facere",
        "iure": "autem",
      },
      "non": {
        "inventore": "eos",
        "odio": "odit",
        "non": "officia",
      },
      "fuga": {
        "adipisci": "earum",
      },
    },
    defaultMessages: "deleniti",
    id: "3a1e1e7a-b3e0-47c0-9e13-db88f591f983",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "unde": "delectus",
    },
    name: "Douglas Metz",
    stylesheet: "repellat",
    templates: {
      accountEdit: "nihil",
      accountIndex: "quo",
      accountTwoFactorDisable: "officia",
      accountTwoFactorEnable: "quibusdam",
      accountTwoFactorIndex: "alias",
      accountWebAuthnAdd: "nihil",
      accountWebAuthnDelete: "distinctio",
      accountWebAuthnIndex: "voluptas",
      emailComplete: "nostrum",
      emailSend: "tempora",
      emailSent: "corporis",
      emailVerificationRequired: "eaque",
      emailVerify: "accusantium",
      helpers: "aperiam",
      index: "mollitia",
      oauth2Authorize: "minima",
      oauth2AuthorizedNotRegistered: "nobis",
      oauth2ChildRegistrationNotAllowed: "dolor",
      oauth2ChildRegistrationNotAllowedComplete: "vel",
      oauth2CompleteRegistration: "est",
      oauth2Device: "sed",
      oauth2DeviceComplete: "magni",
      oauth2Error: "sunt",
      oauth2Logout: "eveniet",
      oauth2Passwordless: "ratione",
      oauth2Register: "reiciendis",
      oauth2StartIdPLink: "asperiores",
      oauth2TwoFactor: "molestiae",
      oauth2TwoFactorEnable: "in",
      oauth2TwoFactorEnableComplete: "eaque",
      oauth2TwoFactorMethods: "animi",
      oauth2Wait: "dolores",
      oauth2WebAuthn: "facilis",
      oauth2WebAuthnReauth: "modi",
      oauth2WebAuthnReauthEnable: "aspernatur",
      passwordChange: "vero",
      passwordComplete: "nostrum",
      passwordForgot: "officiis",
      passwordSent: "fugiat",
      registrationComplete: "delectus",
      registrationSend: "ea",
      registrationSent: "eius",
      registrationVerificationRequired: "error",
      registrationVerify: "dolores",
      samlv2Logout: "deserunt",
      unauthorized: "rem",
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
import { OAuthErrorReasonEnum, OAuthErrorTypeEnum, TokenTypeEnum, TOTPAlgorithmEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUser({
  applicationId: "75c6a710-e54b-447e-86aa-f9bd8327e8f7",
  currentPassword: "quibusdam",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "quasi": {
        "vitae": "incidunt",
        "nemo": "recusandae",
      },
    },
    deviceDescription: "quidem",
    deviceName: "vero",
    deviceType: "assumenda",
    ipAddress: "praesentium",
    location: {
      city: "East Linwoodshire",
      country: "Cape Verde",
      displayString: "optio",
      latitude: 1121.04,
      longitude: 4360.7,
      region: "nihil",
      zipcode: "85606-2342",
    },
    os: "suscipit",
    userAgent: "itaque",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
    cleanSpeakId: "658e1817-cde0-4aee-8c72-213f425a0338",
    connectorId: "b71b3d2f-d3b6-436c-8730-88e75ab7ff2a",
    data: {
      "magni": {
        "rerum": "eaque",
        "reprehenderit": "ut",
        "quod": "at",
        "aliquam": "incidunt",
      },
    },
    email: "Chanelle.Franey72@hotmail.com",
    encryptionScheme: "sunt",
    expiry: 1659380719000,
    factor: 107772,
    firstName: "Cicero",
    fullName: "blanditiis",
    id: "1ed6835b-93ce-4d68-bbb4-53f44af461c7",
    imageUrl: "placeat",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Quitzon",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "placeat": {
            "provident": "accusamus",
            "unde": "laboriosam",
          },
        },
        groupId: "2de32387-5a4a-42e8-bd87-b51e22e77c0e",
        id: "6e11c883-326d-4c5b-9030-67a899e25c6a",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "c14ff187-497b-4140-8163-1a1660070c0b",
          connectorId: "cde7e50e-a441-4101-8138-b462923d50f7",
          data: {
            "illo": {
              "fugit": "praesentium",
              "quam": "animi",
              "neque": "consectetur",
            },
            "culpa": {
              "voluptas": "eligendi",
              "porro": "ratione",
              "animi": "possimus",
            },
          },
          email: "Kaycee44@hotmail.com",
          encryptionScheme: "sunt",
          expiry: 1659380719000,
          factor: 668199,
          firstName: "Addison",
          fullName: "autem",
          id: "539024bd-09d0-4fc6-8dff-8fe0e0e46f22",
          imageUrl: "exercitationem",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Trantow",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "occaecati",
          mobilePhone: "repellendus",
          parentEmail: "reprehenderit",
          password: "excepturi",
          passwordChangeReason: ChangePasswordReasonEnum.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "d8790e2e-6014-4a33-9970-b2b531bfb30e",
              authenticationToken: "possimus",
              cleanSpeakId: "a3f8e5e3-92f2-42a7-bcb7-af1b63ecde08",
              data: {
                "asperiores": {
                  "deleniti": "consequatur",
                  "impedit": "aperiam",
                  "ad": "voluptas",
                },
              },
              id: "36c53d41-5995-45c5-8717-604597f37719",
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
                "blanditiis",
                "quo",
                "corrupti",
                "numquam",
              ],
              timezone: "America/Denver",
              tokens: {
                "explicabo": "impedit",
                "alias": "fugit",
                "aliquid": "minima",
              },
              username: "Rupert80",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "c8c9f8a0-ac1e-404d-aace-b0cde00e8ecf",
              authenticationToken: "blanditiis",
              cleanSpeakId: "18a9303e-93f0-40a1-8b21-f06d4d17852d",
              data: {
                "praesentium": {
                  "voluptates": "ab",
                  "at": "expedita",
                  "ipsa": "ab",
                },
              },
              id: "d6919f83-1593-4a84-aa7d-b15c4c15fe6c",
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
                "natus",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolorum": "nisi",
                "esse": "veniam",
              },
              username: "Erik_Mayert",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
            {
              applicationId: "beb7982b-af9a-47da-ac29-b938e51a7e6e",
              authenticationToken: "nulla",
              cleanSpeakId: "6f7ff04f-da04-4669-aae8-182403655aa9",
              data: {
                "sequi": {
                  "modi": "occaecati",
                  "occaecati": "vitae",
                  "provident": "necessitatibus",
                  "tempore": "illum",
                },
              },
              id: "1cf77953-8cbb-4fcd-b4ec-e96ac4fb42c3",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "ut",
              ],
              timezone: "America/Denver",
              tokens: {
                "vel": "illo",
                "reprehenderit": "placeat",
                "rerum": "molestiae",
              },
              username: "Bella_Sipes13",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "sit",
          tenantId: "b60c751d-2aeb-4e8b-9828-e26471a5ecb8",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 462378,
                  timeStep: 586570,
                },
                email: "Webster93@gmail.com",
                id: "41446f79-3d3b-4100-a014-7cd1b83160b3",
                lastUsed: false,
                method: "debitis",
                mobilePhone: "dolor",
                secret: "voluptates",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 504633,
                  timeStep: 580319,
                },
                email: "Ahmad66@yahoo.com",
                id: "afc7a867-8ba5-400a-8f4c-b72ed6cf6225",
                lastUsed: false,
                method: "fugiat",
                mobilePhone: "corporis",
                secret: "nostrum",
              },
            ],
            recoveryCodes: [
              "architecto",
              "enim",
            ],
          },
          uniqueUsername: "praesentium",
          username: "Katelynn16",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "2f7b59b7-1546-442b-9e37-c84c3d3ca491",
      },
      {
        data: {
          "dolorem": {
            "natus": "odio",
            "corrupti": "corrupti",
          },
          "praesentium": {
            "illo": "ullam",
            "ea": "earum",
            "sit": "ab",
            "mollitia": "itaque",
          },
          "velit": {
            "facilis": "harum",
            "voluptatum": "temporibus",
          },
        },
        groupId: "0028e3e1-dc90-459f-bef0-f1385b67c246",
        id: "73ac98f6-d268-4f92-a6bb-086152225b05",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
          cleanSpeakId: "28e7a201-ecfb-474f-aff5-de4f2b0a857b",
          connectorId: "cec81ff3-4b51-4900-bb23-4e83c6c36a56",
          data: {
            "adipisci": {
              "quibusdam": "ullam",
              "rerum": "repellat",
              "nihil": "unde",
            },
            "labore": {
              "at": "tempora",
            },
            "autem": {
              "quam": "eaque",
              "ratione": "iste",
              "repellendus": "numquam",
              "quos": "molestias",
            },
          },
          email: "Tyree1@yahoo.com",
          encryptionScheme: "ipsam",
          expiry: 1659380719000,
          factor: 300512,
          firstName: "Gennaro",
          fullName: "perferendis",
          id: "b05f01e7-bd86-4439-a8dd-0d773a07c307",
          imageUrl: "commodi",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Schroeder",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "ea",
          mobilePhone: "dolores",
          parentEmail: "facere",
          password: "necessitatibus",
          passwordChangeReason: ChangePasswordReasonEnum.Expired,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "2f9ea86c-03ac-43f2-bdc8-373c1769864e",
              authenticationToken: "ad",
              cleanSpeakId: "92efebc1-8aaa-43de-bd0c-90035e4c1d06",
              data: {
                "numquam": {
                  "debitis": "non",
                  "ipsam": "nesciunt",
                  "magnam": "sapiente",
                  "magnam": "vitae",
                },
              },
              id: "e42dda71-4e94-4468-9999-4dc953b4266c",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "ipsam",
                "sit",
                "perferendis",
                "asperiores",
              ],
              timezone: "America/Denver",
              tokens: {
                "dignissimos": "modi",
                "explicabo": "porro",
                "molestias": "minus",
                "esse": "inventore",
              },
              username: "Amara.Larson",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
            {
              applicationId: "f7b31a84-fed7-4bce-8fba-2734d3134756",
              authenticationToken: "eveniet",
              cleanSpeakId: "e2a90304-a708-4e21-909b-67335519b00c",
              data: {
                "perferendis": {
                  "reprehenderit": "ratione",
                  "deserunt": "rem",
                  "accusamus": "sed",
                  "autem": "tenetur",
                },
                "autem": {
                  "commodi": "quaerat",
                  "tenetur": "nobis",
                  "provident": "excepturi",
                  "dolore": "dolor",
                },
              },
              id: "62533a8f-8c1e-4639-a61d-ff2353545dbf",
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
                "excepturi",
                "quibusdam",
              ],
              timezone: "America/Denver",
              tokens: {
                "quis": "eius",
                "officiis": "saepe",
                "magnam": "molestias",
              },
              username: "Eve_Jenkins40",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "c1fe03a4-3817-4586-9465-247563f82499",
              authenticationToken: "delectus",
              cleanSpeakId: "41bb9dd5-f9a1-4058-baa8-0e7186e9e808",
              data: {
                "ea": {
                  "eum": "deleniti",
                  "provident": "mollitia",
                },
                "ducimus": {
                  "porro": "optio",
                  "ut": "repudiandae",
                },
                "voluptatem": {
                  "vero": "eligendi",
                  "pariatur": "rem",
                  "quia": "odio",
                  "doloremque": "soluta",
                },
              },
              id: "6c803077-2d93-4721-a4eb-4dd4c7f22ce2",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "laborum",
                "deserunt",
                "est",
              ],
              timezone: "America/Denver",
              tokens: {
                "voluptates": "iure",
              },
              username: "Dannie41",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "ratione",
          tenantId: "ff48c35c-49aa-4ce0-b938-f6dc85a8b6d7",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 493902,
                  timeStep: 156181,
                },
                email: "Queen18@yahoo.com",
                id: "8241d1dd-f05c-4e1d-b992-dbefed111077",
                lastUsed: false,
                method: "animi",
                mobilePhone: "voluptates",
                secret: "necessitatibus",
              },
            ],
            recoveryCodes: [
              "ipsa",
              "repellat",
              "corporis",
            ],
          },
          uniqueUsername: "similique",
          username: "Susanna_Tillman82",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "31a29da5-5964-4ee5-abf7-e69897f051aa",
      },
      {
        data: {
          "impedit": {
            "natus": "itaque",
            "vel": "excepturi",
          },
          "distinctio": {
            "nobis": "eaque",
            "vero": "quia",
          },
        },
        groupId: "683f37aa-8dbe-4156-aafb-86e04210e06b",
        id: "76f9669a-be38-442b-9c33-0450b65ef68c",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.None,
          cleanSpeakId: "0494f8f1-9f06-4dfb-b04c-4ba16858ae37",
          connectorId: "3848982d-1f8e-4934-9c51-0b861677bfdc",
          data: {
            "sequi": {
              "eos": "ipsa",
              "cum": "natus",
              "ad": "exercitationem",
              "minus": "corrupti",
            },
            "voluptatum": {
              "cupiditate": "consectetur",
            },
          },
          email: "Rod.Hegmann85@gmail.com",
          encryptionScheme: "assumenda",
          expiry: 1659380719000,
          factor: 478388,
          firstName: "Freida",
          fullName: "id",
          id: "d7f370de-fb4c-4a1d-a629-d2cfb7a738a8",
          imageUrl: "beatae",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Sanford",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "quidem",
          mobilePhone: "nesciunt",
          parentEmail: "officiis",
          password: "reprehenderit",
          passwordChangeReason: ChangePasswordReasonEnum.Validation,
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
              applicationId: "c30a7d87-db98-4166-8a0f-264f689726a9",
              authenticationToken: "aspernatur",
              cleanSpeakId: "6b6ef375-c380-434f-8e42-de03993e99d3",
              data: {
                "modi": {
                  "dolorum": "reiciendis",
                  "soluta": "laboriosam",
                },
                "provident": {
                  "ut": "quaerat",
                  "qui": "minus",
                  "animi": "ea",
                },
              },
              id: "3d2821b5-b3ea-44d9-bee3-775f5ff8a76f",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "tempora",
                "velit",
                "ullam",
              ],
              timezone: "America/Denver",
              tokens: {
                "harum": "sint",
                "numquam": "quos",
                "non": "ex",
              },
              username: "Cathrine_Corkery",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "vitae",
          tenantId: "f242008d-1e41-4973-a62e-d0d6ba294a30",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 467619,
                  timeStep: 33325,
                },
                email: "Madyson.Altenwerth@gmail.com",
                id: "9f70fe20-8a65-4671-b85c-4ab3d36dde0d",
                lastUsed: false,
                method: "quisquam",
                mobilePhone: "eaque",
                secret: "rem",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 833729,
                  timeStep: 381104,
                },
                email: "Augustus_Hodkiewicz@gmail.com",
                id: "7d67dd78-bfbe-4369-b0c7-81f0b63f1a45",
                lastUsed: false,
                method: "tempore",
                mobilePhone: "expedita",
                secret: "quos",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 397151,
                  timeStep: 659750,
                },
                email: "Billy_Bailey@hotmail.com",
                id: "cb62f690-f09f-4374-993d-c3b805cd1cf0",
                lastUsed: false,
                method: "veniam",
                mobilePhone: "dolorem",
                secret: "voluptate",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 4980,
                  timeStep: 842914,
                },
                email: "Lina_Hackett47@hotmail.com",
                id: "eb25d18c-e5d7-4741-80cd-070aae04ae20",
                lastUsed: false,
                method: "quam",
                mobilePhone: "incidunt",
                secret: "omnis",
              },
            ],
            recoveryCodes: [
              "ipsum",
              "fugiat",
              "omnis",
              "hic",
            ],
          },
          uniqueUsername: "quasi",
          username: "Ella_Lowe98",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "8f4107c2-2068-4496-bea6-ceec84857589",
      },
    ],
    middleName: "voluptatem",
    mobilePhone: "laborum",
    parentEmail: "occaecati",
    password: "reiciendis",
    passwordChangeReason: ChangePasswordReasonEnum.Expired,
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
        applicationId: "940e8d66-8c08-4f10-9441-4875663caef2",
        authenticationToken: "iste",
        cleanSpeakId: "40751462-42e3-439b-83fa-19375d13d74f",
        data: {
          "qui": {
            "corrupti": "pariatur",
            "dolore": "magnam",
            "sunt": "perferendis",
            "illum": "illo",
          },
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
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      {
        applicationId: "61d2ba41-61d4-4c13-9d9f-7e76c8ad6bbb",
        authenticationToken: "voluptatibus",
        cleanSpeakId: "409e034d-3e6d-4bc4-b20d-3e97c374f6fc",
        data: {
          "molestias": {
            "occaecati": "inventore",
            "maiores": "voluptatum",
            "inventore": "reprehenderit",
          },
          "molestiae": {
            "iusto": "illum",
            "quos": "aliquid",
          },
          "magni": {
            "magni": "delectus",
          },
          "commodi": {
            "omnis": "facere",
            "aliquam": "hic",
            "ducimus": "dolorem",
            "doloribus": "in",
          },
        },
        id: "007a7cbb-43c1-46c1-aaa0-ebd029eddb59",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "maxime",
          "quis",
        ],
        timezone: "America/Denver",
        tokens: {
          "ipsam": "praesentium",
          "voluptas": "voluptatem",
        },
        username: "Justice83",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      {
        applicationId: "ba95cf1d-9945-4c5c-9457-3f90bd4a88c7",
        authenticationToken: "officia",
        cleanSpeakId: "0bc33ac4-73b4-4056-bb3f-53e42a3305ba",
        data: {
          "eos": {
            "nihil": "accusantium",
            "quidem": "sapiente",
          },
          "nisi": {
            "odit": "possimus",
            "saepe": "vero",
            "illo": "quo",
            "rerum": "odit",
          },
          "dignissimos": {
            "fugiat": "itaque",
            "voluptatem": "quidem",
            "ex": "dolore",
            "quas": "alias",
          },
        },
        id: "77d9bfd2-41a6-42cf-9fa3-e7c6147e0c2c",
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
          "dolores",
          "natus",
          "quas",
          "illo",
        ],
        timezone: "America/Denver",
        tokens: {
          "qui": "quia",
          "tempora": "voluptates",
          "qui": "ipsa",
        },
        username: "Alycia.VonRueden",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      {
        applicationId: "e655c46b-b6d8-4876-8650-d0eb06d21d9a",
        authenticationToken: "doloribus",
        cleanSpeakId: "7f5b5a53-eb6c-4072-85d2-6dffa5774033",
        data: {
          "amet": {
            "laboriosam": "voluptas",
            "assumenda": "cum",
            "aliquid": "facilis",
          },
          "cum": {
            "voluptatum": "error",
            "id": "in",
          },
          "sequi": {
            "doloremque": "nobis",
          },
        },
        id: "3d14ba92-c263-449d-9927-2ed5066462c9",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "laborum",
          "mollitia",
          "assumenda",
          "id",
        ],
        timezone: "America/Denver",
        tokens: {
          "nulla": "magni",
          "rerum": "atque",
          "voluptas": "commodi",
          "maxime": "saepe",
        },
        username: "Bradford_Kertzmann50",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
    ],
    salt: "corrupti",
    tenantId: "2e0ab164-fb61-4449-8dbb-0b50681a7f89",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 873519,
            timeStep: 598488,
          },
          email: "Oceane15@hotmail.com",
          id: "ba730923-9137-4eac-9f80-6d4e2f39e706",
          lastUsed: false,
          method: "fugit",
          mobilePhone: "molestiae",
          secret: "totam",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 682641,
            timeStep: 796929,
          },
          email: "Arjun27@yahoo.com",
          id: "ba7b3f7b-d633-4e88-b613-04356ca70d8d",
          lastUsed: false,
          method: "labore",
          mobilePhone: "doloribus",
          secret: "veniam",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 433230,
            timeStep: 35057,
          },
          email: "Dessie8@yahoo.com",
          id: "1237b62f-bc39-4f8d-86ad-968ecac33024",
          lastUsed: false,
          method: "id",
          mobilePhone: "quisquam",
          secret: "veniam",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 454779,
            timeStep: 676945,
          },
          email: "Viola_Kassulke91@gmail.com",
          id: "b9d3a697-f371-4ce3-a1d2-e5d73e795aa6",
          lastUsed: false,
          method: "esse",
          mobilePhone: "est",
          secret: "porro",
        },
      ],
      recoveryCodes: [
        "et",
        "omnis",
      ],
    },
    uniqueUsername: "quasi",
    username: "Kailey51",
    usernameStatus: ContentStatusEnum.Active,
    verified: false,
  },
}, "temporibus").then((res: CreateUserResponse) => {
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserAction({
  userAction: {
    active: false,
    cancelEmailTemplateId: "1b991c71-e59c-4f64-ba7e-55f8cd95906f",
    endEmailTemplateId: "46816b65-f2b1-4ebb-bc63-cca565056009",
    id: "ff629ef4-9122-4f73-a235-763f28acac36",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "illo": "earum",
    },
    modifyEmailTemplateId: "1afad656-d9e0-4eae-82ec-c07cb9bb6889",
    name: "Mrs. Edward Prosacco",
    options: [
      {
        localizedNames: {
          "exercitationem": "maxime",
          "minus": "facilis",
        },
        name: "Mr. Felicia Zieme III",
      },
      {
        localizedNames: {
          "ab": "recusandae",
          "sequi": "amet",
        },
        name: "Wilma Steuber IV",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "00ebfe79-39ad-43d5-ad61-dcb7d82d77b1",
    temporal: false,
    transactionType: TransactionTypeEnum.SuperMajority,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "officia").then((res: CreateUserActionResponse) => {
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
    code: "illo",
    id: "eb1a05b4-3006-454d-aab5-2272cf3ddee9",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "sapiente": "dicta",
    },
    text: "dignissimos",
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

sdk.sdk.createUserActionReasonWithId("deserunt", {
  userActionReason: {
    code: "doloremque",
    id: "83e0cb85-101f-4784-bf3a-74b54123051a",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "dolores": "amet",
      "dolorum": "sint",
    },
    text: "dicta",
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserActionWithId("consectetur", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "e1a7902b-b73d-4cfc-afac-45984a74ec75",
    endEmailTemplateId: "82b0da94-8d7c-4b17-8df7-dcd943bc56d3",
    id: "14aba848-afe8-4902-b485-34fa3fc83c1f",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "voluptas": "distinctio",
      "aperiam": "est",
      "eligendi": "at",
      "tempore": "alias",
    },
    modifyEmailTemplateId: "4c48b427-d7de-4963-bf03-e497d897002d",
    name: "Daniel Sipes",
    options: [
      {
        localizedNames: {
          "earum": "inventore",
          "enim": "sapiente",
        },
        name: "Rita Becker",
      },
      {
        localizedNames: {
          "quia": "exercitationem",
        },
        name: "Sonia Fay",
      },
      {
        localizedNames: {
          "dolorem": "adipisci",
        },
        name: "Frederick Langosh",
      },
      {
        localizedNames: {
          "officia": "soluta",
          "fugiat": "dolorum",
          "accusantium": "odit",
          "quas": "debitis",
        },
        name: "Sally Schamberger",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "0924d345-419b-4bef-8ca9-91e3a7659520",
    temporal: false,
    transactionType: TransactionTypeEnum.None,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "tempore").then((res: CreateUserActionWithIdResponse) => {
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserConsent({
  userConsent: {
    consent: {
      consentEmailTemplateId: "367d4e16-89b6-418b-b0bb-7f8741b4a2d8",
      countryMinimumAgeForSelfConsent: {
        "eos": "eveniet",
        "repellat": "nobis",
        "autem": "reiciendis",
        "laboriosam": "ab",
      },
      data: {
        "recusandae": {
          "veritatis": "sunt",
          "corrupti": "eius",
          "quisquam": "magnam",
        },
      },
      defaultMinimumAgeForSelfConsent: 287838,
      emailPlus: {
        emailTemplateId: "18da1a7e-4b32-430a-9c96-e52bd49db430",
        enabled: false,
        maximumTimeToSendEmailInHours: 631979,
        minimumTimeToSendEmailInHours: 470343,
      },
      id: "94a7644f-0f29-44e3-95c0-c95bb716363b",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Jeffery Douglas",
      values: [
        "tempora",
      ],
    },
    consentId: "9f4f6d97-e7b5-4a78-a24e-2cecb7246055",
    data: {
      "modi": {
        "saepe": "reprehenderit",
        "nemo": "corporis",
        "possimus": "qui",
      },
    },
    giverUserId: "07f44854-8486-4095-9144-52a0fc3a3bdd",
    id: "cd5b0068-8cc9-4a5a-acec-6731ed1900dc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatusEnum.Revoked,
    userId: "63548dae-e906-44a0-bdeb-44fc0aaa8c22",
    values: [
      "unde",
      "alias",
      "totam",
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserConsentWithId("quia", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "56b16e70-3eb6-4067-a8e4-5275f10bb960",
      countryMinimumAgeForSelfConsent: {
        "a": "a",
        "impedit": "necessitatibus",
        "voluptatibus": "quasi",
        "officia": "voluptatum",
      },
      data: {
        "vitae": {
          "accusantium": "quaerat",
          "autem": "eligendi",
          "consequatur": "sunt",
          "commodi": "praesentium",
        },
        "qui": {
          "quod": "rem",
          "fugiat": "tenetur",
          "consectetur": "suscipit",
          "modi": "rem",
        },
        "aut": {
          "nemo": "sapiente",
          "repellendus": "facilis",
          "possimus": "perspiciatis",
        },
        "corporis": {
          "voluptatem": "dolor",
        },
      },
      defaultMinimumAgeForSelfConsent: 347838,
      emailPlus: {
        emailTemplateId: "1d82fbd3-7e85-40ed-86b0-def74a085cef",
        enabled: false,
        maximumTimeToSendEmailInHours: 958355,
        minimumTimeToSendEmailInHours: 620966,
      },
      id: "d109c0a5-a174-42e3-bcca-695fd560f937",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Phillip Goldner",
      values: [
        "dicta",
        "amet",
      ],
    },
    consentId: "045d2f71-3e05-4b55-92bf-c7395f71223b",
    data: {
      "molestias": {
        "commodi": "deserunt",
        "vitae": "tempore",
      },
      "cupiditate": {
        "reprehenderit": "commodi",
        "laborum": "dicta",
        "magnam": "earum",
        "ex": "nostrum",
      },
    },
    giverUserId: "40368ed3-0f7a-4cea-bf80-12459048fa66",
    id: "767e29d4-e543-4c4d-a5ae-4e8bdc470843",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatusEnum.Revoked,
    userId: "e081a2fb-ffe9-431a-b8c4-264cab51b2c0",
    values: [
      "ipsa",
      "quos",
      "porro",
      "voluptas",
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
      "natus": {
        "qui": "sit",
      },
      "neque": {
        "possimus": "magnam",
        "facere": "in",
        "ea": "odit",
        "nihil": "vitae",
      },
      "eum": {
        "voluptate": "eius",
        "amet": "deleniti",
      },
    },
    deviceDescription: "ipsum",
    deviceName: "in",
    deviceType: "repellendus",
    ipAddress: "ab",
    location: {
      city: "O'Haraworth",
      country: "United Arab Emirates",
      displayString: "consequuntur",
      latitude: 7056.2,
      longitude: 9234.46,
      region: "quisquam",
      zipcode: "25769-8251",
    },
    os: "deserunt",
    userAgent: "distinctio",
  },
  identityProviderLink: {
    data: {
      "quod": {
        "suscipit": "inventore",
        "optio": "distinctio",
        "magni": "voluptatibus",
      },
      "quam": {
        "perspiciatis": "doloremque",
        "quasi": "libero",
      },
      "occaecati": {
        "velit": "repudiandae",
        "hic": "qui",
      },
      "est": {
        "explicabo": "sit",
        "facilis": "iure",
      },
    },
    displayName: "placeat",
    identityProviderId: "3190b144-241b-447d-8673-b4158358492c",
    identityProviderUserId: "dolore",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    tenantId: "b53c23e5-dd0e-4047-9dfe-238ce69a15d2",
    token: "iure",
    userId: "b34a02ff-631f-4c8d-b48a-d116a3f37f70",
  },
  pendingIdPLinkId: "voluptatem",
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
      "est": {
        "delectus": "veniam",
        "magni": "velit",
        "alias": "minus",
      },
      "ut": {
        "esse": "mollitia",
      },
      "sequi": {
        "impedit": "temporibus",
        "non": "vel",
        "sed": "fuga",
        "at": "provident",
      },
    },
    deviceDescription: "eius",
    deviceName: "mollitia",
    deviceType: "a",
    ipAddress: "quaerat",
    location: {
      city: "New Benjamin",
      country: "Barbados",
      displayString: "atque",
      latitude: 2319.87,
      longitude: 4759.2,
      region: "aliquid",
      zipcode: "14171",
    },
    os: "possimus",
    userAgent: "quos",
  },
  oneTimeCode: "vitae",
  userId: "759af099-3347-43cc-b791-1d2669ffa9c8",
  verificationId: "asperiores",
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.createUserWithId("eveniet", {
  applicationId: "1e77baca-8452-449e-88d2-ccb4e5f074ab",
  currentPassword: "voluptatibus",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "fugiat": {
        "animi": "cum",
        "iure": "reiciendis",
        "soluta": "aspernatur",
        "ipsa": "voluptatem",
      },
      "sit": {
        "eligendi": "dignissimos",
        "explicabo": "incidunt",
        "placeat": "voluptate",
      },
      "nisi": {
        "a": "laborum",
        "quae": "aliquam",
      },
      "blanditiis": {
        "tempora": "impedit",
      },
    },
    deviceDescription: "architecto",
    deviceName: "consequatur",
    deviceType: "atque",
    ipAddress: "sunt",
    location: {
      city: "South Cornellstead",
      country: "Kazakhstan",
      displayString: "cupiditate",
      latitude: 3461.68,
      longitude: 7029.89,
      region: "pariatur",
      zipcode: "24389",
    },
    os: "neque",
    userAgent: "dolores",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
    cleanSpeakId: "956c15ce-ff63-495d-ac38-94945d8149a7",
    connectorId: "b76ce21f-454d-422c-84a3-caf7ad83b9ca",
    data: {
      "modi": {
        "dolores": "ipsum",
      },
      "totam": {
        "iste": "optio",
      },
    },
    email: "Fay.Marquardt13@yahoo.com",
    encryptionScheme: "neque",
    expiry: 1659380719000,
    factor: 672217,
    firstName: "Marietta",
    fullName: "doloremque",
    id: "89d0cb8c-6685-4e38-9878-cf9e262744d0",
    imageUrl: "ad",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Wilkinson",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "similique": {
            "facilis": "vero",
            "ut": "labore",
            "aperiam": "temporibus",
          },
        },
        groupId: "75ab51f5-a9f8-4ce8-b27a-32a63777c3e0",
        id: "38a751d8-51df-45b7-90df-1ee3a91e6f95",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
          cleanSpeakId: "bb5ada9d-a09f-496b-8172-f9e4d83a46dd",
          connectorId: "a23fddef-a0f3-48dd-94cf-85c1829adcb0",
          data: {
            "nihil": {
              "porro": "et",
            },
            "rem": {
              "autem": "veniam",
            },
          },
          email: "Rory33@gmail.com",
          encryptionScheme: "minima",
          expiry: 1659380719000,
          factor: 284949,
          firstName: "Seamus",
          fullName: "nemo",
          id: "9103a86f-b6d6-4b44-82db-adf2ffda03c3",
          imageUrl: "natus",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Mueller",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "consequuntur",
          mobilePhone: "voluptatibus",
          parentEmail: "quod",
          password: "dolor",
          passwordChangeReason: ChangePasswordReasonEnum.Expired,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "8653d08c-06ea-484a-b809-bfc70b3de109",
              authenticationToken: "architecto",
              cleanSpeakId: "70fee422-187d-40f7-ab1e-bf2e4e75469d",
              data: {
                "nihil": {
                  "sed": "fugit",
                  "voluptate": "doloremque",
                  "ipsam": "officia",
                  "veritatis": "dignissimos",
                },
                "exercitationem": {
                  "sapiente": "enim",
                  "recusandae": "quod",
                  "reiciendis": "adipisci",
                },
              },
              id: "9d133b2b-38ee-43e6-a150-4f9cd6528f06",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "nemo",
                "illo",
                "nobis",
              ],
              timezone: "America/Denver",
              tokens: {
                "ipsum": "eius",
                "ipsam": "odit",
              },
              username: "Buster19",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "0bf1ffb2-d827-412d-b5a5-fb1ca9e1d5e0",
              authenticationToken: "perferendis",
              cleanSpeakId: "11bd4d2f-ffd1-4a65-924d-deadf4b1a8ec",
              data: {
                "maiores": {
                  "voluptates": "neque",
                  "voluptatem": "ipsum",
                  "sit": "iure",
                  "similique": "ex",
                },
              },
              id: "2a900db3-65cd-4bc7-b881-3a2a6dc053aa",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "magnam",
                "commodi",
                "voluptate",
              ],
              timezone: "America/Denver",
              tokens: {
                "quisquam": "repellendus",
              },
              username: "Berta.Greenfelder60",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "accusamus",
          tenantId: "81377fe3-3881-4fc7-9e20-9840849e4667",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 480828,
                  timeStep: 739469,
                },
                email: "Granville.Harris@gmail.com",
                id: "12bc86f9-dd56-455a-9778-1f81f90a4369",
                lastUsed: false,
                method: "perspiciatis",
                mobilePhone: "quo",
                secret: "facilis",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 595899,
                  timeStep: 977011,
                },
                email: "Breanna_Herman@hotmail.com",
                id: "bb7d8f72-0e54-41cc-87d6-ccfa66f22773",
                lastUsed: false,
                method: "beatae",
                mobilePhone: "autem",
                secret: "quibusdam",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 975289,
                  timeStep: 275887,
                },
                email: "Hortense25@gmail.com",
                id: "e818a8f3-e70b-4461-a687-a27cf5b6b414",
                lastUsed: false,
                method: "rerum",
                mobilePhone: "autem",
                secret: "ipsa",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 915952,
                  timeStep: 515170,
                },
                email: "Melvin83@yahoo.com",
                id: "1c27182f-07d3-4c50-95aa-820281624aea",
                lastUsed: false,
                method: "placeat",
                mobilePhone: "modi",
                secret: "quaerat",
              },
            ],
            recoveryCodes: [
              "aperiam",
              "commodi",
            ],
          },
          uniqueUsername: "repellendus",
          username: "Javon_Prosacco67",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "5cca7b9a-a657-48b1-bddf-7e10ddfd728b",
      },
      {
        data: {
          "eaque": {
            "placeat": "numquam",
            "quod": "explicabo",
            "reiciendis": "sequi",
            "eum": "aliquam",
          },
          "ducimus": {
            "eum": "cum",
            "praesentium": "provident",
            "facere": "nam",
            "at": "maxime",
          },
          "aut": {
            "est": "ab",
            "error": "illum",
            "iste": "reprehenderit",
          },
          "nobis": {
            "tempore": "adipisci",
            "beatae": "cum",
            "expedita": "illum",
          },
        },
        groupId: "d00d5a3a-09d5-487b-9341-b25de4290537",
        id: "fd8ba50e-a5ac-42c3-9b84-7491bdea90e0",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
          cleanSpeakId: "5844da9b-1a10-4a36-bf32-fda2342b0049",
          connectorId: "524dba9a-17a8-44fb-b792-d2b814f61cc8",
          data: {
            "vero": {
              "harum": "doloremque",
              "sed": "cum",
              "architecto": "neque",
            },
            "deserunt": {
              "deleniti": "corporis",
            },
            "tempore": {
              "quos": "tempore",
              "doloribus": "a",
              "maiores": "aliquam",
              "tempora": "necessitatibus",
            },
            "minus": {
              "cumque": "aliquam",
              "temporibus": "sapiente",
              "autem": "et",
            },
          },
          email: "Lisette71@hotmail.com",
          encryptionScheme: "natus",
          expiry: 1659380719000,
          factor: 602378,
          firstName: "Mozell",
          fullName: "nemo",
          id: "e31a1e36-01a4-4d61-a3ae-1c1e222a250a",
          imageUrl: "tempora",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Cormier",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "sequi",
          mobilePhone: "asperiores",
          parentEmail: "neque",
          password: "ea",
          passwordChangeReason: ChangePasswordReasonEnum.Expired,
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
              applicationId: "3af9000d-5ded-49d0-8dc2-6611fea0de22",
              authenticationToken: "non",
              cleanSpeakId: "36382724-d060-45a3-ae89-2563ee8381ea",
              data: {
                "incidunt": {
                  "eos": "esse",
                  "omnis": "labore",
                  "esse": "nemo",
                },
                "quia": {
                  "sint": "ullam",
                  "est": "natus",
                },
                "quidem": {
                  "non": "eius",
                  "totam": "nisi",
                },
                "quis": {
                  "recusandae": "necessitatibus",
                  "iusto": "voluptatem",
                },
              },
              id: "9a8df6e2-f33c-4757-bbfb-860857ac07fa",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "suscipit",
                "dolorum",
                "rem",
                "nemo",
              ],
              timezone: "America/Denver",
              tokens: {
                "iusto": "distinctio",
                "quam": "minus",
                "sapiente": "ullam",
                "iure": "eius",
              },
              username: "Tatum_Pfannerstill74",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
            {
              applicationId: "3b63aa4b-277d-498a-a9d4-a576c3534712",
              authenticationToken: "dolor",
              cleanSpeakId: "178e0763-b4fc-47b4-ba02-3edcd221ee3f",
              data: {
                "non": {
                  "dolores": "eaque",
                  "harum": "nulla",
                  "asperiores": "porro",
                },
              },
              id: "405f5871-4f8e-4df6-a48e-e833e56841f0",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "quibusdam",
                "soluta",
                "veniam",
              ],
              timezone: "America/Denver",
              tokens: {
                "beatae": "pariatur",
                "accusantium": "provident",
              },
              username: "Maximilian93",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "quisquam",
          tenantId: "64c170a6-903b-4e71-b777-08dae092b704",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 84000,
                  timeStep: 585245,
                },
                email: "Liliana84@gmail.com",
                id: "c7f113e7-df63-46c9-aba3-34ca89e71b32",
                lastUsed: false,
                method: "cumque",
                mobilePhone: "recusandae",
                secret: "quis",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 69476,
                  timeStep: 218800,
                },
                email: "Roy11@hotmail.com",
                id: "c8d6222a-86ea-4968-9f9c-caa75766c200",
                lastUsed: false,
                method: "dolores",
                mobilePhone: "molestiae",
                secret: "similique",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 743422,
                  timeStep: 590598,
                },
                email: "Claude_Russel90@hotmail.com",
                id: "ed63c643-e7ff-4b75-bf10-262868b3d68b",
                lastUsed: false,
                method: "fugiat",
                mobilePhone: "quo",
                secret: "a",
              },
            ],
            recoveryCodes: [
              "alias",
              "perferendis",
              "magni",
            ],
          },
          uniqueUsername: "laborum",
          username: "Chester_Flatley89",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "19f32a5e-e501-45f7-81da-f1df8ef0703e",
      },
      {
        data: {
          "veritatis": {
            "consequuntur": "ipsa",
            "culpa": "cum",
            "dolorem": "veniam",
            "quis": "nulla",
          },
          "cum": {
            "velit": "occaecati",
          },
          "dicta": {
            "quod": "accusamus",
          },
          "accusantium": {
            "tempora": "deserunt",
          },
        },
        groupId: "534ce21c-081b-4180-849c-309d474e7739",
        id: "9e412ee7-67f9-46d0-b3bd-159d86840cc1",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "e66e5e30-9dfc-45f3-b3f1-c3fa2b96cf32",
          connectorId: "5b269333-c2af-4b69-9061-c4cc0aa2f8d0",
          data: {
            "vel": {
              "impedit": "in",
              "odit": "cupiditate",
              "quos": "molestias",
            },
            "optio": {
              "quidem": "ad",
              "eos": "eum",
              "hic": "occaecati",
            },
          },
          email: "Addie78@hotmail.com",
          encryptionScheme: "odio",
          expiry: 1659380719000,
          factor: 257744,
          firstName: "Chesley",
          fullName: "saepe",
          id: "bd1abad1-a5ee-4b43-8d73-2dd9c8295624",
          imageUrl: "laboriosam",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Koelpin",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "odit",
          mobilePhone: "eius",
          parentEmail: "natus",
          password: "cumque",
          passwordChangeReason: ChangePasswordReasonEnum.Expired,
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
              applicationId: "9a5eb840-eec1-46bb-b01c-fb0601769022",
              authenticationToken: "nam",
              cleanSpeakId: "4f0791ed-6fbd-419e-9d6d-7f1f5eefd49b",
              data: {
                "repellendus": {
                  "a": "earum",
                  "dolorem": "tenetur",
                },
                "illum": {
                  "ipsam": "eaque",
                  "omnis": "officiis",
                  "exercitationem": "eveniet",
                },
                "quod": {
                  "sit": "nihil",
                  "ex": "dolore",
                  "corporis": "veritatis",
                  "deserunt": "accusamus",
                },
                "ratione": {
                  "id": "quod",
                  "aliquam": "cumque",
                  "aut": "facere",
                },
              },
              id: "f1c5fdfb-7c4c-4e10-9318-d356393e1d7c",
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
                "mollitia",
                "quo",
                "asperiores",
              ],
              timezone: "America/Denver",
              tokens: {
                "impedit": "temporibus",
              },
              username: "Monserrat.Hackett",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "661dd551-28e9-411c-8c8d-940f377813bd",
              authenticationToken: "ipsum",
              cleanSpeakId: "55f0149d-58ab-4f33-bf91-3f3b10cb13eb",
              data: {
                "quis": {
                  "sapiente": "reiciendis",
                },
                "unde": {
                  "libero": "officiis",
                  "sequi": "illo",
                },
                "est": {
                  "officia": "reprehenderit",
                },
                "voluptates": {
                  "beatae": "tempora",
                },
              },
              id: "798291d6-416a-42c9-bd17-91326335aed5",
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
                "impedit",
              ],
              timezone: "America/Denver",
              tokens: {
                "corrupti": "nobis",
                "quas": "ratione",
              },
              username: "Columbus59",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "dbe64ae5-c556-4dd0-b2f7-4171477b625d",
              authenticationToken: "magnam",
              cleanSpeakId: "a0ecf744-93b2-4cfe-9045-47f7a52fc06c",
              data: {
                "incidunt": {
                  "suscipit": "odit",
                  "odit": "sunt",
                  "culpa": "eligendi",
                },
                "numquam": {
                  "tempora": "expedita",
                },
                "occaecati": {
                  "dolore": "voluptatibus",
                },
              },
              id: "f8f6bc26-8a00-46e1-86bd-f06b1a0f7496",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "odio",
                "magni",
              ],
              timezone: "America/Denver",
              tokens: {
                "natus": "consequuntur",
              },
              username: "Sadye.Turner71",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "laudantium",
          tenantId: "5bfd123b-4f56-41f2-bd47-429edbf4ce5b",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 890220,
                  timeStep: 78840,
                },
                email: "Lilian33@hotmail.com",
                id: "2947b5a7-5c1d-4189-a7d5-71e7d42d5b46",
                lastUsed: false,
                method: "a",
                mobilePhone: "repudiandae",
                secret: "molestias",
              },
            ],
            recoveryCodes: [
              "maiores",
              "assumenda",
              "nemo",
            ],
          },
          uniqueUsername: "provident",
          username: "Shayna.Welch93",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "50411c9b-198e-4560-8f1d-bc4d967332bb",
      },
      {
        data: {
          "porro": {
            "sunt": "nobis",
            "sapiente": "veritatis",
            "unde": "incidunt",
          },
        },
        groupId: "be37b90c-9dc1-4085-b2bb-fa06a6a66fa4",
        id: "6cfc77da-ebb9-4a4b-8224-97d622654b40",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "a357e14e-f9de-432e-84e7-56d2e8b05f96",
          connectorId: "9d948489-2ca5-45b9-941b-194b8b4b4d8f",
          data: {
            "nihil": {
              "tempora": "excepturi",
              "blanditiis": "dicta",
              "veritatis": "voluptatibus",
              "quis": "labore",
            },
          },
          email: "Darius.Medhurst74@gmail.com",
          encryptionScheme: "dolorum",
          expiry: 1659380719000,
          factor: 493295,
          firstName: "Jenifer",
          fullName: "vero",
          id: "e7100b74-456e-4f9e-858b-95c6f0b20c5f",
          imageUrl: "impedit",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Russel",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "voluptates",
          mobilePhone: "accusamus",
          parentEmail: "quaerat",
          password: "laborum",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "600f1383-3424-4f7a-a004-427fd4f9284e",
              authenticationToken: "doloremque",
              cleanSpeakId: "025b2dc1-6bd6-486f-b755-1b22aab09bcc",
              data: {
                "aspernatur": {
                  "accusamus": "alias",
                  "et": "sit",
                  "soluta": "veniam",
                },
                "voluptates": {
                  "deserunt": "commodi",
                  "excepturi": "totam",
                },
                "nam": {
                  "dolor": "accusamus",
                },
              },
              id: "47d71193-ec17-4241-91dc-da6326794b85",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "quos",
                "nisi",
              ],
              timezone: "America/Denver",
              tokens: {
                "consequuntur": "non",
                "doloremque": "iure",
                "natus": "atque",
              },
              username: "Jaiden44",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "minima",
          tenantId: "1c6593e3-7638-4783-bebe-602b27ada9b5",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 425965,
                  timeStep: 880159,
                },
                email: "Lauretta23@gmail.com",
                id: "1087b796-01e7-4691-8bf7-561835e38efc",
                lastUsed: false,
                method: "maiores",
                mobilePhone: "veniam",
                secret: "blanditiis",
              },
            ],
            recoveryCodes: [
              "culpa",
              "eligendi",
            ],
          },
          uniqueUsername: "ullam",
          username: "Olin50",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "97a19955-3e2c-4c22-8745-44f310b7b33b",
      },
    ],
    middleName: "accusamus",
    mobilePhone: "repellat",
    parentEmail: "et",
    password: "similique",
    passwordChangeReason: ChangePasswordReasonEnum.Expired,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "cb09665a-fab9-4b36-8dd5-d055f5fbbe38",
        authenticationToken: "consectetur",
        cleanSpeakId: "2701ce86-85a7-45ee-a143-8c6d0089cbc2",
        data: {
          "ex": {
            "officia": "illo",
          },
          "illo": {
            "quas": "consequatur",
          },
          "reprehenderit": {
            "voluptas": "neque",
            "tempora": "iure",
            "eligendi": "et",
            "deserunt": "deleniti",
          },
        },
        id: "96c41f34-7a8f-48b8-a6c0-ad6539faab09",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "doloremque",
          "vero",
          "nulla",
        ],
        timezone: "America/Denver",
        tokens: {
          "dolor": "eligendi",
          "atque": "nobis",
          "nesciunt": "debitis",
          "officia": "molestias",
        },
        username: "Macie_Sipes52",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
    ],
    salt: "repellendus",
    tenantId: "fc088d81-329f-4324-afa8-616c817ba41d",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 566873,
            timeStep: 494636,
          },
          email: "Antonio.Flatley93@yahoo.com",
          id: "3b8d6247-090f-4d98-bee3-a2e01919d3d6",
          lastUsed: false,
          method: "explicabo",
          mobilePhone: "dicta",
          secret: "molestias",
        },
      ],
      recoveryCodes: [
        "ad",
      ],
    },
    uniqueUsername: "similique",
    username: "Eleanore30",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
}, "unde").then((res: CreateUserWithIdResponse) => {
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
    connectTimeout: 838907,
    data: {
      "vero": {
        "provident": "aliquam",
      },
    },
    description: "commodi",
    eventsEnabled: {
      "fugit": false,
      "vero": false,
      "sed": false,
      "repudiandae": false,
    },
    global: false,
    headers: {
      "sequi": "debitis",
      "est": "sapiente",
      "dignissimos": "atque",
      "eius": "doloribus",
    },
    httpAuthenticationPassword: "deserunt",
    httpAuthenticationUsername: "quidem",
    id: "9b2ecceb-411c-453d-a7fc-b99f284cd6f7",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 289277,
    sslCertificate: "tempora",
    tenantIds: [
      "4883aa02-030c-4829-b8d7-78042e4d6809",
      "f9e3425e-f63e-4bb4-b82e-e2c80de08cbd",
    ],
    url: "assumenda",
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

sdk.sdk.createWebhookWithId("quas", {
  webhook: {
    connectTimeout: 230328,
    data: {
      "nostrum": {
        "maxime": "omnis",
        "ipsam": "atque",
        "animi": "molestiae",
        "possimus": "porro",
      },
      "quo": {
        "omnis": "ab",
        "recusandae": "error",
        "magnam": "accusantium",
      },
    },
    description: "eum",
    eventsEnabled: {
      "impedit": false,
      "aspernatur": false,
    },
    global: false,
    headers: {
      "eos": "id",
      "ducimus": "sunt",
      "qui": "occaecati",
      "cupiditate": "delectus",
    },
    httpAuthenticationPassword: "beatae",
    httpAuthenticationUsername: "modi",
    id: "f1909970-6eae-41e6-a705-8d171e0d1b82",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 566874,
    sslCertificate: "accusantium",
    tenantIds: [
      "4c84b778-d05e-4370-9b38-cb57a38bd387",
      "dd5d56b4-b01e-44c2-a365-1fc59791b5d4",
      "05119a61-2bd3-4fb2-bdf3-6fdff90b9b4a",
      "3a84f90b-ffc4-4ec0-b4f1-66b2319ac8ce",
    ],
    url: "rerum",
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

sdk.sdk.deleteAPIKeyWithId("quia").then((res: DeleteAPIKeyWithIdResponse) => {
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

sdk.sdk.deleteApplicationRoleWithId("enim", "exercitationem", "iure").then((res: DeleteApplicationRoleWithIdResponse) => {
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

sdk.sdk.deleteApplicationWithId("cupiditate", "explicabo", "inventore").then((res: DeleteApplicationWithIdResponse) => {
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

sdk.sdk.deleteConnectorWithId("quos").then((res: DeleteConnectorWithIdResponse) => {
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

sdk.sdk.deleteConsentWithId("debitis", "commodi").then((res: DeleteConsentWithIdResponse) => {
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

sdk.sdk.deleteEmailTemplateWithId("delectus", "voluptatem").then((res: DeleteEmailTemplateWithIdResponse) => {
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

sdk.sdk.deleteEntityGrantWithId("deleniti", "dolorem", "assumenda", "sunt").then((res: DeleteEntityGrantWithIdResponse) => {
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

sdk.sdk.deleteEntityTypePermissionWithId("dignissimos", "veritatis").then((res: DeleteEntityTypePermissionWithIdResponse) => {
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

sdk.sdk.deleteEntityTypeWithId("quasi").then((res: DeleteEntityTypeWithIdResponse) => {
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

sdk.sdk.deleteEntityWithId("accusantium", "ex").then((res: DeleteEntityWithIdResponse) => {
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

sdk.sdk.deleteFormFieldWithId("atque").then((res: DeleteFormFieldWithIdResponse) => {
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

sdk.sdk.deleteFormWithId("rem").then((res: DeleteFormWithIdResponse) => {
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
    "bc2073b1-a414-4520-b263-0668dd4c6704",
    "12ee0789-0bfb-42d1-be64-c65c08d7ab7c",
    "f3aa2f5e-87c1-4d79-b145-15ee22148067",
    "e25f46be-13e9-4dbe-8cab-f1b692dab42f",
  ],
  members: [
    "e24214cb-79e5-4fca-9f4f-df505180e5f5",
    "18fffb56-0851-4cc1-a351-90ed49fe319a",
    "998d6704-7877-42aa-b65c-9d5483eb5ee6",
    "c2b4c582-37f2-44b4-a8b6-513755de6e09",
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

sdk.sdk.deleteGroupWithId("cupiditate", "expedita").then((res: DeleteGroupWithIdResponse) => {
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

sdk.sdk.deleteIPAccessControlListWithId("illum").then((res: DeleteIPAccessControlListWithIdResponse) => {
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

sdk.sdk.deleteIdentityProviderWithId("provident").then((res: DeleteIdentityProviderWithIdResponse) => {
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
  applicationId: "c35c24f5-9d45-4600-81b0-03f1f36a39c6",
  eventInfo: {
    data: {
      "earum": {
        "voluptates": "ipsum",
        "rem": "tenetur",
        "impedit": "perspiciatis",
        "architecto": "quos",
      },
      "quam": {
        "id": "tempora",
        "necessitatibus": "ipsam",
        "doloremque": "accusamus",
      },
      "sed": {
        "vero": "pariatur",
        "asperiores": "labore",
        "laboriosam": "illo",
      },
    },
    deviceDescription: "repellendus",
    deviceName: "aspernatur",
    deviceType: "earum",
    ipAddress: "eius",
    location: {
      city: "Lexington-Fayette",
      country: "Liechtenstein",
      displayString: "ratione",
      latitude: 8874.56,
      longitude: 6785.85,
      region: "in",
      zipcode: "67076-5574",
    },
    os: "officiis",
    userAgent: "repellat",
  },
  token: "officia",
  userId: "ef78eaa7-e84c-4af7-828c-64e028d32fce",
}, "debitis", "rerum", "soluta").then((res: DeleteJwtResponse) => {
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

sdk.sdk.deleteKeyWithId("omnis").then((res: DeleteKeyWithIdResponse) => {
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

sdk.sdk.deleteLambdaWithId("tenetur").then((res: DeleteLambdaWithIdResponse) => {
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

sdk.sdk.deleteMessageTemplateWithId("non").then((res: DeleteMessageTemplateWithIdResponse) => {
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

sdk.sdk.deleteMessengerWithId("unde").then((res: DeleteMessengerWithIdResponse) => {
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

sdk.sdk.deleteTenantWithId("dolor", {
  async: false,
  eventInfo: {
    data: {
      "minima": {
        "eos": "nobis",
        "impedit": "temporibus",
        "inventore": "voluptatum",
        "mollitia": "quibusdam",
      },
      "debitis": {
        "quod": "repudiandae",
      },
    },
    deviceDescription: "odio",
    deviceName: "amet",
    deviceType: "cumque",
    ipAddress: "porro",
    location: {
      city: "Abilene",
      country: "Costa Rica",
      displayString: "itaque",
      latitude: 4403.65,
      longitude: 9516.1,
      region: "praesentium",
      zipcode: "65913-0166",
    },
    os: "deleniti",
    userAgent: "cupiditate",
  },
}, "nihil", "iusto").then((res: DeleteTenantWithIdResponse) => {
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

sdk.sdk.deleteThemeWithId("architecto").then((res: DeleteThemeWithIdResponse) => {
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

sdk.sdk.deleteUserActionReasonWithId("deleniti").then((res: DeleteUserActionReasonWithIdResponse) => {
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

sdk.sdk.deleteUserActionWithId("vero", "atque", "libero").then((res: DeleteUserActionWithIdResponse) => {
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
      "vero": {
        "nisi": "officia",
        "natus": "rem",
      },
      "iusto": {
        "maiores": "esse",
      },
      "laboriosam": {
        "facere": "quis",
        "provident": "numquam",
        "enim": "quia",
        "ea": "fuga",
      },
      "ullam": {
        "cumque": "laudantium",
        "est": "exercitationem",
        "dicta": "perspiciatis",
        "impedit": "eos",
      },
    },
    deviceDescription: "esse",
    deviceName: "deserunt",
    deviceType: "minima",
    ipAddress: "aliquid",
    location: {
      city: "East Breana",
      country: "Niue",
      displayString: "quaerat",
      latitude: 3405.8,
      longitude: 1732.41,
      region: "illo",
      zipcode: "95395",
    },
    os: "cumque",
    userAgent: "asperiores",
  },
  hardDelete: false,
  query: "voluptatum",
  queryString: "inventore",
  userIds: [
    "9206b832-ee3a-4461-8124-db0b678e29a7",
    "ff1101b2-c766-45a5-bdc0-1c429d488d52",
  ],
}, "nostrum", "fugit", "voluptates").then((res: DeleteUserBulkResponse) => {
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

sdk.sdk.deleteUserLinkWithId("ipsum", "eos", "totam").then((res: DeleteUserLinkWithIdResponse) => {
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

sdk.sdk.deleteUserRegistrationWithId("ratione", "reprehenderit", {
  eventInfo: {
    data: {
      "eius": {
        "incidunt": "quia",
      },
    },
    deviceDescription: "cumque",
    deviceName: "quo",
    deviceType: "inventore",
    ipAddress: "amet",
    location: {
      city: "Taylorsville",
      country: "Hungary",
      displayString: "fuga",
      latitude: 7530.03,
      longitude: 996.81,
      region: "quia",
      zipcode: "74270-5745",
    },
    os: "aut",
    userAgent: "laborum",
  },
}, "accusantium").then((res: DeleteUserRegistrationWithIdResponse) => {
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

sdk.sdk.deleteUserTwoFactorWithId("perspiciatis", {
  applicationId: "c305502e-77c2-4009-815b-4d837399065d",
  code: "voluptatibus",
  eventInfo: {
    data: {
      "neque": {
        "minima": "est",
      },
    },
    deviceDescription: "vitae",
    deviceName: "sequi",
    deviceType: "blanditiis",
    ipAddress: "aspernatur",
    location: {
      city: "Mattview",
      country: "Switzerland",
      displayString: "autem",
      latitude: 7732.96,
      longitude: 7020.95,
      region: "sed",
      zipcode: "52240",
    },
    os: "tenetur",
    userAgent: "tempora",
  },
  methodId: "nihil",
}, "reprehenderit", "odit").then((res: DeleteUserTwoFactorWithIdResponse) => {
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

sdk.sdk.deleteUserWithId("neque", {
  eventInfo: {
    data: {
      "quisquam": {
        "quo": "quis",
        "velit": "sit",
        "eligendi": "maxime",
        "quis": "minima",
      },
      "officia": {
        "quas": "porro",
        "quos": "molestiae",
        "sequi": "dolore",
      },
      "consequuntur": {
        "odio": "recusandae",
        "debitis": "distinctio",
        "aperiam": "aut",
        "molestias": "doloremque",
      },
      "accusantium": {
        "sed": "quo",
        "dolores": "odit",
        "blanditiis": "saepe",
      },
    },
    deviceDescription: "sapiente",
    deviceName: "voluptates",
    deviceType: "occaecati",
    ipAddress: "minus",
    location: {
      city: "Oro Valley",
      country: "Cook Islands",
      displayString: "nemo",
      latitude: 2328.07,
      longitude: 926.45,
      region: "eum",
      zipcode: "32917-9954",
    },
    os: "a",
    userAgent: "voluptatem",
  },
  hardDelete: false,
}, "assumenda", "eaque").then((res: DeleteUserWithIdResponse) => {
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

sdk.sdk.deleteWebAuthnCredentialWithId("labore").then((res: DeleteWebAuthnCredentialWithIdResponse) => {
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

sdk.sdk.deleteWebhookWithId("non").then((res: DeleteWebhookWithIdResponse) => {
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

sdk.sdk.enableTwoFactorWithId("est", {
  applicationId: "591688b8-8142-4c8c-85cb-6c13d21d28cc",
  authenticatorId: "itaque",
  code: "laboriosam",
  email: "Terry.Beier@gmail.com",
  eventInfo: {
    data: {
      "autem": {
        "delectus": "deleniti",
      },
      "in": {
        "expedita": "aspernatur",
      },
      "exercitationem": {
        "qui": "dolor",
        "harum": "minus",
        "voluptate": "voluptatum",
      },
      "excepturi": {
        "maxime": "aliquam",
        "ullam": "molestias",
        "dignissimos": "cupiditate",
        "praesentium": "adipisci",
      },
    },
    deviceDescription: "ab",
    deviceName: "libero",
    deviceType: "harum",
    ipAddress: "quidem",
    location: {
      city: "Ressiestead",
      country: "Marshall Islands",
      displayString: "officiis",
      latitude: 4732.56,
      longitude: 2622.32,
      region: "enim",
      zipcode: "45552-9537",
    },
    os: "ab",
    userAgent: "iure",
  },
  method: "nostrum",
  mobilePhone: "dolor",
  secret: "consequatur",
  secretBase32Encoded: "reprehenderit",
  twoFactorId: "possimus",
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
      "doloribus": {
        "placeat": "facilis",
        "minus": "nesciunt",
        "deserunt": "fugit",
      },
      "sint": {
        "excepturi": "facilis",
      },
      "ex": {
        "dolores": "doloribus",
        "mollitia": "vero",
        "sit": "pariatur",
        "consectetur": "cumque",
      },
      "alias": {
        "ducimus": "quae",
        "ullam": "rerum",
        "vel": "soluta",
        "sint": "iusto",
      },
    },
    deviceDescription: "illo",
    deviceName: "delectus",
    deviceType: "eius",
    ipAddress: "fuga",
    location: {
      city: "South Shemar",
      country: "Malaysia",
      displayString: "cum",
      latitude: 8792.32,
      longitude: 1858.93,
      region: "blanditiis",
      zipcode: "64885-7932",
    },
    os: "unde",
    userAgent: "nisi",
  },
  refreshToken: "unde",
  token: "sunt",
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
  applicationId: "e419db62-2147-4271-b467-0baf2351d6eb",
  changePasswordId: "dicta",
  email: "Declan.Douglas29@hotmail.com",
  eventInfo: {
    data: {
      "illo": {
        "accusamus": "minima",
        "nisi": "quas",
      },
    },
    deviceDescription: "quae",
    deviceName: "rerum",
    deviceType: "magni",
    ipAddress: "in",
    location: {
      city: "Abbottmouth",
      country: "Rwanda",
      displayString: "harum",
      latitude: 2014.93,
      longitude: 6296.47,
      region: "mollitia",
      zipcode: "82450-2902",
    },
    os: "atque",
    userAgent: "libero",
  },
  loginId: "dolorem",
  sendForgotPasswordEmail: false,
  state: {
    "doloribus": {
      "itaque": "mollitia",
      "sed": "dolore",
      "veniam": "aspernatur",
      "aperiam": "consequuntur",
    },
    "nihil": {
      "veritatis": "architecto",
      "delectus": "fugit",
      "omnis": "provident",
      "ad": "explicabo",
    },
  },
  username: "Garnet.Becker66",
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateKey({
  key: {
    algorithm: KeyAlgorithmEnum.Es512,
    certificate: "ad",
    certificateInformation: {
      issuer: "ex",
      md5Fingerprint: "officiis",
      serialNumber: "quidem",
      sha1Fingerprint: "temporibus",
      sha1Thumbprint: "eligendi",
      sha256Fingerprint: "inventore",
      sha256Thumbprint: "similique",
      subject: "aperiam",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "8d157011-dd4d-46b0-964a-d72d66ef7d5c",
    insertInstant: 1659380719000,
    issuer: "laudantium",
    kid: "sed",
    lastUpdateInstant: 1659380719000,
    length: 818698,
    name: "Marlene Heller",
    privateKey: "nisi",
    publicKey: "illo",
    secret: "deleniti",
    type: KeyTypeEnum.Ec,
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.generateKeyWithId("maxime", {
  key: {
    algorithm: KeyAlgorithmEnum.Hs256,
    certificate: "corrupti",
    certificateInformation: {
      issuer: "accusantium",
      md5Fingerprint: "ducimus",
      serialNumber: "dolores",
      sha1Fingerprint: "nihil",
      sha1Thumbprint: "repudiandae",
      sha256Fingerprint: "quo",
      sha256Thumbprint: "ducimus",
      subject: "amet",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "16e42179-daf1-42eb-9149-0c8559f5f475",
    insertInstant: 1659380719000,
    issuer: "fuga",
    kid: "mollitia",
    lastUpdateInstant: 1659380719000,
    length: 579898,
    name: "Juan Veum",
    privateKey: "dolores",
    publicKey: "occaecati",
    secret: "ad",
    type: KeyTypeEnum.Rsa,
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

sdk.sdk.generateTwoFactorRecoveryCodesWithId("modi").then((res: GenerateTwoFactorRecoveryCodesWithIdResponse) => {
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.identityProviderLoginWithId({
  applicationId: "83ac6df7-0c21-42c2-99b0-21e26c2dcac6",
  data: {
    "soluta": "tempora",
    "illum": "veritatis",
    "ipsam": "quis",
  },
  encodedJWT: "laborum",
  identityProviderId: "9bb6e097-16ae-401c-b7ba-ed34a834cb06",
  ipAddress: "autem",
  metaData: {
    data: {
      "magnam": {
        "impedit": "explicabo",
        "repudiandae": "odit",
        "sit": "iusto",
        "temporibus": "optio",
      },
      "quia": {
        "id": "at",
      },
    },
    device: {
      description: "animi",
      lastAccessedAddress: "doloremque",
      lastAccessedInstant: 1659380719000,
      name: "Arthur Pouros",
      type: DeviceTypeEnum.Other,
    },
    scopes: [
      "labore",
      "iure",
    ],
  },
  newDevice: false,
  noJWT: false,
  noLink: false,
}, "earum").then((res: IdentityProviderLoginWithIdResponse) => {
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importKey({
  key: {
    algorithm: KeyAlgorithmEnum.Hs512,
    certificate: "occaecati",
    certificateInformation: {
      issuer: "ducimus",
      md5Fingerprint: "accusantium",
      serialNumber: "iure",
      sha1Fingerprint: "cum",
      sha1Thumbprint: "debitis",
      sha256Fingerprint: "qui",
      sha256Thumbprint: "maxime",
      subject: "nobis",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "8850bdd8-4ce7-46d5-9982-be5cd13efe5a",
    insertInstant: 1659380719000,
    issuer: "rerum",
    kid: "earum",
    lastUpdateInstant: 1659380719000,
    length: 201069,
    name: "Peter Pollich",
    privateKey: "repellat",
    publicKey: "dolore",
    secret: "voluptatibus",
    type: KeyTypeEnum.Ec,
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importKeyWithId("voluptatem", {
  key: {
    algorithm: KeyAlgorithmEnum.Es256,
    certificate: "iusto",
    certificateInformation: {
      issuer: "cumque",
      md5Fingerprint: "animi",
      serialNumber: "officiis",
      sha1Fingerprint: "sunt",
      sha1Thumbprint: "quidem",
      sha256Fingerprint: "ipsam",
      sha256Thumbprint: "pariatur",
      subject: "tempora",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "d874b664-40fd-46dd-b9b5-c61df3470194",
    insertInstant: 1659380719000,
    issuer: "eaque",
    kid: "aspernatur",
    lastUpdateInstant: 1659380719000,
    length: 191070,
    name: "Johanna Rau",
    privateKey: "porro",
    publicKey: "esse",
    secret: "aut",
    type: KeyTypeEnum.Rsa,
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
import { DeviceTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importRefreshTokensWithId({
  refreshTokens: [
    {
      applicationId: "962c13f6-40c5-482a-a0ea-fd5c58b0b784",
      data: {
        "molestias": {
          "occaecati": "amet",
        },
        "aliquid": {
          "eligendi": "accusantium",
          "exercitationem": "nihil",
        },
        "amet": {
          "similique": "voluptate",
          "quasi": "modi",
          "quaerat": "distinctio",
        },
      },
      id: "601c1585-beea-4e66-a921-d174da31457f",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "non": {
            "optio": "minus",
            "ipsa": "tempore",
          },
          "expedita": {
            "autem": "quia",
            "animi": "nesciunt",
          },
          "perferendis": {
            "cumque": "asperiores",
            "consequuntur": "ipsa",
          },
          "non": {
            "distinctio": "nulla",
            "omnis": "aliquam",
          },
        },
        device: {
          description: "numquam",
          lastAccessedAddress: "velit",
          lastAccessedInstant: 1659380719000,
          name: "Elbert Bednar",
          type: DeviceTypeEnum.Browser,
        },
        scopes: [
          "aspernatur",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "0f98f0e5-aa32-4c0e-9a5c-fcdab7e8cecf",
      token: "in",
      userId: "d2588d1e-31d4-40c9-a960-b2391850e8c0",
    },
    {
      applicationId: "c4f3e16a-3603-4a4a-ae87-418d65e23728",
      data: {
        "similique": {
          "adipisci": "alias",
        },
        "voluptatum": {
          "maxime": "necessitatibus",
          "numquam": "eos",
        },
        "consequuntur": {
          "optio": "a",
          "ut": "nulla",
          "harum": "quo",
          "atque": "labore",
        },
        "perferendis": {
          "ullam": "quia",
          "consectetur": "laudantium",
        },
      },
      id: "dd079d27-85c2-430b-9adb-56d0b07e08b5",
      insertInstant: 1659380719000,
      metaData: {
        data: {
          "distinctio": {
            "doloremque": "voluptatibus",
            "deserunt": "nobis",
          },
          "voluptas": {
            "officiis": "quis",
            "numquam": "iste",
          },
          "corporis": {
            "corporis": "atque",
          },
        },
        device: {
          description: "alias",
          lastAccessedAddress: "quas",
          lastAccessedInstant: 1659380719000,
          name: "Madeline Kuhic",
          type: DeviceTypeEnum.Server,
        },
        scopes: [
          "saepe",
          "animi",
          "perferendis",
          "ullam",
        ],
      },
      startInstant: 1659380719000,
      tenantId: "970ad420-7b1d-4a88-807c-1807be9c4d83",
      token: "dolorum",
      userId: "7b585b46-4799-48b0-b425-c1486b3213c7",
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importUsersWithId({
  encryptionScheme: "veniam",
  eventInfo: {
    data: {
      "soluta": {
        "nam": "magnam",
        "dignissimos": "eligendi",
        "molestiae": "totam",
        "optio": "unde",
      },
    },
    deviceDescription: "commodi",
    deviceName: "facilis",
    deviceType: "quidem",
    ipAddress: "eos",
    location: {
      city: "Justynhaven",
      country: "Egypt",
      displayString: "eveniet",
      latitude: 1091.23,
      longitude: 7525.18,
      region: "illum",
      zipcode: "38767",
    },
    os: "temporibus",
    userAgent: "perspiciatis",
  },
  factor: 465253,
  users: [
    {
      active: false,
      birthDate: "2007-12-03",
      breachedPasswordLastCheckedInstant: 1659380719000,
      breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
      cleanSpeakId: "8e690a93-83b2-4397-8bdd-986954679762",
      connectorId: "a1325d57-f1ef-4622-9584-3d2fed104e8a",
      data: {
        "nihil": {
          "repudiandae": "accusantium",
          "error": "error",
        },
        "atque": {
          "maxime": "ipsa",
          "pariatur": "quos",
          "debitis": "minima",
        },
        "voluptate": {
          "labore": "ullam",
          "quidem": "molestias",
          "sequi": "totam",
          "dignissimos": "hic",
        },
      },
      email: "Laura.King@yahoo.com",
      encryptionScheme: "vel",
      expiry: 1659380719000,
      factor: 577659,
      firstName: "Brice",
      fullName: "repellat",
      id: "70b58696-cb00-482b-9f3d-fc55f7eabfaf",
      imageUrl: "itaque",
      insertInstant: 1659380719000,
      lastLoginInstant: 1659380719000,
      lastName: "Schiller",
      lastUpdateInstant: 1659380719000,
      memberships: [
        {
          data: {
            "fuga": {
              "odio": "temporibus",
              "quas": "laudantium",
              "ullam": "voluptatum",
              "dolorem": "ad",
            },
            "incidunt": {
              "alias": "minus",
              "cum": "nesciunt",
            },
            "dolorem": {
              "beatae": "id",
              "ullam": "pariatur",
            },
          },
          groupId: "5ab33553-8770-497b-9a9b-d0daebf408e0",
          id: "80ca6a1b-8789-4621-9080-21501beed33e",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
            cleanSpeakId: "8811dc79-f80d-4513-8025-2788ec45c06a",
            connectorId: "6e19d384-552d-48d2-9328-bdade97594d9",
            data: {
              "error": {
                "itaque": "velit",
                "itaque": "illo",
                "minima": "in",
              },
              "consequuntur": {
                "reiciendis": "tempore",
              },
            },
            email: "Della_Batz2@hotmail.com",
            encryptionScheme: "dolores",
            expiry: 1659380719000,
            factor: 387290,
            firstName: "Heloise",
            fullName: "ea",
            id: "9f568b20-7886-413a-b4e6-e0ac58c4c0e4",
            imageUrl: "saepe",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Senger",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "est",
            mobilePhone: "atque",
            parentEmail: "iusto",
            password: "occaecati",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            registrations: [
              {
                applicationId: "f4bbc870-d7d1-416d-ad3d-e6b9c8ac1fd0",
                authenticationToken: "odio",
                cleanSpeakId: "c26a629d-33da-40c1-ad8b-3be61b74ac22",
                data: {
                  "recusandae": {
                    "nulla": "quis",
                    "alias": "numquam",
                    "laboriosam": "impedit",
                    "tempora": "ipsum",
                  },
                  "quo": {
                    "eos": "saepe",
                    "incidunt": "voluptatibus",
                  },
                },
                id: "1c4032e9-c9f8-4493-995a-ee7983a74691",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "a",
                  "molestias",
                ],
                timezone: "America/Denver",
                tokens: {
                  "iusto": "expedita",
                  "quia": "non",
                  "ipsum": "quaerat",
                  "hic": "vel",
                },
                username: "Clare.Harber",
                usernameStatus: ContentStatusEnum.Rejected,
                verified: false,
              },
            ],
            salt: "nihil",
            tenantId: "c8b0baf1-e172-4223-ae2f-3f2410492e9b",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 94376,
                    timeStep: 264047,
                  },
                  email: "Adelle_Beatty@gmail.com",
                  id: "ba34c96b-e4ce-41f8-a249-b9e4b9a29d4c",
                  lastUsed: false,
                  method: "tempora",
                  mobilePhone: "est",
                  secret: "nihil",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 916408,
                    timeStep: 660207,
                  },
                  email: "Garret.Jacobson@gmail.com",
                  id: "68b90b2f-689d-409c-93e1-2bf2d120d828",
                  lastUsed: false,
                  method: "illum",
                  mobilePhone: "totam",
                  secret: "consequuntur",
                },
              ],
              recoveryCodes: [
                "unde",
                "facilis",
                "quod",
              ],
            },
            uniqueUsername: "ea",
            username: "Jerad44",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "edc4c347-040c-4adf-8ba5-81075a072c23",
        },
        {
          data: {
            "officiis": {
              "fuga": "corrupti",
              "voluptatibus": "earum",
              "aliquam": "nobis",
              "porro": "quaerat",
            },
            "veniam": {
              "rem": "temporibus",
              "labore": "laudantium",
              "architecto": "sequi",
              "sunt": "ab",
            },
            "nemo": {
              "aut": "qui",
              "earum": "necessitatibus",
              "rem": "atque",
            },
            "suscipit": {
              "hic": "quae",
            },
          },
          groupId: "b9469486-6d0a-4d18-b1f3-f5359390c0a9",
          id: "68bbc933-f80c-4c05-95a9-1e5e259adbdb",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.None,
            cleanSpeakId: "2bda63a3-4941-4b42-a11b-fdb59d8cafcb",
            connectorId: "27831bbd-9da7-4f37-a5a6-2ea95fef2975",
            data: {
              "saepe": {
                "in": "iure",
              },
              "distinctio": {
                "nihil": "facere",
                "et": "cupiditate",
              },
              "eveniet": {
                "illo": "ullam",
                "praesentium": "facilis",
              },
              "similique": {
                "sapiente": "minus",
              },
            },
            email: "Oliver.Greenholt@gmail.com",
            encryptionScheme: "laudantium",
            expiry: 1659380719000,
            factor: 856407,
            firstName: "Zackery",
            fullName: "aut",
            id: "2c29be22-cdbc-43c5-b27f-6ba312a15468",
            imageUrl: "ipsum",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Bahringer",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
              {},
              {},
            ],
            middleName: "quos",
            mobilePhone: "beatae",
            parentEmail: "molestias",
            password: "consequatur",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
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
                applicationId: "6798ff70-a9df-4f1c-9185-03b0fd81a25e",
                authenticationToken: "suscipit",
                cleanSpeakId: "77d5e510-48c0-43d6-8fb6-0676be28ed7e",
                data: {
                  "nemo": {
                    "corporis": "ex",
                  },
                  "et": {
                    "ea": "atque",
                  },
                  "delectus": {
                    "veniam": "iusto",
                    "ad": "excepturi",
                  },
                  "iure": {
                    "officiis": "rerum",
                    "totam": "esse",
                  },
                },
                id: "79034f94-4606-41d5-baef-6eac70211b58",
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
                  "molestias",
                  "ut",
                  "eos",
                  "ducimus",
                ],
                timezone: "America/Denver",
                tokens: {
                  "tempora": "laboriosam",
                  "tempora": "omnis",
                  "expedita": "occaecati",
                },
                username: "Colton13",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "doloribus",
            tenantId: "e6d1d185-084c-4222-af8c-25b32ea9fe6b",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 980835,
                    timeStep: 267679,
                  },
                  email: "Else_Murray@yahoo.com",
                  id: "2b271838-57bb-4976-bb43-d52847bc03cd",
                  lastUsed: false,
                  method: "cupiditate",
                  mobilePhone: "facere",
                  secret: "numquam",
                },
              ],
              recoveryCodes: [
                "suscipit",
                "vero",
              ],
            },
            uniqueUsername: "cupiditate",
            username: "Lorna_Kling",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "f84a0637-1358-4a4d-9918-98fa43e80b67",
        },
        {
          data: {
            "error": {
              "hic": "magni",
              "sit": "animi",
            },
            "molestias": {
              "iusto": "similique",
              "delectus": "et",
              "ad": "nobis",
              "voluptatibus": "consequatur",
            },
            "asperiores": {
              "est": "illum",
              "id": "eum",
              "fuga": "ipsum",
            },
            "necessitatibus": {
              "debitis": "quia",
              "facilis": "aliquid",
              "saepe": "esse",
              "nam": "voluptatem",
            },
          },
          groupId: "b8f94670-91e6-486f-ad59-ba910b7da549",
          id: "b7ec4090-07aa-4816-beaf-8588a188ae63",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
            cleanSpeakId: "056f3e47-eddb-45ee-ad1f-58d86f8efff5",
            connectorId: "778c2ac0-4eb8-416f-811f-779b44c4f9ac",
            data: {
              "itaque": {
                "repellat": "totam",
                "blanditiis": "explicabo",
                "quam": "quibusdam",
                "nobis": "hic",
              },
              "quo": {
                "ipsum": "neque",
              },
              "nihil": {
                "optio": "magnam",
                "sint": "illum",
                "alias": "esse",
              },
            },
            email: "Darrick35@hotmail.com",
            encryptionScheme: "architecto",
            expiry: 1659380719000,
            factor: 739312,
            firstName: "Flo",
            fullName: "commodi",
            id: "e9522bf0-aa68-4b0e-9228-9b6f632702f9",
            imageUrl: "non",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Larkin",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
              {},
            ],
            middleName: "dolorum",
            mobilePhone: "ipsum",
            parentEmail: "totam",
            password: "eos",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            registrations: [
              {
                applicationId: "12e3a54d-97b0-47f7-a2e8-8c9faa6a5608",
                authenticationToken: "sapiente",
                cleanSpeakId: "bf075845-f311-42f6-8289-abe6bd6c090a",
                data: {
                  "cum": {
                    "similique": "minus",
                    "maxime": "in",
                    "provident": "quis",
                    "expedita": "ratione",
                  },
                  "ea": {
                    "hic": "vel",
                    "consectetur": "fuga",
                    "quos": "assumenda",
                  },
                  "facilis": {
                    "in": "non",
                  },
                  "perspiciatis": {
                    "explicabo": "amet",
                  },
                },
                id: "e3d07092-57e4-44d6-8450-84c8e1ecd8a7",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "eius",
                ],
                timezone: "America/Denver",
                tokens: {
                  "nulla": "minus",
                  "excepturi": "ratione",
                },
                username: "Elisabeth.Zulauf87",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "66fb8de4-7a53-42e5-98cc-c1caecca0b6c",
                authenticationToken: "non",
                cleanSpeakId: "e61b992c-3803-40e0-b621-9d1e5435e687",
                data: {
                  "delectus": {
                    "numquam": "esse",
                    "aspernatur": "vel",
                  },
                  "sit": {
                    "doloremque": "voluptatibus",
                  },
                  "temporibus": {
                    "quaerat": "exercitationem",
                    "odio": "illum",
                  },
                },
                id: "776020ab-8022-4cac-8331-cdf844e34085",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "hic",
                  "magni",
                ],
                timezone: "America/Denver",
                tokens: {
                  "reprehenderit": "illo",
                  "sint": "est",
                  "ipsa": "laudantium",
                },
                username: "Lonie_Glover32",
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
            ],
            salt: "adipisci",
            tenantId: "a1c5da91-ccca-4f6b-a76a-7f2442060ebd",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 734340,
                    timeStep: 450039,
                  },
                  email: "Broderick71@gmail.com",
                  id: "31ebb8a2-c6d0-413b-a0e2-c803ca4d6c95",
                  lastUsed: false,
                  method: "in",
                  mobilePhone: "non",
                  secret: "doloremque",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 923989,
                    timeStep: 101141,
                  },
                  email: "Rebeka.Feeney13@gmail.com",
                  id: "f17b32cb-96c3-4385-b758-f46b006c983e",
                  lastUsed: false,
                  method: "corrupti",
                  mobilePhone: "eum",
                  secret: "aliquid",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 396653,
                    timeStep: 647368,
                  },
                  email: "Archibald32@yahoo.com",
                  id: "f0a3a459-8f66-47c3-8790-cb1b0c1188b4",
                  lastUsed: false,
                  method: "qui",
                  mobilePhone: "magni",
                  secret: "quas",
                },
              ],
              recoveryCodes: [
                "aliquam",
                "laboriosam",
              ],
            },
            uniqueUsername: "aliquid",
            username: "Emilia_Cole",
            usernameStatus: ContentStatusEnum.Active,
            verified: false,
          },
          userId: "9fd920dd-3332-4a80-83d1-1e335357b527",
        },
        {
          data: {
            "aut": {
              "corrupti": "dolorum",
            },
            "distinctio": {
              "magni": "cum",
              "pariatur": "optio",
              "voluptatum": "minima",
              "assumenda": "perspiciatis",
            },
            "voluptate": {
              "dolorem": "id",
            },
            "ea": {
              "laboriosam": "natus",
              "mollitia": "assumenda",
              "et": "dignissimos",
            },
          },
          groupId: "1fc8c440-0c42-48cb-9d7a-7b1232a0d735",
          id: "10223209-4342-4aec-a725-26195064685d",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.None,
            cleanSpeakId: "13fa437e-16c2-4c7e-899e-ad16be6407fd",
            connectorId: "e985ee70-fd13-4afe-8d2b-4229489325be",
            data: {
              "eligendi": {
                "occaecati": "aliquid",
                "voluptatem": "atque",
                "et": "magni",
              },
              "quos": {
                "suscipit": "nam",
                "cupiditate": "dolor",
                "error": "consectetur",
                "rem": "amet",
              },
            },
            email: "Camila.Hahn@gmail.com",
            encryptionScheme: "ratione",
            expiry: 1659380719000,
            factor: 726216,
            firstName: "Imani",
            fullName: "ad",
            id: "2c9715dd-5218-479e-a8a9-4ba06d502131",
            imageUrl: "molestias",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Williamson",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
            ],
            middleName: "voluptatum",
            mobilePhone: "provident",
            parentEmail: "alias",
            password: "molestiae",
            passwordChangeReason: ChangePasswordReasonEnum.Validation,
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
                applicationId: "7f36c5fa-6548-461b-84ec-0a8624d489f6",
                authenticationToken: "totam",
                cleanSpeakId: "d4f2c017-49f2-4c54-a554-9b838f43c3f3",
                data: {
                  "nulla": {
                    "rem": "voluptatibus",
                  },
                  "alias": {
                    "sunt": "veritatis",
                    "doloremque": "reiciendis",
                    "corrupti": "natus",
                  },
                  "quis": {
                    "quod": "dolor",
                  },
                  "magnam": {
                    "consequatur": "hic",
                    "sapiente": "eaque",
                    "cum": "voluptate",
                  },
                },
                id: "11f6223d-b47c-4c1a-b58b-39c89537a9a7",
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
                  "distinctio",
                  "cumque",
                  "id",
                ],
                timezone: "America/Denver",
                tokens: {
                  "quaerat": "incidunt",
                  "quo": "molestiae",
                  "veritatis": "ab",
                },
                username: "Beverly64",
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
              {
                applicationId: "d3106954-6ac7-46d8-8b96-71a494f144a6",
                authenticationToken: "minus",
                cleanSpeakId: "d824a587-a145-4d14-b336-9ad63c68257b",
                data: {
                  "deserunt": {
                    "libero": "doloribus",
                    "aspernatur": "sit",
                  },
                  "quo": {
                    "magnam": "animi",
                    "minima": "sequi",
                  },
                },
                id: "cb1257da-51fe-4559-abb3-25ee5b70b0ea",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "vero",
                  "aut",
                  "fugit",
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
                usernameStatus: ContentStatusEnum.Rejected,
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
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
              {
                applicationId: "17bcfeb6-6e58-4143-a2e1-e274862df908",
                authenticationToken: "possimus",
                cleanSpeakId: "03c53bc1-1ca0-43db-8be9-8a3b3171fc54",
                data: {
                  "provident": {
                    "voluptas": "earum",
                    "quaerat": "nobis",
                    "dignissimos": "perferendis",
                  },
                  "illo": {
                    "impedit": "magni",
                  },
                  "nam": {
                    "ullam": "possimus",
                    "nostrum": "pariatur",
                  },
                  "animi": {
                    "soluta": "iste",
                    "at": "amet",
                    "nisi": "inventore",
                  },
                },
                id: "c1e16435-6d6e-4325-bf9a-9985132d5c68",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "accusantium",
                ],
                timezone: "America/Denver",
                tokens: {
                  "quasi": "nam",
                  "quae": "velit",
                  "itaque": "necessitatibus",
                },
                username: "Dahlia.Kerluke7",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "repellendus",
            tenantId: "e966f84f-5257-45fb-adf2-162d46a343a4",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 222766,
                    timeStep: 760782,
                  },
                  email: "Imogene45@yahoo.com",
                  id: "28068efc-f6bd-4ccf-809f-7d8c8c4c58fd",
                  lastUsed: false,
                  method: "voluptatibus",
                  mobilePhone: "consequuntur",
                  secret: "illo",
                },
              ],
              recoveryCodes: [
                "temporibus",
                "neque",
                "quibusdam",
                "minus",
              ],
            },
            uniqueUsername: "animi",
            username: "Connor93",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "54ed6265-8fe1-456a-860a-1de583fed6db",
        },
      ],
      middleName: "reiciendis",
      mobilePhone: "perspiciatis",
      parentEmail: "sit",
      password: "placeat",
      passwordChangeReason: ChangePasswordReasonEnum.Validation,
      passwordChangeRequired: false,
      passwordLastUpdateInstant: 1659380719000,
      preferredLanguages: [
        "en_US",
      ],
      registrations: [
        {
          applicationId: "107f2d86-59b4-4cbb-a304-60bda8142a1f",
          authenticationToken: "officiis",
          cleanSpeakId: "18bd6e53-6e33-43d5-be90-8443196380e2",
          data: {
            "corporis": {
              "maxime": "modi",
              "illum": "voluptatem",
              "deserunt": "laboriosam",
            },
            "commodi": {
              "mollitia": "eos",
              "sequi": "magni",
            },
            "quisquam": {
              "reprehenderit": "doloremque",
              "delectus": "maxime",
              "numquam": "eos",
              "officia": "sed",
            },
          },
          id: "dc3a0c63-813e-4c7b-b99f-09e6b2ff77f5",
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
            "reiciendis",
            "quod",
            "iste",
            "et",
          ],
          timezone: "America/Denver",
          tokens: {
            "veritatis": "error",
            "et": "ex",
            "accusantium": "nesciunt",
          },
          username: "Kellie54",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        {
          applicationId: "3d38ede5-7c2d-4636-b9bf-0a25dd9e7c80",
          authenticationToken: "ut",
          cleanSpeakId: "89c05f5f-0365-4c57-b814-b25633865b10",
          data: {
            "quasi": {
              "nihil": "occaecati",
              "exercitationem": "quam",
              "magni": "hic",
            },
            "optio": {
              "nobis": "hic",
              "reiciendis": "maxime",
              "fuga": "quia",
            },
          },
          id: "f3f12627-0f4e-4a33-ac87-96324d9e55ba",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          roles: [
            "dolorem",
          ],
          timezone: "America/Denver",
          tokens: {
            "deleniti": "voluptatum",
            "beatae": "iusto",
          },
          username: "Tracy56",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        {
          applicationId: "cbd9e41e-f7ba-4521-8f26-9d1e65672324",
          authenticationToken: "minima",
          cleanSpeakId: "98a93b9c-6656-4583-8d96-24231704c12f",
          data: {
            "quo": {
              "optio": "ea",
              "deleniti": "quo",
              "veniam": "animi",
            },
          },
          id: "368f2110-853f-4f0c-80eb-e8d6a0eca455",
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
            "aspernatur",
            "ratione",
            "quisquam",
            "nesciunt",
          ],
          timezone: "America/Denver",
          tokens: {
            "porro": "ipsam",
          },
          username: "Maci11",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        {
          applicationId: "abe53336-c82d-4d7a-8d5f-ca2edbe02093",
          authenticationToken: "at",
          cleanSpeakId: "9975a944-0562-43e5-8fdf-b424a25e83b6",
          data: {
            "quidem": {
              "cum": "corrupti",
              "asperiores": "saepe",
              "aspernatur": "consequatur",
              "ex": "in",
            },
          },
          id: "91cd5fe0-f6f4-4242-b586-0f8c0a0bd52a",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          roles: [
            "explicabo",
          ],
          timezone: "America/Denver",
          tokens: {
            "repellat": "doloribus",
            "similique": "quos",
          },
          username: "Garret_Ruecker",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
      ],
      salt: "nobis",
      tenantId: "a78f9e7d-41c0-4350-8059-af3961b95cf5",
      timezone: "America/Denver",
      twoFactor: {
        methods: [
          {
            authenticator: {
              algorithm: TOTPAlgorithmEnum.HmacSha512,
              codeLength: 801008,
              timeStep: 612136,
            },
            email: "Rickie64@yahoo.com",
            id: "50cc6304-b297-457b-8bf1-e218b258acde",
            lastUsed: false,
            method: "libero",
            mobilePhone: "deserunt",
            secret: "perferendis",
          },
          {
            authenticator: {
              algorithm: TOTPAlgorithmEnum.HmacSha256,
              codeLength: 887058,
              timeStep: 913674,
            },
            email: "Rhiannon94@yahoo.com",
            id: "3c88029c-983e-4ce6-90a4-a78f394697e8",
            lastUsed: false,
            method: "tenetur",
            mobilePhone: "saepe",
            secret: "quidem",
          },
          {
            authenticator: {
              algorithm: TOTPAlgorithmEnum.HmacSha1,
              codeLength: 2029,
              timeStep: 786319,
            },
            email: "Kari11@gmail.com",
            id: "f5831b51-fd82-4979-b70a-efea91cb367a",
            lastUsed: false,
            method: "hic",
            mobilePhone: "perspiciatis",
            secret: "atque",
          },
        ],
        recoveryCodes: [
          "asperiores",
          "laudantium",
          "sint",
          "laborum",
        ],
      },
      uniqueUsername: "labore",
      username: "Javonte.Lehner",
      usernameStatus: ContentStatusEnum.Active,
      verified: false,
    },
    {
      active: false,
      birthDate: "2007-12-03",
      breachedPasswordLastCheckedInstant: 1659380719000,
      breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
      cleanSpeakId: "ea0e83d5-62f1-4d69-a97b-71fbf386baa6",
      connectorId: "5edc8aa4-6600-4514-b282-1e7ab72d3504",
      data: {
        "at": {
          "molestiae": "dolores",
          "beatae": "ullam",
          "aut": "ipsam",
        },
        "cum": {
          "id": "delectus",
          "porro": "quia",
          "alias": "nulla",
          "ut": "eius",
        },
        "est": {
          "fuga": "ipsa",
        },
        "dignissimos": {
          "et": "quia",
          "autem": "facilis",
          "molestias": "eveniet",
          "doloribus": "repellat",
        },
      },
      email: "Kristin_OKon@yahoo.com",
      encryptionScheme: "repellat",
      expiry: 1659380719000,
      factor: 439883,
      firstName: "Caden",
      fullName: "quia",
      id: "bc5faac9-5e8e-414d-9d3c-326733c591f2",
      imageUrl: "exercitationem",
      insertInstant: 1659380719000,
      lastLoginInstant: 1659380719000,
      lastName: "Greenfelder",
      lastUpdateInstant: 1659380719000,
      memberships: [
        {
          data: {
            "accusamus": {
              "similique": "enim",
            },
            "dolorum": {
              "commodi": "omnis",
            },
            "iusto": {
              "occaecati": "expedita",
              "ipsum": "nam",
              "ipsa": "distinctio",
            },
            "illo": {
              "hic": "a",
              "perspiciatis": "quis",
            },
          },
          groupId: "0b1ec955-b1bf-4b60-9484-7167def1f337",
          id: "961a03d6-5d19-437b-928b-8304f8075bf6",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
            cleanSpeakId: "37cb915d-099e-44f0-a5f1-559ce6391371",
            connectorId: "d81a154b-cdc7-454b-a383-475758a016bc",
            data: {
              "modi": {
                "illo": "ducimus",
              },
              "voluptas": {
                "sint": "laborum",
                "fugiat": "molestiae",
                "vel": "id",
              },
            },
            email: "Marlon35@gmail.com",
            encryptionScheme: "maxime",
            expiry: 1659380719000,
            factor: 819276,
            firstName: "Clifton",
            fullName: "laudantium",
            id: "7380828b-af4b-42a4-ba44-0c814f928560",
            imageUrl: "ipsum",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Wisozk",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
              {},
            ],
            middleName: "quo",
            mobilePhone: "eligendi",
            parentEmail: "impedit",
            password: "libero",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
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
                applicationId: "1568d473-1c47-4476-ba31-d851f3e548f8",
                authenticationToken: "doloremque",
                cleanSpeakId: "706a570a-967a-475b-ba68-006ff920d297",
                data: {
                  "assumenda": {
                    "veritatis": "ipsum",
                    "eum": "sequi",
                    "enim": "inventore",
                  },
                  "mollitia": {
                    "officiis": "officiis",
                    "excepturi": "fugiat",
                    "animi": "placeat",
                    "voluptate": "et",
                  },
                  "recusandae": {
                    "similique": "delectus",
                  },
                  "sit": {
                    "magni": "et",
                  },
                },
                id: "d319ba18-962f-4f1c-b97c-547ca2bc3de3",
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
                  "sunt",
                  "sed",
                  "quidem",
                  "rerum",
                ],
                timezone: "America/Denver",
                tokens: {
                  "facilis": "dolores",
                  "doloribus": "corporis",
                  "odit": "voluptatibus",
                },
                username: "Margarette.Hand",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "4ee0aed5-8886-4cd9-8a16-1acc5b69f32e",
                authenticationToken: "illo",
                cleanSpeakId: "069d0109-01f8-4628-9e76-88de95975646",
                data: {
                  "ducimus": {
                    "fuga": "ut",
                  },
                  "voluptate": {
                    "officia": "minus",
                    "architecto": "soluta",
                    "accusantium": "officia",
                    "quae": "vero",
                  },
                },
                id: "dd067a4e-eb8e-4ff3-8a90-7c6d14587993",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "maiores",
                  "omnis",
                ],
                timezone: "America/Denver",
                tokens: {
                  "ipsam": "numquam",
                  "voluptate": "ea",
                },
                username: "Guiseppe34",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "cumque",
            tenantId: "ffc30049-ba2d-41ea-8b22-5f4e7828d286",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 622266,
                    timeStep: 461709,
                  },
                  email: "Juwan_Harris30@yahoo.com",
                  id: "e23b7560-df3e-4257-b724-dc7d7bef215f",
                  lastUsed: false,
                  method: "tempora",
                  mobilePhone: "sed",
                  secret: "nihil",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 883681,
                    timeStep: 445344,
                  },
                  email: "Julia_Hyatt@hotmail.com",
                  id: "5b9d90b2-ba0d-483a-9c0e-05864187aee4",
                  lastUsed: false,
                  method: "quis",
                  mobilePhone: "adipisci",
                  secret: "saepe",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 830764,
                    timeStep: 580577,
                  },
                  email: "Judah_Wuckert@hotmail.com",
                  id: "41f1244d-5c68-4202-a308-bc640cb1a376",
                  lastUsed: false,
                  method: "consequuntur",
                  mobilePhone: "nostrum",
                  secret: "soluta",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 742822,
                    timeStep: 371229,
                  },
                  email: "Reva28@gmail.com",
                  id: "7ea56ee2-196d-4f77-ad51-1b1401eaac72",
                  lastUsed: false,
                  method: "non",
                  mobilePhone: "ab",
                  secret: "id",
                },
              ],
              recoveryCodes: [
                "mollitia",
                "ex",
                "eius",
                "dolorem",
              ],
            },
            uniqueUsername: "aut",
            username: "Vilma.Johnson27",
            usernameStatus: ContentStatusEnum.Active,
            verified: false,
          },
          userId: "31206dc3-5032-4c76-b1d7-edcf29d63826",
        },
        {
          data: {
            "labore": {
              "tempore": "corporis",
              "dolorem": "nam",
              "dicta": "amet",
              "possimus": "distinctio",
            },
            "eaque": {
              "veritatis": "quo",
              "iure": "natus",
              "repellat": "hic",
              "beatae": "ipsam",
            },
          },
          groupId: "6f117f51-aafa-43aa-af7c-cdb6bfb3b21f",
          id: "b5982bcf-c2ec-4544-9a82-1fef7b72721e",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.None,
            cleanSpeakId: "74195fc5-cde0-4ec8-bba1-7d55e0931302",
            connectorId: "193c3cfd-22b4-4ee6-bc5c-d71cd0d24a64",
            data: {
              "labore": {
                "nisi": "atque",
                "nostrum": "magni",
              },
            },
            email: "Dejon.Keeling@gmail.com",
            encryptionScheme: "cupiditate",
            expiry: 1659380719000,
            factor: 642677,
            firstName: "Aaron",
            fullName: "occaecati",
            id: "f2ccef24-beda-426c-99d6-74c4942d9465",
            imageUrl: "officia",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Dietrich",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
              {},
              {},
            ],
            middleName: "ipsam",
            mobilePhone: "quidem",
            parentEmail: "odio",
            password: "quaerat",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            registrations: [
              {
                applicationId: "5925b80b-941a-4386-8730-e01bd4b88777",
                authenticationToken: "eius",
                cleanSpeakId: "b0808f27-2de6-43f3-9278-0c2b92410ba9",
                data: {
                  "aperiam": {
                    "impedit": "iusto",
                    "rem": "aspernatur",
                    "enim": "atque",
                  },
                },
                id: "3bdccc80-442d-411b-83d6-31be5b1e7051",
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
                  "consequatur",
                ],
                timezone: "America/Denver",
                tokens: {
                  "eos": "soluta",
                },
                username: "Elisabeth16",
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
              {
                applicationId: "e6731814-3917-4317-a820-4f8897b3aa7c",
                authenticationToken: "optio",
                cleanSpeakId: "804f633b-640b-4a78-85ee-3a100e532f49",
                data: {
                  "enim": {
                    "dolor": "officia",
                    "repellendus": "recusandae",
                  },
                  "minus": {
                    "veritatis": "in",
                  },
                  "odit": {
                    "ipsam": "accusamus",
                    "impedit": "illum",
                    "odio": "ipsam",
                    "molestiae": "ipsum",
                  },
                  "rem": {
                    "alias": "eius",
                    "ea": "qui",
                    "explicabo": "inventore",
                    "pariatur": "praesentium",
                  },
                },
                id: "7e546c91-e274-4a4d-8113-de719452113c",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "incidunt",
                ],
                timezone: "America/Denver",
                tokens: {
                  "itaque": "ad",
                  "velit": "et",
                  "autem": "nobis",
                },
                username: "Karson59",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "iure",
            tenantId: "801b1a60-7c22-4cca-bd56-3d30e04167b8",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 942249,
                    timeStep: 841158,
                  },
                  email: "Israel.Rogahn@hotmail.com",
                  id: "53831a8b-473c-4555-baed-e233f9cb370b",
                  lastUsed: false,
                  method: "omnis",
                  mobilePhone: "voluptate",
                  secret: "sequi",
                },
              ],
              recoveryCodes: [
                "culpa",
                "tempore",
                "ea",
                "molestiae",
              ],
            },
            uniqueUsername: "vero",
            username: "Friedrich.Gleichner",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
          userId: "c4c25093-6d9f-412b-a42d-57aa6bac3eda",
        },
        {
          data: {
            "blanditiis": {
              "eveniet": "tenetur",
              "veniam": "exercitationem",
            },
            "a": {
              "odit": "ab",
              "atque": "ducimus",
              "officiis": "accusamus",
              "excepturi": "doloribus",
            },
            "neque": {
              "provident": "quia",
              "in": "officia",
              "blanditiis": "ipsam",
              "recusandae": "modi",
            },
          },
          groupId: "401c0990-f88b-41a1-9513-37e506c55150",
          id: "839d6690-fb50-48c6-8b14-bc6c8e27e1cb",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
            cleanSpeakId: "f3d63f64-ec58-461d-a2f4-91c570771f4f",
            connectorId: "473b36eb-e193-4b22-b6d8-0bcd21ddc9f0",
            data: {
              "quae": {
                "sit": "corporis",
              },
              "excepturi": {
                "nisi": "rem",
                "saepe": "blanditiis",
              },
              "doloribus": {
                "itaque": "autem",
                "aut": "necessitatibus",
                "quia": "cum",
                "necessitatibus": "veniam",
              },
            },
            email: "Joany.Hettinger76@hotmail.com",
            encryptionScheme: "autem",
            expiry: 1659380719000,
            factor: 400783,
            firstName: "Retha",
            fullName: "ea",
            id: "eb143267-4234-4283-8440-5d8eee91b2ba",
            imageUrl: "nesciunt",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Grimes",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
            ],
            middleName: "nihil",
            mobilePhone: "quae",
            parentEmail: "hic",
            password: "cumque",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
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
                applicationId: "5b553f3f-d38e-431c-be94-dc5e1d41f41e",
                authenticationToken: "animi",
                cleanSpeakId: "15e38ae6-2ce6-40a1-8bdf-b38cd2b5346d",
                data: {
                  "quo": {
                    "aliquid": "unde",
                  },
                  "veritatis": {
                    "doloribus": "autem",
                    "repudiandae": "eum",
                    "ipsam": "veniam",
                  },
                },
                id: "a4218e56-a057-4044-91af-acef1757d4e2",
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
                  "sunt",
                ],
                timezone: "America/Denver",
                tokens: {
                  "voluptatum": "libero",
                  "velit": "dolorum",
                },
                username: "Trevor_Skiles12",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "ef995cb5-e401-4a75-91aa-fdfd6566b027",
                authenticationToken: "at",
                cleanSpeakId: "3f6a0144-c50d-485b-a7ef-bc2daa584fe1",
                data: {
                  "illo": {
                    "nemo": "id",
                    "sed": "animi",
                    "omnis": "voluptate",
                  },
                },
                id: "1e16c067-2b8a-488f-90da-d475afc4151f",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "voluptatem",
                  "debitis",
                  "reprehenderit",
                ],
                timezone: "America/Denver",
                tokens: {
                  "dolor": "illo",
                  "quidem": "aut",
                  "molestias": "officiis",
                  "dolorum": "eaque",
                },
                username: "Gerardo93",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "c6659b73-d590-4299-b4c2-f29f0b1b4913",
                authenticationToken: "commodi",
                cleanSpeakId: "27b33745-6f2f-43d0-91ee-d3e50db23ed0",
                data: {
                  "voluptatum": {
                    "sequi": "quia",
                    "ipsam": "unde",
                  },
                  "illo": {
                    "consequuntur": "minus",
                  },
                  "ab": {
                    "nemo": "impedit",
                    "nisi": "veritatis",
                  },
                },
                id: "8f6bec9d-a755-4495-a6d0-08099c8cfada",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "officiis",
                  "dicta",
                  "eaque",
                ],
                timezone: "America/Denver",
                tokens: {
                  "atque": "quam",
                  "ex": "cumque",
                },
                username: "Alvah66",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "6860b73a-ef80-4378-95f9-1919f6f23b18",
                authenticationToken: "velit",
                cleanSpeakId: "f7eb6b4a-4fa0-4b9f-a8c9-d6a7162a75ed",
                data: {
                  "labore": {
                    "earum": "doloribus",
                    "vel": "perferendis",
                    "vel": "odit",
                    "culpa": "non",
                  },
                },
                id: "c30b49e2-27e7-4e0a-bc22-226ba4c6f47a",
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
                  "provident",
                ],
                timezone: "America/Denver",
                tokens: {
                  "laborum": "pariatur",
                  "ullam": "asperiores",
                  "minima": "cum",
                },
                username: "Libbie_Ernser89",
                usernameStatus: ContentStatusEnum.Rejected,
                verified: false,
              },
            ],
            salt: "perspiciatis",
            tenantId: "8544e08f-28b8-4d8c-ac26-097647f11315",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 910693,
                    timeStep: 724655,
                  },
                  email: "Charlie27@gmail.com",
                  id: "af40c880-5bc7-415e-ab78-00e0b8cb9fee",
                  lastUsed: false,
                  method: "reiciendis",
                  mobilePhone: "odit",
                  secret: "quidem",
                },
              ],
              recoveryCodes: [
                "porro",
                "voluptas",
              ],
            },
            uniqueUsername: "asperiores",
            username: "Marlen_Beatty23",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "ae2b1434-7aea-4700-90ab-25e236c70161",
        },
        {
          data: {
            "dolorum": {
              "voluptas": "suscipit",
            },
          },
          groupId: "00673b2a-8ed1-4b87-b0d4-c2a9c9ea6e0e",
          id: "dc52e7b4-8283-4f83-86d7-b73d7c9e03fa",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
            cleanSpeakId: "86896192-a963-4805-b3eb-2c073c04183a",
            connectorId: "6012adbb-2ec5-4dd4-b786-b7f2e5f2e09a",
            data: {
              "repudiandae": {
                "ratione": "minima",
              },
              "fugiat": {
                "sed": "suscipit",
                "nam": "minima",
              },
            },
            email: "Ward36@gmail.com",
            encryptionScheme: "nam",
            expiry: 1659380719000,
            factor: 786524,
            firstName: "Helga",
            fullName: "unde",
            id: "7a1d7553-dd15-4265-ba77-c12577a6ecb2",
            imageUrl: "ullam",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Wehner",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
            ],
            middleName: "voluptate",
            mobilePhone: "similique",
            parentEmail: "aliquam",
            password: "hic",
            passwordChangeReason: ChangePasswordReasonEnum.Breached,
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
                applicationId: "60ae201e-54d0-4691-9ae6-d2094ccec330",
                authenticationToken: "expedita",
                cleanSpeakId: "4ec47291-8a49-478b-87c5-3216b1a6b57c",
                data: {
                  "itaque": {
                    "tenetur": "consectetur",
                  },
                  "adipisci": {
                    "sunt": "aut",
                    "accusantium": "eveniet",
                    "ipsam": "temporibus",
                  },
                  "dolorum": {
                    "cumque": "atque",
                    "consectetur": "magnam",
                    "nemo": "a",
                  },
                },
                id: "9486ca15-28ed-4188-a59b-43f51c85df4e",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "asperiores",
                ],
                timezone: "America/Denver",
                tokens: {
                  "dicta": "qui",
                  "nisi": "temporibus",
                  "dolore": "fugiat",
                },
                username: "Itzel53",
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
              {
                applicationId: "7a471599-a076-47e4-838a-862e14648375",
                authenticationToken: "ipsa",
                cleanSpeakId: "0c4e6dc8-ae8b-4072-b11a-802a1d329b1d",
                data: {
                  "nulla": {
                    "deleniti": "autem",
                    "maiores": "ducimus",
                    "veniam": "non",
                    "autem": "suscipit",
                  },
                },
                id: "7f5eac60-682c-49fc-85ce-07e73f61d8bd",
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
                  "cupiditate",
                  "magnam",
                  "adipisci",
                ],
                timezone: "America/Denver",
                tokens: {
                  "earum": "asperiores",
                  "dolorem": "ipsam",
                  "aperiam": "neque",
                },
                username: "Adolphus45",
                usernameStatus: ContentStatusEnum.Rejected,
                verified: false,
              },
              {
                applicationId: "102083fb-5e8f-44b1-a08b-86ce4465970d",
                authenticationToken: "odio",
                cleanSpeakId: "24f1c31f-3b1b-456f-85dc-1e5beb648b25",
                data: {
                  "itaque": {
                    "perferendis": "dolorem",
                    "exercitationem": "aspernatur",
                    "reiciendis": "quisquam",
                    "quod": "veritatis",
                  },
                },
                id: "e24d4e5a-fa92-460e-afd2-1b1e28c2cafa",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "id",
                  "beatae",
                ],
                timezone: "America/Denver",
                tokens: {
                  "illum": "corporis",
                  "harum": "quo",
                  "eos": "ad",
                  "dolorem": "ex",
                },
                username: "Santos.Stroman94",
                usernameStatus: ContentStatusEnum.Rejected,
                verified: false,
              },
            ],
            salt: "deserunt",
            tenantId: "7598a466-d794-4e0f-ab1b-66d3baa65a97",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 386776,
                    timeStep: 612995,
                  },
                  email: "Audra_Renner86@gmail.com",
                  id: "c3d3f655-8ec5-42f0-a167-1d51163111bf",
                  lastUsed: false,
                  method: "ullam",
                  mobilePhone: "consequuntur",
                  secret: "eveniet",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 312709,
                    timeStep: 810198,
                  },
                  email: "Arlo_Gerlach52@yahoo.com",
                  id: "213c99ed-55ef-4fdc-98ad-5eff322aa4d9",
                  lastUsed: false,
                  method: "sequi",
                  mobilePhone: "et",
                  secret: "vel",
                },
              ],
              recoveryCodes: [
                "occaecati",
              ],
            },
            uniqueUsername: "sunt",
            username: "Demetris45",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
          userId: "cfefa85b-7e5a-49ca-bc43-328801445fec",
        },
      ],
      middleName: "sequi",
      mobilePhone: "dolorem",
      parentEmail: "fuga",
      password: "vitae",
      passwordChangeReason: ChangePasswordReasonEnum.Breached,
      passwordChangeRequired: false,
      passwordLastUpdateInstant: 1659380719000,
      preferredLanguages: [
        "en_US",
        "en_US",
        "en_US",
      ],
      registrations: [
        {
          applicationId: "34459d8c-05a9-4fa9-b4c7-35346b8be2fb",
          authenticationToken: "corporis",
          cleanSpeakId: "c543f1b7-95d5-4b49-9a19-5d61212467bd",
          data: {
            "error": {
              "odio": "perferendis",
              "aspernatur": "dicta",
              "corrupti": "beatae",
              "fugit": "iusto",
            },
          },
          id: "5d6f2fe0-5665-4bf8-8427-0436416eae73",
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
            "animi",
            "laudantium",
            "error",
            "sit",
          ],
          timezone: "America/Denver",
          tokens: {
            "sequi": "labore",
            "natus": "aliquam",
            "praesentium": "odio",
            "vel": "debitis",
          },
          username: "Ebba_Beatty32",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        {
          applicationId: "1ba294d0-e5f4-4ad1-80f5-1d7b656ee013",
          authenticationToken: "facere",
          cleanSpeakId: "802371dd-28db-4d0a-81b1-9586c2d9d56a",
          data: {
            "enim": {
              "praesentium": "magnam",
            },
            "vitae": {
              "eveniet": "consequuntur",
              "tempora": "consequatur",
              "maxime": "rem",
            },
            "ipsa": {
              "illum": "reiciendis",
              "doloremque": "distinctio",
            },
          },
          id: "d827860c-2c4f-4357-9c32-f9b6300d8bda",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "odio",
          ],
          timezone: "America/Denver",
          tokens: {
            "quidem": "saepe",
          },
          username: "Rolando.Turner51",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        {
          applicationId: "44fa54a5-7715-43b4-9fa8-dceab52e39aa",
          authenticationToken: "dignissimos",
          cleanSpeakId: "69b212a9-5229-4d40-907b-ddfc1f16450f",
          data: {
            "labore": {
              "soluta": "quod",
              "enim": "sequi",
              "minus": "ratione",
              "doloremque": "veniam",
            },
            "ipsam": {
              "error": "rerum",
              "consequuntur": "doloribus",
              "blanditiis": "reprehenderit",
            },
          },
          id: "7e4120cd-caf1-476e-8849-f5aab3fdcea7",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "fugiat",
            "tempore",
          ],
          timezone: "America/Denver",
          tokens: {
            "fugit": "consequatur",
            "aliquam": "fuga",
            "voluptate": "molestiae",
          },
          username: "Anderson49",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        {
          applicationId: "03ebe970-eae7-4c1f-9287-065eb26c721b",
          authenticationToken: "repellendus",
          cleanSpeakId: "bf994ccc-d701-4c06-a8b0-1124392ddddf",
          data: {
            "consequatur": {
              "commodi": "amet",
            },
            "asperiores": {
              "deleniti": "tempora",
              "quaerat": "nobis",
              "facere": "quos",
              "odio": "vero",
            },
          },
          id: "70be106e-91b4-4031-a3b7-88d6c03820e5",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          roles: [
            "esse",
            "quaerat",
            "voluptatibus",
          ],
          timezone: "America/Denver",
          tokens: {
            "delectus": "deleniti",
          },
          username: "Blaise91",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
      ],
      salt: "aliquam",
      tenantId: "b65949af-2086-4e28-a9fb-579721ee608b",
      timezone: "America/Denver",
      twoFactor: {
        methods: [
          {
            authenticator: {
              algorithm: TOTPAlgorithmEnum.HmacSha512,
              codeLength: 857317,
              timeStep: 724613,
            },
            email: "Westley43@yahoo.com",
            id: "88e14836-4e89-4845-a1bb-cf47a2fa713b",
            lastUsed: false,
            method: "aliquam",
            mobilePhone: "aliquid",
            secret: "eaque",
          },
        ],
        recoveryCodes: [
          "officiis",
          "accusantium",
          "quis",
        ],
      },
      uniqueUsername: "ea",
      username: "Owen_Gutmann83",
      usernameStatus: ContentStatusEnum.Rejected,
      verified: false,
    },
    {
      active: false,
      birthDate: "2007-12-03",
      breachedPasswordLastCheckedInstant: 1659380719000,
      breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
      cleanSpeakId: "606ea54c-0f11-45c1-b017-bcd907e36e5d",
      connectorId: "09328f05-816f-42a5-8a22-1097b6d48ab2",
      data: {
        "ipsa": {
          "accusamus": "molestiae",
          "beatae": "omnis",
          "dicta": "deleniti",
          "aperiam": "quas",
        },
      },
      email: "Telly.Littel@hotmail.com",
      encryptionScheme: "fugiat",
      expiry: 1659380719000,
      factor: 258862,
      firstName: "Augustus",
      fullName: "mollitia",
      id: "4855a192-878a-44ee-a208-285e364c84c7",
      imageUrl: "alias",
      insertInstant: 1659380719000,
      lastLoginInstant: 1659380719000,
      lastName: "Hermiston",
      lastUpdateInstant: 1659380719000,
      memberships: [
        {
          data: {
            "ducimus": {
              "vitae": "repudiandae",
            },
            "adipisci": {
              "rerum": "natus",
            },
          },
          groupId: "ebed5f95-6f64-42b8-841b-dfe4d8bb1b7a",
          id: "d4180b77-ee7b-4de4-971a-e4d13f398f08",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.None,
            cleanSpeakId: "a5d8ffa9-0119-4e95-a743-854b27bab2d1",
            connectorId: "3b8274de-965d-4f18-8d92-85bb899fc110",
            data: {
              "a": {
                "ad": "itaque",
                "et": "saepe",
              },
              "dicta": {
                "fugiat": "cupiditate",
                "reprehenderit": "totam",
                "magnam": "sapiente",
                "exercitationem": "atque",
              },
            },
            email: "Imani45@hotmail.com",
            encryptionScheme: "omnis",
            expiry: 1659380719000,
            factor: 33336,
            firstName: "Jason",
            fullName: "ut",
            id: "f47ade5b-cc36-413e-864b-c0628ee140fd",
            imageUrl: "delectus",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Kling",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "ad",
            mobilePhone: "quasi",
            parentEmail: "ducimus",
            password: "blanditiis",
            passwordChangeReason: ChangePasswordReasonEnum.Validation,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            registrations: [
              {
                applicationId: "631dcac3-6607-47c0-936b-182e7208fdbf",
                authenticationToken: "quas",
                cleanSpeakId: "1cdbae4d-0d93-418a-bedf-81441dbd542c",
                data: {
                  "similique": {
                    "laboriosam": "id",
                    "ut": "ab",
                    "dolor": "sint",
                  },
                  "provident": {
                    "consectetur": "voluptatum",
                    "atque": "culpa",
                    "accusantium": "vel",
                    "reiciendis": "repudiandae",
                  },
                },
                id: "0316f0df-8ea4-4edd-b951-ce21e23540aa",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "ratione",
                ],
                timezone: "America/Denver",
                tokens: {
                  "neque": "corrupti",
                  "nemo": "numquam",
                  "quidem": "explicabo",
                },
                username: "Tyrique.Schulist67",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "0ae826ad-0bd4-4129-9e64-e9caf89f21a2",
                authenticationToken: "suscipit",
                cleanSpeakId: "b959a2ac-9d7f-4b46-9e61-efd283903165",
                data: {
                  "nobis": {
                    "minus": "aspernatur",
                  },
                  "exercitationem": {
                    "iure": "delectus",
                    "in": "ullam",
                  },
                },
                id: "2f69189d-8820-4292-a12f-ae2b259a381f",
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
                  "corrupti",
                  "perferendis",
                  "aliquam",
                ],
                timezone: "America/Denver",
                tokens: {
                  "sit": "laboriosam",
                  "repellendus": "dicta",
                },
                username: "Shana.Swaniawski",
                usernameStatus: ContentStatusEnum.Pending,
                verified: false,
              },
              {
                applicationId: "186268e1-40e9-4378-b9e8-71a204491e4c",
                authenticationToken: "occaecati",
                cleanSpeakId: "b81e3ef3-36fe-46e5-87fd-77faef481834",
                data: {
                  "explicabo": {
                    "tempora": "laborum",
                    "culpa": "ex",
                  },
                  "eligendi": {
                    "perspiciatis": "fugit",
                    "quisquam": "saepe",
                  },
                },
                id: "a5d248e3-ef31-4d8f-9142-bdef4c97919e",
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
                ],
                timezone: "America/Denver",
                tokens: {
                  "eos": "ex",
                },
                username: "Javier22",
                usernameStatus: ContentStatusEnum.Rejected,
                verified: false,
              },
              {
                applicationId: "42c7e903-dc8f-47c9-b7a7-db36b65c4f9c",
                authenticationToken: "repellendus",
                cleanSpeakId: "54a5dd61-852f-465c-b4f6-3548a62e7b2a",
                data: {
                  "sed": {
                    "vitae": "ducimus",
                    "quam": "fugiat",
                    "minima": "ad",
                    "fuga": "occaecati",
                  },
                  "veritatis": {
                    "minima": "aliquam",
                    "consequatur": "quis",
                  },
                  "eaque": {
                    "dicta": "ratione",
                    "delectus": "a",
                  },
                },
                id: "158f09d3-516b-44bf-ad96-dce73a369fbf",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "alias",
                  "velit",
                  "ipsum",
                  "facilis",
                ],
                timezone: "America/Denver",
                tokens: {
                  "facilis": "reprehenderit",
                  "dicta": "itaque",
                  "vero": "a",
                  "veritatis": "culpa",
                },
                username: "Aubrey13",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "ipsam",
            tenantId: "fcd7f048-506e-40a9-b987-6acf69e2b01d",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 804115,
                    timeStep: 466386,
                  },
                  email: "Adelbert.Baumbach@gmail.com",
                  id: "ec1f1dab-d7aa-4446-8d57-5d167d388945",
                  lastUsed: false,
                  method: "qui",
                  mobilePhone: "illo",
                  secret: "maxime",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha1,
                    codeLength: 679188,
                    timeStep: 276243,
                  },
                  email: "Jayme17@hotmail.com",
                  id: "c73d8f6b-82eb-46f8-a8a8-e6ccc1d11fb5",
                  lastUsed: false,
                  method: "fugiat",
                  mobilePhone: "delectus",
                  secret: "facere",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 145336,
                    timeStep: 606972,
                  },
                  email: "Marian27@gmail.com",
                  id: "438cdc5e-98d7-47db-9e53-90e505011b41",
                  lastUsed: false,
                  method: "quibusdam",
                  mobilePhone: "atque",
                  secret: "esse",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha512,
                    codeLength: 281560,
                    timeStep: 334758,
                  },
                  email: "Bonita1@hotmail.com",
                  id: "9104fd3f-c823-4596-8193-5d87b834e14a",
                  lastUsed: false,
                  method: "omnis",
                  mobilePhone: "nobis",
                  secret: "sint",
                },
              ],
              recoveryCodes: [
                "ut",
                "eum",
              ],
            },
            uniqueUsername: "ab",
            username: "Beaulah91",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
          userId: "51943b9b-40f2-41e5-8466-f8b69aac02c0",
        },
        {
          data: {
            "earum": {
              "nemo": "assumenda",
            },
            "provident": {
              "quia": "quia",
            },
            "impedit": {
              "eum": "quia",
              "est": "assumenda",
              "occaecati": "rerum",
              "minus": "officia",
            },
          },
          groupId: "259ae724-96f4-4190-83e0-891a402795dc",
          id: "6ceb7033-d06f-47e5-8e37-953e60df85da",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
            cleanSpeakId: "184d17ce-d246-48ec-bfc9-6bc74d7c1285",
            connectorId: "333c31c5-7621-471e-beb2-67a7dcc8810f",
            data: {
              "voluptates": {
                "quos": "quas",
                "enim": "quasi",
                "exercitationem": "quam",
                "quidem": "odit",
              },
              "quae": {
                "veritatis": "facilis",
                "at": "voluptatem",
                "esse": "reiciendis",
              },
            },
            email: "Hazel.Lockman15@gmail.com",
            encryptionScheme: "unde",
            expiry: 1659380719000,
            factor: 620682,
            firstName: "Lilly",
            fullName: "aliquid",
            id: "f35cb009-20c2-4d9d-9cec-90e2e68b7d6b",
            imageUrl: "perferendis",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Cole",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
            ],
            middleName: "asperiores",
            mobilePhone: "impedit",
            parentEmail: "nesciunt",
            password: "impedit",
            passwordChangeReason: ChangePasswordReasonEnum.Expired,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            registrations: [
              {
                applicationId: "c6dbd14e-84b3-421f-9313-d0b019fde6fd",
                authenticationToken: "vitae",
                cleanSpeakId: "93771942-9faf-483d-bc47-8f7f79d5fa17",
                data: {
                  "maiores": {
                    "voluptatum": "dolores",
                    "fuga": "alias",
                    "nulla": "distinctio",
                  },
                },
                id: "bc49e790-b8aa-4eeb-bd38-01a2d2489ca7",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "non",
                  "recusandae",
                  "rerum",
                ],
                timezone: "America/Denver",
                tokens: {
                  "repellat": "eius",
                  "magnam": "neque",
                  "recusandae": "ratione",
                  "iusto": "iste",
                },
                username: "Beryl.Hand",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "a",
            tenantId: "a10cb6cf-6fbb-4d16-aac9-ac403b34493d",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 61667,
                    timeStep: 662137,
                  },
                  email: "Ramona10@gmail.com",
                  id: "8f6cccf9-6343-4a18-b720-3639431a6704",
                  lastUsed: false,
                  method: "quo",
                  mobilePhone: "voluptatibus",
                  secret: "soluta",
                },
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 785137,
                    timeStep: 596085,
                  },
                  email: "Shea.Jacobson@gmail.com",
                  id: "aa791e4c-7260-4b56-ad35-8d797dbe0fbc",
                  lastUsed: false,
                  method: "distinctio",
                  mobilePhone: "quo",
                  secret: "dolores",
                },
              ],
              recoveryCodes: [
                "consequatur",
              ],
            },
            uniqueUsername: "expedita",
            username: "Riley.Muller",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "86cd59c8-14e7-4308-96d1-3d82e8e22fda",
        },
        {
          data: {
            "numquam": {
              "possimus": "odit",
            },
            "accusantium": {
              "magnam": "ducimus",
              "occaecati": "culpa",
              "adipisci": "adipisci",
              "minus": "libero",
            },
          },
          groupId: "d485c1e2-0482-4e90-9c50-593fb66c1919",
          id: "d90a6098-9dc3-451f-ac86-62b908632c11",
          insertInstant: 1659380719000,
          user: {
            active: false,
            birthDate: "2007-12-03",
            breachedPasswordLastCheckedInstant: 1659380719000,
            breachedPasswordStatus: BreachedPasswordStatusEnum.None,
            cleanSpeakId: "23c6ee41-6d28-40a2-a467-6be0a7ba56b7",
            connectorId: "1f34b0be-62d5-449f-810e-e5617f047f8c",
            data: {
              "unde": {
                "occaecati": "sunt",
                "ipsum": "reiciendis",
              },
              "nulla": {
                "pariatur": "vero",
              },
            },
            email: "Krystal42@gmail.com",
            encryptionScheme: "quis",
            expiry: 1659380719000,
            factor: 126006,
            firstName: "Corbin",
            fullName: "enim",
            id: "11d7460f-2588-4fe3-9738-8fce5cc3668b",
            imageUrl: "mollitia",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastName: "Wunsch",
            lastUpdateInstant: 1659380719000,
            memberships: [
              {},
              {},
            ],
            middleName: "debitis",
            mobilePhone: "excepturi",
            parentEmail: "a",
            password: "eaque",
            passwordChangeReason: ChangePasswordReasonEnum.Administrative,
            passwordChangeRequired: false,
            passwordLastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            registrations: [
              {
                applicationId: "ea64f12f-7080-440e-9d57-f258d955a6f9",
                authenticationToken: "delectus",
                cleanSpeakId: "b6150a41-8602-4e09-8f4e-d9a7f2cdc10c",
                data: {
                  "assumenda": {
                    "repellendus": "voluptas",
                    "iusto": "veritatis",
                  },
                  "inventore": {
                    "quae": "eaque",
                    "maiores": "animi",
                    "dolorum": "sunt",
                  },
                  "nulla": {
                    "illum": "aliquam",
                    "tempora": "fugit",
                  },
                },
                id: "ff5a2176-f56b-4818-9389-97a79fbd7e9d",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                  "en_US",
                ],
                roles: [
                  "quas",
                  "error",
                  "quidem",
                ],
                timezone: "America/Denver",
                tokens: {
                  "quo": "vitae",
                },
                username: "Lester.Shields45",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
              {
                applicationId: "f0029d6a-1588-40f6-ac01-d3660ea1aaae",
                authenticationToken: "laborum",
                cleanSpeakId: "618a67f5-08fd-4838-8b5c-cb68aa64da81",
                data: {
                  "incidunt": {
                    "perferendis": "facere",
                    "labore": "illum",
                    "architecto": "eum",
                    "eaque": "aliquam",
                  },
                  "fuga": {
                    "repellendus": "eveniet",
                    "quam": "ipsa",
                  },
                },
                id: "89651469-e614-4be4-b47a-027ceca9b40f",
                insertInstant: 1659380719000,
                lastLoginInstant: 1659380719000,
                lastUpdateInstant: 1659380719000,
                preferredLanguages: [
                  "en_US",
                ],
                roles: [
                  "earum",
                ],
                timezone: "America/Denver",
                tokens: {
                  "at": "dignissimos",
                  "distinctio": "dolores",
                  "minima": "suscipit",
                },
                username: "Amara.Beer5",
                usernameStatus: ContentStatusEnum.Active,
                verified: false,
              },
            ],
            salt: "a",
            tenantId: "89992c46-56a0-4df7-97df-37f98d96345a",
            timezone: "America/Denver",
            twoFactor: {
              methods: [
                {
                  authenticator: {
                    algorithm: TOTPAlgorithmEnum.HmacSha256,
                    codeLength: 107558,
                    timeStep: 222655,
                  },
                  email: "Marcos_Casper@gmail.com",
                  id: "2aad8032-4580-4193-9cb5-788cc279c206",
                  lastUsed: false,
                  method: "cum",
                  mobilePhone: "ducimus",
                  secret: "consequatur",
                },
              ],
              recoveryCodes: [
                "rem",
                "voluptates",
                "praesentium",
              ],
            },
            uniqueUsername: "ratione",
            username: "Alden89",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          userId: "a99547f1-6b6d-443c-8c04-296fc37125d0",
        },
      ],
      middleName: "unde",
      mobilePhone: "modi",
      parentEmail: "illo",
      password: "dignissimos",
      passwordChangeReason: ChangePasswordReasonEnum.Expired,
      passwordChangeRequired: false,
      passwordLastUpdateInstant: 1659380719000,
      preferredLanguages: [
        "en_US",
      ],
      registrations: [
        {
          applicationId: "d4e4d4cc-4eb0-411a-a55a-428e1bdfacf8",
          authenticationToken: "facere",
          cleanSpeakId: "a156f544-d0c0-416e-b7aa-90a8218f2658",
          data: {
            "error": {
              "fuga": "nobis",
              "eum": "repellat",
              "architecto": "quasi",
            },
          },
          id: "dc49c033-f641-47d3-97ad-db570190e4cb",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          roles: [
            "ut",
            "veniam",
          ],
          timezone: "America/Denver",
          tokens: {
            "id": "optio",
            "quasi": "sint",
          },
          username: "Darrick_Brown",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        {
          applicationId: "7dc54188-eb9a-4e08-bbff-14a47b79d8e0",
          authenticationToken: "quae",
          cleanSpeakId: "ab459f1a-1991-45c9-b48b-88b923bc92bc",
          data: {
            "libero": {
              "eaque": "ipsa",
            },
            "repellendus": {
              "amet": "nemo",
              "dolorum": "a",
              "ratione": "blanditiis",
            },
            "blanditiis": {
              "odit": "quod",
              "dolores": "quos",
              "voluptatibus": "quaerat",
              "at": "earum",
            },
          },
          id: "b0c6b713-bdc2-473d-9a2b-38fe6a4b93bb",
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
            "dolores",
            "laudantium",
          ],
          timezone: "America/Denver",
          tokens: {
            "fugiat": "dolorem",
          },
          username: "Sarah.Pfeffer",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        {
          applicationId: "4fc5c3d1-cf21-4de2-838c-c59caa98589b",
          authenticationToken: "ullam",
          cleanSpeakId: "fcf028b7-e3ef-4f8c-b64b-3b75ba6b7368",
          data: {
            "illum": {
              "est": "soluta",
              "impedit": "delectus",
            },
            "voluptates": {
              "consequatur": "libero",
              "amet": "rerum",
            },
            "amet": {
              "optio": "soluta",
              "possimus": "voluptatem",
              "quos": "qui",
            },
          },
          id: "24496dee-9f99-428f-944c-a4bc7a24ced9",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          roles: [
            "fugiat",
            "voluptate",
            "minus",
          ],
          timezone: "America/Denver",
          tokens: {
            "quia": "quidem",
            "vitae": "aliquam",
            "similique": "dolores",
            "laborum": "aut",
          },
          username: "Billie.Boehm",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        {
          applicationId: "33e49f21-581d-4823-bfa8-94cb712cd3d2",
          authenticationToken: "iure",
          cleanSpeakId: "249beb77-7f42-44df-946e-657b64242eec",
          data: {
            "vero": {
              "error": "voluptates",
            },
          },
          id: "64d11e02-b714-405d-a489-df245e865c9e",
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
            "vel",
          ],
          timezone: "America/Denver",
          tokens: {
            "corporis": "autem",
            "debitis": "quibusdam",
            "itaque": "corporis",
            "delectus": "pariatur",
          },
          username: "Kory_Pouros16",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
      ],
      salt: "veniam",
      tenantId: "fa343136-7bec-45a2-907e-edd2bb62822e",
      timezone: "America/Denver",
      twoFactor: {
        methods: [
          {
            authenticator: {
              algorithm: TOTPAlgorithmEnum.HmacSha256,
              codeLength: 876771,
              timeStep: 940894,
            },
            email: "Brisa.Wiegand87@gmail.com",
            id: "74ea3b0c-9f85-48ca-95d5-7f41fc2b00e9",
            lastUsed: false,
            method: "architecto",
            mobilePhone: "nam",
            secret: "quo",
          },
        ],
        recoveryCodes: [
          "qui",
        ],
      },
      uniqueUsername: "sint",
      username: "Kaitlin.Runolfsdottir",
      usernameStatus: ContentStatusEnum.Active,
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
import { AttestationTypeEnum, CoseAlgorithmIdentifierEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.importWebAuthnCredentialWithId({
  credentials: [
    {
      algorithm: CoseAlgorithmIdentifierEnum.Ps384,
      attestationType: AttestationTypeEnum.Basic,
      authenticatorSupportsUserVerification: false,
      credentialId: "magnam",
      data: {
        "blanditiis": {
          "aliquid": "cupiditate",
          "veniam": "esse",
          "amet": "veritatis",
          "dicta": "veniam",
        },
        "et": {
          "repudiandae": "expedita",
          "numquam": "ipsa",
          "beatae": "culpa",
        },
      },
      discoverable: false,
      displayName: "aut",
      id: "035bb6bf-383c-45eb-8e3c-b7ec0442cb78",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Juanita Huels",
      publicKey: "nobis",
      relyingPartyId: "quas",
      signCount: 568034,
      tenantId: "6c6ac512-fdfc-4208-8822-938619ba7b40",
      transports: [
        "non",
      ],
      userAgent: "ad",
      userId: "49904906-c0da-4273-a07c-f669e83bbd3e",
    },
    {
      algorithm: CoseAlgorithmIdentifierEnum.Rs512,
      attestationType: AttestationTypeEnum.Basic,
      authenticatorSupportsUserVerification: false,
      credentialId: "expedita",
      data: {
        "corporis": {
          "sapiente": "vero",
          "iusto": "repudiandae",
          "sapiente": "maiores",
          "beatae": "veritatis",
        },
        "corporis": {
          "esse": "facilis",
          "laboriosam": "modi",
        },
        "deleniti": {
          "vitae": "labore",
          "alias": "velit",
          "amet": "earum",
          "tenetur": "labore",
        },
        "quod": {
          "est": "quis",
          "commodi": "voluptatibus",
        },
      },
      discoverable: false,
      displayName: "velit",
      id: "28795825-67ab-47b4-8e94-b0e8e1bd8701",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Tanya Stroman",
      publicKey: "autem",
      relyingPartyId: "laboriosam",
      signCount: 666593,
      tenantId: "1ebaf3a2-7388-4564-a376-0a9f7efd2d7a",
      transports: [
        "ipsa",
      ],
      userAgent: "dolores",
      userId: "ef9fc0dc-b6bc-4c78-a629-3e40e253fca9",
    },
    {
      algorithm: CoseAlgorithmIdentifierEnum.Ps384,
      attestationType: AttestationTypeEnum.AttestationCa,
      authenticatorSupportsUserVerification: false,
      credentialId: "illum",
      data: {
        "fugit": {
          "adipisci": "ullam",
          "tenetur": "libero",
          "vitae": "placeat",
          "cum": "odit",
        },
        "necessitatibus": {
          "voluptatum": "error",
          "nemo": "tenetur",
          "nisi": "officia",
          "non": "aliquam",
        },
        "delectus": {
          "eum": "non",
          "voluptatem": "est",
          "aspernatur": "officia",
          "aspernatur": "recusandae",
        },
        "amet": {
          "dolores": "quia",
          "ipsam": "perferendis",
          "adipisci": "et",
          "optio": "nihil",
        },
      },
      discoverable: false,
      displayName: "necessitatibus",
      id: "b3aa4939-10d3-4446-9df8-c12b14c28018",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Jeannette Cassin",
      publicKey: "sunt",
      relyingPartyId: "voluptatum",
      signCount: 145525,
      tenantId: "f311f39d-2772-428d-9b8e-0fb2cc04ef83",
      transports: [
        "nemo",
        "delectus",
        "dolore",
      ],
      userAgent: "odio",
      userId: "b55e3923-2bfd-4e7a-be7f-759c39c195c0",
    },
    {
      algorithm: CoseAlgorithmIdentifierEnum.Es512,
      attestationType: AttestationTypeEnum.None,
      authenticatorSupportsUserVerification: false,
      credentialId: "voluptate",
      data: {
        "maxime": {
          "et": "delectus",
          "quia": "doloribus",
          "officia": "voluptate",
        },
        "qui": {
          "delectus": "sapiente",
        },
      },
      discoverable: false,
      displayName: "vitae",
      id: "00c50cca-5988-40a1-9338-fd50be1215cb",
      insertInstant: 1659380719000,
      lastUseInstant: 1659380719000,
      name: "Clay Gusikowski",
      publicKey: "ex",
      relyingPartyId: "adipisci",
      signCount: 279307,
      tenantId: "7a0ca943-0221-4dd2-9fe6-5b9dbfa348c7",
      transports: [
        "quibusdam",
        "adipisci",
      ],
      userAgent: "repudiandae",
      userId: "58ab91e6-31c1-41e9-9f4f-6220b786d91f",
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
import { OAuthErrorReasonEnum, OAuthErrorTypeEnum, TOTPAlgorithmEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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

sdk.sdk.issueJWTWithId("minima", "dolores").then((res: IssueJWTWithIdResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginPingWithId("nulla", "consequuntur", "nesciunt", "perspiciatis").then((res: LoginPingWithIdResponse) => {
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginPingWithRequestWithId({
  applicationId: "7ad5caad-ebb0-4f60-8321-968a12097a34",
  ipAddress: "debitis",
  metaData: {
    data: {
      "dicta": {
        "aspernatur": "modi",
        "illo": "quo",
        "voluptas": "doloribus",
        "tenetur": "cum",
      },
      "dignissimos": {
        "aliquam": "perferendis",
      },
      "quaerat": {
        "porro": "error",
      },
    },
    device: {
      description: "alias",
      lastAccessedAddress: "repellat",
      lastAccessedInstant: 1659380719000,
      name: "Eileen Kassulke",
      type: DeviceTypeEnum.Browser,
    },
    scopes: [
      "illo",
      "omnis",
      "facere",
      "voluptatum",
    ],
  },
  newDevice: false,
  noJWT: false,
  userId: "aef63f7b-31a5-4ed6-b9f1-3afdaee834bb",
}, "officia").then((res: LoginPingWithRequestWithIdResponse) => {
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.loginWithId({
  applicationId: "958580e3-7ee5-44a9-ae98-ed9ace0c45fb",
  ipAddress: "unde",
  loginId: "libero",
  metaData: {
    data: {
      "unde": {
        "deleniti": "nam",
        "aliquid": "hic",
        "quibusdam": "sapiente",
        "consectetur": "eligendi",
      },
      "amet": {
        "a": "sit",
      },
    },
    device: {
      description: "consequatur",
      lastAccessedAddress: "quibusdam",
      lastAccessedInstant: 1659380719000,
      name: "Guadalupe Kub",
      type: DeviceTypeEnum.Other,
    },
    scopes: [
      "sunt",
      "magni",
      "doloremque",
    ],
  },
  newDevice: false,
  noJWT: false,
  oneTimePassword: "odio",
  password: "atque",
  twoFactorTrustId: "animi",
}, "et").then((res: LoginWithIdResponse) => {
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
import { ClientAuthenticationMethodEnum, IdentityProviderTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.lookupIdentityProviderWithId("nisi").then((res: LookupIdentityProviderWithIdResponse) => {
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

sdk.sdk.modifyActionWithId("recusandae", {
  action: {
    actioneeUserId: "d36b1bc2-1a03-4366-acd9-150c51b33478",
    actionerUserId: "15cea3ea-e4b5-489f-aff6-21e8093f4cf2",
    applicationIds: [
      "f551e49a-91d2-4c2c-bb88-e0892c617d40",
      "35184c54-62f0-458d-9a8f-eb479309d9e7",
    ],
    comment: "quisquam",
    emailUser: false,
    expiry: 1659380719000,
    notifyUser: false,
    option: "voluptate",
    reasonId: "e264520f-2391-4ceb-84d3-03973ef344b0",
    userActionId: "257f45f0-760d-4810-81e4-4f5d845c2758",
  },
  broadcast: false,
  eventInfo: {
    data: {
      "eum": {
        "doloremque": "non",
        "dolorum": "excepturi",
        "sunt": "perferendis",
      },
      "aperiam": {
        "voluptas": "neque",
        "nemo": "voluptas",
        "quos": "iure",
      },
    },
    deviceDescription: "non",
    deviceName: "placeat",
    deviceType: "doloremque",
    ipAddress: "officiis",
    location: {
      city: "Port Orvilleboro",
      country: "Antigua and Barbuda",
      displayString: "facere",
      latitude: 4871.87,
      longitude: 6496.66,
      region: "vero",
      zipcode: "81590-1761",
    },
    os: "aut",
    userAgent: "dignissimos",
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.passwordlessLoginWithId({
  applicationId: "e235dcc7-6590-45fc-85da-c9bbe0cc13aa",
  code: "labore",
  ipAddress: "tempora",
  metaData: {
    data: {
      "aut": {
        "cum": "nemo",
        "ab": "laborum",
        "occaecati": "distinctio",
      },
    },
    device: {
      description: "laudantium",
      lastAccessedAddress: "tenetur",
      lastAccessedInstant: 1659380719000,
      name: "Crystal Schoen",
      type: DeviceTypeEnum.Desktop,
    },
    scopes: [
      "porro",
      "esse",
    ],
  },
  newDevice: false,
  noJWT: false,
  twoFactorTrustId: "eum",
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchApplicationRoleWithId("illo", "iure", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "6072b9ee-d750-4c6d-91e4-7aee9ca3d575",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "ipsum",
      applicationIds: [
        "463579ff-aa46-43bd-9ee5-dd327d667a0e",
        "691dc2e1-b4ac-4cf7-9551-1c2d8634d5b1",
      ],
      enabled: false,
      url: "soluta",
      usernameModeration: {
        applicationId: "42fc13e7-0db3-4613-93fc-047b3c42eaaf",
        enabled: false,
      },
    },
    data: {
      "ipsa": {
        "praesentium": "mollitia",
        "officiis": "optio",
        "officia": "ut",
      },
      "incidunt": {
        "non": "exercitationem",
        "labore": "velit",
        "doloremque": "ratione",
        "et": "iusto",
      },
      "a": {
        "rem": "sunt",
        "inventore": "dolorem",
        "voluptatum": "molestias",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "45c5046f-a563-4be9-b882-75bcb1bc13e6",
      emailVerificationEmailTemplateId: "67937eeb-809c-4e30-a6de-e6e49358d584",
      emailVerifiedEmailTemplateId: "e5873794-84b2-460f-85d0-0c075be38501",
      forgotPasswordEmailTemplateId: "77f01a19-09b7-47b7-95b3-1518625bfbd1",
      loginIdInUseOnCreateEmailTemplateId: "34f2a39b-b900-4bfd-8048-ad2ec243032c",
      loginIdInUseOnUpdateEmailTemplateId: "abe7aa80-cd0c-430c-8e5e-ddb8d7219f48",
      loginNewDeviceEmailTemplateId: "49fa7a01-0876-4d01-bba4-862d152c1d6a",
      loginSuspiciousEmailTemplateId: "6eeabc12-cb7a-4005-b354-122b4552bdcd",
      passwordResetSuccessEmailTemplateId: "f92248e6-cce1-4eb6-8fbd-9ec9bb8ed802",
      passwordUpdateEmailTemplateId: "2cb8d02f-c27f-42ed-8704-1b5876e067ce",
      passwordlessEmailTemplateId: "0f861de7-9b3b-487a-a416-d1fc893f7e6b",
      setPasswordEmailTemplateId: "6a27f3f7-e20d-4ac1-b694-4de6f22945ab",
      twoFactorMethodAddEmailTemplateId: "b37659be-79ae-4a98-a607-25d933ffa6d1",
      twoFactorMethodRemoveEmailTemplateId: "cb00c1e8-a874-4ff3-99a4-9ffbbc590161",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 938344,
    },
    formConfiguration: {
      adminRegistrationFormId: "ea745010-6cfb-4836-b022-e5bdbee9f2ad",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "9f852def-3caf-4c09-8af2-e1613eb541e8",
    },
    id: "49bdb350-4fda-4502-9901-ca945d2d1698",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "08f746cf-423f-4e8d-895a-4bbe57b78644",
      enabled: false,
      idTokenKeyId: "e7e3feb0-a077-4990-b071-72c5bcc73980",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 819750,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 713675,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "c6643b7e-290d-40b6-9623-e98756afaf9b",
      idTokenPopulateId: "63ad797c-39e6-406d-b8e0-f2b1bff93366",
      samlv2PopulateId: "2a082185-e304-4df1-a3a4-8a1706ac8d8e",
      selfServiceRegistrationValidationId: "0c6fa2cf-fe2a-4ab5-8980-39b6d2272680",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "a3d19ac2-4053-4d4a-833e-5f38bcff3bd9",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Required,
      sms: {
        templateId: "37dd418b-8d99-4cc4-ae9c-944de3ec9302",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.Any,
    },
    name: "Gina Wunsch",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "corporis",
        "iusto",
        "accusantium",
      ],
      authorizedRedirectURLs: [
        "quas",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.NotRequiredWhenUsingPKCE,
      clientId: "optio",
      clientSecret: "aut",
      debug: false,
      deviceVerificationURL: "quae",
      enabledGrants: [
        "cumque",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "molestias",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.Required,
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
      formId: "51f9327a-37af-4ae9-830c-ee8d3022838a",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 450116,
      },
    },
    roles: [
      {
        description: "incidunt",
        id: "507bfe7b-08d6-47a0-a878-f9420835728f",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Sergio Hoeger",
      },
      {
        description: "nesciunt",
        id: "9893daeb-cd44-4194-98ad-d3608a685703",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Julia Jakubowski Jr.",
      },
    ],
    samlv2Configuration: {
      audience: "qui",
      authorizedRedirectURLs: [
        "unde",
        "magnam",
      ],
      callbackURL: "doloremque",
      debug: false,
      defaultVerificationKeyId: "88d11bcf-78e5-480a-9b59-4c0c8a9590ab",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "quod",
      },
      issuer: "sint",
      keyId: "00cf231f-2d06-46a5-866b-2212bd1d9b7f",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.AllParticipants,
        defaultVerificationKeyId: "eaac2895-851a-4e58-af5f-cc083715de56",
        keyId: "92ab0a81-a8bf-4c13-95f4-ecdb114b3e4e",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "109e6ecf-c8e2-4119-b58d-190d206f672c",
          url: "ut",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      },
      logoutURL: "voluptas",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocationEnum.Response,
    },
    state: ObjectStateEnum.Active,
    tenantId: "77269c70-a6bf-4345-b2fe-f094bafcf78b",
    themeId: "3da6e5d9-bb0f-47c2-8665-fdc84e421e96",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Gated,
    },
    verificationEmailTemplateId: "e87bdd65-38c0-4c03-8755-b9ece5d61c10",
    verificationStrategy: VerificationStrategyEnum.FormField,
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
      "ea": {
        "facere": "sed",
        "quos": "autem",
        "minus": "porro",
      },
      "blanditiis": {
        "perferendis": "aperiam",
        "voluptates": "dicta",
      },
      "officia": {
        "ea": "illum",
        "totam": "sit",
      },
    },
    deviceDescription: "at",
    deviceName: "sequi",
    deviceType: "earum",
    ipAddress: "ex",
    location: {
      city: "Effieport",
      country: "Republic of Korea",
      displayString: "necessitatibus",
      latitude: 9997.23,
      longitude: 2084.27,
      region: "rem",
      zipcode: "22913-3766",
    },
    os: "illum",
    userAgent: "perspiciatis",
  },
  role: {
    description: "distinctio",
    id: "a6078d37-4829-43f5-a2e9-91d8271a256c",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Ruth DuBuque PhD",
  },
  sourceApplicationId: "5607e3db-8da3-4df9-844e-a3fd58eed4ee",
}, "neque").then((res: PatchApplicationRoleWithIdResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchApplicationWithId("beatae", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "cc1b6b93-1afe-4010-92db-c668096b1de3",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "necessitatibus",
      applicationIds: [
        "d7558947-3927-4e89-92d2-029e64347569",
        "9f33b3de-b4d7-4770-b90f-255f1220b5f6",
        "9638656d-a329-40ad-9130-c7574cc962cb",
      ],
      enabled: false,
      url: "cum",
      usernameModeration: {
        applicationId: "c0cba3aa-7558-4e81-9a75-01ba91cd62d1",
        enabled: false,
      },
    },
    data: {
      "laborum": {
        "excepturi": "hic",
      },
      "dolorum": {
        "autem": "optio",
        "dolores": "aut",
      },
      "eveniet": {
        "asperiores": "quaerat",
        "delectus": "expedita",
        "fuga": "quia",
        "blanditiis": "maxime",
      },
      "molestias": {
        "aperiam": "nihil",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "40daf1ab-1657-4b38-ad1c-fd902eaa79b7",
      emailVerificationEmailTemplateId: "970fe1fe-bb04-46fb-af0b-f544307a55ba",
      emailVerifiedEmailTemplateId: "7fd555c2-7155-42db-ac68-d1f9caf60a1e",
      forgotPasswordEmailTemplateId: "a376718d-fc88-4fd0-ae15-7c4599716192",
      loginIdInUseOnCreateEmailTemplateId: "cae9c159-4549-49bd-994b-7e62ff9d13c1",
      loginIdInUseOnUpdateEmailTemplateId: "bf4532b2-e6a1-4c4a-8f32-d453cffeeb16",
      loginNewDeviceEmailTemplateId: "149a3fec-66c9-440f-8121-469161bc3816",
      loginSuspiciousEmailTemplateId: "7a3c21ec-aac9-4f10-b35e-967f2a0a66c6",
      passwordResetSuccessEmailTemplateId: "ba0c829e-3b8d-4e6b-af53-248000c3513b",
      passwordUpdateEmailTemplateId: "b6001e80-058f-4fd6-ab15-9d9ffc69bf5e",
      passwordlessEmailTemplateId: "2dbbc19e-403e-477b-b706-7fea54fc015c",
      setPasswordEmailTemplateId: "0fba651b-799f-4c95-9dac-7d8a04ef1f81",
      twoFactorMethodAddEmailTemplateId: "b841cb7a-907d-483a-8534-d942e3509fbb",
      twoFactorMethodRemoveEmailTemplateId: "ffded733-1968-4894-8869-56d9f6e4f483",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 398452,
    },
    formConfiguration: {
      adminRegistrationFormId: "0334b9fc-dd5c-4eeb-9826-60cc4f299a51",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "5617c21a-0ec8-47d8-ac7b-78bd0053a6bc",
    },
    id: "3e3ad59c-601e-47cb-a47d-92d2013d94eb",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "473c5861-e646-4149-8f14-57edfa76687d",
      enabled: false,
      idTokenKeyId: "8572b4b2-142a-483a-850e-51ca023d0818",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 606949,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 705304,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "ef2b7437-c5ea-496d-87e9-65f3bfe9d9a9",
      idTokenPopulateId: "1ed2b8f8-281d-4815-bfeb-27c367a77004",
      samlv2PopulateId: "03a676a4-7142-44be-b350-20462c33a761",
      selfServiceRegistrationValidationId: "4398e50b-91a4-46fe-8260-2d860d3f01ad",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "9c6c47c9-9360-42bd-a240-0794d81668d9",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Required,
      sms: {
        templateId: "93a4baf3-b5ec-4b9f-9262-398cf870d8a3",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.This,
    },
    name: "Noah Stehr",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "labore",
        "vero",
        "aspernatur",
        "cum",
      ],
      authorizedRedirectURLs: [
        "voluptates",
        "corporis",
        "sequi",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.ExactMatch,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.NotRequiredWhenUsingPKCE,
      clientId: "suscipit",
      clientSecret: "blanditiis",
      debug: false,
      deviceVerificationURL: "excepturi",
      enabledGrants: [
        "voluptatibus",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "quo",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.Required,
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
      formId: "ee449497-43be-4eb6-a3e2-2544a1bdd3b7",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 623582,
      },
    },
    roles: [
      {
        description: "porro",
        id: "dd8db393-a967-4a50-be3d-d891bec879f9",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Dora Grady",
      },
      {
        description: "unde",
        id: "72ec853f-59fe-4385-a4bb-c3cd5fd667fc",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mr. Ron Littel",
      },
      {
        description: "cupiditate",
        id: "8d634735-812e-4217-858c-e6bed21e92e3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Tracy Von",
      },
      {
        description: "autem",
        id: "2d0a5110-396e-4f30-b708-75ca7c673e82",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Cory Lowe",
      },
    ],
    samlv2Configuration: {
      audience: "ab",
      authorizedRedirectURLs: [
        "veritatis",
        "beatae",
        "minus",
        "accusantium",
      ],
      callbackURL: "delectus",
      debug: false,
      defaultVerificationKeyId: "3a8045a3-d056-4c63-8dde-0691b6958887",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "soluta",
      },
      issuer: "vero",
      keyId: "89912afc-d273-48e3-b813-e2f67bd73c74",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.AllParticipants,
        defaultVerificationKeyId: "1b26c203-a2c5-48d0-b5a0-feb9301edc4e",
        keyId: "ade4878e-6773-4a79-bd8f-36ff3acbf60b",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "3d299109-33e6-4f77-be6e-8d12ae0859aa",
          url: "magnam",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      },
      logoutURL: "ducimus",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.ExclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocationEnum.Assertion,
    },
    state: ObjectStateEnum.Inactive,
    tenantId: "7d7ec3af-0580-4148-ab42-8c9e25659686",
    themeId: "80ecb84a-7f1c-443f-9b2f-6698cfa9877b",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Gated,
    },
    verificationEmailTemplateId: "91fbf7c9-4691-4fa0-b187-da6215d0fbd3",
    verificationStrategy: VerificationStrategyEnum.ClickableLink,
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
      "minima": {
        "quos": "culpa",
        "quaerat": "eos",
        "maiores": "qui",
      },
      "officia": {
        "reiciendis": "recusandae",
        "ipsa": "sunt",
      },
      "dolor": {
        "aliquam": "non",
        "esse": "libero",
        "nobis": "quaerat",
      },
      "repellat": {
        "earum": "laudantium",
        "architecto": "esse",
        "neque": "maxime",
        "in": "vel",
      },
    },
    deviceDescription: "debitis",
    deviceName: "nulla",
    deviceType: "perferendis",
    ipAddress: "maiores",
    location: {
      city: "Hammesfurt",
      country: "Tajikistan",
      displayString: "fugiat",
      latitude: 7026.07,
      longitude: 6022.38,
      region: "nostrum",
      zipcode: "94863",
    },
    os: "quidem",
    userAgent: "itaque",
  },
  role: {
    description: "accusantium",
    id: "ba8c4b41-57e6-495d-b44c-e0081e14774d",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Ms. Mark Doyle",
  },
  sourceApplicationId: "679db960-6fc0-407e-bede-b721761dff7b",
}, "excepturi").then((res: PatchApplicationWithIdResponse) => {
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
import { ConnectorTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchConnectorWithId("autem", {
  connector: {
    data: {
      "ex": {
        "iusto": "quaerat",
      },
    },
    debug: false,
    id: "feb92589-4c7f-4df1-b1d5-6ed394800393",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Wilbur Schamberger",
    type: ConnectorTypeEnum.FusionAuth,
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

sdk.sdk.patchConsentWithId("praesentium", {
  consent: {
    consentEmailTemplateId: "34eec864-5ff2-43c0-b4ca-938e73136a4d",
    countryMinimumAgeForSelfConsent: {
      "voluptates": "rerum",
      "necessitatibus": "libero",
      "soluta": "cum",
      "soluta": "molestias",
    },
    data: {
      "nam": {
        "eos": "et",
        "cum": "aperiam",
        "aperiam": "neque",
        "commodi": "distinctio",
      },
      "molestias": {
        "consequuntur": "facere",
      },
      "consectetur": {
        "accusantium": "atque",
        "et": "facere",
      },
    },
    defaultMinimumAgeForSelfConsent: 167086,
    emailPlus: {
      emailTemplateId: "f192c960-5811-44a6-9968-00efcc05d57b",
      enabled: false,
      maximumTimeToSendEmailInHours: 274324,
      minimumTimeToSendEmailInHours: 533521,
    },
    id: "82f5714e-9a3a-47b5-964b-f1388395a839",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Gabriel Mayer Sr.",
    values: [
      "fugit",
      "corporis",
      "iure",
    ],
  },
}, "delectus").then((res: PatchConsentWithIdResponse) => {
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

sdk.sdk.patchEmailTemplateWithId("ullam", {
  emailTemplate: {
    defaultFromName: "ut",
    defaultHtmlTemplate: "in",
    defaultSubject: "et",
    defaultTextTemplate: "animi",
    fromEmail: "autem",
    id: "d01ef5d1-4dce-42fe-9acd-f67d772c2083",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "provident": "ratione",
      "culpa": "officiis",
      "beatae": "doloremque",
    },
    localizedHtmlTemplates: {
      "consectetur": "tempore",
    },
    localizedSubjects: {
      "ut": "id",
      "fuga": "necessitatibus",
      "rem": "doloremque",
      "illum": "voluptas",
    },
    localizedTextTemplates: {
      "cum": "quas",
      "provident": "dolore",
      "necessitatibus": "nesciunt",
    },
    name: "Frances Kuvalis",
  },
}, "ipsam").then((res: PatchEmailTemplateWithIdResponse) => {
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

sdk.sdk.patchEntityTypeWithId("non", {
  entityType: {
    data: {
      "voluptatum": {
        "iste": "neque",
        "excepturi": "culpa",
        "qui": "ipsam",
        "incidunt": "alias",
      },
      "perspiciatis": {
        "ut": "quae",
        "nulla": "laborum",
        "magnam": "esse",
      },
    },
    id: "394a6a28-5ece-4ccc-baad-c24b0f7a00c5",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "65521dfb-819f-4e4d-86e8-d2df4ed9c41e",
      enabled: false,
      timeToLiveInSeconds: 83138,
    },
    lastUpdateInstant: 1659380719000,
    name: "Lydia Abshire",
    permissions: [
      {
        data: {
          "quo": {
            "harum": "harum",
          },
          "expedita": {
            "hic": "quasi",
            "dolores": "labore",
            "doloribus": "repellendus",
          },
          "error": {
            "vitae": "laboriosam",
            "iste": "odit",
            "aut": "laudantium",
          },
          "ea": {
            "suscipit": "ab",
            "commodi": "dolorem",
            "ratione": "ut",
          },
        },
        description: "hic",
        id: "80e9a801-c402-4da6-9ee9-650a51b013fd",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Agnes Bogan",
      },
      {
        data: {
          "officiis": {
            "quibusdam": "illo",
            "alias": "hic",
            "non": "assumenda",
          },
          "necessitatibus": {
            "iusto": "ratione",
          },
        },
        description: "necessitatibus",
        id: "06f3d636-9dd5-4cf3-9899-3282d2fffb2b",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Miss Carlos Buckridge",
      },
      {
        data: {
          "sit": {
            "officiis": "consectetur",
            "excepturi": "eveniet",
          },
          "veritatis": {
            "dolore": "tenetur",
            "inventore": "labore",
            "nam": "dignissimos",
            "dolorum": "recusandae",
          },
          "molestias": {
            "officia": "reprehenderit",
            "deleniti": "explicabo",
            "aut": "error",
          },
        },
        description: "eligendi",
        id: "933f7295-4610-4623-b7f7-fe43317dbe2d",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Jermaine Hirthe",
      },
      {
        data: {
          "accusantium": {
            "delectus": "sapiente",
            "quos": "illo",
            "at": "tenetur",
          },
          "similique": {
            "officiis": "tenetur",
          },
        },
        description: "officia",
        id: "6a3775ac-e3ff-40f8-b75c-1215b154024a",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Mr. Roderick Jones",
      },
    ],
  },
  permission: {
    data: {
      "tempore": {
        "eaque": "saepe",
        "consectetur": "aliquam",
        "facilis": "laboriosam",
        "a": "laudantium",
      },
      "incidunt": {
        "in": "aut",
      },
      "dolorum": {
        "delectus": "accusamus",
      },
    },
    description: "quos",
    id: "3d0f1002-267c-4f19-b927-482877981cbd",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Mrs. Amanda Stamm",
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

sdk.sdk.patchGroupWithId("unde", {
  group: {
    data: {
      "dolorem": {
        "quis": "quis",
        "autem": "unde",
      },
      "ratione": {
        "recusandae": "eligendi",
        "ab": "vitae",
        "laboriosam": "tempora",
      },
    },
    id: "14759c84-2016-45cc-9793-569c9e95b92c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Janet Blanda I",
    roles: [
      {
        description: "et",
        id: "e4c24c4c-b784-40be-b933-eb9e36fe0ec7",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Marcus Zulauf",
      },
      {
        description: "placeat",
        id: "204a0a3b-d149-48b7-b9f1-8c45470fc987",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Ollie Beier",
      },
    ],
    tenantId: "f89c380c-3f93-4027-9df8-9e9ef2b89422",
  },
  roleIds: [
    "9aeba140-dc2c-489f-a84e-ca59224021f1",
  ],
}, "possimus").then((res: PatchGroupWithIdResponse) => {
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
  CanonicalizationMethodEnum,
  ClientAuthenticationMethodEnum,
  IdentityProviderLinkingStrategyEnum,
  IdentityProviderLoginMethodEnum,
  IdentityProviderTypeEnum,
  SAMLv2DestinationAssertionPolicyEnum,
  SteamAPIModeEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchIdentityProviderWithId("unde", {
  identityProvider: {
    applicationConfiguration: {
      "praesentium": {
        createRegistration: false,
        data: {
          "maxime": {
            "ad": "suscipit",
            "ad": "voluptatem",
          },
        },
        relyingPartyApplicationId: "iusto",
        relyingPartyURL: "nisi",
      },
      "veniam": {
        createRegistration: false,
        data: {
          "unde": {
            "beatae": "inventore",
            "numquam": "hic",
            "culpa": "nostrum",
          },
        },
        relyingPartyApplicationId: "quas",
        relyingPartyURL: "provident",
      },
      "illo": {
        createRegistration: false,
        data: {
          "ut": {
            "voluptatibus": "natus",
            "a": "aliquid",
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
          "quis": {
            "sit": "aspernatur",
            "minima": "illo",
          },
        },
        relyingPartyApplicationId: "laudantium",
        relyingPartyURL: "quisquam",
      },
      "velit": {
        createRegistration: false,
        data: {
          "vitae": {
            "magni": "vel",
            "repellat": "maiores",
          },
        },
        relyingPartyApplicationId: "tempore",
        relyingPartyURL: "illo",
      },
    },
    data: {
      "vel": {
        "accusantium": "deleniti",
        "ratione": "sapiente",
        "omnis": "similique",
        "facere": "quibusdam",
      },
      "hic": {
        "eius": "dolorem",
        "officiis": "quisquam",
        "quas": "officiis",
        "fugiat": "velit",
      },
      "unde": {
        "impedit": "quam",
        "placeat": "delectus",
        "sequi": "eum",
        "at": "inventore",
      },
      "alias": {
        "laboriosam": "perferendis",
      },
    },
    debug: false,
    id: "b84f426d-e33f-4b00-83ba-25acd2b8a513",
    insertInstant: 1659380719000,
    lambdaConfiguration: {
      reconcileId: "20fda6c3-e724-4cc0-ad7c-7f01f1147f71",
    },
    lastUpdateInstant: 1659380719000,
    linkingStrategy: IdentityProviderLinkingStrategyEnum.LinkByUsername,
    name: "Stewart Konopelski",
    relyingPartyApplicationId: "voluptas",
    relyingPartyURL: "eaque",
    tenantConfiguration: {
      "consequuntur": {
        data: {
          "enim": {
            "dolorum": "sequi",
            "quisquam": "nostrum",
            "iste": "quia",
            "consequuntur": "reiciendis",
          },
          "dolorum": {
            "rerum": "provident",
            "voluptates": "totam",
          },
          "numquam": {
            "fuga": "ducimus",
            "doloribus": "laboriosam",
            "in": "odio",
            "optio": "necessitatibus",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 116836,
        },
      },
      "odio": {
        data: {
          "a": {
            "praesentium": "soluta",
          },
          "sint": {
            "mollitia": "atque",
            "provident": "accusamus",
          },
          "exercitationem": {
            "maiores": "commodi",
            "consequatur": "reprehenderit",
            "earum": "atque",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 957526,
        },
      },
      "id": {
        data: {
          "inventore": {
            "rerum": "deserunt",
          },
          "voluptate": {
            "quae": "ut",
            "aliquid": "illum",
            "maiores": "natus",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 141458,
        },
      },
    },
    type: IdentityProviderTypeEnum.Xbox,
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
      apiKey: "explicabo",
      applicationIds: [
        "6de9bf19-bc8e-4c5e-98a3-d09ffdefed71",
      ],
      enabled: false,
      url: "ipsam",
      usernameModeration: {
        applicationId: "e62c5b66-0314-4e6e-9d92-d4542abd7e75",
        enabled: false,
      },
    },
    kafka: {
      defaultTopic: "ullam",
      enabled: false,
      producer: {
        "est": "quisquam",
        "totam": "iusto",
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchLambdaWithId("ducimus", {
  lambda: {
    body: "vero",
    debug: false,
    engineType: LambdaEngineTypeEnum.GraalJS,
    id: "66f888bf-5a9d-4f22-af28-6d19b87e0545",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Meghan Schultz",
    type: LambdaTypeEnum.GoogleReconcile,
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchMessageTemplateWithId("voluptatum", {
  messageTemplate: {
    data: {
      "veniam": {
        "cupiditate": "quas",
      },
      "qui": {
        "explicabo": "totam",
        "occaecati": "facere",
        "deserunt": "impedit",
      },
    },
    id: "49c1c698-987e-44df-91ff-6de26446b07a",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Jon Crooks",
    type: MessageTypeEnum.Sms,
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
import { MessengerTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchMessengerWithId("facere", {
  messenger: {
    data: {
      "odio": {
        "quos": "vero",
        "inventore": "maxime",
      },
      "consequuntur": {
        "repudiandae": "quia",
        "ab": "doloribus",
        "eligendi": "assumenda",
      },
      "eos": {
        "quibusdam": "delectus",
        "autem": "minima",
        "quibusdam": "at",
      },
      "at": {
        "quo": "provident",
        "ea": "inventore",
      },
    },
    debug: false,
    id: "e3342e2d-cfd9-47d3-bbbd-1aa502870a2f",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Steven Franecki Sr.",
    transport: "nemo",
    type: MessengerTypeEnum.Generic,
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchRegistrationWithId("facere", {
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "hic": {
        "dolorem": "culpa",
        "magnam": "voluptatum",
        "ipsam": "recusandae",
      },
      "recusandae": {
        "harum": "eaque",
        "et": "sint",
        "delectus": "consequuntur",
      },
      "ut": {
        "in": "vel",
      },
    },
    deviceDescription: "doloribus",
    deviceName: "voluptatibus",
    deviceType: "vel",
    ipAddress: "facere",
    location: {
      city: "Lefflerfort",
      country: "American Samoa",
      displayString: "at",
      latitude: 904.33,
      longitude: 4502.19,
      region: "repudiandae",
      zipcode: "23050",
    },
    os: "cum",
    userAgent: "voluptatum",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "a8995d5a-cd9d-4959-bc2f-f46f46af42ce",
    authenticationToken: "ipsa",
    cleanSpeakId: "4cb5d22e-2436-4b9f-96e1-67910316d4ad",
    data: {
      "necessitatibus": {
        "accusamus": "recusandae",
        "repudiandae": "repellat",
        "dolorem": "facilis",
        "exercitationem": "assumenda",
      },
      "rerum": {
        "modi": "ducimus",
        "numquam": "corrupti",
        "eius": "eveniet",
        "natus": "totam",
      },
      "esse": {
        "facere": "tempore",
        "cum": "molestiae",
      },
      "labore": {
        "corporis": "harum",
        "laborum": "nulla",
        "nostrum": "accusamus",
        "animi": "ut",
      },
    },
    id: "fe7dbf80-afc7-4c92-a05a-9b735fbc0801",
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
      "aliquam",
      "dicta",
      "ut",
    ],
    timezone: "America/Denver",
    tokens: {
      "sit": "autem",
      "nemo": "natus",
      "laboriosam": "asperiores",
    },
    username: "Werner73",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
    cleanSpeakId: "ddef7e81-1914-44e3-96bf-4e7abdf1fab0",
    connectorId: "0c1eeb67-91d4-4d26-990b-e7c8687cbc7e",
    data: {
      "hic": {
        "hic": "fuga",
      },
      "aut": {
        "nesciunt": "quis",
        "blanditiis": "dignissimos",
        "illo": "eius",
        "repellat": "deserunt",
      },
      "pariatur": {
        "aperiam": "esse",
      },
      "officiis": {
        "ad": "fugit",
        "delectus": "doloribus",
        "veniam": "eaque",
      },
    },
    email: "Eugene_Green@gmail.com",
    encryptionScheme: "magnam",
    expiry: 1659380719000,
    factor: 558272,
    firstName: "Heber",
    fullName: "voluptatum",
    id: "416b2548-9a6d-454f-b2ac-91d3411f49e1",
    imageUrl: "laudantium",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Ebert",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "earum": {
            "perferendis": "iusto",
            "aliquid": "consequuntur",
            "nostrum": "consectetur",
            "quibusdam": "similique",
          },
          "veniam": {
            "unde": "harum",
            "esse": "non",
            "incidunt": "est",
          },
        },
        groupId: "f169529d-548e-47ba-a7c4-aec4fb41d769",
        id: "d7bd7b0d-5c32-4fdf-a21b-22fe275332aa",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "f4afe52e-9e30-49e2-a21d-ca470fc0af15",
          connectorId: "0eab19ba-f4f2-4fb4-a330-ecb367fa15f0",
          data: {
            "impedit": {
              "ex": "exercitationem",
            },
            "culpa": {
              "ex": "esse",
            },
          },
          email: "Tiana12@hotmail.com",
          encryptionScheme: "asperiores",
          expiry: 1659380719000,
          factor: 679079,
          firstName: "Leann",
          fullName: "nulla",
          id: "3160ff83-f2e2-4a1a-a5e0-152d17cc98b4",
          imageUrl: "reiciendis",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Sporer",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "minima",
          mobilePhone: "laboriosam",
          parentEmail: "placeat",
          password: "eveniet",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "76a0558b-f294-4ac3-a4bf-aa8c45ed486a",
              authenticationToken: "ab",
              cleanSpeakId: "b2bc8ff5-e6ec-4547-b3c0-5f78fd5c9e96",
              data: {
                "at": {
                  "error": "voluptatum",
                  "accusantium": "pariatur",
                },
                "commodi": {
                  "necessitatibus": "rerum",
                  "ea": "quidem",
                },
                "tenetur": {
                  "quidem": "nemo",
                  "quam": "facere",
                  "beatae": "adipisci",
                },
              },
              id: "b84922ff-819b-48ab-9f4c-6868428e6b0b",
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
                "saepe",
              ],
              timezone: "America/Denver",
              tokens: {
                "minima": "officiis",
                "dolores": "eveniet",
                "vero": "nulla",
                "ipsa": "hic",
              },
              username: "Jamie.Grimes33",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "244bfd94-e9ad-4de1-bb36-f7e58c6d4e72",
              authenticationToken: "cupiditate",
              cleanSpeakId: "4052a1f8-2e63-48d3-9933-76e2ded9880e",
              data: {
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
                "nulla": {
                  "iure": "quaerat",
                  "eum": "cupiditate",
                  "inventore": "repellendus",
                  "praesentium": "illum",
                },
                "aperiam": {
                  "molestiae": "neque",
                },
              },
              id: "77a80213-a47c-4a90-a83e-e9aac106fe0e",
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
                "nobis",
                "ex",
                "neque",
              ],
              timezone: "America/Denver",
              tokens: {
                "rem": "accusantium",
                "ratione": "unde",
                "commodi": "asperiores",
                "dolorem": "rerum",
              },
              username: "Verdie.Cole16",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "42c4cdab-b86c-4ccf-9984-eb14ee90b3f2",
              authenticationToken: "commodi",
              cleanSpeakId: "697d961b-ae9d-4100-87e3-c704526616c2",
              data: {
                "quis": {
                  "exercitationem": "deleniti",
                  "nostrum": "deserunt",
                  "minus": "odio",
                  "omnis": "corrupti",
                },
              },
              id: "3b9f9900-7ba0-4d66-adae-4272ec334bdb",
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
                "molestias",
              ],
              timezone: "America/Denver",
              tokens: {
                "possimus": "soluta",
              },
              username: "Evans83",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "0b9edb34-0059-4f09-b32f-77633dea03dc",
              authenticationToken: "fugit",
              cleanSpeakId: "9a08ef97-6d7f-4e59-bcbf-bf87b575b3fd",
              data: {
                "esse": {
                  "blanditiis": "voluptas",
                  "sunt": "distinctio",
                  "repudiandae": "alias",
                  "nesciunt": "adipisci",
                },
                "voluptas": {
                  "nemo": "minima",
                  "at": "corrupti",
                  "sed": "aperiam",
                },
              },
              id: "d18a4cba-2af3-4034-8436-827dc6cae60d",
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
                "eius",
                "aspernatur",
                "sapiente",
              ],
              timezone: "America/Denver",
              tokens: {
                "deleniti": "nobis",
              },
              username: "Erling23",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
          ],
          salt: "eum",
          tenantId: "d6c49e86-ecec-45e2-83a8-183fc0b3aa4d",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 984263,
                  timeStep: 152592,
                },
                email: "Austyn.Von74@hotmail.com",
                id: "644df39b-8ec0-46dc-9c09-121304ae332d",
                lastUsed: false,
                method: "eligendi",
                mobilePhone: "ab",
                secret: "eaque",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 689520,
                  timeStep: 486620,
                },
                email: "Eldon13@yahoo.com",
                id: "5a9d9876-fcfb-4dd6-9e03-493c158536aa",
                lastUsed: false,
                method: "molestiae",
                mobilePhone: "veritatis",
                secret: "et",
              },
            ],
            recoveryCodes: [
              "exercitationem",
              "repellendus",
            ],
          },
          uniqueUsername: "omnis",
          username: "Zion.Hansen",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "432c6ba7-dda6-4d15-825b-b498f8e13999",
      },
    ],
    middleName: "quisquam",
    mobilePhone: "qui",
    parentEmail: "iste",
    password: "quibusdam",
    passwordChangeReason: ChangePasswordReasonEnum.Breached,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "aa08db18-9d07-4f36-8d96-11419b599468",
        authenticationToken: "ea",
        cleanSpeakId: "d08e3997-87dc-466e-b9d6-bc9a43c39f53",
        data: {
          "earum": {
            "eum": "temporibus",
          },
        },
        id: "f2f7a72b-776a-472e-864e-e6cfbb06a36b",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "facilis",
          "cumque",
          "animi",
        ],
        timezone: "America/Denver",
        tokens: {
          "eos": "sint",
        },
        username: "Tracy43",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
    ],
    salt: "dolore",
    tenantId: "97219bd7-d6b6-4e37-b224-02847b3c7685",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 57125,
            timeStep: 412340,
          },
          email: "Reilly_Waters@gmail.com",
          id: "bd6a867c-b9d9-4f93-bed1-aec759a36094",
          lastUsed: false,
          method: "recusandae",
          mobilePhone: "atque",
          secret: "excepturi",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 858405,
            timeStep: 425084,
          },
          email: "Coy_Kovacek@gmail.com",
          id: "2abae415-9151-47fa-ad7f-100864ca9901",
          lastUsed: false,
          method: "dolor",
          mobilePhone: "et",
          secret: "error",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 294880,
            timeStep: 277871,
          },
          email: "Aliza_Gibson@yahoo.com",
          id: "1fcdd3b3-9822-4da9-9bb6-cb46d94500fc",
          lastUsed: false,
          method: "nemo",
          mobilePhone: "suscipit",
          secret: "amet",
        },
      ],
      recoveryCodes: [
        "mollitia",
        "fugit",
      ],
    },
    uniqueUsername: "repudiandae",
    username: "Lelia47",
    usernameStatus: ContentStatusEnum.Rejected,
    verified: false,
  },
}, "temporibus").then((res: PatchRegistrationWithIdResponse) => {
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
import { HTTPMethodEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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
        numberOfDaysToRetain: 973222,
      },
    },
    corsConfiguration: {
      allowCredentials: false,
      allowedHeaders: [
        "dolor",
      ],
      allowedMethods: [
        HTTPMethodEnum.Delete,
        HTTPMethodEnum.Put,
        HTTPMethodEnum.Put,
      ],
      allowedOrigins: [
        "quibusdam",
        "dolores",
        "consequatur",
      ],
      debug: false,
      enabled: false,
      exposedHeaders: [
        "eum",
        "quas",
      ],
      preflightMaxAgeInSeconds: 684764,
    },
    data: {
      "necessitatibus": {
        "quod": "minus",
        "autem": "voluptatibus",
      },
      "soluta": {
        "dolor": "sapiente",
      },
    },
    eventLogConfiguration: {
      numberToRetain: 606012,
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    loginRecordConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 42366,
      },
    },
    reportTimezone: "America/Denver",
    uiConfiguration: {
      headerColor: "officia",
      logoURL: "odio",
      menuFontColor: "mollitia",
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchTenantWithId("ipsam", {
  eventInfo: {
    data: {
      "porro": {
        "deleniti": "enim",
      },
    },
    deviceDescription: "aperiam",
    deviceName: "occaecati",
    deviceType: "hic",
    ipAddress: "praesentium",
    location: {
      city: "Christiansenfield",
      country: "Malaysia",
      displayString: "iure",
      latitude: 6976.58,
      longitude: 5649.12,
      region: "qui",
      zipcode: "54596-1754",
    },
    os: "soluta",
    userAgent: "perspiciatis",
  },
  sourceTenantId: "1104e6fd-cf0f-4862-8374-0eecac203eba",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "9d83c92f-26c3-49cb-8320-e8cc113db579",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethodEnum.HCaptchaEnterprise,
      enabled: false,
      secretKey: "corporis",
      siteKey: "sit",
      threshold: 3712.38,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "1b41745f-50c6-4078-b72a-d9b3d2604384",
        data: {
          "recusandae": {
            "suscipit": "quos",
          },
          "corrupti": {
            "enim": "ipsum",
            "distinctio": "iure",
          },
          "saepe": {
            "blanditiis": "facere",
            "error": "at",
            "illo": "earum",
            "expedita": "asperiores",
          },
          "quasi": {
            "recusandae": "eveniet",
          },
        },
        domains: [
          "sapiente",
          "earum",
        ],
        migrate: false,
      },
      {
        connectorId: "5963cee2-8227-4134-847a-e41d125bb9fa",
        data: {
          "blanditiis": {
            "praesentium": "sit",
          },
        },
        domains: [
          "consequatur",
        ],
        migrate: false,
      },
      {
        connectorId: "c40c2e8f-2e11-4eb3-b439-b5f5f7073202",
        data: {
          "illum": {
            "mollitia": "porro",
            "voluptatem": "provident",
          },
          "laudantium": {
            "beatae": "illo",
            "quia": "quia",
          },
          "atque": {
            "ipsum": "dicta",
            "facere": "necessitatibus",
            "ullam": "provident",
          },
          "adipisci": {
            "tempore": "laboriosam",
            "quidem": "assumenda",
          },
        },
        domains: [
          "laborum",
        ],
        migrate: false,
      },
    ],
    data: {
      "odio": {
        "libero": "possimus",
        "quidem": "quod",
        "vitae": "porro",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Jo Maggio",
          value: "quos",
        },
        {
          name: "Byron Bailey",
          value: "laboriosam",
        },
      ],
      debug: false,
      defaultFromEmail: "nisi",
      defaultFromName: "unde",
      emailUpdateEmailTemplateId: "a236c4bf-76b0-442a-95dc-a0eb986dabd3",
      emailVerifiedEmailTemplateId: "e819c1d4-0830-4bd3-b675-f76fc5a84c64",
      forgotPasswordEmailTemplateId: "8d8e2920-6119-498f-9f4c-2dd7633f5ae0",
      host: "blanditiis",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "5d0997c3-9547-48ae-9205-1b6c529d84c6",
      loginIdInUseOnUpdateEmailTemplateId: "f102a7a0-db1f-4b2f-9435-0dbbb358d0c6",
      loginNewDeviceEmailTemplateId: "046ec0ed-bf29-4e28-b65d-43faed96bb00",
      loginSuspiciousEmailTemplateId: "9f072858-0b7f-4074-ad83-46e849ae27cf",
      password: "accusantium",
      passwordResetSuccessEmailTemplateId: "20766954-9764-460f-8fd0-135ba43804f6",
      passwordUpdateEmailTemplateId: "9558b579-1a49-4ef0-b75b-5ada4f57ba39",
      passwordlessEmailTemplateId: "63de95a2-3d03-40a4-af46-e4434fb302f8",
      port: 708259,
      properties: "ad",
      security: EmailSecurityTypeEnum.None,
      setPasswordEmailTemplateId: "a149bc9a-b5c5-42f5-a3da-df1206388ab2",
      twoFactorMethodAddEmailTemplateId: "b82254b5-0aa4-46b0-b24b-586de4426f29",
      twoFactorMethodRemoveEmailTemplateId: "5ccc9787-d61f-4b70-be13-8931f8a3acc4",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehaviorEnum.Gated,
      },
      username: "Eden.Larkin",
      verificationEmailTemplateId: "3f9ceeb9-c4aa-449f-b71c-13f74818eedc",
      verificationStrategy: VerificationStrategyEnum.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "voluptatem": {
          enabled: false,
          transactionType: TransactionTypeEnum.SuperMajority,
        },
        "repellendus": {
          enabled: false,
          transactionType: TransactionTypeEnum.None,
        },
        "nostrum": {
          enabled: false,
          transactionType: TransactionTypeEnum.None,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 659899,
      changePasswordIdGenerator: {
        length: 195802,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      changePasswordIdTimeToLiveInSeconds: 369888,
      deviceCodeTimeToLiveInSeconds: 145615,
      deviceUserCodeIdGenerator: {
        length: 935335,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      emailVerificationIdGenerator: {
        length: 821580,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      emailVerificationIdTimeToLiveInSeconds: 108864,
      emailVerificationOneTimeCodeGenerator: {
        length: 846442,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 897237,
      oneTimePasswordTimeToLiveInSeconds: 409263,
      passwordlessLoginGenerator: {
        length: 794733,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      passwordlessLoginTimeToLiveInSeconds: 996022,
      pendingAccountLinkTimeToLiveInSeconds: 176523,
      registrationVerificationIdGenerator: {
        length: 113850,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      registrationVerificationIdTimeToLiveInSeconds: 849678,
      registrationVerificationOneTimeCodeGenerator: {
        length: 829163,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 449494,
      setupPasswordIdGenerator: {
        length: 758082,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      setupPasswordIdTimeToLiveInSeconds: 629919,
      trustTokenTimeToLiveInSeconds: 767976,
      twoFactorIdTimeToLiveInSeconds: 871668,
      twoFactorOneTimeCodeIdGenerator: {
        length: 945254,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 915569,
      twoFactorTrustIdTimeToLiveInSeconds: 433418,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 651191,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 96908,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 613303,
      actionDurationUnit: ExpiryUnitEnum.Years,
      emailUser: false,
      resetCountInSeconds: 851388,
      tooManyAttempts: 770493,
      userActionId: "b76f4951-4361-4f4e-9463-30fff93fb722",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "af22f182-8b32-4291-b76e-587944d6f683",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 487223,
      enabled: false,
      familyRequestEmailTemplateId: "d9d1c4bc-999d-4158-9a74-4a4c687fad59",
      maximumChildAge: 730890,
      minimumOwnerAge: 758513,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "c4e2b92c-1904-44c5-8550-c210afe54b59",
    },
    formConfiguration: {
      adminUserFormId: "3c0dc6b7-d06a-4c3e-938b-7e9dfec7ee91",
    },
    httpSessionMaxInactiveInterval: 925808,
    id: "8c2af3e4-c4c3-413d-b78b-48b4b8a7bf3e",
    insertInstant: 1659380719000,
    issuer: "mollitia",
    jwtConfiguration: {
      accessTokenKeyId: "f89fe4b0-149a-46dd-ab48-fce32c375823",
      enabled: false,
      idTokenKeyId: "e772070d-28e7-41c5-831d-de0d9783736a",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 497298,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 558566,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "9dcfbe43-0679-4879-893d-439888bf30e5",
      scimEnterpriseUserResponseConverterId: "31a4971d-32dd-4e76-be90-c8ddc99d32a4",
      scimGroupRequestConverterId: "81210b81-2beb-480f-9940-1bd57008c064",
      scimGroupResponseConverterId: "77da7ac4-6e1b-4571-93dc-c341d559e46c",
      scimUserRequestConverterId: "7fba6ae2-8d00-48ea-9140-13870670d2cc",
      scimUserResponseConverterId: "1e74d4b2-0c30-4e4a-ac78-9187c8b7ff84",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "molestiae",
    maximumPasswordAge: {
      days: 254160,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 831592,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithmEnum.HmacSha256,
        codeLength: 116578,
        enabled: false,
        timeStep: 519755,
      },
      email: {
        enabled: false,
        templateId: "658fb10f-ce6e-4b66-9c9c-9601d750e72c",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Enabled,
      sms: {
        enabled: false,
        messengerId: "19b09307-f9a1-4242-8da3-d7cdcb4c5daa",
        templateId: "25e9b708-cb8a-4f48-99bd-5e4ef92a6079",
      },
    },
    name: "Clarence Waelchi",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "f950b576-a9db-4bc4-bd1f-5eb9fe725394",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "quod",
      encryptionSchemeFactor: 771685,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchModeEnum.Low,
        notifyUserEmailTemplateId: "31bbd739-8ad3-4129-93de-4ea945dcb4dd",
        onLogin: BreachActionEnum.NotifyUser,
      },
      maxLength: 200405,
      minLength: 66482,
      rememberPreviousPasswords: {
        count: 127923,
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
        limit: 564791,
        timePeriodInSeconds: 688091,
      },
      forgotPassword: {
        enabled: false,
        limit: 708317,
        timePeriodInSeconds: 716513,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 170433,
        timePeriodInSeconds: 297001,
      },
      sendPasswordless: {
        enabled: false,
        limit: 353510,
        timePeriodInSeconds: 237029,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 742499,
        timePeriodInSeconds: 927409,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 600871,
        timePeriodInSeconds: 54452,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "provident",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "dc5f1b1c-9eb7-4014-b1fd-353964ddcd95",
      enabled: false,
      schemas: {
        "rerum": {
          "fuga": "dolores",
          "sint": "cupiditate",
          "repellendus": "blanditiis",
        },
        "provident": {
          "eius": "maxime",
          "consequuntur": "mollitia",
          "rerum": "voluptates",
        },
        "necessitatibus": {
          "totam": "eius",
          "voluptates": "nisi",
          "blanditiis": "nemo",
        },
      },
      serverEntityTypeId: "eb2a642e-402d-4060-bfe5-9416b2b3ad4b",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 662787,
    },
    state: ObjectStateEnum.Active,
    themeId: "23b99406-8446-4869-aa61-33ecf14d4be1",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 634879,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 482046,
        separator: "nulla",
        strategy: UniqueUsernameStrategyEnum.Always,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Required,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Any,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Preferred,
      },
      relyingPartyId: "velit",
      relyingPartyName: "non",
    },
  },
  webhookIds: [
    "fb53284c-3fc8-4392-88b7-f4629ea599b3",
  ],
}, "perspiciatis").then((res: PatchTenantWithIdResponse) => {
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

sdk.sdk.patchThemeWithId("tempora", {
  sourceThemeId: "6796c688-3b30-451e-9a40-ede6f750d0ad",
  theme: {
    data: {
      "vero": {
        "minima": "minima",
      },
      "quisquam": {
        "est": "quae",
        "repellat": "vitae",
      },
    },
    defaultMessages: "labore",
    id: "2d09568e-9a43-4c4c-8bea-c411828064b0",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "voluptatum": "occaecati",
      "voluptate": "dolores",
      "quasi": "incidunt",
    },
    name: "Wilma Schmitt",
    stylesheet: "porro",
    templates: {
      accountEdit: "officiis",
      accountIndex: "quaerat",
      accountTwoFactorDisable: "sit",
      accountTwoFactorEnable: "rem",
      accountTwoFactorIndex: "nostrum",
      accountWebAuthnAdd: "minima",
      accountWebAuthnDelete: "ea",
      accountWebAuthnIndex: "quam",
      emailComplete: "recusandae",
      emailSend: "aspernatur",
      emailSent: "accusantium",
      emailVerificationRequired: "consequatur",
      emailVerify: "magni",
      helpers: "consequatur",
      index: "iste",
      oauth2Authorize: "ad",
      oauth2AuthorizedNotRegistered: "ipsam",
      oauth2ChildRegistrationNotAllowed: "porro",
      oauth2ChildRegistrationNotAllowedComplete: "inventore",
      oauth2CompleteRegistration: "maiores",
      oauth2Device: "quod",
      oauth2DeviceComplete: "quibusdam",
      oauth2Error: "tempora",
      oauth2Logout: "occaecati",
      oauth2Passwordless: "dolorum",
      oauth2Register: "molestiae",
      oauth2StartIdPLink: "laudantium",
      oauth2TwoFactor: "cum",
      oauth2TwoFactorEnable: "sed",
      oauth2TwoFactorEnableComplete: "quasi",
      oauth2TwoFactorMethods: "ut",
      oauth2Wait: "ea",
      oauth2WebAuthn: "non",
      oauth2WebAuthnReauth: "expedita",
      oauth2WebAuthnReauthEnable: "rem",
      passwordChange: "rerum",
      passwordComplete: "impedit",
      passwordForgot: "omnis",
      passwordSent: "occaecati",
      registrationComplete: "incidunt",
      registrationSend: "atque",
      registrationSent: "tempore",
      registrationVerificationRequired: "sapiente",
      registrationVerify: "earum",
      samlv2Logout: "eum",
      unauthorized: "dolore",
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

sdk.sdk.patchUserActionReasonWithId("eveniet", {
  userActionReason: {
    code: "perferendis",
    id: "3623c02f-730c-4516-b5c2-efd94c3f4a9c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "similique": "cupiditate",
    },
    text: "saepe",
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserActionWithId("excepturi", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "53ea4a8c-53c9-423d-88ff-b7a45e9902d8",
    endEmailTemplateId: "b42bf881-c78b-4629-9306-8a0e525579e4",
    id: "2f934ee8-092c-4b0d-9a1f-a7d5c03a3833",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "optio": "numquam",
    },
    modifyEmailTemplateId: "25313c93-006a-4f4c-bc8e-a6640f0a82ef",
    name: "Cameron Rohan",
    options: [
      {
        localizedNames: {
          "ducimus": "corporis",
          "odit": "sint",
        },
        name: "Barbara Lowe",
      },
      {
        localizedNames: {
          "ab": "placeat",
          "nam": "sed",
          "quo": "adipisci",
        },
        name: "Kelli Fisher",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "299aa6c9-d608-4440-ab46-ad2e979ad7c3",
    temporal: false,
    transactionType: TransactionTypeEnum.None,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "enim").then((res: PatchUserActionWithIdResponse) => {
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserConsentWithId("unde", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "71f16d74-bbef-4ff9-b796-c32bf73fb919",
      countryMinimumAgeForSelfConsent: {
        "aspernatur": "neque",
      },
      data: {
        "eum": {
          "dolorem": "aut",
          "nobis": "quia",
        },
        "aliquam": {
          "corporis": "doloremque",
          "animi": "non",
          "voluptatem": "cupiditate",
          "tenetur": "eius",
        },
        "voluptas": {
          "consectetur": "nesciunt",
          "quisquam": "nisi",
        },
        "ullam": {
          "ullam": "beatae",
          "dolore": "saepe",
        },
      },
      defaultMinimumAgeForSelfConsent: 98475,
      emailPlus: {
        emailTemplateId: "6b69ffea-e0f7-440c-9f85-f90df9ecae17",
        enabled: false,
        maximumTimeToSendEmailInHours: 964989,
        minimumTimeToSendEmailInHours: 510246,
      },
      id: "9109d535-459e-415e-ba15-0b7d6df93cd2",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Julius Bogan",
      values: [
        "iste",
        "fugit",
      ],
    },
    consentId: "9010eeba-9a29-446d-9743-55b17ec4177f",
    data: {
      "eum": {
        "provident": "magni",
      },
      "error": {
        "dolorem": "ullam",
      },
    },
    giverUserId: "ebcab957-91a8-453f-9238-db896a4e859c",
    id: "22f325b8-faf1-4c4e-9cda-93f1a0368926",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatusEnum.Revoked,
    userId: "b3834ff4-6d11-4c43-91ba-5c305afbea9d",
    values: [
      "accusantium",
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.patchUserWithId("necessitatibus", {
  applicationId: "faa9771c-07e0-4802-a4e8-5c36deb26ce3",
  currentPassword: "ex",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "at": {
        "vel": "provident",
        "odit": "sunt",
        "aliquid": "consectetur",
        "iure": "alias",
      },
      "quaerat": {
        "sapiente": "voluptatum",
        "ipsam": "excepturi",
      },
    },
    deviceDescription: "quam",
    deviceName: "hic",
    deviceType: "necessitatibus",
    ipAddress: "pariatur",
    location: {
      city: "Schuylerboro",
      country: "Saint Martin",
      displayString: "earum",
      latitude: 5126.98,
      longitude: 1702.61,
      region: "id",
      zipcode: "66517-5994",
    },
    os: "alias",
    userAgent: "enim",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
    cleanSpeakId: "f4caf163-f594-4696-b596-c71e09a9f8b1",
    connectorId: "34ee24d3-7059-4808-838d-6dcfca6c6a3e",
    data: {
      "modi": {
        "maxime": "ut",
      },
    },
    email: "Maverick.OKeefe25@hotmail.com",
    encryptionScheme: "ratione",
    expiry: 1659380719000,
    factor: 912406,
    firstName: "Kory",
    fullName: "amet",
    id: "f5de2422-9e99-4a8c-8506-1f5e730bca2c",
    imageUrl: "suscipit",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Purdy",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "assumenda": {
            "voluptatum": "et",
            "suscipit": "saepe",
          },
          "tempore": {
            "esse": "velit",
            "tenetur": "alias",
          },
          "eligendi": {
            "aliquid": "explicabo",
            "reprehenderit": "natus",
          },
        },
        groupId: "d568b56c-b164-4473-84f1-d6c5f073f2b8",
        id: "caaa3c81-0fb1-4ef4-9b90-ced47862aa4e",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
          cleanSpeakId: "e78a4aed-fb90-465b-a031-c2733e038524",
          connectorId: "da87338e-8988-4ef7-8f8a-10d3400ea84e",
          data: {
            "est": {
              "quos": "dolore",
            },
            "dicta": {
              "voluptate": "id",
              "officiis": "quod",
            },
            "molestiae": {
              "corporis": "voluptatum",
            },
            "distinctio": {
              "aut": "id",
              "soluta": "laborum",
            },
          },
          email: "Bryana_Ullrich36@hotmail.com",
          encryptionScheme: "sint",
          expiry: 1659380719000,
          factor: 910089,
          firstName: "Catharine",
          fullName: "placeat",
          id: "e41f2dd6-9e9c-4115-a04f-95ccfb19ca41",
          imageUrl: "atque",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Lueilwitz",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "magnam",
          mobilePhone: "maxime",
          parentEmail: "sint",
          password: "voluptatibus",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "32223cf9-2914-4cd1-965a-08656b7d4728",
              authenticationToken: "voluptate",
              cleanSpeakId: "a5752364-360a-4aa7-a2f3-f7ef9a2739f8",
              data: {
                "vero": {
                  "beatae": "voluptatum",
                  "a": "alias",
                },
                "tempora": {
                  "amet": "sed",
                  "nobis": "reprehenderit",
                  "maxime": "veritatis",
                },
              },
              id: "2276d8fa-7f91-4614-8241-c0a0d8f1e2bf",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "quae",
              ],
              timezone: "America/Denver",
              tokens: {
                "asperiores": "officia",
              },
              username: "Hector.Kilback54",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "itaque",
          tenantId: "eb89e6b7-c073-41f1-a51e-6325dce4e00b",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 382365,
                  timeStep: 396659,
                },
                email: "Josefina.Feest@gmail.com",
                id: "947d2139-e591-4934-96c9-96907d754984",
                lastUsed: false,
                method: "deserunt",
                mobilePhone: "alias",
                secret: "blanditiis",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 148342,
                  timeStep: 196627,
                },
                email: "Jamison_Senger@hotmail.com",
                id: "948c5b15-0d09-48a8-9139-d73a8c014303",
                lastUsed: false,
                method: "eaque",
                mobilePhone: "iusto",
                secret: "nostrum",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 551046,
                  timeStep: 857037,
                },
                email: "Caden.Schneider@hotmail.com",
                id: "9f0ccf71-41a8-4b66-b44f-5708e4b7347a",
                lastUsed: false,
                method: "sunt",
                mobilePhone: "distinctio",
                secret: "odit",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 685680,
                  timeStep: 254109,
                },
                email: "Adelia.McKenzie@yahoo.com",
                id: "c743d9c4-0023-430d-a5b6-d9ca31a71e28",
                lastUsed: false,
                method: "est",
                mobilePhone: "ratione",
                secret: "reprehenderit",
              },
            ],
            recoveryCodes: [
              "esse",
              "vitae",
            ],
          },
          uniqueUsername: "veniam",
          username: "Sigurd44",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "d2238a0e-b1d3-4d7b-8461-d4ad23abd6f1",
      },
      {
        data: {
          "ratione": {
            "minus": "quidem",
            "delectus": "laudantium",
            "deleniti": "delectus",
          },
        },
        groupId: "ac803cd8-d647-4660-b77e-11136cc21c59",
        id: "ba182a87-eaed-491e-bc17-9df6cf4b6c59",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.None,
          cleanSpeakId: "7e253c2a-e880-4554-8319-340e5c89b291",
          connectorId: "1151d03d-bc44-47b6-8c02-bbc50740a6a0",
          data: {
            "culpa": {
              "sed": "beatae",
              "itaque": "fugit",
              "similique": "a",
            },
            "rerum": {
              "aliquam": "dolor",
              "eos": "veritatis",
              "alias": "esse",
            },
            "eum": {
              "maiores": "quasi",
            },
            "dicta": {
              "harum": "inventore",
              "dolore": "quasi",
              "sint": "rerum",
              "nesciunt": "corporis",
            },
          },
          email: "Emil_Stanton19@gmail.com",
          encryptionScheme: "aliquam",
          expiry: 1659380719000,
          factor: 631135,
          firstName: "Jeramie",
          fullName: "maiores",
          id: "b120945f-f0df-4787-a63c-e6f2209d4217",
          imageUrl: "quis",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Schiller",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "quibusdam",
          mobilePhone: "doloribus",
          parentEmail: "at",
          password: "ea",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "58ed8c8a-f103-44f1-b15c-a881329f9029",
              authenticationToken: "consequatur",
              cleanSpeakId: "3e7a7eae-96f7-41bd-826b-73eb53928768",
              data: {
                "veritatis": {
                  "inventore": "temporibus",
                  "quibusdam": "ex",
                },
              },
              id: "35a9d293-7dd9-49e7-980c-5a4e90478e29",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "reiciendis",
                "et",
                "quaerat",
                "ut",
              ],
              timezone: "America/Denver",
              tokens: {
                "assumenda": "ipsa",
              },
              username: "Pasquale.Metz",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "083a339b-84ff-4cb7-9c7d-0c758bb5b38d",
              authenticationToken: "reprehenderit",
              cleanSpeakId: "fb7dec5e-8051-40ea-8103-5e606643ffba",
              data: {
                "eos": {
                  "deserunt": "eligendi",
                  "facilis": "ipsam",
                  "quae": "non",
                  "error": "rem",
                },
                "laudantium": {
                  "labore": "reprehenderit",
                  "exercitationem": "hic",
                  "ea": "quidem",
                },
                "blanditiis": {
                  "placeat": "aperiam",
                  "dolor": "excepturi",
                  "debitis": "possimus",
                },
              },
              id: "172c3a26-cd59-44a5-b3dd-c9144f3e2b44",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "quos",
              ],
              timezone: "America/Denver",
              tokens: {
                "aliquid": "impedit",
                "eveniet": "minima",
                "quae": "at",
              },
              username: "Bonnie_Satterfield",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "atque",
          tenantId: "3974bac0-9267-45ef-93b2-b41c1e92e5ac",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 246721,
                  timeStep: 563688,
                },
                email: "Sandrine20@hotmail.com",
                id: "1cd7bcb3-8dd9-4452-bba3-3a020df1887b",
                lastUsed: false,
                method: "exercitationem",
                mobilePhone: "minus",
                secret: "vero",
              },
            ],
            recoveryCodes: [
              "est",
              "ducimus",
              "necessitatibus",
            ],
          },
          uniqueUsername: "ipsum",
          username: "Cloyd_Sporer",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "28f314a5-cdcc-46ab-97e9-33dac402c54b",
      },
      {
        data: {
          "illo": {
            "atque": "ullam",
            "assumenda": "vitae",
            "maxime": "voluptate",
            "fugiat": "unde",
          },
          "et": {
            "adipisci": "quibusdam",
            "accusamus": "rem",
            "eveniet": "porro",
            "ut": "nesciunt",
          },
          "voluptatum": {
            "aperiam": "exercitationem",
          },
          "sapiente": {
            "dicta": "necessitatibus",
            "facilis": "blanditiis",
            "quis": "enim",
            "dolore": "a",
          },
        },
        groupId: "724312c3-e1b8-4a94-8b0d-c41309c02e67",
        id: "92bd3815-40ca-4562-8e77-66bd1cf86934",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
          cleanSpeakId: "493780e9-18fe-4c6c-9a72-cf25bcab9e5b",
          connectorId: "a570e32a-e318-40b9-b67e-90f928bb1d10",
          data: {
            "fugiat": {
              "facere": "maxime",
              "rerum": "cupiditate",
              "ipsa": "assumenda",
            },
          },
          email: "Gerald_OConner@yahoo.com",
          encryptionScheme: "enim",
          expiry: 1659380719000,
          factor: 271281,
          firstName: "Anita",
          fullName: "hic",
          id: "7ef6857d-74a0-463e-92e5-a04d4c112889",
          imageUrl: "possimus",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Macejkovic",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "architecto",
          mobilePhone: "laboriosam",
          parentEmail: "atque",
          password: "suscipit",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              applicationId: "92d06dd5-8a47-470e-9235-2c712f2a611e",
              authenticationToken: "magni",
              cleanSpeakId: "94e7d5f9-b121-4812-8160-367857ef3d24",
              data: {
                "aspernatur": {
                  "debitis": "vitae",
                  "ut": "illo",
                  "neque": "hic",
                },
              },
              id: "2115066a-eaf0-4f22-b062-6c0203179d52",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "sequi",
                "animi",
              ],
              timezone: "America/Denver",
              tokens: {
                "sed": "tempora",
                "mollitia": "distinctio",
                "cum": "ut",
                "necessitatibus": "quas",
              },
              username: "Natasha.DAmore",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "4b74759e-e94c-4b08-946a-840ef7e6b1c2",
              authenticationToken: "commodi",
              cleanSpeakId: "205726e6-c032-4dab-8e84-803206efab90",
              data: {
                "veniam": {
                  "sed": "nulla",
                  "dolor": "alias",
                  "deleniti": "molestias",
                  "dicta": "tenetur",
                },
              },
              id: "ad0eb7c9-be0c-4f6f-9e4e-4f4ba4842001",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "fugit",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolorem": "perspiciatis",
                "deleniti": "necessitatibus",
              },
              username: "Travis.Beatty76",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "69e0bcdd-9d05-4c44-b6e0-bf25f6e2161c",
              authenticationToken: "voluptatibus",
              cleanSpeakId: "cbdcbb21-3d4b-4b3c-a945-192a51668cac",
              data: {
                "consequuntur": {
                  "iusto": "beatae",
                  "reprehenderit": "molestiae",
                },
                "a": {
                  "eum": "architecto",
                  "excepturi": "modi",
                  "molestias": "facilis",
                  "facere": "autem",
                },
              },
              id: "f817ce5a-c746-42e7-b475-a1050ad15121",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "rem",
                "mollitia",
                "nulla",
              ],
              timezone: "America/Denver",
              tokens: {
                "corrupti": "nemo",
              },
              username: "Rhett76",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "422320cf-3f18-4d15-af05-81850b626b54",
              authenticationToken: "doloribus",
              cleanSpeakId: "f8b83c74-cea5-42ff-a9b8-9b93368652ff",
              data: {
                "praesentium": {
                  "hic": "maiores",
                },
                "minima": {
                  "molestias": "molestias",
                },
                "animi": {
                  "sapiente": "praesentium",
                },
                "ipsam": {
                  "explicabo": "voluptates",
                },
              },
              id: "383c92f1-4b76-4ad0-9fe9-a59720deca80",
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
                "aliquam",
                "soluta",
                "optio",
              ],
              timezone: "America/Denver",
              tokens: {
                "sit": "est",
                "officia": "voluptatum",
                "illum": "aliquam",
              },
              username: "Charity51",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "numquam",
          tenantId: "acff3487-96a3-4891-a588-4fe11a4d9ca7",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 56073,
                  timeStep: 753650,
                },
                email: "Jon59@gmail.com",
                id: "cd6e4735-2758-4a09-9467-13e749a09469",
                lastUsed: false,
                method: "et",
                mobilePhone: "incidunt",
                secret: "saepe",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 764424,
                  timeStep: 70417,
                },
                email: "Christy.Zemlak10@yahoo.com",
                id: "52f006e8-de18-437d-b93e-a95a4c787b02",
                lastUsed: false,
                method: "adipisci",
                mobilePhone: "quidem",
                secret: "minima",
              },
            ],
            recoveryCodes: [
              "incidunt",
              "repudiandae",
            ],
          },
          uniqueUsername: "magni",
          username: "Roslyn_West",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "a0acf5fb-46de-41c7-aa5f-9da24fa82bf6",
      },
    ],
    middleName: "eum",
    mobilePhone: "esse",
    parentEmail: "saepe",
    password: "consequatur",
    passwordChangeReason: ChangePasswordReasonEnum.Expired,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        applicationId: "083b704e-aaee-4b02-8432-932b8ecb3aaf",
        authenticationToken: "sequi",
        cleanSpeakId: "6ff3eb5a-3417-4f28-a3b9-472c821eec9b",
        data: {
          "repudiandae": {
            "ad": "est",
          },
        },
        id: "b50c5b8b-eeca-415c-b25d-8cbebf90803a",
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
          "eos",
        ],
        timezone: "America/Denver",
        tokens: {
          "animi": "consectetur",
          "impedit": "sit",
          "ratione": "eaque",
          "ea": "autem",
        },
        username: "Terrence_Swift",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      {
        applicationId: "c11cf313-3dc8-4387-b6a3-8b92289c87ae",
        authenticationToken: "magni",
        cleanSpeakId: "9128d3df-90c0-4b38-b876-3b24e8479138",
        data: {
          "nemo": {
            "quis": "molestias",
          },
          "quasi": {
            "nulla": "recusandae",
          },
        },
        id: "b188d281-4ec9-463e-9544-054557409026",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "consequatur",
          "error",
        ],
        timezone: "America/Denver",
        tokens: {
          "natus": "necessitatibus",
          "inventore": "necessitatibus",
          "amet": "itaque",
        },
        username: "Lloyd_Bahringer3",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      {
        applicationId: "6ec955b2-302b-4bb3-90ea-2bacd08acba9",
        authenticationToken: "similique",
        cleanSpeakId: "cf7cccdf-04e5-4d2c-9326-5b96bcbdb92b",
        data: {
          "vitae": {
            "omnis": "aliquid",
          },
          "et": {
            "perferendis": "molestiae",
            "cum": "delectus",
            "illum": "assumenda",
            "quidem": "ratione",
          },
        },
        id: "a9a9f342-b577-464b-a95d-bb3d4169d225",
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
          "repudiandae",
          "voluptatem",
          "eius",
        ],
        timezone: "America/Denver",
        tokens: {
          "iste": "sapiente",
        },
        username: "Eldora5",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      {
        applicationId: "0bfdf65d-216f-4059-84b7-c4d62ce6125e",
        authenticationToken: "eligendi",
        cleanSpeakId: "b81d4d76-9859-4de5-89d6-cf532b4c1b21",
        data: {
          "inventore": {
            "necessitatibus": "facilis",
            "excepturi": "assumenda",
          },
        },
        id: "b0e03776-f168-47d7-98ed-e6859a91efa3",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "ut",
          "soluta",
        ],
        timezone: "America/Denver",
        tokens: {
          "occaecati": "necessitatibus",
          "ipsum": "tenetur",
          "harum": "assumenda",
          "at": "eaque",
        },
        username: "Ayden_Sanford",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
    ],
    salt: "occaecati",
    tenantId: "279bfbe2-e5e9-4c9b-9ea0-52bd125932f8",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 297765,
            timeStep: 610037,
          },
          email: "Westley_Prosacco@hotmail.com",
          id: "68797b25-7dc5-40b5-b1b0-ed652403f4af",
          lastUsed: false,
          method: "voluptates",
          mobilePhone: "soluta",
          secret: "voluptatem",
        },
      ],
      recoveryCodes: [
        "ipsum",
        "dolorem",
      ],
    },
    uniqueUsername: "labore",
    username: "Aidan_Emard70",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
}, "dicta").then((res: PatchUserWithIdResponse) => {
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.reconcileJWTWithId({
  applicationId: "02132328-c6fd-4af8-8e2e-499245cb4e9f",
  data: {
    "cupiditate": "ab",
    "facilis": "non",
  },
  encodedJWT: "perferendis",
  identityProviderId: "f1e158b1-dbe8-4768-b573-a6a999becac5",
  ipAddress: "necessitatibus",
  metaData: {
    data: {
      "distinctio": {
        "odit": "sed",
        "iste": "quo",
      },
      "molestiae": {
        "odit": "minus",
      },
      "praesentium": {
        "necessitatibus": "cum",
        "eveniet": "error",
        "laboriosam": "ipsa",
        "amet": "itaque",
      },
    },
    device: {
      description: "labore",
      lastAccessedAddress: "ab",
      lastAccessedInstant: 1659380719000,
      name: "Roosevelt Gerhold",
      type: DeviceTypeEnum.Browser,
    },
    scopes: [
      "itaque",
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.register({
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "qui": {
        "deleniti": "et",
        "vitae": "aperiam",
        "culpa": "ex",
      },
      "at": {
        "amet": "facere",
        "magnam": "hic",
        "error": "modi",
      },
      "iste": {
        "maxime": "amet",
        "assumenda": "officiis",
      },
      "consequatur": {
        "assumenda": "consectetur",
        "iste": "unde",
        "magnam": "tempore",
      },
    },
    deviceDescription: "consequatur",
    deviceName: "earum",
    deviceType: "esse",
    ipAddress: "cumque",
    location: {
      city: "Marlonbury",
      country: "Macedonia",
      displayString: "soluta",
      latitude: 6387.61,
      longitude: 772.17,
      region: "odio",
      zipcode: "18496",
    },
    os: "in",
    userAgent: "perferendis",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "85b560c4-8eda-4a9b-a00c-e7351672f04a",
    authenticationToken: "sit",
    cleanSpeakId: "dee88d8b-da63-458d-92ac-bd2cd75eb2d6",
    data: {
      "sapiente": {
        "vitae": "doloribus",
        "cumque": "exercitationem",
      },
      "ex": {
        "accusantium": "optio",
        "eaque": "voluptate",
        "eum": "numquam",
      },
    },
    id: "d8c99c0b-6459-4092-9d88-81a00ba51f6b",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    roles: [
      "officiis",
      "quo",
      "quas",
    ],
    timezone: "America/Denver",
    tokens: {
      "laborum": "dolores",
      "sequi": "corrupti",
      "possimus": "possimus",
      "libero": "ullam",
    },
    username: "Mathew.Bosco3",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
    cleanSpeakId: "e3a6a68f-05c5-496b-8d54-9b717c019584",
    connectorId: "2aacd64c-eb60-4b9c-8196-757d01d7382a",
    data: {
      "incidunt": {
        "nemo": "modi",
        "molestiae": "architecto",
        "temporibus": "sed",
        "placeat": "ipsum",
      },
      "itaque": {
        "dolorum": "corrupti",
      },
      "cum": {
        "deserunt": "doloribus",
        "ipsam": "voluptatibus",
      },
    },
    email: "Lelah92@hotmail.com",
    encryptionScheme: "nemo",
    expiry: 1659380719000,
    factor: 843748,
    firstName: "Johnny",
    fullName: "debitis",
    id: "5dfb33cf-82a3-44bf-ab75-b8a1cb7e4aeb",
    imageUrl: "cupiditate",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Cartwright",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "fugiat": {
            "quos": "porro",
            "culpa": "laudantium",
          },
          "nemo": {
            "totam": "incidunt",
            "cupiditate": "saepe",
            "consectetur": "tempora",
          },
          "nobis": {
            "eos": "numquam",
          },
        },
        groupId: "de46e043-ab60-4c1e-869a-02d1163fe4f8",
        id: "4697cebc-4a07-40e1-884f-9fc767d050f2",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
          cleanSpeakId: "14826906-98cd-4910-baaf-be3e9f3cf5ef",
          connectorId: "c8b8f368-a4d4-46d6-bba9-6943dbbf2973",
          data: {
            "odit": {
              "nisi": "nesciunt",
              "dolorum": "enim",
              "ducimus": "molestias",
            },
            "eveniet": {
              "similique": "enim",
              "molestias": "quae",
              "suscipit": "esse",
            },
            "tempora": {
              "ullam": "exercitationem",
              "ea": "sequi",
              "non": "debitis",
              "doloribus": "accusantium",
            },
          },
          email: "Daija94@hotmail.com",
          encryptionScheme: "fuga",
          expiry: 1659380719000,
          factor: 716151,
          firstName: "Vicenta",
          fullName: "provident",
          id: "fc87dbd9-3287-447c-9c94-8d1692de64ad",
          imageUrl: "dolorum",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Rippin",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          middleName: "porro",
          mobilePhone: "vitae",
          parentEmail: "quidem",
          password: "quo",
          passwordChangeReason: ChangePasswordReasonEnum.Validation,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "7f29480f-cf1f-40ec-83fc-1501cdcd5b1f",
              authenticationToken: "culpa",
              cleanSpeakId: "d2a8dc79-18ca-4511-94d2-c4eccc735686",
              data: {
                "doloremque": {
                  "ea": "delectus",
                  "placeat": "id",
                  "maiores": "error",
                  "explicabo": "eveniet",
                },
                "ducimus": {
                  "recusandae": "odio",
                  "nesciunt": "at",
                  "laboriosam": "fugiat",
                },
              },
              id: "96dfd43a-9dc9-449d-955a-675f400e5dd3",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "beatae",
                "quaerat",
                "beatae",
                "culpa",
              ],
              timezone: "America/Denver",
              tokens: {
                "odit": "perspiciatis",
                "occaecati": "quae",
                "corrupti": "facere",
              },
              username: "Hilma_Champlin",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
          ],
          salt: "temporibus",
          tenantId: "fbea3877-2a4d-4735-bd35-eb9115097ca0",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 363723,
                  timeStep: 295142,
                },
                email: "Alanna.Mills@gmail.com",
                id: "3fe6e894-3e61-4435-87f9-5656d0e8a0df",
                lastUsed: false,
                method: "tenetur",
                mobilePhone: "esse",
                secret: "eum",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 525901,
                  timeStep: 288875,
                },
                email: "Chyna63@gmail.com",
                id: "9ec64f29-0bfa-4503-86ec-9219a364d53f",
                lastUsed: false,
                method: "repellat",
                mobilePhone: "esse",
                secret: "quod",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 69129,
                  timeStep: 321277,
                },
                email: "Billie.Stark@gmail.com",
                id: "0f66f03b-e6a9-4c82-a8d5-cff37052ca6e",
                lastUsed: false,
                method: "eaque",
                mobilePhone: "deleniti",
                secret: "optio",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 493770,
                  timeStep: 688714,
                },
                email: "Theresia21@yahoo.com",
                id: "60615692-796c-4aa6-9860-13d6c87f3532",
                lastUsed: false,
                method: "reiciendis",
                mobilePhone: "et",
                secret: "veritatis",
              },
            ],
            recoveryCodes: [
              "asperiores",
              "voluptas",
            ],
          },
          uniqueUsername: "ab",
          username: "Katrine84",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "33dfa40f-9d08-4824-a794-34a6739be2d1",
      },
      {
        data: {
          "aperiam": {
            "consequatur": "rem",
            "nesciunt": "voluptate",
          },
          "harum": {
            "eaque": "ex",
          },
        },
        groupId: "d2a7e901-acfe-46e6-8d36-ed7986f2ef24",
        id: "b3712af6-12ea-4fb7-acd1-cbf419d112e5",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
          cleanSpeakId: "bf223c39-7a66-492c-b1d7-4480b43b40ed",
          connectorId: "646efb23-11a4-4dd7-a68c-a980031ce018",
          data: {
            "maxime": {
              "doloribus": "cum",
            },
            "magni": {
              "asperiores": "eius",
              "rerum": "deserunt",
              "dicta": "libero",
              "a": "sequi",
            },
            "quibusdam": {
              "dolorum": "esse",
              "accusamus": "aut",
            },
            "debitis": {
              "eum": "reprehenderit",
              "ad": "quos",
              "quisquam": "natus",
              "molestiae": "eum",
            },
          },
          email: "Nat_Koch62@hotmail.com",
          encryptionScheme: "cum",
          expiry: 1659380719000,
          factor: 142808,
          firstName: "Gregoria",
          fullName: "doloribus",
          id: "4125fd73-7c44-46b3-8237-bfad85e4c98c",
          imageUrl: "sequi",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Mosciski",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "nisi",
          mobilePhone: "et",
          parentEmail: "minima",
          password: "natus",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "1447b672-0eec-4e32-ab8b-01294790d823",
              authenticationToken: "molestias",
              cleanSpeakId: "013c01fc-a897-4ca7-98e4-7c062d8f92d1",
              data: {
                "itaque": {
                  "ipsa": "magnam",
                },
              },
              id: "fd42e8d8-09a2-45da-96a7-3a19abceaab8",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "eos",
                "porro",
              ],
              timezone: "America/Denver",
              tokens: {
                "sunt": "animi",
                "repellendus": "neque",
                "excepturi": "mollitia",
              },
              username: "Stan.Ankunding85",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "cd3a8fed-07ce-451f-9ea9-88a0713d4a68",
              authenticationToken: "repellendus",
              cleanSpeakId: "26c139c6-961b-484e-b9db-7cb05c6fb48b",
              data: {
                "consectetur": {
                  "sapiente": "nam",
                  "non": "officiis",
                },
              },
              id: "fe6d27c6-f839-4d46-a9b9-4e5597aef233",
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
                "voluptatum",
                "nulla",
              ],
              timezone: "America/Denver",
              tokens: {
                "eaque": "quo",
                "ratione": "reiciendis",
                "sunt": "recusandae",
                "itaque": "magni",
              },
              username: "Jaylin.McClure",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "harum",
          tenantId: "c8125a35-0170-4e96-8a73-55c508cd204a",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 805990,
                  timeStep: 2116,
                },
                email: "Anne.Olson@gmail.com",
                id: "244666fd-980d-4e2b-984a-ba7395aaa8e9",
                lastUsed: false,
                method: "dolorum",
                mobilePhone: "maiores",
                secret: "sint",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 270451,
                  timeStep: 170181,
                },
                email: "Carley46@hotmail.com",
                id: "16c82f30-7893-4522-8d89-b145026e40fd",
                lastUsed: false,
                method: "in",
                mobilePhone: "eveniet",
                secret: "maxime",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 971418,
                  timeStep: 381310,
                },
                email: "Aileen_Ortiz94@gmail.com",
                id: "0810a084-1ef4-447e-ab7e-696ebbb783ae",
                lastUsed: false,
                method: "odio",
                mobilePhone: "quod",
                secret: "nesciunt",
              },
            ],
            recoveryCodes: [
              "neque",
              "velit",
              "aliquid",
            ],
          },
          uniqueUsername: "sequi",
          username: "Edyth.Herzog",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "c5298645-3517-429f-a141-85ff79736ea7",
      },
    ],
    middleName: "soluta",
    mobilePhone: "est",
    parentEmail: "excepturi",
    password: "molestiae",
    passwordChangeReason: ChangePasswordReasonEnum.Breached,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        applicationId: "09801ad7-daa9-4079-8be0-407070a3a800",
        authenticationToken: "magni",
        cleanSpeakId: "46c163db-7488-468e-94f4-1f52902bf148",
        data: {
          "eius": {
            "minima": "fuga",
            "cum": "odit",
            "necessitatibus": "soluta",
          },
          "amet": {
            "accusamus": "quisquam",
          },
          "porro": {
            "architecto": "aliquid",
          },
        },
        id: "b51a32e6-4f4d-457f-b5c4-ff634d24b290",
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
          "eius",
          "deserunt",
        ],
        timezone: "America/Denver",
        tokens: {
          "beatae": "aspernatur",
        },
        username: "Gideon_Cruickshank",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      {
        applicationId: "20f0ab03-d880-468b-97f4-83c8aab50829",
        authenticationToken: "tenetur",
        cleanSpeakId: "b6f4a714-80be-45de-aa10-75332acb02da",
        data: {
          "ea": {
            "dolor": "error",
            "officia": "reprehenderit",
          },
          "facere": {
            "sint": "placeat",
            "optio": "molestias",
            "maxime": "nostrum",
            "quas": "commodi",
          },
          "accusantium": {
            "neque": "veritatis",
            "perspiciatis": "officiis",
            "nisi": "numquam",
          },
        },
        id: "3f348936-84cb-45a9-a125-941221871ca7",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "ab",
          "voluptatem",
          "ducimus",
        ],
        timezone: "America/Denver",
        tokens: {
          "quis": "saepe",
          "tenetur": "harum",
          "minima": "esse",
          "labore": "commodi",
        },
        username: "Ayla37",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
    ],
    salt: "perspiciatis",
    tenantId: "b7d8ac6b-5256-4d7c-9ed2-15bd169a1879",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 137354,
            timeStep: 468631,
          },
          email: "Ryleigh.Greenholt23@gmail.com",
          id: "eda5b225-fcdb-49c0-ac3a-0008c6f9a149",
          lastUsed: false,
          method: "porro",
          mobilePhone: "officiis",
          secret: "perferendis",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 344095,
            timeStep: 338773,
          },
          email: "Marlin_Prohaska70@hotmail.com",
          id: "aff81148-45b2-47d3-be81-521f9dda1d01",
          lastUsed: false,
          method: "consectetur",
          mobilePhone: "hic",
          secret: "rerum",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 866257,
            timeStep: 45879,
          },
          email: "Nakia.Kunze@hotmail.com",
          id: "2468da3d-d59c-4b10-ac7e-f943aab50d52",
          lastUsed: false,
          method: "molestiae",
          mobilePhone: "fugit",
          secret: "perspiciatis",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 418097,
            timeStep: 395852,
          },
          email: "Jay.Conroy48@hotmail.com",
          id: "7623cf4d-35b1-4414-850b-b4b886f53480",
          lastUsed: false,
          method: "voluptas",
          mobilePhone: "vero",
          secret: "eius",
        },
      ],
      recoveryCodes: [
        "nihil",
        "quasi",
      ],
    },
    uniqueUsername: "delectus",
    username: "Joannie_Deckow88",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
}, "reprehenderit").then((res: RegisterResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.registerWithId("quam", {
  disableDomainBlock: false,
  eventInfo: {
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
    deviceDescription: "sint",
    deviceName: "libero",
    deviceType: "vitae",
    ipAddress: "doloribus",
    location: {
      city: "Maryseville",
      country: "Namibia",
      displayString: "illum",
      latitude: 1269.85,
      longitude: 7997.33,
      region: "debitis",
      zipcode: "50734",
    },
    os: "expedita",
    userAgent: "illo",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "a3d1affd-380f-4b2d-b4ee-f9d601d5555d",
    authenticationToken: "necessitatibus",
    cleanSpeakId: "34815fce-108d-4a73-8fc5-d3ed9b3079a9",
    data: {
      "nostrum": {
        "reprehenderit": "neque",
        "nemo": "suscipit",
      },
      "aliquid": {
        "beatae": "earum",
      },
      "corrupti": {
        "occaecati": "blanditiis",
      },
      "sit": {
        "labore": "neque",
        "voluptas": "veniam",
        "vel": "sint",
        "dolores": "minima",
      },
    },
    id: "a1317351-0e57-439c-a7bd-0de87a6d0503",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
    ],
    roles: [
      "blanditiis",
      "perspiciatis",
      "doloribus",
      "mollitia",
    ],
    timezone: "America/Denver",
    tokens: {
      "laborum": "ut",
      "magnam": "natus",
      "voluptate": "doloremque",
    },
    username: "Sterling_Predovic",
    usernameStatus: ContentStatusEnum.Rejected,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
    cleanSpeakId: "46482a33-93dc-451e-b7b2-00b9129880ce",
    connectorId: "744b899c-d081-43d7-8f1e-286202bca2ee",
    data: {
      "dicta": {
        "corporis": "eum",
      },
    },
    email: "Bryana_Zieme20@gmail.com",
    encryptionScheme: "ad",
    expiry: 1659380719000,
    factor: 122673,
    firstName: "Alek",
    fullName: "explicabo",
    id: "44bf4438-d5d5-4090-874e-826dea495888",
    imageUrl: "deleniti",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Shanahan",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "molestias": {
            "delectus": "vitae",
            "sint": "repellendus",
            "nobis": "exercitationem",
          },
          "temporibus": {
            "repellat": "fuga",
            "accusamus": "possimus",
            "aliquid": "laudantium",
            "temporibus": "quo",
          },
          "maxime": {
            "dolore": "labore",
            "voluptate": "quos",
            "pariatur": "fugit",
            "aspernatur": "accusantium",
          },
        },
        groupId: "e2388f57-40a5-4c81-a6d8-5936c6114414",
        id: "560b871d-b43b-4f5b-ae4f-0ff9e76be6d0",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "e2e0c363-1077-4cd1-ac11-def7b509a293",
          connectorId: "d07bb744-503c-4842-8bde-cb7c5439ba6c",
          data: {
            "earum": {
              "laborum": "impedit",
            },
          },
          email: "Virginia_Ebert@yahoo.com",
          encryptionScheme: "unde",
          expiry: 1659380719000,
          factor: 141924,
          firstName: "Camila",
          fullName: "consequatur",
          id: "29a7b978-e998-4c9e-a4a7-f745040dfb6d",
          imageUrl: "sed",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Bernhard",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "at",
          mobilePhone: "doloribus",
          parentEmail: "consectetur",
          password: "harum",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
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
              applicationId: "8d6bb7cd-23e6-4611-93a0-76f0fd1b4596",
              authenticationToken: "fuga",
              cleanSpeakId: "cbb0bee8-445d-4286-8a41-2c9b53b93d00",
              data: {
                "qui": {
                  "velit": "voluptatibus",
                  "laborum": "vitae",
                  "iste": "est",
                  "ea": "eligendi",
                },
                "eum": {
                  "nam": "veniam",
                  "excepturi": "hic",
                  "esse": "necessitatibus",
                  "perferendis": "sequi",
                },
              },
              id: "eb2d0abc-d769-49e4-8fea-c33580f6ff73",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "accusamus",
                "vero",
                "labore",
              ],
              timezone: "America/Denver",
              tokens: {
                "quod": "odio",
                "iste": "optio",
                "laborum": "repudiandae",
                "blanditiis": "iure",
              },
              username: "Lexus88",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "e3e24b0a-e36b-4af5-b71c-3d87ea5ddd18",
              authenticationToken: "quibusdam",
              cleanSpeakId: "d2ac6bc9-6616-4ebf-af1a-fab17ca91b62",
              data: {
                "tempora": {
                  "necessitatibus": "occaecati",
                  "quibusdam": "eligendi",
                },
                "corrupti": {
                  "unde": "quo",
                },
              },
              id: "88da9e25-0a31-471e-8e79-d86d3802b976",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "similique",
                "laborum",
              ],
              timezone: "America/Denver",
              tokens: {
                "alias": "maxime",
                "suscipit": "ex",
              },
              username: "Delfina26",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "officiis",
          tenantId: "150c945f-a05e-41dc-8763-aaba267fa84b",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 471375,
                  timeStep: 987941,
                },
                email: "Marcel_Kunze@yahoo.com",
                id: "0d9e0233-7fdc-4558-b5d9-964596cb570c",
                lastUsed: false,
                method: "voluptate",
                mobilePhone: "quasi",
                secret: "facere",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 411386,
                  timeStep: 180324,
                },
                email: "Coralie26@yahoo.com",
                id: "396c86d1-772c-4754-a183-71cb3d7c3dd8",
                lastUsed: false,
                method: "rem",
                mobilePhone: "in",
                secret: "laudantium",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 608319,
                  timeStep: 23928,
                },
                email: "Roel.Emard1@yahoo.com",
                id: "95ae7aa6-3eda-478f-992e-19663d126cb3",
                lastUsed: false,
                method: "est",
                mobilePhone: "dolore",
                secret: "est",
              },
            ],
            recoveryCodes: [
              "aspernatur",
            ],
          },
          uniqueUsername: "commodi",
          username: "Florida19",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "58b3f17e-1524-42fb-bfa1-1b364021f2d0",
      },
      {
        data: {
          "consequuntur": {
            "aut": "eius",
            "voluptas": "fuga",
            "alias": "voluptate",
          },
          "alias": {
            "corporis": "consequuntur",
            "ipsam": "maiores",
            "quaerat": "quaerat",
            "dolor": "aliquid",
          },
          "quidem": {
            "dolore": "cupiditate",
            "voluptatem": "nostrum",
            "provident": "praesentium",
            "repudiandae": "illum",
          },
        },
        groupId: "c27512b5-e452-46be-9f24-77eab3085a44",
        id: "6b847fa6-a562-4d45-9b97-51c335374db3",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
          cleanSpeakId: "53b71bb6-be99-40de-aae9-56b6090bd8a2",
          connectorId: "c8ab457e-3810-4c87-87be-12deed5e502b",
          data: {
            "distinctio": {
              "laborum": "et",
              "ab": "iure",
            },
            "ipsam": {
              "non": "atque",
              "impedit": "accusamus",
              "possimus": "explicabo",
              "esse": "vero",
            },
          },
          email: "Abigale14@hotmail.com",
          encryptionScheme: "modi",
          expiry: 1659380719000,
          factor: 899763,
          firstName: "Arvel",
          fullName: "porro",
          id: "c1d67d8b-e478-430b-99ca-87de0247bae8",
          imageUrl: "nam",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Heaney",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "architecto",
          mobilePhone: "reiciendis",
          parentEmail: "culpa",
          password: "enim",
          passwordChangeReason: ChangePasswordReasonEnum.Validation,
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
              applicationId: "c80f8f9f-83c9-4266-a2de-06e22119f07c",
              authenticationToken: "rem",
              cleanSpeakId: "212ac296-525b-4afd-aca0-4585559be8c5",
              data: {
                "optio": {
                  "in": "blanditiis",
                },
              },
              id: "a92c982e-85d3-4b74-b1b6-442daa8b0e73",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
              ],
              roles: [
                "ipsa",
                "sit",
                "excepturi",
                "laborum",
              ],
              timezone: "America/Denver",
              tokens: {
                "illum": "nisi",
                "tempora": "facere",
                "ut": "reprehenderit",
                "necessitatibus": "fugit",
              },
              username: "Celia18",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "31551310-c024-4c5e-a36d-eef8bf20dad7",
              authenticationToken: "fuga",
              cleanSpeakId: "a756bae5-51fd-4f98-b06b-7b8620346bda",
              data: {
                "laudantium": {
                  "porro": "ea",
                  "atque": "deleniti",
                  "saepe": "doloribus",
                  "quidem": "placeat",
                },
                "adipisci": {
                  "saepe": "odit",
                  "omnis": "officiis",
                  "repudiandae": "sed",
                  "cumque": "provident",
                },
                "excepturi": {
                  "cumque": "in",
                  "nobis": "doloremque",
                  "voluptate": "ab",
                },
              },
              id: "c3d0abf5-f5f4-4db8-bc11-b2575fc28edb",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "soluta",
              ],
              timezone: "America/Denver",
              tokens: {
                "consequatur": "harum",
                "laudantium": "optio",
                "dolorem": "iure",
                "similique": "ea",
              },
              username: "Flo_Johnson97",
              usernameStatus: ContentStatusEnum.Active,
              verified: false,
            },
            {
              applicationId: "2362c34e-e03e-40fd-a4f6-ac4823e85db6",
              authenticationToken: "numquam",
              cleanSpeakId: "6962469f-5f94-493a-b974-2f680927c378",
              data: {
                "occaecati": {
                  "amet": "consequatur",
                },
                "cum": {
                  "minus": "vel",
                  "minima": "reiciendis",
                  "laborum": "veniam",
                  "laborum": "ad",
                },
                "non": {
                  "et": "ratione",
                  "iusto": "provident",
                  "quibusdam": "incidunt",
                  "ab": "accusantium",
                },
                "commodi": {
                  "deleniti": "ipsam",
                  "laborum": "quisquam",
                  "maiores": "possimus",
                  "ut": "fuga",
                },
              },
              id: "ea82c6c8-ae48-4d7f-acda-eb136ff7693e",
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
                "commodi",
                "quod",
              ],
              timezone: "America/Denver",
              tokens: {
                "sed": "perspiciatis",
                "cumque": "minima",
                "itaque": "ratione",
                "saepe": "odit",
              },
              username: "Glenna61",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
            {
              applicationId: "44b62005-53db-4823-a290-17d073980003",
              authenticationToken: "assumenda",
              cleanSpeakId: "03812607-57bb-4d0c-921b-15d30a34003d",
              data: {
                "nesciunt": {
                  "velit": "architecto",
                  "autem": "deserunt",
                },
                "quidem": {
                  "corporis": "omnis",
                },
                "repellat": {
                  "error": "officiis",
                  "vitae": "eos",
                },
              },
              id: "6897f8b9-ba86-4e80-9893-41ae6ef76772",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "aliquid",
                "totam",
              ],
              timezone: "America/Denver",
              tokens: {
                "consequatur": "excepturi",
              },
              username: "Johnnie_Gutkowski",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "debitis",
          tenantId: "32c7fe13-d53d-44a7-a39d-da6659a9cb1e",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 813542,
                  timeStep: 780308,
                },
                email: "Tod99@hotmail.com",
                id: "af9b4a25-937f-4e18-a8aa-265607cdafc0",
                lastUsed: false,
                method: "reiciendis",
                mobilePhone: "ullam",
                secret: "nesciunt",
              },
            ],
            recoveryCodes: [
              "mollitia",
              "dolor",
              "aliquid",
            ],
          },
          uniqueUsername: "saepe",
          username: "Etha_Reinger",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "687d60b2-0f68-4963-8d7a-c70f7d29ea30",
      },
      {
        data: {
          "voluptatibus": {
            "molestiae": "vel",
            "expedita": "sit",
            "odit": "consectetur",
            "alias": "beatae",
          },
          "maxime": {
            "iste": "quod",
            "officia": "possimus",
            "cum": "saepe",
          },
          "provident": {
            "repudiandae": "corrupti",
            "vitae": "cum",
            "inventore": "fugiat",
            "praesentium": "vitae",
          },
        },
        groupId: "0f7f8bdb-96f6-4076-9302-8238bf32bc34",
        id: "abf2a130-1401-4e5a-bec8-a5a7018305b4",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.None,
          cleanSpeakId: "17a7a629-8833-4717-9054-cb738fbf8611",
          connectorId: "c954aa82-936d-46ee-9225-0c3d6af5dedc",
          data: {
            "expedita": {
              "provident": "enim",
            },
            "molestiae": {
              "minus": "eveniet",
              "iusto": "sit",
              "cupiditate": "reprehenderit",
            },
          },
          email: "Golden_Hansen85@yahoo.com",
          encryptionScheme: "qui",
          expiry: 1659380719000,
          factor: 726086,
          firstName: "Reina",
          fullName: "cupiditate",
          id: "e1459416-ccf9-4fef-9c28-c737a0eb9bd0",
          imageUrl: "sint",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Streich",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
          ],
          middleName: "beatae",
          mobilePhone: "cupiditate",
          parentEmail: "placeat",
          password: "deleniti",
          passwordChangeReason: ChangePasswordReasonEnum.Validation,
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
              applicationId: "10292066-ca80-4758-acd6-741f9c5dac80",
              authenticationToken: "reprehenderit",
              cleanSpeakId: "dbb6cae3-1461-4ed2-b8c4-eff07ec699ce",
              data: {
                "ea": {
                  "officiis": "corporis",
                  "id": "quae",
                  "dolor": "delectus",
                },
                "sunt": {
                  "omnis": "voluptate",
                  "eligendi": "porro",
                },
                "architecto": {
                  "nisi": "impedit",
                  "error": "sunt",
                  "sunt": "recusandae",
                  "earum": "cumque",
                },
                "nihil": {
                  "voluptatum": "praesentium",
                  "quia": "vel",
                  "iusto": "doloribus",
                },
              },
              id: "5c0f9d48-96ec-45bc-ac51-cda30d49b1a3",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "nisi",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolorum": "cumque",
                "at": "sunt",
                "facilis": "saepe",
                "debitis": "occaecati",
              },
              username: "Bernice_Jenkins46",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "perferendis",
          tenantId: "efa5c175-ba08-4093-9a76-31c64bba432a",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 522200,
                  timeStep: 966715,
                },
                email: "Valentina77@hotmail.com",
                id: "ea1e0149-aeaf-4712-af67-a7ccd3c7c819",
                lastUsed: false,
                method: "earum",
                mobilePhone: "quia",
                secret: "aliquid",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 376067,
                  timeStep: 703105,
                },
                email: "Anabelle.Fadel31@hotmail.com",
                id: "3a3b78d5-716f-46a7-ad20-f35d07dbda7a",
                lastUsed: false,
                method: "dolore",
                mobilePhone: "quam",
                secret: "nihil",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 184484,
                  timeStep: 323311,
                },
                email: "Mac96@yahoo.com",
                id: "27d8cdfb-408c-44af-8613-cb52171db9fd",
                lastUsed: false,
                method: "in",
                mobilePhone: "blanditiis",
                secret: "quibusdam",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 823681,
                  timeStep: 861213,
                },
                email: "Estelle_Friesen67@gmail.com",
                id: "888dce1b-a771-4972-932f-75631a66fd6b",
                lastUsed: false,
                method: "quia",
                mobilePhone: "enim",
                secret: "eveniet",
              },
            ],
            recoveryCodes: [
              "illo",
              "aliquam",
              "facilis",
              "perspiciatis",
            ],
          },
          uniqueUsername: "nemo",
          username: "Susana_Green83",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "92fa3122-9766-44ac-b28b-366f2a4df1bc",
      },
    ],
    middleName: "unde",
    mobilePhone: "sequi",
    parentEmail: "facilis",
    password: "nesciunt",
    passwordChangeReason: ChangePasswordReasonEnum.Validation,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        applicationId: "2e4e0944-a039-4089-960e-42204f990497",
        authenticationToken: "nostrum",
        cleanSpeakId: "4116cccf-9abf-4e72-bc3b-7bed2f52619e",
        data: {
          "non": {
            "neque": "quidem",
            "ipsa": "tempora",
          },
        },
        id: "66b19810-1593-4f42-96f8-5aa1007c19f0",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
          "en_US",
        ],
        roles: [
          "voluptas",
        ],
        timezone: "America/Denver",
        tokens: {
          "quaerat": "non",
          "dolorum": "nulla",
          "consequuntur": "necessitatibus",
        },
        username: "Royce_Bruen94",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
    ],
    salt: "inventore",
    tenantId: "caa7c599-1392-45e7-b62f-f70527e00ebf",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 745908,
            timeStep: 575615,
          },
          email: "Archibald_Feest57@gmail.com",
          id: "b2c0b6c4-2891-496a-ab31-a1b4c5b1255d",
          lastUsed: false,
          method: "nesciunt",
          mobilePhone: "fugit",
          secret: "inventore",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 755933,
            timeStep: 320093,
          },
          email: "Kaitlin74@hotmail.com",
          id: "02cae769-0798-4de5-b895-1e8992179edb",
          lastUsed: false,
          method: "deserunt",
          mobilePhone: "nobis",
          secret: "tempore",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 555575,
            timeStep: 971500,
          },
          email: "Morton_Swift75@yahoo.com",
          id: "7bc9a341-2a23-4341-a530-c41f9f59b07b",
          lastUsed: false,
          method: "dolor",
          mobilePhone: "hic",
          secret: "dolore",
        },
      ],
      recoveryCodes: [
        "quae",
        "aperiam",
        "consequatur",
      ],
    },
    uniqueUsername: "sunt",
    username: "Dante89",
    usernameStatus: ContentStatusEnum.Pending,
    verified: false,
  },
}, "excepturi").then((res: RegisterWithIdResponse) => {
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
  index: "officia",
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

sdk.sdk.removeUserFromFamilyWithId("amet", "harum", "expedita").then((res: RemoveUserFromFamilyWithIdResponse) => {
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

sdk.sdk.retrieveAPIKeyWithId("quas").then((res: RetrieveAPIKeyWithIdResponse) => {
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

sdk.sdk.retrieveActionWithId("tempora").then((res: RetrieveActionWithIdResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveApplication("ducimus", "non").then((res: RetrieveApplicationResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveApplicationWithId("quaerat", "in").then((res: RetrieveApplicationWithIdResponse) => {
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

sdk.sdk.retrieveAuditLogWithId("nostrum").then((res: RetrieveAuditLogWithIdResponse) => {
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
import { ConnectorTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveConnectorWithId("provident").then((res: RetrieveConnectorWithIdResponse) => {
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

sdk.sdk.retrieveConsentWithId("repellendus", "soluta").then((res: RetrieveConsentWithIdResponse) => {
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

sdk.sdk.retrieveDailyActiveReportWithId("mollitia", "nesciunt", "distinctio").then((res: RetrieveDailyActiveReportWithIdResponse) => {
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

sdk.sdk.retrieveEmailTemplate("velit").then((res: RetrieveEmailTemplateResponse) => {
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
    defaultFromName: "alias",
    defaultHtmlTemplate: "voluptate",
    defaultSubject: "itaque",
    defaultTextTemplate: "deserunt",
    fromEmail: "dolore",
    id: "340c99cd-756c-4b1e-82b7-4575c0fe8e14",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "animi": "porro",
      "nisi": "accusantium",
      "pariatur": "vitae",
      "aspernatur": "a",
    },
    localizedHtmlTemplates: {
      "debitis": "ducimus",
      "tempore": "id",
    },
    localizedSubjects: {
      "autem": "in",
    },
    localizedTextTemplates: {
      "placeat": "voluptates",
    },
    name: "Leo Crooks",
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

sdk.sdk.retrieveEmailTemplateWithId("veritatis", "ex").then((res: RetrieveEmailTemplateWithIdResponse) => {
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

sdk.sdk.retrieveEntityGrantWithId("atque", "illo", "explicabo", "qui").then((res: RetrieveEntityGrantWithIdResponse) => {
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

sdk.sdk.retrieveEntityTypeWithId("cumque").then((res: RetrieveEntityTypeWithIdResponse) => {
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

sdk.sdk.retrieveEntityWithId("officia", "sed").then((res: RetrieveEntityWithIdResponse) => {
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
import { EventLogTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveEventLogWithId("a").then((res: RetrieveEventLogWithIdResponse) => {
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
import { FamilyRoleEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFamiliesWithId("ab", "excepturi").then((res: RetrieveFamiliesWithIdResponse) => {
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
import { FamilyRoleEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFamilyMembersByFamilyIdWithId("nemo", "vitae").then((res: RetrieveFamilyMembersByFamilyIdWithIdResponse) => {
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
import { FormControlEnum, FormDataTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFormFieldWithId("esse").then((res: RetrieveFormFieldWithIdResponse) => {
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
import { FormTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveFormWithId("doloremque").then((res: RetrieveFormWithIdResponse) => {
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

sdk.sdk.retrieveGroupWithId("sint", "sed").then((res: RetrieveGroupWithIdResponse) => {
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
import { IPAccessControlEntryActionEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveIPAccessControlListWithId("asperiores").then((res: RetrieveIPAccessControlListWithIdResponse) => {
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

sdk.sdk.retrieveIdentityProvider("nulla", "sint", "saepe").then((res: RetrieveIdentityProviderResponse) => {
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

sdk.sdk.retrieveIdentityProviderByTypeWithId("a").then((res: RetrieveIdentityProviderByTypeWithIdResponse) => {
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

sdk.sdk.retrieveIdentityProviderWithId("libero").then((res: RetrieveIdentityProviderWithIdResponse) => {
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

sdk.sdk.retrieveJwt("ullam", "natus").then((res: RetrieveJwtResponse) => {
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveKeyWithId("aut").then((res: RetrieveKeyWithIdResponse) => {
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveLambdaWithId("inventore").then((res: RetrieveLambdaWithIdResponse) => {
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveLambdasByTypeWithId("dicta").then((res: RetrieveLambdasByTypeWithIdResponse) => {
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessageTemplatePreviewWithId({
  locale: "en_US",
  messageTemplate: {
    data: {
      "facere": {
        "quos": "sed",
      },
      "nihil": {
        "eum": "praesentium",
      },
    },
    id: "cf4d6cfb-86a1-4c4b-a0ad-e5518d6f419e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mr. Terrence Runolfsdottir",
    type: MessageTypeEnum.Sms,
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessageTemplateWithId("neque").then((res: RetrieveMessageTemplateWithIdResponse) => {
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
import { MessengerTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveMessengerWithId("ullam").then((res: RetrieveMessengerWithIdResponse) => {
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

sdk.sdk.retrieveMonthlyActiveReportWithId("maxime", "odit", "quidem").then((res: RetrieveMonthlyActiveReportWithIdResponse) => {
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
  ClientAuthenticationPolicyEnum,
  LogoutBehaviorEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ProofKeyForCodeExchangePolicyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveOauthConfigurationWithId("iste", "cum").then((res: RetrieveOauthConfigurationWithIdResponse) => {
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
import { BreachActionEnum, BreachMatchModeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrievePasswordValidationRulesWithTenantIdWithId("numquam").then((res: RetrievePasswordValidationRulesWithTenantIdWithIdResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrievePendingChildrenWithId("aliquid").then((res: RetrievePendingChildrenWithIdResponse) => {
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
import { DeviceTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRefreshTokenByIdWithId("suscipit").then((res: RetrieveRefreshTokenByIdWithIdResponse) => {
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
import { DeviceTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRefreshTokensWithId("voluptate").then((res: RetrieveRefreshTokensWithIdResponse) => {
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

sdk.sdk.retrieveRegistrationReportWithId("illum", "laboriosam", "consequatur").then((res: RetrieveRegistrationReportWithIdResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveRegistrationWithId("beatae", "nobis", "ratione").then((res: RetrieveRegistrationWithIdResponse) => {
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
  applicationId: "at",
  end: "provident",
  loginId: "expedita",
  start: "ex",
  userId: "facilis",
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveTenantWithId("error", "iure").then((res: RetrieveTenantWithIdResponse) => {
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

sdk.sdk.retrieveThemeWithId("repellendus").then((res: RetrieveThemeWithIdResponse) => {
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

sdk.sdk.retrieveTwoFactorRecoveryCodesWithId("quis").then((res: RetrieveTwoFactorRecoveryCodesWithIdResponse) => {
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

sdk.sdk.retrieveTwoFactorStatusWithId("veritatis", "sit", "quod").then((res: RetrieveTwoFactorStatusWithIdResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUser({
  xFusionAuthTenantId: "veniam",
  changePasswordId: "deleniti",
  email: "Wilma_Schimmel@hotmail.com",
  loginId: "omnis",
  username: "Verla95",
  verificationId: "occaecati",
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserAction("debitis", "dicta").then((res: RetrieveUserActionResponse) => {
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

sdk.sdk.retrieveUserActionReasonWithId("temporibus").then((res: RetrieveUserActionReasonWithIdResponse) => {
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserActionWithId("totam", "illum").then((res: RetrieveUserActionWithIdResponse) => {
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

sdk.sdk.retrieveUserActioning("perspiciatis", "voluptatum", "sint").then((res: RetrieveUserActioningResponse) => {
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

sdk.sdk.retrieveUserChangePassword("labore").then((res: RetrieveUserChangePasswordResponse) => {
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

sdk.sdk.retrieveUserCommentsWithId("dolore", "aspernatur").then((res: RetrieveUserCommentsWithIdResponse) => {
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserConsentWithId("fuga").then((res: RetrieveUserConsentWithIdResponse) => {
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserConsentsWithId("minus").then((res: RetrieveUserConsentsWithIdResponse) => {
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
import { OAuthErrorReasonEnum, OAuthErrorTypeEnum, TOTPAlgorithmEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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

sdk.sdk.retrieveUserRecentLogin("libero", "reiciendis", "molestiae").then((res: RetrieveUserRecentLoginResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveUserWithId("dolorum", "modi").then((res: RetrieveUserWithIdResponse) => {
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
import { AttestationTypeEnum, CoseAlgorithmIdentifierEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebAuthnCredentialWithId("soluta").then((res: RetrieveWebAuthnCredentialWithIdResponse) => {
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
import { AttestationTypeEnum, CoseAlgorithmIdentifierEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.retrieveWebAuthnCredentialsForUserWithId("voluptatum").then((res: RetrieveWebAuthnCredentialsForUserWithIdResponse) => {
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

sdk.sdk.retrieveWebhookWithId("cum").then((res: RetrieveWebhookWithIdResponse) => {
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

sdk.sdk.revokeRefreshTokenByIdWithId("quod").then((res: RevokeRefreshTokenByIdWithIdResponse) => {
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

sdk.sdk.revokeUserConsentWithId("quis").then((res: RevokeUserConsentWithIdResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchApplicationsWithId({
  search: {
    name: "Darin Rowe",
    numberOfResults: 241299,
    orderBy: "recusandae",
    startRow: 502175,
    state: ObjectStateEnum.Inactive,
    tenantId: "2d5d606d-37fb-455c-98e0-b5f5190b2bcd",
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
    message: "nisi",
    newValue: "optio",
    numberOfResults: 442524,
    oldValue: "rem",
    orderBy: "doloremque",
    reason: "asperiores",
    start: 1659380719000,
    startRow: 373578,
    user: "maxime",
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
    name: "Sally Mertz",
    numberOfResults: 633071,
    orderBy: "aut",
    startRow: 588180,
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
    name: "Ebony Lockman",
    numberOfResults: 6997,
    orderBy: "cum",
    startRow: 986472,
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

sdk.sdk.searchEntitiesByIdsWithId("vel").then((res: SearchEntitiesByIdsWithIdResponse) => {
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
import { SortEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEntitiesWithId({
  search: {
    accurateTotal: false,
    ids: [
      "5cd0a279-a3f0-49cf-b64b-250d0349bd54",
      "9c62ef65-eaa3-4dfa-90f3-ff1a1e212eef",
      "78003b8c-692c-4d81-91e0-86e8d6256647",
    ],
    query: "accusantium",
    queryString: "iure",
    sortFields: [
      {
        missing: "cumque",
        name: "Terry Graham",
        order: SortEnum.Asc,
      },
      {
        missing: "quae",
        name: "Jeannette Mertz",
        order: SortEnum.Desc,
      },
      {
        missing: "quibusdam",
        name: "David Bahringer",
        order: SortEnum.Desc,
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
    entityId: "6c7bc477-ec79-4fab-8b7c-20a90b6cf77e",
    name: "Ramiro Klein",
    numberOfResults: 856250,
    orderBy: "ducimus",
    startRow: 435233,
    userId: "2147d417-d525-488d-ae60-45ff60751011",
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
    name: "Neal Weber",
    numberOfResults: 586193,
    orderBy: "reiciendis",
    startRow: 244180,
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
import { EventLogTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchEventLogsWithId({
  search: {
    end: 1659380719000,
    message: "natus",
    numberOfResults: 464434,
    orderBy: "quos",
    start: 1659380719000,
    startRow: 392284,
    type: EventLogTypeEnum.Information,
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchGroupMembersWithId({
  search: {
    groupId: "502563ff-3020-44e0-92bc-a853b353a4da",
    numberOfResults: 306930,
    orderBy: "magnam",
    startRow: 52948,
    tenantId: "f210a8ae-6ea1-4036-a956-5852001331a2",
    userId: "febac63f-2b6d-4162-952d-6ce56bfdcbe4",
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
    name: "Jermaine Sporer V",
    numberOfResults: 713683,
    orderBy: "ab",
    startRow: 970648,
    tenantId: "79a3d9a4-9db4-49e6-b5d1-5c08ce2c9d70",
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
import { IPAccessControlEntryActionEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchIPAccessControlListsWithId({
  search: {
    name: "Nicholas Harvey Sr.",
    numberOfResults: 662,
    orderBy: "est",
    startRow: 220732,
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
import { IdentityProviderTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchIdentityProvidersWithId({
  search: {
    applicationId: "24206c59-805a-43fd-9189-d6eddb30d497",
    name: "Doreen Wilkinson",
    numberOfResults: 115217,
    orderBy: "asperiores",
    startRow: 426398,
    type: IdentityProviderTypeEnum.ExternalJWT,
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchKeysWithId({
  search: {
    algorithm: KeyAlgorithmEnum.Hs256,
    name: "Susie Kunde",
    numberOfResults: 87474,
    orderBy: "pariatur",
    startRow: 290592,
    type: KeyTypeEnum.Hmac,
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchLambdasWithId({
  search: {
    body: "excepturi",
    name: "Edna Leannon",
    numberOfResults: 748538,
    orderBy: "ratione",
    startRow: 741061,
    type: LambdaTypeEnum.JWTPopulate,
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
    applicationId: "d545b391-239d-4bc8-be60-55a284a7bf89",
    end: 1659380719000,
    numberOfResults: 334748,
    orderBy: "omnis",
    start: 1659380719000,
    startRow: 639295,
    userId: "d1f77d15-8b09-4a21-a5f0-a0e27f952926",
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchTenantsWithId({
  search: {
    name: "Joel Brekke",
    numberOfResults: 756835,
    orderBy: "non",
    startRow: 709769,
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
    name: "Mr. Alan Orn",
    numberOfResults: 697711,
    orderBy: "omnis",
    startRow: 795579,
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
    comment: "magnam",
    commenterId: "42ad7d6e-2656-48d7-84d7-2fb26b870795",
    numberOfResults: 669612,
    orderBy: "debitis",
    startRow: 47796,
    tenantId: "bd15ca30-534b-4f33-a366-e538e4cb93d6",
    userId: "aac4a2c4-64dc-45ce-9dc6-a656ee85c0ab",
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchUsersByIdsWithId("commodi").then((res: SearchUsersByIdsWithIdResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  SortEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.searchUsersByQueryWithId({
  search: {
    accurateTotal: false,
    ids: [
      "08d52c78-3e62-42aa-9f94-4c209ffe0f35",
      "5c11c830-77cf-4911-b8a2-6350680f7f4c",
    ],
    query: "dolores",
    queryString: "commodi",
    sortFields: [
      {
        missing: "reprehenderit",
        name: "Lynn Marquardt",
        order: SortEnum.Asc,
      },
      {
        missing: "quibusdam",
        name: "Timmy Grant",
        order: SortEnum.Asc,
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
    description: "et",
    numberOfResults: 411479,
    orderBy: "maiores",
    startRow: 868819,
    tenantId: "19a3eb7b-58e4-4c90-83bd-f96727145e62",
    url: "possimus",
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

sdk.sdk.sendEmailWithId("dolorem", {
  applicationId: "77a81a47-5597-48e1-b34b-9830ea4c286a",
  bccAddresses: [
    "numquam",
    "reiciendis",
  ],
  ccAddresses: [
    "nulla",
  ],
  preferredLanguages: [
    "en_US",
  ],
  requestData: {
    "optio": {
      "debitis": "ipsum",
      "recusandae": "earum",
      "eius": "soluta",
    },
    "ab": {
      "quas": "doloremque",
      "nostrum": "dolores",
      "harum": "beatae",
    },
    "est": {
      "accusamus": "laudantium",
      "ullam": "velit",
      "similique": "rem",
    },
    "maiores": {
      "expedita": "aspernatur",
    },
  },
  toAddresses: [
    {
      address: "07485 Jalyn Wells",
      display: "quidem",
    },
    {
      address: "8707 Friesen Village",
      display: "voluptates",
    },
    {
      address: "3049 Kreiger Port",
      display: "autem",
    },
    {
      address: "14137 Devin Fields",
      display: "vitae",
    },
  ],
  userIds: [
    "08475c73-689b-4c57-a92d-c6123d096cd8",
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
  parentEmail: "officiis",
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
  applicationId: "5d3d525e-a0d4-4665-86c9-e14b31db5c1d",
  code: "vero",
  loginId: "nulla",
  state: {
    "deserunt": {
      "natus": "sint",
    },
    "quaerat": {
      "suscipit": "iure",
      "eaque": "quae",
      "quidem": "quaerat",
      "praesentium": "suscipit",
    },
    "quidem": {
      "placeat": "ullam",
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
  email: "Marilie_Ullrich76@hotmail.com",
  method: "voluptatibus",
  methodId: "accusamus",
  mobilePhone: "quaerat",
  userId: "b305f4b0-7869-4ee0-a1c3-4f0a6a93c002",
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

sdk.sdk.sendTwoFactorCodeForLoginUsingMethodWithId("molestias", {
  email: "Edythe.Baumbach46@hotmail.com",
  method: "doloribus",
  methodId: "dolor",
  mobilePhone: "quae",
  userId: "3578985e-bf97-4a0d-a533-15a474f59dae",
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
import { DeviceTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startIdentityProviderLoginWithId({
  applicationId: "aa4ea183-7b9e-4d92-a341-715612927261",
  data: {
    "sequi": "a",
    "perferendis": "rerum",
    "eaque": "quae",
    "corrupti": "ab",
  },
  identityProviderId: "e0146553-ffae-46f1-b9fa-c8c5639aaa69",
  ipAddress: "laboriosam",
  loginId: "consequatur",
  metaData: {
    data: {
      "corrupti": {
        "qui": "suscipit",
        "dicta": "doloremque",
      },
      "ipsa": {
        "recusandae": "ullam",
        "natus": "sunt",
        "doloremque": "voluptates",
        "iure": "rerum",
      },
      "at": {
        "occaecati": "natus",
        "velit": "suscipit",
        "nostrum": "eligendi",
      },
    },
    device: {
      description: "dolores",
      lastAccessedAddress: "sed",
      lastAccessedInstant: 1659380719000,
      name: "Sabrina Rogahn",
      type: DeviceTypeEnum.Tv,
    },
    scopes: [
      "nobis",
      "illo",
      "reprehenderit",
    ],
  },
  newDevice: false,
  noJWT: false,
  state: {
    "earum": {
      "odit": "libero",
      "nulla": "natus",
    },
    "ipsa": {
      "libero": "a",
      "molestiae": "vero",
    },
    "laborum": {
      "laborum": "est",
      "at": "doloremque",
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
  applicationId: "ba6fb178-569d-4f1b-b7b4-4d3ede7e0cc9",
  loginId: "similique",
  state: {
    "dignissimos": {
      "repellendus": "illum",
      "illo": "voluptatum",
      "blanditiis": "tempora",
      "dolore": "voluptas",
    },
    "laudantium": {
      "molestias": "nulla",
      "distinctio": "a",
      "eum": "error",
      "necessitatibus": "deserunt",
    },
    "quisquam": {
      "consequatur": "amet",
      "vitae": "enim",
      "expedita": "eveniet",
      "magnam": "enim",
    },
    "fugit": {
      "molestias": "delectus",
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
import { TOTPAlgorithmEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startTwoFactorLoginWithId({
  applicationId: "93e42e68-8270-4956-93e8-966ab9b0ccca",
  code: "autem",
  loginId: "nam",
  state: {
    "quas": {
      "ipsa": "corporis",
      "ut": "provident",
      "debitis": "ipsa",
      "error": "dolorem",
    },
    "doloribus": {
      "eaque": "alias",
      "inventore": "iste",
      "quia": "voluptate",
      "deserunt": "culpa",
    },
  },
  trustChallenge: "doloremque",
  userId: "0a24781d-7b4c-482b-baa2-8f612b795b82",
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
import {
  PublicKeyCredentialTypeEnum,
  UserVerificationRequirementEnum,
  WebAuthnWorkflowEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startWebAuthnLoginWithId({
  applicationId: "64eafa2c-5f2d-476c-a9e2-d5414483a96a",
  credentialId: "5f7713e6-4209-4556-97e7-960c571d7c1f",
  loginId: "repellat",
  state: {
    "sapiente": {
      "veniam": "quisquam",
    },
    "quasi": {
      "adipisci": "nihil",
      "fugiat": "laborum",
      "eos": "tenetur",
      "unde": "suscipit",
    },
    "occaecati": {
      "necessitatibus": "atque",
      "tenetur": "cumque",
      "harum": "itaque",
    },
  },
  userId: "8aa6ee29-7666-4a08-b294-5ea3f929de4b",
  workflow: WebAuthnWorkflowEnum.General,
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
  AttestationConveyancePreferenceEnum,
  AuthenticatorAttachmentEnum,
  CoseAlgorithmIdentifierEnum,
  PublicKeyCredentialTypeEnum,
  ResidentKeyRequirementEnum,
  UserVerificationRequirementEnum,
  WebAuthnWorkflowEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.startWebAuthnRegistrationWithId({
  displayName: "nulla",
  name: "Ms. Archie Balistreri MD",
  userAgent: "distinctio",
  userId: "e46df98f-b29b-4c5a-ae79-dfff2b2c2ec3",
  workflow: WebAuthnWorkflowEnum.Reauthentication,
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
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  DeviceTypeEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.twoFactorLoginWithId({
  applicationId: "bd2cf909-5862-4a26-a51b-11016ecfb244",
  code: "quae",
  ipAddress: "repellat",
  metaData: {
    data: {
      "dignissimos": {
        "deserunt": "ad",
      },
      "odit": {
        "minima": "iusto",
        "dolor": "doloremque",
      },
      "itaque": {
        "ducimus": "eos",
        "cumque": "ut",
        "asperiores": "nisi",
      },
      "vero": {
        "eum": "quam",
      },
    },
    device: {
      description: "voluptates",
      lastAccessedAddress: "molestias",
      lastAccessedInstant: 1659380719000,
      name: "Max Pagac",
      type: DeviceTypeEnum.Desktop,
    },
    scopes: [
      "cumque",
    ],
  },
  newDevice: false,
  noJWT: false,
  trustComputer: false,
  twoFactorId: "facere",
  userId: "d21dab1b-b92d-441a-8216-8089cd447c67",
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

sdk.sdk.updateAPIKeyWithId("aliquam", {
  apiKey: {
    id: "0a2aadc1-c0d2-4f87-bfc0-a436ebc4bf9d",
    insertInstant: 1659380719000,
    ipAccessControlListId: "07ac3b6f-d910-4131-a76d-1e6e763f4001",
    key: "sint",
    keyManager: false,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "cupiditate": "est",
        "eius": "amet",
      },
    },
    permissions: {
      endpoints: {
        "voluptate": [
          "fugiat",
          "vitae",
          "sapiente",
        ],
      },
    },
    tenantId: "45625e0d-4cb7-42ef-be42-1a55b3d89c67",
  },
  sourceKeyId: "61065a51-3577-4287-a6c4-489aa1be47bd",
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateApplicationRoleWithId("error", "assumenda", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "7f1a1982-21cd-4981-be5c-a0aadcb96ab1",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "dicta",
      applicationIds: [
        "e5d9dd21-2e41-42db-ac4c-4839c806146a",
      ],
      enabled: false,
      url: "deleniti",
      usernameModeration: {
        applicationId: "d4ea1453-1c3f-47b5-a84e-d70076c25851",
        enabled: false,
      },
    },
    data: {
      "nihil": {
        "assumenda": "quaerat",
        "laudantium": "quod",
        "culpa": "quibusdam",
        "adipisci": "quas",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "39efe8ed-8270-4fec-83a3-80990093cb94",
      emailVerificationEmailTemplateId: "699cbf4e-0962-4f0d-b2c8-a24b337afb5b",
      emailVerifiedEmailTemplateId: "1c7ee030-852a-4e1d-99bd-b9ba366c5cca",
      forgotPasswordEmailTemplateId: "4ab4a3d1-ad49-40da-9529-6e0bff3ae92a",
      loginIdInUseOnCreateEmailTemplateId: "6bfc5eae-bf73-4aba-82bf-c7a8b9cd5bd0",
      loginIdInUseOnUpdateEmailTemplateId: "2e695de3-b9fb-4c7a-8308-ed78d6d0b86c",
      loginNewDeviceEmailTemplateId: "b7cae6bf-2fc9-4986-af41-079e80e228e7",
      loginSuspiciousEmailTemplateId: "157aa88c-1535-4075-9de3-389030692a6c",
      passwordResetSuccessEmailTemplateId: "e9c91f57-b0fc-4903-bd16-ce1e85e46326",
      passwordUpdateEmailTemplateId: "924fe84a-d037-496e-ba44-c987761d9d7d",
      passwordlessEmailTemplateId: "6f8ccff8-f025-4f2b-bc7c-e0667bae96d4",
      setPasswordEmailTemplateId: "517a1fa6-6fd2-433b-80d5-7989845b9c9d",
      twoFactorMethodAddEmailTemplateId: "0ef75a89-63dd-48a0-91b9-fcf9632428dc",
      twoFactorMethodRemoveEmailTemplateId: "c410efc3-0e0f-4b62-af05-f67ac4abcb06",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 467968,
    },
    formConfiguration: {
      adminRegistrationFormId: "071fa51f-25b3-45eb-bd25-2de614f88183",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "c3ecdd20-ddf2-43b4-a2b6-cf0d1eb94bc1",
    },
    id: "097edb77-f11f-4429-98b3-5d0cf6a59f39",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "710f30a8-0c9f-4210-9a0c-168fca0a1e63",
      enabled: false,
      idTokenKeyId: "d05ae618-f8f7-4584-a738-f6b08a633b3c",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 563030,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 730598,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "bf3ef68d-9843-4880-8481-7b3606f2b35b",
      idTokenPopulateId: "0f3be90e-23d4-4c05-96cd-2cc43042c622",
      samlv2PopulateId: "d041e83d-7674-499a-94cb-7a9a10d7450d",
      selfServiceRegistrationValidationId: "8b1e15b8-1976-4d26-8b04-720895e0aca4",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "0ee9ca13-1bf2-4a52-a877-c4f7c4f4cf09",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Enabled,
      sms: {
        templateId: "c850c4c6-c044-4c43-9f74-205f200c4bae",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.This,
    },
    name: "Kyle Reynolds",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "quidem",
        "adipisci",
        "aut",
      ],
      authorizedRedirectURLs: [
        "odio",
        "illo",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.NotRequired,
      clientId: "sed",
      clientSecret: "architecto",
      debug: false,
      deviceVerificationURL: "officiis",
      enabledGrants: [
        "unde",
        "corporis",
        "deleniti",
        "reiciendis",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "molestiae",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.NotRequired,
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
      formId: "cbe22a83-773d-4278-a368-914077403d7b",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Basic,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 412584,
      },
    },
    roles: [
      {
        description: "in",
        id: "11c53063-91c7-475b-9e87-8f5365fd26f3",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Sylvia Haag",
      },
      {
        description: "animi",
        id: "60afc164-ce72-4901-9f8c-fa4080000573",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Tanya O'Keefe",
      },
    ],
    samlv2Configuration: {
      audience: "a",
      authorizedRedirectURLs: [
        "sit",
        "minus",
        "culpa",
      ],
      callbackURL: "asperiores",
      debug: false,
      defaultVerificationKeyId: "05635526-b4fb-4add-9fbf-75357ef542bc",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "sunt",
      },
      issuer: "incidunt",
      keyId: "01fc2f74-3d61-4627-b14c-bdaea73041b7",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.AllParticipants,
        defaultVerificationKeyId: "e2ec9910-6e0a-4ed3-bea1-3f8b959c4d1b",
        keyId: "599f6994-f771-4689-94cc-334cbff3a397",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "d3dc8990-936c-4b23-87b0-5cc4980f2091",
          url: "perferendis",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.InclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Exclusive,
      },
      logoutURL: "omnis",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      xmlSignatureLocation: XMLSignatureLocationEnum.Assertion,
    },
    state: ObjectStateEnum.PendingDelete,
    tenantId: "27e2eb3a-73e4-415a-ade1-16b609237709",
    themeId: "2f83b4c3-7b9a-46cb-87a6-7bbdd3de5b6e",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Allow,
    },
    verificationEmailTemplateId: "a351eb7d-3cf5-4919-bbd4-c1bcc682759b",
    verificationStrategy: VerificationStrategyEnum.FormField,
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
      "sunt": {
        "debitis": "quaerat",
      },
      "voluptatem": {
        "expedita": "autem",
        "est": "ipsam",
        "odit": "quisquam",
        "dolorum": "nihil",
      },
      "sequi": {
        "quod": "maiores",
        "eveniet": "debitis",
        "voluptatibus": "alias",
        "delectus": "optio",
      },
    },
    deviceDescription: "similique",
    deviceName: "fugiat",
    deviceType: "eveniet",
    ipAddress: "labore",
    location: {
      city: "Kenner",
      country: "Latvia",
      displayString: "quos",
      latitude: 4613.03,
      longitude: 8920.26,
      region: "perspiciatis",
      zipcode: "66316-6830",
    },
    os: "repellendus",
    userAgent: "fugit",
  },
  role: {
    description: "nesciunt",
    id: "1681549b-7716-496b-8dca-1ef68ada09a7",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Nellie VonRueden",
  },
  sourceApplicationId: "84f2312d-52f6-48fb-9a32-9c7759e772b4",
}, "aliquid").then((res: UpdateApplicationRoleWithIdResponse) => {
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
  ApplicationMultiFactorTrustPolicyEnum,
  CanonicalizationMethodEnum,
  ClientAuthenticationPolicyEnum,
  LoginIdTypeEnum,
  LogoutBehaviorEnum,
  MultiFactorLoginPolicyEnum,
  Oauth2AuthorizedURLValidationPolicyEnum,
  ObjectStateEnum,
  ProofKeyForCodeExchangePolicyEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  RegistrationTypeEnum,
  SAMLLogoutBehaviorEnum,
  UnverifiedBehaviorEnum,
  VerificationStrategyEnum,
  XMLSignatureLocationEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateApplicationWithId("sunt", {
  application: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "587c5b37-31b2-41aa-81fe-638828188222",
    },
    active: false,
    authenticationTokenConfiguration: {
      enabled: false,
    },
    cleanSpeakConfiguration: {
      apiKey: "similique",
      applicationIds: [
        "974618ef-e00a-42cd-8c29-51ed53bd566d",
        "f0a5b7ee-d242-473d-9231-21c279be41b0",
      ],
      enabled: false,
      url: "cumque",
      usernameModeration: {
        applicationId: "74de0a42-89b1-4dfe-bb15-fb3d75856722",
        enabled: false,
      },
    },
    data: {
      "esse": {
        "nulla": "iusto",
      },
      "facere": {
        "et": "laudantium",
        "aut": "quasi",
        "eum": "temporibus",
        "nostrum": "ipsum",
      },
      "cupiditate": {
        "officia": "similique",
        "dolorum": "repudiandae",
        "nam": "sint",
        "itaque": "odio",
      },
    },
    emailConfiguration: {
      emailUpdateEmailTemplateId: "ca2d0405-c309-43f4-aa73-d47097c1958d",
      emailVerificationEmailTemplateId: "0110a5a2-8099-42cd-9e65-b7a28ef77a06",
      emailVerifiedEmailTemplateId: "98a508a6-fb3b-42d3-9f01-5149fd2fcdd2",
      forgotPasswordEmailTemplateId: "68f98158-3889-4dcb-bfe9-15d70b3c97d9",
      loginIdInUseOnCreateEmailTemplateId: "e9657fc1-d681-4e28-bb57-36b4562e8929",
      loginIdInUseOnUpdateEmailTemplateId: "bac35916-4e58-4dac-a624-8e69d0df9bf3",
      loginNewDeviceEmailTemplateId: "78f6f50e-6a32-45cf-9d53-d7cc701e9c25",
      loginSuspiciousEmailTemplateId: "215fc28a-c787-4569-b347-f1b816e1e079",
      passwordResetSuccessEmailTemplateId: "58f518a4-3713-43c8-97b9-278f364054c6",
      passwordUpdateEmailTemplateId: "bf09ce62-da0a-4640-a0e8-f989c08cf7ea",
      passwordlessEmailTemplateId: "ced31459-e798-4d63-9d3f-bffac42fbcef",
      setPasswordEmailTemplateId: "1324e6ad-9f10-4485-b36a-c7e931bb6686",
      twoFactorMethodAddEmailTemplateId: "8e4b103c-4a4b-4aac-be6c-91648438ac3d",
      twoFactorMethodRemoveEmailTemplateId: "cfdeb689-4161-415c-b94d-bbcdf05c65d6",
    },
    externalIdentifierConfiguration: {
      twoFactorTrustIdTimeToLiveInSeconds: 811364,
    },
    formConfiguration: {
      adminRegistrationFormId: "7ff4ca97-7c8b-4731-8b68-3e5e4a1fdc2e",
      selfServiceFormConfiguration: {
        requireCurrentPasswordOnPasswordChange: false,
      },
      selfServiceFormId: "5b02b137-e674-402d-b435-78d0d6808423",
    },
    id: "cd146e9e-ffae-47e4-92b0-8d544e08118d",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "932fa34c-5dd2-4b83-87f8-29c49b427392",
      enabled: false,
      idTokenKeyId: "7f77186a-8b2e-4713-ab48-ce5b79f781b7",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.Fixed,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 649732,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.Reusable,
      timeToLiveInSeconds: 169768,
    },
    lambdaConfiguration: {
      accessTokenPopulateId: "f4b327fe-e866-4c63-bf18-3547285224cb",
      idTokenPopulateId: "be601a03-38c3-46cf-b106-e66b999d5ca6",
      samlv2PopulateId: "db0b3c5b-f430-4379-9f48-7f55b3826990",
      selfServiceRegistrationValidationId: "3c5a27df-892c-47dc-baf4-223616158ca5",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      allowTokenRefresh: false,
      generateRefreshTokens: false,
      requireAuthentication: false,
    },
    multiFactorConfiguration: {
      email: {
        templateId: "64af97ed-f9d8-4184-8059-941d46ecd1db",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Disabled,
      sms: {
        templateId: "8db35635-bf29-4b90-8b00-a4c81e1e8ffb",
      },
      trustPolicy: ApplicationMultiFactorTrustPolicyEnum.None,
    },
    name: "Kirk Ebert",
    oauthConfiguration: {
      authorizedOriginURLs: [
        "consectetur",
        "eligendi",
        "unde",
        "sapiente",
      ],
      authorizedRedirectURLs: [
        "non",
      ],
      authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicyEnum.AllowWildcards,
      clientAuthenticationPolicy: ClientAuthenticationPolicyEnum.Required,
      clientId: "nemo",
      clientSecret: "sit",
      debug: false,
      deviceVerificationURL: "iusto",
      enabledGrants: [
        "ut",
        "ea",
        "amet",
      ],
      generateRefreshTokens: false,
      logoutBehavior: LogoutBehaviorEnum.RedirectOnly,
      logoutURL: "modi",
      proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicyEnum.Required,
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
      formId: "ed39dd7d-5329-460d-9445-2cfc7497375d",
      fullName: {
        enabled: false,
        required: false,
      },
      lastName: {
        enabled: false,
        required: false,
      },
      loginIdType: LoginIdTypeEnum.Email,
      middleName: {
        enabled: false,
        required: false,
      },
      mobilePhone: {
        enabled: false,
        required: false,
      },
      type: RegistrationTypeEnum.Advanced,
    },
    registrationDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 518514,
      },
    },
    roles: [
      {
        description: "officia",
        id: "897cee41-84ff-421f-ac28-a6811b15924d",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Jack Spinka",
      },
      {
        description: "quo",
        id: "4b84e18b-6d40-4835-94dd-f21c9c9ab540",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Alvin Schinner",
      },
      {
        description: "neque",
        id: "396335f6-4054-4ad3-b092-c2f8f285f75a",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Stacey Stroman",
      },
      {
        description: "accusamus",
        id: "19eb26fb-fcad-4402-9488-234d1e9aca78",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Rosa Becker",
      },
    ],
    samlv2Configuration: {
      audience: "libero",
      authorizedRedirectURLs: [
        "doloremque",
        "voluptates",
        "enim",
        "architecto",
      ],
      callbackURL: "non",
      debug: false,
      defaultVerificationKeyId: "37cd0874-cce2-4998-9b41-4bd6bb86a678",
      enabled: false,
      initiatedLogin: {
        enabled: false,
        nameIdFormat: "suscipit",
      },
      issuer: "dolor",
      keyId: "87ab2aeb-aa4f-4179-be75-fc91a1f43969",
      logout: {
        behavior: SAMLLogoutBehaviorEnum.AllParticipants,
        defaultVerificationKeyId: "e2a2c467-bbf8-4633-ba93-a04e03f30712",
        keyId: "720b02f0-2e12-4a36-94de-edc857198523",
        requireSignedRequests: false,
        singleLogout: {
          enabled: false,
          keyId: "1663f708-6afd-400f-9e7b-ca5e9a6c008e",
          url: "doloremque",
          xmlSignatureC14nMethod: CanonicalizationMethodEnum.InclusiveWithComments,
        },
        xmlSignatureC14nMethod: CanonicalizationMethodEnum.Inclusive,
      },
      logoutURL: "exercitationem",
      requireSignedRequests: false,
      xmlSignatureC14nMethod: CanonicalizationMethodEnum.InclusiveWithComments,
      xmlSignatureLocation: XMLSignatureLocationEnum.Assertion,
    },
    state: ObjectStateEnum.Active,
    tenantId: "96787808-5014-4b89-9793-9c771cb838e3",
    themeId: "ed614539-9c28-421b-a410-63e4358f402e",
    unverified: {
      behavior: UnverifiedBehaviorEnum.Gated,
    },
    verificationEmailTemplateId: "9e84508f-4ab3-4134-b27b-6f475e103a56",
    verificationStrategy: VerificationStrategyEnum.ClickableLink,
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
        "voluptatibus": "blanditiis",
        "eos": "placeat",
        "nisi": "cum",
        "vero": "officia",
      },
      "id": {
        "tenetur": "quidem",
        "architecto": "ducimus",
        "dignissimos": "iusto",
      },
      "reiciendis": {
        "distinctio": "veritatis",
        "illum": "exercitationem",
        "corporis": "praesentium",
        "natus": "voluptatibus",
      },
      "nisi": {
        "repudiandae": "voluptatum",
        "nobis": "sapiente",
      },
    },
    deviceDescription: "nemo",
    deviceName: "inventore",
    deviceType: "minima",
    ipAddress: "dolore",
    location: {
      city: "Handstad",
      country: "India",
      displayString: "consequatur",
      latitude: 9732.75,
      longitude: 8079.85,
      region: "aperiam",
      zipcode: "42923",
    },
    os: "recusandae",
    userAgent: "veniam",
  },
  role: {
    description: "quibusdam",
    id: "3efe6e82-dcf5-4f37-aa92-b387827a67b8",
    insertInstant: 1659380719000,
    isDefault: false,
    isSuperRole: false,
    lastUpdateInstant: 1659380719000,
    name: "Norman Vandervort",
  },
  sourceApplicationId: "0c422886-7fbe-4fec-af3c-a7c4211ea83c",
}, "aliquam", "blanditiis").then((res: UpdateApplicationWithIdResponse) => {
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
import { ConnectorTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateConnectorWithId("quasi", {
  connector: {
    data: {
      "omnis": {
        "distinctio": "voluptatem",
        "temporibus": "assumenda",
      },
    },
    debug: false,
    id: "cb7fb07c-89b4-4638-9fc6-e86783c99bc0",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Randall Gerlach",
    type: ConnectorTypeEnum.Ldap,
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

sdk.sdk.updateConsentWithId("magni", {
  consent: {
    consentEmailTemplateId: "c8a507ef-4e82-447a-b181-738d28a8976c",
    countryMinimumAgeForSelfConsent: {
      "assumenda": "numquam",
      "consectetur": "praesentium",
    },
    data: {
      "quae": {
        "dolore": "perferendis",
        "sapiente": "aperiam",
        "amet": "maxime",
        "ratione": "sint",
      },
      "minus": {
        "laborum": "fugit",
        "vel": "corporis",
        "voluptate": "nulla",
      },
    },
    defaultMinimumAgeForSelfConsent: 856002,
    emailPlus: {
      emailTemplateId: "2d3bdfdc-3c04-40f7-b5c4-914907a95867",
      enabled: false,
      maximumTimeToSendEmailInHours: 819293,
      minimumTimeToSendEmailInHours: 986512,
    },
    id: "b2d785cd-cf8a-44e7-b48b-452fa68fdda5",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    multipleValuesAllowed: false,
    name: "Judy Grady",
    values: [
      "et",
      "sit",
    ],
  },
}, "deserunt").then((res: UpdateConsentWithIdResponse) => {
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

sdk.sdk.updateEmailTemplateWithId("vitae", {
  emailTemplate: {
    defaultFromName: "minima",
    defaultHtmlTemplate: "eius",
    defaultSubject: "provident",
    defaultTextTemplate: "officiis",
    fromEmail: "harum",
    id: "cf6c081e-24d0-4e6b-bbd0-49d570e9194c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {
      "ex": "esse",
      "fuga": "tempore",
      "minus": "architecto",
    },
    localizedHtmlTemplates: {
      "eveniet": "iure",
      "fugiat": "rem",
      "sit": "modi",
      "accusantium": "libero",
    },
    localizedSubjects: {
      "ut": "aliquid",
      "nemo": "in",
      "dolores": "sunt",
      "et": "beatae",
    },
    localizedTextTemplates: {
      "placeat": "sed",
    },
    name: "Wendy White",
  },
}, "commodi").then((res: UpdateEmailTemplateWithIdResponse) => {
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

sdk.sdk.updateEntityTypePermissionWithId("consequatur", "officia", {
  entityType: {
    data: {
      "quos": {
        "harum": "ducimus",
        "nulla": "minima",
      },
      "beatae": {
        "quod": "exercitationem",
        "cupiditate": "voluptatem",
        "laboriosam": "aut",
        "odio": "facere",
      },
    },
    id: "58dfa652-59a6-4330-97a1-5118e0922c49",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "f593948b-d3ff-4adc-ae04-2cfbe2df21d9",
      enabled: false,
      timeToLiveInSeconds: 68335,
    },
    lastUpdateInstant: 1659380719000,
    name: "Jessie Leuschke",
    permissions: [
      {
        data: {
          "iusto": {
            "maxime": "eaque",
            "illum": "asperiores",
            "porro": "molestiae",
          },
          "officiis": {
            "corrupti": "temporibus",
          },
          "totam": {
            "possimus": "minus",
          },
          "laudantium": {
            "provident": "deleniti",
            "repellat": "odio",
            "ea": "error",
            "voluptates": "eum",
          },
        },
        description: "ex",
        id: "5bb30570-8ae6-4e32-beb4-a6783dd6de4d",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Lorena Hegmann",
      },
      {
        data: {
          "repellendus": {
            "quaerat": "repellat",
            "debitis": "culpa",
            "molestias": "recusandae",
          },
        },
        description: "inventore",
        id: "5f846a59-84f9-44d4-b8fe-ceac5869be0d",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Christina Stoltenberg",
      },
      {
        data: {
          "dolor": {
            "beatae": "alias",
            "perspiciatis": "ipsum",
            "repudiandae": "quia",
            "aspernatur": "deleniti",
          },
          "pariatur": {
            "saepe": "necessitatibus",
            "minima": "officiis",
            "aliquid": "provident",
          },
          "esse": {
            "architecto": "corporis",
            "pariatur": "error",
          },
          "facere": {
            "provident": "facilis",
          },
        },
        description: "autem",
        id: "bee9195b-c498-4d26-8b3c-1edac17de120",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Micheal Hermann",
      },
      {
        data: {
          "quia": {
            "unde": "necessitatibus",
            "ut": "quod",
            "cumque": "iusto",
          },
          "molestiae": {
            "quam": "rem",
            "ullam": "laudantium",
          },
          "dolor": {
            "sit": "laborum",
            "harum": "quam",
            "nobis": "aut",
          },
          "ab": {
            "minus": "beatae",
            "officiis": "praesentium",
          },
        },
        description: "deserunt",
        id: "b14fb165-aeb8-4163-99d4-41287fd310e3",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Victor Lebsack",
      },
    ],
  },
  permission: {
    data: {
      "laboriosam": {
        "praesentium": "earum",
        "commodi": "ipsum",
      },
      "sit": {
        "quaerat": "dolore",
      },
    },
    description: "autem",
    id: "7d256d57-ffa8-4668-b848-183b977bf6db",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Sally Hauck",
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

sdk.sdk.updateEntityTypeWithId("minus", {
  entityType: {
    data: {
      "iste": {
        "assumenda": "aspernatur",
        "quidem": "fugiat",
      },
      "dignissimos": {
        "sit": "non",
      },
    },
    id: "82cf31af-3878-4aa8-81ee-e5795c0163e0",
    insertInstant: 1659380719000,
    jwtConfiguration: {
      accessTokenKeyId: "f27137c0-ccff-4397-9437-36e4d7f4396e",
      enabled: false,
      timeToLiveInSeconds: 154464,
    },
    lastUpdateInstant: 1659380719000,
    name: "Jimmy Stehr",
    permissions: [
      {
        data: {
          "ab": {
            "blanditiis": "enim",
            "adipisci": "officia",
            "fugit": "accusamus",
            "delectus": "aliquid",
          },
          "dolor": {
            "aut": "enim",
            "repudiandae": "veniam",
            "ducimus": "deleniti",
          },
          "omnis": {
            "magni": "adipisci",
          },
          "alias": {
            "iure": "deleniti",
            "fugiat": "itaque",
            "quaerat": "neque",
            "culpa": "eligendi",
          },
        },
        description: "minus",
        id: "9f8906d4-5f2b-4232-aa34-e792d5402822",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Ana Hahn",
      },
      {
        data: {
          "et": {
            "explicabo": "amet",
            "rerum": "inventore",
            "enim": "necessitatibus",
            "corrupti": "eligendi",
          },
        },
        description: "quidem",
        id: "8c770e01-5103-460d-8164-fd78e2c8e7fc",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Maxine Cronin",
      },
      {
        data: {
          "rem": {
            "fugiat": "nobis",
            "quae": "recusandae",
          },
          "quas": {
            "repellat": "voluptatum",
            "explicabo": "minima",
          },
        },
        description: "quaerat",
        id: "e9c99f68-1fa0-43ea-a7cf-2a7b08cbd647",
        insertInstant: 1659380719000,
        isDefault: false,
        lastUpdateInstant: 1659380719000,
        name: "Cathy Pacocha",
      },
    ],
  },
  permission: {
    data: {
      "nam": {
        "accusantium": "minus",
        "dignissimos": "blanditiis",
      },
      "magnam": {
        "itaque": "asperiores",
        "et": "quis",
        "autem": "rerum",
      },
    },
    description: "vero",
    id: "d9d90b46-cf06-42bf-baec-a713f72e5c00",
    insertInstant: 1659380719000,
    isDefault: false,
    lastUpdateInstant: 1659380719000,
    name: "Randal Schulist DVM",
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

sdk.sdk.updateEntityWithId("assumenda", {
  entity: {
    clientId: "occaecati",
    clientSecret: "quos",
    data: {
      "tempore": {
        "modi": "ipsam",
        "vero": "eos",
        "ad": "numquam",
      },
    },
    id: "802e0a5a-cdd4-4bd0-bcdc-eedcde29d491",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Kari Dickens",
    parentId: "b0f16e73-cc18-4397-bd83-ba7c4f781500",
    tenantId: "d20039ee-1f30-47c8-ac03-5b6fe58ba858",
    type: {
      data: {
        "reiciendis": {
          "sed": "distinctio",
          "illum": "magnam",
          "aspernatur": "at",
        },
        "aliquid": {
          "quis": "dolorum",
          "perspiciatis": "dolor",
        },
        "assumenda": {
          "occaecati": "quos",
        },
      },
      id: "4235619f-9937-418f-ade3-016f2a632876",
      insertInstant: 1659380719000,
      jwtConfiguration: {
        accessTokenKeyId: "3925ec88-b112-432e-ac45-afdd3d0fe6bd",
        enabled: false,
        timeToLiveInSeconds: 786078,
      },
      lastUpdateInstant: 1659380719000,
      name: "Andre Pfannerstill",
      permissions: [
        {
          data: {
            "blanditiis": {
              "pariatur": "esse",
              "quod": "qui",
              "minus": "assumenda",
            },
            "nulla": {
              "pariatur": "veniam",
            },
            "rem": {
              "eius": "consequatur",
              "maxime": "fuga",
              "similique": "ea",
            },
            "quas": {
              "cupiditate": "sit",
              "ut": "commodi",
              "provident": "error",
              "tenetur": "architecto",
            },
          },
          description: "eum",
          id: "da5c3458-20ba-4b6e-8281-df0eb3a0e793",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Woodrow Kozey III",
        },
        {
          data: {
            "maxime": {
              "reprehenderit": "fuga",
              "quasi": "maxime",
              "nihil": "a",
            },
            "nostrum": {
              "blanditiis": "ullam",
            },
          },
          description: "maxime",
          id: "5738a617-5e04-4f7e-92b4-45c5b62c2a9f",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Casey Williamson",
        },
        {
          data: {
            "mollitia": {
              "delectus": "nostrum",
              "nemo": "ex",
              "laudantium": "illo",
            },
            "quaerat": {
              "nihil": "magnam",
              "vero": "aspernatur",
            },
          },
          description: "magni",
          id: "eb803def-b539-45c8-a948-cbe999aed49a",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Harvey Kuhn",
        },
        {
          data: {
            "cum": {
              "nostrum": "mollitia",
              "expedita": "sit",
              "provident": "eaque",
              "voluptate": "facere",
            },
          },
          description: "modi",
          id: "545ef7d8-07a0-4e2f-aed6-ec9846f6fb37",
          insertInstant: 1659380719000,
          isDefault: false,
          lastUpdateInstant: 1659380719000,
          name: "Oliver Koepp",
        },
      ],
    },
  },
}, "tenetur").then((res: UpdateEntityWithIdResponse) => {
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
import { FormControlEnum, FormDataTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateFormFieldWithId("eos", {
  field: {
    confirm: false,
    consentId: "8746c8ac-a27d-47d3-a0de-4de683ba3c12",
    control: FormControlEnum.Checkbox,
    data: {
      "eum": {
        "nihil": "beatae",
        "corporis": "vel",
      },
    },
    description: "perferendis",
    id: "6aa8aafb-2f1b-4855-8112-25017dbf4d67",
    insertInstant: 1659380719000,
    key: "soluta",
    lastUpdateInstant: 1659380719000,
    name: "Wesley Kutch",
    options: [
      "tenetur",
      "eaque",
    ],
    required: false,
    type: FormDataTypeEnum.Number,
    validator: {
      enabled: false,
      expression: "repellendus",
    },
  },
  fields: [
    {
      confirm: false,
      consentId: "2f493eef-db38-42d8-bb81-49f8ed1bbe6e",
      control: FormControlEnum.Select,
      data: {
        "vel": {
          "facilis": "corrupti",
          "dolores": "incidunt",
          "natus": "nobis",
          "ullam": "delectus",
        },
        "odio": {
          "asperiores": "optio",
          "libero": "natus",
          "quasi": "eos",
        },
      },
      description: "odit",
      id: "85a0c32a-b19a-42ac-b4a7-50edd2dee560",
      insertInstant: 1659380719000,
      key: "sit",
      lastUpdateInstant: 1659380719000,
      name: "Kent Goodwin",
      options: [
        "sit",
        "dicta",
        "quo",
        "nemo",
      ],
      required: false,
      type: FormDataTypeEnum.String,
      validator: {
        enabled: false,
        expression: "est",
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
import { FormTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateFormWithId("blanditiis", {
  form: {
    data: {
      "itaque": {
        "porro": "soluta",
      },
      "facere": {
        "mollitia": "totam",
        "ad": "itaque",
        "harum": "natus",
        "minima": "animi",
      },
    },
    id: "c4f29fe4-7b55-4944-9201-25ac5c1294ac",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Jean Hoppe",
    steps: [
      {
        fields: [
          "097d195b-be1b-44f8-a117-ceec28569af2",
          "008d4b7e-d90d-4e96-b8b9-e1f838dda1a8",
          "d03d79c3-6c47-4019-a586-c75b0d1257d9",
        ],
      },
      {
        fields: [
          "62c5e284-d39f-48fd-9baa-5ce8025d38de",
          "4f3a6469-c544-4e78-a99c-dd547dd23d2a",
        ],
      },
      {
        fields: [
          "2de5aac0-9eb9-454b-9b34-a9a3b4d18935",
          "f7124fb2-9f8b-418f-9225-563384dbcc79",
          "4d6bf7f9-a71f-4d77-8108-6912eaf4178d",
        ],
      },
    ],
    type: FormTypeEnum.AdminRegistration,
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateGroupMembersWithId({
  members: [
    {
      data: {
        "a": {
          "quidem": "delectus",
        },
        "praesentium": {
          "cupiditate": "et",
          "voluptatem": "fugiat",
          "eligendi": "harum",
          "laboriosam": "non",
        },
        "molestiae": {
          "quaerat": "adipisci",
          "delectus": "adipisci",
          "dolorem": "nam",
        },
        "at": {
          "consectetur": "autem",
        },
      },
      groupId: "efefea1a-d332-4019-985d-7d4682332164",
      id: "f13ed272-d1bb-405f-804b-adc4028a0fdd",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
        cleanSpeakId: "10d457d1-0396-4810-b8a3-b0b8553cedf1",
        connectorId: "160663a9-3b91-408c-b34b-4659724a86c7",
        data: {
          "rerum": {
            "qui": "mollitia",
          },
          "totam": {
            "odio": "numquam",
            "totam": "temporibus",
            "sint": "incidunt",
          },
        },
        email: "Murl26@hotmail.com",
        encryptionScheme: "vel",
        expiry: 1659380719000,
        factor: 743148,
        firstName: "Ofelia",
        fullName: "error",
        id: "49b05cfd-4b1f-461b-af2a-a85cd95a18e4",
        imageUrl: "unde",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Roob",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
          {},
          {},
        ],
        middleName: "voluptate",
        mobilePhone: "praesentium",
        parentEmail: "suscipit",
        password: "libero",
        passwordChangeReason: ChangePasswordReasonEnum.Administrative,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        registrations: [
          {
            applicationId: "9e30520b-5ae9-4588-92a7-86ab0d7663c7",
            authenticationToken: "amet",
            cleanSpeakId: "ec981a80-bd98-4b97-bad7-4edaeec0ff2f",
            data: {
              "sit": {
                "qui": "nihil",
                "ab": "sunt",
                "optio": "beatae",
                "unde": "blanditiis",
              },
            },
            id: "bafd9960-9f28-4f3b-a15b-80d2fe2d7f56",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "harum",
            ],
            timezone: "America/Denver",
            tokens: {
              "nihil": "delectus",
            },
            username: "Mariane_Steuber45",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
          {
            applicationId: "fc28cc08-3d59-4257-b5a9-a4c19357e1e5",
            authenticationToken: "facere",
            cleanSpeakId: "8ea5b9b2-f41f-4a82-9dd7-990fd56903a7",
            data: {
              "ipsum": {
                "ad": "sit",
                "voluptatibus": "earum",
              },
              "numquam": {
                "sit": "error",
                "officia": "reprehenderit",
                "expedita": "sed",
                "perferendis": "necessitatibus",
              },
            },
            id: "8b4669a4-d65a-4e47-9c20-3c4d2492fd60",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
            ],
            roles: [
              "id",
            ],
            timezone: "America/Denver",
            tokens: {
              "sed": "quos",
              "consectetur": "quisquam",
              "impedit": "sed",
              "sed": "perspiciatis",
            },
            username: "Gussie16",
            usernameStatus: ContentStatusEnum.Active,
            verified: false,
          },
        ],
        salt: "voluptatum",
        tenantId: "83906ed1-871f-4c09-9702-8740437bbd98",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha256,
                codeLength: 290405,
                timeStep: 744845,
              },
              email: "Ansley90@hotmail.com",
              id: "ce7003c5-05a7-4de7-abfd-2705e4cf951e",
              lastUsed: false,
              method: "voluptas",
              mobilePhone: "rem",
              secret: "et",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha1,
                codeLength: 689907,
                timeStep: 112979,
              },
              email: "Stephon_Simonis@yahoo.com",
              id: "031c8e34-01aa-42b4-8368-85d357ae86a6",
              lastUsed: false,
              method: "aperiam",
              mobilePhone: "quisquam",
              secret: "veniam",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha1,
                codeLength: 319528,
                timeStep: 244641,
              },
              email: "May.Koss44@gmail.com",
              id: "9e3ce22a-7639-44bf-bed2-36e56211a377",
              lastUsed: false,
              method: "suscipit",
              mobilePhone: "sint",
              secret: "accusantium",
            },
          ],
          recoveryCodes: [
            "consequatur",
          ],
        },
        uniqueUsername: "sunt",
        username: "Lilla.Fay",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      userId: "75623489-501c-4a89-8d71-a88fc0465b3e",
    },
    {
      data: {
        "excepturi": {
          "quasi": "in",
        },
        "vel": {
          "neque": "molestias",
          "tempore": "odit",
          "odit": "exercitationem",
          "enim": "illo",
        },
      },
      groupId: "94f68733-89c9-4363-81dc-991dcec1110a",
      id: "a6945646-6e72-4301-a209-9199831e9a38",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.ExactMatch,
        cleanSpeakId: "bb4f5d6b-edde-4a7e-8ea0-e11d6d0534ec",
        connectorId: "e77e79ee-3e48-47a3-b0b5-6b84b0cf0f89",
        data: {
          "maiores": {
            "fugiat": "atque",
            "sit": "voluptatibus",
            "dolorum": "eaque",
            "provident": "neque",
          },
        },
        email: "Skylar.Stehr89@gmail.com",
        encryptionScheme: "veniam",
        expiry: 1659380719000,
        factor: 711533,
        firstName: "Hanna",
        fullName: "repudiandae",
        id: "c00bb208-24d4-41d5-a26a-80e28fc7da30",
        imageUrl: "distinctio",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Medhurst",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
          {},
        ],
        middleName: "tenetur",
        mobilePhone: "adipisci",
        parentEmail: "occaecati",
        password: "tempora",
        passwordChangeReason: ChangePasswordReasonEnum.Breached,
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
            applicationId: "44254494-7842-421c-a01a-ec82c96d6457",
            authenticationToken: "eum",
            cleanSpeakId: "d833e9b3-b7ed-4c76-b6af-d7c793c72598",
            data: {
              "iure": {
                "vero": "explicabo",
                "quam": "nisi",
                "deserunt": "fuga",
              },
            },
            id: "4142cffa-98e6-449a-a517-1936cf124e33",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "laborum",
            ],
            timezone: "America/Denver",
            tokens: {
              "corporis": "eum",
              "fuga": "vero",
            },
            username: "Jenifer_Kuvalis50",
            usernameStatus: ContentStatusEnum.Rejected,
            verified: false,
          },
        ],
        salt: "blanditiis",
        tenantId: "904b0329-ebca-421b-a5f2-7416ec6004e5",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha1,
                codeLength: 468320,
                timeStep: 767732,
              },
              email: "Abagail.Fay@gmail.com",
              id: "a313ae9d-86f8-409c-9d64-f41da61ff89f",
              lastUsed: false,
              method: "vitae",
              mobilePhone: "magni",
              secret: "consectetur",
            },
          ],
          recoveryCodes: [
            "nobis",
            "ducimus",
            "rerum",
          ],
        },
        uniqueUsername: "earum",
        username: "Chesley38",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      userId: "a38829d0-a9d9-471e-b5c9-3898f6522ba9",
    },
    {
      data: {
        "ducimus": {
          "reprehenderit": "hic",
          "temporibus": "ipsum",
        },
      },
      groupId: "29862b17-1ef3-42c7-8ebd-0643c199063c",
      id: "0fe7c73d-624f-48c2-8d4c-00dfee605d2d",
      insertInstant: 1659380719000,
      user: {
        active: false,
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        breachedPasswordStatus: BreachedPasswordStatusEnum.None,
        cleanSpeakId: "4662f75d-d9c3-4773-a5b4-cf461e3b39da",
        connectorId: "8f43db2a-c153-456d-b783-6e3d20d068ac",
        data: {
          "vel": {
            "eligendi": "cum",
            "fugit": "tenetur",
            "dolor": "corrupti",
          },
          "enim": {
            "sapiente": "illo",
            "quae": "ad",
            "hic": "culpa",
            "animi": "reiciendis",
          },
          "saepe": {
            "facere": "quis",
            "mollitia": "iusto",
            "et": "quia",
            "consequuntur": "repellendus",
          },
          "incidunt": {
            "est": "iure",
            "quibusdam": "eum",
            "qui": "explicabo",
            "quo": "earum",
          },
        },
        email: "Cleora_Mills@yahoo.com",
        encryptionScheme: "adipisci",
        expiry: 1659380719000,
        factor: 194329,
        firstName: "Bobbie",
        fullName: "molestiae",
        id: "bb7ff292-eea9-42b1-9c0e-2bd75357f4db",
        imageUrl: "aut",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastName: "Hayes",
        lastUpdateInstant: 1659380719000,
        memberships: [
          {},
          {},
        ],
        middleName: "et",
        mobilePhone: "quasi",
        parentEmail: "neque",
        password: "illo",
        passwordChangeReason: ChangePasswordReasonEnum.Breached,
        passwordChangeRequired: false,
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        registrations: [
          {
            applicationId: "fb559ebf-b941-4487-96f5-999304f44993",
            authenticationToken: "eligendi",
            cleanSpeakId: "48706668-195a-4de6-9e41-8ef75cdb60ce",
            data: {
              "delectus": {
                "est": "repudiandae",
                "architecto": "quae",
                "omnis": "ratione",
                "quod": "voluptates",
              },
              "molestiae": {
                "facere": "numquam",
              },
              "deleniti": {
                "accusamus": "sapiente",
              },
              "qui": {
                "atque": "amet",
                "aut": "sequi",
                "maxime": "voluptatibus",
                "sapiente": "aut",
              },
            },
            id: "c863292b-4511-4ba8-85c3-900688ecd47a",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
              "en_US",
              "en_US",
            ],
            roles: [
              "facilis",
            ],
            timezone: "America/Denver",
            tokens: {
              "laborum": "inventore",
              "recusandae": "laborum",
              "sunt": "tempore",
            },
            username: "Matilda92",
            usernameStatus: ContentStatusEnum.Active,
            verified: false,
          },
          {
            applicationId: "6651f756-ad87-4ec4-a90c-b18668b1f0b4",
            authenticationToken: "animi",
            cleanSpeakId: "f7a121b0-25d5-4565-848d-2d12a20ab75a",
            data: {
              "impedit": {
                "consequatur": "pariatur",
                "rem": "quod",
                "cupiditate": "corporis",
              },
              "minima": {
                "enim": "earum",
                "alias": "labore",
                "blanditiis": "numquam",
              },
              "accusamus": {
                "itaque": "necessitatibus",
              },
              "expedita": {
                "numquam": "ex",
              },
            },
            id: "67d7cee4-8d88-4ae7-9e37-41340634aa98",
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "eum",
              "voluptas",
              "repudiandae",
              "quas",
            ],
            timezone: "America/Denver",
            tokens: {
              "dolore": "fugit",
            },
            username: "Berta_Collins28",
            usernameStatus: ContentStatusEnum.Pending,
            verified: false,
          },
        ],
        salt: "facere",
        tenantId: "39d3acf6-526c-4082-a004-7831a5f77206",
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha256,
                codeLength: 541581,
                timeStep: 813802,
              },
              email: "Catharine_Flatley68@hotmail.com",
              id: "6ee2c444-e000-4dd8-b0fc-4bf416dbc465",
              lastUsed: false,
              method: "sapiente",
              mobilePhone: "quasi",
              secret: "eum",
            },
            {
              authenticator: {
                algorithm: TOTPAlgorithmEnum.HmacSha256,
                codeLength: 756544,
                timeStep: 43814,
              },
              email: "Jadon48@hotmail.com",
              id: "bf62c544-2183-4acc-b2e2-0e84b6b63343",
              lastUsed: false,
              method: "cumque",
              mobilePhone: "ducimus",
              secret: "esse",
            },
          ],
          recoveryCodes: [
            "hic",
            "non",
          ],
        },
        uniqueUsername: "voluptatibus",
        username: "Emanuel.Lueilwitz5",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      userId: "b433cd72-4009-4e28-820a-7247b315bd59",
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

sdk.sdk.updateGroupWithId("ullam", {
  group: {
    data: {
      "inventore": {
        "suscipit": "voluptatum",
        "mollitia": "ex",
        "nesciunt": "aspernatur",
        "est": "dolor",
      },
      "culpa": {
        "dolores": "magnam",
      },
      "enim": {
        "est": "ipsum",
        "tempora": "in",
        "maiores": "ad",
      },
      "expedita": {
        "sit": "dicta",
      },
    },
    id: "891ea54b-0c32-420c-90f0-6e439fd7150e",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Amy Aufderhar",
    roles: [
      {
        description: "asperiores",
        id: "6695f7d0-e1e3-464c-9f08-5e70c4299534",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mr. Jana O'Keefe",
      },
      {
        description: "sunt",
        id: "53437873-aaa1-4447-92c6-fa4beec0f66f",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Nina Boehm",
      },
      {
        description: "blanditiis",
        id: "779185a9-3a09-4394-b4ca-f842ab1ebbb6",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Abraham Morissette",
      },
      {
        description: "ratione",
        id: "c71e8957-9712-491a-8547-1aa5b3bd724b",
        insertInstant: 1659380719000,
        isDefault: false,
        isSuperRole: false,
        lastUpdateInstant: 1659380719000,
        name: "Mario Reynolds",
      },
    ],
    tenantId: "375b6621-d0a5-48a1-b40e-190100cd07b5",
  },
  roleIds: [
    "f5bb5058-daeb-4a2b-9b5a-444fdf9a4a6f",
    "c6459f49-bda6-4d3f-9ee6-7316329b0730",
  ],
}, "quia").then((res: UpdateGroupWithIdResponse) => {
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
import { IPAccessControlEntryActionEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateIPAccessControlListWithId("qui", {
  ipAccessControlList: {
    data: {
      "labore": {
        "hic": "dolores",
      },
      "accusamus": {
        "occaecati": "blanditiis",
        "in": "quos",
        "ut": "voluptatibus",
        "qui": "voluptatum",
      },
      "deleniti": {
        "omnis": "occaecati",
        "accusantium": "praesentium",
        "ratione": "harum",
      },
      "libero": {
        "facilis": "voluptas",
        "sit": "officia",
        "assumenda": "dolore",
        "dolor": "tempore",
      },
    },
    entries: [
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "nam",
        startIPAddress: "molestiae",
      },
      {
        action: IPAccessControlEntryActionEnum.Block,
        endIPAddress: "maiores",
        startIPAddress: "repellat",
      },
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "animi",
        startIPAddress: "mollitia",
      },
      {
        action: IPAccessControlEntryActionEnum.Allow,
        endIPAddress: "nobis",
        startIPAddress: "quaerat",
      },
    ],
    id: "a3d576a8-9984-4b86-bb72-a1f558bc12dc",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Elijah Buckridge",
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
  CanonicalizationMethodEnum,
  ClientAuthenticationMethodEnum,
  IdentityProviderLinkingStrategyEnum,
  IdentityProviderLoginMethodEnum,
  IdentityProviderTypeEnum,
  SAMLv2DestinationAssertionPolicyEnum,
  SteamAPIModeEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateIdentityProviderWithId("suscipit", {
  identityProvider: {
    applicationConfiguration: {
      "cum": {
        createRegistration: false,
        data: {
          "soluta": {
            "ab": "similique",
            "sapiente": "adipisci",
            "porro": "ad",
          },
        },
        relyingPartyApplicationId: "sunt",
        relyingPartyURL: "qui",
      },
      "ea": {
        createRegistration: false,
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
        relyingPartyApplicationId: "non",
        relyingPartyURL: "debitis",
      },
      "assumenda": {
        createRegistration: false,
        data: {
          "error": {
            "rem": "hic",
            "ea": "deleniti",
            "alias": "veniam",
          },
          "recusandae": {
            "cumque": "voluptatem",
            "fugit": "quod",
          },
        },
        relyingPartyApplicationId: "nulla",
        relyingPartyURL: "tenetur",
      },
      "nostrum": {
        createRegistration: false,
        data: {
          "rerum": {
            "beatae": "facilis",
            "delectus": "ab",
            "laudantium": "asperiores",
          },
          "ullam": {
            "laborum": "accusantium",
            "asperiores": "architecto",
            "vero": "fugit",
            "fugit": "nihil",
          },
          "ad": {
            "in": "ipsam",
            "asperiores": "illum",
            "corrupti": "quia",
            "vero": "quasi",
          },
          "veniam": {
            "pariatur": "mollitia",
            "cupiditate": "dolorem",
            "eos": "odio",
            "at": "eaque",
          },
        },
        relyingPartyApplicationId: "commodi",
        relyingPartyURL: "quam",
      },
    },
    data: {
      "nulla": {
        "hic": "ipsum",
      },
      "tempore": {
        "esse": "aspernatur",
        "dolore": "accusamus",
        "vitae": "eveniet",
      },
    },
    debug: false,
    id: "8d465226-5722-4af1-af01-2d43634714df",
    insertInstant: 1659380719000,
    lambdaConfiguration: {
      reconcileId: "78342176-8fff-4bd1-8627-c9d83fd31614",
    },
    lastUpdateInstant: 1659380719000,
    linkingStrategy: IdentityProviderLinkingStrategyEnum.LinkByUsername,
    name: "Rhonda Mertz",
    relyingPartyApplicationId: "sed",
    relyingPartyURL: "ad",
    tenantConfiguration: {
      "mollitia": {
        data: {
          "maiores": {
            "ex": "culpa",
          },
          "illum": {
            "at": "reprehenderit",
            "exercitationem": "ducimus",
            "fugit": "eligendi",
          },
          "eum": {
            "quibusdam": "quia",
            "modi": "enim",
            "suscipit": "maxime",
            "impedit": "vel",
          },
          "ad": {
            "a": "fugiat",
            "saepe": "rerum",
            "modi": "ex",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 440459,
        },
      },
      "natus": {
        data: {
          "veritatis": {
            "distinctio": "facilis",
            "adipisci": "ipsum",
          },
          "nemo": {
            "perferendis": "placeat",
            "quod": "eos",
            "ex": "tempora",
          },
          "accusamus": {
            "iusto": "dicta",
            "eligendi": "numquam",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 699397,
        },
      },
      "adipisci": {
        data: {
          "suscipit": {
            "qui": "illo",
            "similique": "quas",
            "repellendus": "eaque",
            "harum": "eligendi",
          },
          "laudantium": {
            "excepturi": "cupiditate",
            "eum": "nostrum",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 107084,
        },
      },
      "consequuntur": {
        data: {
          "qui": {
            "repellat": "necessitatibus",
            "deserunt": "officia",
          },
        },
        limitUserLinkCount: {
          enabled: false,
          maximumLinks: 179366,
        },
      },
    },
    type: IdentityProviderTypeEnum.Hypr,
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
      apiKey: "laboriosam",
      applicationIds: [
        "8823e9d9-9dbf-44d7-aa17-af7f79c77b45",
      ],
      enabled: false,
      url: "explicabo",
      usernameModeration: {
        applicationId: "70bda893-c47a-4759-ae65-f0126d33e026",
        enabled: false,
      },
    },
    kafka: {
      defaultTopic: "rerum",
      enabled: false,
      producer: {
        "quidem": "voluptates",
        "labore": "aliquid",
        "velit": "culpa",
        "possimus": "sequi",
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
import { KeyAlgorithmEnum, KeyTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateKeyWithId("nisi", {
  key: {
    algorithm: KeyAlgorithmEnum.Hs384,
    certificate: "eius",
    certificateInformation: {
      issuer: "autem",
      md5Fingerprint: "deleniti",
      serialNumber: "saepe",
      sha1Fingerprint: "nisi",
      sha1Thumbprint: "cumque",
      sha256Fingerprint: "reprehenderit",
      sha256Thumbprint: "quae",
      subject: "cupiditate",
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    hasPrivateKey: false,
    id: "67f288de-fefc-42f5-975c-547981d55fee",
    insertInstant: 1659380719000,
    issuer: "quod",
    kid: "ratione",
    lastUpdateInstant: 1659380719000,
    length: 492182,
    name: "Vernon Adams",
    privateKey: "sequi",
    publicKey: "dolorum",
    secret: "possimus",
    type: KeyTypeEnum.Hmac,
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
import { LambdaEngineTypeEnum, LambdaTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateLambdaWithId("minima", {
  lambda: {
    body: "blanditiis",
    debug: false,
    engineType: LambdaEngineTypeEnum.GraalJS,
    id: "833f1f1d-d8aa-4f41-b444-6743bec7e597",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Curtis Yundt",
    type: LambdaTypeEnum.TwitterReconcile,
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
import { MessageTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateMessageTemplateWithId("itaque", {
  messageTemplate: {
    data: {
      "modi": {
        "nobis": "enim",
        "velit": "odio",
      },
      "atque": {
        "tempore": "quia",
        "voluptatem": "illo",
        "quod": "error",
      },
      "sunt": {
        "facere": "ducimus",
        "animi": "quod",
        "consequatur": "ea",
        "eum": "aperiam",
      },
      "praesentium": {
        "consequatur": "incidunt",
      },
    },
    id: "ee2da2e6-9ee5-472f-bdbd-b32051253f3b",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Pat Berge",
    type: MessageTypeEnum.Sms,
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
import { MessengerTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateMessengerWithId("cupiditate", {
  messenger: {
    data: {
      "corporis": {
        "accusamus": "facilis",
      },
      "exercitationem": {
        "saepe": "nemo",
        "nesciunt": "excepturi",
      },
    },
    debug: false,
    id: "4fa165c0-fb94-419a-8922-8ff5b2f8b342",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    name: "Mr. Cesar Runte",
    transport: "ea",
    type: MessengerTypeEnum.Twilio,
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateRegistrationWithId("magnam", {
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "dolorum": {
        "commodi": "ipsa",
        "non": "quaerat",
        "rerum": "quibusdam",
        "porro": "ex",
      },
      "quod": {
        "adipisci": "quis",
      },
      "sit": {
        "tempore": "voluptatibus",
      },
    },
    deviceDescription: "nihil",
    deviceName: "quo",
    deviceType: "quia",
    ipAddress: "neque",
    location: {
      city: "Fort Arnoldo",
      country: "Greenland",
      displayString: "praesentium",
      latitude: 8152.55,
      longitude: 8370.87,
      region: "natus",
      zipcode: "07638",
    },
    os: "itaque",
    userAgent: "voluptatum",
  },
  generateAuthenticationToken: false,
  registration: {
    applicationId: "28f45df8-3f26-431d-b725-a533cd67d6e2",
    authenticationToken: "minus",
    cleanSpeakId: "1a079d4b-3fe3-4efb-a870-793801642d03",
    data: {
      "nobis": {
        "nulla": "deserunt",
        "repellat": "atque",
      },
      "cum": {
        "laboriosam": "minus",
      },
      "sit": {
        "veniam": "distinctio",
      },
    },
    id: "4ce7611d-b8da-4337-948f-2c1fe2c10d7e",
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
      "adipisci",
    ],
    timezone: "America/Denver",
    tokens: {
      "dignissimos": "vero",
      "id": "illo",
    },
    username: "Sallie_Parker66",
    usernameStatus: ContentStatusEnum.Rejected,
    verified: false,
  },
  sendSetPasswordEmail: false,
  skipRegistrationVerification: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
    cleanSpeakId: "d7e8b524-a8d8-4f6f-b0b9-12d4c3def8c3",
    connectorId: "d90b1def-c231-4d88-b80b-5b7c4ac854c3",
    data: {
      "unde": {
        "voluptas": "rem",
        "natus": "nam",
        "temporibus": "repellendus",
      },
      "autem": {
        "ipsam": "nobis",
      },
    },
    email: "Carol.White@yahoo.com",
    encryptionScheme: "nesciunt",
    expiry: 1659380719000,
    factor: 992595,
    firstName: "Pattie",
    fullName: "ut",
    id: "f2676679-b103-4ac7-a0f5-841e38d94c35",
    imageUrl: "tempore",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Metz",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "exercitationem": {
            "itaque": "cupiditate",
          },
          "veritatis": {
            "tempore": "autem",
          },
          "exercitationem": {
            "veritatis": "officiis",
            "natus": "saepe",
          },
          "sapiente": {
            "dignissimos": "assumenda",
            "veritatis": "deleniti",
          },
        },
        groupId: "0e150038-0a20-49d1-a462-93f03633182c",
        id: "e7dc3a49-5cfe-4666-89d2-bc0347f12975",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
          cleanSpeakId: "f8d01e1d-f6eb-4248-96c3-d4607dec2f75",
          connectorId: "22c518c7-2cc8-425f-be2b-760771a56de4",
          data: {
            "doloremque": {
              "dolore": "occaecati",
              "aut": "voluptas",
              "autem": "odio",
              "dolorum": "officia",
            },
          },
          email: "Carmen_Bogisich57@gmail.com",
          encryptionScheme: "mollitia",
          expiry: 1659380719000,
          factor: 703881,
          firstName: "Kavon",
          fullName: "soluta",
          id: "8520b597-f37f-4bae-a1cc-b43b4e6dba76",
          imageUrl: "ullam",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Collins",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "aspernatur",
          mobilePhone: "inventore",
          parentEmail: "temporibus",
          password: "laudantium",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "beaae123-0721-4e3e-8857-545a3eceaaef",
              authenticationToken: "at",
              cleanSpeakId: "a56e5032-69ac-4e54-a8b1-21ab6f0249dc",
              data: {
                "inventore": {
                  "nemo": "est",
                  "molestias": "aliquid",
                  "sequi": "illum",
                  "minima": "sequi",
                },
                "soluta": {
                  "velit": "magnam",
                },
              },
              id: "082ce922-a516-4a6d-9fd0-a7c9ec9611f1",
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
                "id",
              ],
              timezone: "America/Denver",
              tokens: {
                "aspernatur": "praesentium",
                "est": "tempora",
                "id": "aliquam",
              },
              username: "Ayana_Rohan41",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "assumenda",
          tenantId: "83ecde77-3a39-49c9-b19a-24b0f13f0ad7",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 77471,
                  timeStep: 665390,
                },
                email: "Monty19@hotmail.com",
                id: "87724241-5cd2-4471-97fa-6ff783dcdb31",
                lastUsed: false,
                method: "cupiditate",
                mobilePhone: "neque",
                secret: "officiis",
              },
            ],
            recoveryCodes: [
              "cum",
            ],
          },
          uniqueUsername: "necessitatibus",
          username: "Ned_Price",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "219e54d9-e55d-41b5-b8b3-97e3659aa19b",
      },
    ],
    middleName: "libero",
    mobilePhone: "illo",
    parentEmail: "optio",
    password: "magni",
    passwordChangeReason: ChangePasswordReasonEnum.Administrative,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        applicationId: "af7d2220-3810-400f-9290-5c83d151b66d",
        authenticationToken: "voluptate",
        cleanSpeakId: "e962572f-e90c-4ce5-a1c5-55b6565b944c",
        data: {
          "doloribus": {
            "nostrum": "possimus",
            "fugiat": "libero",
            "perspiciatis": "magni",
            "illum": "libero",
          },
          "ipsa": {
            "reprehenderit": "alias",
            "minus": "soluta",
          },
          "iste": {
            "nostrum": "corrupti",
            "sed": "magni",
            "architecto": "placeat",
          },
        },
        id: "a394a260-a24f-4bcf-b894-c1c54228647c",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "eveniet",
        ],
        timezone: "America/Denver",
        tokens: {
          "eius": "eveniet",
          "facere": "similique",
          "velit": "totam",
          "neque": "dolor",
        },
        username: "Ezequiel_Legros",
        usernameStatus: ContentStatusEnum.Rejected,
        verified: false,
      },
      {
        applicationId: "96fa5473-263e-4e09-80fa-95eec17c59a7",
        authenticationToken: "debitis",
        cleanSpeakId: "408c0550-90b0-4aaa-8851-5d33673abd49",
        data: {
          "rerum": {
            "architecto": "voluptate",
            "quis": "ipsam",
            "nobis": "illo",
            "impedit": "mollitia",
          },
          "quibusdam": {
            "illo": "illum",
          },
          "perspiciatis": {
            "deserunt": "odio",
            "explicabo": "voluptatum",
            "voluptate": "libero",
            "totam": "fugiat",
          },
        },
        id: "c68f880d-f0e3-438e-8f89-958a1cc89fb1",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "facere",
          "molestias",
          "ut",
          "nostrum",
        ],
        timezone: "America/Denver",
        tokens: {
          "magni": "reprehenderit",
          "nemo": "eius",
          "neque": "possimus",
          "nobis": "quos",
        },
        username: "Dillon15",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      {
        applicationId: "fcb1e9b5-9b83-4f14-a5cd-4712d7595b91",
        authenticationToken: "occaecati",
        cleanSpeakId: "cc4844b7-2fe1-4a14-9e45-40bf434e99df",
        data: {
          "repellendus": {
            "natus": "aut",
          },
          "incidunt": {
            "voluptatibus": "debitis",
            "mollitia": "in",
            "sed": "adipisci",
          },
          "dolorem": {
            "nostrum": "reprehenderit",
            "ducimus": "magnam",
            "aliquam": "totam",
            "quia": "ullam",
          },
          "soluta": {
            "aperiam": "recusandae",
          },
        },
        id: "2b7a4beb-8ff0-4c71-8057-e2a725161680",
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
          "quae",
          "doloribus",
          "atque",
          "dignissimos",
        ],
        timezone: "America/Denver",
        tokens: {
          "consectetur": "aut",
          "quia": "accusantium",
          "officiis": "esse",
        },
        username: "Xander59",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
    ],
    salt: "cum",
    tenantId: "01fb6c8b-33d7-4125-95a6-c699b3b8533a",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 836620,
            timeStep: 683613,
          },
          email: "Kaleb2@hotmail.com",
          id: "17294773-ca7c-42a0-b535-72bf9d840737",
          lastUsed: false,
          method: "aliquid",
          mobilePhone: "perferendis",
          secret: "veritatis",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 894401,
            timeStep: 679931,
          },
          email: "Abdullah_DuBuque@gmail.com",
          id: "d470c69c-f609-426b-a34f-c2a797ebb95a",
          lastUsed: false,
          method: "illum",
          mobilePhone: "provident",
          secret: "libero",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 361262,
            timeStep: 65011,
          },
          email: "Maryse.Bashirian@hotmail.com",
          id: "5c0e46a5-ad0b-425d-92eb-79547fa8ad8a",
          lastUsed: false,
          method: "quo",
          mobilePhone: "inventore",
          secret: "dicta",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha256,
            codeLength: 358168,
            timeStep: 319574,
          },
          email: "Javonte23@gmail.com",
          id: "3e3f9edb-1935-495a-a312-c58395e7c46f",
          lastUsed: false,
          method: "doloribus",
          mobilePhone: "corporis",
          secret: "accusantium",
        },
      ],
      recoveryCodes: [
        "asperiores",
        "at",
      ],
    },
    uniqueUsername: "aliquid",
    username: "Lisa5",
    usernameStatus: ContentStatusEnum.Active,
    verified: false,
  },
}, "qui").then((res: UpdateRegistrationWithIdResponse) => {
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
import { HTTPMethodEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

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
        numberOfDaysToRetain: 462467,
      },
    },
    corsConfiguration: {
      allowCredentials: false,
      allowedHeaders: [
        "soluta",
        "sed",
      ],
      allowedMethods: [
        HTTPMethodEnum.Post,
        HTTPMethodEnum.Put,
        HTTPMethodEnum.Put,
        HTTPMethodEnum.Delete,
      ],
      allowedOrigins: [
        "molestiae",
        "eos",
        "labore",
      ],
      debug: false,
      enabled: false,
      exposedHeaders: [
        "labore",
        "necessitatibus",
        "veniam",
      ],
      preflightMaxAgeInSeconds: 769884,
    },
    data: {
      "neque": {
        "aliquid": "illum",
        "quo": "laborum",
        "asperiores": "iure",
        "sit": "alias",
      },
      "repudiandae": {
        "consequatur": "autem",
        "libero": "deleniti",
        "voluptatibus": "iure",
        "magni": "quibusdam",
      },
      "eaque": {
        "magnam": "ad",
        "doloribus": "tenetur",
        "blanditiis": "maiores",
        "exercitationem": "nostrum",
      },
    },
    eventLogConfiguration: {
      numberToRetain: 940279,
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    loginRecordConfiguration: {
      delete: {
        enabled: false,
        numberOfDaysToRetain: 244217,
      },
    },
    reportTimezone: "America/Denver",
    uiConfiguration: {
      headerColor: "suscipit",
      logoURL: "temporibus",
      menuFontColor: "hic",
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
  AuthenticatorAttachmentPreferenceEnum,
  BreachActionEnum,
  BreachMatchModeEnum,
  CaptchaMethodEnum,
  EmailSecurityTypeEnum,
  ExpiryUnitEnum,
  MultiFactorLoginPolicyEnum,
  ObjectStateEnum,
  RefreshTokenExpirationPolicyEnum,
  RefreshTokenUsagePolicyEnum,
  SecureGeneratorTypeEnum,
  TOTPAlgorithmEnum,
  TransactionTypeEnum,
  UniqueUsernameStrategyEnum,
  UnverifiedBehaviorEnum,
  UserVerificationRequirementEnum,
  VerificationStrategyEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateTenantWithId("harum", {
  eventInfo: {
    data: {
      "assumenda": {
        "suscipit": "praesentium",
        "labore": "odio",
        "totam": "ea",
        "cum": "aliquam",
      },
    },
    deviceDescription: "eius",
    deviceName: "quae",
    deviceType: "deleniti",
    ipAddress: "est",
    location: {
      city: "Jerrodchester",
      country: "Marshall Islands",
      displayString: "neque",
      latitude: 8040.8,
      longitude: 5406.37,
      region: "voluptas",
      zipcode: "52219",
    },
    os: "tenetur",
    userAgent: "inventore",
  },
  sourceTenantId: "e8821f94-11e9-4369-8151-391cd9bb3ea9",
  tenant: {
    accessControlConfiguration: {
      uiIPAccessControlListId: "a38787fa-f005-4996-b3e8-a87199eb295e",
    },
    captchaConfiguration: {
      captchaMethod: CaptchaMethodEnum.GoogleRecaptchaV3,
      enabled: false,
      secretKey: "consequatur",
      siteKey: "iure",
      threshold: 8923.43,
    },
    configured: false,
    connectorPolicies: [
      {
        connectorId: "7e056da1-0500-4701-b0ab-44953276df70",
        data: {
          "quod": {
            "doloremque": "dolores",
            "aut": "ullam",
          },
          "minima": {
            "et": "necessitatibus",
          },
        },
        domains: [
          "ea",
          "exercitationem",
        ],
        migrate: false,
      },
    ],
    data: {
      "reiciendis": {
        "eligendi": "quibusdam",
        "molestiae": "nihil",
        "temporibus": "vitae",
      },
      "quidem": {
        "delectus": "aspernatur",
        "eius": "facilis",
      },
      "nam": {
        "magnam": "quam",
        "adipisci": "facere",
        "soluta": "laudantium",
      },
      "omnis": {
        "nobis": "totam",
        "sint": "architecto",
      },
    },
    emailConfiguration: {
      additionalHeaders: [
        {
          name: "Erika Daugherty",
          value: "veniam",
        },
      ],
      debug: false,
      defaultFromEmail: "quibusdam",
      defaultFromName: "quidem",
      emailUpdateEmailTemplateId: "cfd00d94-6daa-4f99-9f9f-61d22ee906a0",
      emailVerifiedEmailTemplateId: "ad18eb5d-b81a-499b-a2f2-027df051bf1d",
      forgotPasswordEmailTemplateId: "95a757b2-c56c-4c65-81cd-f54531970c26",
      host: "laboriosam",
      implicitEmailVerificationAllowed: false,
      loginIdInUseOnCreateEmailTemplateId: "fdda6027-484d-472d-9ba2-caccd62e7352",
      loginIdInUseOnUpdateEmailTemplateId: "392cf0aa-e6f6-42f1-8189-75e1c8042ff4",
      loginNewDeviceEmailTemplateId: "7b18ddb4-d6b7-4aa5-a480-6bc314c4b2cd",
      loginSuspiciousEmailTemplateId: "aafcef16-071c-402e-a553-5a9218a1e882",
      password: "repellat",
      passwordResetSuccessEmailTemplateId: "b14a1175-bfa0-4d49-b710-d1ab5db8d65d",
      passwordUpdateEmailTemplateId: "c39c61d8-9d33-408c-aea8-09b65fe87b5a",
      passwordlessEmailTemplateId: "88542568-2bb7-44cd-b137-947a9280b6c9",
      port: 386181,
      properties: "iure",
      security: EmailSecurityTypeEnum.None,
      setPasswordEmailTemplateId: "3cf60a31-bfb4-46a5-8333-d56c372becd3",
      twoFactorMethodAddEmailTemplateId: "fb36f296-d3d6-4d63-aa53-31cf953fd4ac",
      twoFactorMethodRemoveEmailTemplateId: "9cd90f8b-5582-4c95-8c8c-58bf74ec4764",
      unverified: {
        allowEmailChangeWhenGated: false,
        behavior: UnverifiedBehaviorEnum.Allow,
      },
      username: "Eldred_Durgan24",
      verificationEmailTemplateId: "1ff71034-783b-49d3-9ed3-275e8ef90296",
      verificationStrategy: VerificationStrategyEnum.ClickableLink,
      verifyEmail: false,
      verifyEmailWhenChanged: false,
    },
    eventConfiguration: {
      events: {
        "autem": {
          enabled: false,
          transactionType: TransactionTypeEnum.Any,
        },
        "possimus": {
          enabled: false,
          transactionType: TransactionTypeEnum.SimpleMajority,
        },
      },
    },
    externalIdentifierConfiguration: {
      authorizationGrantIdTimeToLiveInSeconds: 552303,
      changePasswordIdGenerator: {
        length: 7262,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      changePasswordIdTimeToLiveInSeconds: 707347,
      deviceCodeTimeToLiveInSeconds: 279825,
      deviceUserCodeIdGenerator: {
        length: 293925,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      emailVerificationIdGenerator: {
        length: 538589,
        type: SecureGeneratorTypeEnum.RandomAlpha,
      },
      emailVerificationIdTimeToLiveInSeconds: 167608,
      emailVerificationOneTimeCodeGenerator: {
        length: 141441,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      externalAuthenticationIdTimeToLiveInSeconds: 220073,
      oneTimePasswordTimeToLiveInSeconds: 697906,
      passwordlessLoginGenerator: {
        length: 116189,
        type: SecureGeneratorTypeEnum.RandomDigits,
      },
      passwordlessLoginTimeToLiveInSeconds: 492930,
      pendingAccountLinkTimeToLiveInSeconds: 287447,
      registrationVerificationIdGenerator: {
        length: 991480,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      registrationVerificationIdTimeToLiveInSeconds: 248935,
      registrationVerificationOneTimeCodeGenerator: {
        length: 504188,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      samlv2AuthNRequestIdTimeToLiveInSeconds: 182913,
      setupPasswordIdGenerator: {
        length: 772694,
        type: SecureGeneratorTypeEnum.RandomAlphaNumeric,
      },
      setupPasswordIdTimeToLiveInSeconds: 704833,
      trustTokenTimeToLiveInSeconds: 546442,
      twoFactorIdTimeToLiveInSeconds: 112579,
      twoFactorOneTimeCodeIdGenerator: {
        length: 379686,
        type: SecureGeneratorTypeEnum.RandomBytes,
      },
      twoFactorOneTimeCodeIdTimeToLiveInSeconds: 612119,
      twoFactorTrustIdTimeToLiveInSeconds: 851139,
      webAuthnAuthenticationChallengeTimeToLiveInSeconds: 436706,
      webAuthnRegistrationChallengeTimeToLiveInSeconds: 130837,
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {
        onPasswordReset: false,
      },
      actionDuration: 118911,
      actionDurationUnit: ExpiryUnitEnum.Weeks,
      emailUser: false,
      resetCountInSeconds: 143856,
      tooManyAttempts: 437443,
      userActionId: "a220c505-2c71-46ca-8462-35b0085aeda9",
    },
    familyConfiguration: {
      allowChildRegistrations: false,
      confirmChildEmailTemplateId: "57f86e4c-8dc5-4f74-83ff-4c026e409fdd",
      deleteOrphanedAccounts: false,
      deleteOrphanedAccountsDays: 828344,
      enabled: false,
      familyRequestEmailTemplateId: "e2dd7764-2f76-44c1-a79f-af6bc6cb8009",
      maximumChildAge: 619891,
      minimumOwnerAge: 867077,
      parentEmailRequired: false,
      parentRegistrationEmailTemplateId: "4d32ce8a-fc37-467f-b2a2-b2ed44749d14",
    },
    formConfiguration: {
      adminUserFormId: "18585664-155a-4427-82ef-66dedced1860",
    },
    httpSessionMaxInactiveInterval: 850065,
    id: "1a5e6b04-a7ce-46bf-9726-2bb5f17668b0",
    insertInstant: 1659380719000,
    issuer: "temporibus",
    jwtConfiguration: {
      accessTokenKeyId: "baca152e-1271-4d26-9849-ed280956e1b1",
      enabled: false,
      idTokenKeyId: "f71ce4d0-5858-4078-886a-53b3fc7eab27",
      refreshTokenExpirationPolicy: RefreshTokenExpirationPolicyEnum.SlidingWindow,
      refreshTokenRevocationPolicy: {
        onLoginPrevented: false,
        onMultiFactorEnable: false,
        onPasswordChanged: false,
      },
      refreshTokenTimeToLiveInMinutes: 835901,
      refreshTokenUsagePolicy: RefreshTokenUsagePolicyEnum.OneTimeUse,
      timeToLiveInSeconds: 615748,
    },
    lambdaConfiguration: {
      scimEnterpriseUserRequestConverterId: "5b47d5eb-589a-45e7-8a59-354e27cbeedd",
      scimEnterpriseUserResponseConverterId: "48c428fc-cb21-4412-864b-18cbfa59b622",
      scimGroupRequestConverterId: "ed401420-7552-4287-afc7-2f76e4d973eb",
      scimGroupResponseConverterId: "fe152792-bf42-45c8-934f-f47d523e78ce",
      scimUserRequestConverterId: "e7291b8d-af34-4acb-8970-8d5425cb12bf",
      scimUserResponseConverterId: "e7a18c01-dac4-4aaf-89c7-a9a390ac4512",
    },
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {
      requireAuthentication: false,
    },
    logoutURL: "commodi",
    maximumPasswordAge: {
      days: 36188,
      enabled: false,
    },
    minimumPasswordAge: {
      enabled: false,
      seconds: 725724,
    },
    multiFactorConfiguration: {
      authenticator: {
        algorithm: TOTPAlgorithmEnum.HmacSha256,
        codeLength: 12452,
        enabled: false,
        timeStep: 538676,
      },
      email: {
        enabled: false,
        templateId: "9770ae5e-51a9-41fa-873c-908a486def31",
      },
      loginPolicy: MultiFactorLoginPolicyEnum.Disabled,
      sms: {
        enabled: false,
        messengerId: "8c255c70-b91f-432d-9a34-6da3c9e3d966",
        templateId: "c967b3ad-b01c-4173-b4cf-99ac54914089",
      },
    },
    name: "Trevor Brekke",
    oauthConfiguration: {
      clientCredentialsAccessTokenPopulateLambdaId: "2f25f048-6e97-4a8d-a760-8437472dd547",
    },
    passwordEncryptionConfiguration: {
      encryptionScheme: "optio",
      encryptionSchemeFactor: 629281,
      modifyEncryptionSchemeOnLogin: false,
    },
    passwordValidationRules: {
      breachDetection: {
        enabled: false,
        matchMode: BreachMatchModeEnum.High,
        notifyUserEmailTemplateId: "37a9886b-60c7-44f2-8614-0034e85bb9ec",
        onLogin: BreachActionEnum.Off,
      },
      maxLength: 97701,
      minLength: 660556,
      rememberPreviousPasswords: {
        count: 778191,
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
        limit: 484916,
        timePeriodInSeconds: 861951,
      },
      forgotPassword: {
        enabled: false,
        limit: 90953,
        timePeriodInSeconds: 465657,
      },
      sendEmailVerification: {
        enabled: false,
        limit: 604639,
        timePeriodInSeconds: 403241,
      },
      sendPasswordless: {
        enabled: false,
        limit: 254214,
        timePeriodInSeconds: 328981,
      },
      sendRegistrationVerification: {
        enabled: false,
        limit: 66958,
        timePeriodInSeconds: 409426,
      },
      sendTwoFactor: {
        enabled: false,
        limit: 698693,
        timePeriodInSeconds: 961196,
      },
    },
    registrationConfiguration: {
      blockedDomains: [
        "cum",
        "temporibus",
        "aperiam",
        "rerum",
      ],
    },
    scimServerConfiguration: {
      clientEntityTypeId: "c326802c-0b76-4da3-b07e-e2bf53f376ad",
      enabled: false,
      schemas: {
        "iste": {
          "quia": "ex",
          "cupiditate": "nostrum",
          "ad": "nam",
        },
        "maxime": {
          "quae": "enim",
          "officiis": "id",
          "quos": "ipsa",
          "quidem": "maxime",
        },
      },
      serverEntityTypeId: "42412819-6be1-40c0-a7f9-2b694a570659",
    },
    ssoConfiguration: {
      deviceTrustTimeToLiveInSeconds: 985861,
    },
    state: ObjectStateEnum.Active,
    themeId: "b77cdf44-328b-4e87-99f0-56dd85a3e365",
    userDeletePolicy: {
      unverified: {
        enabled: false,
        numberOfDaysToRetain: 335012,
      },
    },
    usernameConfiguration: {
      unique: {
        enabled: false,
        numberOfDigits: 182373,
        separator: "neque",
        strategy: UniqueUsernameStrategyEnum.OnCollision,
      },
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Discouraged,
      },
      debug: false,
      enabled: false,
      reauthenticationWorkflow: {
        authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceEnum.Platform,
        enabled: false,
        userVerificationRequirement: UserVerificationRequirementEnum.Required,
      },
      relyingPartyId: "unde",
      relyingPartyName: "aspernatur",
    },
  },
  webhookIds: [
    "c65933d3-4b10-4aab-b3b8-ab8650423581",
    "2dfbbc7e-6c14-48a1-ba00-afb7ad648528",
    "e6bc0fe8-2101-49fd-b170-a066725a24c6",
    "c2dd3462-351c-4464-8473-dce658f6f64a",
  ],
}, "expedita").then((res: UpdateTenantWithIdResponse) => {
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

sdk.sdk.updateThemeWithId("quos", {
  sourceThemeId: "ce7f7de3-f38d-4db6-82d6-948f963a3334",
  theme: {
    data: {
      "aliquid": {
        "magnam": "omnis",
        "officiis": "qui",
        "beatae": "dicta",
      },
      "repudiandae": {
        "optio": "possimus",
        "non": "sequi",
        "dolor": "eligendi",
      },
      "praesentium": {
        "minus": "ab",
        "deleniti": "quia",
      },
    },
    defaultMessages: "impedit",
    id: "1f6cb621-2290-4c25-af00-7c8df5fdfa07",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {
      "velit": "dolore",
      "vero": "aliquid",
    },
    name: "Cecelia Roberts",
    stylesheet: "quo",
    templates: {
      accountEdit: "provident",
      accountIndex: "quia",
      accountTwoFactorDisable: "a",
      accountTwoFactorEnable: "illum",
      accountTwoFactorIndex: "exercitationem",
      accountWebAuthnAdd: "ad",
      accountWebAuthnDelete: "non",
      accountWebAuthnIndex: "ullam",
      emailComplete: "molestiae",
      emailSend: "laudantium",
      emailSent: "quis",
      emailVerificationRequired: "itaque",
      emailVerify: "vero",
      helpers: "praesentium",
      index: "dicta",
      oauth2Authorize: "accusantium",
      oauth2AuthorizedNotRegistered: "neque",
      oauth2ChildRegistrationNotAllowed: "consequatur",
      oauth2ChildRegistrationNotAllowedComplete: "eius",
      oauth2CompleteRegistration: "aperiam",
      oauth2Device: "occaecati",
      oauth2DeviceComplete: "quae",
      oauth2Error: "totam",
      oauth2Logout: "rerum",
      oauth2Passwordless: "qui",
      oauth2Register: "possimus",
      oauth2StartIdPLink: "quam",
      oauth2TwoFactor: "eveniet",
      oauth2TwoFactorEnable: "ad",
      oauth2TwoFactorEnableComplete: "tenetur",
      oauth2TwoFactorMethods: "voluptatibus",
      oauth2Wait: "ipsa",
      oauth2WebAuthn: "aliquam",
      oauth2WebAuthnReauth: "ipsa",
      oauth2WebAuthnReauthEnable: "est",
      passwordChange: "quas",
      passwordComplete: "tenetur",
      passwordForgot: "cum",
      passwordSent: "quaerat",
      registrationComplete: "necessitatibus",
      registrationSend: "non",
      registrationSent: "dignissimos",
      registrationVerificationRequired: "omnis",
      registrationVerify: "maxime",
      samlv2Logout: "maxime",
      unauthorized: "neque",
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

sdk.sdk.updateUserActionReasonWithId("fuga", {
  userActionReason: {
    code: "nam",
    id: "3d7ad621-ebf7-467b-b05a-4a5079104623",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {
      "harum": "minima",
      "quae": "perferendis",
      "fuga": "molestiae",
      "exercitationem": "assumenda",
    },
    text: "beatae",
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
import { TransactionTypeEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserActionWithId("ea", {
  userAction: {
    active: false,
    cancelEmailTemplateId: "aebdf0e9-3cdc-45dc-8162-293a38bb0132",
    endEmailTemplateId: "448579ba-c5b7-4d13-8b7e-97584859e41e",
    id: "0085738b-2690-4a4c-897a-54f2371db9b7",
    includeEmailInEventJSON: false,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {
      "iure": "accusamus",
    },
    modifyEmailTemplateId: "cbafefbf-9ae7-402a-b055-e40e72eb7e13",
    name: "Rachel Gulgowski",
    options: [
      {
        localizedNames: {
          "praesentium": "dolore",
          "possimus": "earum",
          "minus": "officia",
        },
        name: "Mr. Tyrone Collins",
      },
      {
        localizedNames: {
          "quod": "et",
          "perferendis": "commodi",
        },
        name: "Alexander Jast",
      },
    ],
    preventLogin: false,
    sendEndEvent: false,
    startEmailTemplateId: "ddf9f800-65f0-4507-ac3b-2d14607abbf8",
    temporal: false,
    transactionType: TransactionTypeEnum.SimpleMajority,
    userEmailingEnabled: false,
    userNotificationsEnabled: false,
  },
}, "odit", "facilis").then((res: UpdateUserActionWithIdResponse) => {
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
import { ConsentStatusEnum } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserConsentWithId("ut", {
  userConsent: {
    consent: {
      consentEmailTemplateId: "3185a2c7-f552-4e51-ac4e-602dcf990d7b",
      countryMinimumAgeForSelfConsent: {
        "eius": "repudiandae",
        "consectetur": "sapiente",
        "repellat": "itaque",
        "autem": "similique",
      },
      data: {
        "minima": {
          "porro": "veritatis",
        },
        "alias": {
          "voluptate": "iusto",
        },
      },
      defaultMinimumAgeForSelfConsent: 892852,
      emailPlus: {
        emailTemplateId: "c421e106-4ca7-4981-9e53-511ea43a44f3",
        enabled: false,
        maximumTimeToSendEmailInHours: 572084,
        minimumTimeToSendEmailInHours: 40635,
      },
      id: "d273a55a-c00b-4c3d-9d1d-3e98da25c785",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      multipleValuesAllowed: false,
      name: "Jackie Ryan III",
      values: [
        "voluptatem",
        "quasi",
        "odio",
        "fugiat",
      ],
    },
    consentId: "35361856-59c9-4063-9919-249fd0f6434b",
    data: {
      "maiores": {
        "earum": "vero",
        "nisi": "quibusdam",
        "esse": "alias",
        "eos": "iusto",
      },
      "rerum": {
        "nostrum": "dignissimos",
      },
    },
    giverUserId: "c8c56dbc-97bd-4c50-98dc-98f6d9014e20",
    id: "0420c693-70e1-4470-be40-25a3e7f9fa1f",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    status: ConsentStatusEnum.Revoked,
    userId: "b00df147-bef6-44d3-9a87-6bc17092484c",
    values: [
      "impedit",
      "nam",
      "architecto",
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

sdk.sdk.updateUserVerifyEmail("omnis", "omnis", "pariatur").then((res: UpdateUserVerifyEmailResponse) => {
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

sdk.sdk.updateUserVerifyRegistration("perferendis", "fugiat", "atque").then((res: UpdateUserVerifyRegistrationResponse) => {
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
import {
  BreachedPasswordStatusEnum,
  ChangePasswordReasonEnum,
  ContentStatusEnum,
  TOTPAlgorithmEnum,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.sdk.updateUserWithId("modi", {
  applicationId: "efdd8789-e403-41f1-b513-d29af71b3ae2",
  currentPassword: "odio",
  disableDomainBlock: false,
  eventInfo: {
    data: {
      "hic": {
        "qui": "harum",
        "harum": "maiores",
        "laboriosam": "eveniet",
      },
    },
    deviceDescription: "itaque",
    deviceName: "voluptatum",
    deviceType: "esse",
    ipAddress: "minima",
    location: {
      city: "Bloomington",
      country: "Syrian Arab Republic",
      displayString: "deserunt",
      latitude: 3914.32,
      longitude: 1103.4,
      region: "neque",
      zipcode: "73638",
    },
    os: "asperiores",
    userAgent: "architecto",
  },
  sendSetPasswordEmail: false,
  skipVerification: false,
  user: {
    active: false,
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
    cleanSpeakId: "21bdee7e-e1f8-43a8-bbba-5b4676adf89e",
    connectorId: "92ce1c5e-187e-4296-9753-514daad58c44",
    data: {
      "expedita": {
        "molestias": "pariatur",
        "officiis": "nostrum",
        "voluptates": "porro",
      },
      "quam": {
        "eos": "nihil",
        "impedit": "accusantium",
        "saepe": "eius",
      },
    },
    email: "Maxine_Zboncak17@hotmail.com",
    encryptionScheme: "vero",
    expiry: 1659380719000,
    factor: 225468,
    firstName: "Savanah",
    fullName: "et",
    id: "97e65709-ffbc-4712-9e08-0e9c16db7a9d",
    imageUrl: "laboriosam",
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastName: "Welch",
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "quas": {
            "aut": "magnam",
            "perferendis": "architecto",
            "error": "id",
          },
        },
        groupId: "81459725-3cb9-4eb3-aa94-f548428b6704",
        id: "5330fd0a-55e6-4bbb-b7a6-7ed7f858d3a9",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.SubAddressMatch,
          cleanSpeakId: "9f8a214b-d85b-4b04-9960-48b8e25514c0",
          connectorId: "52b640ae-57de-4e0d-9e85-e1de0e98663a",
          data: {
            "inventore": {
              "enim": "nulla",
            },
            "harum": {
              "officiis": "eligendi",
              "optio": "laborum",
              "ab": "libero",
            },
            "ipsa": {
              "iusto": "tenetur",
              "dignissimos": "ducimus",
              "nihil": "quibusdam",
            },
          },
          email: "Elton_Dooley82@yahoo.com",
          encryptionScheme: "veniam",
          expiry: 1659380719000,
          factor: 92601,
          firstName: "Crawford",
          fullName: "aliquam",
          id: "152c07a3-4a17-4c26-8a4f-55134a4a440d",
          imageUrl: "dicta",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Abshire",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "aspernatur",
          mobilePhone: "sit",
          parentEmail: "corporis",
          password: "quod",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "a035899c-58dc-4127-b4ad-0a8b5e65454b",
              authenticationToken: "quae",
              cleanSpeakId: "f0a3b8a6-534e-43de-8c95-058b49f6501b",
              data: {
                "quos": {
                  "cupiditate": "sint",
                  "illo": "amet",
                  "fugiat": "quos",
                  "magni": "cumque",
                },
              },
              id: "ef1366cd-58aa-4cc9-a47f-218ec324fd34",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
                "en_US",
                "en_US",
              ],
              roles: [
                "laudantium",
                "praesentium",
                "corrupti",
              ],
              timezone: "America/Denver",
              tokens: {
                "magni": "debitis",
                "rerum": "nemo",
                "debitis": "libero",
                "quasi": "maxime",
              },
              username: "Sylvan.Hudson",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "fb6a964f-c387-4082-9f7c-c25629a12696",
              authenticationToken: "iure",
              cleanSpeakId: "e31b6b22-47be-4ccb-8a1a-051bc3a61859",
              data: {
                "asperiores": {
                  "aspernatur": "ut",
                },
              },
              id: "7b9d3a35-5f9d-40c5-9ab9-024613fcec9c",
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
              ],
              timezone: "America/Denver",
              tokens: {
                "repudiandae": "ut",
              },
              username: "Kenyon.Murazik",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "voluptas",
          tenantId: "4a181592-1d96-4e6d-9772-3b032e55bb96",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 264273,
                  timeStep: 22407,
                },
                email: "Patience_Balistreri@hotmail.com",
                id: "363be51a-de68-47a2-8038-114b47b1f336",
                lastUsed: false,
                method: "molestiae",
                mobilePhone: "rem",
                secret: "beatae",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 652743,
                  timeStep: 582900,
                },
                email: "Natalia52@hotmail.com",
                id: "87c841c3-35f6-4720-ac5a-d0afc68df5fe",
                lastUsed: false,
                method: "voluptate",
                mobilePhone: "reprehenderit",
                secret: "maxime",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 989135,
                  timeStep: 910778,
                },
                email: "Sam.Klein@hotmail.com",
                id: "01206e6f-d9b7-45c1-872f-61552e6365e2",
                lastUsed: false,
                method: "libero",
                mobilePhone: "totam",
                secret: "ipsum",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha256,
                  codeLength: 902402,
                  timeStep: 979209,
                },
                email: "Alanis_Leannon@hotmail.com",
                id: "46cbc8ec-30fa-4ad6-ac0a-3e6e164a5f1d",
                lastUsed: false,
                method: "magnam",
                mobilePhone: "sunt",
                secret: "quis",
              },
            ],
            recoveryCodes: [
              "voluptatum",
              "dolore",
              "vel",
              "quod",
            ],
          },
          uniqueUsername: "aliquid",
          username: "Rossie.Kautzer35",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "2735c129-12aa-41b4-993c-c2f054516679",
      },
      {
        data: {
          "laboriosam": {
            "cupiditate": "ad",
            "ipsa": "aperiam",
            "quam": "eligendi",
          },
        },
        groupId: "d7c396a2-a601-4377-bb52-2cb6b3706d59",
        id: "17992f97-6365-4b44-8b91-92023c64327b",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.CommonPassword,
          cleanSpeakId: "9ce5e767-ecbb-4617-8b83-04bc827c53a6",
          connectorId: "d3d7229f-676f-437c-aa5e-03545a73d021",
          data: {
            "sit": {
              "esse": "nam",
            },
          },
          email: "Wellington_Kihn52@gmail.com",
          encryptionScheme: "repellat",
          expiry: 1659380719000,
          factor: 654052,
          firstName: "Jermey",
          fullName: "reprehenderit",
          id: "ef0ae5c8-ead7-46d8-ad13-22bdcb7da603",
          imageUrl: "in",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Kessler",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "placeat",
          mobilePhone: "expedita",
          parentEmail: "labore",
          password: "suscipit",
          passwordChangeReason: ChangePasswordReasonEnum.Administrative,
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
              applicationId: "7324adfa-1b1b-4132-a63e-3a06a3b8bb83",
              authenticationToken: "repudiandae",
              cleanSpeakId: "bcd27f8c-fa6b-4119-83b7-bd25f974c4e0",
              data: {
                "est": {
                  "nesciunt": "sunt",
                },
                "rerum": {
                  "quisquam": "voluptates",
                },
              },
              id: "b1cd1c1f-c09b-4cd7-8ab5-c553f3ed4e78",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "quaerat",
              ],
              timezone: "America/Denver",
              tokens: {
                "nesciunt": "nemo",
                "porro": "pariatur",
                "maxime": "corrupti",
              },
              username: "Bailee9",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "voluptatibus",
          tenantId: "fe96e724-f62e-4a37-bc63-697696f8142e",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 898192,
                  timeStep: 604756,
                },
                email: "Kyla_OReilly39@hotmail.com",
                id: "44b26b5d-49b3-4855-af40-86f0ee6b5f72",
                lastUsed: false,
                method: "eaque",
                mobilePhone: "eum",
                secret: "nisi",
              },
            ],
            recoveryCodes: [
              "dolorum",
              "possimus",
            ],
          },
          uniqueUsername: "nemo",
          username: "Aric.Strosin",
          usernameStatus: ContentStatusEnum.Pending,
          verified: false,
        },
        userId: "a25ac826-14d4-4415-ad2e-0475d1656482",
      },
      {
        data: {
          "nisi": {
            "non": "labore",
          },
          "sint": {
            "nulla": "quasi",
            "ea": "odit",
          },
          "veniam": {
            "autem": "et",
            "ab": "id",
            "nobis": "saepe",
          },
        },
        groupId: "2c426ecd-ee1c-4d0c-a4d8-3d9fdb27ff31",
        id: "e8ff6791-3465-4318-98d5-fe3d83235c0f",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
          cleanSpeakId: "4a151c05-d891-4f3b-8250-3fa299b1d1db",
          connectorId: "72c6411b-44d1-4ec4-b065-dc32ba05b678",
          data: {
            "quae": {
              "facere": "tempora",
            },
            "animi": {
              "magni": "molestiae",
            },
            "perferendis": {
              "minus": "modi",
              "blanditiis": "corrupti",
            },
            "doloremque": {
              "consequuntur": "perspiciatis",
            },
          },
          email: "Lonzo_Kautzer@yahoo.com",
          encryptionScheme: "aut",
          expiry: 1659380719000,
          factor: 952204,
          firstName: "Brando",
          fullName: "labore",
          id: "40e76194-fc0b-40b1-8378-2de6c51cb89c",
          imageUrl: "modi",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Deckow",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
            {},
            {},
          ],
          middleName: "laborum",
          mobilePhone: "a",
          parentEmail: "nobis",
          password: "doloremque",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
          passwordChangeRequired: false,
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
            "en_US",
          ],
          registrations: [
            {
              applicationId: "66f98460-0440-41e9-8be9-5e79a67445c3",
              authenticationToken: "eaque",
              cleanSpeakId: "c0262e10-5c57-49eb-99c9-de355f22c0ca",
              data: {
                "sed": {
                  "rerum": "aperiam",
                  "excepturi": "facere",
                  "ipsum": "nesciunt",
                },
                "nisi": {
                  "praesentium": "occaecati",
                  "ex": "magnam",
                  "earum": "veniam",
                },
                "accusamus": {
                  "dolorum": "minima",
                },
              },
              id: "4f0cf3f4-59e4-48ed-8ff5-2c8b6a42bfb5",
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "est",
                "sint",
                "quos",
                "magni",
              ],
              timezone: "America/Denver",
              tokens: {
                "ex": "labore",
              },
              username: "Aletha_Dibbert11",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
            {
              applicationId: "0ccc4587-28f3-4605-8778-5d7cae851e5b",
              authenticationToken: "ipsa",
              cleanSpeakId: "89b76ceb-229a-4d69-94ad-e72109c79b60",
              data: {
                "quo": {
                  "atque": "sunt",
                  "neque": "doloremque",
                },
                "aut": {
                  "delectus": "in",
                  "omnis": "distinctio",
                  "ipsa": "et",
                  "quaerat": "odio",
                },
                "eveniet": {
                  "totam": "accusamus",
                  "quis": "nihil",
                },
              },
              id: "183e9d4e-e374-4a46-b897-9b0703f9bd5e",
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
                "animi",
              ],
              timezone: "America/Denver",
              tokens: {
                "iusto": "dolorem",
                "nobis": "odio",
                "quia": "ex",
              },
              username: "Randall.Mohr",
              usernameStatus: ContentStatusEnum.Rejected,
              verified: false,
            },
          ],
          salt: "praesentium",
          tenantId: "1ac9cbee-a331-4f2c-8559-43d9aa8a6a70",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 384091,
                  timeStep: 640494,
                },
                email: "Alvina_Stehr86@yahoo.com",
                id: "302a9418-207a-4244-97d7-5722c97b1ad5",
                lastUsed: false,
                method: "similique",
                mobilePhone: "itaque",
                secret: "illo",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 540596,
                  timeStep: 655906,
                },
                email: "Emilio82@yahoo.com",
                id: "09f5f45e-66e1-4518-a436-f930729e91ba",
                lastUsed: false,
                method: "laudantium",
                mobilePhone: "labore",
                secret: "est",
              },
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha1,
                  codeLength: 418325,
                  timeStep: 196788,
                },
                email: "Ewald.Jerde47@gmail.com",
                id: "644c273c-810a-4165-a58b-99bca3ae20f8",
                lastUsed: false,
                method: "laudantium",
                mobilePhone: "officiis",
                secret: "aliquam",
              },
            ],
            recoveryCodes: [
              "exercitationem",
              "tempore",
            ],
          },
          uniqueUsername: "fugit",
          username: "Branson_Kub14",
          usernameStatus: ContentStatusEnum.Rejected,
          verified: false,
        },
        userId: "fc2a3ef1-0eb0-40dc-be91-f2e03a9c9c63",
      },
      {
        data: {
          "recusandae": {
            "error": "iusto",
            "reprehenderit": "ipsa",
            "deleniti": "repellendus",
            "a": "iusto",
          },
          "necessitatibus": {
            "exercitationem": "eos",
            "consectetur": "iure",
            "provident": "autem",
            "dolores": "aspernatur",
          },
        },
        groupId: "d96a9f3c-df96-42a0-8701-ae79474262f0",
        id: "3d277aa6-4eb1-40ae-810c-564470db3e93",
        insertInstant: 1659380719000,
        user: {
          active: false,
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          breachedPasswordStatus: BreachedPasswordStatusEnum.PasswordOnly,
          cleanSpeakId: "cc0f7b62-649f-4b30-9719-df8d2df29977",
          connectorId: "0318106d-740c-41b6-9138-002a0163cbb7",
          data: {
            "culpa": {
              "numquam": "assumenda",
            },
            "vel": {
              "dolore": "expedita",
              "officiis": "delectus",
            },
            "fuga": {
              "eius": "modi",
              "omnis": "eius",
              "numquam": "minus",
            },
          },
          email: "Laurence_Kemmer@yahoo.com",
          encryptionScheme: "est",
          expiry: 1659380719000,
          factor: 797831,
          firstName: "Sammy",
          fullName: "necessitatibus",
          id: "d03ded00-d3d6-41ab-ba99-d3adb4c6df00",
          imageUrl: "recusandae",
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastName: "Dare",
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
            {},
          ],
          middleName: "quo",
          mobilePhone: "atque",
          parentEmail: "velit",
          password: "doloremque",
          passwordChangeReason: ChangePasswordReasonEnum.Breached,
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
              applicationId: "986fef6c-2c3a-412e-b583-9b61c05bdf0d",
              authenticationToken: "voluptate",
              cleanSpeakId: "9253d7cc-d04a-425d-8f46-20972f7db9c4",
              data: {
                "ipsa": {
                  "ut": "tenetur",
                  "doloremque": "a",
                  "similique": "hic",
                  "vitae": "iusto",
                },
                "error": {
                  "dicta": "similique",
                  "numquam": "culpa",
                  "voluptates": "reprehenderit",
                  "voluptate": "sed",
                },
                "ad": {
                  "iste": "repudiandae",
                  "minus": "molestiae",
                },
                "excepturi": {
                  "corrupti": "voluptatum",
                  "est": "praesentium",
                  "eius": "assumenda",
                  "vero": "esse",
                },
              },
              id: "89e0dadc-0077-4f88-a293-95942bcd6deb",
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
                "odit",
                "cum",
                "voluptatum",
                "molestiae",
              ],
              timezone: "America/Denver",
              tokens: {
                "dolorem": "repudiandae",
              },
              username: "Mervin63",
              usernameStatus: ContentStatusEnum.Pending,
              verified: false,
            },
          ],
          salt: "ratione",
          tenantId: "a4b8e4d6-cf90-46a9-8bb3-08970b82d676",
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {
                  algorithm: TOTPAlgorithmEnum.HmacSha512,
                  codeLength: 671059,
                  timeStep: 778570,
                },
                email: "Alexandria47@yahoo.com",
                id: "e63639b9-88df-4d91-a89d-6151eb5a6a18",
                lastUsed: false,
                method: "optio",
                mobilePhone: "nesciunt",
                secret: "ipsum",
              },
            ],
            recoveryCodes: [
              "animi",
              "autem",
              "tenetur",
            ],
          },
          uniqueUsername: "excepturi",
          username: "Matilda.Harris",
          usernameStatus: ContentStatusEnum.Active,
          verified: false,
        },
        userId: "d838a9a9-f5c9-46a7-a9e2-17333096d65b",
      },
    ],
    middleName: "consequuntur",
    mobilePhone: "molestias",
    parentEmail: "voluptatibus",
    password: "earum",
    passwordChangeReason: ChangePasswordReasonEnum.Administrative,
    passwordChangeRequired: false,
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
      "en_US",
    ],
    registrations: [
      {
        applicationId: "8c6bb0fa-a5f2-4e84-9572-6a9c01690cc5",
        authenticationToken: "consequuntur",
        cleanSpeakId: "0ce07ccf-14d5-499e-8246-ed380efb1002",
        data: {
          "dignissimos": {
            "assumenda": "veniam",
            "ducimus": "aliquid",
            "rerum": "aut",
          },
          "fugiat": {
            "eum": "cum",
            "impedit": "ipsum",
            "labore": "deserunt",
            "eos": "nihil",
          },
        },
        id: "6ff2937c-2c6a-4536-811e-cef01fb714d2",
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
          "aut",
          "consequatur",
          "reprehenderit",
          "omnis",
        ],
        timezone: "America/Denver",
        tokens: {
          "sapiente": "quod",
        },
        username: "Toy_Quigley",
        usernameStatus: ContentStatusEnum.Pending,
        verified: false,
      },
      {
        applicationId: "c9891cde-7f76-474a-a3ab-166aee3ab31c",
        authenticationToken: "beatae",
        cleanSpeakId: "c21d3013-1ead-4f38-b473-130390e08116",
        data: {
          "cupiditate": {
            "occaecati": "fuga",
          },
        },
        id: "5d3e2ef6-d977-4480-87bc-8a27a77a14f3",
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
          "nemo",
          "debitis",
          "possimus",
          "quia",
        ],
        timezone: "America/Denver",
        tokens: {
          "officiis": "adipisci",
          "distinctio": "ab",
        },
        username: "Vivienne.Beier",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      {
        applicationId: "056bbbf4-51aa-4edd-ad75-d08d49832dac",
        authenticationToken: "quibusdam",
        cleanSpeakId: "f167ce63-3089-471d-8fac-19adb772717d",
        data: {
          "maiores": {
            "nesciunt": "quae",
            "accusantium": "praesentium",
            "labore": "eum",
          },
        },
        id: "431ba932-210d-4bf6-a83c-59cd885026ca",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "debitis",
        ],
        timezone: "America/Denver",
        tokens: {
          "ullam": "aut",
          "autem": "sapiente",
          "similique": "inventore",
          "mollitia": "nihil",
        },
        username: "Reanna_Huel26",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
      {
        applicationId: "1dd41417-7e69-4a08-97c2-8aa743443b5a",
        authenticationToken: "unde",
        cleanSpeakId: "40d6f190-bfe0-4df1-86cd-e02a0d9d914c",
        data: {
          "asperiores": {
            "beatae": "atque",
            "vero": "est",
          },
          "dicta": {
            "perferendis": "tenetur",
            "expedita": "eos",
          },
        },
        id: "599542ee-5614-41c2-b488-3e2c9de2a195",
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
          "en_US",
        ],
        roles: [
          "autem",
          "voluptatibus",
          "labore",
        ],
        timezone: "America/Denver",
        tokens: {
          "repellendus": "deserunt",
          "doloremque": "quos",
          "accusantium": "corrupti",
          "perspiciatis": "voluptatem",
        },
        username: "Alberto.OHara",
        usernameStatus: ContentStatusEnum.Active,
        verified: false,
      },
    ],
    salt: "aliquid",
    tenantId: "87344bee-8530-41c2-b0a9-907349db3295",
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha512,
            codeLength: 508036,
            timeStep: 514460,
          },
          email: "Clementina_Denesik@gmail.com",
          id: "454cf93d-ba06-427b-b57e-10d305d2a492",
          lastUsed: false,
          method: "molestias",
          mobilePhone: "esse",
          secret: "eos",
        },
        {
          authenticator: {
            algorithm: TOTPAlgorithmEnum.HmacSha1,
            codeLength: 317298,
            timeStep: 340857,
          },
          email: "Lauren_Jaskolski@yahoo.com",
          id: "b1f19854-3f10-4da2-bd74-23b0f39e61d0",
          lastUsed: false,
          method: "molestiae",
          mobilePhone: "corrupti",
          secret: "perferendis",
        },
      ],
      recoveryCodes: [
        "excepturi",
      ],
    },
    uniqueUsername: "quam",
    username: "Anastacio67",
    usernameStatus: ContentStatusEnum.Active,
    verified: false,
  },
}, "aspernatur", "repellendus").then((res: UpdateUserWithIdResponse) => {
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

sdk.sdk.updateWebhookWithId("expedita", {
  webhook: {
    connectTimeout: 451273,
    data: {
      "modi": {
        "possimus": "quae",
        "fuga": "quasi",
        "nam": "voluptate",
      },
      "aliquam": {
        "nihil": "aperiam",
        "sunt": "ea",
      },
    },
    description: "placeat",
    eventsEnabled: {
      "sapiente": false,
      "itaque": false,
      "quod": false,
    },
    global: false,
    headers: {
      "ducimus": "facilis",
      "modi": "voluptatibus",
      "culpa": "voluptate",
    },
    httpAuthenticationPassword: "earum",
    httpAuthenticationUsername: "quibusdam",
    id: "c6f6a029-b7e7-46d6-b22f-7586b9e0b71c",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    readTimeout: 428083,
    sslCertificate: "pariatur",
    tenantIds: [
      "ce43f819-2853-4849-90ab-39ea78de6bab",
      "c916cfc4-6f6b-4c04-b361-ba30f5ac8476",
      "e0add1ca-6db2-4264-9bdd-743b5d3f75e2",
      "8d3232ee-db2a-43cb-81c3-b09d3e1df276",
    ],
    url: "iure",
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

sdk.sdk.upsertEntityGrantWithId("provident", {
  grant: {
    data: {
      "ipsa": {
        "unde": "quae",
      },
      "est": {
        "perspiciatis": "sapiente",
        "quasi": "doloremque",
      },
    },
    entity: {
      clientId: "molestiae",
      clientSecret: "esse",
      data: {
        "quis": {
          "nisi": "culpa",
          "eius": "at",
          "amet": "atque",
        },
      },
      id: "2d46d09b-d4c5-47fb-8df6-9637b1d7672d",
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      name: "Brittany Dach",
      parentId: "7246484a-fe17-42eb-8a48-d17ab1c6dd71",
      tenantId: "f4128704-e323-4321-bfe8-5910e89a2f88",
      type: {
        data: {
          "id": {
            "possimus": "quae",
            "veniam": "excepturi",
          },
          "ex": {
            "aut": "necessitatibus",
          },
          "vitae": {
            "odit": "iusto",
            "dolorum": "voluptates",
          },
        },
        id: "6c4e2598-1bb5-46c4-a199-199ca6c64d76",
        insertInstant: 1659380719000,
        jwtConfiguration: {
          accessTokenKeyId: "25819eb8-5296-4e56-9183-a1a6cdd10dc9",
          enabled: false,
          timeToLiveInSeconds: 350001,
        },
        lastUpdateInstant: 1659380719000,
        name: "Cesar Wisoky",
        permissions: [
          {
            data: {
              "labore": {
                "pariatur": "vitae",
                "aliquam": "nostrum",
              },
              "molestias": {
                "labore": "perferendis",
                "unde": "maiores",
                "nihil": "rerum",
                "aliquam": "laboriosam",
              },
              "ut": {
                "enim": "hic",
              },
            },
            description: "optio",
            id: "2ce2ad3e-7825-45e7-93fb-8fcab033ee42",
            insertInstant: 1659380719000,
            isDefault: false,
            lastUpdateInstant: 1659380719000,
            name: "Mr. Chad Gislason PhD",
          },
        ],
      },
    },
    id: "34f11e93-70f0-4c14-9032-0a1b2e886bfd",
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    permissions: [
      "autem",
      "necessitatibus",
    ],
    recipientEntityId: "da9ae229-5568-4a70-a944-5d378a3eddca",
    userId: "8d9cd818-b7dc-49c2-a0f1-e03143d72954",
  },
}, "similique").then((res: UpsertEntityGrantWithIdResponse) => {
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

sdk.sdk.validateDeviceWithId("exercitationem", "at").then((res: ValidateDeviceWithIdResponse) => {
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
    "commodi": {
      "porro": "illo",
      "aliquid": "perferendis",
    },
    "nihil": {
      "ea": "necessitatibus",
      "quisquam": "quos",
      "earum": "exercitationem",
    },
  },
  keyId: "b4ecb829-cc98-4e98-9d23-56c94f2b8283",
  timeToLiveInSeconds: 737172,
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
      "amet": {
        "eaque": "ab",
        "itaque": "reprehenderit",
        "qui": "iure",
        "dolorum": "id",
      },
      "temporibus": {
        "assumenda": "molestiae",
        "fugiat": "fugit",
        "repudiandae": "sint",
      },
      "quod": {
        "explicabo": "non",
      },
      "reiciendis": {
        "magnam": "fuga",
        "beatae": "dolor",
      },
    },
    deviceDescription: "numquam",
    deviceName: "corrupti",
    deviceType: "provident",
    ipAddress: "soluta",
    location: {
      city: "Henrietteburgh",
      country: "Fiji",
      displayString: "veritatis",
      latitude: 7504.03,
      longitude: 4234.5,
      region: "possimus",
      zipcode: "33927-2782",
    },
    os: "quae",
    userAgent: "expedita",
  },
  oneTimeCode: "fugiat",
  verificationId: "quos",
}).then((res: VerifyUserRegistrationWithIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
