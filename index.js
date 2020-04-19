function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  }

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object)
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.innerText = object.id
    ul.appendChild('li')
  })
}
