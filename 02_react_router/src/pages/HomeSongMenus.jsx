import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/with_router'

class HomeSongMenus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songmenus: [
                {
                    id: 111, name: '流行音乐'
                },
                {
                    id: 112, name: '古典音乐'
                },
                {
                    id: 113, name: '欧美音乐'
                }
            ]
        }
    }

    navigateToDetail(id) {
        console.log('id', id)
        this.props.router.navigate('/detail/' + id)
    }
    render() {
        const { songmenus } = this.state;
        return (
            <div>
                <h1>HomeSongMenus page.</h1>
                <ul onClick={e => {this.navigateToDetail(e.target.id)}}>
                    {
                        songmenus.map(item => <li key={item.id} id={item.id}>{ item.name }</li>)
                    }
                </ul>
            </div>
        ) 
    }
}

export default withRouter(HomeSongMenus)