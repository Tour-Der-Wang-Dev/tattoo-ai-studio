
import React, { useState, useCallback, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { FilterSidebar } from '@/components/gallery/FilterSidebar'
import { ImageModal } from '@/components/gallery/ImageModal'
import { SearchBar } from '@/components/gallery/SearchBar'
import { FilterChips } from '@/components/gallery/FilterChips'
import { SortControls } from '@/components/gallery/SortControls'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react'
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

export interface FilterState {
  styles: string[]
  bodyParts: string[]
  colors: string[]
  artists: string[]
  searchQuery: string
  isAiOnly: boolean
  sortBy: 'recent' | 'popular' | 'rating'
  minRating?: number
}

const mockGalleryData: GalleryItem[] = [
  {
    id: '1',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    title: 'Dragon Sleeve Design',
    artist: 'Sarah Johnson',
    style: 'Japanese',
    bodyPart: 'Arm',
    colors: ['black', 'red', 'gold'],
    isAiEnhanced: true,
    processSteps: [
      { id: '1', name: 'Initial Sketch', description: 'Hand-drawn concept' },
      { id: '2', name: 'AI Enhancement', description: 'Added details and shading' }
    ],
    metadata: {
      dimensions: { width: 1024, height: 1536 },
      fileSize: 2048000,
      processTime: 45,
      aiModel: 'InkAI-Pro-v2',
      prompts: ['Japanese dragon', 'detailed scales', 'traditional colors']
    },
    likes: 342,
    views: 1250,
    createdAt: '2024-01-15',
    tags: ['dragon', 'sleeve', 'traditional', 'detailed']
  },
  {
    id: '2',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    title: 'Minimalist Rose',
    artist: 'Mike Chen',
    style: 'Minimalist',
    bodyPart: 'Wrist',
    colors: ['black'],
    isAiEnhanced: false,
    processSteps: [
      { id: '1', name: 'Design', description: 'Clean line work' }
    ],
    metadata: {
      dimensions: { width: 512, height: 768 },
      fileSize: 512000
    },
    likes: 189,
    views: 890,
    createdAt: '2024-01-20',
    tags: ['rose', 'minimalist', 'linework']
  }
]

export default function Gallery() {
  const [filters, setFilters] = useState<FilterState>({
    styles: [],
    bodyParts: [],
    colors: [],
    artists: [],
    searchQuery: '',
    isAiOnly: false,
    sortBy: 'recent'
  })

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [page, setPage] = useState(1)

  const { data: galleryData, isLoading } = useQuery({
    queryKey: ['gallery', filters, page],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      return {
        items: mockGalleryData,
        hasNextPage: page < 3,
        totalCount: 50
      }
    }
  })

  const filteredItems = useMemo(() => {
    if (!galleryData?.items) return []
    
    return galleryData.items.filter(item => {
      if (filters.styles.length && !filters.styles.includes(item.style)) return false
      if (filters.bodyParts.length && !filters.bodyParts.includes(item.bodyPart)) return false
      if (filters.artists.length && !filters.artists.includes(item.artist)) return false
      if (filters.isAiOnly && !item.isAiEnhanced) return false
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        const searchableText = `${item.title} ${item.artist} ${item.style} ${item.tags.join(' ')}`.toLowerCase()
        if (!searchableText.includes(query)) return false
      }
      return true
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'popular':
          return b.likes - a.likes
        case 'rating':
          return b.views - a.views
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })
  }, [galleryData?.items, filters])

  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPage(1)
  }, [])

  const clearAllFilters = useCallback(() => {
    setFilters({
      styles: [],
      bodyParts: [],
      colors: [],
      artists: [],
      searchQuery: '',
      isAiOnly: false,
      sortBy: 'recent'
    })
    setPage(1)
  }, [])

  const hasActiveFilters = useMemo(() => {
    return filters.styles.length > 0 || 
           filters.bodyParts.length > 0 || 
           filters.colors.length > 0 || 
           filters.artists.length > 0 || 
           filters.searchQuery.length > 0 || 
           filters.isAiOnly
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Design Gallery
            </h1>
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={filters.searchQuery}
                onChange={(value) => updateFilter('searchQuery', value)}
                placeholder="Search designs, artists, styles..."
              />
            </div>
            <SortControls
              sortBy={filters.sortBy}
              onSortChange={(value) => updateFilter('sortBy', value)}
            />
          </div>

          {hasActiveFilters && (
            <div className="mt-4">
              <FilterChips
                filters={filters}
                onRemoveFilter={(key, value) => {
                  if (key === 'searchQuery' || key === 'isAiOnly') {
                    updateFilter(key, key === 'isAiOnly' ? false : '')
                  } else {
                    const currentValues = filters[key] as string[]
                    updateFilter(key, currentValues.filter(v => v !== value))
                  }
                }}
                onClearAll={clearAllFilters}
              />
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.div
            initial={false}
            animate={{ 
              x: sidebarOpen ? 0 : -320,
              opacity: sidebarOpen ? 1 : 0
            }}
            className={cn(
              "fixed lg:static top-0 left-0 z-50 h-full lg:h-auto",
              "w-80 lg:w-64 bg-white dark:bg-gray-800 lg:bg-transparent",
              "border-r lg:border-r-0 shadow-lg lg:shadow-none",
              "lg:block lg:opacity-100 lg:translate-x-0"
            )}
          >
            {sidebarOpen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 lg:hidden"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            
            <FilterSidebar
              filters={filters}
              onFilterChange={updateFilter}
              availableOptions={{
                styles: ['Japanese', 'Traditional', 'Minimalist', 'Realistic', 'Abstract'],
                bodyParts: ['Arm', 'Leg', 'Back', 'Chest', 'Wrist', 'Ankle'],
                colors: ['black', 'red', 'blue', 'green', 'gold', 'purple'],
                artists: ['Sarah Johnson', 'Mike Chen', 'Alex Rivera', 'Emma Davis']
              }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : (
              <GalleryGrid
                items={filteredItems}
                onImageClick={setSelectedImage}
                onLoadMore={() => setPage(prev => prev + 1)}
                hasNextPage={galleryData?.hasNextPage || false}
              />
            )}
            
            {filteredItems.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No designs match your filters</p>
                  <p className="text-sm">Try adjusting your search criteria</p>
                </div>
                {hasActiveFilters && (
                  <Button onClick={clearAllFilters} className="mt-4">
                    Clear All Filters
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNavigate={(direction) => {
              const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
              const nextIndex = direction === 'next' 
                ? Math.min(currentIndex + 1, filteredItems.length - 1)
                : Math.max(currentIndex - 1, 0)
              setSelectedImage(filteredItems[nextIndex])
            }}
            canNavigateNext={filteredItems.findIndex(item => item.id === selectedImage.id) < filteredItems.length - 1}
            canNavigatePrev={filteredItems.findIndex(item => item.id === selectedImage.id) > 0}
          />
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
