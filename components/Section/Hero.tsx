import type { FC } from 'react'
import { classes } from '@/helpers/utils'
import Button from '@/components/Button'
import Anchor from '@/components/Anchor'

interface iHero {
  title: string
  tagline: string
  background?: string
  foreground?: string
  sectionClass?: string
  action?: {
    cta?: string
    more?: string
  }
}

const Hero: FC<iHero> = ({
  foreground: fg = 'bg-white',
  background: bg = 'text-black',
  action,
  title,
  tagline,
  sectionClass,
}) => {
  const linkClass = bg === 'bg-black' ? 'text-blue-400' : 'text-blue-600'

  return (
    <section className={sectionClass}>
      <div className={classes('flex min-h-[764px] flex-col', fg, bg)}>
        <div className='mx-auto mt-20 max-w-[278px] text-center'>
          <h2 className='text-hero font-semibold uppercase tracking-tight'>
            {title}
          </h2>
          <p className='mt-4 whitespace-pre'>{tagline}</p>
          <div className='mt-4'>
            <Button model='pill'>Get</Button>
          </div>
          <div className='mt-4'>
            {action?.more && (
              <Anchor
                href={action.more}
                className={classes('text-lead -tracking-base', linkClass)}
              >
                Learn more <span className='sr-only'>{title}</span>
              </Anchor>
            )}
          </div>
        </div>
        <div className='relative mt-auto h-[438px]'></div>
      </div>
    </section>
  )
}

export default Hero
