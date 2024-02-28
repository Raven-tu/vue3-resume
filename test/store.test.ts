import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useResumestore } from '~/stores/resume'

describe('store useResumestore', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })

  beforeEach(() => {
    const { resetData } = useResumestore()
    resetData()
  })

  it('should active', () => {
    const store = useResumestore()
    expect(store.currentData.about.name).toBe('Miguel Ángel Durán')
  })

  it('should can be import', () => {
    const store = useResumestore()
    expect(store.currentData.about.name).toBe('Miguel Ángel Durán')
    store.importData({
      about: {
        name: '123',
        role: '456',
        location: '789',
        contack: '',
      },
      experience: [],
      skills: [],
      education: [],
      projects: [],
    })
    const { currentData: newCurrentData } = useResumestore()
    expect(newCurrentData.about.name).toBe('123')
    expect(newCurrentData.about.role).toBe('456')
    expect(newCurrentData.about.location).toBe('789')
  })

  it('should be reactive', () => {
    const store = useResumestore()
    expect(store.currentData.about.name).toBe('Miguel Ángel Durán')
    store.$patch((state) => {
      state.currentData.about.name = '123'
    })
    expect(store.currentData.about.name).toBe('123')
  })
})
