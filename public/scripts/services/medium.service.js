const medium = require('medium-sdk')

const client = new medium.MediumClient({
  clientId: '473302535785',
  clientSecret: '2e474b0fa2396cba68a5d58051d5f1beb18ee031'
})

const redirectURL = 'http://www.matthewlarsondev.com/callback/medium';

const url = client.getAuthorizationUrl('secretState', redirectURL, [
  medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST
])

// (Send the user to the authorization URL to obtain an authorization code.)

client.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL, function (err, token) {
  client.getUser(function (err, user) {
    client.createPost({
      userId: user.id,
      title: 'A new post',
      contentFormat: medium.PostContentFormat.HTML,
      content: '<h1>A New Post</h1><p>This is my new post.</p>',
      publishStatus: medium.PostPublishStatus.DRAFT
    }, function (err, post) {
      console.log(token, user, post)
    })
  })
})
