import { useRef, useEffect, useState } from 'react'
import { Location } from '../assets/SVG/icons'

export function LocationInput({ value, onChange, onPlaceSelected }) {
  const inputRef = useRef(null)
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(!!window.google?.maps?.places?.Autocomplete)

  useEffect(() => {
    if (window.google?.maps?.places?.Autocomplete) {
      setIsGoogleLoaded(true)
      initAutocomplete()
    } else {
      const checkGoogleInterval = setInterval(() => {
        if (window.google?.maps?.places?.Autocomplete) {
          setIsGoogleLoaded(true)
          clearInterval(checkGoogleInterval)
          initAutocomplete()
        }
      }, 100)
      
      return () => clearInterval(checkGoogleInterval)
    }
  }, [])
  
  function initAutocomplete() {
    if (!inputRef.current) return
    
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current)
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (place) onPlaceSelected(place)
    })
    
    return () => {
      if (window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocomplete)
      }
    }
  }

  return (
    <div className="location-input-wrapper">
      <input
        ref={inputRef}
        className="location-input"
        placeholder="Add location"
        value={value || ''}
        onChange={onChange}
      />
    </div>
  )
}
