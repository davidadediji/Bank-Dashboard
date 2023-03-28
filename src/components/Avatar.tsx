import React from 'react'

type AvatarProps = {
    imageInitials?: string
    isInitials?:boolean
    image?:string
}

export default function Avatar({imageInitials, isInitials, image}:AvatarProps) {
  return (
    <>
    {
        isInitials?<div>{imageInitials}</div>:<img src={image} alt={imageInitials}/>
    }
    </>
  )
}
