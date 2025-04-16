import React from 'react';
import styles from '../Modules/Experience.module.css'

// import {ReactComponent as WorkIcon} from './work.svg'
import timelineElements from '../Components/Timeline.jsx';
import { 
    VerticalTimeline, 
    VerticalTimelineElement 
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
    return (
    <div>
        <h1>Timeline</h1>
        <VerticalTimeline>
            timelineElements.map(element => {
                return (
                    <VerticalTimelineElement>
                        
                    </VerticalTimelineElement>
                )
            });
        </VerticalTimeline>
    </div>        
    );
}