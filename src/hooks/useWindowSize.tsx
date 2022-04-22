import {useState, useEffect} from 'react';

type Size = {
	width: number ;
	height: number | undefined;
};

function useWindowSize(): Size {
	const [windowSize, setWindowSize] = useState<Size>({
		width: 0,
		height: undefined
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

export default useWindowSize;
