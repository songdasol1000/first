import React from 'react';

function Sample({loadingPost, loadingUser, post, user}) {
    return (
    <div>
        <section>
            <h1>포스트</h1>
            {loadingPost && '불러오는 중...'}
            {!loadingPost && post && (
                <div>
                    <h3>{post.title}</h3>
                    <h5>{post.body}</h5>
                </div>
            )}
        </section>
        <hr />
        <section>
            <h1>사용자</h1>
            {loadingUser && '불러오는 중...'}
            {!loadingUser && user && (
                <div>
                    <h3>{user.username}</h3>
                    <h5>{user.email}</h5>
                </div>
            )}
        </section>
    </div>
    );
}

export default Sample;