import React from "react";
import "./styles.css";

const ApplicationWrapper: React.FC = ({children, ...rest}) => {

    // Just a simple wrapper to offset content from the ApplicationBar
    return (
        <React.Fragment>
            <div className={'Wrapper'} data-testid={'application-wrapper'} />
            {children}
        </React.Fragment>
    )

}


export default (ApplicationWrapper);
