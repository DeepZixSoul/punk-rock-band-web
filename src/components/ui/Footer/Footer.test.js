import { describe, it, expect } from 'vitest'
import footerLogic from './Footer.js'

describe('Footer', () => {
  it('retorna array de enlaces con label y href', () => {
    const { links } = footerLogic()
    expect(links).toHaveLength(5)
    links.forEach((link) => {
      expect(link).toHaveProperty('label')
      expect(link).toHaveProperty('href')
    })
  })

  it('incluye Inicio como primer enlace', () => {
    const { links } = footerLogic()
    expect(links[0]).toEqual({ label: 'Inicio', href: '/' })
  })

  it('retorna email de contacto', () => {
    const { contact } = footerLogic()
    expect(contact.email).toBe('contacto@gayola.com')
  })

  it('retorna ubicación con ciudad y región', () => {
    const { location } = footerLogic()
    expect(location).toEqual({ city: 'Aspe', region: 'Alicante' })
  })
})
