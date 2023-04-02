import React from "react";

interface PostItemProp {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProp> = ({ userId, data }) => {
  return <div>PostItem</div>;
};

export default PostItem;
