import React from 'react';

const Links = () => {
    const workAccounts = [
        {
            class: 'fas fa-envelope-square',
            href: 'mailto:jeanclaudetteambait@gmail.com',
        },
        {
            class: 'fab fa-skype',
            href: 'skype:jeanclaudetteambait?call',
        },
        {
            class: 'fab fa-linkedin',
            href: 'http://ph.linkedin.com/in/jeanambait',
            target: '_blank',
        },
    ];

    const socialAccounts = [
        {
            class: 'fab fa-facebook-square',
            href: 'https://www.facebook.com/jean.ambait',
            target: '_blank',
        },
        {
            class: 'fab fa-instagram',
            href: 'http://instagram.com/ginclawdeath',
            target: '_blank',
        },
        {
            class: 'fab fa-twitter-square',
            href: 'https://twitter.com/ginclawdeath',
            target: '_blank',
        },
        {
            class: 'fab fa-google-plus-square',
            href: 'https://plus.google.com/u/0/100840804237992932606/posts',
            target: '_blank',
        },
    ];

    return (
        <div class="d-table-cell align-middle" id="links-section">
            <ul class="nav">
                {
                    workAccounts.map( ( key, i ) => {
                        return (
                            <li class="nav-item">
                                <a class="nav-link d-inline-block" href={key.href} target={key.target}>
                                    <i class={key.class}></i>
                                </a>
                            </li>
                        );
                    } )
                }
            </ul>
            <div class="dropdown-divider"></div>
            <ul class="nav">
                {
                    socialAccounts.map( ( key, i ) => {
                        return (
                            <li class="nav-item">
                                <a class="nav-link d-inline-block" href={key.href} target={key.target}>
                                    <i class={`${key.class} social`}></i>
                                </a>
                            </li>
                        );
                    } )
                }
            </ul>
        </div>
    );
};

export default Links;