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

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.actionUserWithId({
    action: {
      applicationIds: [
        "05b11f02-bdcd-42e5-8dbb-46f1de51cfba",
      ],
      expiry: 1659380719000,
    },
    eventInfo: {
      data: {
        "Director": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ActionRequest](../../models/shared/actionrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ActionUserWithIdResponse](../../models/operations/actionuserwithidresponse.md)>**


## activateReactorWithId

Activates the FusionAuth Reactor using a license id and optionally a license text (for air-gapped deployments)

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.activateReactorWithId({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.ReactorRequest](../../models/shared/reactorrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.ActivateReactorWithIdResponse](../../models/operations/activatereactorwithidresponse.md)>**


## addUserToFamilyWithId

Adds a user to an existing family. The family id must be specified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { AddUserToFamilyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyMember, FamilyMemberData, FamilyRequest, FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const familyId: string = "Administrator";
const familyRequest: FamilyRequest = {
  familyMember: {
    data: {
      "er": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Interactions";

  const res = await sdk.sdk.addUserToFamilyWithId(familyId, familyRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `familyId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The id of the family.                                                                                                                              |
| `familyRequest`                                                                                                                                    | [shared.FamilyRequest](../../models/shared/familyrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.AddUserToFamilyWithIdResponse](../../models/operations/addusertofamilywithidresponse.md)>**


## cancelActionWithId

Cancels the user action.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CancelActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ActionData, ActionRequest, EventInfo, EventInfoData, Location } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const actionId: string = "solid";
const actionRequest: ActionRequest = {
  action: {
    applicationIds: [
      "37211dda-3831-42ac-8bbd-29c049f3123c",
    ],
    expiry: 1659380719000,
  },
  eventInfo: {
    data: {
      "sky": {},
    },
    location: {},
  },
};

  const res = await sdk.sdk.cancelActionWithId(actionId, actionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `actionId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The action id of the action to cancel.                       |
| `actionRequest`                                              | [shared.ActionRequest](../../models/shared/actionrequest.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CancelActionWithIdResponse](../../models/operations/cancelactionwithidresponse.md)>**


## changePasswordByIdentityWithId

Changes a user's password using their identity (login id and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.changePasswordByIdentityWithId({
    eventInfo: {
      data: {
        "West": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.ChangePasswordRequest](../../models/shared/changepasswordrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ChangePasswordByIdentityWithIdResponse](../../models/operations/changepasswordbyidentitywithidresponse.md)>**


## changePasswordWithId

Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ChangePasswordWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ChangePasswordRequest, EventInfo, EventInfoData, Location } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const changePasswordId: string = "IP";
const changePasswordRequest: ChangePasswordRequest = {
  eventInfo: {
    data: {
      "gadzooks": {},
    },
    location: {},
  },
};

  const res = await sdk.sdk.changePasswordWithId(changePasswordId, changePasswordRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                 | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `changePasswordId`                                                                                                                        | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated. |
| `changePasswordRequest`                                                                                                                   | [shared.ChangePasswordRequest](../../models/shared/changepasswordrequest.md)                                                              | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `config`                                                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                              | :heavy_minus_sign:                                                                                                                        | Available config options for making requests.                                                                                             |


### Response

**Promise<[operations.ChangePasswordWithIdResponse](../../models/operations/changepasswordwithidresponse.md)>**


## checkChangePasswordUsingIdWithId

Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CheckChangePasswordUsingIdWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const changePasswordId: string = "Pickup";

  const res = await sdk.sdk.checkChangePasswordUsingIdWithId(changePasswordId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                 | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `changePasswordId`                                                                                                                        | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated. |
| `config`                                                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                              | :heavy_minus_sign:                                                                                                                        | Available config options for making requests.                                                                                             |


### Response

**Promise<[operations.CheckChangePasswordUsingIdWithIdResponse](../../models/operations/checkchangepasswordusingidwithidresponse.md)>**


## commentOnUserWithId

Adds a comment to the user's account.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CommentOnUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { UserComment, UserCommentRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userCommentRequest: UserCommentRequest = {
  userComment: {
    insertInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Licensed";

  const res = await sdk.sdk.commentOnUserWithId(userCommentRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userCommentRequest`                                                                                                                               | [shared.UserCommentRequest](../../models/shared/usercommentrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CommentOnUserWithIdResponse](../../models/operations/commentonuserwithidresponse.md)>**


## completeWebAuthnAssertionWithId

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.completeWebAuthnAssertionWithId({
    credential: {
      clientExtensionResults: {
        credProps: {},
      },
      response: {},
    },
    metaData: {
      data: {
        "Salad": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "mammoth",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebAuthnLoginRequest](../../models/shared/webauthnloginrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CompleteWebAuthnAssertionWithIdResponse](../../models/operations/completewebauthnassertionwithidresponse.md)>**


## completeWebAuthnLoginWithId

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.completeWebAuthnLoginWithId({
    credential: {
      clientExtensionResults: {
        credProps: {},
      },
      response: {},
    },
    metaData: {
      data: {
        "Northwest": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "commonly",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebAuthnLoginRequest](../../models/shared/webauthnloginrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CompleteWebAuthnLoginWithIdResponse](../../models/operations/completewebauthnloginwithidresponse.md)>**


## completeWebAuthnRegistrationWithId

Complete a WebAuthn registration ceremony by validating the client request and saving the new credential

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.completeWebAuthnRegistrationWithId({
    credential: {
      clientExtensionResults: {
        credProps: {},
      },
      response: {},
      transports: [
        "frame",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.WebAuthnRegisterCompleteRequest](../../models/shared/webauthnregistercompleterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CompleteWebAuthnRegistrationWithIdResponse](../../models/operations/completewebauthnregistrationwithidresponse.md)>**


## createAPIKey

Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createAPIKey({
    apiKey: {
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      metaData: {
        attributes: {
          "BMX": "quantify",
        },
      },
      permissions: {
        endpoints: {
          "Wylie": [
            "RSS",
          ],
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.APIKeyRequest](../../models/shared/apikeyrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateAPIKeyResponse](../../models/operations/createapikeyresponse.md)>**


## createApiKeyWithId

Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant. OR Updates an authentication API key by given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApiKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { APIKey, APIKeyMetaData, APIKeyPermissions, APIKeyRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Luxurious";
const apiKeyRequest: APIKeyRequest = {
  apiKey: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "azure": "Soap",
      },
    },
    permissions: {
      endpoints: {
        "onto": [
          "for",
        ],
      },
    },
  },
};

  const res = await sdk.sdk.createApiKeyWithId(keyId, apiKeyRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                           | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `keyId`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | The unique Id of the API key. If not provided a secure random Id will be generated. |
| `apiKeyRequest`                                                                     | [shared.APIKeyRequest](../../models/shared/apikeyrequest.md)                        | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `config`                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                        | :heavy_minus_sign:                                                                  | Available config options for making requests.                                       |


### Response

**Promise<[operations.CreateApiKeyWithIdResponse](../../models/operations/createapikeywithidresponse.md)>**


## createApplication

Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "14a20aaf-1c0f-48b8-8bf7-c464d989e614",
      ],
      usernameModeration: {},
    },
    data: {
      "Pants": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "atque",
      ],
      authorizedRedirectURLs: [
        "powerfully",
      ],
      enabledGrants: [
        "azure",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "North",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "Luxembourg": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Northwest";

  const res = await sdk.sdk.createApplication(applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateApplicationResponse](../../models/operations/createapplicationresponse.md)>**


## createApplicationRole

Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationRoleRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "candela";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "77c52e2a-45b9-4eb2-aff7-ea2d019b9b81",
      ],
      usernameModeration: {},
    },
    data: {
      "foolishly": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "Markets",
      ],
      authorizedRedirectURLs: [
        "Rubber",
      ],
      enabledGrants: [
        "Polarised",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "Rock",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "incubate": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Boliviano";

  const res = await sdk.sdk.createApplicationRole(applicationId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to create the role on.                                                                                                   |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateApplicationRoleResponse](../../models/operations/createapplicationroleresponse.md)>**


## createApplicationRoleWithId

Creates a new role for an application. You must specify the id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationRoleWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "communities";
const roleId: string = "Engineer";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "14828f16-ba26-4284-948c-18126c16f050",
      ],
      usernameModeration: {},
    },
    data: {
      "benchmark": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "Legacy",
      ],
      authorizedRedirectURLs: [
        "Southwest",
      ],
      enabledGrants: [
        "Web",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "coulomb",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "Clothing": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Lats";

  const res = await sdk.sdk.createApplicationRoleWithId(applicationId, roleId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to create the role on.                                                                                                   |
| `roleId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the role. If not provided a secure random UUID will be generated.                                                                        |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateApplicationRoleWithIdResponse](../../models/operations/createapplicationrolewithidresponse.md)>**


## createApplicationWithId

Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateApplicationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Music";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "983fd89a-d18d-4c1f-8e09-3590017880c3",
      ],
      usernameModeration: {},
    },
    data: {
      "deliverables": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "well",
      ],
      authorizedRedirectURLs: [
        "reintermediate",
      ],
      enabledGrants: [
        "Infrastructure",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "Female",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "sweater": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Associate";

  const res = await sdk.sdk.createApplicationWithId(applicationId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id to use for the application. If not provided a secure random UUID will be generated.                                                         |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateApplicationWithIdResponse](../../models/operations/createapplicationwithidresponse.md)>**


## createAuditLogWithId

Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createAuditLogWithId({
    auditLog: {
      data: {
        "Maryland": {},
      },
      insertInstant: 1659380719000,
      newValue: {},
      oldValue: {},
    },
    eventInfo: {
      data: {
        "violet": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.AuditLogRequest](../../models/shared/auditlogrequest.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateAuditLogWithIdResponse](../../models/operations/createauditlogwithidresponse.md)>**


## createConnector

Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ConnectorType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createConnector({
    connector: {
      data: {
        "Modern": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.ConnectorRequest](../../models/shared/connectorrequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CreateConnectorResponse](../../models/operations/createconnectorresponse.md)>**


## createConnectorWithId

Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConnectorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseConnectorConfiguration,
  BaseConnectorConfigurationData,
  ConnectorRequest,
  ConnectorType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const connectorId: string = "Agent";
const connectorRequest: ConnectorRequest = {
  connector: {
    data: {
      "man": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createConnectorWithId(connectorId, connectorRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `connectorId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The Id for the connector. If not provided a secure random UUID will be generated. |
| `connectorRequest`                                                                | [shared.ConnectorRequest](../../models/shared/connectorrequest.md)                | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.CreateConnectorWithIdResponse](../../models/operations/createconnectorwithidresponse.md)>**


## createConsent

Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConsentRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Consent, ConsentData, ConsentRequest, EmailPlus, LocalizedIntegers } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentRequest: ConsentRequest = {
  consent: {
    countryMinimumAgeForSelfConsent: {},
    data: {
      "modern": {},
    },
    emailPlus: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Account",
    ],
  },
};
const xFusionAuthTenantId: string = "Kiribati";

  const res = await sdk.sdk.createConsent(consentRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentRequest`                                                                                                                                   | [shared.ConsentRequest](../../models/shared/consentrequest.md)                                                                                     | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateConsentResponse](../../models/operations/createconsentresponse.md)>**


## createConsentWithId

Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Consent, ConsentData, ConsentRequest, EmailPlus, LocalizedIntegers } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentId: string = "Northwest";
const consentRequest: ConsentRequest = {
  consent: {
    countryMinimumAgeForSelfConsent: {},
    data: {
      "transmitting": {},
    },
    emailPlus: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Aluminium",
    ],
  },
};
const xFusionAuthTenantId: string = "Braunfels";

  const res = await sdk.sdk.createConsentWithId(consentId, consentRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the consent. If not provided a secure random UUID will be generated.                                                                    |
| `consentRequest`                                                                                                                                   | [shared.ConsentRequest](../../models/shared/consentrequest.md)                                                                                     | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateConsentWithIdResponse](../../models/operations/createconsentwithidresponse.md)>**


## createEmailTemplate

Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEmailTemplateRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EmailTemplate, EmailTemplateRequest, LocalizedStrings } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateRequest: EmailTemplateRequest = {
  emailTemplate: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {},
    localizedHtmlTemplates: {},
    localizedSubjects: {},
    localizedTextTemplates: {},
  },
};
const xFusionAuthTenantId: string = "Luxurious";

  const res = await sdk.sdk.createEmailTemplate(emailTemplateRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateRequest`                                                                                                                             | [shared.EmailTemplateRequest](../../models/shared/emailtemplaterequest.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateEmailTemplateResponse](../../models/operations/createemailtemplateresponse.md)>**


## createEmailTemplateWithId

Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEmailTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EmailTemplate, EmailTemplateRequest, LocalizedStrings } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "Wiegand";
const emailTemplateRequest: EmailTemplateRequest = {
  emailTemplate: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {},
    localizedHtmlTemplates: {},
    localizedSubjects: {},
    localizedTextTemplates: {},
  },
};
const xFusionAuthTenantId: string = "Granite";

  const res = await sdk.sdk.createEmailTemplateWithId(emailTemplateId, emailTemplateRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the template. If not provided a secure random UUID will be generated.                                                                   |
| `emailTemplateRequest`                                                                                                                             | [shared.EmailTemplateRequest](../../models/shared/emailtemplaterequest.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateEmailTemplateWithIdResponse](../../models/operations/createemailtemplatewithidresponse.md)>**


## createEntity

Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Entity,
  EntityData,
  EntityJWTConfiguration,
  EntityRequest,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityRequest: EntityRequest = {
  entity: {
    data: {
      "Industrial": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    type: {
      data: {
        "Implementation": {},
      },
      insertInstant: 1659380719000,
      jwtConfiguration: {},
      lastUpdateInstant: 1659380719000,
      permissions: [
        {
          data: {
            "Future": {},
          },
          insertInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
        },
      ],
    },
  },
};
const xFusionAuthTenantId: string = "Southeast";

  const res = await sdk.sdk.createEntity(entityRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityRequest`                                                                                                                                    | [shared.EntityRequest](../../models/shared/entityrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateEntityResponse](../../models/operations/createentityresponse.md)>**


## createEntityType

Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createEntityType({
    entityType: {
      data: {
        "Infrastructure": {},
      },
      insertInstant: 1659380719000,
      jwtConfiguration: {},
      lastUpdateInstant: 1659380719000,
      permissions: [
        {
          data: {
            "customized": {},
          },
          insertInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
        },
      ],
    },
    permission: {
      data: {
        "quidem": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateEntityTypeResponse](../../models/operations/createentitytyperesponse.md)>**


## createEntityTypePermission

Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypePermissionRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "Steel";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "Applications": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "croon": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "Reggae": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createEntityTypePermission(entityTypeId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `entityTypeId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The Id of the entity type to create the permission on.               |
| `entityTypeRequest`                                                  | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateEntityTypePermissionResponse](../../models/operations/createentitytypepermissionresponse.md)>**


## createEntityTypePermissionWithId

Creates a new permission for an entity type. You must specify the id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypePermissionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "geez";
const permissionId: string = "like";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "Ergonomic": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "Diesel": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "Southwest": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createEntityTypePermissionWithId(entityTypeId, permissionId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `entityTypeId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | The Id of the entity type to create the permission on.                            |
| `permissionId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | The Id of the permission. If not provided a secure random UUID will be generated. |
| `entityTypeRequest`                                                               | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md)              | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.CreateEntityTypePermissionWithIdResponse](../../models/operations/createentitytypepermissionwithidresponse.md)>**


## createEntityTypeWithId

Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "Pickup";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "innovative": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "bus": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "logistical": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createEntityTypeWithId(entityTypeId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                           | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `entityTypeId`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | The Id for the Entity Type. If not provided a secure random UUID will be generated. |
| `entityTypeRequest`                                                                 | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md)                | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `config`                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                        | :heavy_minus_sign:                                                                  | Available config options for making requests.                                       |


### Response

**Promise<[operations.CreateEntityTypeWithIdResponse](../../models/operations/createentitytypewithidresponse.md)>**


## createEntityWithId

Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateEntityWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Entity,
  EntityData,
  EntityJWTConfiguration,
  EntityRequest,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "exploit";
const entityRequest: EntityRequest = {
  entity: {
    data: {
      "Response": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    type: {
      data: {
        "Buckinghamshire": {},
      },
      insertInstant: 1659380719000,
      jwtConfiguration: {},
      lastUpdateInstant: 1659380719000,
      permissions: [
        {
          data: {
            "Branding": {},
          },
          insertInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
        },
      ],
    },
  },
};
const xFusionAuthTenantId: string = "payment";

  const res = await sdk.sdk.createEntityWithId(entityId, entityRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the Entity. If not provided a secure random UUID will be generated.                                                                     |
| `entityRequest`                                                                                                                                    | [shared.EntityRequest](../../models/shared/entityrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateEntityWithIdResponse](../../models/operations/createentitywithidresponse.md)>**


## createFamily

Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFamilyRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyMember, FamilyMemberData, FamilyRequest, FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const familyRequest: FamilyRequest = {
  familyMember: {
    data: {
      "newton": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "kelvin";

  const res = await sdk.sdk.createFamily(familyRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `familyRequest`                                                                                                                                    | [shared.FamilyRequest](../../models/shared/familyrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateFamilyResponse](../../models/operations/createfamilyresponse.md)>**


## createFamilyWithId

Creates a family with the user id in the request as the owner and sole member of the family. You can optionally specify an id for the family, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFamilyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { FamilyMember, FamilyMemberData, FamilyRequest, FamilyRole } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const familyId: string = "orange";
const familyRequest: FamilyRequest = {
  familyMember: {
    data: {
      "pascal": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Vanadium";

  const res = await sdk.sdk.createFamilyWithId(familyId, familyRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `familyId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The id for the family. If not provided a secure random UUID will be generated.                                                                     |
| `familyRequest`                                                                                                                                    | [shared.FamilyRequest](../../models/shared/familyrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateFamilyWithIdResponse](../../models/operations/createfamilywithidresponse.md)>**


## createForm

Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createForm({
    form: {
      data: {
        "salmon": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      steps: [
        {
          fields: [
            "e9ff04ae-f327-4f65-a4bf-3de0cd3a2886",
          ],
        },
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.FormRequest](../../models/shared/formrequest.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateFormResponse](../../models/operations/createformresponse.md)>**


## createFormField

Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { FormControl, FormDataType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createFormField({
    field: {
      data: {
        "Cambodia": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      options: [
        "Latin",
      ],
      validator: {},
    },
    fields: [
      {
        data: {
          "Awesome": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        options: [
          "Tesla",
        ],
        validator: {},
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.FormFieldRequest](../../models/shared/formfieldrequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CreateFormFieldResponse](../../models/operations/createformfieldresponse.md)>**


## createFormFieldWithId

Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormFieldWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  FormControl,
  FormDataType,
  FormField,
  FormFieldData,
  FormFieldRequest,
  FormFieldValidator,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const fieldId: string = "content";
const formFieldRequest: FormFieldRequest = {
  field: {
    data: {
      "programming": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    options: [
      "fuchsia",
    ],
    validator: {},
  },
  fields: [
    {
      data: {
        "Dollar": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      options: [
        "Hyundai",
      ],
      validator: {},
    },
  ],
};

  const res = await sdk.sdk.createFormFieldWithId(fieldId, formFieldRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fieldId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The Id for the form field. If not provided a secure random UUID will be generated. |
| `formFieldRequest`                                                                 | [shared.FormFieldRequest](../../models/shared/formfieldrequest.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateFormFieldWithIdResponse](../../models/operations/createformfieldwithidresponse.md)>**


## createFormWithId

Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateFormWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Form, FormData, FormRequest, FormStep, FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const formId: string = "connecting";
const formRequest: FormRequest = {
  form: {
    data: {
      "Response": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    steps: [
      {
        fields: [
          "5ea5bcf2-d068-4bae-83d3-1a2526c4318c",
        ],
      },
    ],
  },
};

  const res = await sdk.sdk.createFormWithId(formId, formRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `formId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | The Id for the form. If not provided a secure random UUID will be generated. |
| `formRequest`                                                                | [shared.FormRequest](../../models/shared/formrequest.md)                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateFormWithIdResponse](../../models/operations/createformwithidresponse.md)>**


## createGroup

Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateGroupRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ApplicationRole, Group, GroupData, GroupRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupRequest: GroupRequest = {
  group: {
    data: {
      "parallelism": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  roleIds: [
    "d5d73749-17da-4ebf-974b-13e5dac932b3",
  ],
};
const xFusionAuthTenantId: string = "analyzer";

  const res = await sdk.sdk.createGroup(groupRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupRequest`                                                                                                                                     | [shared.GroupRequest](../../models/shared/grouprequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateGroupResponse](../../models/operations/creategroupresponse.md)>**


## createGroupMembersWithId

Creates a member in a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createGroupMembersWithId({
    members: [
      {
        data: {
          "auxiliary": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Tandem": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "index": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "immediate",
              ],
              timezone: "America/Denver",
              tokens: {
                "Optimization": "once",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "Tricycle",
            ],
          },
        },
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.MemberRequest](../../models/shared/memberrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateGroupMembersWithIdResponse](../../models/operations/creategroupmemberswithidresponse.md)>**


## createGroupWithId

Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateGroupWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ApplicationRole, Group, GroupData, GroupRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupId: string = "mesh";
const groupRequest: GroupRequest = {
  group: {
    data: {
      "Nevada": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  roleIds: [
    "549be592-88e1-4d55-b1eb-46b3f0b558d6",
  ],
};
const xFusionAuthTenantId: string = "Cadillac";

  const res = await sdk.sdk.createGroupWithId(groupId, groupRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the group. If not provided a secure random UUID will be generated.                                                                      |
| `groupRequest`                                                                                                                                     | [shared.GroupRequest](../../models/shared/grouprequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateGroupWithIdResponse](../../models/operations/creategroupwithidresponse.md)>**


## createIPAccessControlList

Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IPAccessControlEntryAction } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createIPAccessControlList({
    ipAccessControlList: {
      data: {
        "pork": {},
      },
      entries: [
        {},
      ],
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.IPAccessControlListRequest](../../models/shared/ipaccesscontrollistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateIPAccessControlListResponse](../../models/operations/createipaccesscontrollistresponse.md)>**


## createIPAccessControlListWithId

Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIPAccessControlListWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  IPAccessControlEntry,
  IPAccessControlEntryAction,
  IPAccessControlList,
  IPAccessControlListData,
  IPAccessControlListRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const accessControlListId: string = "which";
const ipAccessControlListRequest: IPAccessControlListRequest = {
  ipAccessControlList: {
    data: {
      "New": {},
    },
    entries: [
      {},
    ],
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createIPAccessControlListWithId(accessControlListId, ipAccessControlListRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessControlListId`                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | The Id for the IP Access Control List. If not provided a secure random UUID will be generated. |
| `ipAccessControlListRequest`                                                                   | [shared.IPAccessControlListRequest](../../models/shared/ipaccesscontrollistrequest.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateIPAccessControlListWithIdResponse](../../models/operations/createipaccesscontrollistwithidresponse.md)>**


## createIdentityProvider

Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createIdentityProvider({
    identityProvider: "Fisher",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.IdentityProviderRequest](../../models/shared/identityproviderrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateIdentityProviderResponse](../../models/operations/createidentityproviderresponse.md)>**


## createIdentityProviderWithId

Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IdentityProviderRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "Pangender";
const identityProviderRequest: IdentityProviderRequest = {
  identityProvider: "occaecati",
};

  const res = await sdk.sdk.createIdentityProviderWithId(identityProviderId, identityProviderRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `identityProviderId`                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The Id of the identity provider. If not provided a secure random UUID will be generated. |
| `identityProviderRequest`                                                                | [shared.IdentityProviderRequest](../../models/shared/identityproviderrequest.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateIdentityProviderWithIdResponse](../../models/operations/createidentityproviderwithidresponse.md)>**


## createLambda

Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LambdaEngineType, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createLambda({
    lambda: {
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.LambdaRequest](../../models/shared/lambdarequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateLambdaResponse](../../models/operations/createlambdaresponse.md)>**


## createLambdaWithId

Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateLambdaWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Lambda, LambdaEngineType, LambdaRequest, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const lambdaId: string = "Lamborghini";
const lambdaRequest: LambdaRequest = {
  lambda: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createLambdaWithId(lambdaId, lambdaRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `lambdaId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The Id for the lambda. If not provided a secure random UUID will be generated. |
| `lambdaRequest`                                                                | [shared.LambdaRequest](../../models/shared/lambdarequest.md)                   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateLambdaWithIdResponse](../../models/operations/createlambdawithidresponse.md)>**


## createLogout

The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateLogoutRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, LogoutRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const logoutRequest: LogoutRequest = {
  eventInfo: {
    data: {
      "wireless": {},
    },
    location: {},
  },
};
const global: string = "weapon";
const refreshToken: string = "violet";

  const res = await sdk.sdk.createLogout(logoutRequest, global, refreshToken);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `logoutRequest`                                                                                                                | [shared.LogoutRequest](../../models/shared/logoutrequest.md)                                                                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `global`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | When this value is set to true all of the refresh tokens issued to the owner of the provided token will be revoked.            |
| `refreshToken`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The refresh_token as a request parameter instead of coming in via a cookie. If provided this takes precedence over the cookie. |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.CreateLogoutResponse](../../models/operations/createlogoutresponse.md)>**


## createMessageTemplate

Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createMessageTemplate({
    messageTemplate: {
      data: {
        "Wisconsin": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.MessageTemplateRequest](../../models/shared/messagetemplaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateMessageTemplateResponse](../../models/operations/createmessagetemplateresponse.md)>**


## createMessageTemplateWithId

Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessageTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageTemplate, MessageTemplateData, MessageTemplateRequest, MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messageTemplateId: string = "Electric";
const messageTemplateRequest: MessageTemplateRequest = {
  messageTemplate: {
    data: {
      "Berkshire": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createMessageTemplateWithId(messageTemplateId, messageTemplateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `messageTemplateId`                                                              | *string*                                                                         | :heavy_check_mark:                                                               | The Id for the template. If not provided a secure random UUID will be generated. |
| `messageTemplateRequest`                                                         | [shared.MessageTemplateRequest](../../models/shared/messagetemplaterequest.md)   | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateMessageTemplateWithIdResponse](../../models/operations/createmessagetemplatewithidresponse.md)>**


## createMessenger

Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { MessengerType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createMessenger({
    messenger: {
      data: {
        "Human": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.MessengerRequest](../../models/shared/messengerrequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CreateMessengerResponse](../../models/operations/createmessengerresponse.md)>**


## createMessengerWithId

Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateMessengerWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseMessengerConfiguration,
  BaseMessengerConfigurationData,
  MessengerRequest,
  MessengerType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messengerId: string = "nor";
const messengerRequest: MessengerRequest = {
  messenger: {
    data: {
      "Southeast": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.createMessengerWithId(messengerId, messengerRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `messengerId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The Id for the messenger. If not provided a secure random UUID will be generated. |
| `messengerRequest`                                                                | [shared.MessengerRequest](../../models/shared/messengerrequest.md)                | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.CreateMessengerWithIdResponse](../../models/operations/createmessengerwithidresponse.md)>**


## createTenant

Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateTenantRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  ConnectorPolicy,
  ConnectorPolicyData,
  EmailConfiguration,
  EmailHeader,
  EmailSecurityType,
  EmailUnverifiedOptions,
  EventConfiguration,
  EventConfigurationData,
  EventInfo,
  EventInfoData,
  ExpiryUnit,
  ExternalIdentifierConfiguration,
  FailedAuthenticationActionCancelPolicy,
  FailedAuthenticationConfiguration,
  FamilyConfiguration,
  JWTConfiguration,
  Location,
  MaximumPasswordAge,
  MinimumPasswordAge,
  MultiFactorAuthenticatorMethod,
  MultiFactorEmailMethod,
  MultiFactorLoginPolicy,
  MultiFactorSMSMethod,
  ObjectState,
  PasswordBreachDetection,
  PasswordEncryptionConfiguration,
  PasswordValidationRules,
  RateLimitedRequestConfiguration,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RememberPreviousPasswords,
  SecureGeneratorConfiguration,
  SecureGeneratorType,
  Tenant,
  TenantAccessControlConfiguration,
  TenantCaptchaConfiguration,
  TenantData,
  TenantFormConfiguration,
  TenantLambdaConfiguration,
  TenantLoginConfiguration,
  TenantMultiFactorConfiguration,
  TenantOAuth2Configuration,
  TenantRateLimitConfiguration,
  TenantRegistrationConfiguration,
  TenantRequest,
  TenantSCIMServerConfiguration,
  TenantSCIMServerConfigurationSchemas,
  TenantSSOConfiguration,
  TenantUserDeletePolicy,
  TenantUsernameConfiguration,
  TenantWebAuthnConfiguration,
  TenantWebAuthnWorkflowConfiguration,
  TimeBasedDeletePolicy,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameConfiguration,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantRequest: TenantRequest = {
  eventInfo: {
    data: {
      "worthless": {},
    },
    location: {},
  },
  tenant: {
    accessControlConfiguration: {},
    captchaConfiguration: {},
    connectorPolicies: [
      {
        data: {
          "cleanse": {},
        },
        domains: [
          "West",
        ],
      },
    ],
    data: {
      "ea": {},
    },
    emailConfiguration: {
      additionalHeaders: [
        {},
      ],
      unverified: {},
    },
    eventConfiguration: {
      events: {
        "Dynamic": {},
      },
    },
    externalIdentifierConfiguration: {
      changePasswordIdGenerator: {},
      deviceUserCodeIdGenerator: {},
      emailVerificationIdGenerator: {},
      emailVerificationOneTimeCodeGenerator: {},
      passwordlessLoginGenerator: {},
      registrationVerificationIdGenerator: {},
      registrationVerificationOneTimeCodeGenerator: {},
      setupPasswordIdGenerator: {},
      twoFactorOneTimeCodeIdGenerator: {},
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {},
    },
    familyConfiguration: {},
    formConfiguration: {},
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    maximumPasswordAge: {},
    minimumPasswordAge: {},
    multiFactorConfiguration: {
      authenticator: {},
      email: {},
      sms: {},
    },
    oauthConfiguration: {},
    passwordEncryptionConfiguration: {},
    passwordValidationRules: {
      breachDetection: {},
      rememberPreviousPasswords: {},
    },
    rateLimitConfiguration: {
      failedLogin: {},
      forgotPassword: {},
      sendEmailVerification: {},
      sendPasswordless: {},
      sendRegistrationVerification: {},
      sendTwoFactor: {},
    },
    registrationConfiguration: {
      blockedDomains: [
        "Electronics",
      ],
    },
    scimServerConfiguration: {
      schemas: {
        "male": {},
      },
    },
    ssoConfiguration: {},
    userDeletePolicy: {
      unverified: {},
    },
    usernameConfiguration: {
      unique: {},
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  webhookIds: [
    "d5134021-dd4e-425c-8d0d-0c59ea53f817",
  ],
};
const xFusionAuthTenantId: string = "SQL";

  const res = await sdk.sdk.createTenant(tenantRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantRequest`                                                                                                                                    | [shared.TenantRequest](../../models/shared/tenantrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateTenantResponse](../../models/operations/createtenantresponse.md)>**


## createTenantWithId

Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateTenantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  ConnectorPolicy,
  ConnectorPolicyData,
  EmailConfiguration,
  EmailHeader,
  EmailSecurityType,
  EmailUnverifiedOptions,
  EventConfiguration,
  EventConfigurationData,
  EventInfo,
  EventInfoData,
  ExpiryUnit,
  ExternalIdentifierConfiguration,
  FailedAuthenticationActionCancelPolicy,
  FailedAuthenticationConfiguration,
  FamilyConfiguration,
  JWTConfiguration,
  Location,
  MaximumPasswordAge,
  MinimumPasswordAge,
  MultiFactorAuthenticatorMethod,
  MultiFactorEmailMethod,
  MultiFactorLoginPolicy,
  MultiFactorSMSMethod,
  ObjectState,
  PasswordBreachDetection,
  PasswordEncryptionConfiguration,
  PasswordValidationRules,
  RateLimitedRequestConfiguration,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RememberPreviousPasswords,
  SecureGeneratorConfiguration,
  SecureGeneratorType,
  Tenant,
  TenantAccessControlConfiguration,
  TenantCaptchaConfiguration,
  TenantData,
  TenantFormConfiguration,
  TenantLambdaConfiguration,
  TenantLoginConfiguration,
  TenantMultiFactorConfiguration,
  TenantOAuth2Configuration,
  TenantRateLimitConfiguration,
  TenantRegistrationConfiguration,
  TenantRequest,
  TenantSCIMServerConfiguration,
  TenantSCIMServerConfigurationSchemas,
  TenantSSOConfiguration,
  TenantUserDeletePolicy,
  TenantUsernameConfiguration,
  TenantWebAuthnConfiguration,
  TenantWebAuthnWorkflowConfiguration,
  TimeBasedDeletePolicy,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameConfiguration,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "FTP";
const tenantRequest: TenantRequest = {
  eventInfo: {
    data: {
      "Caledonia": {},
    },
    location: {},
  },
  tenant: {
    accessControlConfiguration: {},
    captchaConfiguration: {},
    connectorPolicies: [
      {
        data: {
          "neque": {},
        },
        domains: [
          "Rock",
        ],
      },
    ],
    data: {
      "Soft": {},
    },
    emailConfiguration: {
      additionalHeaders: [
        {},
      ],
      unverified: {},
    },
    eventConfiguration: {
      events: {
        "Central": {},
      },
    },
    externalIdentifierConfiguration: {
      changePasswordIdGenerator: {},
      deviceUserCodeIdGenerator: {},
      emailVerificationIdGenerator: {},
      emailVerificationOneTimeCodeGenerator: {},
      passwordlessLoginGenerator: {},
      registrationVerificationIdGenerator: {},
      registrationVerificationOneTimeCodeGenerator: {},
      setupPasswordIdGenerator: {},
      twoFactorOneTimeCodeIdGenerator: {},
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {},
    },
    familyConfiguration: {},
    formConfiguration: {},
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    maximumPasswordAge: {},
    minimumPasswordAge: {},
    multiFactorConfiguration: {
      authenticator: {},
      email: {},
      sms: {},
    },
    oauthConfiguration: {},
    passwordEncryptionConfiguration: {},
    passwordValidationRules: {
      breachDetection: {},
      rememberPreviousPasswords: {},
    },
    rateLimitConfiguration: {
      failedLogin: {},
      forgotPassword: {},
      sendEmailVerification: {},
      sendPasswordless: {},
      sendRegistrationVerification: {},
      sendTwoFactor: {},
    },
    registrationConfiguration: {
      blockedDomains: [
        "navigating",
      ],
    },
    scimServerConfiguration: {
      schemas: {
        "Planner": {},
      },
    },
    ssoConfiguration: {},
    userDeletePolicy: {
      unverified: {},
    },
    usernameConfiguration: {
      unique: {},
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  webhookIds: [
    "4283aac2-1a32-44fb-9368-3626deee8397",
  ],
};
const xFusionAuthTenantId: string = "synthesizing";

  const res = await sdk.sdk.createTenantWithId(tenantId, tenantRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the tenant. If not provided a secure random UUID will be generated.                                                                     |
| `tenantRequest`                                                                                                                                    | [shared.TenantRequest](../../models/shared/tenantrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateTenantWithIdResponse](../../models/operations/createtenantwithidresponse.md)>**


## createTheme

Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createTheme({
    theme: {
      data: {
        "Nebraska": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      localizedMessages: {},
      templates: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ThemeRequest](../../models/shared/themerequest.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateThemeResponse](../../models/operations/createthemeresponse.md)>**


## createThemeWithId

Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateThemeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, Templates, Theme, ThemeData, ThemeRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const themeId: string = "deposit";
const themeRequest: ThemeRequest = {
  theme: {
    data: {
      "SSL": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {},
    templates: {},
  },
};

  const res = await sdk.sdk.createThemeWithId(themeId, themeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                     | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `themeId`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The Id for the theme. If not provided a secure random UUID will be generated. |
| `themeRequest`                                                                | [shared.ThemeRequest](../../models/shared/themerequest.md)                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `config`                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                  | :heavy_minus_sign:                                                            | Available config options for making requests.                                 |


### Response

**Promise<[operations.CreateThemeWithIdResponse](../../models/operations/createthemewithidresponse.md)>**


## createToken

Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createToken();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTokenResponse](../../models/operations/createtokenresponse.md)>**


## createUser

Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserRequest,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userRequest: UserRequest = {
  eventInfo: {
    data: {
      "navigating": {},
    },
    location: {},
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "Sausages": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "Borders": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Arizona": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "female": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "Refined",
              ],
              timezone: "America/Denver",
              tokens: {
                "silver": "Toys",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "monthly",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "redundant": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "white",
        ],
        timezone: "America/Denver",
        tokens: {
          "Expanded": "Bespoke",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "Latin",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "Computers";

  const res = await sdk.sdk.createUser(userRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userRequest`                                                                                                                                      | [shared.UserRequest](../../models/shared/userrequest.md)                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)>**


## createUserAction

Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  LocalizedStrings,
  TransactionType,
  UserAction,
  UserActionOption,
  UserActionRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionRequest: UserActionRequest = {
  userAction: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {},
    options: [
      {
        localizedNames: {},
      },
    ],
  },
};
const xFusionAuthTenantId: string = "devalue";

  const res = await sdk.sdk.createUserAction(userActionRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionRequest`                                                                                                                                | [shared.UserActionRequest](../../models/shared/useractionrequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateUserActionResponse](../../models/operations/createuseractionresponse.md)>**


## createUserActionReason

Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createUserActionReason({
    userActionReason: {
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      localizedTexts: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.UserActionReasonRequest](../../models/shared/useractionreasonrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateUserActionReasonResponse](../../models/operations/createuseractionreasonresponse.md)>**


## createUserActionReasonWithId

Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionReasonWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, UserActionReason, UserActionReasonRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionReasonId: string = "West";
const userActionReasonRequest: UserActionReasonRequest = {
  userActionReason: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {},
  },
};

  const res = await sdk.sdk.createUserActionReasonWithId(userActionReasonId, userActionReasonRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `userActionReasonId`                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The Id for the user action reason. If not provided a secure random UUID will be generated. |
| `userActionReasonRequest`                                                                  | [shared.UserActionReasonRequest](../../models/shared/useractionreasonrequest.md)           | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateUserActionReasonWithIdResponse](../../models/operations/createuseractionreasonwithidresponse.md)>**


## createUserActionWithId

Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  LocalizedStrings,
  TransactionType,
  UserAction,
  UserActionOption,
  UserActionRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionId: string = "limp";
const userActionRequest: UserActionRequest = {
  userAction: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {},
    options: [
      {
        localizedNames: {},
      },
    ],
  },
};
const xFusionAuthTenantId: string = "whenever";

  const res = await sdk.sdk.createUserActionWithId(userActionId, userActionRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the user action. If not provided a secure random UUID will be generated.                                                                |
| `userActionRequest`                                                                                                                                | [shared.UserActionRequest](../../models/shared/useractionrequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateUserActionWithIdResponse](../../models/operations/createuseractionwithidresponse.md)>**


## createUserConsent

Creates a single User consent.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ConsentStatus } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createUserConsent({
    userConsent: {
      consent: {
        countryMinimumAgeForSelfConsent: {},
        data: {
          "Frozen": {},
        },
        emailPlus: {},
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        values: [
          "interfaces",
        ],
      },
      data: {
        "Sleek": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      values: [
        "Southeast",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.UserConsentRequest](../../models/shared/userconsentrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateUserConsentResponse](../../models/operations/createuserconsentresponse.md)>**


## createUserConsentWithId

Creates a single User consent.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Consent,
  ConsentData,
  ConsentStatus,
  EmailPlus,
  LocalizedIntegers,
  UserConsent,
  UserConsentData,
  UserConsentRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userConsentId: string = "Darmstadtium";
const userConsentRequest: UserConsentRequest = {
  userConsent: {
    consent: {
      countryMinimumAgeForSelfConsent: {},
      data: {
        "Automotive": {},
      },
      emailPlus: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      values: [
        "flippant",
      ],
    },
    data: {
      "sneaky": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Cadillac",
    ],
  },
};

  const res = await sdk.sdk.createUserConsentWithId(userConsentId, userConsentRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `userConsentId`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | The Id for the User consent. If not provided a secure random UUID will be generated. |
| `userConsentRequest`                                                                 | [shared.UserConsentRequest](../../models/shared/userconsentrequest.md)               | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateUserConsentWithIdResponse](../../models/operations/createuserconsentwithidresponse.md)>**


## createUserLinkWithId

Link an external user from a 3rd party identity provider to a FusionAuth user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createUserLinkWithId({
    eventInfo: {
      data: {
        "male": {},
      },
      location: {},
    },
    identityProviderLink: {
      data: {
        "Moscovium": {},
      },
      insertInstant: 1659380719000,
      lastLoginInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.IdentityProviderLinkRequest](../../models/shared/identityproviderlinkrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateUserLinkWithIdResponse](../../models/operations/createuserlinkwithidresponse.md)>**


## createUserVerifyEmail

Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createUserVerifyEmail({
    eventInfo: {
      data: {
        "Cyclocross": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.VerifyEmailRequest](../../models/shared/verifyemailrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateUserVerifyEmailResponse](../../models/operations/createuserverifyemailresponse.md)>**


## createUserWithId

Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserRequest,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Larkin";
const userRequest: UserRequest = {
  eventInfo: {
    data: {
      "ducimus": {},
    },
    location: {},
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "iterate": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "silver": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "BMW": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "mobile": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "Touring",
              ],
              timezone: "America/Denver",
              tokens: {
                "efficient": "Colombian",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "properly",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "Organized": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Nickel",
        ],
        timezone: "America/Denver",
        tokens: {
          "Peso": "archive",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "killer",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "withdrawal";

  const res = await sdk.sdk.createUserWithId(userId, userRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id for the user. If not provided a secure random UUID will be generated.                                                                       |
| `userRequest`                                                                                                                                      | [shared.UserRequest](../../models/shared/userrequest.md)                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.CreateUserWithIdResponse](../../models/operations/createuserwithidresponse.md)>**


## createWebhook

Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.createWebhook({
    webhook: {
      data: {
        "reboot": {},
      },
      eventsEnabled: {
        "like": false,
      },
      headers: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      tenantIds: [
        "f63e3b7d-2240-408a-84c5-9d30daac81ad",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.WebhookRequest](../../models/shared/webhookrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## createWebhookWithId

Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { CreateWebhookWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { HTTPHeaders, Webhook, WebhookData, WebhookRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const webhookId: string = "Southeast";
const webhookRequest: WebhookRequest = {
  webhook: {
    data: {
      "sensor": {},
    },
    eventsEnabled: {
      "up": false,
    },
    headers: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    tenantIds: [
      "c0edd760-cc2f-4bf3-9a62-11c21e4dbe98",
    ],
  },
};

  const res = await sdk.sdk.createWebhookWithId(webhookId, webhookRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                       | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `webhookId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The Id for the webhook. If not provided a secure random UUID will be generated. |
| `webhookRequest`                                                                | [shared.WebhookRequest](../../models/shared/webhookrequest.md)                  | :heavy_minus_sign:                                                              | N/A                                                                             |
| `config`                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                    | :heavy_minus_sign:                                                              | Available config options for making requests.                                   |


### Response

**Promise<[operations.CreateWebhookWithIdResponse](../../models/operations/createwebhookwithidresponse.md)>**


## deleteAPIKeyWithId

Deletes the API key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteAPIKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "matrix";

  const res = await sdk.sdk.deleteAPIKeyWithId(keyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the authentication API key to delete.              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteAPIKeyWithIdResponse](../../models/operations/deleteapikeywithidresponse.md)>**


## deleteApplicationRoleWithId

Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteApplicationRoleWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "SDD";
const roleId: string = "Regional";
const xFusionAuthTenantId: string = "Licensed";

  const res = await sdk.sdk.deleteApplicationRoleWithId(applicationId, roleId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to deactivate.                                                                                                           |
| `roleId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the role to delete.                                                                                                                      |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteApplicationRoleWithIdResponse](../../models/operations/deleteapplicationrolewithidresponse.md)>**


## deleteApplicationWithId

Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteApplicationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Southeast";
const xFusionAuthTenantId: string = "Account";
const hardDelete: string = "say";

  const res = await sdk.sdk.deleteApplicationWithId(applicationId, xFusionAuthTenantId, hardDelete);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to delete.                                                                                                               |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `hardDelete`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteApplicationWithIdResponse](../../models/operations/deleteapplicationwithidresponse.md)>**


## deleteConnectorWithId

Deletes the connector for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteConnectorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const connectorId: string = "Computers";

  const res = await sdk.sdk.deleteConnectorWithId(connectorId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connectorId`                                                | *string*                                                     | :heavy_check_mark:                                           | The Id of the connector to delete.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteConnectorWithIdResponse](../../models/operations/deleteconnectorwithidresponse.md)>**


## deleteConsentWithId

Deletes the consent for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentId: string = "Convertible";
const xFusionAuthTenantId: string = "Hybrid";

  const res = await sdk.sdk.deleteConsentWithId(consentId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the consent to delete.                                                                                                                   |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteConsentWithIdResponse](../../models/operations/deleteconsentwithidresponse.md)>**


## deleteEmailTemplateWithId

Deletes the email template for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEmailTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "female";
const xFusionAuthTenantId: string = "bandwidth";

  const res = await sdk.sdk.deleteEmailTemplateWithId(emailTemplateId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the email template to delete.                                                                                                            |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteEmailTemplateWithIdResponse](../../models/operations/deleteemailtemplatewithidresponse.md)>**


## deleteEntityGrantWithId

Deletes an Entity Grant for the given User or Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityGrantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "Diesel";
const xFusionAuthTenantId: string = "Argon";
const recipientEntityId: string = "Moscovium";
const userId: string = "Metal";

  const res = await sdk.sdk.deleteEntityGrantWithId(entityId, xFusionAuthTenantId, recipientEntityId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity that the Entity Grant is being deleted for.                                                                                   |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `recipientEntityId`                                                                                                                                | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The Id of the Entity that the Entity Grant is for.                                                                                                 |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The Id of the User that the Entity Grant is for.                                                                                                   |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteEntityGrantWithIdResponse](../../models/operations/deleteentitygrantwithidresponse.md)>**


## deleteEntityTypePermissionWithId

Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityTypePermissionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "hub";
const permissionId: string = "tesla";

  const res = await sdk.sdk.deleteEntityTypePermissionWithId(entityTypeId, permissionId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `entityTypeId`                                               | *string*                                                     | :heavy_check_mark:                                           | The Id of the entityType the the permission belongs to.      |
| `permissionId`                                               | *string*                                                     | :heavy_check_mark:                                           | The Id of the permission to delete.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteEntityTypePermissionWithIdResponse](../../models/operations/deleteentitytypepermissionwithidresponse.md)>**


## deleteEntityTypeWithId

Deletes the Entity Type for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "male";

  const res = await sdk.sdk.deleteEntityTypeWithId(entityTypeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `entityTypeId`                                               | *string*                                                     | :heavy_check_mark:                                           | The Id of the Entity Type to delete.                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteEntityTypeWithIdResponse](../../models/operations/deleteentitytypewithidresponse.md)>**


## deleteEntityWithId

Deletes the Entity for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteEntityWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "SAS";
const xFusionAuthTenantId: string = "scalable";

  const res = await sdk.sdk.deleteEntityWithId(entityId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity to delete.                                                                                                                    |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteEntityWithIdResponse](../../models/operations/deleteentitywithidresponse.md)>**


## deleteFormFieldWithId

Deletes the form field for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteFormFieldWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const fieldId: string = "regard";

  const res = await sdk.sdk.deleteFormFieldWithId(fieldId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fieldId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the form field to delete.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteFormFieldWithIdResponse](../../models/operations/deleteformfieldwithidresponse.md)>**


## deleteFormWithId

Deletes the form for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteFormWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const formId: string = "Granite";

  const res = await sdk.sdk.deleteFormWithId(formId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The Id of the form to delete.                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteFormWithIdResponse](../../models/operations/deleteformwithidresponse.md)>**


## deleteGroupMembersWithId

Removes users as members of a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.deleteGroupMembersWithId({
    memberIds: [
      "14614b31-364c-442e-9069-f96cd58cd3f0",
    ],
    members: [
      "9abc319d-6d69-4ae6-8db1-af464a8049a4",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.MemberDeleteRequest](../../models/shared/memberdeleterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.DeleteGroupMembersWithIdResponse](../../models/operations/deletegroupmemberswithidresponse.md)>**


## deleteGroupWithId

Deletes the group for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteGroupWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupId: string = "Kazakhstan";
const xFusionAuthTenantId: string = "Hybrid";

  const res = await sdk.sdk.deleteGroupWithId(groupId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the group to delete.                                                                                                                     |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteGroupWithIdResponse](../../models/operations/deletegroupwithidresponse.md)>**


## deleteIPAccessControlListWithId

Deletes the IP Access Control List for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteIPAccessControlListWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const accessControlListId: string = "Dodge";

  const res = await sdk.sdk.deleteIPAccessControlListWithId(accessControlListId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessControlListId`                                        | *string*                                                     | :heavy_check_mark:                                           | The Id of the IP Access Control List to delete.              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteIPAccessControlListWithIdResponse](../../models/operations/deleteipaccesscontrollistwithidresponse.md)>**


## deleteIdentityProviderWithId

Deletes the identity provider for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "yellow";

  const res = await sdk.sdk.deleteIdentityProviderWithId(identityProviderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `identityProviderId`                                         | *string*                                                     | :heavy_check_mark:                                           | The Id of the identity provider to delete.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteIdentityProviderWithIdResponse](../../models/operations/deleteidentityproviderwithidresponse.md)>**


## deleteJwt

Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteJwtRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, RefreshTokenRevokeRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const refreshTokenRevokeRequest: RefreshTokenRevokeRequest = {
  eventInfo: {
    data: {
      "Jewelery": {},
    },
    location: {},
  },
};
const applicationId: string = "teal";
const token: string = "Health";
const userId: string = "yippee";

  const res = await sdk.sdk.deleteJwt(refreshTokenRevokeRequest, applicationId, token, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `refreshTokenRevokeRequest`                                                          | [shared.RefreshTokenRevokeRequest](../../models/shared/refreshtokenrevokerequest.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `applicationId`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique Id of the application that you want to delete refresh tokens for.         |
| `token`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The refresh token to delete.                                                         |
| `userId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique Id of the user that you want to delete all refresh tokens for.            |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteJwtResponse](../../models/operations/deletejwtresponse.md)>**


## deleteKeyWithId

Deletes the key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Chips";

  const res = await sdk.sdk.deleteKeyWithId(keyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the key to delete.                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteKeyWithIdResponse](../../models/operations/deletekeywithidresponse.md)>**


## deleteLambdaWithId

Deletes the lambda for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteLambdaWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const lambdaId: string = "Engineer";

  const res = await sdk.sdk.deleteLambdaWithId(lambdaId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lambdaId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the lambda to delete.                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteLambdaWithIdResponse](../../models/operations/deletelambdawithidresponse.md)>**


## deleteMessageTemplateWithId

Deletes the message template for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteMessageTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messageTemplateId: string = "sexy";

  const res = await sdk.sdk.deleteMessageTemplateWithId(messageTemplateId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `messageTemplateId`                                          | *string*                                                     | :heavy_check_mark:                                           | The Id of the message template to delete.                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteMessageTemplateWithIdResponse](../../models/operations/deletemessagetemplatewithidresponse.md)>**


## deleteMessengerWithId

Deletes the messenger for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteMessengerWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messengerId: string = "terrorism";

  const res = await sdk.sdk.deleteMessengerWithId(messengerId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `messengerId`                                                | *string*                                                     | :heavy_check_mark:                                           | The Id of the messenger to delete.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteMessengerWithIdResponse](../../models/operations/deletemessengerwithidresponse.md)>**


## deleteTenantWithId

Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteTenantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, TenantDeleteRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "Rubidium";
const tenantDeleteRequest: TenantDeleteRequest = {
  eventInfo: {
    data: {
      "copy": {},
    },
    location: {},
  },
};
const xFusionAuthTenantId: string = "Lead";
const async: string = "Small";

  const res = await sdk.sdk.deleteTenantWithId(tenantId, tenantDeleteRequest, xFusionAuthTenantId, async);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the tenant to delete.                                                                                                                    |
| `tenantDeleteRequest`                                                                                                                              | [shared.TenantDeleteRequest](../../models/shared/tenantdeleterequest.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `async`                                                                                                                                            | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteTenantWithIdResponse](../../models/operations/deletetenantwithidresponse.md)>**


## deleteThemeWithId

Deletes the theme for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteThemeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const themeId: string = "Northwest";

  const res = await sdk.sdk.deleteThemeWithId(themeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `themeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the theme to delete.                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteThemeWithIdResponse](../../models/operations/deletethemewithidresponse.md)>**


## deleteUserActionReasonWithId

Deletes the user action reason for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserActionReasonWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionReasonId: string = "West";

  const res = await sdk.sdk.deleteUserActionReasonWithId(userActionReasonId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userActionReasonId`                                         | *string*                                                     | :heavy_check_mark:                                           | The Id of the user action reason to delete.                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteUserActionReasonWithIdResponse](../../models/operations/deleteuseractionreasonwithidresponse.md)>**


## deleteUserActionWithId

Deactivates the user action with the given Id. OR Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionId: string = "Troy";
const xFusionAuthTenantId: string = "redundant";
const hardDelete: string = "Developer";

  const res = await sdk.sdk.deleteUserActionWithId(userActionId, xFusionAuthTenantId, hardDelete);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user action to deactivate.                                                                                                           |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `hardDelete`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteUserActionWithIdResponse](../../models/operations/deleteuseractionwithidresponse.md)>**


## deleteUserBulk

Deactivates the users with the given ids. OR Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserBulkRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, UserDeleteRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userDeleteRequest: UserDeleteRequest = {
  eventInfo: {
    data: {
      "Tools": {},
    },
    location: {},
  },
  userIds: [
    "45e88bfd-1984-48e9-b9af-81f440b3e32c",
  ],
};
const dryRun: string = "Rubber";
const hardDelete: string = "Road";
const userIds: string = "Paradigm";

  const res = await sdk.sdk.deleteUserBulk(userDeleteRequest, dryRun, hardDelete, userIds);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `userDeleteRequest`                                                  | [shared.UserDeleteRequest](../../models/shared/userdeleterequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `dryRun`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hardDelete`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `userIds`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | The ids of the users to deactivate.                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.DeleteUserBulkResponse](../../models/operations/deleteuserbulkresponse.md)>**


## deleteUserLinkWithId

Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserLinkWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "deposit";
const identityProviderUserId: string = "eyeballs";
const userId: string = "typify";

  const res = await sdk.sdk.deleteUserLinkWithId(identityProviderId, identityProviderUserId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `identityProviderId`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the identity provider.                                 |
| `identityProviderUserId`                                                | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the user in the 3rd party identity provider to unlink. |
| `userId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The unique Id of the FusionAuth user to unlink.                         |
| `config`                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)            | :heavy_minus_sign:                                                      | Available config options for making requests.                           |


### Response

**Promise<[operations.DeleteUserLinkWithIdResponse](../../models/operations/deleteuserlinkwithidresponse.md)>**


## deleteUserRegistrationWithId

Deletes the user registration for the given user and application. OR Deletes the user registration for the given user and application along with the given JSON body that contains the event information.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserRegistrationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, RegistrationDeleteRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "pile";
const userId: string = "Southeast";
const registrationDeleteRequest: RegistrationDeleteRequest = {
  eventInfo: {
    data: {
      "Toys": {},
    },
    location: {},
  },
};
const xFusionAuthTenantId: string = "aha";

  const res = await sdk.sdk.deleteUserRegistrationWithId(applicationId, userId, registrationDeleteRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to remove the registration for.                                                                                          |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user whose registration is being deleted.                                                                                            |
| `registrationDeleteRequest`                                                                                                                        | [shared.RegistrationDeleteRequest](../../models/shared/registrationdeleterequest.md)                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteUserRegistrationWithIdResponse](../../models/operations/deleteuserregistrationwithidresponse.md)>**


## deleteUserTwoFactorWithId

Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserTwoFactorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, TwoFactorDisableRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "fatally";
const twoFactorDisableRequest: TwoFactorDisableRequest = {
  eventInfo: {
    data: {
      "dreamily": {},
    },
    location: {},
  },
};
const code: string = "Southeast";
const methodId: string = "Engineer";

  const res = await sdk.sdk.deleteUserTwoFactorWithId(userId, twoFactorDisableRequest, code, methodId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `userId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The Id of the User for which you're disabling two-factor authentication.         |
| `twoFactorDisableRequest`                                                        | [shared.TwoFactorDisableRequest](../../models/shared/twofactordisablerequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `code`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The two-factor code used verify the the caller knows the two-factor secret.      |
| `methodId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | The two-factor method identifier you wish to disable                             |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteUserTwoFactorWithIdResponse](../../models/operations/deleteusertwofactorwithidresponse.md)>**


## deleteUserWithId

Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, UserDeleteSingleRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "ohm";
const userDeleteSingleRequest: UserDeleteSingleRequest = {
  eventInfo: {
    data: {
      "Soul": {},
    },
    location: {},
  },
};
const xFusionAuthTenantId: string = "SUV";
const hardDelete: string = "Industrial";

  const res = await sdk.sdk.deleteUserWithId(userId, userDeleteSingleRequest, xFusionAuthTenantId, hardDelete);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user to delete (required).                                                                                                           |
| `userDeleteSingleRequest`                                                                                                                          | [shared.UserDeleteSingleRequest](../../models/shared/userdeletesinglerequest.md)                                                                   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `hardDelete`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteUserWithIdResponse](../../models/operations/deleteuserwithidresponse.md)>**


## deleteWebAuthnCredentialWithId

Deletes the WebAuthn credential for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteWebAuthnCredentialWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const id: string = "Executive";

  const res = await sdk.sdk.deleteWebAuthnCredentialWithId(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The Id of the WebAuthn credential to delete.                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWebAuthnCredentialWithIdResponse](../../models/operations/deletewebauthncredentialwithidresponse.md)>**


## deleteWebhookWithId

Deletes the webhook for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeleteWebhookWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const webhookId: string = "Coupe";

  const res = await sdk.sdk.deleteWebhookWithId(webhookId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The Id of the webhook to delete.                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWebhookWithIdResponse](../../models/operations/deletewebhookwithidresponse.md)>**


## enableTwoFactorWithId

Enable two-factor authentication for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { EnableTwoFactorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EventInfo, EventInfoData, Location, TwoFactorRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Bike";
const twoFactorRequest: TwoFactorRequest = {
  eventInfo: {
    data: {
      "synthesizing": {},
    },
    location: {},
  },
};

  const res = await sdk.sdk.enableTwoFactorWithId(userId, twoFactorRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `userId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The Id of the user to enable two-factor authentication.            |
| `twoFactorRequest`                                                 | [shared.TwoFactorRequest](../../models/shared/twofactorrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.EnableTwoFactorWithIdResponse](../../models/operations/enabletwofactorwithidresponse.md)>**


## exchangeRefreshTokenForJWTWithId

Exchange a refresh token for a new JWT.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.exchangeRefreshTokenForJWTWithId({
    eventInfo: {
      data: {
        "azure": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.RefreshRequest](../../models/shared/refreshrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.ExchangeRefreshTokenForJWTWithIdResponse](../../models/operations/exchangerefreshtokenforjwtwithidresponse.md)>**


## forgotPasswordWithId

Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.forgotPasswordWithId({
    eventInfo: {
      data: {
        "whoever": {},
      },
      location: {},
    },
    state: {
      "West": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.ForgotPasswordRequest](../../models/shared/forgotpasswordrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ForgotPasswordWithIdResponse](../../models/operations/forgotpasswordwithidresponse.md)>**


## generateKey

Generate a new RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.generateKey({
    key: {
      certificateInformation: {
        validFrom: 1659380719000,
        validTo: 1659380719000,
      },
      expirationInstant: 1659380719000,
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.KeyRequest](../../models/shared/keyrequest.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GenerateKeyResponse](../../models/operations/generatekeyresponse.md)>**


## generateKeyWithId

Generate a new RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { CertificateInformation, Key, KeyAlgorithm, KeyRequest, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Universal";
const keyRequest: KeyRequest = {
  key: {
    certificateInformation: {
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.generateKeyWithId(keyId, keyRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `keyId`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | The Id for the key. If not provided a secure random UUID will be generated. |
| `keyRequest`                                                                | [shared.KeyRequest](../../models/shared/keyrequest.md)                      | :heavy_minus_sign:                                                          | N/A                                                                         |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[operations.GenerateKeyWithIdResponse](../../models/operations/generatekeywithidresponse.md)>**


## generateTwoFactorRecoveryCodesWithId

Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { GenerateTwoFactorRecoveryCodesWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "guillotine";

  const res = await sdk.sdk.generateTwoFactorRecoveryCodesWithId(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                     | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `userId`                                                      | *string*                                                      | :heavy_check_mark:                                            | The Id of the user to generate new Two Factor recovery codes. |
| `config`                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)  | :heavy_minus_sign:                                            | Available config options for making requests.                 |


### Response

**Promise<[operations.GenerateTwoFactorRecoveryCodesWithIdResponse](../../models/operations/generatetwofactorrecoverycodeswithidresponse.md)>**


## generateTwoFactorSecretUsingJWTWithId

Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.generateTwoFactorSecretUsingJWTWithId();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GenerateTwoFactorSecretUsingJWTWithIdResponse](../../models/operations/generatetwofactorsecretusingjwtwithidresponse.md)>**


## identityProviderLoginWithId

Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IdentityProviderLoginWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceInfo, DeviceType, IdentityProviderLoginRequest, MetaData, MetaDataData } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderLoginRequest: IdentityProviderLoginRequest = {
  data: {
    "inspect": "Southwest",
  },
  metaData: {
    data: {
      "in": {},
    },
    device: {
      lastAccessedInstant: 1659380719000,
    },
    scopes: [
      "Music",
    ],
  },
};
const xFusionAuthTenantId: string = "Mandatory";

  const res = await sdk.sdk.identityProviderLoginWithId(identityProviderLoginRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityProviderLoginRequest`                                                                                                                     | [shared.IdentityProviderLoginRequest](../../models/shared/identityproviderloginrequest.md)                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.IdentityProviderLoginWithIdResponse](../../models/operations/identityproviderloginwithidresponse.md)>**


## importKey

Import an existing RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.importKey({
    key: {
      certificateInformation: {
        validFrom: 1659380719000,
        validTo: 1659380719000,
      },
      expirationInstant: 1659380719000,
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.KeyRequest](../../models/shared/keyrequest.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ImportKeyResponse](../../models/operations/importkeyresponse.md)>**


## importKeyWithId

Import an existing RSA or EC key pair or an HMAC secret.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ImportKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { CertificateInformation, Key, KeyAlgorithm, KeyRequest, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Designer";
const keyRequest: KeyRequest = {
  key: {
    certificateInformation: {
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.importKeyWithId(keyId, keyRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `keyId`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | The Id for the key. If not provided a secure random UUID will be generated. |
| `keyRequest`                                                                | [shared.KeyRequest](../../models/shared/keyrequest.md)                      | :heavy_minus_sign:                                                          | N/A                                                                         |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[operations.ImportKeyWithIdResponse](../../models/operations/importkeywithidresponse.md)>**


## importRefreshTokensWithId

Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.importRefreshTokensWithId({
    refreshTokens: [
      {
        data: {
          "Account": {},
        },
        insertInstant: 1659380719000,
        metaData: {
          data: {
            "Bespoke": {},
          },
          device: {
            lastAccessedInstant: 1659380719000,
          },
          scopes: [
            "recollect",
          ],
        },
        startInstant: 1659380719000,
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.RefreshTokenImportRequest](../../models/shared/refreshtokenimportrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ImportRefreshTokensWithIdResponse](../../models/operations/importrefreshtokenswithidresponse.md)>**


## importUsersWithId

Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.importUsersWithId({
    eventInfo: {
      data: {
        "Bespoke": {},
      },
      location: {},
    },
    users: [
      {
        birthDate: "2007-12-03",
        breachedPasswordLastCheckedInstant: 1659380719000,
        data: {
          "Representative": {},
        },
        expiry: 1659380719000,
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        memberships: [
          {
            data: {
              "Vena": {},
            },
            insertInstant: 1659380719000,
            user: {
              birthDate: "2007-12-03",
              breachedPasswordLastCheckedInstant: 1659380719000,
              data: {
                "indexing": {},
              },
              expiry: 1659380719000,
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              memberships: [
                {},
              ],
              passwordLastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              registrations: [
                {
                  data: {
                    "XML": {},
                  },
                  insertInstant: 1659380719000,
                  lastLoginInstant: 1659380719000,
                  lastUpdateInstant: 1659380719000,
                  preferredLanguages: [
                    "en_US",
                  ],
                  roles: [
                    "green",
                  ],
                  timezone: "America/Denver",
                  tokens: {
                    "Sausages": "lest",
                  },
                },
              ],
              timezone: "America/Denver",
              twoFactor: {
                methods: [
                  {
                    authenticator: {},
                  },
                ],
                recoveryCodes: [
                  "male",
                ],
              },
            },
          },
        ],
        passwordLastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        registrations: [
          {
            data: {
              "masquerade": {},
            },
            insertInstant: 1659380719000,
            lastLoginInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
            preferredLanguages: [
              "en_US",
            ],
            roles: [
              "parsing",
            ],
            timezone: "America/Denver",
            tokens: {
              "eaque": "Southeast",
            },
          },
        ],
        timezone: "America/Denver",
        twoFactor: {
          methods: [
            {
              authenticator: {},
            },
          ],
          recoveryCodes: [
            "complexity",
          ],
        },
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ImportRequest](../../models/shared/importrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ImportUsersWithIdResponse](../../models/operations/importuserswithidresponse.md)>**


## importWebAuthnCredentialWithId

Import a WebAuthn credential

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { AttestationType, CoseAlgorithmIdentifier } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.importWebAuthnCredentialWithId({
    credentials: [
      {
        data: {
          "ew": {},
        },
        insertInstant: 1659380719000,
        lastUseInstant: 1659380719000,
        transports: [
          "Directives",
        ],
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.WebAuthnCredentialImportRequest](../../models/shared/webauthncredentialimportrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ImportWebAuthnCredentialWithIdResponse](../../models/operations/importwebauthncredentialwithidresponse.md)>**


## introspectAccessTokenWithId

Inspect an access token issued by FusionAuth.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.introspectAccessTokenWithId();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.IntrospectAccessTokenWithIdResponse](../../models/operations/introspectaccesstokenwithidresponse.md)>**


## issueJWTWithId

Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IssueJWTWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Bicycle";
const refreshToken: string = "Bicycle";

  const res = await sdk.sdk.issueJWTWithId(applicationId, refreshToken);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | The Application Id for which you are requesting a new access token be issued.                                                                                                                                                                                          |
| `refreshToken`                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                     | An existing refresh token used to request a refresh token in addition to a JWT in the response. <p>The target application represented by the applicationId request parameter must have refresh tokens enabled in order to receive a refresh token in the response.</p> |
| `config`                                                                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                                                                          |


### Response

**Promise<[operations.IssueJWTWithIdResponse](../../models/operations/issuejwtwithidresponse.md)>**


## loginPingWithId

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginPingWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "connecting";
const userId: string = "under";
const xFusionAuthTenantId: string = "Jacobi";
const callerIPAddress: string = "indigo";

  const res = await sdk.sdk.loginPingWithId(applicationId, userId, xFusionAuthTenantId, callerIPAddress);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                     | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                               | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The Id of the application that they logged into.                                                                                                              |
| `userId`                                                                                                                                                      | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The Id of the user that was logged in.                                                                                                                        |
| `xFusionAuthTenantId`                                                                                                                                         | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.            |
| `callerIPAddress`                                                                                                                                             | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | The IP address of the end-user that is logging in. If a null value is provided the IP address will be that of the client or last proxy that sent the request. |
| `config`                                                                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                  | :heavy_minus_sign:                                                                                                                                            | Available config options for making requests.                                                                                                                 |


### Response

**Promise<[operations.LoginPingWithIdResponse](../../models/operations/loginpingwithidresponse.md)>**


## loginPingWithRequestWithId

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginPingWithRequestWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceInfo, DeviceType, LoginPingRequest, MetaData, MetaDataData } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const loginPingRequest: LoginPingRequest = {
  metaData: {
    data: {
      "female": {},
    },
    device: {
      lastAccessedInstant: 1659380719000,
    },
    scopes: [
      "Papua",
    ],
  },
};
const xFusionAuthTenantId: string = "Dakota";

  const res = await sdk.sdk.loginPingWithRequestWithId(loginPingRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loginPingRequest`                                                                                                                                 | [shared.LoginPingRequest](../../models/shared/loginpingrequest.md)                                                                                 | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.LoginPingWithRequestWithIdResponse](../../models/operations/loginpingwithrequestwithidresponse.md)>**


## loginWithId

Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LoginWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { DeviceInfo, DeviceType, LoginRequest, MetaData, MetaDataData } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const loginRequest: LoginRequest = {
  metaData: {
    data: {
      "Southwest": {},
    },
    device: {
      lastAccessedInstant: 1659380719000,
    },
    scopes: [
      "monthly",
    ],
  },
};
const xFusionAuthTenantId: string = "Buckinghamshire";

  const res = await sdk.sdk.loginWithId(loginRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loginRequest`                                                                                                                                     | [shared.LoginRequest](../../models/shared/loginrequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.LoginWithIdResponse](../../models/operations/loginwithidresponse.md)>**


## lookupIdentityProviderWithId

Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LookupIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const domain: string = "Magnesium";

  const res = await sdk.sdk.lookupIdentityProviderWithId(domain);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `domain`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The domain or email address to lookup.                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LookupIdentityProviderWithIdResponse](../../models/operations/lookupidentityproviderwithidresponse.md)>**


## modifyActionWithId

Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ModifyActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ActionData, ActionRequest, EventInfo, EventInfoData, Location } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const actionId: string = "Chlorine";
const actionRequest: ActionRequest = {
  action: {
    applicationIds: [
      "b3f85470-9402-4b65-9df2-8873396166b8",
    ],
    expiry: 1659380719000,
  },
  eventInfo: {
    data: {
      "auxiliary": {},
    },
    location: {},
  },
};

  const res = await sdk.sdk.modifyActionWithId(actionId, actionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `actionId`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | The Id of the action to modify. This is technically the user action log id. |
| `actionRequest`                                                             | [shared.ActionRequest](../../models/shared/actionrequest.md)                | :heavy_minus_sign:                                                          | N/A                                                                         |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[operations.ModifyActionWithIdResponse](../../models/operations/modifyactionwithidresponse.md)>**


## passwordlessLoginWithId

Complete a login request using a passwordless code

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.passwordlessLoginWithId({
    metaData: {
      data: {
        "Cove": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "harness",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.PasswordlessLoginRequest](../../models/shared/passwordlessloginrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PasswordlessLoginWithIdResponse](../../models/operations/passwordlessloginwithidresponse.md)>**


## patchApplicationRoleWithId

Updates, via PATCH, the application role with the given id for the application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchApplicationRoleWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Electric";
const roleId: string = "Liberia";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "8cc72665-0377-4c9c-aa35-0fb6efa0dd77",
      ],
      usernameModeration: {},
    },
    data: {
      "Lakes": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "Steel",
      ],
      authorizedRedirectURLs: [
        "Cruiser",
      ],
      enabledGrants: [
        "Electric",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "only",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "solution": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "system";

  const res = await sdk.sdk.patchApplicationRoleWithId(applicationId, roleId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application that the role belongs to.                                                                                                |
| `roleId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the role to update.                                                                                                                      |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchApplicationRoleWithIdResponse](../../models/operations/patchapplicationrolewithidresponse.md)>**


## patchApplicationWithId

Updates, via PATCH, the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchApplicationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Liaison";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "d75c79f3-675c-4956-bf63-bc6fa4bd3f0a",
      ],
      usernameModeration: {},
    },
    data: {
      "fuchsia": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "ha",
      ],
      authorizedRedirectURLs: [
        "invoice",
      ],
      enabledGrants: [
        "UTF8",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "online",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "Mountain": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Bike";

  const res = await sdk.sdk.patchApplicationWithId(applicationId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to update.                                                                                                               |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchApplicationWithIdResponse](../../models/operations/patchapplicationwithidresponse.md)>**


## patchConnectorWithId

Updates, via PATCH, the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchConnectorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseConnectorConfiguration,
  BaseConnectorConfigurationData,
  ConnectorRequest,
  ConnectorType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const connectorId: string = "Dodge";
const connectorRequest: ConnectorRequest = {
  connector: {
    data: {
      "Avon": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.patchConnectorWithId(connectorId, connectorRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connectorId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The Id of the connector to update.                                 |
| `connectorRequest`                                                 | [shared.ConnectorRequest](../../models/shared/connectorrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PatchConnectorWithIdResponse](../../models/operations/patchconnectorwithidresponse.md)>**


## patchConsentWithId

Updates, via PATCH, the consent with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Consent, ConsentData, ConsentRequest, EmailPlus, LocalizedIntegers } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentId: string = "Assurance";
const consentRequest: ConsentRequest = {
  consent: {
    countryMinimumAgeForSelfConsent: {},
    data: {
      "Southwest": {},
    },
    emailPlus: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Lakes",
    ],
  },
};
const xFusionAuthTenantId: string = "Optimization";

  const res = await sdk.sdk.patchConsentWithId(consentId, consentRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the consent to update.                                                                                                                   |
| `consentRequest`                                                                                                                                   | [shared.ConsentRequest](../../models/shared/consentrequest.md)                                                                                     | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchConsentWithIdResponse](../../models/operations/patchconsentwithidresponse.md)>**


## patchEmailTemplateWithId

Updates, via PATCH, the email template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchEmailTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EmailTemplate, EmailTemplateRequest, LocalizedStrings } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "round";
const emailTemplateRequest: EmailTemplateRequest = {
  emailTemplate: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {},
    localizedHtmlTemplates: {},
    localizedSubjects: {},
    localizedTextTemplates: {},
  },
};
const xFusionAuthTenantId: string = "invoice";

  const res = await sdk.sdk.patchEmailTemplateWithId(emailTemplateId, emailTemplateRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the email template to update.                                                                                                            |
| `emailTemplateRequest`                                                                                                                             | [shared.EmailTemplateRequest](../../models/shared/emailtemplaterequest.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchEmailTemplateWithIdResponse](../../models/operations/patchemailtemplatewithidresponse.md)>**


## patchEntityTypeWithId

Updates, via PATCH, the Entity Type with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchEntityTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "Southwest";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "Account": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "South": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "Intuitive": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.patchEntityTypeWithId(entityTypeId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `entityTypeId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The Id of the Entity Type to update.                                 |
| `entityTypeRequest`                                                  | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PatchEntityTypeWithIdResponse](../../models/operations/patchentitytypewithidresponse.md)>**


## patchGroupWithId

Updates, via PATCH, the group with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchGroupWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ApplicationRole, Group, GroupData, GroupRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupId: string = "Wooden";
const groupRequest: GroupRequest = {
  group: {
    data: {
      "Cambridgeshire": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  roleIds: [
    "074256e1-db68-4d84-b090-9a7e7996d0c6",
  ],
};
const xFusionAuthTenantId: string = "Northwest";

  const res = await sdk.sdk.patchGroupWithId(groupId, groupRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the group to update.                                                                                                                     |
| `groupRequest`                                                                                                                                     | [shared.GroupRequest](../../models/shared/grouprequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchGroupWithIdResponse](../../models/operations/patchgroupwithidresponse.md)>**


## patchIdentityProviderWithId

Updates, via PATCH, the identity provider with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IdentityProviderRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "Triathlon/Time";
const identityProviderRequest: IdentityProviderRequest = {
  identityProvider: "Elegant",
};

  const res = await sdk.sdk.patchIdentityProviderWithId(identityProviderId, identityProviderRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `identityProviderId`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The Id of the identity provider to update.                                       |
| `identityProviderRequest`                                                        | [shared.IdentityProviderRequest](../../models/shared/identityproviderrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PatchIdentityProviderWithIdResponse](../../models/operations/patchidentityproviderwithidresponse.md)>**


## patchIntegrationsWithId

Updates, via PATCH, the available integrations.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.patchIntegrationsWithId({
    integrations: {
      cleanspeak: {
        applicationIds: [
          "4def03e6-4aa0-43fa-820d-2f6ddf3be1a1",
        ],
        usernameModeration: {},
      },
      kafka: {
        producer: {
          "Chips": "Northeast",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.IntegrationRequest](../../models/shared/integrationrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PatchIntegrationsWithIdResponse](../../models/operations/patchintegrationswithidresponse.md)>**


## patchLambdaWithId

Updates, via PATCH, the lambda with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchLambdaWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Lambda, LambdaEngineType, LambdaRequest, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const lambdaId: string = "Hybrid";
const lambdaRequest: LambdaRequest = {
  lambda: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.patchLambdaWithId(lambdaId, lambdaRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lambdaId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the lambda to update.                              |
| `lambdaRequest`                                              | [shared.LambdaRequest](../../models/shared/lambdarequest.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PatchLambdaWithIdResponse](../../models/operations/patchlambdawithidresponse.md)>**


## patchMessageTemplateWithId

Updates, via PATCH, the message template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchMessageTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageTemplate, MessageTemplateData, MessageTemplateRequest, MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messageTemplateId: string = "West";
const messageTemplateRequest: MessageTemplateRequest = {
  messageTemplate: {
    data: {
      "brr": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.patchMessageTemplateWithId(messageTemplateId, messageTemplateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `messageTemplateId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | The Id of the message template to update.                                      |
| `messageTemplateRequest`                                                       | [shared.MessageTemplateRequest](../../models/shared/messagetemplaterequest.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PatchMessageTemplateWithIdResponse](../../models/operations/patchmessagetemplatewithidresponse.md)>**


## patchMessengerWithId

Updates, via PATCH, the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchMessengerWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseMessengerConfiguration,
  BaseMessengerConfigurationData,
  MessengerRequest,
  MessengerType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messengerId: string = "plus";
const messengerRequest: MessengerRequest = {
  messenger: {
    data: {
      "Audi": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.patchMessengerWithId(messengerId, messengerRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `messengerId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The Id of the messenger to update.                                 |
| `messengerRequest`                                                 | [shared.MessengerRequest](../../models/shared/messengerrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PatchMessengerWithIdResponse](../../models/operations/patchmessengerwithidresponse.md)>**


## patchRegistrationWithId

Updates, via PATCH, the registration for the user with the given id and the application defined in the request.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchRegistrationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  RegistrationRequest,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "dolorem";
const registrationRequest: RegistrationRequest = {
  eventInfo: {
    data: {
      "ohm": {},
    },
    location: {},
  },
  registration: {
    data: {
      "Solutions": {},
    },
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    roles: [
      "Fantastic",
    ],
    timezone: "America/Denver",
    tokens: {
      "input": "World",
    },
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "katal": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "program": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Soap": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "indexing": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "ubiquitous",
              ],
              timezone: "America/Denver",
              tokens: {
                "Bicycle": "Northeast",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "National",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "overriding": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Tanzanian",
        ],
        timezone: "America/Denver",
        tokens: {
          "Thulium": "pascal",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "Folding",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "officia";

  const res = await sdk.sdk.patchRegistrationWithId(userId, registrationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user whose registration is going to be updated.                                                                                      |
| `registrationRequest`                                                                                                                              | [shared.RegistrationRequest](../../models/shared/registrationrequest.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchRegistrationWithIdResponse](../../models/operations/patchregistrationwithidresponse.md)>**


## patchSystemConfigurationWithId

Updates, via PATCH, the system configuration.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { HTTPMethod } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.patchSystemConfigurationWithId({
    systemConfiguration: {
      auditLogConfiguration: {
        delete: {},
      },
      corsConfiguration: {
        allowedHeaders: [
          "Neodymium",
        ],
        allowedMethods: [
          HTTPMethod.Get,
        ],
        allowedOrigins: [
          "Rufiyaa",
        ],
        exposedHeaders: [
          "humiliating",
        ],
      },
      data: {
        "synthesize": {},
      },
      eventLogConfiguration: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      loginRecordConfiguration: {
        delete: {},
      },
      reportTimezone: "America/Denver",
      uiConfiguration: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.SystemConfigurationRequest](../../models/shared/systemconfigurationrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchSystemConfigurationWithIdResponse](../../models/operations/patchsystemconfigurationwithidresponse.md)>**


## patchTenantWithId

Updates, via PATCH, the tenant with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchTenantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  ConnectorPolicy,
  ConnectorPolicyData,
  EmailConfiguration,
  EmailHeader,
  EmailSecurityType,
  EmailUnverifiedOptions,
  EventConfiguration,
  EventConfigurationData,
  EventInfo,
  EventInfoData,
  ExpiryUnit,
  ExternalIdentifierConfiguration,
  FailedAuthenticationActionCancelPolicy,
  FailedAuthenticationConfiguration,
  FamilyConfiguration,
  JWTConfiguration,
  Location,
  MaximumPasswordAge,
  MinimumPasswordAge,
  MultiFactorAuthenticatorMethod,
  MultiFactorEmailMethod,
  MultiFactorLoginPolicy,
  MultiFactorSMSMethod,
  ObjectState,
  PasswordBreachDetection,
  PasswordEncryptionConfiguration,
  PasswordValidationRules,
  RateLimitedRequestConfiguration,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RememberPreviousPasswords,
  SecureGeneratorConfiguration,
  SecureGeneratorType,
  Tenant,
  TenantAccessControlConfiguration,
  TenantCaptchaConfiguration,
  TenantData,
  TenantFormConfiguration,
  TenantLambdaConfiguration,
  TenantLoginConfiguration,
  TenantMultiFactorConfiguration,
  TenantOAuth2Configuration,
  TenantRateLimitConfiguration,
  TenantRegistrationConfiguration,
  TenantRequest,
  TenantSCIMServerConfiguration,
  TenantSCIMServerConfigurationSchemas,
  TenantSSOConfiguration,
  TenantUserDeletePolicy,
  TenantUsernameConfiguration,
  TenantWebAuthnConfiguration,
  TenantWebAuthnWorkflowConfiguration,
  TimeBasedDeletePolicy,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameConfiguration,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "Fiji";
const tenantRequest: TenantRequest = {
  eventInfo: {
    data: {
      "Northeast": {},
    },
    location: {},
  },
  tenant: {
    accessControlConfiguration: {},
    captchaConfiguration: {},
    connectorPolicies: [
      {
        data: {
          "unleash": {},
        },
        domains: [
          "Wyoming",
        ],
      },
    ],
    data: {
      "Markets": {},
    },
    emailConfiguration: {
      additionalHeaders: [
        {},
      ],
      unverified: {},
    },
    eventConfiguration: {
      events: {
        "Rock": {},
      },
    },
    externalIdentifierConfiguration: {
      changePasswordIdGenerator: {},
      deviceUserCodeIdGenerator: {},
      emailVerificationIdGenerator: {},
      emailVerificationOneTimeCodeGenerator: {},
      passwordlessLoginGenerator: {},
      registrationVerificationIdGenerator: {},
      registrationVerificationOneTimeCodeGenerator: {},
      setupPasswordIdGenerator: {},
      twoFactorOneTimeCodeIdGenerator: {},
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {},
    },
    familyConfiguration: {},
    formConfiguration: {},
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    maximumPasswordAge: {},
    minimumPasswordAge: {},
    multiFactorConfiguration: {
      authenticator: {},
      email: {},
      sms: {},
    },
    oauthConfiguration: {},
    passwordEncryptionConfiguration: {},
    passwordValidationRules: {
      breachDetection: {},
      rememberPreviousPasswords: {},
    },
    rateLimitConfiguration: {
      failedLogin: {},
      forgotPassword: {},
      sendEmailVerification: {},
      sendPasswordless: {},
      sendRegistrationVerification: {},
      sendTwoFactor: {},
    },
    registrationConfiguration: {
      blockedDomains: [
        "South",
      ],
    },
    scimServerConfiguration: {
      schemas: {
        "Kia": {},
      },
    },
    ssoConfiguration: {},
    userDeletePolicy: {
      unverified: {},
    },
    usernameConfiguration: {
      unique: {},
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  webhookIds: [
    "b372b906-5dae-4798-b7de-a6759264e646",
  ],
};
const xFusionAuthTenantId: string = "didactic";

  const res = await sdk.sdk.patchTenantWithId(tenantId, tenantRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the tenant to update.                                                                                                                    |
| `tenantRequest`                                                                                                                                    | [shared.TenantRequest](../../models/shared/tenantrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchTenantWithIdResponse](../../models/operations/patchtenantwithidresponse.md)>**


## patchThemeWithId

Updates, via PATCH, the theme with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchThemeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, Templates, Theme, ThemeData, ThemeRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const themeId: string = "hacking";
const themeRequest: ThemeRequest = {
  theme: {
    data: {
      "scram": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {},
    templates: {},
  },
};

  const res = await sdk.sdk.patchThemeWithId(themeId, themeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `themeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the theme to update.                               |
| `themeRequest`                                               | [shared.ThemeRequest](../../models/shared/themerequest.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PatchThemeWithIdResponse](../../models/operations/patchthemewithidresponse.md)>**


## patchUserActionReasonWithId

Updates, via PATCH, the user action reason with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserActionReasonWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, UserActionReason, UserActionReasonRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionReasonId: string = "vitae";
const userActionReasonRequest: UserActionReasonRequest = {
  userActionReason: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {},
  },
};

  const res = await sdk.sdk.patchUserActionReasonWithId(userActionReasonId, userActionReasonRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `userActionReasonId`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The Id of the user action reason to update.                                      |
| `userActionReasonRequest`                                                        | [shared.UserActionReasonRequest](../../models/shared/useractionreasonrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PatchUserActionReasonWithIdResponse](../../models/operations/patchuseractionreasonwithidresponse.md)>**


## patchUserActionWithId

Updates, via PATCH, the user action with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  LocalizedStrings,
  TransactionType,
  UserAction,
  UserActionOption,
  UserActionRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionId: string = "Computer";
const userActionRequest: UserActionRequest = {
  userAction: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {},
    options: [
      {
        localizedNames: {},
      },
    ],
  },
};
const xFusionAuthTenantId: string = "Auto";

  const res = await sdk.sdk.patchUserActionWithId(userActionId, userActionRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user action to update.                                                                                                               |
| `userActionRequest`                                                                                                                                | [shared.UserActionRequest](../../models/shared/useractionrequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchUserActionWithIdResponse](../../models/operations/patchuseractionwithidresponse.md)>**


## patchUserConsentWithId

Updates, via PATCH, a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Consent,
  ConsentData,
  ConsentStatus,
  EmailPlus,
  LocalizedIntegers,
  UserConsent,
  UserConsentData,
  UserConsentRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userConsentId: string = "invoice";
const userConsentRequest: UserConsentRequest = {
  userConsent: {
    consent: {
      countryMinimumAgeForSelfConsent: {},
      data: {
        "Corporate": {},
      },
      emailPlus: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      values: [
        "San",
      ],
    },
    data: {
      "Security": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "kelvin",
    ],
  },
};

  const res = await sdk.sdk.patchUserConsentWithId(userConsentId, userConsentRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `userConsentId`                                                        | *string*                                                               | :heavy_check_mark:                                                     | The User Consent Id                                                    |
| `userConsentRequest`                                                   | [shared.UserConsentRequest](../../models/shared/userconsentrequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PatchUserConsentWithIdResponse](../../models/operations/patchuserconsentwithidresponse.md)>**


## patchUserWithId

Updates, via PATCH, the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { PatchUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserRequest,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "frame";
const userRequest: UserRequest = {
  eventInfo: {
    data: {
      "invoice": {},
    },
    location: {},
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "boiling": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "North": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Suriname": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "Account": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "24/365",
              ],
              timezone: "America/Denver",
              tokens: {
                "bravely": "Account",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "benchmark",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "Tennessee": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Chief",
        ],
        timezone: "America/Denver",
        tokens: {
          "now": "Ford",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "Specialist",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "mole";

  const res = await sdk.sdk.patchUserWithId(userId, userRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user to update.                                                                                                                      |
| `userRequest`                                                                                                                                      | [shared.UserRequest](../../models/shared/userrequest.md)                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchUserWithIdResponse](../../models/operations/patchuserwithidresponse.md)>**


## reconcileJWTWithId

Reconcile a User to FusionAuth using JWT issued from another Identity Provider.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.reconcileJWTWithId({
    data: {
      "Convertible": "expert",
    },
    metaData: {
      data: {
        "phew": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "metrics",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.IdentityProviderLoginRequest](../../models/shared/identityproviderloginrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ReconcileJWTWithIdResponse](../../models/operations/reconcilejwtwithidresponse.md)>**


## register

Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RegisterRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  RegistrationRequest,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const registrationRequest: RegistrationRequest = {
  eventInfo: {
    data: {
      "Keyboard": {},
    },
    location: {},
  },
  registration: {
    data: {
      "Music": {},
    },
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    roles: [
      "Fitness",
    ],
    timezone: "America/Denver",
    tokens: {
      "deposit": "Southwest",
    },
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "state": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "delectus": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Graphic": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "View": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "navigate",
              ],
              timezone: "America/Denver",
              tokens: {
                "Florida": "probable",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "navigating",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "East": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Bronze",
        ],
        timezone: "America/Denver",
        tokens: {
          "synthesizing": "Lira",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "female",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "ROI";

  const res = await sdk.sdk.register(registrationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `registrationRequest`                                                                                                                              | [shared.RegistrationRequest](../../models/shared/registrationrequest.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RegisterResponse](../../models/operations/registerresponse.md)>**


## registerWithId

Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RegisterWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  RegistrationRequest,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "AI";
const registrationRequest: RegistrationRequest = {
  eventInfo: {
    data: {
      "Cab": {},
    },
    location: {},
  },
  registration: {
    data: {
      "South": {},
    },
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    roles: [
      "son",
    ],
    timezone: "America/Denver",
    tokens: {
      "Assistant": "female",
    },
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "Architect": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "Courts": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Washington": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "San": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "Curve",
              ],
              timezone: "America/Denver",
              tokens: {
                "yellow": "plum",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "Sleek",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "payment": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "lest",
        ],
        timezone: "America/Denver",
        tokens: {
          "Ergonomic": "Auto",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "leverage",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "black";

  const res = await sdk.sdk.registerWithId(userId, registrationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user being registered for the application and optionally created.                                                                    |
| `registrationRequest`                                                                                                                              | [shared.RegistrationRequest](../../models/shared/registrationrequest.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RegisterWithIdResponse](../../models/operations/registerwithidresponse.md)>**


## reindexWithId

Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.reindexWithId({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.ReindexRequest](../../models/shared/reindexrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.ReindexWithIdResponse](../../models/operations/reindexwithidresponse.md)>**


## removeUserFromFamilyWithId

Removes a user from the family with the given id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RemoveUserFromFamilyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const familyId: string = "Metical";
const userId: string = "Diesel";
const xFusionAuthTenantId: string = "violet";

  const res = await sdk.sdk.removeUserFromFamilyWithId(familyId, userId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `familyId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The id of the family to remove the user from.                                                                                                      |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The id of the user to remove from the family.                                                                                                      |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RemoveUserFromFamilyWithIdResponse](../../models/operations/removeuserfromfamilywithidresponse.md)>**


## retrieveAPIKeyWithId

Retrieves an authentication API key for the given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveAPIKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Jazz";

  const res = await sdk.sdk.retrieveAPIKeyWithId(keyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the API key to retrieve.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveAPIKeyWithIdResponse](../../models/operations/retrieveapikeywithidresponse.md)>**


## retrieveActionWithId

Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const actionId: string = "eaque";

  const res = await sdk.sdk.retrieveActionWithId(actionId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `actionId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the action to retrieve.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveActionWithIdResponse](../../models/operations/retrieveactionwithidresponse.md)>**


## retrieveApplication

Retrieves the application for the given id or all of the applications if the id is null. OR Retrieves all the applications that are currently inactive.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveApplicationRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const xFusionAuthTenantId: string = "Fiat";
const inactive: string = "Czech";

  const res = await sdk.sdk.retrieveApplication(xFusionAuthTenantId, inactive);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `inactive`                                                                                                                                         | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveApplicationResponse](../../models/operations/retrieveapplicationresponse.md)>**


## retrieveApplicationWithId

Retrieves the application for the given id or all of the applications if the id is null.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveApplicationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Southwest";
const xFusionAuthTenantId: string = "Cis";

  const res = await sdk.sdk.retrieveApplicationWithId(applicationId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The application id.                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveApplicationWithIdResponse](../../models/operations/retrieveapplicationwithidresponse.md)>**


## retrieveAuditLogWithId

Retrieves a single audit log for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveAuditLogWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const auditLogId: string = "qua";

  const res = await sdk.sdk.retrieveAuditLogWithId(auditLogId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `auditLogId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The Id of the audit log to retrieve.                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveAuditLogWithIdResponse](../../models/operations/retrieveauditlogwithidresponse.md)>**


## retrieveConnectorWithId

Retrieves the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveConnectorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const connectorId: string = "Folk";

  const res = await sdk.sdk.retrieveConnectorWithId(connectorId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connectorId`                                                | *string*                                                     | :heavy_check_mark:                                           | The Id of the connector.                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveConnectorWithIdResponse](../../models/operations/retrieveconnectorwithidresponse.md)>**


## retrieveConsentWithId

Retrieves the Consent for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentId: string = "face";
const xFusionAuthTenantId: string = "Account";

  const res = await sdk.sdk.retrieveConsentWithId(consentId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the consent.                                                                                                                             |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveConsentWithIdResponse](../../models/operations/retrieveconsentwithidresponse.md)>**


## retrieveDailyActiveReportWithId

Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveDailyActiveReportWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Face";
const end: string = "laborum";
const start: string = "auxiliary";

  const res = await sdk.sdk.retrieveDailyActiveReportWithId(applicationId, end, start);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applicationId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The application id.                                          |
| `end`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The end instant as UTC milliseconds since Epoch.             |
| `start`                                                      | *string*                                                     | :heavy_minus_sign:                                           | The start instant as UTC milliseconds since Epoch.           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveDailyActiveReportWithIdResponse](../../models/operations/retrievedailyactivereportwithidresponse.md)>**


## retrieveEmailTemplate

Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEmailTemplateRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const xFusionAuthTenantId: string = "cum";

  const res = await sdk.sdk.retrieveEmailTemplate(xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveEmailTemplateResponse](../../models/operations/retrieveemailtemplateresponse.md)>**


## retrieveEmailTemplatePreviewWithId

Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveEmailTemplatePreviewWithId({
    emailTemplate: {
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      localizedFromNames: {},
      localizedHtmlTemplates: {},
      localizedSubjects: {},
      localizedTextTemplates: {},
    },
    locale: "en_US",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.PreviewRequest](../../models/shared/previewrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.RetrieveEmailTemplatePreviewWithIdResponse](../../models/operations/retrieveemailtemplatepreviewwithidresponse.md)>**


## retrieveEmailTemplateWithId

Retrieves the email template for the given Id. If you don't specify the id, this will return all of the email templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEmailTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "Chief";
const xFusionAuthTenantId: string = "white";

  const res = await sdk.sdk.retrieveEmailTemplateWithId(emailTemplateId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the email template.                                                                                                                      |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveEmailTemplateWithIdResponse](../../models/operations/retrieveemailtemplatewithidresponse.md)>**


## retrieveEntityGrantWithId

Retrieves an Entity Grant for the given Entity and User/Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityGrantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "Supervisor";
const xFusionAuthTenantId: string = "Tools";
const recipientEntityId: string = "serious";
const userId: string = "escape";

  const res = await sdk.sdk.retrieveEntityGrantWithId(entityId, xFusionAuthTenantId, recipientEntityId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity.                                                                                                                              |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `recipientEntityId`                                                                                                                                | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The Id of the Entity that the Entity Grant is for.                                                                                                 |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The Id of the User that the Entity Grant is for.                                                                                                   |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveEntityGrantWithIdResponse](../../models/operations/retrieveentitygrantwithidresponse.md)>**


## retrieveEntityTypeWithId

Retrieves the Entity Type for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "Wooden";

  const res = await sdk.sdk.retrieveEntityTypeWithId(entityTypeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `entityTypeId`                                               | *string*                                                     | :heavy_check_mark:                                           | The Id of the Entity Type.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveEntityTypeWithIdResponse](../../models/operations/retrieveentitytypewithidresponse.md)>**


## retrieveEntityWithId

Retrieves the Entity for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEntityWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "granular";
const xFusionAuthTenantId: string = "above";

  const res = await sdk.sdk.retrieveEntityWithId(entityId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity.                                                                                                                              |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveEntityWithIdResponse](../../models/operations/retrieveentitywithidresponse.md)>**


## retrieveEventLogWithId

Retrieves a single event log for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveEventLogWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const eventLogId: string = "relationships";

  const res = await sdk.sdk.retrieveEventLogWithId(eventLogId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `eventLogId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The Id of the event log to retrieve.                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveEventLogWithIdResponse](../../models/operations/retrieveeventlogwithidresponse.md)>**


## retrieveFamiliesWithId

Retrieves all the families that a user belongs to.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFamiliesWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const xFusionAuthTenantId: string = "synergistic";
const userId: string = "Missouri";

  const res = await sdk.sdk.retrieveFamiliesWithId(xFusionAuthTenantId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The User's id                                                                                                                                      |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveFamiliesWithIdResponse](../../models/operations/retrievefamilieswithidresponse.md)>**


## retrieveFamilyMembersByFamilyIdWithId

Retrieves all the members of a family by the unique Family Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFamilyMembersByFamilyIdWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const familyId: string = "Road";
const xFusionAuthTenantId: string = "EXE";

  const res = await sdk.sdk.retrieveFamilyMembersByFamilyIdWithId(familyId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `familyId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The unique Id of the Family.                                                                                                                       |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveFamilyMembersByFamilyIdWithIdResponse](../../models/operations/retrievefamilymembersbyfamilyidwithidresponse.md)>**


## retrieveFormFieldWithId

Retrieves the form field with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFormFieldWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const fieldId: string = "Functionality";

  const res = await sdk.sdk.retrieveFormFieldWithId(fieldId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fieldId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the form field.                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveFormFieldWithIdResponse](../../models/operations/retrieveformfieldwithidresponse.md)>**


## retrieveFormWithId

Retrieves the form with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveFormWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const formId: string = "Gorgeous";

  const res = await sdk.sdk.retrieveFormWithId(formId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The Id of the form.                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveFormWithIdResponse](../../models/operations/retrieveformwithidresponse.md)>**


## retrieveGroupWithId

Retrieves the group for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveGroupWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupId: string = "lavender";
const xFusionAuthTenantId: string = "Florida";

  const res = await sdk.sdk.retrieveGroupWithId(groupId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the group.                                                                                                                               |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveGroupWithIdResponse](../../models/operations/retrievegroupwithidresponse.md)>**


## retrieveIPAccessControlListWithId

Retrieves the IP Access Control List with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIPAccessControlListWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const accessControlListId: string = "Berkelium";

  const res = await sdk.sdk.retrieveIPAccessControlListWithId(accessControlListId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessControlListId`                                        | *string*                                                     | :heavy_check_mark:                                           | The Id of the IP Access Control List.                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveIPAccessControlListWithIdResponse](../../models/operations/retrieveipaccesscontrollistwithidresponse.md)>**


## retrieveIdentityProvider

Retrieve a single Identity Provider user (link). OR Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "Oman";
const identityProviderUserId: string = "Fantastic";
const userId: string = "Incredible";

  const res = await sdk.sdk.retrieveIdentityProvider(identityProviderId, identityProviderUserId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                     | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `identityProviderId`                                          | *string*                                                      | :heavy_minus_sign:                                            | The unique Id of the identity provider.                       |
| `identityProviderUserId`                                      | *string*                                                      | :heavy_minus_sign:                                            | The unique Id of the user in the 3rd party identity provider. |
| `userId`                                                      | *string*                                                      | :heavy_minus_sign:                                            | The unique Id of the FusionAuth user.                         |
| `config`                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)  | :heavy_minus_sign:                                            | Available config options for making requests.                 |


### Response

**Promise<[operations.RetrieveIdentityProviderResponse](../../models/operations/retrieveidentityproviderresponse.md)>**


## retrieveIdentityProviderByTypeWithId

Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderByTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const type: string = "lug";

  const res = await sdk.sdk.retrieveIdentityProviderByTypeWithId(type);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The type of the identity provider.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveIdentityProviderByTypeWithIdResponse](../../models/operations/retrieveidentityproviderbytypewithidresponse.md)>**


## retrieveIdentityProviderWithId

Retrieves the identity provider for the given id or all of the identity providers if the id is null.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "Outdoors";

  const res = await sdk.sdk.retrieveIdentityProviderWithId(identityProviderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `identityProviderId`                                         | *string*                                                     | :heavy_check_mark:                                           | The identity provider Id.                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveIdentityProviderWithIdResponse](../../models/operations/retrieveidentityproviderwithidresponse.md)>**


## retrieveJwt

Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid). OR Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveJwtRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Plastic";
const keyId: string = "West";

  const res = await sdk.sdk.retrieveJwt(applicationId, keyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applicationId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The Id of the Application for which this key is used.        |
| `keyId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | The Id of the public key (kid).                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveJwtResponse](../../models/operations/retrievejwtresponse.md)>**


## retrieveKeyWithId

Retrieves the key for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "Integrated";

  const res = await sdk.sdk.retrieveKeyWithId(keyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the key.                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveKeyWithIdResponse](../../models/operations/retrievekeywithidresponse.md)>**


## retrieveLambdaWithId

Retrieves the lambda for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveLambdaWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const lambdaId: string = "phooey";

  const res = await sdk.sdk.retrieveLambdaWithId(lambdaId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lambdaId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the lambda.                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveLambdaWithIdResponse](../../models/operations/retrievelambdawithidresponse.md)>**


## retrieveLambdasByTypeWithId

Retrieves all the lambdas for the provided type.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveLambdasByTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const type: string = "male";

  const res = await sdk.sdk.retrieveLambdasByTypeWithId(type);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The type of the lambda to return.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveLambdasByTypeWithIdResponse](../../models/operations/retrievelambdasbytypewithidresponse.md)>**


## retrieveMessageTemplate

Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveMessageTemplate();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveMessageTemplateResponse](../../models/operations/retrievemessagetemplateresponse.md)>**


## retrieveMessageTemplatePreviewWithId

Creates a preview of the message template provided in the request, normalized to a given locale.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveMessageTemplatePreviewWithId({
    locale: "en_US",
    messageTemplate: {
      data: {
        "Bedfordshire": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.PreviewMessageTemplateRequest](../../models/shared/previewmessagetemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RetrieveMessageTemplatePreviewWithIdResponse](../../models/operations/retrievemessagetemplatepreviewwithidresponse.md)>**


## retrieveMessageTemplateWithId

Retrieves the message template for the given Id. If you don't specify the id, this will return all of the message templates.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessageTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messageTemplateId: string = "Van";

  const res = await sdk.sdk.retrieveMessageTemplateWithId(messageTemplateId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `messageTemplateId`                                          | *string*                                                     | :heavy_check_mark:                                           | The Id of the message template.                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveMessageTemplateWithIdResponse](../../models/operations/retrievemessagetemplatewithidresponse.md)>**


## retrieveMessengerWithId

Retrieves the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMessengerWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messengerId: string = "transmitting";

  const res = await sdk.sdk.retrieveMessengerWithId(messengerId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `messengerId`                                                | *string*                                                     | :heavy_check_mark:                                           | The Id of the messenger.                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveMessengerWithIdResponse](../../models/operations/retrievemessengerwithidresponse.md)>**


## retrieveMonthlyActiveReportWithId

Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveMonthlyActiveReportWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Hat";
const end: string = "gadzooks";
const start: string = "Account";

  const res = await sdk.sdk.retrieveMonthlyActiveReportWithId(applicationId, end, start);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applicationId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The application id.                                          |
| `end`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The end instant as UTC milliseconds since Epoch.             |
| `start`                                                      | *string*                                                     | :heavy_minus_sign:                                           | The start instant as UTC milliseconds since Epoch.           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveMonthlyActiveReportWithIdResponse](../../models/operations/retrievemonthlyactivereportwithidresponse.md)>**


## retrieveOauthConfigurationWithId

Retrieves the Oauth2 configuration for the application for the given Application Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveOauthConfigurationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Bicycle";
const xFusionAuthTenantId: string = "Transexual";

  const res = await sdk.sdk.retrieveOauthConfigurationWithId(applicationId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Application to retrieve OAuth configuration.                                                                                         |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveOauthConfigurationWithIdResponse](../../models/operations/retrieveoauthconfigurationwithidresponse.md)>**


## retrievePasswordValidationRulesWithTenantIdWithId

Retrieves the password validation rules for a specific tenant.  This API does not require an API key.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrievePasswordValidationRulesWithTenantIdWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "Internal";

  const res = await sdk.sdk.retrievePasswordValidationRulesWithTenantIdWithId(tenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tenantId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the tenant.                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrievePasswordValidationRulesWithTenantIdWithIdResponse](../../models/operations/retrievepasswordvalidationruleswithtenantidwithidresponse.md)>**


## retrievePendingChildrenWithId

Retrieves all the children for the given parent email address.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrievePendingChildrenWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const parentEmail: string = "capacitor";

  const res = await sdk.sdk.retrievePendingChildrenWithId(parentEmail);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `parentEmail`                                                | *string*                                                     | :heavy_minus_sign:                                           | The email of the parent.                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrievePendingChildrenWithIdResponse](../../models/operations/retrievependingchildrenwithidresponse.md)>**


## retrieveRefreshTokenByIdWithId

Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRefreshTokenByIdWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tokenId: string = "male";

  const res = await sdk.sdk.retrieveRefreshTokenByIdWithId(tokenId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tokenId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the token.                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveRefreshTokenByIdWithIdResponse](../../models/operations/retrieverefreshtokenbyidwithidresponse.md)>**


## retrieveRefreshTokensWithId

Retrieves the refresh tokens that belong to the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRefreshTokensWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Maryland";

  const res = await sdk.sdk.retrieveRefreshTokensWithId(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The Id of the user.                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveRefreshTokensWithIdResponse](../../models/operations/retrieverefreshtokenswithidresponse.md)>**


## retrieveRegistrationReportWithId

Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRegistrationReportWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Sleek";
const end: string = "dedicated";
const start: string = "Northwest";

  const res = await sdk.sdk.retrieveRegistrationReportWithId(applicationId, end, start);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applicationId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The application id.                                          |
| `end`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The end instant as UTC milliseconds since Epoch.             |
| `start`                                                      | *string*                                                     | :heavy_minus_sign:                                           | The start instant as UTC milliseconds since Epoch.           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveRegistrationReportWithIdResponse](../../models/operations/retrieveregistrationreportwithidresponse.md)>**


## retrieveRegistrationWithId

Retrieves the user registration for the user with the given id and the given application id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveRegistrationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Mongolia";
const userId: string = "Southwest";
const xFusionAuthTenantId: string = "program";

  const res = await sdk.sdk.retrieveRegistrationWithId(applicationId, userId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application.                                                                                                                         |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user.                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveRegistrationWithIdResponse](../../models/operations/retrieveregistrationwithidresponse.md)>**


## retrieveReport

Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.RetrieveReportRequest](../../models/operations/retrievereportrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.RetrieveReportResponse](../../models/operations/retrievereportresponse.md)>**


## retrieveTenantWithId

Retrieves the tenant for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTenantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "1080p";
const xFusionAuthTenantId: string = "Ports";

  const res = await sdk.sdk.retrieveTenantWithId(tenantId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the tenant.                                                                                                                              |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveTenantWithIdResponse](../../models/operations/retrievetenantwithidresponse.md)>**


## retrieveThemeWithId

Retrieves the theme for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveThemeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const themeId: string = "Metal";

  const res = await sdk.sdk.retrieveThemeWithId(themeId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `themeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the theme.                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveThemeWithIdResponse](../../models/operations/retrievethemewithidresponse.md)>**


## retrieveTwoFactorRecoveryCodesWithId

Retrieve two-factor recovery codes for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTwoFactorRecoveryCodesWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "harm";

  const res = await sdk.sdk.retrieveTwoFactorRecoveryCodesWithId(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The Id of the user to retrieve Two Factor recovery codes.    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveTwoFactorRecoveryCodesWithIdResponse](../../models/operations/retrievetwofactorrecoverycodeswithidresponse.md)>**


## retrieveTwoFactorStatusWithId

Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveTwoFactorStatusWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const twoFactorTrustId: string = "Internal";
const applicationId: string = "teal";
const userId: string = "to";

  const res = await sdk.sdk.retrieveTwoFactorStatusWithId(twoFactorTrustId, applicationId, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `twoFactorTrustId`                                           | *string*                                                     | :heavy_check_mark:                                           | The optional two-factor trust Id to verify.                  |
| `applicationId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The optional applicationId to verify.                        |
| `userId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The user Id to retrieve the Two-Factor status.               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveTwoFactorStatusWithIdResponse](../../models/operations/retrievetwofactorstatuswithidresponse.md)>**


## retrieveUser

Retrieves the user for the given username. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user for the given email. OR Retrieves the user for the loginId. The loginId can be either the username or the email.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveUser({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.RetrieveUserRequest](../../models/operations/retrieveuserrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.RetrieveUserResponse](../../models/operations/retrieveuserresponse.md)>**


## retrieveUserAction

Retrieves all the user actions that are currently inactive. OR Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const xFusionAuthTenantId: string = "Bronze";
const inactive: string = "research";

  const res = await sdk.sdk.retrieveUserAction(xFusionAuthTenantId, inactive);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `inactive`                                                                                                                                         | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveUserActionResponse](../../models/operations/retrieveuseractionresponse.md)>**


## retrieveUserActionReason

Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveUserActionReason();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserActionReasonResponse](../../models/operations/retrieveuseractionreasonresponse.md)>**


## retrieveUserActionReasonWithId

Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all of the user action reasons.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionReasonWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionReasonId: string = "solution";

  const res = await sdk.sdk.retrieveUserActionReasonWithId(userActionReasonId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userActionReasonId`                                         | *string*                                                     | :heavy_check_mark:                                           | The Id of the user action reason.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserActionReasonWithIdResponse](../../models/operations/retrieveuseractionreasonwithidresponse.md)>**


## retrieveUserActionWithId

Retrieves the user action for the given Id. If you pass in null for the id, this will return all of the user actions.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionId: string = "Northeast";
const xFusionAuthTenantId: string = "siemens";

  const res = await sdk.sdk.retrieveUserActionWithId(userActionId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user action.                                                                                                                         |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveUserActionWithIdResponse](../../models/operations/retrieveuseractionwithidresponse.md)>**


## retrieveUserActioning

Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserActioningRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const active: string = "Southeast";
const preventingLogin: string = "Oriental";
const userId: string = "Runolfsson";

  const res = await sdk.sdk.retrieveUserActioning(active, preventingLogin, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `active`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `preventingLogin`                                            | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `userId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The Id of the user to fetch the actions for.                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserActioningResponse](../../models/operations/retrieveuseractioningresponse.md)>**


## retrieveUserChangePassword

Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserChangePasswordRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const loginId: string = "Legacy";

  const res = await sdk.sdk.retrieveUserChangePassword(loginId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `loginId`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The loginId of the User that you intend to change the password for. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.RetrieveUserChangePasswordResponse](../../models/operations/retrieveuserchangepasswordresponse.md)>**


## retrieveUserCommentsWithId

Retrieves all the comments for the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserCommentsWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Rubber";
const xFusionAuthTenantId: string = "Libyan";

  const res = await sdk.sdk.retrieveUserCommentsWithId(userId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user.                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveUserCommentsWithIdResponse](../../models/operations/retrieveusercommentswithidresponse.md)>**


## retrieveUserConsentWithId

Retrieve a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userConsentId: string = "male";

  const res = await sdk.sdk.retrieveUserConsentWithId(userConsentId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userConsentId`                                              | *string*                                                     | :heavy_check_mark:                                           | The User consent Id                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserConsentWithIdResponse](../../models/operations/retrieveuserconsentwithidresponse.md)>**


## retrieveUserConsentsWithId

Retrieves all the consents for a User.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserConsentsWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Spurs";

  const res = await sdk.sdk.retrieveUserConsentsWithId(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The User's Id                                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserConsentsWithIdResponse](../../models/operations/retrieveuserconsentswithidresponse.md)>**


## retrieveUserInfoFromAccessTokenWithId

Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveUserInfoFromAccessTokenWithId();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveUserInfoFromAccessTokenWithIdResponse](../../models/operations/retrieveuserinfofromaccesstokenwithidresponse.md)>**


## retrieveUserRecentLogin

Retrieves the last number of login records. OR Retrieves the last number of login records for a user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserRecentLoginRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const limit: string = "Marketing";
const offset: string = "East";
const userId: string = "Gasoline";

  const res = await sdk.sdk.retrieveUserRecentLogin(limit, offset, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `limit`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | (Optional, defaults to 10) The number of records to retrieve.                          |
| `offset`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The initial record. e.g. 0 is the last login, 100 will be the 100th most recent login. |
| `userId`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The Id of the user.                                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RetrieveUserRecentLoginResponse](../../models/operations/retrieveuserrecentloginresponse.md)>**


## retrieveUserWithId

Retrieves the user for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "quasi";
const xFusionAuthTenantId: string = "Gasoline";

  const res = await sdk.sdk.retrieveUserWithId(userId, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user.                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.RetrieveUserWithIdResponse](../../models/operations/retrieveuserwithidresponse.md)>**


## retrieveWebAuthnCredentialWithId

Retrieves the WebAuthn credential for the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebAuthnCredentialWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const id: string = "phooey";

  const res = await sdk.sdk.retrieveWebAuthnCredentialWithId(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The Id of the WebAuthn credential.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveWebAuthnCredentialWithIdResponse](../../models/operations/retrievewebauthncredentialwithidresponse.md)>**


## retrieveWebAuthnCredentialsForUserWithId

Retrieves all WebAuthn credentials for the given user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebAuthnCredentialsForUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Littel";

  const res = await sdk.sdk.retrieveWebAuthnCredentialsForUserWithId(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The user's ID.                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveWebAuthnCredentialsForUserWithIdResponse](../../models/operations/retrievewebauthncredentialsforuserwithidresponse.md)>**


## retrieveWebhook

Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.retrieveWebhook();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveWebhookResponse](../../models/operations/retrievewebhookresponse.md)>**


## retrieveWebhookWithId

Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RetrieveWebhookWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const webhookId: string = "Computer";

  const res = await sdk.sdk.retrieveWebhookWithId(webhookId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The Id of the webhook.                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveWebhookWithIdResponse](../../models/operations/retrievewebhookwithidresponse.md)>**


## revokeRefreshTokenByIdWithId

Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RevokeRefreshTokenByIdWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tokenId: string = "Southeast";

  const res = await sdk.sdk.revokeRefreshTokenByIdWithId(tokenId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tokenId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The unique Id of the token to delete.                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RevokeRefreshTokenByIdWithIdResponse](../../models/operations/revokerefreshtokenbyidwithidresponse.md)>**


## revokeUserConsentWithId

Revokes a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { RevokeUserConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userConsentId: string = "program";

  const res = await sdk.sdk.revokeUserConsentWithId(userConsentId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userConsentId`                                              | *string*                                                     | :heavy_check_mark:                                           | The User Consent Id                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RevokeUserConsentWithIdResponse](../../models/operations/revokeuserconsentwithidresponse.md)>**


## searchApplicationsWithId

Searches applications with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ObjectState } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchApplicationsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.ApplicationSearchRequest](../../models/shared/applicationsearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SearchApplicationsWithIdResponse](../../models/operations/searchapplicationswithidresponse.md)>**


## searchAuditLogsWithId

Searches the audit logs with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchAuditLogsWithId({
    search: {
      end: 1659380719000,
      start: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.AuditLogSearchRequest](../../models/shared/auditlogsearchrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.SearchAuditLogsWithIdResponse](../../models/operations/searchauditlogswithidresponse.md)>**


## searchConsentsWithId

Searches consents with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchConsentsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.ConsentSearchRequest](../../models/shared/consentsearchrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SearchConsentsWithIdResponse](../../models/operations/searchconsentswithidresponse.md)>**


## searchEmailTemplatesWithId

Searches email templates with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchEmailTemplatesWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.EmailTemplateSearchRequest](../../models/shared/emailtemplatesearchrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.SearchEmailTemplatesWithIdResponse](../../models/operations/searchemailtemplateswithidresponse.md)>**


## searchEntitiesByIdsWithId

Retrieves the entities for the given ids. If any id is invalid, it is ignored.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchEntitiesByIdsWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const ids: string = "Grocery";

  const res = await sdk.sdk.searchEntitiesByIdsWithId(ids);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ids`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The entity ids to search for.                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchEntitiesByIdsWithIdResponse](../../models/operations/searchentitiesbyidswithidresponse.md)>**


## searchEntitiesWithId

Searches entities with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { Sort } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchEntitiesWithId({
    search: {
      ids: [
        "cd642c71-bccf-4316-8757-297ab5e74900",
      ],
      sortFields: [
        {},
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.EntitySearchRequest](../../models/shared/entitysearchrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.SearchEntitiesWithIdResponse](../../models/operations/searchentitieswithidresponse.md)>**


## searchEntityGrantsWithId

Searches Entity Grants with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchEntityGrantsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.EntityGrantSearchRequest](../../models/shared/entitygrantsearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SearchEntityGrantsWithIdResponse](../../models/operations/searchentitygrantswithidresponse.md)>**


## searchEntityTypesWithId

Searches the entity types with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchEntityTypesWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.EntityTypeSearchRequest](../../models/shared/entitytypesearchrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SearchEntityTypesWithIdResponse](../../models/operations/searchentitytypeswithidresponse.md)>**


## searchEventLogsWithId

Searches the event logs with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { EventLogType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchEventLogsWithId({
    search: {
      end: 1659380719000,
      start: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.EventLogSearchRequest](../../models/shared/eventlogsearchrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.SearchEventLogsWithIdResponse](../../models/operations/searcheventlogswithidresponse.md)>**


## searchGroupMembersWithId

Searches group members with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchGroupMembersWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.GroupMemberSearchRequest](../../models/shared/groupmembersearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SearchGroupMembersWithIdResponse](../../models/operations/searchgroupmemberswithidresponse.md)>**


## searchGroupsWithId

Searches groups with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchGroupsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.GroupSearchRequest](../../models/shared/groupsearchrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.SearchGroupsWithIdResponse](../../models/operations/searchgroupswithidresponse.md)>**


## searchIPAccessControlListsWithId

Searches the IP Access Control Lists with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchIPAccessControlListsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.IPAccessControlListSearchRequest](../../models/shared/ipaccesscontrollistsearchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.SearchIPAccessControlListsWithIdResponse](../../models/operations/searchipaccesscontrollistswithidresponse.md)>**


## searchIdentityProvidersWithId

Searches identity providers with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { IdentityProviderType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchIdentityProvidersWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.IdentityProviderSearchRequest](../../models/shared/identityprovidersearchrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.SearchIdentityProvidersWithIdResponse](../../models/operations/searchidentityproviderswithidresponse.md)>**


## searchKeysWithId

Searches keys with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { KeyAlgorithm, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchKeysWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.KeySearchRequest](../../models/shared/keysearchrequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.SearchKeysWithIdResponse](../../models/operations/searchkeyswithidresponse.md)>**


## searchLambdasWithId

Searches lambdas with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchLambdasWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.LambdaSearchRequest](../../models/shared/lambdasearchrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.SearchLambdasWithIdResponse](../../models/operations/searchlambdaswithidresponse.md)>**


## searchLoginRecordsWithId

Searches the login records with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchLoginRecordsWithId({
    search: {
      end: 1659380719000,
      start: 1659380719000,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.LoginRecordSearchRequest](../../models/shared/loginrecordsearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SearchLoginRecordsWithIdResponse](../../models/operations/searchloginrecordswithidresponse.md)>**


## searchTenantsWithId

Searches tenants with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchTenantsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.TenantSearchRequest](../../models/shared/tenantsearchrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.SearchTenantsWithIdResponse](../../models/operations/searchtenantswithidresponse.md)>**


## searchThemesWithId

Searches themes with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchThemesWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.ThemeSearchRequest](../../models/shared/themesearchrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.SearchThemesWithIdResponse](../../models/operations/searchthemeswithidresponse.md)>**


## searchUserCommentsWithId

Searches user comments with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchUserCommentsWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.UserCommentSearchRequest](../../models/shared/usercommentsearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SearchUserCommentsWithIdResponse](../../models/operations/searchusercommentswithidresponse.md)>**


## searchUsersByIdsWithId

Retrieves the users for the given ids. If any id is invalid, it is ignored.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SearchUsersByIdsWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const ids: string = "Oriental";

  const res = await sdk.sdk.searchUsersByIdsWithId(ids);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ids`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The user ids to search for.                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchUsersByIdsWithIdResponse](../../models/operations/searchusersbyidswithidresponse.md)>**


## searchUsersByQueryWithId

Retrieves the users for the given search criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { Sort } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchUsersByQueryWithId({
    search: {
      ids: [
        "e6087d5e-34ab-4542-98e7-a0b86cea7a4c",
      ],
      sortFields: [
        {},
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SearchRequest](../../models/shared/searchrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchUsersByQueryWithIdResponse](../../models/operations/searchusersbyquerywithidresponse.md)>**


## searchWebhooksWithId

Searches webhooks with the specified criteria and pagination.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.searchWebhooksWithId({
    search: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebhookSearchRequest](../../models/shared/webhooksearchrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SearchWebhooksWithIdResponse](../../models/operations/searchwebhookswithidresponse.md)>**


## sendEmailWithId

Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendEmailWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EmailAddress, SendRequest, SendRequestRequestData } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "copying";
const sendRequest: SendRequest = {
  bccAddresses: [
    "Northwest",
  ],
  ccAddresses: [
    "opulent",
  ],
  preferredLanguages: [
    "en_US",
  ],
  requestData: {
    "Account": {},
  },
  toAddresses: [
    {},
  ],
  userIds: [
    "5395df9c-522c-45d7-806e-fdfcfa28f13b",
  ],
};

  const res = await sdk.sdk.sendEmailWithId(emailTemplateId, sendRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `emailTemplateId`                                            | *string*                                                     | :heavy_check_mark:                                           | The id for the template.                                     |
| `sendRequest`                                                | [shared.SendRequest](../../models/shared/sendrequest.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SendEmailWithIdResponse](../../models/operations/sendemailwithidresponse.md)>**


## sendFamilyRequestEmailWithId

Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.sendFamilyRequestEmailWithId({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.FamilyEmailRequest](../../models/shared/familyemailrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.SendFamilyRequestEmailWithIdResponse](../../models/operations/sendfamilyrequestemailwithidresponse.md)>**


## sendPasswordlessCodeWithId

Send a passwordless authentication code in an email to complete login.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.sendPasswordlessCodeWithId({
    state: {
      "National": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.PasswordlessSendRequest](../../models/shared/passwordlesssendrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SendPasswordlessCodeWithIdResponse](../../models/operations/sendpasswordlesscodewithidresponse.md)>**


## sendTwoFactorCodeForEnableDisableWithId

Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.sendTwoFactorCodeForEnableDisableWithId({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.TwoFactorSendRequest](../../models/shared/twofactorsendrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SendTwoFactorCodeForEnableDisableWithIdResponse](../../models/operations/sendtwofactorcodeforenabledisablewithidresponse.md)>**


## sendTwoFactorCodeForLoginUsingMethodWithId

Send a Two Factor authentication code to allow the completion of Two Factor authentication.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { SendTwoFactorCodeForLoginUsingMethodWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { TwoFactorSendRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const twoFactorId: string = "Cadillac";
const twoFactorSendRequest: TwoFactorSendRequest = {};

  const res = await sdk.sdk.sendTwoFactorCodeForLoginUsingMethodWithId(twoFactorId, twoFactorSendRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `twoFactorId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | The Id returned by the Login API necessary to complete Two Factor authentication. |
| `twoFactorSendRequest`                                                            | [shared.TwoFactorSendRequest](../../models/shared/twofactorsendrequest.md)        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.SendTwoFactorCodeForLoginUsingMethodWithIdResponse](../../models/operations/sendtwofactorcodeforloginusingmethodwithidresponse.md)>**


## startIdentityProviderLoginWithId

Begins a login request for a 3rd party login that requires user interaction such as HYPR.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.startIdentityProviderLoginWithId({
    data: {
      "Manager": "tuba",
    },
    metaData: {
      data: {
        "Bulgaria": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "becquerel",
      ],
    },
    state: {
      "gummy": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IdentityProviderStartLoginRequest](../../models/shared/identityproviderstartloginrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.StartIdentityProviderLoginWithIdResponse](../../models/operations/startidentityproviderloginwithidresponse.md)>**


## startPasswordlessLoginWithId

Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.startPasswordlessLoginWithId({
    state: {
      "Music": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.PasswordlessStartRequest](../../models/shared/passwordlessstartrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.StartPasswordlessLoginWithIdResponse](../../models/operations/startpasswordlessloginwithidresponse.md)>**


## startTwoFactorLoginWithId

Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside of a normal login that originated from the Login API (/api/login).

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.startTwoFactorLoginWithId({
    state: {
      "Sahara": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.TwoFactorStartRequest](../../models/shared/twofactorstartrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.StartTwoFactorLoginWithIdResponse](../../models/operations/starttwofactorloginwithidresponse.md)>**


## startWebAuthnLoginWithId

Start a WebAuthn authentication ceremony by generating a new challenge for the user

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { WebAuthnWorkflow } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.startWebAuthnLoginWithId({
    state: {
      "Southwest": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebAuthnStartRequest](../../models/shared/webauthnstartrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.StartWebAuthnLoginWithIdResponse](../../models/operations/startwebauthnloginwithidresponse.md)>**


## startWebAuthnRegistrationWithId

Start a WebAuthn registration ceremony by generating a new challenge for the user

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { WebAuthnWorkflow } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.startWebAuthnRegistrationWithId({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.WebAuthnRegisterStartRequest](../../models/shared/webauthnregisterstartrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.StartWebAuthnRegistrationWithIdResponse](../../models/operations/startwebauthnregistrationwithidresponse.md)>**


## twoFactorLoginWithId

Complete login using a 2FA challenge

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { DeviceType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.twoFactorLoginWithId({
    metaData: {
      data: {
        "plum": {},
      },
      device: {
        lastAccessedInstant: 1659380719000,
      },
      scopes: [
        "Representative",
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.TwoFactorLoginRequest](../../models/shared/twofactorloginrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.TwoFactorLoginWithIdResponse](../../models/operations/twofactorloginwithidresponse.md)>**


## updateAPIKeyWithId

Updates an API key by given id

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateAPIKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { APIKey, APIKeyMetaData, APIKeyPermissions, APIKeyRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "pixel";
const apiKeyRequest: APIKeyRequest = {
  apiKey: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    metaData: {
      attributes: {
        "Market": "Gold",
      },
    },
    permissions: {
      endpoints: {
        "productivity": [
          "vainly",
        ],
      },
    },
  },
};

  const res = await sdk.sdk.updateAPIKeyWithId(keyId, apiKeyRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the API key to update.                             |
| `apiKeyRequest`                                              | [shared.APIKeyRequest](../../models/shared/apikeyrequest.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateAPIKeyWithIdResponse](../../models/operations/updateapikeywithidresponse.md)>**


## updateApplicationRoleWithId

Updates the application role with the given id for the application.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateApplicationRoleWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "calculate";
const roleId: string = "card";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "fb4ea56c-dc94-47e0-b723-0da1dbd1d343",
      ],
      usernameModeration: {},
    },
    data: {
      "Tools": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "male",
      ],
      authorizedRedirectURLs: [
        "Buckinghamshire",
      ],
      enabledGrants: [
        "directional",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "facere",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "approach": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Palladium";

  const res = await sdk.sdk.updateApplicationRoleWithId(applicationId, roleId, applicationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application that the role belongs to.                                                                                                |
| `roleId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the role to update.                                                                                                                      |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateApplicationRoleWithIdResponse](../../models/operations/updateapplicationrolewithidresponse.md)>**


## updateApplicationWithId

Updates the application with the given Id. OR Reactivates the application with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateApplicationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Application,
  ApplicationAccessControlConfiguration,
  ApplicationData,
  ApplicationEmailConfiguration,
  ApplicationExternalIdentifierConfiguration,
  ApplicationFormConfiguration,
  ApplicationMultiFactorConfiguration,
  ApplicationMultiFactorTrustPolicy,
  ApplicationRegistrationDeletePolicy,
  ApplicationRequest,
  ApplicationRole,
  ApplicationWebAuthnConfiguration,
  ApplicationWebAuthnWorkflowConfiguration,
  AuthenticationTokenConfiguration,
  CanonicalizationMethod,
  CleanSpeakConfiguration,
  ClientAuthenticationPolicy,
  EventInfo,
  EventInfoData,
  JWTConfiguration,
  LambdaConfiguration,
  Location,
  LoginConfiguration,
  LoginIdType,
  LogoutBehavior,
  MultiFactorEmailTemplate,
  MultiFactorLoginPolicy,
  MultiFactorSMSTemplate,
  Oauth2AuthorizedURLValidationPolicy,
  OAuth2Configuration,
  ObjectState,
  PasswordlessConfiguration,
  ProofKeyForCodeExchangePolicy,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RegistrationConfiguration,
  RegistrationType,
  RegistrationUnverifiedOptions,
  Requirable,
  SAMLLogoutBehavior,
  SAMLv2Configuration,
  SAMLv2IdPInitiatedLoginConfiguration,
  SAMLv2Logout,
  SAMLv2SingleLogout,
  SelfServiceFormConfiguration,
  TimeBasedDeletePolicy,
  UnverifiedBehavior,
  UsernameModeration,
  VerificationStrategy,
  XMLSignatureLocation,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Optional";
const applicationRequest: ApplicationRequest = {
  application: {
    accessControlConfiguration: {},
    authenticationTokenConfiguration: {},
    cleanSpeakConfiguration: {
      applicationIds: [
        "03c307c8-cad5-4d0b-93c9-a4b92e30870e",
      ],
      usernameModeration: {},
    },
    data: {
      "Mazda": {},
    },
    emailConfiguration: {},
    externalIdentifierConfiguration: {},
    formConfiguration: {
      selfServiceFormConfiguration: {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    multiFactorConfiguration: {
      email: {},
      sms: {},
    },
    oauthConfiguration: {
      authorizedOriginURLs: [
        "system",
      ],
      authorizedRedirectURLs: [
        "Tools",
      ],
      enabledGrants: [
        "Consultant",
      ],
    },
    passwordlessConfiguration: {},
    registrationConfiguration: {
      birthDate: {},
      firstName: {},
      fullName: {},
      lastName: {},
      middleName: {},
      mobilePhone: {},
    },
    registrationDeletePolicy: {
      unverified: {},
    },
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
    samlv2Configuration: {
      authorizedRedirectURLs: [
        "South",
      ],
      initiatedLogin: {},
      logout: {
        singleLogout: {},
      },
    },
    unverified: {},
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  eventInfo: {
    data: {
      "Granite": {},
    },
    location: {},
  },
  role: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};
const xFusionAuthTenantId: string = "Wells";
const reactivate: string = "parse";

  const res = await sdk.sdk.updateApplicationWithId(applicationId, applicationRequest, xFusionAuthTenantId, reactivate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the application to update.                                                                                                               |
| `applicationRequest`                                                                                                                               | [shared.ApplicationRequest](../../models/shared/applicationrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateApplicationWithIdResponse](../../models/operations/updateapplicationwithidresponse.md)>**


## updateConnectorWithId

Updates the connector with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateConnectorWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseConnectorConfiguration,
  BaseConnectorConfigurationData,
  ConnectorRequest,
  ConnectorType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const connectorId: string = "calculate";
const connectorRequest: ConnectorRequest = {
  connector: {
    data: {
      "Northwest": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateConnectorWithId(connectorId, connectorRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connectorId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The Id of the connector to update.                                 |
| `connectorRequest`                                                 | [shared.ConnectorRequest](../../models/shared/connectorrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.UpdateConnectorWithIdResponse](../../models/operations/updateconnectorwithidresponse.md)>**


## updateConsentWithId

Updates the consent with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Consent, ConsentData, ConsentRequest, EmailPlus, LocalizedIntegers } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const consentId: string = "Franey";
const consentRequest: ConsentRequest = {
  consent: {
    countryMinimumAgeForSelfConsent: {},
    data: {
      "Bedfordshire": {},
    },
    emailPlus: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Savings",
    ],
  },
};
const xFusionAuthTenantId: string = "Volvo";

  const res = await sdk.sdk.updateConsentWithId(consentId, consentRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consentId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the consent to update.                                                                                                                   |
| `consentRequest`                                                                                                                                   | [shared.ConsentRequest](../../models/shared/consentrequest.md)                                                                                     | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateConsentWithIdResponse](../../models/operations/updateconsentwithidresponse.md)>**


## updateEmailTemplateWithId

Updates the email template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEmailTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { EmailTemplate, EmailTemplateRequest, LocalizedStrings } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const emailTemplateId: string = "Southeast";
const emailTemplateRequest: EmailTemplateRequest = {
  emailTemplate: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedFromNames: {},
    localizedHtmlTemplates: {},
    localizedSubjects: {},
    localizedTextTemplates: {},
  },
};
const xFusionAuthTenantId: string = "primary";

  const res = await sdk.sdk.updateEmailTemplateWithId(emailTemplateId, emailTemplateRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailTemplateId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the email template to update.                                                                                                            |
| `emailTemplateRequest`                                                                                                                             | [shared.EmailTemplateRequest](../../models/shared/emailtemplaterequest.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateEmailTemplateWithIdResponse](../../models/operations/updateemailtemplatewithidresponse.md)>**


## updateEntityTypePermissionWithId

Updates the permission with the given id for the entity type.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityTypePermissionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "calculate";
const permissionId: string = "City";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "Communications": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "payment": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "yellow": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateEntityTypePermissionWithId(entityTypeId, permissionId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `entityTypeId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The Id of the entityType that the permission belongs to.             |
| `permissionId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The Id of the permission to update.                                  |
| `entityTypeRequest`                                                  | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateEntityTypePermissionWithIdResponse](../../models/operations/updateentitytypepermissionwithidresponse.md)>**


## updateEntityTypeWithId

Updates the Entity Type with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityTypeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
  EntityTypeRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityTypeId: string = "Bronze";
const entityTypeRequest: EntityTypeRequest = {
  entityType: {
    data: {
      "institutionalize": {},
    },
    insertInstant: 1659380719000,
    jwtConfiguration: {},
    lastUpdateInstant: 1659380719000,
    permissions: [
      {
        data: {
          "Audi": {},
        },
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  permission: {
    data: {
      "azure": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateEntityTypeWithId(entityTypeId, entityTypeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `entityTypeId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The Id of the Entity Type to update.                                 |
| `entityTypeRequest`                                                  | [shared.EntityTypeRequest](../../models/shared/entitytyperequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateEntityTypeWithIdResponse](../../models/operations/updateentitytypewithidresponse.md)>**


## updateEntityWithId

Updates the Entity with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateEntityWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Entity,
  EntityData,
  EntityJWTConfiguration,
  EntityRequest,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "Screen";
const entityRequest: EntityRequest = {
  entity: {
    data: {
      "SUV": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    type: {
      data: {
        "eventually": {},
      },
      insertInstant: 1659380719000,
      jwtConfiguration: {},
      lastUpdateInstant: 1659380719000,
      permissions: [
        {
          data: {
            "auxiliary": {},
          },
          insertInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
        },
      ],
    },
  },
};
const xFusionAuthTenantId: string = "Health";

  const res = await sdk.sdk.updateEntityWithId(entityId, entityRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity to update.                                                                                                                    |
| `entityRequest`                                                                                                                                    | [shared.EntityRequest](../../models/shared/entityrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateEntityWithIdResponse](../../models/operations/updateentitywithidresponse.md)>**


## updateFormFieldWithId

Updates the form field with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateFormFieldWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  FormControl,
  FormDataType,
  FormField,
  FormFieldData,
  FormFieldRequest,
  FormFieldValidator,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const fieldId: string = "Missouri";
const formFieldRequest: FormFieldRequest = {
  field: {
    data: {
      "moderator": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    options: [
      "Auto",
    ],
    validator: {},
  },
  fields: [
    {
      data: {
        "quantifying": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      options: [
        "Buckinghamshire",
      ],
      validator: {},
    },
  ],
};

  const res = await sdk.sdk.updateFormFieldWithId(fieldId, formFieldRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `fieldId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The Id of the form field to update.                                |
| `formFieldRequest`                                                 | [shared.FormFieldRequest](../../models/shared/formfieldrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.UpdateFormFieldWithIdResponse](../../models/operations/updateformfieldwithidresponse.md)>**


## updateFormWithId

Updates the form with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateFormWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Form, FormData, FormRequest, FormStep, FormType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const formId: string = "JBOD";
const formRequest: FormRequest = {
  form: {
    data: {
      "Director": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    steps: [
      {
        fields: [
          "3e0e5350-c22b-4e42-a9da-58a65c947cb7",
        ],
      },
    ],
  },
};

  const res = await sdk.sdk.updateFormWithId(formId, formRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `formId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The Id of the form to update.                                |
| `formRequest`                                                | [shared.FormRequest](../../models/shared/formrequest.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateFormWithIdResponse](../../models/operations/updateformwithidresponse.md)>**


## updateGroupMembersWithId

Creates a member in a group.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { BreachedPasswordStatus, ChangePasswordReason, ContentStatus, TOTPAlgorithm } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.updateGroupMembersWithId({
    members: [
      {
        data: {
          "Centralized": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "deposit": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "unimpressively": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "lavender",
              ],
              timezone: "America/Denver",
              tokens: {
                "altruistic": "Account",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "North",
            ],
          },
        },
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.MemberRequest](../../models/shared/memberrequest.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateGroupMembersWithIdResponse](../../models/operations/updategroupmemberswithidresponse.md)>**


## updateGroupWithId

Updates the group with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateGroupWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { ApplicationRole, Group, GroupData, GroupRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const groupId: string = "Tricycle";
const groupRequest: GroupRequest = {
  group: {
    data: {
      "connect": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    roles: [
      {
        insertInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
      },
    ],
  },
  roleIds: [
    "ddb763e6-e5b3-432a-ab14-ff4416c0b5c7",
  ],
};
const xFusionAuthTenantId: string = "gray";

  const res = await sdk.sdk.updateGroupWithId(groupId, groupRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the group to update.                                                                                                                     |
| `groupRequest`                                                                                                                                     | [shared.GroupRequest](../../models/shared/grouprequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateGroupWithIdResponse](../../models/operations/updategroupwithidresponse.md)>**


## updateIPAccessControlListWithId

Updates the IP Access Control List with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateIPAccessControlListWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  IPAccessControlEntry,
  IPAccessControlEntryAction,
  IPAccessControlList,
  IPAccessControlListData,
  IPAccessControlListRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const accessControlListId: string = "female";
const ipAccessControlListRequest: IPAccessControlListRequest = {
  ipAccessControlList: {
    data: {
      "auxiliary": {},
    },
    entries: [
      {},
    ],
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateIPAccessControlListWithId(accessControlListId, ipAccessControlListRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accessControlListId`                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The Id of the IP Access Control List to update.                                        |
| `ipAccessControlListRequest`                                                           | [shared.IPAccessControlListRequest](../../models/shared/ipaccesscontrollistrequest.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateIPAccessControlListWithIdResponse](../../models/operations/updateipaccesscontrollistwithidresponse.md)>**


## updateIdentityProviderWithId

Updates the identity provider with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateIdentityProviderWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { IdentityProviderRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const identityProviderId: string = "female";
const identityProviderRequest: IdentityProviderRequest = {
  identityProvider: "Gasoline",
};

  const res = await sdk.sdk.updateIdentityProviderWithId(identityProviderId, identityProviderRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `identityProviderId`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The Id of the identity provider to update.                                       |
| `identityProviderRequest`                                                        | [shared.IdentityProviderRequest](../../models/shared/identityproviderrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateIdentityProviderWithIdResponse](../../models/operations/updateidentityproviderwithidresponse.md)>**


## updateIntegrationsWithId

Updates the available integrations.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.updateIntegrationsWithId({
    integrations: {
      cleanspeak: {
        applicationIds: [
          "b4663ca7-0ff8-4a1b-82f2-7693171491ad",
        ],
        usernameModeration: {},
      },
      kafka: {
        producer: {
          "Orchestrator": "refloat",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.IntegrationRequest](../../models/shared/integrationrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.UpdateIntegrationsWithIdResponse](../../models/operations/updateintegrationswithidresponse.md)>**


## updateKeyWithId

Updates the key with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateKeyWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { CertificateInformation, Key, KeyAlgorithm, KeyRequest, KeyType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const keyId: string = "South";
const keyRequest: KeyRequest = {
  key: {
    certificateInformation: {
      validFrom: 1659380719000,
      validTo: 1659380719000,
    },
    expirationInstant: 1659380719000,
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateKeyWithId(keyId, keyRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The Id of the key to update.                                 |
| `keyRequest`                                                 | [shared.KeyRequest](../../models/shared/keyrequest.md)       | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateKeyWithIdResponse](../../models/operations/updatekeywithidresponse.md)>**


## updateLambdaWithId

Updates the lambda with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateLambdaWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { Lambda, LambdaEngineType, LambdaRequest, LambdaType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const lambdaId: string = "Corporate";
const lambdaRequest: LambdaRequest = {
  lambda: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateLambdaWithId(lambdaId, lambdaRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lambdaId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The Id of the lambda to update.                              |
| `lambdaRequest`                                              | [shared.LambdaRequest](../../models/shared/lambdarequest.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateLambdaWithIdResponse](../../models/operations/updatelambdawithidresponse.md)>**


## updateMessageTemplateWithId

Updates the message template with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateMessageTemplateWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { MessageTemplate, MessageTemplateData, MessageTemplateRequest, MessageType } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messageTemplateId: string = "Legacy";
const messageTemplateRequest: MessageTemplateRequest = {
  messageTemplate: {
    data: {
      "Folk": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateMessageTemplateWithId(messageTemplateId, messageTemplateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `messageTemplateId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | The Id of the message template to update.                                      |
| `messageTemplateRequest`                                                       | [shared.MessageTemplateRequest](../../models/shared/messagetemplaterequest.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateMessageTemplateWithIdResponse](../../models/operations/updatemessagetemplatewithidresponse.md)>**


## updateMessengerWithId

Updates the messenger with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateMessengerWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  BaseMessengerConfiguration,
  BaseMessengerConfigurationData,
  MessengerRequest,
  MessengerType,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const messengerId: string = "auxiliary";
const messengerRequest: MessengerRequest = {
  messenger: {
    data: {
      "transmitter": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
  },
};

  const res = await sdk.sdk.updateMessengerWithId(messengerId, messengerRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `messengerId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The Id of the messenger to update.                                 |
| `messengerRequest`                                                 | [shared.MessengerRequest](../../models/shared/messengerrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.UpdateMessengerWithIdResponse](../../models/operations/updatemessengerwithidresponse.md)>**


## updateRegistrationWithId

Updates the registration for the user with the given id and the application defined in the request.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateRegistrationWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  RegistrationRequest,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Northwest";
const registrationRequest: RegistrationRequest = {
  eventInfo: {
    data: {
      "copying": {},
    },
    location: {},
  },
  registration: {
    data: {
      "National": {},
    },
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    roles: [
      "Data",
    ],
    timezone: "America/Denver",
    tokens: {
      "pile": "Latin",
    },
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "female": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "Checking": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Director": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "Forks": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "although",
              ],
              timezone: "America/Denver",
              tokens: {
                "Franc": "synthesize",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "Director",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "lumen": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Mazda",
        ],
        timezone: "America/Denver",
        tokens: {
          "Stockton": "transmit",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "red",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "access";

  const res = await sdk.sdk.updateRegistrationWithId(userId, registrationRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user whose registration is going to be updated.                                                                                      |
| `registrationRequest`                                                                                                                              | [shared.RegistrationRequest](../../models/shared/registrationrequest.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateRegistrationWithIdResponse](../../models/operations/updateregistrationwithidresponse.md)>**


## updateSystemConfigurationWithId

Updates the system configuration.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { HTTPMethod } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.updateSystemConfigurationWithId({
    systemConfiguration: {
      auditLogConfiguration: {
        delete: {},
      },
      corsConfiguration: {
        allowedHeaders: [
          "Spain",
        ],
        allowedMethods: [
          HTTPMethod.Patch,
        ],
        allowedOrigins: [
          "bake",
        ],
        exposedHeaders: [
          "Rwanda",
        ],
      },
      data: {
        "second": {},
      },
      eventLogConfiguration: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      loginRecordConfiguration: {
        delete: {},
      },
      reportTimezone: "America/Denver",
      uiConfiguration: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.SystemConfigurationRequest](../../models/shared/systemconfigurationrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateSystemConfigurationWithIdResponse](../../models/operations/updatesystemconfigurationwithidresponse.md)>**


## updateTenantWithId

Updates the tenant with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateTenantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorAttachmentPreference,
  BreachAction,
  BreachMatchMode,
  CaptchaMethod,
  ConnectorPolicy,
  ConnectorPolicyData,
  EmailConfiguration,
  EmailHeader,
  EmailSecurityType,
  EmailUnverifiedOptions,
  EventConfiguration,
  EventConfigurationData,
  EventInfo,
  EventInfoData,
  ExpiryUnit,
  ExternalIdentifierConfiguration,
  FailedAuthenticationActionCancelPolicy,
  FailedAuthenticationConfiguration,
  FamilyConfiguration,
  JWTConfiguration,
  Location,
  MaximumPasswordAge,
  MinimumPasswordAge,
  MultiFactorAuthenticatorMethod,
  MultiFactorEmailMethod,
  MultiFactorLoginPolicy,
  MultiFactorSMSMethod,
  ObjectState,
  PasswordBreachDetection,
  PasswordEncryptionConfiguration,
  PasswordValidationRules,
  RateLimitedRequestConfiguration,
  RefreshTokenExpirationPolicy,
  RefreshTokenRevocationPolicy,
  RefreshTokenUsagePolicy,
  RememberPreviousPasswords,
  SecureGeneratorConfiguration,
  SecureGeneratorType,
  Tenant,
  TenantAccessControlConfiguration,
  TenantCaptchaConfiguration,
  TenantData,
  TenantFormConfiguration,
  TenantLambdaConfiguration,
  TenantLoginConfiguration,
  TenantMultiFactorConfiguration,
  TenantOAuth2Configuration,
  TenantRateLimitConfiguration,
  TenantRegistrationConfiguration,
  TenantRequest,
  TenantSCIMServerConfiguration,
  TenantSCIMServerConfigurationSchemas,
  TenantSSOConfiguration,
  TenantUserDeletePolicy,
  TenantUsernameConfiguration,
  TenantWebAuthnConfiguration,
  TenantWebAuthnWorkflowConfiguration,
  TimeBasedDeletePolicy,
  TOTPAlgorithm,
  TransactionType,
  UniqueUsernameConfiguration,
  UniqueUsernameStrategy,
  UnverifiedBehavior,
  UserVerificationRequirement,
  VerificationStrategy,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const tenantId: string = "auxiliary";
const tenantRequest: TenantRequest = {
  eventInfo: {
    data: {
      "Gasoline": {},
    },
    location: {},
  },
  tenant: {
    accessControlConfiguration: {},
    captchaConfiguration: {},
    connectorPolicies: [
      {
        data: {
          "pixel": {},
        },
        domains: [
          "Loan",
        ],
      },
    ],
    data: {
      "Funk": {},
    },
    emailConfiguration: {
      additionalHeaders: [
        {},
      ],
      unverified: {},
    },
    eventConfiguration: {
      events: {
        "Beavercreek": {},
      },
    },
    externalIdentifierConfiguration: {
      changePasswordIdGenerator: {},
      deviceUserCodeIdGenerator: {},
      emailVerificationIdGenerator: {},
      emailVerificationOneTimeCodeGenerator: {},
      passwordlessLoginGenerator: {},
      registrationVerificationIdGenerator: {},
      registrationVerificationOneTimeCodeGenerator: {},
      setupPasswordIdGenerator: {},
      twoFactorOneTimeCodeIdGenerator: {},
    },
    failedAuthenticationConfiguration: {
      actionCancelPolicy: {},
    },
    familyConfiguration: {},
    formConfiguration: {},
    insertInstant: 1659380719000,
    jwtConfiguration: {
      refreshTokenRevocationPolicy: {},
    },
    lambdaConfiguration: {},
    lastUpdateInstant: 1659380719000,
    loginConfiguration: {},
    maximumPasswordAge: {},
    minimumPasswordAge: {},
    multiFactorConfiguration: {
      authenticator: {},
      email: {},
      sms: {},
    },
    oauthConfiguration: {},
    passwordEncryptionConfiguration: {},
    passwordValidationRules: {
      breachDetection: {},
      rememberPreviousPasswords: {},
    },
    rateLimitConfiguration: {
      failedLogin: {},
      forgotPassword: {},
      sendEmailVerification: {},
      sendPasswordless: {},
      sendRegistrationVerification: {},
      sendTwoFactor: {},
    },
    registrationConfiguration: {
      blockedDomains: [
        "Myanmar",
      ],
    },
    scimServerConfiguration: {
      schemas: {
        "um": {},
      },
    },
    ssoConfiguration: {},
    userDeletePolicy: {
      unverified: {},
    },
    usernameConfiguration: {
      unique: {},
    },
    webAuthnConfiguration: {
      bootstrapWorkflow: {},
      reauthenticationWorkflow: {},
    },
  },
  webhookIds: [
    "19b8d7d6-1398-4ff9-afa1-4cc93140889e",
  ],
};
const xFusionAuthTenantId: string = "male";

  const res = await sdk.sdk.updateTenantWithId(tenantId, tenantRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the tenant to update.                                                                                                                    |
| `tenantRequest`                                                                                                                                    | [shared.TenantRequest](../../models/shared/tenantrequest.md)                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateTenantWithIdResponse](../../models/operations/updatetenantwithidresponse.md)>**


## updateThemeWithId

Updates the theme with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateThemeWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, Templates, Theme, ThemeData, ThemeRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const themeId: string = "helplessly";
const themeRequest: ThemeRequest = {
  theme: {
    data: {
      "turquoise": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedMessages: {},
    templates: {},
  },
};

  const res = await sdk.sdk.updateThemeWithId(themeId, themeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `themeId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The Id of the theme to update.                               |
| `themeRequest`                                               | [shared.ThemeRequest](../../models/shared/themerequest.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateThemeWithIdResponse](../../models/operations/updatethemewithidresponse.md)>**


## updateUserActionReasonWithId

Updates the user action reason with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserActionReasonWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { LocalizedStrings, UserActionReason, UserActionReasonRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionReasonId: string = "Quality";
const userActionReasonRequest: UserActionReasonRequest = {
  userActionReason: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedTexts: {},
  },
};

  const res = await sdk.sdk.updateUserActionReasonWithId(userActionReasonId, userActionReasonRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `userActionReasonId`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The Id of the user action reason to update.                                      |
| `userActionReasonRequest`                                                        | [shared.UserActionReasonRequest](../../models/shared/useractionreasonrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateUserActionReasonWithIdResponse](../../models/operations/updateuseractionreasonwithidresponse.md)>**


## updateUserActionWithId

Reactivates the user action with the given Id. OR Updates the user action with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserActionWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  LocalizedStrings,
  TransactionType,
  UserAction,
  UserActionOption,
  UserActionRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userActionId: string = "Delaware";
const userActionRequest: UserActionRequest = {
  userAction: {
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    localizedNames: {},
    options: [
      {
        localizedNames: {},
      },
    ],
  },
};
const xFusionAuthTenantId: string = "Representative";
const reactivate: string = "Movies";

  const res = await sdk.sdk.updateUserActionWithId(userActionId, userActionRequest, xFusionAuthTenantId, reactivate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userActionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user action to reactivate.                                                                                                           |
| `userActionRequest`                                                                                                                                | [shared.UserActionRequest](../../models/shared/useractionrequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateUserActionWithIdResponse](../../models/operations/updateuseractionwithidresponse.md)>**


## updateUserConsentWithId

Updates a single User consent by Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserConsentWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Consent,
  ConsentData,
  ConsentStatus,
  EmailPlus,
  LocalizedIntegers,
  UserConsent,
  UserConsentData,
  UserConsentRequest,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userConsentId: string = "Lead";
const userConsentRequest: UserConsentRequest = {
  userConsent: {
    consent: {
      countryMinimumAgeForSelfConsent: {},
      data: {
        "proactive": {},
      },
      emailPlus: {},
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      values: [
        "Bedfordshire",
      ],
    },
    data: {
      "Rubber": {},
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    values: [
      "Yucaipa",
    ],
  },
};

  const res = await sdk.sdk.updateUserConsentWithId(userConsentId, userConsentRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `userConsentId`                                                        | *string*                                                               | :heavy_check_mark:                                                     | The User Consent Id                                                    |
| `userConsentRequest`                                                   | [shared.UserConsentRequest](../../models/shared/userconsentrequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.UpdateUserConsentWithIdResponse](../../models/operations/updateuserconsentwithidresponse.md)>**


## updateUserVerifyEmail

Re-sends the verification email to the user. OR Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserVerifyEmailRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Guyana";
const email: string = "applications";
const sendVerifyEmail: string = "Handcrafted";

  const res = await sdk.sdk.updateUserVerifyEmail(applicationId, email, sendVerifyEmail);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `applicationId`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique Application Id to used to resolve an application specific email template. |
| `email`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The email address of the user that needs a new verification email.                   |
| `sendVerifyEmail`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserVerifyEmailResponse](../../models/operations/updateuserverifyemailresponse.md)>**


## updateUserVerifyRegistration

Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system. OR Re-sends the application registration verification email to the user.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserVerifyRegistrationRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const applicationId: string = "Bronze";
const email: string = "Genderqueer";
const sendVerifyPasswordEmail: string = "Rock";

  const res = await sdk.sdk.updateUserVerifyRegistration(applicationId, email, sendVerifyPasswordEmail);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `applicationId`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | The Id of the application to be verified.                          |
| `email`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | The email address of the user that needs a new verification email. |
| `sendVerifyPasswordEmail`                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.UpdateUserVerifyRegistrationResponse](../../models/operations/updateuserverifyregistrationresponse.md)>**


## updateUserWithId

Reactivates the user with the given Id. OR Updates the user with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateUserWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  AuthenticatorConfiguration,
  BreachedPasswordStatus,
  ChangePasswordReason,
  ContentStatus,
  EventInfo,
  EventInfoData,
  GroupMember,
  GroupMemberData,
  Location,
  TOTPAlgorithm,
  TwoFactorMethod,
  User,
  UserData,
  UserRegistration,
  UserRegistrationData,
  UserRequest,
  UserTwoFactorConfiguration,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const userId: string = "Gasoline";
const userRequest: UserRequest = {
  eventInfo: {
    data: {
      "Transmasculine": {},
    },
    location: {},
  },
  user: {
    birthDate: "2007-12-03",
    breachedPasswordLastCheckedInstant: 1659380719000,
    data: {
      "within": {},
    },
    expiry: 1659380719000,
    insertInstant: 1659380719000,
    lastLoginInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    memberships: [
      {
        data: {
          "Planner": {},
        },
        insertInstant: 1659380719000,
        user: {
          birthDate: "2007-12-03",
          breachedPasswordLastCheckedInstant: 1659380719000,
          data: {
            "Hybrid": {},
          },
          expiry: 1659380719000,
          insertInstant: 1659380719000,
          lastLoginInstant: 1659380719000,
          lastUpdateInstant: 1659380719000,
          memberships: [
            {},
          ],
          passwordLastUpdateInstant: 1659380719000,
          preferredLanguages: [
            "en_US",
          ],
          registrations: [
            {
              data: {
                "Spring": {},
              },
              insertInstant: 1659380719000,
              lastLoginInstant: 1659380719000,
              lastUpdateInstant: 1659380719000,
              preferredLanguages: [
                "en_US",
              ],
              roles: [
                "Keyboard",
              ],
              timezone: "America/Denver",
              tokens: {
                "Bacon": "RAM",
              },
            },
          ],
          timezone: "America/Denver",
          twoFactor: {
            methods: [
              {
                authenticator: {},
              },
            ],
            recoveryCodes: [
              "brand",
            ],
          },
        },
      },
    ],
    passwordLastUpdateInstant: 1659380719000,
    preferredLanguages: [
      "en_US",
    ],
    registrations: [
      {
        data: {
          "Bike": {},
        },
        insertInstant: 1659380719000,
        lastLoginInstant: 1659380719000,
        lastUpdateInstant: 1659380719000,
        preferredLanguages: [
          "en_US",
        ],
        roles: [
          "Multigender",
        ],
        timezone: "America/Denver",
        tokens: {
          "Bedfordshire": "Southwest",
        },
      },
    ],
    timezone: "America/Denver",
    twoFactor: {
      methods: [
        {
          authenticator: {},
        },
      ],
      recoveryCodes: [
        "Rowe",
      ],
    },
  },
};
const xFusionAuthTenantId: string = "Cyclocross";
const reactivate: string = "Metal";

  const res = await sdk.sdk.updateUserWithId(userId, userRequest, xFusionAuthTenantId, reactivate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the user to reactivate.                                                                                                                  |
| `userRequest`                                                                                                                                      | [shared.UserRequest](../../models/shared/userrequest.md)                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpdateUserWithIdResponse](../../models/operations/updateuserwithidresponse.md)>**


## updateWebhookWithId

Updates the webhook with the given Id.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpdateWebhookWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import { HTTPHeaders, Webhook, WebhookData, WebhookRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const webhookId: string = "internal";
const webhookRequest: WebhookRequest = {
  webhook: {
    data: {
      "Regional": {},
    },
    eventsEnabled: {
      "Southeast": false,
    },
    headers: {},
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    tenantIds: [
      "c3e30f75-c785-45c1-8afe-e9eafdb4f6e9",
    ],
  },
};

  const res = await sdk.sdk.updateWebhookWithId(webhookId, webhookRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `webhookId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The Id of the webhook to update.                               |
| `webhookRequest`                                               | [shared.WebhookRequest](../../models/shared/webhookrequest.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.UpdateWebhookWithIdResponse](../../models/operations/updatewebhookwithidresponse.md)>**


## upsertEntityGrantWithId

Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { UpsertEntityGrantWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";
import {
  Entity,
  EntityData,
  EntityGrant,
  EntityGrantData,
  EntityGrantRequest,
  EntityJWTConfiguration,
  EntityType,
  EntityTypeData,
  EntityTypePermission,
  EntityTypePermissionData,
} from "speakeasy-sdks/fusionauth/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const entityId: string = "Mongolia";
const entityGrantRequest: EntityGrantRequest = {
  grant: {
    data: {
      "Salad": {},
    },
    entity: {
      data: {
        "truly": {},
      },
      insertInstant: 1659380719000,
      lastUpdateInstant: 1659380719000,
      type: {
        data: {
          "silver": {},
        },
        insertInstant: 1659380719000,
        jwtConfiguration: {},
        lastUpdateInstant: 1659380719000,
        permissions: [
          {
            data: {
              "Assistant": {},
            },
            insertInstant: 1659380719000,
            lastUpdateInstant: 1659380719000,
          },
        ],
      },
    },
    insertInstant: 1659380719000,
    lastUpdateInstant: 1659380719000,
    permissions: [
      "Cadillac",
    ],
  },
};
const xFusionAuthTenantId: string = "Northwest";

  const res = await sdk.sdk.upsertEntityGrantWithId(entityId, entityGrantRequest, xFusionAuthTenantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Id of the Entity that the User/Entity is being granted access to.                                                                              |
| `entityGrantRequest`                                                                                                                               | [shared.EntityGrantRequest](../../models/shared/entitygrantrequest.md)                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `xFusionAuthTenantId`                                                                                                                              | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.UpsertEntityGrantWithIdResponse](../../models/operations/upsertentitygrantwithidresponse.md)>**


## validateDeviceWithId

Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";
import { ValidateDeviceWithIdRequest } from "speakeasy-sdks/fusionauth/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });
const clientId: string = "Copernicium";
const userCode: string = "Corporate";

  const res = await sdk.sdk.validateDeviceWithId(clientId, userCode);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | The client id.                                               |
| `userCode`                                                   | *string*                                                     | :heavy_minus_sign:                                           | The end-user verification code.                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateDeviceWithIdResponse](../../models/operations/validatedevicewithidresponse.md)>**


## validateJWTWithId

Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.validateJWTWithId();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateJWTWithIdResponse](../../models/operations/validatejwtwithidresponse.md)>**


## vendJWTWithId

It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.vendJWTWithId({
    claims: {
      "Wooden": {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.JWTVendRequest](../../models/shared/jwtvendrequest.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.VendJWTWithIdResponse](../../models/operations/vendjwtwithidresponse.md)>**


## verifyUserRegistrationWithId

Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.

### Example Usage

```typescript
import { SDK } from "speakeasy-sdks/fusionauth";

(async() => {
  const sdk = new SDK({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.sdk.verifyUserRegistrationWithId({
    eventInfo: {
      data: {
        "Southwest": {},
      },
      location: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.VerifyRegistrationRequest](../../models/shared/verifyregistrationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.VerifyUserRegistrationWithIdResponse](../../models/operations/verifyuserregistrationwithidresponse.md)>**

