import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Header } from '../../common';
import { Row, Col, InputNumber, Button, notification } from 'antd';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';
import { InstructionsModal } from '../../common';
import { modalInstructions, modalButtonText } from '../../../utils/helpers';

import { SubmissionViewerModal } from '../../common';

const PointShare = props => {
  const [totalPoints, setTotalPoints] = useState(60);
  const [points, setPoints] = useState({
    storyOne: 10,
    storyTwo: 10,
    drawingOne: 10,
    drawingTwo: 10,
  });
  const [teamPoints, setTeamPoints] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const { authState } = useOktaAuth();

  const formSubmit = () => {
    if (totalPoints > 0) {
      notification.error({
        message: 'You still have points remaining!',
      });
      return;
    }
    setTeamPoints([
      {
        WritingPoints: points.storyOne,
        DrawingPoints: points.drawingOne,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child1.SubmissionID,
      },
      {
        WritingPoints: points.storyTwo,
        DrawingPoints: points.drawingTwo,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child2.SubmissionID,
      },
    ]);
  };

  useEffect(() => {
    if (teamPoints) {
      submitPoints(authState, teamPoints);
    }
  }, [teamPoints, authState]);

  // Change points remaining display if inputs are valid
  useEffect(() => {
    if (typeof calculateInputSum() === 'number') {
      setTotalPoints(100 - calculateInputSum());
    }
    // eslint-disable-next-line
  }, [points]);

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  const calculateMaxInput = inputKey => {
    let sum = 0;
    for (const [key, value] of Object.entries(points)) {
      if (key !== inputKey) {
        sum += value;
      }
    }
    return 100 - sum;
  };

  const calculateInputSum = () => {
    let sum = 0;
    for (const [, value] of Object.entries(points)) {
      sum += value;
    }
    return sum;
  };

  const handleChanges = (value, inputKey) => {
    if (value < 10) {
      value = 10;
    }
    if (value > calculateMaxInput(inputKey)) {
      value = calculateMaxInput(inputKey);
    }
    setPoints({
      ...points,
      [inputKey]: value,
    });
  };

  return (
    <>
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={modalInstructions.sharePoints}
        buttonText={modalButtonText.accept}
      />

      {/* Header requires countDown={true}  */}
      {showModal && (
        <SubmissionViewerModal
          showModal={showModal}
          content={modalContent}
          closeModal={() => setShowModal(false)}
        />
      )}
      <Header
        title="SHARE POINTS"
        pointsRemaining={true}
        points={totalPoints}
      />
      <div className="point-share-container">
        <Row className="team-row">
          <Col>
            <Row className="teammate-one">
              <img
                className="teammate-one-avatar"
                src={props.team.child1.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
            <Row className="teammate-two">
              <img
                className="teammate-one-avatar"
                src={props.team.child2.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
          </Col>
          <Col>
            <Row className="teammate-one-points">
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child1.ImgURL}
                  alt="Submission"
                  onClick={() =>
                    openModal([{ ImgURL: props.team.child1.ImgURL }])
                  }
                />
                <InputNumber
                  value={points.storyOne}
                  min={10}
                  max={calculateMaxInput('storyOne')}
                  step={5}
                  onChange={value => handleChanges(value, 'storyOne')}
                />
              </div>
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child1.Pages[0].PageURL}
                  alt="Submission"
                  onClick={() => openModal(props.team.child1.Pages)}
                />
                <InputNumber
                  value={points.drawingOne}
                  min={10}
                  max={calculateMaxInput('drawingOne')}
                  step={5}
                  onChange={value => handleChanges(value, 'drawingOne')}
                />
              </div>
            </Row>
            <Row className="teammate-two-points">
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child2.ImgURL}
                  alt="Submission"
                  onClick={() =>
                    openModal([{ ImgURL: props.team.child2.ImgURL }])
                  }
                />
                <InputNumber
                  value={points.storyTwo}
                  min={10}
                  max={calculateMaxInput('storyTwo')}
                  step={5}
                  onChange={value => handleChanges(value, 'storyTwo')}
                />
              </div>
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child2.Pages[0].PageURL}
                  alt="Submission"
                  onClick={() => openModal(props.team.child2.Pages)}
                />
                <InputNumber
                  value={points.drawingTwo}
                  min={10}
                  max={calculateMaxInput('drawingTwo')}
                  step={5}
                  onChange={value => handleChanges(value, 'drawingTwo')}
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Button
          selection="#eb7d5bbb"
          className="match-up"
          type="primary"
          size="large"
          onClick={formSubmit}
        >
          Match Up!
        </Button>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    team: state.team,
  }),
  {}
)(PointShare);
