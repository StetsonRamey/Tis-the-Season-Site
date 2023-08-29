export const handler = async (event) => {
  // pipedream webhook url
  const url = "https://7385ae90469b0ea76d3107d8ce0332f0.m.pipedream.net";

  // what is the shape of the event form data we are hooking into?
  const { payload } = JSON.parse(event.body);

  const data = payload.data
  const form = payload["form_name"]

  // send over the data fields from the form and the form name for parsing
  const body = {
    data,
    form,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    // this is the response message we get back from pipedream
    console.log(data);

    return {
      // redirect the user to the thank you page
      statusCode: 302,
      headers: {
        Location: "https://tistheseasonkc.com/thank-you",
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "fetch failed" }),
    };
  }
};
