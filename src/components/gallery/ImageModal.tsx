
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, ChevronLeft, ChevronRight, Heart, Share2, 
  Download, ZoomIn, ZoomOut, Info, Sparkles,
  User, Calendar, Eye, Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
  processSteps: ProcessStep[]
  metadata: ImageMetadata
  likes: number
  views: number
  createdAt: string
  tags: string[]
}

interface ProcessStep {
  id: string
  name: string
  description: string
  imageUrl?: string
}

interface ImageMetadata {
  dimensions: { width: number; height: number }
  fileSize: number
  processTime?: number
  aiModel?: string
  prompts?: string[]
}

interface ImageModalProps {
  image: GalleryItem
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
  canNavigatePrev: boolean
  canNavigateNext: boolean
}

export function ImageModal({ 
  image, 
  onClose, 
  onNavigate, 
  canNavigatePrev, 
  canNavigateNext 
}: ImageModalProps) {
  const [zoom, setZoom] = useState(1)
  const [showInfo, setShowInfo] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('gallery-favorites') || '[]')
    setIsFavorite(favorites.includes(image.id))
  }, [image.id])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          if (canNavigatePrev) onNavigate('prev')
          break
        case 'ArrowRight':
          if (canNavigateNext) onNavigate('next')
          break
        case 'i':
        case 'I':
          setShowInfo(!showInfo)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onClose, onNavigate, canNavigatePrev, canNavigateNext, showInfo])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('gallery-favorites') || '[]')
    const newFavorites = isFavorite 
      ? favorites.filter((id: string) => id !== image.id)
      : [...favorites, image.id]
    
    localStorage.setItem('gallery-favorites', JSON.stringify(newFavorites))
    setIsFavorite(!isFavorite)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: `Check out this tattoo design by ${image.artist}`,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    if (bytes === 0) return '0 Bytes'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Navigation Controls */}
        {canNavigatePrev && (
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate('prev')
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {canNavigateNext && (
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate('next')
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setShowInfo(!showInfo)
              }}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <Info className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setZoom(Math.max(0.5, zoom - 0.25))
              }}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <ZoomOut className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setZoom(Math.min(3, zoom + 0.25))
              }}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <ZoomIn className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite()
              }}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                handleShare()
              }}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <Share2 className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="bg-black/20 hover:bg-black/40 text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex max-w-7xl max-h-full w-full">
          {/* Image */}
          <div 
            className="flex-1 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={image.imageUrl}
              alt={image.title}
              className="max-w-full max-h-full object-contain cursor-zoom-in"
              style={{ transform: `scale(${zoom})` }}
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={() => setZoom(zoom === 1 ? 2 : 1)}
            />
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-96 bg-white dark:bg-gray-900 h-full overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {image.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{image.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{image.likes}</span>
                        </div>
                      </div>
                    </div>
                    {image.isAiEnhanced && (
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Enhanced
                      </Badge>
                    )}
                  </div>

                  <Tabs defaultValue="details" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="process">Process</TabsTrigger>
                      <TabsTrigger value="similar">Similar</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Artist: {image.artist}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Style: {image.style}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">
                            Created: {new Date(image.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Body Part:</p>
                          <Badge variant="outline">{image.bodyPart}</Badge>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Colors:</p>
                          <div className="flex flex-wrap gap-2">
                            {image.colors.map((color, index) => (
                              <div key={index} className="flex items-center space-x-1">
                                <div
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{ backgroundColor: color === 'black' ? '#000' : color }}
                                />
                                <span className="text-sm capitalize">{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Tags:</p>
                          <div className="flex flex-wrap gap-1">
                            {image.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="border-t pt-3 space-y-2 text-xs text-gray-500">
                          <div>Dimensions: {image.metadata.dimensions.width} × {image.metadata.dimensions.height}</div>
                          <div>File Size: {formatFileSize(image.metadata.fileSize)}</div>
                          {image.metadata.processTime && (
                            <div>Process Time: {image.metadata.processTime}s</div>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="process" className="space-y-4">
                      {image.processSteps.map((step, index) => (
                        <div key={step.id} className="border rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                              {index + 1}
                            </div>
                            <h4 className="font-medium">{step.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      ))}

                      {image.metadata.aiModel && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                            AI Enhancement
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Model: {image.metadata.aiModel}
                          </p>
                          {image.metadata.prompts && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Prompts used:</p>
                              <div className="flex flex-wrap gap-1">
                                {image.metadata.prompts.map((prompt, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {prompt}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="similar" className="space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Similar designs coming soon...
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
