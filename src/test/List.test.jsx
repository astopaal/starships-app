import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";
import { store } from "../redux/store.js";
import { Provider } from "react-redux";

describe("List Component Tests", () => {
  it("should renders the list component and search input.", () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(
      screen.getByPlaceholderText("Search by name or model...")
    ).toBeInTheDocument();
  });

});
