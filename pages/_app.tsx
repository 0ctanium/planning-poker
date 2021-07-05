import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { UserProvider } from '/context/userContext'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App
