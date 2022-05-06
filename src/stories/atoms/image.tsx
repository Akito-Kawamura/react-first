import React from 'react';
import './image.css';

interface imageProps {
	size?: 'small' | 'medium' | 'large';
	src?: string;
	alt?: string;
	title?: string;
}

export const Image = ({
	size = 'medium',
	src,
	alt,
	title,
	...props
      }: imageProps) => {
	return (
		<img src={{ src }} alt={{ alt }} title={{ title }} />
	);
};