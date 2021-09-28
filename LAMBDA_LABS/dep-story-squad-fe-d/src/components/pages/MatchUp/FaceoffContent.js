import React, { useEffect, useState } from 'react';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';
import lock from '../../../assets/images/match_up_images/lock.svg';

import { SubmissionViewerModal } from '../../common';

const FaceoffContent = props => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setContent(props.content);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="faceoff">
      {content && (
        <FaceoffSubDisplay sub={content.Submission1} type={content.Type} />
      )}
      <img src={matchup_bolt} alt="lightning bolt" />
      {content && (
        <FaceoffSubDisplay
          sub={content.Submission2}
          type={content.Type}
          numberOfTimesVoted={props.numberOfTimesVoted}
          votesNeededToUnlock={props.votesNeededToUnlock}
        />
      )}
      {content && <div className="points">{content.Points}</div>}
    </div>
  );
};

const FaceoffSubDisplay = ({ sub, type, ...props }) => {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [locked, setLocked] = useState(false);

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  useEffect(() => {
    if (
      props.votesNeededToUnlock &&
      props.numberOfTimesVoted < props.votesNeededToUnlock
    ) {
      setLocked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showModal && (
        <SubmissionViewerModal
          content={modalContent}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className="sub">
        <div className="child-info">
          <img src={sub.AvatarURL} alt="text" />
          <span className="name">{sub.Name}</span>
        </div>
        <div className="submission-preview">
          {!locked ? (
            <img
              src={type === 'DRAWING' ? sub.ImgURL : sub.Pages[0].PageURL}
              alt="text"
              onClick={() =>
                openModal(
                  type === 'DRAWING' ? [{ ImgURL: sub.ImgURL }] : sub.Pages
                )
              }
            />
          ) : (
            <img src={lock} alt="locked" />
          )}
        </div>
      </div>
    </>
  );
};

export default FaceoffContent;
