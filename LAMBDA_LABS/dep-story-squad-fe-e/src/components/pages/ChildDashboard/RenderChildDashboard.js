import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { getChildDashboardText, modalButtonText } from '../../../utils/helpers';

import adventure_passport from '../../../assets/images/child_dashboard_images/adventure_passport.svg';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import trophy_room from '../../../assets/images/child_dashboard_images/trophy_room.svg';

const RenderChildDashboard = props => {
  const { push } = useHistory();
  const [modalVisible, setModalVisible] = useState(true);
  const { hasRead, hasWritten, hasDrawn } = props;
  const [instructionText, setInstructionText] = useState('');
  useEffect(() => {
    setInstructionText(getChildDashboardText(hasRead, hasDrawn, hasWritten));
  }, [hasRead, hasWritten, hasDrawn]);

  const handleAcceptMission = e => {
    if (hasDrawn && hasWritten && hasRead) {
      push('/child/join');
    } else {
      push('/child/mission-control');
    }
  };

  const handleJoinSquad = e => {
    push('/child/join');
  };

  const handleFaceoffs = e => {
    push('/child/match-up');
  };

  return (
    <>
      <Header displayMenu={true} />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={instructionText}
        buttonText={modalButtonText.ok}
      />
      <div className="dash-container">
        <Row className="toprow">
          <Col
            className="accept-mission"
            xs={24}
            sm={13}
            onClick={handleAcceptMission}
          >
            {hasDrawn && hasWritten && hasRead ? (
              <p className="accept-mission-text">JOIN YOUR SQUAD!</p>
            ) : (
              <p className="accept-mission-text">ACCEPT THE MISSION!</p>
            )}
          </Col>
          <Col className="change-avatar" xs={24} sm={11}>
            <img
              className="child-dash-img"
              src={change_your_avatar}
              alt="Change Your Avatar Button"
            />
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="adventure-passport" xs={24} sm={11}>
            <img
              className="child-dash-img"
              src={adventure_passport}
              alt="Adventure Passport Button"
              onClick={handleJoinSquad}
            />
          </Col>
          <Col className="trophy-room" xs={24} sm={13}>
            <img
              className="child-dash-img"
              src={trophy_room}
              alt="Trophy Room Button"
              onClick={handleFaceoffs}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default connect(state => ({
  hasRead: state.tasks.hasRead,
  hasWritten: state.tasks.hasWritten,
  hasDrawn: state.tasks.hasDrawn,
}))(RenderChildDashboard);
