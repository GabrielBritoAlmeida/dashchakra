import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isActive = `/${asPath.split('/')[1]}` === rest.href

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
    </Link>
  )
}
