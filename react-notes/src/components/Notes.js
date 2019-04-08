import React, {Component} from 'react'
import Note from './Note'
import { db,loadCollection } from '../database'

class Notes extends Component {
  constructor(props) {
    super(props)
    this.getInitialData()
  }

  state = {
    entities: []
  }

  getInitialData () {
    loadCollection('notes')
      .then((collection) => {
        // collection.insert([
        //   {body: 'hello ~'},
        //   {body: 'hola ~'},
        // ])
        // db.saveDatabase()
        const entities = collection.chain()
          .find()
          .simplesort('$loki','isdesc')
          .data()
          this.setState({
              entities
          })
        console.log(entities)
      })
  }

  render() {
    const entities = this.state.entities
    const noteItems = entities.map((entity) =>
      <Note
        key={entity.$loki}
        entity={entity}
      />
    )
      
    return (
      <div className="ui container notes">
				<h4 className="ui horizontal divider header">
					<i className="paw icon"></i>
					React Notes
				</h4>
        <button className="ui right floated basic button">添加笔记</button>
        <div className="ui divided items">
          {noteItems}
          <span className="ui small disabled header"></span>
          <span className="ui small disabled header">
            请按下 '添加笔记' 按钮
          </span>
        </div>
        <Note />
      </div>
    );
  }
}



export default Notes	