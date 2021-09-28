import React from "react";
import { Card, Feed } from "semantic-ui-react";
import moment from "moment";

const PingCard = ({ type, text, team, channel, timestamp }) => (
  <Card style={{ margin: "1rem" }}>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="/images/ping7.png" />
          <Feed.Content>
            <Feed.Date content={moment.unix(timestamp).calendar()} />
            <Feed.Summary>Channel: {channel}</Feed.Summary>
            <Feed.Summary>{text}</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default PingCard;
