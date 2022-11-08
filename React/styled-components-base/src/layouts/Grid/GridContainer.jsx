import styled from '@emotion/styled'

const PROPS_SHOULD_BE_HIDDEN = [
  'direction',
  'columns',
  'columnSpacing',
  'rowSpacing',
  'autoColumns',
  'backgroundColor',
  'style'
]

const getRepeat = (columns, autoColumns) => `repeat(${columns}, ${autoColumns ? 'auto' : '1fr'})`


const GridContainer = styled('div', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop)
})(
  ({
    theme,
    direction,
    columns,
    columnSpacing,
    rowSpacing,
    autoColumns,
    backgroundColor,
    style
  }) => ({
    display: 'grid',
    ...(direction === 'row' ?
      {
        gridTemplateColumns: getRepeat(columns, autoColumns)
      } :
      {
        gridTemplateRows: getRepeat(columns, autoColumns),
        '& > *': {
          width: '100%'
        }
      }
    ),
    columnGap: theme.spacing(columnSpacing),
    rowGap: theme.spacing(rowSpacing),
    backgroundColor,
    ...style
  })
)

export default GridContainer