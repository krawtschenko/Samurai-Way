import React from "react";
import {Post} from "./Post/Post";

export const Posts = () => {
  return (
    <div>
      <div>
        ava + descriptions
      </div>
      <div>
        Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
          New post
        </div>
        <Post post='Post 1'/>
        <Post post='Post 2'/>
        <Post post='Post 3'/>
      </div>
    </div>
  )
}
