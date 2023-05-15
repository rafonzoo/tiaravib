import type { ReactNode } from 'react'

interface iResponse<T = {}> {
  id: number
  attributes: T
}

interface iProduct {
  title: string
  slug: string
  featured: boolean
  content: string
  excerpt: string
}

export type iLayout<T = {}> = { children: ReactNode } & T

export type iPage = iResponse<iProduct>
