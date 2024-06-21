const getColor = (color: string) => {
  return color.includes('linear-gradient') ? {
    'background': color,
    'WebkitBackgroundClip' : 'text',
    'WebkitTextFillColor': 'transparent',
  } : { color }
}

export default getColor