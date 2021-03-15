import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_ACCESS_TOKEN,
});

export default client;
