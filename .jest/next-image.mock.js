import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest} = props

    const style = {
      position: 'absolute',
      inset: '0px',
      boxSizing: 'border-box',
      padding: '0px',
      border: 'none',
      margin: 'auto',
      display: 'block',
      width: '0px',
      height: '0px',
      minWidth: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
    }

    let newProps = { ...rest }

    if (rest.layout === 'fill') {
      newProps = { ...rest, style };
    }

    return <img {...newProps} />
  }
})
