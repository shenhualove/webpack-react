/**
 * Created by apple on 2017/10/12.
 */
import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';


import List from '../containers/list';
import Content from '../containers/content';
import IndexContainer from "./index"

const routes = () => (
    <BrowserRouter>
        <IndexContainer>
            <Route exact  path="/" component={List} />
            <Route exact  path="/content" component={Content} />
        </IndexContainer>
    </BrowserRouter>
);

export default routes;