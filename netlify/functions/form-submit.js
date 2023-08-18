import fetch from 'node-fetch';

module.exports.handler = async (event) => {
  const formData = JSON.parse(event.body).payload.data;
  console.log(formData)

  // write some code to send formData to pipedream
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = formData;

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };

  await fetch("https://7385ae90469b0ea76d3107d8ce0332f0.m.pipedream.net", options)
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
  // https://tistheseasonkc.com/thank-you
};
