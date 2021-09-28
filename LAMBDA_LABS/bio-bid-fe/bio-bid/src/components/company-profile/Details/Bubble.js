import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const Bubble = styled.div`
    padding: 0 10px;
    margin: 5px;
    height: 30px;
    border-radius: 10px;
    background-color: ${theme.colors.scienceBlue};
    display: inline-block;
    p{
        font: ${theme.fontStyling.text};
        margin: 0;
        margin-top: 5px;
        color: ${theme.colors.alabaster};
    }
`;

export default ({content}) => {
    return (
        <Bubble>
            <p>{content}</p>
        </Bubble>
    )
}