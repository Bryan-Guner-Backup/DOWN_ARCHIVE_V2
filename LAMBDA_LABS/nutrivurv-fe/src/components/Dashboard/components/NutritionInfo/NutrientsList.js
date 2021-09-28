import React from "react";

export const Fat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Total Fat</h3>
      {totalNutrients.FAT ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.FAT.quantity)}
            {totalNutrients.FAT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const SatFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Saturated Fat</h4>
      {totalNutrients.FASAT ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FASAT.quantity)}
            {totalNutrients.FASAT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const TransFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Trans Fat</h4>
      {totalNutrients.FATRN ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FATRN.quantity)}
            {totalNutrients.FATRN.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const PolyFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Polyunsaturated Fat</h4>
      {totalNutrients.FAPU ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FAPU.quantity)}
            {totalNutrients.FAPU.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const MonoFat = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Monounsaturated Fat</h4>
      {totalNutrients.FAPU ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FAPU.quantity)}
            {totalNutrients.FAPU.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Iron = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Iron</h3>
      {totalNutrients.FE ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.FE.quantity)}
            {totalNutrients.FE.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Potassium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Potassium</h3>
      {totalNutrients.K ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.K.quantity)}
            {totalNutrients.K.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Calcium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Calcium</h3>
      {totalNutrients.CA ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CA.quantity)}
            {totalNutrients.CA.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const VitaD = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Vitamin D</h3>
      {totalNutrients.VITD ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.VITD.quantity)}
            {totalNutrients.VITD.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Protein = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Protein</h3>
      {totalNutrients.PROCNT ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.PROCNT.quantity)}
            {totalNutrients.PROCNT.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Chol = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Cholesterol</h3>
      {totalNutrients.CHOLE ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CHOLE.quantity)}
            {totalNutrients.CHOLE.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export const Sodium = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Sodium</h3>
      {totalNutrients.NA ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.NA.quantity)}
            {totalNutrients.NA.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Carbs = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h3 className="font-weight-bold">Total Carbohydrate</h3>
      {totalNutrients.CHOCDF ? (
        <div className="text-right">
          <h4 className="font-weight-bold">
            {Math.round(totalNutrients.CHOCDF.quantity)}
            {totalNutrients.CHOCDF.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Fiber = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Dietary Fiber</h4>
      {totalNutrients.FIBTG ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.FIBTG.quantity)}
            {totalNutrients.FIBTG.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
export const Sugar = ({ totalNutrients }) => {
  return (
    <div className="d-flex justify-content-between pl-2">
      <h4>Sugar</h4>
      {totalNutrients.SUGAR ? (
        <div className="text-right">
          <h4>
            {Math.round(totalNutrients.SUGAR.quantity)}
            {totalNutrients.SUGAR.unit}
          </h4>
        </div>
      ) : null}
    </div>
  );
};
