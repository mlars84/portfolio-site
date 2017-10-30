myApp.controller('BlogController', ['MediumAPI', function(MediumAPI, $http) {
  console.log('in BlogController');

  const vm = this;
  vm.posts = [];

  vm.getFeed = () => {
    $http({
      method: 'GET',
      url: '/feed'
    }).then((res) => {
      console.log(res.data)
    })
  }

  // vm.postsFunc = () => {
  //   MediumAPI.mediumPosts().then((data) => {
  //     console.log('data:', data);
  //     vm.posts = data;
  //   });
  // }; //end postsFunc
  // vm.postsFunc();

}]); //end BlogController