// ** Browse lists of vendors page ** //
import React, { useState, useEffect } from "react"; // removed useEffect as it is not being used below
import axiosWithAuth from "../utils/axiosWithAuth";
// components
import { Map, Search, Nav, Footer, CustomButton } from "../components/index"; // removed Menu, ShoppingCartItems, Modal
//removed map
// styles
import browse from "../styles/scss/browse.module.scss";

const Browse = (props) => {

  const [zipcode, setZipcode] = useState("");
  const [query, setQuery] = useState([]);

  const [vendors, setVendors] = useState([]);
  const [customerZip, setCustomerZip] = useState("");
  // const customerId = localStorage.getItem('user_id');

  const handleChange = (event) => {
    setCustomerZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setZipcode(customerZip);
    getSearchResults(customerZip);
    // query.set("zip", customerZip);
    // props.history.replace(`${props.location.pathname}?${query.toString()}`);
    // getSearchResults(customerZip);
  };

  const getSearchResults = (zip) => {
    //   const queryString = query.join("&");
    let newObj = { data: zip };
    axiosWithAuth()
      // .get(`/vendors/radius/${zip}/5/?${queryString}`)
      .post(`vendors/all/places`, newObj)
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   useEffect(() => {
  //     const query = new URLSearchParams(props.location.search);
  //     const zip = query.get("zip");
  //     if (zip) {
  //       setCustomerZip(zip);
  //       getSearchResults(zip);
  //     }
  //   });
  // removed [] dependency

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#00B2ED" }} className={browse.temp_menu}>
        <Nav />
      </div>

      <div data-testid="browse-wrapper" className={browse.wrapper}>
        <form className={browse.filter_container} onSubmit={handleSubmit}>
          <div className={browse.filter_wrapper}>
            {zipcode === "" && <p>Enter a location to start browsing</p>}
            {zipcode !== "" && <p>Your results for</p>}
            <input
              name="zipcode"
              placeholder="zip code"
              onChange={handleChange}
              value={customerZip}
              className={browse.zipcode_input}
            />
            <div className={browse.custom_button_wrapper}>
              <CustomButton styleClass="green-full" onClick={handleSubmit}>
                Update
              </CustomButton>
            </div>
          </div>
          <div className={browse.filter_wrapper}>
            <p>Filter by vendor category</p>
            {/* <div className={`form-check ${browse.checkbox_container}`}>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="vegetables"
                  type="checkbox"
                  value="vendor_category[in]=Vegetables"
                />
                <label for="defaultCheck1">Vegetables</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="fruits"
                  type="checkbox"
                  value="vendor_category[in]=Fruits"
                />
                <label for="defaultCheck1">Fruits</label>
              </div>

              <div>
                <input
                  onChange={handleQueryChange}
                  name="breads"
                  type="checkbox"
                  value="vendor_category[in]=Breads"
                />
                <label for="defaultCheck1">Breads</label>
              </div>

              <div>
                <input
                  onChange={handleQueryChange}
                  name="beverages"
                  type="checkbox"
                  value="vendor_category[in]=Beverages"
                />
                <label for="defaultCheck1">Beverages</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="spreads"
                  type="checkbox"
                  value="vendor_category[in]=Spreads"
                />
                <label for="defaultCheck1">Spreads</label>
              </div>

              <div>
                <input
                  onChange={handleQueryChange}
                  name="baked goods"
                  type="checkbox"
                  value="vendor_category[in]=Baked goods"
                />
                <label for="defaultCheck1">Baked Goods</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="other"
                  type="checkbox"
                  value="vendor_category[in]=Others"
                />
                <label for="defaultCheck1">Others</label>
              </div>
            </div>
          </div>
          <div className={browse.filter_wrapper}>
            <p>Filter by Diet Category</p>
            <div className={browse.checkbox_container}>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="vegan"
                  type="checkbox"
                  value="diet_categories[in]=Vegan"
                />
                <label for="defaultCheck1">Vegan</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="keto"
                  type="checkbox"
                  value="diet_categories[in]=Keto"
                />
                <label for="defaultCheck1">Keto</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="Dairy Free"
                  type="checkbox"
                  value="diet_categories[in]=Dairy Free"
                />
                <label for="defaultCheck1">Dairy Free</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="gluten free"
                  type="checkbox"
                  value="diet_categories[in]=Gluten Free"
                />
                <label for="defaultCheck1">Gluten Free</label>
              </div>
              <div>
                <input
                  onChange={handleQueryChange}
                  name="vegetarian"
                  type="checkbox"
                  value="diet_categories[in]=Vegetarian"
                />
                <label for="defaultCheck1">Vegetarian</label>
              </div> */}
            {/* </div> */}
          </div>
        </form>

        <Map
          zipcode={zipcode}
          setZipcode={setZipcode}
          vendors={vendors}
          height={300}
          width={1280}
          radius={8046}
        />
        <Search
          zipcode={zipcode}
          vendors={vendors}
          history={props.history}
          location={props.location}
          match={props.match}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Browse;
