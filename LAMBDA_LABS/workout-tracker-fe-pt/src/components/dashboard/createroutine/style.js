import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    margin: 0 auto;
    padding-top: 50px;
`

export const FlexBox = styled.div`
    display:flex;
`

export const Form = styled.form`
    text-align:center;
`

export const Submit = styled.input`
    border-radius: 30px;
    padding: 0 4em;
    background-color: #1d2026;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #f6f6f6;
    cursor: pointer;
    :hover {
        background-color: white;
        color: black;
    }
`

export const Add = styled.button`
    border-radius: 30px;
    padding: 0 4em;
    background-color: #1d2026;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #f6f6f6;
    justify-self: center;
    cursor: pointer;
    :hover {
        background-color: white;
        color: black;
    }
`