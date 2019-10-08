import { connect } from 'react-redux';
import { Layout } from 'react-admin';

import { darkTheme } from './layout/themes';

export default connect(state => ({
    theme: state.theme === 'dark' ? darkTheme : {},
}))(Layout);
