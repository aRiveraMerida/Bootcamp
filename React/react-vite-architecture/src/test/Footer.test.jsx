import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import Footer, { socialLogos } from '../components/Footer';
import { createTheme, theme } from '../styles';

describe('Test Footer Component', () => {
  beforeEach(
    () => {
      render(
        <ThemeProvider theme={createTheme(theme)}>
          <Footer />
        </ThemeProvider>
      )
    }
  )

  // test('Message text should be appear', async () => {
  //   const text = await screen.getByText('Creado con amor por @RiveraMerida')
  //   expect(text).toBeVisible();
  // })

  test('Message text should be appear', () => {
    expect(screen.getByText('Creado con amor por @RiveraMerida')).toBeVisible();
  })

  test('Social logos should be appear', () => {
    socialLogos.forEach((logo) => {
      expect(screen.getByAltText(`logo ${logo.alt}`)).toBeVisible();
    })
  })
})