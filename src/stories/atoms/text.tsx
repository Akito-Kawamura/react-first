import React from 'react'
// import './image.css';

interface textProps {
  size?: 'small' | 'medium' | 'large'
  text: string
  align?: 'center' | 'left'
}

export const Text = ({ size, text }: textProps) => {
  return <p>{text}</p>
}
