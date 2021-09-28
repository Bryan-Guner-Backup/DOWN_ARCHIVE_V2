import React from 'react';
import styled from 'styled-components'

const LoadingModal = () => {
    const StyledDiv = styled.div`
    height: 400px; 
    width: 400px; 
    margin: auto; 
    background: white; 
    border-radius: 20px; 
    `
    const StyledH1 = styled.h1`
    font-size: 3.4rem; 
    color: #5b4eff; 
    font-family: 'Nunito', sans-serif; 
    margin-top: 50%; 
    text-align: center; 
    font-weight: 900; 

    `

    return ( 
        <StyledDiv>
            <StyledH1>Loading...</StyledH1>
        </StyledDiv>
     );
}
 
export default LoadingModal;