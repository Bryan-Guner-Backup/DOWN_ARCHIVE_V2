import React from 'react';
// import { render } from '@testing-library/react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RankingForm from './RankingForm';
import 'mutationobserver-shim';
import { act } from "react-dom/test-utils";

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {}
  };
}
}));

global.MutationObserver = window.MutationObserver;

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

describe('DashboardPage', () => {
  test('renders Dashboard component', () => {
    const slackState = { authed_user: {id: ""} }

    // act(() => {
    //     render(
    //     <RankingForm slackState={{ authed_user: {id: ""} }} />, container);
    //   });
    //   expect(container.textContent).toBe("");
    render(
        <BrowserRouter>
          <RankingForm slackState={slackState} />
        </BrowserRouter>,
    );
  });
});