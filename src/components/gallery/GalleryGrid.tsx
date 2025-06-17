
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  imageUrl: string
  thumbnailUrl: string
  title: string
  artist: string
  style: string
  bodyPart: string
  colors: string[]
  isAiEnhanced: boolean
  likes: number
  views: number
  createdAt: string
  tags: string[]
}

interface GalleryGridProps {
  items: GalleryItem[]
  onImageClick: (item: GalleryItem) => void
  onLoadMore: () => void
  hasNextPage: boolean
}

export function GalleryGrid({ items, onImageClick, onLoadMore, hasNextPage }: GalleryGridProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('gallery-favorites')
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)))
    }
  }, [])

  const toggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newFavorites = new Set(favorites)
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId)
    } else {
      newFavorites.add(itemId)
    }
    setFavorites(newFavorites)
    localStorage.setItem('gallery-favorites', JSON.stringify([...newFavorites]))
  }

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          onLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [hasNextPage, onLoadMore])

  const handleImageLoad = (itemId: string) => {
    setLoadedImages(prev => new Set([...prev, itemId]))
  }

  return (
    <div className="space-y-8">
      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid mb-6"
          >
            <div
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => onImageClick(item)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div
                  className={cn(
                    "w-full bg-gray-200 dark:bg-gray-700 transition-all duration-500",
                    !loadedImages.has(item.id) && "animate-pulse"
                  )}
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
                      loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(item.id)}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{item.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                      </div>
                      {item.isAiEnhanced && (
                        <div className="flex items-center space-x-1 bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          <span className="text-xs">AI</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="absolute top-3 right-3 p-2 bg-black/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40"
                >
                  <Heart
                    className={cn(
                      "w-4 h-4 transition-colors",
                      favorites.has(item.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-white"
                    )}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>by {item.artist}</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {item.style}
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Trigger */}
      {hasNextPage && (
        <div ref={observerRef} className="flex justify-center py-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      )}
    </div>
  )
}
