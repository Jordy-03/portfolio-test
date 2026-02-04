import React from 'react';
import styles from '../Modules/Experience.module.css';

// import {ReactComponent as WorkIcon} from './work.svg'
import timelineElements from '../components/Timeline.jsx'; // Updated Compontent folder name
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
    return (
        <div>
            <h1>Timeline</h1>
            <VerticalTimeline> {
                timelineElements.map((element) => {
                    // If element icon is work, it will be a work icon
                    let isWorkIcon = element.icon === "work";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            
                        >
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}