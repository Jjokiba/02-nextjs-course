import Link from "next/link"

function HomePage() {
    return (
    <div>
      <img style={{width: 300}} src="/images/teste.jpg"></img>
      <ul>
        <li>
          <Link href={'/sobre'}>
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/postPipoquinha'}>
            <a>PostPipoquinha</a>
          </Link>
        </li>
      </ul>
      <div>Welcome to Next.js!</div>
    </div>
    );
  }
  
  export default HomePage
