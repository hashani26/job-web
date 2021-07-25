import { FC } from "react";
import Image from "next/image";
import { Card, Grid, Header, List, Divider, Label } from "semantic-ui-react";
import styles from "../../styles/JobCard.module.scss";
import { Icon } from "semantic-ui-react";
type Meta = {
  [key: string]: string;
};

type JobCard = {
  img: string;
  title: string;
  rating: number;
  desc: string;
  tech: string[];
  company: string;
  meta: Meta;
};

export const JobCard: FC<JobCard> = (props) => {
  function renderMeta(meta: Meta) {
    return (
      <span className={styles.metaSpan}>
        <List horizontal verticalAlign="middle">
          <List.Item>
            <Icon
              disabled
              name="map marker alternate"
              className={styles.icon}
            />{" "}
            {meta.location}
          </List.Item>
          <List.Item>
            <Icon
              disabled
              name="money bill alternate outline"
              className={styles.icon}
            />{" "}
            {meta.salary}
          </List.Item>
          <List.Item>
            <Icon disabled name="suitcase" className={styles.icon} />{" "}
            {meta.jobType}
          </List.Item>
        </List>
      </span>
    );
  }

  function renderLabels(tech: string[]) {
    return tech.map((val) => {
      return <Label key={val}>{val}</Label>;
    });
  }

  return (
    <>
      <Card fluid className={styles.cardDiv}>
        <Card.Content>
          <Grid padded className={styles.gridDiv}>
            <Grid.Row columns={3}>
              <Grid.Column computer={3} mobile={16}>
                <Image
                  src={require(`../assets/${props.img}`)}
                  alt="Picture of the company"
                />
              </Grid.Column>
              <Grid.Column computer={13} mobile={16}>
                <Grid.Row>
                  <Header as="h5">{props.title}</Header>
                </Grid.Row>
                <Grid.Row>
                  <Header as="h6">{props.company}</Header>
                </Grid.Row>
                <Grid.Row>{renderMeta(props.meta)}</Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className={styles.desc}>{props.desc}</Grid.Row>
            <Divider className={styles.divider} />
            <Grid.Row>{renderLabels(props.tech)}</Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </>
  );
};
