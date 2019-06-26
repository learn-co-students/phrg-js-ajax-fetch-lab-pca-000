function getIssues() {
  const token = 'bc00979004acee190ae16da5349c0f8c8a50f05b'
  const issueUrl = 'https://api.github.com/repos/darrendc/javascript-fetch-lab/issues'
  fetch(issueUrl, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  const allIssues = json.map(function(r) {
    return(
      `<p> ${r.title}</p> <p>${r.body}</p>`
    )
  }).join("")
  $('#issues').html(allIssues)
}

function createIssue() {
  let body = document.getElementById('body').value
  let title = document.getElementById('title').value
  let testBody = {
    title: title,
    body: body
  }
  const token = 'bc00979004acee190ae16da5349c0f8c8a50f05b'
  const issueUrl = 'https://api.github.com/repos/darrendc/javascript-fetch-lab/issues'
  fetch('https://api.github.com/repos/darrendc/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(testBody),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
.then(json => getIssues());
}


function showResults(json) {
  let results = $('#results')
  let forkUrl = json.html_url
  results.html("<a href='"+ forkUrl + "'>Repo Fork</a>")
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = ''
  const postData = {
  body: 'Great stuff'
  };

  const repoUrl = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
