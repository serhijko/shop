import React from 'react';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-admin';
import { translate } from 'react-admin';
import { stringify } from 'querystring';

import visitors from '../visitors';

const styles = {
    icon: { paddingRight: '0.5em' },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
    },
};

const LinkToRelatedCustomers = ({ classes, segment, translate }) => (
    <Button color="primary">
        <Link
            to={{
                pathname: '/customers',
                search: stringify({
                    page: 1,
                    perPage: 25,
                    filter: JSON.stringify({ groups: segment }),
                }),
            }}
            className={classes.link}
        >
            <visitors.icon className={classes.icon} />
            {translate('resources.segments.fields.customers')}
        </Link>
    </Button>
);

const enhance = compose(withStyles(styles), translate);
export default enhance(LinkToRelatedCustomers);
