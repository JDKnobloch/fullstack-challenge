import React from "react";
import ItemList from "../components/ItemList/ItemList";
import ApplicationWrapper from "../components/ApplicationWrapper/ApplicationWrapper";
import ApplicationBar from "../components/ApplicationBar/ApplicationBar";

const HomePage: React.FC = ({...rest}) => {
    
    return (
        <React.Fragment>

            <ApplicationBar />
            
            <ApplicationWrapper>
                <ItemList />
            </ApplicationWrapper>
            
        </React.Fragment>
    )
}


export default (HomePage);
