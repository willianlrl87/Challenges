import React from 'react';
import * as styles from './styles';


export const Resume = ({title, resumeValue}) => {
    return (
        <React.Fragment>
            <styles.Resume>
                <styles.ResumeTitle>
                    <p>{title}</p>
                </styles.ResumeTitle>
                <styles.ResumeValue>
                    <strong>{resumeValue}</strong>
                </styles.ResumeValue>
            </styles.Resume>
        </React.Fragment>
    )
}