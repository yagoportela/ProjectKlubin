import { PureComponent } from 'react'
import type from 'prop-types'

class ErrorBoundary extends PureComponent {
    state = { hasError: false }

    static propTypes = {
      children: type.func.isRequired
    }

    static getDerivedStateFromError () {
      return { hasError: true }
    }

    render () {
      // eslint-disable-next-line react/prop-types
      return this.props.children(this.state.hasError)
    }
}

export default ErrorBoundary
