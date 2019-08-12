function getIssues() {
  fetch(`https://api.github.com/repos/gillianwenhold/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues = json.map(i =>
    `<h3>${i.title}</h3>
    <p>${i.body}</p>`)
  $("#issues").html(issues);
}

function createIssue() {
  console.log("In createIssue");
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const data = { title: title, body: body }
//  const link = document.getElementById("link").innerHTML.replace('https://github.com/', '');
  fetch(`https://api.github.com/repos/gillianwenhold/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(getIssues());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json.full_name));
}

function showForkedRepo(res) {
  console.log('in showForkedRepo')
  $('#results').append(`Forked! <a href="https://github.com/${res}" target="_blank" id="link">https://github.com/${res}</a>`)
};

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
