export function Post(props) {
  return (
    <>
      <p>Post</p>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
