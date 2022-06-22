import React from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {AppBar, Chip, Toolbar, Typography} from "@mui/material"

const ApplicationBar: React.FC = ({...rest}) => {

    // Used in line styling here as I needed to ensure overrides to the Typography and Chip to properly fill
    return (
    <AppBar color="inherit">
        <Toolbar data-testid={'application-bar'}>
            <Typography style={{color:"black", fontFamily:"cursive"}} variant="h4" component="div">
                <WhatshotIcon style={{color:"red"}} />
                Trending
            </Typography>
    
            <Chip style={{marginLeft:"auto"}} icon={<FavoriteIcon />} 
                    onClick={()=>console.log("Favorites!")} label={"My Faves"} />
        
        </Toolbar>
    </AppBar>
    )

}


export default (ApplicationBar);
