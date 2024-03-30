import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext, UserContext } from './05_useContext的使用/context/index'
// import { UserContext, TokenContext } from './12_自定义hooks/context' // 12_自定义hooks/02_Context获取数据
import { Provider } from 'react-redux'
import store from './13_redux中的hooks/store'

// import App from './02_计数器实现对比/App';
// import App from './05_useContext的使用/App';
// import App from './06_useReducer的使用/App';
// import App from './07_useCallback的使用/App';
// import App from './08_useMemo的使用/App';
// import App from './09_useRef的使用/App';
import App from './10_useImparetiveHandle/App';
// import App from './11_useLayoutEffect的使用/01_useLayoutEffect和useEffect执行时机';
// import App from './11_useLayoutEffect的使用/02_切换数字_useEffect_界面闪烁';
// import App from './11_useLayoutEffect的使用/03_切换数字_useLayoutEffect';
// import App from './12_自定义hooks/02_Context获取数据';
// import App from './12_自定义hooks/03_获取窗口滚动位置';
// import App from './12_自定义hooks/App';
// import App from './13_redux中的hooks/App_connect'
// import App from './13_redux中的hooks/App'
// import App from './14_userId的使用/App'
// import App from './15_useTransition使用/App_useTransition的使用'
// import App from './15_useTransition使用/App_useDeferredValue的使用'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeContext.Provider value={{color: 'red', size: 30}}>
    <UserContext.Provider value={{name: 'xizhou', level: 99}}>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext.Provider>
  </ThemeContext.Provider>
  // </React.StrictMode>
);


// 12_自定义hooks/02_Context获取数据
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <TokenContext.Provider value={'xizhou4016'}>
//     <UserContext.Provider value={{name: 'xizhou', level: 99}}>
//       <App />
//     </UserContext.Provider>
//   </TokenContext.Provider>
//   </React.StrictMode>
// );

