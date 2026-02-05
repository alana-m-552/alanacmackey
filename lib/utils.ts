import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path for GitHub Pages deployment
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/alanacmackey' : ''
}

// Helper to prepend base path to asset URLs
export function assetPath(path: string) {
  const basePath = getBasePath()
  return `${basePath}${path}`
}
