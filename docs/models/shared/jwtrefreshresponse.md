# JWTRefreshResponse

API response for refreshing a JWT with a Refresh Token.  <p>  Using a different response object from RefreshTokenResponse because the retrieve response will return an object for refreshToken, and this is a  string.


## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `refreshToken`     | *string*           | :heavy_minus_sign: | N/A                |
| `refreshTokenId`   | *string*           | :heavy_minus_sign: | N/A                |
| `token`            | *string*           | :heavy_minus_sign: | N/A                |