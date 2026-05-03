import { Main } from '@/components/elements/main'
import { GlassConfigProvider } from '@/components/glass-config-context'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlassConfigProvider>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={<>
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/projects">Projects</NavbarLink>
              <NavbarLink href="/about">About Me</NavbarLink>
              <NavbarLink href="/skills">Skills & Tools</NavbarLink>
            </>}
            logo={<NavbarLogo href="/">
              <span className="font-display text-olive-950 dark:text-white" style={{ fontSize: '35px' }}>Oliver Ostojić</span>
            </NavbarLogo>} actions={undefined}          />

          <Main>{children}</Main>

          <footer id="footer" className="py-24 bg-olive-950/2.5 dark:bg-white/5">
            <nav className="grid grid-cols-3 text-center text-sm/7 text-olive-700 dark:text-olive-400">
              <a href="/projects" className="hover:text-olive-950 dark:hover:text-white transition-colors">Projects</a>
              <a href="/about" className="hover:text-olive-950 dark:hover:text-white transition-colors">About Me</a>
              <a href="/skills" className="hover:text-olive-950 dark:hover:text-white transition-colors">Skills & Tools</a>
            </nav>
          </footer>
        </GlassConfigProvider>
      </body>
    </html>
  )
}
