import React from 'react';
import {
    translate,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    ReferenceInput,
    ReferenceManyField,
    SelectInput, SimpleForm,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Collections';
import Chip from '@material-ui/core/Chip';
import RichTextInput from 'ra-input-rich-text';

import GridList from './GridList';

export const ProductIcon = Icon;

const QuickFilter = translate(({ label, translate }) => (
    <Chip>{translate(label)}</Chip>
));

export const ProductFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <ReferenceInput source="category_id" reference="categories">
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter
            label="resources.products.fields.stock_lte"
            source="stock_lte"
            defaultValue={10}
        />
    </Filter>
);

export const ProductList = props => (
    <List {...props} filters={<ProductFilter />} perPage={20}>
        <GridList />
    </List>
);

export const ProductCreate = props => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <TextInput
                    source="image"
                    options={{ fullWidth: true }}
                    validation={{ required: true }}
                />
                <TextInput
                    source="thumbnail"
                    options={{ fullWidth: true }}
                    validation={{ required: true }}
                />
            </FormTab>
            <FormTab label="resources.products.tabs.details">
                <TextInput source="reference" validation={{ required: true }} />
                <NumberInput
                    source="price"
                    validation={{ required: true }}
                    elStyle={{ width: '5em' }}
                />
                <NumberInput
                    source="width"
                    validation={{ required: true }}
                    style={{ display: 'inline-block' }}
                    elStyle={{ width: '5em' }}
                />
                <NumberInput
                    source="height"
                    validation={{ required: true }}
                    style={{ display: 'inline-block', marginLeft: 32 }}
                    elStyle={{ width: '5em' }}
                />
                <ReferenceInput
                    source="category_id"
                    reference="categories"
                    allowEmpty
                >
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput
                    source="stock"
                    validation={{ required: true }}
                    elStyle={{ width: '5em' }}
                />
            </FormTab>
            <FormTab label="resources.products.tabs.description">
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
        </TabbedForm>
    </Create>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="category_id" reference="categories"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="reference" />
            <NumberInput source="width" />
            <NumberInput source="height" />
            <NumberInput source="price" />
            <TextInput source="thumbnail" />
            <TextInput source="image" />
            <TextInput source="description" />
            <NumberInput source="stock" />
        </SimpleForm>
    </Edit>
);
