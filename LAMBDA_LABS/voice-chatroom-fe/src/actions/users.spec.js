import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./users";
import * as types from "./users";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_ALL_SUCCESS when fetching users has been done", () => {
    fetchMock.getOnce("/users", {
      body: [
        { given_name: "bob", family_name: "shultz" },
        { given_name: "rick", family_name: "smitts" },
        { given_name: "duke", family_name: "nukem" },
      ],
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: types.FETCH_ALL_REQUEST },
      {
        type: types.FETCH_ALL_SUCCESS,
        body: {
          users: [
            { given_name: "bob", family_name: "shultz" },
            { given_name: "rick", family_name: "smitts" },
            { given_name: "duke", family_name: "nukem" },
          ],
        },
      },
    ];
    const store = mockStore({ users: [] });

    return store.dispatch(actions.getAllUsers()).then(() => {
      expect(store.getAllUsers()).toEqual(expectedActions);
    });
  });
});
