import React from "react";
import { mount } from "enzyme";
import NewsCard from "./NewsCard";
// import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { DarkModeContext } from "../../DarkModeContext";
import toJSON from "enzyme-to-json";
// import findByTestAttr from '../../tests/utils'

describe("<NewsCard /> component testing", () => {
  const darkMode = false;
  const setDarkMode = jest.fn();
  const user = {};
  const setUser = jest.fn();
  let component;
  const profiles = [];
  const testProps = {
    cover_image: null,
    created_at: "2020-07-15T13:40:32Z",
    description: "test-description",
    id: 398838,
    published_at: "2020-07-15T13:45:09Z",
    readable_publish_date: "Jul 15",
    social_image: "test-image",
    tag_list:  ["typescript", "javascript", "angular"],
    title: "test-title",
    type_of: "test-article",
    url: "test-news-url"
  }
  beforeEach(() => {
    component = mount(
      // <MemoryRouter initialEntries={["/news"]}>
        <UserContext.Provider value={{ user, setUser }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <NewsCard data={testProps} />
          </DarkModeContext.Provider>
        </UserContext.Provider>
      // </MemoryRouter>
    );
  });

  it("should pass snapshot testing", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

   it("should render <NewsCard /> component correctly ", () => {
    expect(component.exists()).toBe(true)
  });

  
});


