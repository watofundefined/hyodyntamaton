export interface GoogleTranslateRequest {
  q: string[]
  target: string
  format: 'text'
  key: string
}

export interface GoogleTranslateResult {
  data: {
    translations: GoogleTranslation[]
  }
}

export interface GoogleTranslation {
  detectedSourceLanguage: string
  translatedText: string
}
