const initialState = {
  display: 'none',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'show':
      return {
        show: () => {
          if (this.state.display === 'none') {
            this.setState({
              display: 'block',
            })
          } else if (this.state.display === 'block') {
            this.setState({
              display: 'none',
            })
          }
        },
      }

    default:
      return state
  }
}
export default reducer
