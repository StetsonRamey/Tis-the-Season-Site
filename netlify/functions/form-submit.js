import fetch from 'node-fetch';

exports.handler = async (event) => {
  console.log(event.body)

  const params = event.body

  const searchParams = [...new URLSearchParams(params)].reduce(
    (a, [k, v]) => ((a[k] = v), a), {}
  )
  console.log(searchParams)

  // write some code to send formData to pipedream
  const headers = new Headers();
  headers.append("Content-Type", "application/json");


  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(searchParams),
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
      Location: "https://tistheseasonkc.com",
    },
  };
  // https://tistheseasonkc.com/thank-you
};
