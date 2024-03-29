import siteMetadata from '@/data/siteMetadata'
// @ts-ignore
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
// @ts-ignore
import MobileNav from './MobileNav'
// @ts-ignore
import ThemeSwitch from './ThemeSwitch'
// @ts-ignore
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <h1 className="animate-typing mx-auto mr-3 h-[38px] overflow-hidden whitespace-nowrap border-r-4 text-3xl font-bold tracking-wider md:h-[60px]  md:text-5xl">
              {/*PH_Dev*/}
              {'{ PH_Dev }'}
              {/*<Logo />*/}
            </h1>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
