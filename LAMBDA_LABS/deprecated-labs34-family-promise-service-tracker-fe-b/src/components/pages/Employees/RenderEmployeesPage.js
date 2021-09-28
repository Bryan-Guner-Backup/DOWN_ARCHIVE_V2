import React, { useState, useEffect } from 'react';
import { addEmployeeAction } from '../../../state/actions';
import { connect } from 'react-redux';
import { Button } from 'antd';
import AddEmployeeForm from '../../forms/AddEmployeeForm';

function RenderEmployeePage({ addEmployeeAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = employeeObj => {
    addEmployeeAction(employeeObj);
    setVisible(false);
  };

  return (
    <>
      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Employee
        </Button>
        <AddEmployeeForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </>
  );
}

export default connect(null, { addEmployeeAction })(RenderEmployeePage);
