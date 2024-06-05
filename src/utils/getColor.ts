const getColor = (color: string) => {
  return color.includes('linear-gradient') ? {
    'background': color,
    'backgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  } : { color }
}

export default getColor