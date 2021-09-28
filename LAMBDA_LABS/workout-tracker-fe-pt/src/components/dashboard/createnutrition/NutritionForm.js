import React, { useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import { useForm } from "react-hook-form";
import NavigationBar from "../../navigationbar/navigationbar";
import MobileNav from "../../mobilenav/MobileNav";
import Food from "../../../assets/forms/food.svg";
import {
  Form,
  InnerForm,
  Title,
  TitleContainer,
  InputContainer,
  Label,
  Select,
  SelectFont,
  InputFont,
  Input,
  TextArea,
  ShareBox,
  ButtonContainer,
  Button,
  ShareLabel, 
  FoodImg,
  ErrorMessages,
} from "./style";

const initialFormValue = {
  meal_date: "",
  meal_time: "",
  meal_category: "",
  food_name: "",
  food_quantity: "",
  food_measure: "",
  food_calories: "",
  food_fat: "",
  food_protein: "",
  food_carbs: "",
  food_fiber: "",
  meal_notes: "",
};

export const NutritionForm = () => {
  const [nutrition, setNutrition] = useState([]);
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
      .post("https://frozen-hamlet-18508.herokuapp.com/api/diets", formValues)
      .then((res) => {
        console.log(res);
        setNutrition(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues({
          meal_date: "",
          meal_time: "",
          meal_category: "",
          food_name: "",
          food_quantity: "",
          food_measure: "",
          food_calories: "",
          food_fat: "",
          food_protein: "",
          food_carbs: "",
          food_fiber: "",
          meal_notes: "",
        });
      });
  };

  return (
    <>
      <MobileNav />
      <div style={{display: 'flex'}}>
      <NavigationBar />
      <Form>
        <FoodImg src={Food}/>
        <InnerForm onSubmit={handleSubmit(onSubmit)}>
          <TitleContainer>
            <Title>Create a Food Entry</Title>
          </TitleContainer>

          <InputContainer>
            <Label>
              <Select
                name="meal_category"
                value={formValues.meal_category}
                onChange={onChange}
                ref={register({
                  required: "A category is required"
                })}
              >
                <SelectFont value="">Please select an category</SelectFont>
                <SelectFont value="breakfast">Breakfast</SelectFont>
                <SelectFont value="lunch">Lunch</SelectFont>
                <SelectFont value="dinner">Dinner</SelectFont>
                <SelectFont value="snacks">Snacks</SelectFont>
              </Select>
            </Label>
          </InputContainer>
          <ErrorMessages>
            {errors.meal_category && errors.meal_category.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Date</Label>
            <InputFont>
              <Input
                id="date"
                type="date"
                name="meal_date"
                placeholder="Date"
                onChange={onChange}
                value={formValues.meal_date}
                ref={register({
                  required: "A valid date is required"
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.meal_date && errors.meal_date.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Time</Label>
            <InputFont>
              <Input
                id="time"
                type="time"
                name="meal_time"
                placeholder="Example: 2:00 pm"
                onChange={onChange}
                value={formValues.meal_time}
                ref={register({
                  required: "A valid time is required"
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.meal_time && errors.meal_time.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Food Item</Label>
            <InputFont>
              <Input
                id="name"
                type="text"
                name="food_name"
                placeholder="Food Item"
                onChange={onChange}
                value={formValues.food_name}
                ref={register({
                  required: "A food name is required"
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_name && errors.food_name.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Quantity</Label>
            <InputFont>
              <Input
                id="quantity"
                type="text"
                name="food_quantity"
                placeholder="Quantity"
                onChange={onChange}
                value={formValues.food_quantity}
                ref={register({
                  required: "A quantity is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_quantity && errors.food_quantity.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Measurement</Label>
            <InputFont>
              <Input
                id="measure"
                type="text"
                name="food_measure"
                placeholder="Cups, oz, or grams(not required)"
                onChange={onChange}
                value={formValues.food_measure}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Calories</Label>
            <InputFont>
              <Input
                id="calories"
                type="text"
                name="food_calories"
                placeholder="Calories"
                onChange={onChange}
                value={formValues.food_calories}
                ref={register({
                  required: "A number of calories is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_calories && errors.food_calories.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Total fat in grams</Label>
            <InputFont>
              <Input
                id="fat"
                type="text"
                name="food_fat"
                placeholder="Fat"
                onChange={onChange}
                value={formValues.food_fat}
                ref={register({
                  required: "A number of fat grams is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_fat && errors.food_fat.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Total protein in grams</Label>
            <InputFont>
              <Input
                id="protein"
                type="text"
                name="food_protein"
                placeholder="Protein"
                onChange={onChange}
                value={formValues.food_protein}
                ref={register({
                  required: "A number of protein grams is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_protein && errors.food_protein.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Carbs</Label>
            <InputFont>
              <Input
                id="carbs"
                type="text"
                name="food_carbs"
                placeholder="Total carbs in grams"
                onChange={onChange}
                value={formValues.food_carbs}
                ref={register({
                  required: "A number of carbs in grams is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_carbs && errors.food_carbs.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Fiber</Label>
            <InputFont>
              <Input
                id="fiber"
                type="text"
                name="food_fiber"
                placeholder="Total fiber in grams"
                onChange={onChange}
                value={formValues.food_fiber}
                ref={register({
                  required: "A number of fiber in grams is required",
                  pattern: {
                    value: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                    message: "Please enter a valid number",
                  }
                })}
              />
            </InputFont>
          </InputContainer>
          <ErrorMessages>
            {errors.food_fiber && errors.food_fiber.message}
          </ErrorMessages>

          <InputContainer>
            <Label>Notes</Label>
            <InputFont>
              <TextArea
                id="notes"
                type="text"
                name="meal_notes"
                placeholder="Notes"
                onChange={onChange}
                value={formValues.meal_notes}
              />
            </InputFont>
          </InputContainer>

          <br />
          <ShareBox>
            <input
              className="private-input"
              type="checkbox"
              name="private"
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
