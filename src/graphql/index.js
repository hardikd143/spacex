import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql",
  }),
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 5) {
    try {
      const response = await apolloClient.query({
        query: GET_SPACE_MISSION, // this will fetch the launch data from spacex api with graql query
        variables: { limit }, // number of launches to get
      });
      return response.data.launchesPast;
    } catch (err) {
      throw err;
    }
  }
}

export default new SpaceService();
