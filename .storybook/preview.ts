import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { createPinia } from 'pinia'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/index.css'

//👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
setup((app) => {
  app.use(createPinia());
});

// Registers the msw addon
initialize()
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  loaders: [mswLoader],
}

export default preview
