import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'This is description of the About page',
}

async function About() {
  return (
    <main>
      <h1>About page</h1>
      <Link href='/'>Go to home</Link>
    </main>
  )
}

export default About
