myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  const oauthToken = '1acae5f207793df6e902ef6ce1bf7cf7ed93aed1';
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
