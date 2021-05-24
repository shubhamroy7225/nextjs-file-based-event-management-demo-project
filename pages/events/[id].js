import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert"

const EventsDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const eventDetail = getEventById(eventId);
  if (!eventDetail) {
    return <ErrorAlert><p>Event not found!</p></ErrorAlert>;
  }
  return (
    <>
      <EventSummary title={eventDetail.title} />
      <EventLogistics
        date={eventDetail.date}
        address={eventDetail.location}
        image={eventDetail.image}
        imageAlt={eventDetail.title}
      />
      <EventContent>{eventDetail.description}</EventContent>
    </>
  );
};

export default EventsDetailPage;
