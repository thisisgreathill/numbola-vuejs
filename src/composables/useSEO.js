// composables/useSEO.js
export function useSEO() {
  const updateTitle = (title) => {
    document.title = title
  }

  const updateMeta = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = name
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const updateOGMeta = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const setSEO = ({ title, description, keywords, ogTitle, ogDescription, ogUrl }) => {
    if (title) updateTitle(title)
    if (description) updateMeta('description', description)
    if (keywords) updateMeta('keywords', keywords)
    if (ogTitle) updateOGMeta('og:title', ogTitle)
    if (ogDescription) updateOGMeta('og:description', ogDescription)
    if (ogUrl) updateOGMeta('og:url', ogUrl)
  }

  return {
    setSEO,
    updateTitle,
    updateMeta,
    updateOGMeta
  }
}