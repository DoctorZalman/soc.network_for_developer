// import React from 'react';
// import {Navigate, Route, Routes} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {connect} from "react-redux";
//
// const PrivateRoute = ({
//                           component: Component,
//                           auth: {isAuthenticated, loading},
//                           ...rest
//                       }) => (
//     <Route {...rest}
//            element={props => !isAuthenticated && !loading ? (
//                <Routes>
//                    <Route path="/" element={<Navigate replace to="/login"/>}/>
//                </Routes>
//            ) : (
//                <Component {...props} />
//            )}/>
// )
//
// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired
// }
//
// const mapStateToProps = state => ({
//     auth: state.auth
// });
//
// export default connect(mapStateToProps)(PrivateRoute);