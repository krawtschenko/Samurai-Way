import React from "react";
import {Post} from "./Post/Post";
import {v1} from "uuid";

export const Posts = () => {
    const posts = [
        {id: v1(), post: 'Post 1'},
        {id: v1(), post: 'Post 2'},
        {id: v1(), post: 'Post 3'},
        {id: v1(), post: 'Post 4'},
        {id: v1(), post: 'Post 5'}
    ]

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
          {posts.map(post => {
              return (
                  <Post post={post.post}/>
              )
          })}
      </div>
    </div>
  )
}
