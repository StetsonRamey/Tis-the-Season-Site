export const handler = async (event) => {
  const url = "https://7385ae90469b0ea76d3107d8ce0332f0.m.pipedream.net";

  const fakeSubmisson = {
    payload: {
      data: {
        firstName: "Stetson",
        lastName: "Ramey",
        email: "me@stetson.dev",
        tel: "(307)-214-5159",
        addressSearch: "222200 Test Ave",
        city: "Some City",
        state: "MO",
        zip: "93105",
        "Light Color": "Not Sure",
        message: "TESTTSTSTETSTEE",
        ip: "47.155.219.38",
        user_agent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Sdafari/537.36",
        referrer:
          "https://deploy-preview-35--tistheseasonkc.netlify.app/contact",
      },
      form_name: "tts-new-lead",
    },
  };

  // what is the shape of the event form data we are hooking into?
  const { payload } = fakeSubmisson;

  const data = payload.data;
  const form = payload["form_name"];
  console.log(data);
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

  console.log({ options });

  // return for testing
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    return {
      statusCode: 302,
      headers: {
        Location: "https://tistheseasonkc.com/thank-you",
      },
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "fetch failed" }),
    };
  }

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
