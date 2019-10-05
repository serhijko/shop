import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { translate, DashboardMenuItem, MenuItemLink } from 'react-admin';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import categories from './categories';
import reviews from './reviews'; import LocaleSwitcher from './configuration/LocaleSwitcher';

const items = [
    { name: 'customers', icon: <visitors.icon /> },
    { name: 'segments', icon: <LabelIcon /> },
    { name: 'commands', icon: <orders.icon /> },
    { name: 'products', icon: <products.icon /> },
    { name: 'categories', icon: <categories.icon /> },
    { name: 'reviews', icon: <reviews.icon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={translate(`resources.${item.name}.name`, {
                    smart_count: 2,
                })}
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        <MenuItemLink
            to="/configuration"
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
            onClick={onMenuTap}
        /><LocaleSwitcher />
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate
);

export default enhance(Menu);
