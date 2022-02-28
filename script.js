const ymp3cli = fetch("https://ymp3cli-api.elpanajose.repl.co/");
ymp3cli
  .then((r) => {
    return r.text();
  })
  .then((jsonData) => {
    // only get the number
    document.getElementById("ymp3cli").innerHTML = jsonData.match(/\d+/g).join("");
  });

const lastUser = fetch("https://ymp3cli-api.elpanajose.repl.co/");
lastUser
  .then((r) => {
    return r.text();
  })
  .then((jsonData) => {
    // {"id": 24, "lastUser": "papijose"}
    const lastUser = jsonData.split(",")[1].split(":")[1].split('"')[1];
    document.getElementById("last-user").innerHTML = lastUser;
  });
