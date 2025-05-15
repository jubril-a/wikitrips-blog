import { PortableText } from '@portabletext/react'
import { urlFor } from './sanityClient'

const components = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || 'Image'}
        style={{ maxWidth: '100%', height: 'auto', margin: '1em 0' }}
      />
    ),
  },
}

export default function PostContent({ body }) {
  return <PortableText value={body} components={components} />
}