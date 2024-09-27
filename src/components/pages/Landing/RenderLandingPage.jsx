import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <section className="open">
        <div className="header">
          <div className="header-text-container">
            <h1>Asylum Office Grant Rate Tracker</h1>
            <h3>
              The Asylum Office Grant Rate Tracker provides asylum seekers,
              researchers, policymakers, and the public an interactive tool to
              explore USCIS data on Asylum Office decisions
            </h3>
          </div>
        </div>
      </section>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <section>
        <div className="graphs-section">
          <div className="grant-rates-by-office-graph-container">
            <img
              src={GrantRatesByOfficeImg}
              alt="Human Rights First"
              className="graphpics"
            />
            <p>Search Grant Rates By Office </p>
          </div>
          <div className="grant-rates-by-nationality-container">
            <img
              src={GrantRatesByNationalityImg}
              alt="Human Rights First"
              className="graphpics"
            />
            <p>Search Grant Rates By Office </p>
          </div>
          <div className="grant-rates-over-time-container">
            <img
              src={GrantRatesOverTimeImg}
              alt="Human Rights First"
              className="graphpics"
            />
            <p>Search Grant Rates By Office </p>
          </div>
        </div>
      </section>

      <section className="button-flex">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            size="small"
            style={{
              backgroundColor: '#404C4A',
              color: '#FFFFFF',
              fontSize: '14px',
            }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>

          <a
            href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv"
            download
            style={{ textDecoration: 'none' }} // Removes underline
          >
            <Button
              type="default"
              size="small"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              Download the Data
            </Button>
          </a>
        </div>
      </section>
      <section className="middle">
        <div className="middle-section">
          <div className="hrf-img-container">
            <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
          </div>

          <div className="middle-section-text-container">
            <h3>
              Human Rights First has created a search tool to give you a
              user-friendly way to explore a data set of asylum decisions
              between FY 2016 and May 2021 by the USCIS Asylum Office, which we
              received through a Freedom of Information Act request. You can
              search for information on asylum grant rates by year, nationality,
              and asylum office, visualize the data with charts and heat maps,
              and download the data set.
            </h3>
          </div>
        </div>
      </section>

      <section className="subsection">
        <div className="subsection_div">
          <h1>Systemic Disparity Insights</h1>
        </div>
      </section>

      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <section className="SystemicDisparityInsights">
          <div className="moreLove">
            <h2>36%</h2>
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div className="moreLove">
            <h2>5%</h2>
            <p>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </div>
          <div className="moreLove">
            <h2>6x Lower</h2>
            <p>
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was six times lower than the San Francisco
              asylum office.
            </p>
          </div>
        </section>

        <section className="button_section">
          <a
            href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="default"
              size="small"
              style={{
                backgroundColor: '#404C4A',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Read More
            </Button>
          </a>

          <div className="bottom-section">
            <p
              onClick={() => scrollToTop()}
              className="back-to-top"
              style={{ cursor: 'pointer' }}
            >
              Back To Top ^
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default RenderLandingPage;
