export const equals = (value, ...args) => {
  const result = args.filter(key => key === value)
  return result.length > 0
}

export const isArray = (item) => {
  return Array.isArray(item)
}

export const isEmpty = (item) => {
  return isArray(item) && item.length === 0
}
