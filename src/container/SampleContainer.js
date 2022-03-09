import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sample from '../component/sample/Sample';
//import { getPost, getUser } from '../modules/sample';
import { useDispatch } from 'react-redux';

function SampleContainer() {
    const {post, user, loadingPost, loadingUser} = useSelector(
        ({sample})=> ({
        post:sample.post, 
        user:sample.user, 
        loadingPost:sample.loading.GET_POST, 
        loadingUser:sample.loading.GET_USER
    })
    );
    const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(getPost(1));
    //     dispatch(getUser(1));
    // },[dispatch]);

    return (
    <Sample 
    post={post}
    user={user}
    loadingPost={loadingPost}
    loadingUser={loadingUser}
    />
    )
}

export default SampleContainer;