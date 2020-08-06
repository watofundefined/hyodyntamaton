export interface PageHeights {
  root: number
  header: number
  footer: number
}

function mainHeight(): number {
  return typeof document === 'undefined' ? 500 : _mainHeight()
}

function bodyWidth(): number {
  return typeof document === 'undefined'
    ? 500
    : document.body.getBoundingClientRect().width
}

function pageHeights(): PageHeights {
  if (typeof document === 'undefined') {
    return {
      root: 500,
      footer: 50,
      header: 50,
    }
  }
  return {
    root: rootHeight(),
    header: headerHeight(),
    footer: footerHeight(),
  }
}

function rootDimensions(): ClientRect {
  if (typeof document === 'undefined') {
    return {
      bottom: 0,
      height: 500,
      width: 500,
      left: 0,
      right: 0,
      top: 0,
    }
  }

  return getRoot().getBoundingClientRect()
}

function _mainHeight(): number {
  const appRoot = getRoot()

  return (
    appRoot.getBoundingClientRect().height - footerHeight(appRoot) - headerHeight(appRoot)
  )
}

function rootHeight(root = getRoot()) {
  return root.getBoundingClientRect().height
}

function headerHeight(root = getRoot()) {
  const el = root.getElementsByTagName('header')[0]
  return el ? el.getBoundingClientRect().height : 0
}

function footerHeight(root = getRoot()) {
  const el = root.getElementsByTagName('footer')[0]
  return el ? el.getBoundingClientRect().height : 0
}

function getRoot() {
  return document.getElementById('__next')
}

export { mainHeight, bodyWidth, pageHeights, rootDimensions }
