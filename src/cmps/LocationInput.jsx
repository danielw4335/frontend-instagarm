import { useRef, useEffect, useState } from 'react'
import { Location } from '../assets/SVG/icons'

export function LocationInput({ value, onChange, onPlaceSelected }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (!window.google?.maps?.places?.Autocomplete) return

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current)
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (place) onPlaceSelected(place)
    })

    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete)
    }
  }, [])

  return (
    <div className="location-input-wrapper">
      <input
        ref={inputRef}
        className="location-input"
        placeholder="Add location"
        value={value || ''}
        onChange={onChange}
      />
      {/* <Location /> */}
    </div>
  )
}
