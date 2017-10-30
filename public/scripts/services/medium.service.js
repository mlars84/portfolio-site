myApp.service('MediumAPI', function($http) {
  //Enter your token and username here:
  // var OAUTH = process.env.OAUTH_TOKEN;

  // const clientID = '473302535785'
  // const clientSecret = 'c9b76ab8a089968c773efc3501859793f2092d44'
  // const userName = 'mlars84'

  //Call to Github API to fetch user's profile info
  // this.mediumProfile = () => {

  //   return $http({
  //     method: 'GET',
  //     url: 'https://medium.com/feed/@mlars84'
  //     }
  //   ).then((res) => {
  //     console.log('res.data:', res.data);
  //     return res.data;
  //   });
  // };

  //Call to Github API to fetch list of user's repos
  this.mediumPosts = () => {

    return $http({
      method: 'GET',
      url: 'https://medium.com/feed/@mlars84'
      }
    ).then((res) => {
      console.log('res.data:', res.data);
      return res.data;
    });
  };
});