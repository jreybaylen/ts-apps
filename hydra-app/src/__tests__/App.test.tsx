import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { App } from '@pages/App'

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('It should work w/o errors', () => {
    expect(screen.findByTestId('hydra-app')).toBeTruthy()
  })

  test('It should display "Hello World!"', async () => {
    expect(screen.getByTestId('banner-heading').textContent).toBe('Hello World!')
  })
})
