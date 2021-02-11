import React, { Component } from "react";
import { readEvents } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'

class EventsIndex extends Component {
  componentDidMount() {
    console.log('hi')
    this.props.readEvents()
  }

  readEvents(){
    return _.map(this.props.events,event => ( 
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
    ))
  }
  render(){
    const props = this.props

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.readEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchProps = ({ readEvents })

export default connect(mapStateToProps,mapDispatchProps)(EventsIndex);
