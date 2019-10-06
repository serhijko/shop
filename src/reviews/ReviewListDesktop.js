import React from 'react';
import { Datagrid, DateField, SelectField, TextField, translate } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from './StarRatingField';

import rowStyle from './rowStyle';

const listStyles = {
    headerRow: {
        borderLeftColor: 'white',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const ReviewListDesktop = translate(({ classes, translate, ...props }) => (
    <Datagrid
        rowClick="edit"
        rowStyle={rowStyle}
        classes={{ headerRow: classes.headerRow }}
        {...props}
    >
        <DateField source="date" />
        <CustomerReferenceField linkType={false} />
        <ProductReferenceField linkType={false} />
        <StarRatingField />
        <TextField source="comment" cellClassName={classes.comment} />
        <SelectField source="status" choices={[
            { id: 'accepted', name: translate('resources.reviews.status_choices.accepted') },
            { id: 'pending', name: translate('resources.reviews.status_choices.pending') },
            { id: 'rejected', name: translate('resources.reviews.status_choices.rejected') },
        ]} />
    </Datagrid>
));

export default withStyles(listStyles)(ReviewListDesktop);
