import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
  },
  ...tailwind.configs['flat/recommended'],
)
