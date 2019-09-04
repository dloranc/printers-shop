import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { store } from '../../store';

import { ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid, YAxis, XAxis } from 'recharts';

export class ScreensInventory extends Component {
    constructor() {
        super();

        this.state = {
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
        setInterval(() => {
            this.setState({
                data: [...this.state.data, {
                    month: 'May',
                    value: Math.floor(Math.random() * 1000),
                }]
            })
        }, 500);
    }

    render() {
        if (store.getState().isAuthenticated && store.getState().role === 'admin') {
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

export default ScreensInventory;
