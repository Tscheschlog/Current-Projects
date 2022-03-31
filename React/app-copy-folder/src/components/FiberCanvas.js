import React, { forwardRef, useEffect, useRef } from 'react';
import { Canvas as FiberCanvas, useThree, useFrame } from '@react-three/fiber';
import mergeRefs from 'react-merge-refs';
import { useIntersection } from 'react-use';

const RenderTrigger = ({active}) => {
	const { invalidate } = useThree();
	const currentActive = useRef();
	currentActive.current = active;
	useEffect(() => {
		if (active) {
			const render = () => {
				if (currentActive.current) {
					invalidate();
					requestAnimationFrame(render);
				}
			}
			render();
		}
	}, [active]);
	return null;
}

/**
 * Calls 'invalidate' at each frame when the canvas is visible.
 * Note that useSpring or scroll also calls invalidate.
 * @param props.forceActive sometimes, we want to disable rendering even if the canvas is visible
 */
const Canvas = forwardRef(({children, forceActive, ...otherProps}, ref) => {
	const canvasRef = useRef(null);
	const intersection = useIntersection(canvasRef, { threshold: 0 });
	return (
		<FiberCanvas
			frameloop="demand"
			ref={mergeRefs([canvasRef, ref])}
			{...otherProps}
		>
			<RenderTrigger active={forceActive != null ? forceActive : !!intersection?.isIntersecting}/>
			{children}
		</FiberCanvas>
	)
});

export default Canvas;