import React from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const AddButtonContainer = styled.div`
  position: fixed;
  right: 80px;
  bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3553fCC;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  color: #ffffffCC;
  cursor: pointer;
  &:hover {
        background-color: #d3553f;
        .add-button-icon {
            color: #ffffff;
    }
  .add-button-icon {
    width: 22px;
    height: 22px;

  }
`;

export default function AddButton() {
  return (
    <AddButtonContainer>
      <FaPlus size="22px" className="add-button-icon" />
    </AddButtonContainer>
  );
}
