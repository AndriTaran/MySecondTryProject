import {css} from 'styled-components/native'

export const dimensionStyles = css`
  ${({width}) => width && `width: ${width}`}
  ${({height}) => height && `height: ${height}`}`

export const marginStyles = css`
  ${({mt}) => mt && `margin-top: ${mt}`}
  ${({mb}) => mb && `margin-bottom: ${mb}`}
  ${({ml}) => ml && `margin-left: ${ml}`}
  ${({mr}) => mr && `margin-right: ${mr}`}
  ${({margin}) => margin && `margin: ${margin}`}
`

export const paddingStyles = css`
  ${({pt}) => pt && `padding-top: ${pt}`}
  ${({pr}) => pr && `padding-right: ${pr}`}
  ${({pb}) => pb && `padding-bottom: ${pb}`}
  ${({pl}) => pl && `padding-left: ${pl}`}
  ${({padding}) => padding && `padding: ${padding}`}
`

export const borderStyles = css`
  ${({borderBottomColor}) => borderBottomColor && `border-bottom-color: ${borderBottomColor}`}
  ${({borderTopColor}) => borderTopColor && `border-top-color: ${borderTopColor}`}
  ${({borderLeftColor}) => borderLeftColor && `border-left-color: ${borderLeftColor}`}
  ${({borderRightColor}) => borderRightColor && `border-right-color: ${borderRightColor}`}
  ${({borderBottomWidth}) => borderBottomWidth && `border-bottom-width: ${borderBottomWidth}`}
  ${({borderTopWidth}) => borderTopWidth && `border-top-width: ${borderTopWidth}`}
  ${({borderRightWidth}) => borderRightWidth && `border-right-width: ${borderRightWidth}`}
  ${({borderLeftWidth}) => borderLeftWidth && `border-left-width: ${borderLeftWidth}`}
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`}
  ${({borderStyle}) => borderStyle && `border-style: ${borderStyle}`}
  ${({border}) => border && `border: ${border}`}
`
