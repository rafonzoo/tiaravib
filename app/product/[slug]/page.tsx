import type { ComponentPropsWithoutRef, FC } from 'react'
import type { iPage } from '@/types/core'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { redirect } from 'next/navigation'
import { getUploadPath } from '@/helpers/server'

const Picture: FC<ComponentPropsWithoutRef<'img'>> = ({ src, alt }) => {
  if (!src) return null

  const path = src.replaceAll('/uploads/', '')

  return (
    <div className='relative pt-[75%]'>
      <picture>
        <source
          media='(max-width: 735px)'
          srcSet={getUploadPath('medium_' + path)}
        />
        <source
          media='(max-width: 1200px)'
          srcSet={getUploadPath('large_' + path)}
        />
        <img
          src={getUploadPath(path)}
          alt={alt ?? ''}
          className='absolute left-0 top-0 h-full object-cover'
        />
      </picture>
    </div>
  )
}

async function getPage(slug: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/pages`, {
      next: { revalidate: 10 },
    })

    const json = ((await res.json()).data as iPage[]).find(
      (item) => item.attributes.slug === slug
    )!

    return json
  } catch (e) {
    return null
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await getPage(params.slug)

  if (!page) {
    return redirect('/404')
  }

  return (
    <main>
      <h1>{page.attributes.title}</h1>
      <div>
        {/* @ts-expect-error Server Component */}
        <MDXRemote
          source={page.attributes.content}
          components={{
            h1: (props) => <h2 {...props} className='text-xl font-light' />,
            p: (props) => <div {...props} />,
            img: Picture,
          }}
        />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/pages`, {
    next: { revalidate: 10 },
  })

  const json = (await res.json()).data as iPage[]
  return json.map((post) => ({ slug: post.attributes.slug }))
}

export default Page
