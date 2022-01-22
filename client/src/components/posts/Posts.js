import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getPosts} from "../../actions/post";
import {useEffect} from "react";

const Post = ({getPosts, post: {posts, loading}}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <div></div>
    )
};

Post.propTypes ={
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const  mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(Post);