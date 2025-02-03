export default function Page({ params }: { params: { username: string } }) {
  return <div>Page: {params.username}</div>;
}
