/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../authentication/axiosWithAuth';
import Workout from './feedcomponents/workout';
import Routine from './feedcomponents/routine';
import Diet from './feedcomponents/diet';
import Mealplan from './feedcomponents/mealplan';
import CommentHead from './feedcomponents/CommentHead';
import  icon from './../../assets/feed/icon.svg';
import {Background, CommentForm, Middle, Top, MiddleComment, Ico, Title, Name, Svg, Input, TextArea,
    Bottom, Submit, Content
} from './style'
import { useHistory, useLocation } from "react-router-dom";



const types = {
    WORKOUT: 1,
    ROUTINE: 2,
    DIET: 3,
    MEALPLAN: 4,
    COMMENT: 5
}


export default function CreateComment(props) {

    const [visible, setVisible] = useState(true);
    const [text, setText] = useState('')
    const [postData, setPostData] = useState('');
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        console.log(props);
        axiosWithAuth().get(`/api/feed/entity/${props.state.id}`)
        .then(res =>{
            setPostData(res.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

    const sort = (obj) =>{
        console.log(obj);
        switch(obj.type){
            case types.WORKOUT:
                return (<Workout key={obj.entity_id} data={obj}/>)
            case types.ROUTINE:
                return (<Routine key={obj.entity_id} data={obj} />)
            case types.DIET:
                return(<Diet key={obj.entity_id} data={obj} />)
            case types.MEALPLAN:
                return(<Mealplan key={obj.entity_id} data={obj} />)
            case types.COMMENT:
                return(<CommentHead key={obj.entity_id} data={obj} />)
            default:
                    console.log('problem with the displaying feeds')
                break;
        }
    }

    const removeComment = () => {
        props.setState({...props.state, showCreateComment: !props.state.showCreateComment})
    }

    const changeVisible = () =>{
        setVisible(false);
    }

    const setValue = (e) =>{
        setText(e.target.innerText);
    }

    const submitComment = () =>{
        axiosWithAuth()
        .post(`api/comments/${props.state.id}`, {
            comment_data: text
        })
        .then(res =>{
            removeComment();
            if(location.pathname === `/feed/${props.state.id}`){
                window.location.reload(false);
            }else {
                history.push(`/feed/${props.state.id}`);
                window.location.reload(false);
            }
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <>
        <Background> </Background>
        <CommentForm>
            <Middle>
                <Top>
                     <Svg width='50' height='50' onClick={() => removeComment()} >
                         <g>
                            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
                         </g>
                     </Svg>
                </Top>
                <MiddleComment>
                    <Title style={{width: '100%'}}>
                        <Ico src={icon} alt='icon' />
                        <Name>{postData !== '' ? postData.user.username : ''}</Name>
                    </Title>
                    <Content>
                        {sort(postData)}
                    </Content>
                </MiddleComment>

                <Input>
                    <TextArea style={!visible ? {opacity: 1} : {} } onInput={(e) => setValue(e)} onClick={() => changeVisible()} contentEditable="true" >
                        {visible ? 'Write your comment...' : ''}
                    </TextArea>
                </Input>
                <Bottom>
                    <Submit onClick={() => submitComment()}> Submit </Submit>
                </Bottom>
            </Middle>
        </CommentForm>
        </>
    )
}

