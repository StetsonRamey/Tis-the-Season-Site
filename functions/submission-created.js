exports.handler = async (event) => {
  console.log(event);
  const formData = JSON.parse(event.body).payload.data;

  // write some code to send formData to pipedream
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = formData;

  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  };

  fetch("https://43cade8a7edfb4282235dccb6bea09af.m.pipedream.net", options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error("[error] " + err.message);
    });

  // can I redirect with a get request here
  return {
    statusCode: 307,
    headers: {
      Location: "https://tistheseasonkc.com/thank-you",
    },
  };
};
