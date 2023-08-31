// post / request / get pattern with a function
export const handler = async (event) => {
  // don't need to do anything but return to the
  // redirect page so dupe form submissons don't happen
  return {
    statusCode: 307,
    headers: {
      Location: "https://tistheseasonkc.com/thank-you"
    }
  }
}
