import localFont from 'next/font/local'

export const concrete = localFont({
  src: [
    {
      path: '../public/fonts/ConcretteSTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ConcretteSTRIAL-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-concrete'
})

export const bomiro = localFont({
  src: [
    {
      path: '../public/fonts/Bomiro-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-bomiro'
})