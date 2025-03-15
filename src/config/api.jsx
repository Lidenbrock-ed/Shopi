// API Base URLs
export const URL = {
  PRODUCTION: import.meta.env.VITE_API_URL_PROD,
  DEVELOP: import.meta.env.VITE_API_URL_DEV
}

// API Endpoints
export const ENDPOINTS = {
  PRODUCTS: '/products',
}

// API Configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: import.meta.env.VITE_API_TIMEOUT,
}

// API Status Codes
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
}