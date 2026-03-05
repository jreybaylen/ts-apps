import { create } from 'zustand'

type CountState = {
  count: number
}

type CountAction = {
  setCount: (count: number) => void
}

export const useCounter = create<CountState & CountAction>(
  (set) => ({
    count: 0,
    setCount(count: number) {
      return set(() => ({ count }))
    }
  })
)
