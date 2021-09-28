import React, { useEffect } from 'react';
import { Radio, DatePicker, Button, Form, Input, Select } from 'antd';

import { barSelection } from '../../state/actions/barActions';

import { useSelector, useDispatch } from 'react-redux';
import states from '../../helpers/states';

const { RangePicker } = DatePicker;

const { Option } = Select;

const ascOptions = [
  {
    label: 'Most Reports',
    value: true,
  },
  {
    label: 'Least Reports',
    value: false,
  },
];

export default function BarGraph() {
  //react hooks
  const dispatch = useDispatch();

  const barData = useSelector(state => state.bar.data);
  const barLayout = useSelector(state => state.bar.layout);

  // helper functions
  useEffect(() => {
    dispatch(barSelection());
  }, []);

  // FORM ACTIONS

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  // const onChange = event => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(state);
  // };
  // const onRadioChange = e => {
  //   console.log('radio checked', e.target.value);
  //   const { name, value } = e.target;
  //   setState({
  //     [name]: value,
  //   });
  // };
  // const handleDemographic = () => {
  //   setState(prev => ({
  //     ...prev,
  //     showDemographic: !prev.showDemographic,
  //   }));
  // };

  // const addDemographic = value => {
  //   setState(prev => ({
  //     ...prev,
  //     demographic: value,
  //   }));
  // };

  function onChangeDate(value, dateString) {
    console.log('select date', value);
    console.log('string info', dateString);
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      {/* <Plot data={barData} layout={barLayout} /> */}

      {/* Start date and End Date */}
      <RangePicker onChange={onChangeDate} format="YYYY-MM-DD" name="date" />

      {/*  Ascending true or false */}
      {/*  Title: Order By */}
      {/*  Most reports and Least reports  */}

      <Radio.Group
        options={ascOptions}
        // onChange={onChange}
        name="asc"
        optionType="button"
        buttonStyle="solid"
      />

      {/* Group By
        - state
        - national
        - zipcode
        - city
      */}
      {/* <Radio.Group
        options={focusOn}
        name="group_by"
        optionType="button"
        buttonStyle="solid"
      /> */}
      {/* Title: Focus on   */}

      <Select
        showSearch
        style={{ width: 500 }}
        placeholder=" Select State"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {states.map(function(a_state) {
          return (
            <Option value={a_state.value} key={a_state.value}>
              {a_state.label}
            </Option>
          );
        })}
      </Select>
      <Input placeholder="City" />
      <Input placeholder="Zipcode" />

      {/*  Submit and the reset buttons */}
      <Button
        style={{ marginTop: '20px' }}
        type="primary"
        shape="round"
        size="small"
      >
        Submit
      </Button>
      <Button type="primary" shape="round" size="small" style={{ margin: 0 }}>
        Reset Filters
      </Button>
    </Form>
  );
}
