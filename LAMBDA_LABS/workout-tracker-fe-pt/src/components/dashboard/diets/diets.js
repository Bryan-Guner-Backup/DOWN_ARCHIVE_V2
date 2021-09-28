import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import MobileNav from "../../mobilenav/MobileNav";
import {
  CardBody,
  CardCategory,
  CardContent,
  CardDescription,
  CardTitle,
  MainContent,
  MediaContent,
  WorkoutLength,
  NavCircle,
} from "./style";
import NavigationBar from "../../navigationbar/navigationbar";
import image1 from "../../../assets/images/diets/diet1.jpeg";
import image2 from "../../../assets/images/diets/diet2.jpeg";
import image3 from "../../../assets/images/diets/diet3.jpeg";
import image4 from "../../../assets/images/diets/diet4.jpeg";
import image5 from "../../../assets/images/diets/diet5.jpeg";
import image6 from "../../../assets/images/diets/diet6.jpeg";
import image7 from "../../../assets/images/diets/diet7.jpeg";
import image8 from "../../../assets/images/diets/diet8.jpeg";
import image9 from "../../../assets/images/diets/diet9.jpeg";
import image10 from "../../../assets/images/diets/diet10.jpeg";
import image11 from "../../../assets/images/diets/diet11.jpeg";
import image12 from "../../../assets/images/diets/diet12.jpeg";
import image13 from "../../../assets/images/diets/diet13.jpeg";
import image14 from "../../../assets/images/diets/diet14.jpeg";
import image15 from "../../../assets/images/diets/diet15.jpeg";

const Diets = () => {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/diets/public`)
      .then((res) => {
        console.log("diet data", res.data);
        setDiet(res.data);
      })
      .catch((err) => {
        console.log("Error in Diets", err);
      });
  }, [setDiet]);

  return (
    <>
      <NavCircle>
        <MobileNav />
      </NavCircle>
      <NavigationBar />
      <MainContent>
        <CardContent>
          {diet.map((item) => {
            const images = [
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
              image8,
              image9,
              image10,
              image11,
              image12,
              image13,
              image14,
              image15,
            ];
            return (
              <CardBody key={item.id}>
                <CardTitle>{item.food_name}</CardTitle>
                <CardCategory data-testid="test">
                  {item.meal_category}
                </CardCategory>
                <MediaContent src={images[Math.floor(Math.random() * 15)]} />

                <CardDescription>
                  <p>{item.food_quantity}</p>
                  <p>{item.food_measure}</p>
                  <WorkoutLength> {item.food_calories} cal</WorkoutLength>
                </CardDescription>
              </CardBody>
            );
          })}
        </CardContent>
      </MainContent>
    </>
  );
};

export default Diets;
