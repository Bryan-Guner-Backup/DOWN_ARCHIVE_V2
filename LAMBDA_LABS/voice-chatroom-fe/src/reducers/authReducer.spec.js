import { userConstants } from "../actions/types";
import authReducer from "./auth";

describe("Auth Reducer", () => {

  it("should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual({
      user: {
        id: 0,
        email: "",
        given_name: "",
        family_name: "",
        username: "",
        location: "",
        interest_1: "",
        interest_2: "",
        interest_3: "",
        created_at: "",
        avatar: "",
        isMentor: false,
        user_bio: "",
        user_rating: 0,
      },
      isAuthenticated: false,
      isLoading: false,
      isLoggedIn: false,
      error: null,
    });
  });

  it('should return new user if correct type received', () => {
      const user =  {
        id: 0,
        email: "test@test.com",
        given_name: "test",
        family_name: "user",
        username: "testy",
        location: "testing center",
        interest_1: "take test",
        interest_2: "",
        interest_3: "",
        created_at: "",
        avatar: "",
        isMentor: false,
        user_bio: "",
        user_rating: 0,
      }

      const newState = authReducer(undefined, {
          type: userConstants.LOGIN_SUCCESS,
          payload: user
      })

      expect(newState.user).toEqual(user)
  })
});
