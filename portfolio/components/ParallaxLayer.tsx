'use client'

import { Parallax } from 'react-scroll-parallax'

type Props = {
  src?: string
  speed?: number
  className?: string
  imgClassName?: string
  position?: 'fixed-bg' | 'absolute' | 'inline'
  overlay?: string
  children?: React.ReactNode
}

export default function ParallaxLayer({
  src,
  speed = -10,
  className = '',
  imgClassName = '',
  position = 'absolute',
  overlay,
  children,
}: Props) {
  const wrapperStyles = {
    'fixed-bg': 'fixed inset-0 -z-10 w-full h-full overflow-hidden',
    'absolute': 'absolute inset-0 w-full h-full overflow-hidden',
    'inline': 'relative w-full overflow-hidden',
  }

  return (
    <div className={`${wrapperStyles[position]} ${className}`}>
      <Parallax speed={speed} className="w-full h-[120%] -top-[10%]">
        {src && (
          <img src={src} className={`w-full h-full object-cover ${imgClassName}`} />
        )}
        {overlay && <div className={`absolute inset-0 ${overlay}`} />}
        {children}
      </Parallax>
    </div>
  )
}