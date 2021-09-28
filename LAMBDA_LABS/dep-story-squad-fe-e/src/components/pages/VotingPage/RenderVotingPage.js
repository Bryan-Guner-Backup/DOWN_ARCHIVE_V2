import React, { useState } from 'react';
import { Header, VotingForm, EmojiPicker } from '../../common';
import { Row, Col, Card } from 'antd';

const RenderVotingPage = props => {
  const [subEmojis1, setSubEmojis1] = useState('');
  const [subEmojis2, setSubEmojis2] = useState('');

  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={props.faceoff.Submission1.ImgURL}
                  alt="writing submission"
                />
              </Card>
              <EmojiPicker getChildState={setSubEmojis1} />
            </div>
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={props.faceoff.Submission2.ImgURL}
                  alt="writing submission"
                />
              </Card>
            </div>
            <EmojiPicker getChildState={setSubEmojis2} />
            <VotingForm
              FaceoffID={props.faceoff.ID}
              MemberID={props.child.memberId}
              subEmojis={{ subEmojis1, subEmojis2 }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
