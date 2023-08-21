// export const handler = async (event) => {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   const body = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json; charset=UTF-8" },
//     body: JSON.stringify(body),
//   };

//   try {
//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data);

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "fetch failed" }),
//     };
//   }
// };

export const handler = async (event) => {
  const url = "https://7385ae90469b0ea76d3107d8ce0332f0.m.pipedream.net";

  const body = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

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
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "fetch failed" }),
    };
  }
};
