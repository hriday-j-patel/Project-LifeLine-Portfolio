"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ImageZoomProps {
  src: string
  alt: string
  rotation?: number
}

export default function ImageZoom({ src, alt, rotation = 0 }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
        className="max-h-full max-w-full object-contain cursor-pointer transition-transform hover:scale-105"
          onClick={toggleZoom}
          style={{ transform: rotation ? `rotate(${rotation}deg)` : 'none' }}
        />

      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={toggleZoom}
        >
          <button className="absolute top-4 right-4 bg-white rounded-full p-1" onClick={toggleZoom}>
            <X className="h-6 w-6" />
          </button>
          <img 
            src={src || "/placeholder.svg"} 
            alt={alt} 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            style={{ transform: rotation ? `rotate(${rotation}deg)` : 'none' }}
          />
        </div>
      )}
    </>
  )
}
