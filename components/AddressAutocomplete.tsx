"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface AddressAutocompleteProps {
  id: string
  name: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
  error?: boolean
}

// Debounce helper
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function AddressAutocomplete({
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  disabled,
  className,
  error
}: AddressAutocompleteProps) {
  const [inputValue, setInputValue] = useState(value)
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [servicesReady, setServicesReady] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null)
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null)

  // Update input value when prop value changes
  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Initialize Google Places services
  useEffect(() => {
    const initServices = () => {
      if (typeof google === 'undefined' || !google.maps?.places) {
        setTimeout(initServices, 100)
        return
      }

      try {
        autocompleteServiceRef.current = new google.maps.places.AutocompleteService()
        // PlacesService requires a DOM element
        const div = document.createElement('div')
        placesServiceRef.current = new google.maps.places.PlacesService(div)
        setServicesReady(true)
      } catch (error) {
        console.error('Failed to initialize Google Places services:', error)
      }
    }

    initServices()
  }, [])

  // Fetch predictions
  const fetchPredictions = useCallback(
    debounce((input: string) => {
      if (!autocompleteServiceRef.current || input.length < 2 || disabled) {
        setPredictions([])
        setShowDropdown(false)
        return
      }

      autocompleteServiceRef.current.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: 'nl' },
          types: ['address'],
        },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPredictions(predictions)
            setShowDropdown(true)
            setHighlightedIndex(-1)
          } else {
            setPredictions([])
            setShowDropdown(false)
          }
        }
      )
    }, 300),
    [disabled]
  )

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange(newValue)

    if (servicesReady) {
      fetchPredictions(newValue)
    }
  }

  // Handle place selection
  const handleSelect = (placeId: string, description: string) => {
    if (!placesServiceRef.current) {
      onChange(description)
      setInputValue(description)
      setPredictions([])
      setShowDropdown(false)
      return
    }

    placesServiceRef.current.getDetails(
      { placeId, fields: ['formatted_address'] },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place?.formatted_address) {
          const address = place.formatted_address
          onChange(address)
          setInputValue(address)
        } else {
          onChange(description)
          setInputValue(description)
        }
        setPredictions([])
        setShowDropdown(false)
      }
    )
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || predictions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev < predictions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0)
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < predictions.length) {
          const prediction = predictions[highlightedIndex]
          handleSelect(prediction.place_id, prediction.description)
        }
        break
      case 'Escape':
        e.preventDefault()
        setShowDropdown(false)
        setPredictions([])
        break
    }
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={cn(
          "bg-muted border text-foreground placeholder:text-muted-foreground focus:bg-white disabled:bg-muted disabled:text-muted-foreground",
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-border',
          className
        )}
      />

      {showDropdown && predictions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-muted border border-border rounded-md shadow-lg max-h-60 overflow-auto"
        >
          {predictions.map((prediction, index) => (
            <div
              key={prediction.place_id}
              className={cn(
                "px-3 py-2 cursor-pointer text-foreground transition-colors",
                "hover:bg-white",
                highlightedIndex === index && "bg-white"
              )}
              onClick={() => handleSelect(prediction.place_id, prediction.description)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              <div className="font-medium text-sm">
                {prediction.structured_formatting.main_text}
              </div>
              <div className="text-xs text-muted-foreground">
                {prediction.structured_formatting.secondary_text}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
