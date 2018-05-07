import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducers from '../reducers';

const middleware = [];
// middleware.push(createReactNavigationReduxMiddleware('root', state => state.nav));
// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

// export default createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
export default createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
  ),
);
