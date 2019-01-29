import { path } from 'ramda'

export const CHOICE_TYPES = {
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE',
  TOGGLE: 'TOGGLE',
}

export const getProductPrice = (product) => path(['sku', 'seller', 'commertialOffer', 'Price'], product) || 0

export const parentPricePerUnit = product => {
  const wholePrice = getProductPrice(product)
  const parentPrice = product.addedOptions.reduce((total, option) => 
    total - getProductPrice(option),
    wholePrice
    )
  return parentPrice / product.quantity
}

export const optionPricePerItem = (option, parent) => getProductPrice(option) / parent.quantity
