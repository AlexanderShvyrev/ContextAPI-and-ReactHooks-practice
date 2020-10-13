
//++++++++++++++++++++++++++++++++++++USING CONTEXT HOOK+++++++++++++++++++++++++++++++++++++++

import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'


const BookList = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookList

//++++++++++++++++++++++USING CONTEXT WITH REGULAR CLASS BASED COMPONENT+++++++++++++++++++++++

// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext'



// class BookList extends Component {
//   static contextType = ThemeContext

//   render() {
//     const { isLightTheme, light, dark } = this.context
//     const theme = isLightTheme ? light : dark
//     return (
//       <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;