import { GeoLocation } from 'lib/types'
import { Venue } from 'lib/types'

export interface GoogleMapProps {
  location: GeoLocation
  venues: Venue[]
}

export interface WindowWithGoogleStuff extends Window {
  onMapInit(): void
  google: any
}

// Google Maps interfaces below.
// Created from their website & looking at objects in console.
// https://developers.google.com/maps/documentation/javascript/reference
// Some interfaces and event types describe only a subset of real objects
export interface XY {
  x: number
  y: number
}

export interface LatLng {
  lat: () => number
  lng: () => number
}

export type MapEventType =
  | 'click'
  | 'dblclick'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'projection_changed'
  | 'rightclick'
  // The ones below seem to not pass in any event in event cb
  // Leaving as one type for now
  | 'bounds_changed'
  | 'center_changed'
  | 'drag'
  | 'dragend'
  | 'dragstart'
  | 'heading_changed'
  | 'idle'
  | 'maptypeid_changed'
  | 'tilesloaded'
  | 'tilt_changed'
  | 'zoom_changed'

export interface MapEvent {
  ab: XY
  latLng: LatLng
  pixel: XY
  tb: MouseEvent
}

export type MarkerEventType =
  | 'click'
  | 'clickable_changed'
  | 'cursor_changed'
  | 'dblclick'
  | 'mousedown'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'position_changed'
  | 'rightclick'
  | 'shape_changed'
  | 'title_changed'
  | 'visible_changed'

export interface MarkerEvent {
  ab?: XY
  latLng: LatLng
  pixel: XY
  tb: MouseEvent
}

export interface GoogleMapInstance {
  addListener(event: MapEventType, listener: (e?: MapEvent) => void): this
  center: LatLng
  zoom: number
  zoomControl: boolean
}

export interface MarkerInstance {
  addListener(event: MarkerEventType, listener: (e?: MarkerEvent) => void): this
  /*
   * Call with null to remove the marker from the DOM
   */
  setMap: (map?: GoogleMapInstance) => void
  map: GoogleMapInstance
  label: string
  position: LatLng
  clickable: boolean
  visible: boolean
  setVisible: (val: boolean) => void
  // Custom fields
  id: string | number
}
