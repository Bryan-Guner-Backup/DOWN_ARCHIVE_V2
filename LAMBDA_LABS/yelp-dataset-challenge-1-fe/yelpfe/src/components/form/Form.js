import React from 'react';
import './form.css';
function Form(props){
    return (
      <>
          <div className="form-wrapper">
            <form className="form" onSubmit={props.updateProject}>
              <div className="field">
                <label className="label" htmlFor="project">Review Text: </label>
                <div className="ui left icon input">
                  <input
                    className="input-text"
                    type="text"
                    id="project"
                    name={props.project}
                    onChange={props.changeHandler}
                    defaultValue={props.project}
                    // disabled={props.disabled}
                  />
                  <i aria-hidden="true" className="briefcase icon" />
                </div>
              </div>
              <div className="container">
                <button className="ui red button" type="submit">
                  Submit
                </button>
                {/* <button className="ui red button" onClick={this.deleteProject}>
                  Delete
                </button> */}
              </div>
            </form>
          </div>
      </>
    );
}

export default Form;