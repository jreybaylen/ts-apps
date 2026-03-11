import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { App } from '@pages/App'

describe('App component', () => {
  beforeEach(() => {
    cleanup()
    render(<App />)
  })

  test('It should work w/o errors', () => {
    expect(screen.findByTestId('hydra-app')).toBeTruthy()
  })
})
