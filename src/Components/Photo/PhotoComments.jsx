import React, { useContext, useEffect, useState } from "react";
import PhotoCommentsForm from './PhotoCommentsForm'
import {UserContext} from '../../UserContext'
import styles from './PhotoComments.module.css'

const PhotoComments=(props)=>{
    const [comments,setComments]=useState(()=> props.comments)
    const commentsSection= React.useRef(null)
    const {login}=useContext(UserContext)
    useEffect(()=>{
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    },[comments])
    return (
        <>
        <ul ref={commentsSection} className={styles.comemnts}>
           {comments.map((comment)=>{
             return (
                <li key={comment.comemnt_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
               </li>
             )
           })}
        </ul>
         {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
       </>
    )
 
}


export default PhotoComments