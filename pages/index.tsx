import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { JobCard } from "../components/JobCard";
import { FilterCard } from "../components/FilterCard";
import { FILTER_ARR, VACANCY_ARR } from "../constant";
import { Button, Grid, Header, Input, Ref, Sticky } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import { useState, createRef } from "react";
import { Icon } from "semantic-ui-react";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const contextRef = createRef<HTMLElement>();

  function expandFilters() {
    setShowFilter(!showFilter);
  }

  function renderFilters() {
    return FILTER_ARR.map((val, i) => {
      return <FilterCard key={i} {...val} />;
    });
  }
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="Browse Jobs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <!-- Hotjar Tracking Code for https://job-web.vercel.app/ -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2570945,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
      </Head>
      <Grid padded className={styles.header} verticalAlign="middle">
        <Grid.Row textAlign="left">
          <Grid.Column mobile={1} computer={2}></Grid.Column>
          <Grid.Column computer={2}>
            <Image
              height="50px"
              width="50px"
              src={require("../assets/logo.png")}
              alt="Picture of the company"
            />
          </Grid.Column>
          <Grid.Column mobile={12} computer={10} textAlign="right">
              <a href="#" style={{cursor: 'pointer'}}>
              Register
              </a>
              
            {/* <Image
              height="40px"
              width="40px"
              src={require("../assets/placeholder-profile.png")}
              alt="Picture of the company"
            /> */}
          </Grid.Column>
          <Grid.Column computer={2}></Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid padded className={styles.banner} textAlign="center">
        <Grid.Row>
          <Header className={styles.searchHeader} as="h2">
            Browse Jobs
          </Header>
        </Grid.Row>
        <Grid.Row>
          <div className={styles.inputDiv}>
            <Input
              size="big"
              className={styles.searchInput}
              icon="search"
              placeholder="Key Word"
            />
          </div>
        </Grid.Row>
      </Grid>
      <Grid padded>
        <Ref innerRef={contextRef}>
          <Grid.Row>
            <Grid.Column computer={2}></Grid.Column>
            {!isMobile ? (
              <Grid.Column mobile={16} computer={3}>
                <Sticky offset={80} context={contextRef}>
                  {renderFilters()}
                </Sticky>
              </Grid.Column>
            ) : isMobile && !showFilter ? (
              <Grid.Column mobile={16} textAlign="right">
                <Button onClick={expandFilters}>Filter</Button>
              </Grid.Column>
            ) : (
              <>
                <Grid.Column mobile={16} textAlign="right">
                  <Button onClick={expandFilters}>Close</Button>
                </Grid.Column>
                <Grid.Column mobile={16} computer={4}>
                  {renderFilters()}
                </Grid.Column>
              </>
            )}

            <Grid.Column mobile={16} computer={9}>
              {VACANCY_ARR.map((val, i) => {
                return (
                  <JobCard
                    key={i}
                    img={val.companyLogo}
                    title={val.jobTitle}
                    rating={val.rating}
                    desc={val.desc}
                    tech={val.techSkills}
                    company={val.company}
                    meta={val.meta}
                  />
                );
              })}
            </Grid.Column>
            <Grid.Column mobile={16} computer={2}></Grid.Column>
          </Grid.Row>
        </Ref>
      </Grid>
      <Grid padded textAlign="center" className={styles.footer}>
        <Grid.Row className={styles.footerRow}>© 2021 App, Inc.</Grid.Row>
      </Grid>
    </div>
  );
}
