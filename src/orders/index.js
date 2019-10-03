import React from 'react';
import {
    translate,
    AutocompleteInput,
    BooleanField,
    BooleanInput,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';
import OrderIcon from '@material-ui/icons/AttachMoney';

import Basket from './Basket';
import NbItemsField from './NbItemsField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';

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

export default {
    list: OrderList,
    edit: OrderEdit,
    icon: OrderIcon,
};
