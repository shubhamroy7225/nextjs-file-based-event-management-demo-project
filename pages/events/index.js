import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/events-search";
const AllEventsPgae = () => {
  const AllEvents = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={AllEvents} />
    </div>
  );
};

export default AllEventsPgae;
