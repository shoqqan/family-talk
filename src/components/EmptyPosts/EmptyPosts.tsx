import React from 'react';
type EmptyPostsPropsType = {
    news: boolean
}
const EmptyPosts = (props: EmptyPostsPropsType) => {
    return props.news?(
        <div>
            Your family hasn't posted yet. Be the first!)
        </div>
    ):(       <div>
        You hasn't posted yet. Post something!)
    </div>);
};

export default EmptyPosts;