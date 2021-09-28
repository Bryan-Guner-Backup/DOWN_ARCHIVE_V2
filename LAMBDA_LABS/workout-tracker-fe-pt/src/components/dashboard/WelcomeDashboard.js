import React, { useEffect, useState } from "react";
import Workout from "../../assets/workout.svg";
import { WelcomeTitle, Image, Dashboard, QuoteContainer } from "./style";
import axios from "axios";
const WelcomeDashboard = () => {
  const [quote, setQuote] = useState({});
  const getQuote = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <Dashboard>
      <WelcomeTitle>
        This dashboard is your hub for staying on track. The navigation bar on
        the left side will help you find your way around.
      </WelcomeTitle>
      <Image src={Workout} alt="Man and woman exercising"></Image>
      <QuoteContainer>
        <p> Random Quote: {quote.content}</p>
        <p>  - {quote.author}</p>
      </QuoteContainer>
    </Dashboard>
  );
};

export default WelcomeDashboard;
