import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid, YAxis, XAxis } from 'recharts';

class ScreensInventory extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: null,
            data: [
                {
                    month: 'January',
                    value: 100,
                },
                {
                    month: 'February',
                    value: 200,
                },
                {
                    month: 'March',
                    value: 130,
                },
                {
                    month: 'April',
                    value: 500,
                },
                {
                    month: 'May',
                    value: 50,
                },
            ],
        }
    }

    componentDidMount() {
        if (!this.isAuthenticatedAndHasAdminRole()) {
            return;
        }

        const intervalId = setInterval(() => {
            this.setState({
                data: [...this.state.data, {
                    month: 'May',
                    value: Math.floor(Math.random() * 1000),
                }]
            });
        }, 500);

        this.setState({
            intervalId: intervalId,
        });
    }

    componentWillUnmount() {
        if (!this.isAuthenticatedAndHasAdminRole()) {
            return;
        }

        clearInterval(this.state.intervalId);
    }

    isAuthenticatedAndHasAdminRole = () => {
        return this.props.isAuthenticated && this.props.role === 'admin';
    }

    render() {
        if (this.isAuthenticatedAndHasAdminRole()) {
            return (
                <ResponsiveContainer width="100%" height="100%" aspect={25/10}>
                    <LineChart data={this.state.data}>
                        <YAxis tickFormatter={(value) => `$${value}`}/>
                        <XAxis dataKey="month" tickMargin={10}/>

                        <CartesianGrid strokeDasharray="3 3"/>

                        <Line name="price" type="linear" dataKey="value" isAnimationActive={false}/>

                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            );
        }

        return <Redirect to="/shop"></Redirect>;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        role: state.role,
    }
};

export default connect(mapStateToProps)(ScreensInventory);
