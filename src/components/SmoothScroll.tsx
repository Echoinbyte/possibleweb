"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScroll({children}:any) {
	const lenis = useLenis(({ scroll }) => {})
	return (
		<ReactLenis root> 
            {children}
        </ReactLenis>
	)
}

export default SmoothScroll;