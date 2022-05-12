import NextLink from 'next/link';
import { Box, Text, Image } from '@skynexui/components';
import dados from '../public/dados.json';

export default function HomeScreen() {
  const infos = {
    nome: 'Jikober',
    githubUser: 'jjokiba',
  }
  const posts = dados.posts;

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '800px',
        paddingHorizontal: '16px',
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          margin: '0 auto',
          border: '2px solid #F9703E',
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center' }}
      >
        {infos.nome}
      </Text>
      
      <Box styleSheet={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: '16px',
        gridGap: '16px',
      }}>
        {posts.map(({ title, content, id }) => (
          <Post key={id} title={title} content={content} id={id} />
        ))}
      </Box>
    </Box>
  )
}

function Post({ title, content, id }) {
  return (
    <Box 
      styleSheet={{
        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover: {
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)',
        }
      }}
    >
      <NextLink href={`posts/${id}`} passHref>
        {/* <a> */}
          <Text
            tag="a"
            variant="heading4"
            styleSheet={{ display:' block', color: '#F9703E', marginBottom: '8px', hover: {cursor:'pointer'} }}
          >
            {title}
          </Text>
        {/* </a> */}
      </NextLink>
      <Text>
        {content.substring(0, 140)}...
      </Text>
    </Box>
  );
}
