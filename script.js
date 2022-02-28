const ymp3cli = fetch("https://ymp3cli-api.elpanajose.repl.co/");
ymp3cli
  .then((r) => {
    return r.json();
  })
  .then((jsonData) => {
    document.getElementById("ymp3cli").innerHTML = jsonData.id;
  });

const lastUser = fetch("https://ymp3cli-api.elpanajose.repl.co/");
lastUser
  .then((r) => {
    return r.json();
  })
  .then((jsonData) => {
    document.getElementById("last-user").innerHTML = jsonData.lastUser;
  });
