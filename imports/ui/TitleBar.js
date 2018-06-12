import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    <h2 className="title-bar__subtitle">{this.props.subTitle}</h2>
                </div>
            </div>
        );
    };
}

TitleBar.propType = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

TitleBar.dafaultProps = {};