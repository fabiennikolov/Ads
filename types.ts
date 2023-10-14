export type UnoCssString = `i-${string}`

export interface SocialLink {
  to: string
  icon?: string
}

export interface AdInfo {
  title: string
  description?: string
  image: string
  link: {
    label: string
    redirect: string
  }
}
export interface TitleMap {
  [key: string]: string
}
