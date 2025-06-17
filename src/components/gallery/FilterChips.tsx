
import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface FilterState {
  styles: string[]
  bodyParts: string[]
  colors: string[]
  artists: string[]
  searchQuery: string
  isAiOnly: boolean
  sortBy: 'recent' | 'popular' | 'rating'
}

interface FilterChipsProps {
  filters: FilterState
  onRemoveFilter: (key: keyof FilterState, value: string) => void
  onClearAll: () => void
}

export function FilterChips({ filters, onRemoveFilter, onClearAll }: FilterChipsProps) {
  const getFilterChips = () => {
    const chips: Array<{ key: keyof FilterState; value: string; label: string }> = []

    // Add array-based filters
    ;(['styles', 'bodyParts', 'colors', 'artists'] as const).forEach((key) => {
      const values = filters[key] as string[]
      values.forEach((value) => {
        chips.push({
          key,
          value,
          label: `${key.slice(0, -1)}: ${value}`
        })
      })
    })

    // Add search query
    if (filters.searchQuery) {
      chips.push({
        key: 'searchQuery',
        value: filters.searchQuery,
        label: `Search: "${filters.searchQuery}"`
      })
    }

    // Add AI only filter
    if (filters.isAiOnly) {
      chips.push({
        key: 'isAiOnly',
        value: 'true',
        label: 'AI Enhanced Only'
      })
    }

    return chips
  }

  const chips = getFilterChips()

  if (chips.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Active filters:
      </span>
      
      {chips.map((chip, index) => (
        <Badge key={`${chip.key}-${chip.value}-${index}`} variant="secondary" className="flex items-center gap-1">
          <span className="text-xs">{chip.label}</span>
          <button
            onClick={() => onRemoveFilter(chip.key, chip.value)}
            className="ml-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </Badge>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-xs h-6 px-2"
      >
        Clear All
      </Button>
    </div>
  )
}
