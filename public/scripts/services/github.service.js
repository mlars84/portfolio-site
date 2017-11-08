myApp.service('GithubAPI', function($http) {
  const oauthToken = '92146c7ee1539ab5783ce83c9a07c8f1e0eff7d2'
  const username = 'mlars84'

  this.githubProfile = () => {
    return $http({
      method: 'GET',
      url: `https://api.github.com/users/${username}`,
      headers: {
        'Authorization': `token ${oauthToken}`}
      }
    ).then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.githubRepos = () => {
    return $http({
      method: 'GET',
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'Authorization': `token ${oauthToken}`}
      }
    ).then(res => {
      console.log(res.data)
      return res.data;
    })
    .catch(err => {
      console.log(err)
    })
  }
})
