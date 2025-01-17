import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  '& .MuiTabs-indicator': {
    backgroundColor: '#64ffda',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textAlign: "left",
  flex: 1,
  textTransform: 'none',
  minWidth: 120,
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#64ffda',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 255, 218, 0.32)',
  },
}));

const experienceItems = {
  "University of Pennsylvania (Current)": {
    jobTitle: "Bioinformatics Specialist II @",
    duration: "2024 - PRESENT",
    desc: [
      "Manage and maintain clinical pipelines processing over 6,000 patients annually",
      "Develop cutting-edge pipelines and tools for molecular pathology and oncology",
      "Manage and maintain approximately 1 Petabyte of clinical genomic data",
      "Host and curate a comprehensive data lake of pipeline outputs and statistics for research purposes",
      "Successfully migrated and curated 11 years of patient information and results to a new LIMS and database system",
      "Lead QC initiatives to ensure accuracy and reliability of clinical probe materials from vendors"
    ]
  },
  "University of Pennsylvania (Previous)": {
    jobTitle: "Bioinformatics Specialist @",
    duration: "2019 - 2024",
    desc: [
      "Developed and maintained clinical genomics pipelines for patient analysis",
      "Implemented robust data management systems for clinical genomic data",
      "Collaborated with clinical teams to optimize analysis workflows",
      "Established quality control protocols and validation procedures for genomic analysis",
      "Contributed to process improvements and automation initiatives",
      "Provided technical support and documentation for clinical genomics workflows"
    ]
  }
};

const JobList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="jobs">
      <FadeInSection>
        <div className="jobs-grid">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
              height: 300,
            }}
          >
            <StyledTabs
              orientation={!isHorizontal ? "vertical" : null}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              {Object.keys(experienceItems).map((key, i) => (
                <StyledTab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
              ))}
            </StyledTabs>
            {Object.keys(experienceItems).map((key, i) => (
              <TabPanel value={value} index={i}>
                <span className="joblist-job-title">
                  {experienceItems[key]["jobTitle"] + " "}
                </span>
                <span className="joblist-job-company">{key}</span>
                <div className="joblist-duration">
                  {experienceItems[key]["duration"]}
                </div>
                <ul className="job-description">
                  {experienceItems[key]["desc"].map(function (descItem, i) {
                    return (
                      <FadeInSection delay={`${i + 1}00ms`}>
                        <li key={i}>{descItem}</li>
                      </FadeInSection>
                    );
                  })}
                </ul>
              </TabPanel>
            ))}
          </Box>
        </div>
      </FadeInSection>
    </div>
  );
};

export default JobList;
