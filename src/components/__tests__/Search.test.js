import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import store from "../../utils/store";
import Body from "../Body";
import Shimmer from "../Shimmerr";
import { RESTAURANT_DATA } from "../../mocks/Data";

global.fetch = jest.fn(async () => {
  return {
    json: async () => {
      return RESTAURANT_DATA;
    },
  };
});

afterEach(cleanup);

test("Search Results on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const search = await body.findByTestId("search-test");
  // Perform assertions based on the search element
});

test("should load shimmer", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Shimmer />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-ui");
  expect(shimmer.children).toBeInTheDocument();
});
