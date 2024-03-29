import React from 'react';
import {
    translate,
    AutocompleteInput,
    BooleanInput,
    DateInput,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleForm,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import Basket from './Basket';

const OrderTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.commands.title', { reference: record.reference })}
    </span>
));

const editStyles = {
    root: { alignItems: 'flex-start' },
};

const OrderEdit = translate(({ translate, ...props }) => (
    <Edit title={<OrderTitle />} aside={<Basket />} {...props}>
        <SimpleForm>
            <DateInput source="date" />
            <ReferenceInput source="customer_id" reference="customers">
                <AutocompleteInput
                    optionText={choice =>
                        `${choice.first_name} ${choice.last_name}`
                    }
                />
            </ReferenceInput>
            <SelectInput
                source="status"
                choices={[
                    { id: 'delivered', name: translate('resources.commands.status_choices.delivered') },
                    { id: 'ordered', name: translate('resources.commands.status_choices.ordered') },
                    { id: 'cancelled', name: translate('resources.commands.status_choices.cancelled') },
                    {
                        id: 'unknown',
                        name: translate('resources.commands.status_choices.unknown'),
                        disabled: true,
                    },
                ]}
            />
            <BooleanInput source="returned" />
        </SimpleForm>
    </Edit>
));

export default withStyles(editStyles)(OrderEdit);
