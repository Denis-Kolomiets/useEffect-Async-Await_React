function Post(props) {
  const { userId, id, title, body } = props
  return (
    <div className="post_block">
      <h1>{`id:${id}`}</h1>
      <h2 className="post_title">{title}</h2>
      <p className="post_body">{body}</p>
      <small>{`userId:${userId}`}</small>
    </div>
  )
}

export default Post
