
import React from 'react'
import { ArrowUpDown, Clock, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SortControlsProps {
  sortBy: 'recent' | 'popular' | 'rating'
  onSortChange: (sortBy: 'recent' | 'popular' | 'rating') => void
}

export function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  const sortOptions = [
    { value: 'recent' as const, label: 'Most Recent', icon: Clock },
    { value: 'popular' as const, label: 'Most Popular', icon: Heart },
    { value: 'rating' as const, label: 'Highest Rated', icon: Star },
  ]

  const currentSort = sortOptions.find(option => option.value === sortBy)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4" />
          <span className="hidden sm:inline">Sort by:</span>
          {currentSort && <currentSort.icon className="w-4 h-4" />}
          <span className="hidden sm:inline">{currentSort?.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className="flex items-center gap-2"
          >
            <option.icon className="w-4 h-4" />
            {option.label}
            {sortBy === option.value && (
              <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
