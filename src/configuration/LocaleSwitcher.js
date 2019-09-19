import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import { changeLocale as changeLocaleAction } from 'react-admin';

class LocaleSwitcher extends Component {
    switchToEnglish = () => this.props.changeLocale('en');
    switchToFrench = () => this.props.changeLocale('fr');

    render() {
        // const { changeLocale } = this.props;
        return (
            <div>
                <div style={{ textAlign: "center" }}>Language</div>
                <Button onClick={this.switchToEnglish}>en</Button>
                <Button onClick={this.switchToFrench}>fr</Button>
            </div>
        );
    }
}

export default connect(undefined, { changeLocale: changeLocaleAction })(LocaleSwitcher);
