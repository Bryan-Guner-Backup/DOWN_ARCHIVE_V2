/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import icon from '../../../assets/feed/icon.svg'
import Axios from 'axios';
import {axiosWithAuth} from '../../authentication/axiosWithAuth';
import {decode} from 'jsonwebtoken';
import {Comment, Title, Ico, Name, Buttons} from '../style';

export default function Comments(props) {

    const [isopen, setIsOpen] = useState(false);
    const [count, setCount] = useState();
    const [likes, setLikes] = useState();
    const [user, setUser] = useState('');

    useEffect(() => {
        getCommentCount(props.data.this_entity_id)
        getLikes();
        getUserData(props.data.this_entity_id);
    }, [])

    const getCommentCount = async(entity_id) =>{
        Axios.get(`https://frozen-hamlet-18508.herokuapp.com/api/comments/number/${entity_id}`)
        .then(res =>{
            setCount(res.data.message[0].count);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const createComment = () =>{
        props.setState({...props.state, showCreateComment: !props.state.showCreateComment, id: props.data.this_entity_id})
    }

    const getLikes = async() =>{
        axiosWithAuth().get(`api/likes/post/${props.data.this_entity_id}`).then(res =>{
            setLikes(res.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const getUserData = async(entity_id) =>{
        axiosWithAuth().get(`/api/feed/user/entity/${entity_id}`)
        .then(res =>{
            setUser(res.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const like = async() =>{
        let isLiked = false;
        // eslint-disable-next-line array-callback-return
        await likes.map(res =>{
            if(decode(localStorage.getItem('token')).id === res.id){
                isLiked = true;
            }
        })
        if(isLiked){
            axiosWithAuth().delete(`api/likes/${props.data.this_entity_id}`)
            .then(response =>{
                getLikes();
            })
            .catch(err =>{
                console.log(err);
            })
        } else {
            axiosWithAuth().post(`api/likes/${props.data.this_entity_id}`)
                .then(response =>{
                    getLikes();
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }
    
    return (
        <Comment>
            <div>
                <div onClick={() => setIsOpen(!isopen)}>
                    <Title>
                        <Ico src={icon} alt='icon' />
                        <Name>{user !== '' ? user.username : ''}</Name>
                    </Title>
                    <p>{props.data.comment_data}</p>
                </div>
                <Buttons onClick={() => createComment()}> {`${count}`} Comment </Buttons>
                <Buttons onClick={() => like()}> {likes === undefined ? "" : likes.length} Like </Buttons>
                <Buttons> Share </Buttons>
            </div>
            <div>
                {isopen ? props.data.comments.map(data =>(
                    <Comments state={props.state} setState={props.setState} 
                    showCreateComment={props.showCreateComment} key={data.this_entity_id} 
                    data={data} ref={props.id} obj={props.obj} />
                )) : null}
            </div>
        </Comment>
    )
}
