
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

interface FilterState {
  styles: string[]
  bodyParts: string[]
  colors: string[]
  artists: string[]
  searchQuery: string
  isAiOnly: boolean
  sortBy: 'recent' | 'popular' | 'rating'
}

interface FilterSidebarProps {
  filters: FilterState
  onFilterChange: (key: keyof FilterState, value: any) => void
  availableOptions: {
    styles: string[]
    bodyParts: string[]
    colors: string[]
    artists: string[]
  }
}

export function FilterSidebar({ filters, onFilterChange, availableOptions }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['styles', 'bodyParts', 'colors'])
  )

  const toggleSection = (section: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(section)) {
      newOpenSections.delete(section)
    } else {
      newOpenSections.add(section)
    }
    setOpenSections(newOpenSections)
  }

  const handleCheckboxChange = (key: keyof FilterState, value: string, checked: boolean) => {
    const currentValues = filters[key] as string[]
    if (checked) {
      onFilterChange(key, [...currentValues, value])
    } else {
      onFilterChange(key, currentValues.filter(v => v !== value))
    }
  }

  const filterSections = [
    {
      key: 'styles',
      title: 'Style',
      options: availableOptions.styles,
      selectedValues: filters.styles
    },
    {
      key: 'bodyParts',
      title: 'Body Part',
      options: availableOptions.bodyParts,
      selectedValues: filters.bodyParts
    },
    {
      key: 'colors',
      title: 'Colors',
      options: availableOptions.colors,
      selectedValues: filters.colors,
      renderOption: (option: string) => (
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: option === 'black' ? '#000' : option }}
          />
          <span className="capitalize">{option}</span>
        </div>
      )
    },
    {
      key: 'artists',
      title: 'Artists',
      options: availableOptions.artists,
      selectedValues: filters.artists
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filters
        </h2>
      </div>

      {/* AI Only Toggle */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <Label htmlFor="ai-only" className="text-sm font-medium">
              AI Enhanced Only
            </Label>
          </div>
          <Switch
            id="ai-only"
            checked={filters.isAiOnly}
            onCheckedChange={(checked) => onFilterChange('isAiOnly', checked)}
          />
        </div>
        <p className="text-xs text-gray-500">
          Show only designs enhanced with AI technology
        </p>
      </div>

      {/* Filter Sections */}
      {filterSections.map((section) => (
        <Collapsible
          key={section.key}
          open={openSections.has(section.key)}
          onOpenChange={() => toggleSection(section.key)}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto font-medium text-left"
            >
              <span>{section.title}</span>
              <motion.div
                animate={{ rotate: openSections.has(section.key) ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-3">
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {section.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${section.key}-${option}`}
                    checked={section.selectedValues.includes(option)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        section.key as keyof FilterState,
                        option,
                        checked as boolean
                      )
                    }
                  />
                  <Label
                    htmlFor={`${section.key}-${option}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {section.renderOption ? section.renderOption(option) : option}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}

      {/* Clear All Button */}
      <Button
        variant="outline"
        onClick={() => {
          onFilterChange('styles', [])
          onFilterChange('bodyParts', [])
          onFilterChange('colors', [])
          onFilterChange('artists', [])
          onFilterChange('isAiOnly', false)
        }}
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  )
}
