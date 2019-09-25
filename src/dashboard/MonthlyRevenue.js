import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { translate } from 'react-admin';

const styles = {
    card: { borderLeft: 'solid 4px #31708f', flex: '1', marginRight: '1em' },
    icon: {
        float: 'right',
        width: 64,
        height: 64,
        padding: 16,
        color: '#31708f',
    },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <DollarIcon style={styles.icon} />
        <CardHeader
            title={value}
            subheader={translate('pos.dashboard.monthly_revenue')}
        />
    </Card>
));