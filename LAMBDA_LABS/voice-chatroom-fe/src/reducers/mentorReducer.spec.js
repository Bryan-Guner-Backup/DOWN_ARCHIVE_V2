import { FETCH_MENTOR_SUCCESS } from "../actions/mentors";
import mentorReducer from "./mentorReducer";

describe("Mentor Reducer", () => {
  it("should return default state", () => {
    const newState = mentorReducer(undefined, {});
    expect(newState.mentor).toEqual({});
  });

  it("should return new mentor if correct type received", () => {
    const mentor = {
      id: 0,
      mentor_id: 1,
      mentor_name: "bob",
      category_1: "guitar",
      category_2: "music",
      category_3: "pizza",
      mentor_rating: "5",
      mentor_bio: " i love music",
    };

    const newState = mentorReducer(undefined, {
      type: FETCH_MENTOR_SUCCESS,
      payload: mentor,
    });

    expect(newState.mentor).toEqual(mentor);
  });
});
