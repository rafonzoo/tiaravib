'use-client'

import type { ComponentProps, FC } from 'react'
import Link from 'next/link'

const Anchor: FC<ComponentProps<typeof Link>> = ({ ...props }) => {
  const classes = [props.className].filter((item) => !!item).join(' ')

  return <Link {...props} className={classes} />
}

export default Anchor
