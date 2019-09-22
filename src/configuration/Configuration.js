import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { translate, ViewTitle } from 'react-admin';

import { changeTheme } from './actions';

const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};

const Configuration = ({
    theme,
    changeTheme,
    translate,
}) => (
    <Card>
        <ViewTitle title={translate('pos.configuration')} />
        <CardContent>
            <div style={styles.label}>{translate('pos.theme.name')}</div>
            <Button
                raised
                style={styles.button}
                color={theme === 'light' ? 'primary' : 'default'}
                onClick={() => changeTheme('light')}
            >
                {translate('pos.theme.light')}
            </Button>
            <Button
                raised
                style={styles.button}
                color={theme === 'dark' ? 'primary' : 'default'}
                onClick={() => changeTheme('dark')}
            >
                {translate('pos.theme.dark')}
            </Button>
        </CardContent>
    </Card>
);

const mapStateToProps = state => ({
    theme: state.theme,
});

export default connect(mapStateToProps, {
    changeTheme,
})(translate(Configuration));
