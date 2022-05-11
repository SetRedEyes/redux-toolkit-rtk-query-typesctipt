import { IPost } from '../models/IPost'

interface PostItemsProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

const PostItem = ({ post, remove, update }: PostItemsProps) => {
  const removePost = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const updatePost = (event: React.MouseEvent) => {
    const title = prompt() || ''
    update({ ...post, title })
  }
  return (
    <div className='post' onClick={updatePost}>
      {post.id}. {post.title}
      <button onClick={ removePost}>Delete</button>
    </div>
  )
}

export default PostItem
