const url = 'https:/api.github.com'

function getIssues() {
  fetch(`${url}/repos/daniel-mack/javascript-fetch-lab/issues`, {
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
  // debugger
  fetch(`${url}/repos/daniel-mack/javascript-fetch-lab/issues`, {
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
    body: 'put stuff here'
  };

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
    }).then(resp => resp.json())
      .then(json => showResults(json));
    }

function getToken() {
  return ''
  //set back to '' before committing so all tests pass
}
