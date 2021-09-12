import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const { url } = useRouteMatch();
  const postId = post.id;
  const params = useParams();

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
