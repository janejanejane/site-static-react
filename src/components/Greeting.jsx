import React from 'react';

const Greeting = () => {
    return (
        <div class="text-center d-table-cell align-middle">
            <h1 class="display-3">Hello! Welcome!</h1>
            <p class="lead">
                If you have work related opportunities, please send details to my work accounts.
            </p>
            <span>
                <i class="fas fa-hand-point-left non-social"></i>
            </span>
            <div class="dropdown-divider"></div>
            <p class="lead">
                My social media accounts are rarely used.
            </p>
            <span>
                <i class="fas fa-hand-point-left social"></i>
            </span>
        </div>
    );
};

export default Greeting;