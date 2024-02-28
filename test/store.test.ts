import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useResumestore } from '~/stores/resume'

describe('store useResumestore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should active', () => {
    const { currentData } = useResumestore()
    expect(currentData.about.name).toBe('Miguel Ángel Durán')
  })

  it('should can be import', () => {
    const { currentData, importData } = useResumestore()
    expect(currentData.about.name).toBe('Miguel Ángel Durán')
    importData({
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
    const resumestore = useResumestore()
    expect(resumestore.currentData.about.name).toBe('Miguel Ángel Durán')
    resumestore.currentData.about.name = '123'
    expect(resumestore.currentData.about.name).toBe('123')
  })
})
