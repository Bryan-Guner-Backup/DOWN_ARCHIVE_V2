import React from 'react';
import styled from 'styled-components';
import NavBar from '../../common/NavBar';
import { GenerateTable } from '../GenerateTable/';
const StyledView = styled.header`
  width: 1200px;
  max-width: 90%;
  margin: 3rem auto;
`;

function ViewContainer(props) {
  const { RenderAddButton, rows, columns, headerName, sortedBy } = props;
  return (
    <>
      <NavBar titleName={headerName} backgroundColor="#293845" />

      <StyledView>
        <GenerateTable
          rows={rows}
          columns={columns}
          tableName={headerName}
          RenderAddButton={RenderAddButton}
          sortedBy={sortedBy}
        />
      </StyledView>
    </>
  );
}
export default ViewContainer;
