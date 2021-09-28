import styled from 'styled-components';
import theme from '../../../theme';
import { ArrowFromLeft } from '@styled-icons/boxicons-solid/';
import { InformationCircle } from '@styled-icons/heroicons-outline/';
import { RequestChanges } from '@styled-icons/octicons/';
import { Home } from '@styled-icons/boxicons-solid/';

export const Dashboard = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    .main{
        position: absolute;
        margin-left: 120px;
        width: calc(100% - 120px);
    }
`;

export const NavBar = styled.div`
    width: ${props => props.open ? '230px' : '100px'};
    height: 100%;
    background-color: ${theme.colors.scienceBlue};
    position: absolute;
    z-index: 999;
    transition: .5s width;
    .top{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-top: 20px;
        .expand{
            position: absolute;
            right: 10px;
            cursor: pointer;
            width: 30px;
            height: 30px;
        }
        .profile-img{
            margin-top: 50px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
        p{
            margin-top: 10px;
        }
    }
    p{
        color: ${theme.colors.alabaster};
        font: ${theme.fontStyling.text};
        text-align: center;
    }
    .bar{
        width: 80%;
        background-color: ${theme.colors.alabaster};
        height: 1px;
        margin: 20px auto;
    }
    .btn-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: ${props => props.open ? 'space-between' : 'center'};
    width: ${props => props.open ? '185px' : '70px'};
    height: 50px;
    background-color: ${props => props.selected ? 'rgba(68, 134, 246)' : null};
    p{
        margin: 0;
        margin-left: 5px;
    }
    &:hover{
        background-color: rgba(68, 134, 246);
    }
    transition: width .5s;
`;

export const Arrow = styled(ArrowFromLeft)`
    color: ${theme.colors.alabaster};
    transform: ${props => props.open ? 'rotate(180deg)' : null};
    transition: transform .5s;
`;

export const Information = styled(InformationCircle)`
    width: 30px;
    height: 30px;
    color: ${theme.colors.alabaster};
`;

export const Request = styled(RequestChanges)`
    width: 30px;
    height: 30px;
    color: ${theme.colors.alabaster};
`;

export const HomeIcon = styled(Home)`
    width: 30px;
    height: 30px;
    color: ${theme.colors.alabaster};
`;
