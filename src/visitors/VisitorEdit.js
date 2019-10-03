import React from 'react';
import {

    Datagrid,
    DateField,
    DateInput,

    Edit,
    EditButton,
    FormTab,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import FullNameField from './FullNameField';
import NbItemsField from '../commands/NbItemsField';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import SegmentsInput from './SegmentsInput';

const VisitorTitle = ({ record }) =>
    record ? <FullNameField record={record} size={32} /> : null;

const VisitorEdit = props => (
    <Edit title={<VisitorTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.customers.tabs.identity">
                <TextInput
                    source="first_name"
                    style={{ display: 'inline-block' }}
                />
                <TextInput
                    source="last_name"
                    style={{ display: 'inline-block', marginLeft: 32 }}
                />
                <TextInput
                    type="email"
                    source="email"
                    validation={{ email: true }}
                    options={{ fullWidth: true }}
                    style={{ width: 544 }}
                />
                <DateInput source="birthday" />
            </FormTab>
            <FormTab label="resources.customers.tabs.address">
                <LongTextInput source="address" style={{ maxWidth: 544 }} />
                <TextInput
                    source="zipcode"
                    style={{ display: 'inline-block' }}
                />
                <TextInput
                    source="city"
                    style={{ display: 'inline-block', marginLeft: 32 }}
                />
            </FormTab>
            <FormTab label="resources.customers.tabs.orders">
                <ReferenceManyField
                    addLabel={false}
                    reference="commands"
                    target="customer_id"
                >
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="reference" />
                        <NbItemsField />
                        <NumberField
                            source="total"
                            options={{ style: 'currency', currency: 'USD' }}
                        />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.reviews">
                <ReferenceManyField
                    addLabel={false}
                    reference="reviews"
                    target="customer_id"
                >
                    <Datagrid filter={{ status: 'approved' }}>
                        <DateField source="date" />
                        <ProductReferenceField />
                        <StarRatingField />
                        <TextField
                            source="comment"
                            style={{
                                maxWidth: '20em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.stats">
                <SegmentsInput />
                <NullableBooleanInput source="has_newsletter" />
                <DateField
                    source="first_seen"
                    style={{ width: 128, display: 'inline-block' }}
                />
                <DateField
                    source="latest_purchase"
                    style={{ width: 128, display: 'inline-block' }}
                />
                <DateField
                    source="last_seen"
                    style={{ width: 128, display: 'inline-block' }}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default VisitorEdit;
