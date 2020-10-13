//++++++++++++++++++++++++++++++++++++USING CONTEXT HOOK+++++++++++++++++++++++++++++++++++++++


import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth} >
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar

//++++++++++++++++++++++USING CONTEXT WITH REGULAR CLASS BASED COMPONENT+++++++++++++++++++++++


// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext'
// import { AuthContext } from '../contexts/AuthContext'

// //FIRST WAY OF CONSUMING DATA FROM CONTEXT

// // class Navbar extends Component {
// //   static contextType = ThemeContext

// //   render() {
// //     const { isLightTheme, light, dark } = this.context
// //     const theme = isLightTheme ? light : dark
// //     return (
// //       <nav style={{ background: theme.ui, color: theme.text }}>
// //         <h1>Context App</h1>
// //         <ul>
// //           <li>Home</li>
// //           <li>About</li>
// //           <li>Contact</li>
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }


// //SECOND WAY OF CONSUMING DATA FROM CONTEXT 


// class Navbar extends Component {

//   render() {

//     return (
//       <AuthContext.Consumer>{(authContext) => {
//         return (
//           <ThemeContext.Consumer>{(themeContext) => {
//             const { isAuthenticated, toggleAuth } = authContext
//             const { isLightTheme, light, dark } = themeContext
//             const theme = isLightTheme ? light : dark
//             return (
//               <nav style={{ background: theme.ui, color: theme.text }}>
//                 <h1>Context App</h1>
//                 <div onClick={toggleAuth} >
//                   {isAuthenticated ? 'Logged In' : 'Logged Out'}
//                 </div>
//                 <ul>
//                   <li>Home</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//               </nav>
//             )
//           }
//           }
//           </ThemeContext.Consumer >
//         )
//       }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;