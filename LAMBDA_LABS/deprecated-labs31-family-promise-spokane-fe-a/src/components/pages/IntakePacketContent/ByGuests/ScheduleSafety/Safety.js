/*
Signatures for Shelter Schedule, Expectations and Safety Agreement
*/

import React from 'react';

//Previous/Next buttons
import IntakeButton from '../../IntakeButtons';

//Ant Design imports (https://ant.design/components/overview/)
import { Form, Input, Card, Progress, DatePicker } from 'antd';

const Safety = ({
  navigation,
  formData,
  setForm,
  tempFormStyle,
  count,
  setCount,
  nameString,
  steps,
  step,
}) => {
  // //Progress bar
  const pageNumber = steps.findIndex(item => item === step);
  const pages = steps.length;
  const percent = ((pageNumber + 1) / pages) * 100;

  // //FamilyMember Data Structure from ../../intakePacket.jsx (props)
  // const { familyMember } = formData;

  return (
    <div style={tempFormStyle}>
      Progress bar
      <Progress percent={percent} status="active" showInfo={false} />
      <Card
        title="Shelter Schedule, Expectations and Safety Agreement (continued)"
        bordered={false}
      >
        <IntakeButton navigation={navigation} />
        <Form>
          <strong>
            <u>Night Shelter Expectations:</u>
          </strong>

          <Form.Item>
            <strong>
              Everyone sleeps on mats on the floor, so we need to keep the
              floors in the shelter as clean and bug-free as possible. So we do
              NOT allow:
            </strong>
            <ul>
              <li>
                Personal bedding or pillows, except 4x4 blanket for child 12 and
                under
              </li>
              <li>Food or drink, except baby food or bottled water</li>
              <li>Strollers</li>
            </ul>
          </Form.Item>

          <strong>
            <u>Night Shelter Safety:</u>
          </strong>

          <Form.Item>
            <strong>
              We wish to keep the Night Shelter a safe and calming space for
              families. So:
            </strong>
            <ul>
              <li>There are no designated spots in night shelter.</li>
              <li>Kids must always be in parents??? line of sight.</li>
              <li>
                If using the smoking area, children must accompany parents.
              </li>
              <li>
                Cry room is reserved for upset children during the night to use
                until calm.
              </li>
              <li>
                Respite room is reserved for special accommodations that will
                require Dr written note
              </li>
              <li>
                All guests 16 and older are expected to help clean shelter in
                morning.
              </li>
              <li>
                Please help children under 5 use the restroom to help keep
                restroom clean
              </li>
              <li>
                Yelling, screaming, cursing, and spanking are not acceptable
                forms of discipline at Open Doors and may result in suspension
                from the shelter and/or be reported to Child Services
              </li>
            </ul>
          </Form.Item>

          <Form.Item>
            <Input bordered={false} placeholder="First & Last Name" />
            <hr />
            CLIENT SIGNATURE (adult)
            <DatePicker />
            <Input bordered={false} placeholder="First & Last Name" />
            <hr />
            CLIENT SIGNATURE (adult)
            <DatePicker />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Safety;
