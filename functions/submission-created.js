exports.handler = async (event) => {
  console.log(JSON.parse(event.body).payload);
};
