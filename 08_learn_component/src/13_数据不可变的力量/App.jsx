import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            books: [
                {name: '你不知道的JS', price: 99, count: 1},
                {name: 'JS高级程序设计', price: 109, count: 2},
                {name: 'React高级设计', price: 88, count: 4},
                {name: '你不知道的JS', price: 56, count: 3},
            ]
        }
    }

    addBookCount = (index) => {
        console.log('点击 +1: ', index)
        const books = [...this.state.books]
        books[index].count++
        
        this.setState({
            books: books
        })
    }

    addNewBook = () => {
        const newBook = {
            name: 'angular高级设计',
            price: 55,
            count: 9
        }
        const books = [...this.state.books]
        books.push(newBook)
        this.setState({
            books: books
        })
    }
  render() {
    const {books} = this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
            {
                books.map((item, index) => {
                    return <li key={index}>
                        <span>name: {item.name}-price: {item.price}-count: {item.count}</span>
                        <button onClick={e => this.addBookCount(index)}>+1</button>
                    </li>
                })
            }
        </ul>
        <button onClick={e => this.addNewBook()}>添加新书籍</button>
      </div>
    )
  }
}

export default App