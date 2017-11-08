myApp.controller('ProfileController', ['GithubAPI', function(GithubAPI) {
  console.log('in ProfileController')
  const vm = this

  vm.profileFunc = () => {
    GithubAPI.githubProfile().then(data => {
      console.log(data)
      vm.profile = data
    })
    .catch(err => {
      console.log(err)
    })
  } //end profileFunc
  vm.profileFunc()
}]) //end ProfileController
