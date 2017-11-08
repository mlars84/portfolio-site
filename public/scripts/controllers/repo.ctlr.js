myApp.controller('RepoController', ['GithubAPI', function(GithubAPI) {
  console.log('in RepoController')
  const vm = this

  vm.repos = []

  vm.repoFunc = () => {
    GithubAPI.githubRepos().then(data => {
      vm.repos = data
    })
    .catch(err=> {
      console.log(err)
    })
  }//end repoFunc
  vm.repoFunc()
}]) //end RepoController
