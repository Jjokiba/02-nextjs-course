import { useRouter } from 'next/router';

function post() {
  const router = useRouter();

  console.log(router.query.id);
  return (
    <>
    <div>Pagina de post: {router.query.id }</div>
    <div>{router.query.pip }</div>
    </>
  )
}

export default post
