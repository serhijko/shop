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

import Basket from './Basket';

const OrderTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.commands.name', { smart_count: 1 })} #{record.reference}
    </span>
));

const OrderEdit = translate(({ translate, ...rest }) => (
    <Edit title={<OrderTitle />} {...rest}>
        <SimpleForm>
            <Basket />
            <DateInput source="date" />
            <ReferenceInput source="customer_id" reference="customers">
                <AutocompleteInput
                    optionText={choice =>
                        `${choice.first_name} ${choice.last_name}`}
                />
            </ReferenceInput>
            <SelectInput
                source="status"
                choices={[
                    { id: 'delivered', name: 'delivered' },
                    { id: 'ordered', name: 'ordered' },
                    { id: 'cancelled', name: 'cancelled' },
                ]}
            />
            <BooleanInput source="returned" />
            <div style={{ clear: 'both' }} />
        </SimpleForm>
    </Edit>
));

export default OrderEdit;
