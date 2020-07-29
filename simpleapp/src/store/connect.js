import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    display: state.display,
  }
}

const mapDispatch = (dispatch) => {
  return {
    show: () => {
      dispatch({ type: 'show' })
    },
  }
}
export default connect(mapState, mapDispatch)
