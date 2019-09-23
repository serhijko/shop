import React from 'react';
import {
    translate,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Person';
import FullNameField from './FullNameField';
import SegmentsField from './SegmentsField';

export const VisitorIcon = Icon;

const VisitorFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <DateInput source="last_seen_gte" />
        <NullableBooleanInput source="has_ordered" />
        <NullableBooleanInput source="has_newsletter" defaultValue />
    </Filter>
)

const colored = WrappedComponent => props =>
    props.record[props.source] > 500 ? (
        <span style={{ color: 'red' }}>
            <WrappedComponent {...props} />
        </span>
    ) : (
        <WrappedComponent {...props} />
    );

const ColoredNumberField = colored(NumberField);
ColoredNumberField.defaultProps = NumberField.defaultProps;

export const VisitorList = props => (
    <List
        {...props}
        filters={<VisitorFilter />}
        sort={{ field: 'last_seen', order: 'DESC' }}
        perPage={25}
    >
        <Datagrid>
            <TextField source="id" />
            <FullNameField />
            <DateField source="last_seen" type="date" />
            <NumberField
                source="nb_commands"
                label="resources.customers.fields.commands"
                style={{ color: 'purple' }}
            />
            <ColoredNumberField
                source="total_spent"
                options={{ style: 'currency', currency: 'USD' }}
            />
            <DateField source="latest_purchase" showTime />
            <BooleanField source="has_newsletter" label="News." />
            <SegmentsField />
            <EditButton />
        </Datagrid>
    </List>
);
