function getIssues() {
   fetch('https://api.github.com/repos/gregbenn/javascript-fetch-lab/issues').then(
    result => result.json()
  ).then(json => showIssues(json))
}

function showIssues(json) {
  function showIssues(json) {
  const issues = json.map(function(repo) {
    return(`
        <p>${repo.title}</p>
        <p>${repo.body}</p>
      `)
  }).join("")
  $('#issues').html(issues)
}

}

function createIssue() {
  fetch('https://api.github.com/repos/gregbenn/javascript-fetch-lab/issues', {
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
  return ''
}
// e3742357e4445caf0474a6bfdc0bc9062dabfbf3
