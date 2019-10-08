import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'react-admin';
import AppBar from './AppBar';
import { darkTheme } from './themes';

const CustomLayout = props => <Layout {...props} appBar={AppBar} />;

export default connect(state => ({
    theme: state.theme === 'dark' ? darkTheme : {},
}))(CustomLayout);
