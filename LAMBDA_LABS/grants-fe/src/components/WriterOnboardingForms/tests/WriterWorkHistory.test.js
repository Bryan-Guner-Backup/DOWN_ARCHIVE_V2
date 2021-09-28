import React, { useState as useStateMock } from "react";
import { axe } from "jest-axe";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";

import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import WriterWorkHistoryForm from "../WriterWorkHistoryForm.js";
import WriterWorkCard from "../WriterWorkCard";
import { initialState as initialReducerState } from "../../../store/reducers/onboardingReducer";
import reducer from "../../../store/reducers/onboardingReducer";

const enableButton = jest.fn(() => {});
const setDisableWorkHistorySubmitButtonMock = jest.fn(() => {});

let writerWorkFormStateMock = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  current_position: true,
  responsibilities: "",
};

let setWriterWorkFormStateMock = jest.fn(function () {
  return (writerWorkFormStateMock = {
    company: "Life",
    position: "Human",
    start_date: "1980-01-18",
    end_date: "",
    current_position: true,
    responsibilities: "Just a human, doing human things.",
  });
});

let formHelperTextMock = {};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setWriterWorkFormStateMock]);
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();

  console.error.mockRestore();
});

function render(
  ui,
  {
    initialState = initialReducerState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test("accessible -  WriterWorkHistoryForm pass axe", async () => {
  const { container } = rtlRender(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("Work History header displays", () => {
  const { getByText } = rtlRender(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  expect(getByText(/work history/i)).toBeInTheDocument();
});

test("inputs are visible", () => {
  const { getByLabelText } = rtlRender(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />
  );

  const companyLabelText = getByLabelText(/company/i);
  const positionLabelText = getByLabelText(/position/i);
  const start_dateLabelText = getByLabelText(/work start date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilities/i);
  //   const end_dateLabelText = getByLabelText(/work end date/i);

  expect(companyLabelText).toBeVisible();
  expect(positionLabelText).toBeVisible();
  expect(start_dateLabelText).toBeVisible();
  expect(responsibilitiesLabelText).toBeVisible();
});

test("form submit adds Current Position to state and renders that state to WritersWorkCard", () => {
  const { getByLabelText, queryByLabelText } = render(
    <WriterWorkHistoryForm
      workHistoryFormState={writerWorkFormStateMock}
      formHelperText={formHelperTextMock}
      enableButton={enableButton}
      setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButtonMock}
    />,
    {
      initialState: {
        user: {},
        isLoading: false,
        login: {
          user: {
            id: 1,
          },
        },
      },
    }
  );

  const companyLabelText = getByLabelText(/company/i);
  const positionLabelText = getByLabelText(/position/i);
  const start_dateLabelText = getByLabelText(/work start date/i);
  const responsibilitiesLabelText = getByLabelText(/responsibilities/i);
  const end_dateLabelText = queryByLabelText(/work end date/i);

  userEvent.type(companyLabelText, {
    target: { value: "Life" },
  });
  userEvent.type(positionLabelText, {
    target: { value: "Human" },
  });
  userEvent.selectOptions(start_dateLabelText, {
    target: { value: "1980-01-18" },
  });
  userEvent.type(responsibilitiesLabelText, {
    target: { value: "Just a human, doing human things." },
  });

  expect(end_dateLabelText).toBeNull();
  expect(writerWorkFormStateMock).toEqual({
    company: companyLabelText.value,
    position: positionLabelText.value,
    start_date: start_dateLabelText.value,
    end_date: "",
    current_position: true,
    responsibilities: responsibilitiesLabelText.value,
  });

  const { getByTestId, getByText } = render(
    <WriterWorkCard writersWork={writerWorkFormStateMock} />,
    {
      initialState: {
        user: {},
        isLoading: false,
        login: {
          user: {
            id: 1,
          },
        },
      },
    }
  );
  const companyHeader = getByTestId(/company-header/i);
  const companyWorkedFor = getByText(/life/i);
  const positionHeader = getByTestId(/position-header/i);
  expect(companyHeader).toBeVisible();
  expect(companyWorkedFor).toBeVisible();
  expect(positionHeader).toBeVisible();
  expect(positionHeader.innerHTML).toBe("Position: Human");
});
