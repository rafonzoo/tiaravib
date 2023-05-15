'use-client'

import type { FC } from 'react'

type ButtonType = JSX.IntrinsicElements['button']

interface iButton extends ButtonType {
  model?: keyof typeof corner
}

const corner = {
  normal: 'rounded-md',
  pill: 'rounded-full',
}

const className =
  'bg-blue-600 px-4 py-2 text-white active:bg-blue-800 hover:bg-blue-700 transition-colors'

const Button: FC<iButton> = ({ model = 'normal', ...props }) => {
  const classes = [className, corner[model], props.className]
    .filter((item) => !!item)
    .join(' ')

  return <button {...props} className={classes} />
}

export default Button
