import { useState } from "react";
import { Tabs, Tab, Box, Fade } from "@mui/material";
import { TabPanel } from "./tabPanel";
import { OverviewTabContent } from "./overviewTabContent";
import { SpecificationTabContent } from "./specificationTabContent";
import { ReviewsTabContent } from "./reviewsTabContent";
import PropTypes from "prop-types";

export const AccessibleTabs = ({ rating }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                onChange={handleChange}
                value={value}
                indicatorColor="secondary"
                aria-label="Tabs where each tab needs to be selected manually"
            >
                <Tab label="Overview" />
                <Tab label="Specification" />
                <Tab label="Reviews" />
            </Tabs>
            <Fade in={value === 0} unmountOnExit>
                <div>
                    <TabPanel value={value} index={0}>
                        <OverviewTabContent />
                    </TabPanel>
                </div>
            </Fade>
            <Fade in={value === 1} unmountOnExit>
                <div>
                    <TabPanel value={value} index={1}>
                        <SpecificationTabContent />
                    </TabPanel>
                </div>
            </Fade>
            <Fade in={value === 2} unmountOnExit>
                <div>
                    <TabPanel value={value} index={2}>
                        <ReviewsTabContent rating={rating} />
                    </TabPanel>
                </div>
            </Fade>
        </Box>
    );
}

AccessibleTabs.propTypes = {
    rating: PropTypes.number
}