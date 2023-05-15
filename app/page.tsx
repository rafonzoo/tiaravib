import type { iPage } from '@/types/core'
import { redirect } from 'next/navigation'
import { site } from '@/config'
import Hero from '@/components/Section/Hero'

export const metadata = {
  title: site.name,
  description: 'This is description of the homepage',
}

async function getPages() {
  try {
    const url = `${process.env.API_URL}/pages`
    const res = await fetch(url, { next: { revalidate: 60 } })
    const json = await res.json()

    return (json.data as iPage[]).sort((a, b) => a.id - b.id)
  } catch (e) {
    return null
  }
}

async function Home() {
  const pages = await getPages()

  if (!pages) {
    return redirect('/404')
  }

  return (
    <main className='bg-gray-100'>
      <div className='h-[72px] bg-gray-100' />
      {pages.map(({ id, attributes }) => (
        <Hero
          sectionClass='mt-4'
          key={id}
          title={attributes.title}
          tagline={attributes.excerpt}
          action={{ more: '/product/' + attributes.slug }}
        />
      ))}
    </main>
  )
}

export default Home
