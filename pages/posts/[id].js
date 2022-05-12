import NextLink from 'next/link';
import { Box, Text } from '@skynexui/components';
import { useRouter } from 'next/router';
import dados from '../../public/dados.json';

export async function getStaticPaths() {
/* const paths = [
  {params: {id : '1'}},
  {params: {id : '2'}},
  {params: {id : '3'}}
] */
  const paths = dados.posts.map((postAtual) => {
    return {params : {id : `${postAtual.id}`}}
  });

  return {
    paths: paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      id: context.params.id,
    }, // will be passed to the page component as props
  }
}

const posts = dados.posts;

export default function PostByIdScreen(props) {
  const router = useRouter();
  /* const post = {
    title: `Post: [${router.query.id}]`,
    date: `11/11/1111`,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem urna, laoreet sed magna ac, scelerisque rhoncus nulla. Morbi rhoncus venenatis elementum. Phasellus nec purus ut nisi tempus sagittis sed eget lacus. Nullam in nibh porttitor, dictum metus placerat, molestie augue. Phasellus a mi fermentum erat tempor sollicitudin. Donec eget elementum leo. Morbi sit amet enim varius, ultrices leo commodo, faucibus purus.
      Vestibulum ut sem est. Phasellus sodales rhoncus convallis. Etiam sit amet libero non tellus vestibulum bibendum. Integer ac eros vel justo imperdiet dictum. Etiam dapibus dolor augue, a suscipit metus sollicitudin in. Integer suscipit ac justo eget molestie. Vivamus id auctor lectus. Ut malesuada est quis urna mollis semper. Nulla cursus, metus eget elementum venenatis, tortor massa tincidunt justo, ac faucibus tortor felis id lacus. Sed quis dolor sem. Sed cursus justo eu accumsan rhoncus. Nam eget lectus libero. Nulla nulla leo, iaculis sagittis massa non, malesuada porta velit. Fusce vel accumsan nisi.
    `,
  } */

  const post = dados.posts[`${router.query.id - 1}`] ?? {
    title: `Post: [${router.query.id}]`,
    date: `11/11/1111`,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem urna, laoreet sed magna ac, scelerisque rhoncus nulla. Morbi rhoncus venenatis elementum. Phasellus nec purus ut nisi tempus sagittis sed eget lacus. Nullam in nibh porttitor, dictum metus placerat, molestie augue. Phasellus a mi fermentum erat tempor sollicitudin. Donec eget elementum leo. Morbi sit amet enim varius, ultrices leo commodo, faucibus purus.
      Vestibulum ut sem est. Phasellus sodales rhoncus convallis. Etiam sit amet libero non tellus vestibulum bibendum. Integer ac eros vel justo imperdiet dictum. Etiam dapibus dolor augue, a suscipit metus sollicitudin in. Integer suscipit ac justo eget molestie. Vivamus id auctor lectus. Ut malesuada est quis urna mollis semper. Nulla cursus, metus eget elementum venenatis, tortor massa tincidunt justo, ac faucibus tortor felis id lacus. Sed quis dolor sem. Sed cursus justo eu accumsan rhoncus. Nam eget lectus libero. Nulla nulla leo, iaculis sagittis massa non, malesuada porta velit. Fusce vel accumsan nisi.
    `,
  } 
  
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2'}}
      >
        {post.title}
      </Text>
      <Text styleSheet={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>
          {post.content}
        </Text>

        {post.video && <iframe style={{ marginTop: '32px', minHeight: '400px' }} src={post.video} /> }
      </Box>


      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href={`/`} passHref>
          {/* <a> */}
            <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline', cursor: 'pointer' } }}>
              Voltar para a home
            </Text>
          {/* </a> */}
        </NextLink>
      </Box>
    </Box>
  )
}
