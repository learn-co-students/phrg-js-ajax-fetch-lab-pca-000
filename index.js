const url = 'https:/api.github.com'

function getIssues() {
  const token = '84356a3819629b03979a11b09b0358de197c974f';
  const issueUrl = "https://api.github.com/repos/labrams10/javascript-fetch-lab/issues"
  fetch(issueUrl, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json)
  const issues = json.map(function(result) {
    return(
      `<p> ${result.title}</p>
       <p>${result.body}</p>`
    )
  }).join("")
  $('#issues').html(issues)
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let content = {title: title, body: body}
  fetch(`${url}/repos/labrams10/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(content),
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(resp => getIssues())
}

function showResults(json) {
  let results = $('#results')
  let forkedUrl = json.html_url
    results.html("<a href='"+ forkedUrl + "'>Forked Repo</a>")
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const postData = {
    body: 'random'
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
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
