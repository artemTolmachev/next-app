import Link from 'next/link'

const TheHeader = () => {
  return (
    <header>
        <Link className = 'header-link'href="/">Home</Link>
        <Link className = 'header-link'href="/blog">Blog</Link>
        <Link className = 'header-link'href="/about">About</Link>
    </header>
  );
};

export {TheHeader};