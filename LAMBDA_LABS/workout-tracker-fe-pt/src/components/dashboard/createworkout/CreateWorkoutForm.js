import React, { useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import { useForm } from "react-hook-form";
import NavigationBar from "../../navigationbar/navigationbar";
import MobileNav from "../../mobilenav/MobileNav";
import House from "../../../assets/forms/house.svg";
import {
  Form,
  InnerForm,
  Title,
  TitleContainer,
  InputContainer,
  Label,
  InputFont,
  Input,
  Select,
  SelectFont,
  TextArea,
  ShareBox,
  ButtonContainer,
  Button,
  ShareLabel,
  HouseImage,
  HouseImg,
  ErrorMessages,
} from "./style";

const initialFormValue = {
  workout_category: "",
  workout_title: "",
  workout_date: "",
  workout_time: "",
  workout_length: "",
  workout_description: "",
};

export const WorkoutForm = () => {
  const [workout, setWorkout] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValue);

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    console.log(formValues);
    axiosWithAuth()
      .post(
        "https://frozen-hamlet-18508.herokuapp.com/api/workouts",
        formValues
      )
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues({
          workout_category: "",
          workout_title: "",
          workout_time: "",
          workout_date: "",
          workout_length: "",
          workout_description: "",
        });
      });
  };

  return (
    <>
      <MobileNav />
      <div style={{display: 'flex'}}>
      <NavigationBar />
      <Form>
        <HouseImg src={House} alt="girl working out" />
        <InnerForm onSubmit={handleSubmit(onSubmit)}>
          <TitleContainer>
            <Title>Create Workout Form</Title>
          </TitleContainer>

          <InputContainer>
            <Label>
              <Select
                name="workout_category"
                value={formValues.workout_category}
                onChange={onChange}
                ref={register({
                  required: "A category is required",
                })}
              >
                <SelectFont value="">Please select a category</SelectFont>
                <SelectFont value="arms">Arms</SelectFont>
                <SelectFont value="abs">Abs</SelectFont>
                <SelectFont value="glutes">Glutes</SelectFont>
                <SelectFont value="legs">Legs</SelectFont>
                <SelectFont value="cardio">Cardio</SelectFont>
              </Select>
            </Label>
          </InputContainer>

          <ErrorMessages>
            {errors.workout_category && errors.workout_category.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Title</Label>
            <InputFont>
              <Input
                id="title"
                type="text"
                name="workout_title"
                placeholder="Workout Title"
                onChange={onChange}
                value={formValues.workout_title}
                ref={register({
                  required: "A title for your workout is required",
                  maxLength: {
                    value: 25,
                    message: "Maximum of 25 characters"
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum of 3 characters"
                  }
                })}
              />
            </InputFont>
          </InputContainer>

          <ErrorMessages>
          {errors.workout_title && errors.workout_title.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Date</Label>
            <InputFont>
              <Input
                id="date"
                type="date"
                name="workout_date"
                placeholder="Date"
                onChange={onChange}
                value={formValues.workout_date}
                ref={register({
                  required: "A valid date is required"
                })}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Time</Label>
            <InputFont>
              <Input
                id="time"
                type="time"
                name="workout_time"
                placeholder="Example: 2:00 pm"
                onChange={onChange}
                value={formValues.workout_time}
                ref={register({
                  required: "A valid time is required"
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.workout_time && errors.workout_time.message}
          </ErrorMessages>

          <ErrorMessages>
            {errors.workout_date && errors.workout_date.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Duration</Label>
            <InputFont>
              <Input
                id="length"
                type="text"
                name="workout_length"
                placeholder="(minutes or hours) Example: 30m or 1hr"
                onChange={onChange}
                value={formValues.workout_length}
                ref={register({
                  required: "A workout duration is required"
                })}
              />
            </InputFont>
          </InputContainer>

          <ErrorMessages>
            {errors.workout_length && errors.workout_length.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Description</Label>
            <InputFont>
              <TextArea
                id="description"
                type="text"
                name="workout_description"
                placeholder="Description"
                onChange={onChange}
                value={formValues.workout_description}
                ref={register({
                  required: "A short description is required"
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.workout_description && errors.workout_description.message}
          </ErrorMessages>
              
          <br />
          <ShareBox>
            <input
              className="private-input"
              type="checkbox"
              name="Private Workout"
              onClick={() => console.log("Clicked!")}
            />
            <ShareLabel>Private</ShareLabel>
          </ShareBox>
          <ButtonContainer>
            <Button type="submit" disabled={formState.isSubmitting}>Submit</Button>
          </ButtonContainer>
        </InnerForm>
      </Form>
      </div>
    </>
  );
};
