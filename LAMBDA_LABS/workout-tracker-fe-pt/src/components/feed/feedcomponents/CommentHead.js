import React from 'react'

export default function CommentHead(props) {
    return (
        <> {console.log(props)}
            <p> {props.data.comment_data} </p>
        </>
    )
}
