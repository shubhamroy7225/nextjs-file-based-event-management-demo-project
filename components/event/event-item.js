import React from 'react';
import classes from './event-item.module.css';
import Button from '../ui/button';
import AddressIcon from "../icons/address-icon"
import DateIcon from "../icons/date-icon"
import ArrowIcon from "../icons/arrow-right-icon"
const EventItem = (props) => {
    const {id,image,location,title,date}=props.item;
    const exploreLink = `/events/${id}`
    return (
        <li className={classes.item}>
            <img  src={'/'+ image} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{date}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>
                        {location}
                    </address>
                </div>
                <div className={classes.actions}>
                    {/* <Link href={exploreLink}>Explore Link</Link> */}
                    <Button link={exploreLink}>
                        <span>Explore Link</span> <span className={classes.icon}><ArrowIcon /></span> </Button>
                </div>
                </div>
            </div>
        </li>
    );
};

export default EventItem;