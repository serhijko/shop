import React from 'react';
import { translate,
    AutocompleteInput,
    DateInput,
    Filter,
    ReferenceInput,
    SearchInput,
    SelectInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const filterStyles = {
    status: { width: 150 },
};

const ReviewFilter = translate(({ classes, translate, ...props }) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <SelectInput
            source="status"
            choices={[
                { id: 'accepted', name: translate('resources.reviews.status_choices.accepted') },
                { id: 'pending', name: translate('resources.reviews.status_choices.pending') },
                { id: 'rejected', name: translate('resources.reviews.status_choices.rejected') },
            ]}
            className={classes.status}
        />
        <ReferenceInput source="customer_id" reference="customers">
            <AutocompleteInput
                optionText={choice =>
                    `${choice.first_name} ${choice.last_name}`
                }
            />
        </ReferenceInput>
        <ReferenceInput source="product_id" reference="products">
            <AutocompleteInput optionText="reference" />
        </ReferenceInput>
        <DateInput source="date_gte" />
        <DateInput source="date_lte" />
    </Filter>
));

export default withStyles(filterStyles)(ReviewFilter);
