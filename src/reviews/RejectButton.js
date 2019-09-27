import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { translate } from 'react-admin';
import compose from 'recompose/compose';
import { reviewReject as reviewRejectAction } from './reviewActions';

class RejectButton extends Component {
    handleReject = () => {
        const { reviewReject, record } = this.props;
        reviewReject(record.id, record);
    };

    render() {
        const { record, translate } = this.props;
        return record && record.status === 'pending' ? (
            <Button color="primary" onClick={this.handleReject}>
                <ThumbDown color="#FF5722" style={{ paddingRight: '0.5em' }} />
                {translate('resources.reviews.action.reject')}
            </Button>
        ) : (
            <span />
        );
    }
}

RejectButton.propTypes = {
    record: PropTypes.object,
    reviewReject: PropTypes.func,
    translate: PropTypes.func,
};

const enhance = compose(
    translate,
    connect(null, {
        reviewReject: reviewRejectAction,
    })
);

export default enhance(RejectButton);
