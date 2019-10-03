import React from 'react';
import {
    AutocompleteInput,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput,
} from 'react-admin';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import NbItemsField from './NbItemsField';

const OrderFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
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
            elStyle={{ width: 150 }}
        />
        <DateInput source="date_gte" />
        <DateInput source="date_lte" />
        <TextInput source="total_gte" />
        <NullableBooleanInput source="returned" />
    </Filter>
);

const OrderList = props => (
    <List
        {...props}
        filters={<OrderFilter />}
        sort={{ field: 'date', order: 'DESC' }}
        perPage={25}
    >
        <Datagrid>
            <DateField source="date" showTime />
            <TextField source="reference" />
            <CustomerReferenceField />
            <NbItemsField />
            <NumberField
                source="total"
                options={{ style: 'currency', currency: 'USD' }}
                elStyle={{ fontWeight: 'bold' }}
            />
            <TextField source="status" />
            <BooleanField source="returned" />
            <EditButton />
        </Datagrid>
    </List>
);

export default OrderList;
