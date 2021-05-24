import React from "react";
import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/event/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert"
const FilterEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <center>
          <ErrorAlert><p>Invalid filter. please adjust your values!</p></ErrorAlert>
          <Button link="/events">Show all events</Button>
        </center>
      </>
    );
  }
  const filterEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filterEvent || filterEvent.length === 0) {
    return (
      <>
        <center>
        <ErrorAlert><p>No event found</p></ErrorAlert>
          <Button link="/events">Show all events</Button>
        </center>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filterEvent} />
    </>
  );
};

export default FilterEventsPage;
