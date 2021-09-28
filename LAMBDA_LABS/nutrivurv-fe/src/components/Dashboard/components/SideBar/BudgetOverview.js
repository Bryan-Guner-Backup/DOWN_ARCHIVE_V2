import React from "react";
import { useSelector } from "react-redux";
import { BudgetRing } from "./BudgetRing";

const BudgetOverview = ({ user }) => {
  const {
    fetchEntriesSuccess,
    entries: { dailyTotals },
  } = useSelector((state) => state.user);

  const green = "#CAF1E8";
  const lightGreen = "#F0FFFC";

  const yellow = "#FAF3B8";
  const lightYellow = "#FFFDED";

  const blue = "#97AFD1";
  const lightBlue = "#E8F1FF";

  const red = "#F6A4B8";
  const lightRed = "#FFEBF0";

  if (!fetchEntriesSuccess) return <h2>Loading...</h2>;

  return (
    <>
      <div className="budget-rings">
        <div className="protein-budget">
          <BudgetRing
            id="protein-budget"
            totals={dailyTotals[0].total_protein_g}
            user={user.protein_budget_g}
            size="55"
            pH={0.35}
            c1={red}
            c2={lightRed}
          />
        </div>
        <div className="carb-budget">
          <BudgetRing
            id="carb-budget"
            totals={dailyTotals[0].total_carbs_g}
            user={user.carb_budget_g}
            size="95"
            pH={0.55}
            c1={blue}
            c2={lightBlue}
          />
        </div>
        <div className="fat-budget">
          <BudgetRing
            id="fat-budget"
            totals={dailyTotals[0].total_fat_g}
            user={user.fat_budget_g}
            size="140"
            pH={0.65}
            c1={yellow}
            c2={lightYellow}
          />
        </div>
        <div className="calorie-budget">
          <BudgetRing
            id="calorie-budget"
            totals={dailyTotals[0].total_calories_kcal}
            user={user.caloric_budget_kcal}
            size="185"
            pH={0.75}
            c1={green}
            c2={lightGreen}
          />
        </div>
      </div>
      <div className="d-flex flex-column px-3 budgets">
        <div>
          <h4 className="font-weight-bold mt-4 mb-4 border-bottom text-align-center">
            Total Remaining
          </h4>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="font-weight-bolder" id="Cal">
            Calories
          </h5>
          <h5 className="data font-weight-bolder">
            {dailyTotals[0]
              ? user.caloric_budget_kcal - dailyTotals[0].total_calories_kcal
              : user.caloric_budget_kcal}{" "}
            kcal
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="font-weight-bolder" id="Fa">
            Fats
          </h5>
          <h5 className="data font-weight-bolder">
            {dailyTotals[0]
              ? Math.round(user.fat_budget_g - dailyTotals[0].total_fat_g)
              : user.fat_budget_g}{" "}
            g
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="font-weight-bolder" id="Car">
            Carbs
          </h5>
          <h5 className="data font-weight-bolder">
            {dailyTotals[0]
              ? Math.round(user.carb_budget_g - dailyTotals[0].total_carbs_g)
              : user.carb_budget_g}{" "}
            g
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="font-weight-bolder" id="Pro">
            Protein
          </h5>
          <h5 className="data font-weight-bolder">
            {dailyTotals[0]
              ? Math.round(
                  user.protein_budget_g - dailyTotals[0].total_protein_g
                )
              : user.protein_budget_g}{" "}
            g
          </h5>
        </div>
      </div>
      <div className="d-flex my-3">
        <div>
          <h4 className="mr-5">
            {user.weight_lbs}
            <span className="pl-1" style={{ fontSize: "14px" }}>
              lbs
            </span>
          </h4>
          <p className="pl-2 font-weight-bolder">Weight</p>
        </div>
        <div>
          <h4>
            {user.streak}12
            <span className="pl-1" style={{ fontSize: "14px" }}>
              days
            </span>
          </h4>
          <p className="pl-2 font-weight-bolder">Streak</p>
        </div>
      </div>
    </>
  );
};

export default BudgetOverview;
