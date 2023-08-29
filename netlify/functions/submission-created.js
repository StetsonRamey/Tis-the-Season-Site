export const handler = async (event) => {
  const url = "https://7385ae90469b0ea76d3107d8ce0332f0.m.pipedream.net";

  // what is the shape of the event form data we are hooking into?
  const { data } = JSON.parse(event.body.payload);
  console.log(data);

  const form = event.body.payload.form_name;
  console.log(form);

  const body = {
    data,
    form,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  console.log({options})

  // return for testing
  return {
    statusCode: 200,
    body: "You're in testing mode, we've got changes",
  };

  // try {
  //   const res = await fetch(url, options);
  //   const data = await res.json();
  //   console.log(data);

  //   return {
  //     statusCode: 302,
  //     headers: {
  //       Location: "https://tistheseasonkc.com/thank-you",
  //     },
  //   };
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ error: "fetch failed" }),
  //   };
  // }
};
