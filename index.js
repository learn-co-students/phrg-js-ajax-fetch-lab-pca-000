function getIssues(issue) {
  fetch('https://api.github.com/repos/bkrigel/javascript-fetch-lab/issues').then(
    result => result.json()
  ).then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json);
  const issues = json.map(issue => (
    `<br><br>Issue: <a href='${issue.html_url}'>${issue.title}</a>`
  ))
  $('#issues').html(issues)
}

function createIssue() {
  fetch('https://api.github.com/repos/bkrigel/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify({
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then( result => result.json() ).then(json => getIssues())
}

function showResults(json) {
  $('#results').html(`Repository: <a href='${json.html_url}'>${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch (`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    body: JSON.stringify({ body: 'Some random string to post'}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then( result => result.json() ).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
