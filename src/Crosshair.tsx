import { useEffect, useId, useRef } from 'react'
import { gsap } from 'gsap'

type Pointer = {
  x: number
  y: number
}

type RenderState = {
  previous: number
  current: number
  amt: number
}

type CrosshairProps = {
  color?: string
  targeted?: boolean
  containerRef?: React.RefObject<HTMLElement | null> | null
}

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

const getMousePos = (e: MouseEvent, container: HTMLElement | null) => {
  if (container) {
    const bounds = container.getBoundingClientRect()
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    }
  }

  return { x: e.clientX, y: e.clientY }
}

function Crosshair({ color = '#ffffff', targeted = false, containerRef = null }: CrosshairProps) {
  const lineHorizontalRef = useRef<HTMLDivElement | null>(null)
  const lineVerticalRef = useRef<HTMLDivElement | null>(null)
  const filterXRef = useRef<SVGFETurbulenceElement | null>(null)
  const filterYRef = useRef<SVGFETurbulenceElement | null>(null)
  const mouseRef = useRef<Pointer>({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const filterNoiseXId = useId().replace(/:/g, '') + '-noise-x'
  const filterNoiseYId = useId().replace(/:/g, '') + '-noise-y'

  useEffect(() => {
    const horizontal = lineHorizontalRef.current
    const vertical = lineVerticalRef.current
    if (!horizontal || !vertical) return

    const target: Window | HTMLElement = containerRef?.current ?? window
    const renderedStyles: { tx: RenderState; ty: RenderState } = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    }

    gsap.set([horizontal, vertical], { opacity: 0 })

    const handleMouseMove = (ev: MouseEvent) => {
      const container = containerRef?.current ?? null
      mouseRef.current = getMousePos(ev, container)

      if (container) {
        const bounds = container.getBoundingClientRect()
        const inBounds = ev.clientX >= bounds.left && ev.clientX <= bounds.right && ev.clientY >= bounds.top && ev.clientY <= bounds.bottom
        gsap.to([horizontal, vertical], { opacity: inBounds ? 1 : 0, duration: 0.2, overwrite: 'auto' })
      }
    }

    const render = () => {
      const { x, y } = mouseRef.current
      renderedStyles.tx.current = x
      renderedStyles.ty.current = y

      renderedStyles.tx.previous = lerp(renderedStyles.tx.previous, renderedStyles.tx.current, renderedStyles.tx.amt)
      renderedStyles.ty.previous = lerp(renderedStyles.ty.previous, renderedStyles.ty.current, renderedStyles.ty.amt)

      gsap.set(vertical, { x: renderedStyles.tx.previous })
      gsap.set(horizontal, { y: renderedStyles.ty.previous })

      rafRef.current = requestAnimationFrame(render)
    }

    const onFirstMove = () => {
      const { x, y } = mouseRef.current
      renderedStyles.tx.previous = renderedStyles.tx.current = x
      renderedStyles.ty.previous = renderedStyles.ty.current = y

      gsap.to([horizontal, vertical], {
        duration: 0.9,
        ease: 'power3.out',
        opacity: 1,
        overwrite: 'auto',
      })

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(render)
      }

      target.removeEventListener('mousemove', onFirstMove as EventListener)
    }

    const primitiveValues = { turbulence: 0 }

    const noiseTimeline = gsap
      .timeline({
        paused: true,
        onStart: () => {
          horizontal.style.filter = `url(#${filterNoiseXId})`
          vertical.style.filter = `url(#${filterNoiseYId})`
        },
        onUpdate: () => {
          const freq = String(primitiveValues.turbulence)
          if (filterXRef.current) filterXRef.current.setAttribute('baseFrequency', freq)
          if (filterYRef.current) filterYRef.current.setAttribute('baseFrequency', freq)
        },
        onComplete: () => {
          horizontal.style.filter = 'none'
          vertical.style.filter = 'none'
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: 'power1.out',
        startAt: { turbulence: 1 },
        turbulence: 0,
      })

    const enter = () => noiseTimeline.restart()
    const leave = () => {
      noiseTimeline.progress(1)
      horizontal.style.filter = 'none'
      vertical.style.filter = 'none'
    }

    const links = containerRef?.current
      ? containerRef.current.querySelectorAll('a')
      : document.querySelectorAll('a')

    target.addEventListener('mousemove', handleMouseMove as EventListener)
    target.addEventListener('mousemove', onFirstMove as EventListener)

    links.forEach((link) => {
      link.addEventListener('mouseenter', enter)
      link.addEventListener('mouseleave', leave)
    })

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener)
      target.removeEventListener('mousemove', onFirstMove as EventListener)

      links.forEach((link) => {
        link.removeEventListener('mouseenter', enter)
        link.removeEventListener('mouseleave', leave)
      })

      noiseTimeline.kill()

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [containerRef, filterNoiseXId, filterNoiseYId])

  return (
    <div
      style={{
        position: containerRef ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    >
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
        <defs>
          <filter id={filterNoiseXId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterXRef} />
            <feDisplacementMap in="SourceGraphic" scale={40} />
          </filter>
          <filter id={filterNoiseYId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterYRef} />
            <feDisplacementMap in="SourceGraphic" scale={40} />
          </filter>
        </defs>
      </svg>

      <div
        ref={lineHorizontalRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: targeted ? '2px' : '1px',
          background: color,
          pointerEvents: 'none',
          transform: 'translateY(50%)',
          opacity: 0,
          boxShadow: targeted ? `0 0 8px ${color}` : 'none',
        }}
      />

      <div
        ref={lineVerticalRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: targeted ? '2px' : '1px',
          background: color,
          pointerEvents: 'none',
          transform: 'translateX(50%)',
          opacity: 0,
          boxShadow: targeted ? `0 0 8px ${color}` : 'none',
        }}
      />
    </div>
  )
}

export default Crosshair
