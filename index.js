const token = ""
const gitUrl = 'https:/api.github.com'

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));

function getIssues() {
  fetch(`${gitUrl}/repos/jamilia27/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function showIssues(json) {
  const issues = json.map(function(repo) {
    return(
      `<p> ${repo.title}</p>
      <p>${repo.body}</p>`
    )
  }).join("")
  $('#issues').html(issues)
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueBody = document.getElementById('body').value
  let data = {title: issueTitle, body: issueBody}
  fetch(`${gitUrl}/repos/jamilia27/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(resp => getIssues())
}

function showResults(json) {
  let results = $('#results')
  let fUrl = json.html_url
  results.html("<a href='"+ fUrl + "'>Forked Repo</a>")
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  const postData = {
      body: 'some stuff here'
    };

  fetch(`https://api.github.com/repos/${repo}/forks`, {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(res => res.json)
      .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token
}
