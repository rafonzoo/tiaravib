import Link from 'next/link'

export const metadata = {
  title: 'Homepage',
  description: 'This is description of the homepage',
}

async function Page() {
  return (
    <main>
      <h1>Homepagee</h1>
      <Link href='/about'>About us</Link>
    </main>
  )
}

export default Page
