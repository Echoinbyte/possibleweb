"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScroll({children}) {
	const lenis = useLenis(({ scroll }) => {})
	return (
		<ReactLenis root> 
            {children}
        </ReactLenis>
	)
}

export default SmoothScroll;