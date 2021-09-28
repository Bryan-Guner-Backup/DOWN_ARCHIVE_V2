import React from "react";
import AddHashtag from "./AddHashtag.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test addHashtag component", () => {
  let AddHashtagComponent;
  beforeEach(() => {
    AddHashtagComponent = render(
      <AddHashtag hashtags={[{ id: 1, title: "#Vegan" }]} />
    );
  });

  test("AddHashtag component renders with props", () => {
    expect(AddHashtagComponent.getByText(/Add some hashtags for your event/i));
    expect(AddHashtagComponent.getByText(/#Vegan/i));
  });
});
