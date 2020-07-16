function mainHeight(): number {
  return typeof document === 'undefined' ? 500 : _mainHeight()
}

function bodyWidth(): number {
  return typeof document === 'undefined'
    ? 500
    : document.body.getBoundingClientRect().width
}

function _mainHeight(): number {
  const wrapper = document.getElementById('__next')
  const header = wrapper.getElementsByTagName('header')[0]
  const footer = wrapper.getElementsByTagName('footer')[0]

  let height = wrapper.getBoundingClientRect().height

  if (header) {
    height -= header.getBoundingClientRect().height + 50
  }

  if (footer) {
    height -= footer.getBoundingClientRect().height + 50
  }

  return height
}

export { mainHeight, bodyWidth }
