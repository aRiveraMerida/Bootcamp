import GridContainer from './GridContainer'

const Grid = (props) => {
  const { container } = props;
  if (container) {
    const {
      direction = 'row',
      columns = 12,
      columnSpacing = 0,
      rowSpacing = 0,
      autoColumns = false,
      backgroundColor = 'transparent',
      spacing,
      style = {},
      children
    } = props

    return (
      <GridContainer
        columns={columns}
        direction={direction}
        columnSpacing={spacing || columnSpacing}
        rowSpacing={spacing || rowSpacing}
        autoColumns={autoColumns}
        backgroundColor={backgroundColor}
        style={style}
      >
        {children}
      </GridContainer>
    )
  }
}

export default Grid