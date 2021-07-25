import { FC } from "react";
import Image from "next/image";
import { Card, Grid, Header, Checkbox } from "semantic-ui-react";
import styles from "../../styles/FilterCard.module.scss";
import { Icon } from "semantic-ui-react";

type FilterCardType = {
  title: string;
  types: string[];
};

export const FilterCard: FC<FilterCardType> = (props) => {
  return (
    <>
      <Card fluid className={styles.filterCardDiv}>
        <Card.Content>
          <Card.Header>
            <Grid.Row>
              <Header as="h3">{props.title}</Header>{" "}
            </Grid.Row>
          </Card.Header>
        </Card.Content>
        <Card.Content className={styles.filterCardContent}>
          <Grid >
            <Grid.Column>
              {props.types.map((val, i) => {
                return (
                  <Grid.Row key={i}>
                    <Checkbox className={styles.check} label={val} />
                  </Grid.Row>
                );
              })}
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </>
  );
};
