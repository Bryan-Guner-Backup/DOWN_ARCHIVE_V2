import { useState } from 'react';

export const useForm = (initialValues = {}, submitCallBack) => {
  //2.This is equivalent to a normal hook
  //Where initial value is comming from whatever we
  //specify in the useForm({}) on the component where we want to use the custom hook
  //Optional now we are using anoter custom hook call useLocalStorage instead of useState
  const [values, setValues] = useState(initialValues);

  //2.This is equivalent to a handleChange function
  const handleChanges = e => {
    //Here we spread the current values name like title, email etc
    // The [e.target.name] refer to allocate the comming value to the name of the field like title, email etc
    //The e.target.value is what is being type inside each field
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log('Handler: ', values);
  };

  //3.Optional: Handle submit or clear from buttons
  const handleSubmit = e => {
    e.preventDefault();
    submitCallBack(values);
    //clear form after submit optional
    setValues(initialValues);
  };

  //   const resetValues = e => {
  //     e.preventDefault();
  //     setValues(initialValues);
  //   };

  //4.FInally we export an array with the values
  //When reusing the functional component
  //The array destructuring is based on positioning and not the name
  //Optional resetValues
  return [values, handleChanges, handleSubmit];
};
