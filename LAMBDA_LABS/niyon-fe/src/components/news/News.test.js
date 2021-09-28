import React from "react";
import { mount } from "enzyme";
import News from "./News";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { DarkModeContext } from "../../DarkModeContext";
import toJSON from "enzyme-to-json";
// import findByTestAttr from '../../tests/utils'

describe("<Search /> component testing", () => {
  const darkMode = false;
  const setDarkMode = jest.fn();
  const user = {};
  const setUser = jest.fn();
  let component;
  const profiles = [];
  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={["/news"]}>
        <UserContext.Provider value={{ user, setUser }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <News />
          </DarkModeContext.Provider>
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  it("should pass snapshot testing", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("should render <News /> component", () => {
    expect(component.find("News")).toBeTruthy();
  });

  it("should render <Header /> component", () => {
    expect(component.find("Header")).toBeTruthy();
  });

  it("should render <Footer /> component", () => {
    expect(component.find("Footer")).toBeTruthy();
  });
});


