import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)