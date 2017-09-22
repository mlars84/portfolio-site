myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  // var OAUTH = process.env.OAUTH_TOKEN;

  const oauthToken = '92146c7ee1539ab5783ce83c9a07c8f1e0eff7d2';
  const username = 'mlars84';

  //Call to Github API to fetch user's profile info
  this.githubProfile = () => {

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };

  //Call to Github API to fetch list of user's repos
  this.githubRepos = () => {

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };
});
