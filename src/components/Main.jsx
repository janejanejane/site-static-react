import React from 'react';
import Greeting from 'Components/Greeting';
import Links from 'Components/Links';

const Main = () => {
    return (
        <div class="container-fluid d-table" id="main">
            <Links />
            <Greeting />
        </div>
    );
};

export default Main;