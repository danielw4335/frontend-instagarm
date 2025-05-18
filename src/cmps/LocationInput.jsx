import { useEffect, useRef } from 'react'

export function LocationInput({ onPlaceSelected }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!window.google?.maps?.places?.PlaceAutocompleteElement) return

      clearInterval(interval)

      const autocompleteEl = new google.maps.places.PlaceAutocompleteElement()

      autocompleteEl.addEventListener('gmp-placeautocomplete-placechange', () => {
        const place = autocompleteEl.getPlace()
        if (place) onPlaceSelected(place)
      })

      if (containerRef.current) {
        containerRef.current.innerHTML = 'Add location'
        containerRef.current.appendChild(autocompleteEl)
      }
    }, 100)
  }, [])

  return <div ref={containerRef} className="location-input-wrapper" />
}
