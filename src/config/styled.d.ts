import 'styled-components'
import { defaultTheme } from '../components/shared/tokens'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
