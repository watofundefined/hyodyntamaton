export interface GoogleDetectRequest {
  q: string[]
  key: string
}

export interface GoogleDetectResult {
  data: {
    detections: [GoogleDetection][]
  }
}

export interface GoogleDetection {
  // @deprecated
  confidence: number
  // @deprecated
  isReliable: boolean
  language: string
}
