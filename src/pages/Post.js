import React from 'react';

const Post = ({match}) => {
  return(
    <div>
      This is post #{match.params.id}
    </div>
  );
};

export default Post;