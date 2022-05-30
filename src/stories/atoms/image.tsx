import React from 'react'
import './image.css'

interface imageProps {
  size?: 'small' | 'medium' | 'large'
  src?: string
  alt?: string
  title?: string
  id?: string
}

export const Image = ({
  size = 'medium',
  src = 'NoImage.jpeg',
  alt,
  title,
  id,
  ...props
}: imageProps) => {
  return <img id={id} src={src} alt={alt} title={title} />
}
