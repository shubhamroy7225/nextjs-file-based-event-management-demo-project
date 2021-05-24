import React from 'react';
import classes from "./main-header.module.css"
import Link from "next/link"
const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvent 
                </Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browser All Events
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;