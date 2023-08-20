export const handler = async (event) => {
  console.log(event.body);

  const params = event.body;

  const searchParams = [...new URLSearchParams(params)].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {},
  );
  console.log(searchParams);

  // write some code to send formData to pipedream
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(searchParams),
  };

  try {
    console.log("in try catch block");
    const res = await fetch(
      "https://a9fd563385327894592a01a1baa97f15.m.pipedream.net",
      options,
    );
    console.info("status", res);

    // redirect the submitter to the thank you page
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
    };
  }
};
