import { transform } from 'nested-css-to-flat'

export default function styled(css) {
  return transform(css)
}