import React, { Fragment } from 'react';
import { translate,
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
    Responsive,
    SearchInput,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { compose } from 'recompose';

import NbItemsField from './NbItemsField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import MobileGrid from './MobileGrid';




const OrderFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput source="customer_id" reference="customers">
            <AutocompleteInput
                optionText={choice =>
                    `${choice.first_name} ${choice.last_name}`
                }
            />
        </ReferenceInput>
        <DateInput source="date_gte" />
        <DateInput source="date_lte" />
        <TextInput source="total_gte" />
        <NullableBooleanInput source="returned" />
    </Filter>
);

const datagridStyles = {
    total: { fontWeight: 'bold' },
};

class TabbedDatagrid extends React.Component {
    tabs = [
        { id: 'ordered', name: 'resources.commands.status_choices.ordered' },
        { id: 'delivered', name: 'resources.commands.status_choices.delivered' },
        { id: 'cancelled', name: 'resources.commands.status_choices.cancelled' },
    ];

    state = { ordered: [], delivered: [], cancelled: [] };

    static getDerivedStateFromProps(props, state) {
        if (props.ids !== state[props.filterValues.status]) {
            return { ...state, [props.filterValues.status]: props.ids };
        }
        return null;
    }

    handleChange = (event, value) => {
        const { filterValues, setFilters } = this.props;
        setFilters({ ...filterValues, status: value });
    };

    render() {
        const { classes, filterValues, translate, ...props } = this.props;
        return (
            <Fragment>
                <Tabs
                    fullWidth
                    centered
                    value={filterValues.status}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                >
                    {this.tabs.map((choice) => (
                        <Tab
                            key={choice.id}
                            label={translate(choice.name)}
                            value={choice.id}
                        />
                    ))}
                </Tabs>
                <Divider />
                <Responsive
                    xsmall={
                        <MobileGrid
                            {...props}
                            ids={this.state[filterValues.status]}
                        />
                    }
                    medium={
                        <div>
                            {filterValues.status === 'ordered' && (
                                <Datagrid {...props} ids={this.state.ordered}>
                                    <DateField source="date" showTime />
                                    <TextField source="reference" />
                                    <CustomerReferenceField />
                                    <NbItemsField />
                                    <NumberField
                                        source="total"
                                        options={{
                                            style: 'currency',
                                            currency: 'USD',
                                        }}
                                        className={classes.total}
                                    />
                                    <EditButton />
                                </Datagrid>
                            )}
                            {filterValues.status === 'delivered' && (
                                <Datagrid {...props} ids={this.state.delivered}>
                                    <DateField source="date" showTime />
                                    <TextField source="reference" />
                                    <CustomerReferenceField />
                                    <NbItemsField />
                                    <NumberField
                                        source="total"
                                        options={{
                                            style: 'currency',
                                            currency: 'USD',
                                        }}
                                        className={classes.total}
                                    />
                                    <BooleanField source="returned" />
                                    <EditButton />
                                </Datagrid>
                            )}
                            {filterValues.status === 'cancelled' && (
                                <Datagrid {...props} ids={this.state.cancelled}>
                                    <DateField source="date" showTime />
                                    <TextField source="reference" />
                                    <CustomerReferenceField />
                                    <NbItemsField />
                                    <NumberField
                                        source="total"
                                        options={{
                                            style: 'currency',
                                            currency: 'USD',
                                        }}
                                        className={classes.total}
                                    />
                                    <BooleanField source="returned" />
                                    <EditButton />
                                </Datagrid>
                            )}
                        </div>
                    }
                />
            </Fragment>
        );
    }
}

const StyledTabbedDatagrid = compose(withStyles(datagridStyles), translate)(TabbedDatagrid);

const OrderList = ({ classes, ...props }) => (
    <List
        {...props}
        filterDefaultValues={{ status: 'ordered' }}
        sort={{ field: 'date', order: 'DESC' }}
        perPage={25}
        filters={<OrderFilter />}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default OrderList;
