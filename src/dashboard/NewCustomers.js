import React from 'react';
import compose from 'recompose/compose';
import { Card, CardHeader } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { withStyles } from '@material-ui/core/es/styles';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';

const style = theme => ({
    card: { borderLeft: 'solid 4px #4caf50', flex: 1, marginLeft: '1em' },
    icon: {
        float: 'right',
        width: 64,
        height: 64,
        padding: '16px 16px 0 16px',
        color: '#4caf50',
    },
    avatar: {
        background: theme.palette.background.contentFrame,
    },
    listItemText: {
        paddingRight: 0,
    },
});

const NewCustomers = ({ visitors = [], nb, translate, classes }) => (
    <Card className={classes.card}>
        <CustomerIcon className={classes.icon} />
        <CardHeader
            title={nb}
            subheader={translate('pos.dashboard.new_customers')}
        />
        <List>
            {visitors.map(record => (
                <ListItem
                    button
                    to={`/customers/${record.id}`}
                    component={Link}
                    key={record.id}
                >
                    <Avatar
                        src={`${record.avatar}?size=32x32`}
                        className={classes.avatar}
                    />
                    <ListItemText
                        primary={`${record.first_name} ${record.last_name}`}
                        className={classes.listItemText}
                    />
                </ListItem>
            ))}
        </List>
    </Card>
);

const enhance = compose(withStyles(style), translate);

export default enhance(NewCustomers);
