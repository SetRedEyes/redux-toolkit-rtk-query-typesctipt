import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/post.service'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = useState(100)

  const {
    data: posts,
    error,
    isLoading,
    refetch
  } = postAPI.useFetchAllPostsQuery(limit)

  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation()

  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3)
    // }, 2000)
  }, [])

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }
  return (
    <div>
      <div className='post__list'>
        <button onClick={handleCreate}>Addd new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              remove={handleRemove}
              update={handleUpdate}
            />
          ))}
      </div>
    </div>
  )
}

export default PostContainer
