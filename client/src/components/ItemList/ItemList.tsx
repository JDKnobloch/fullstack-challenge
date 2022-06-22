import React, { useState } from "react";
import {Button, Card, CardContent, Typography, Box, Grid, CircularProgress} from "@mui/material"
import axios from "axios";
import ScrollListener from "../ScrollListener/ScrollListener";
import Order from "../../types/Order";
import OrderCard from "../OrderCard/OrderCard";
import ItemListController from "./ItemList.controller";
import "./styles.css"

// TODO: Should probably move this
const loadingBar = () => {
    return <React.Fragment>
    <Grid item xs={5} />
        <Grid item alignContent="center" xs={2}>
            <Card className={'Card'}>
                <CardContent className={'Card-content'}>
                    <CircularProgress />
                </CardContent>
            </Card>
        </Grid>
    <Grid item xs={5} />
</React.Fragment>
}

const ItemList: React.FC = ({...rest}) => {

    const [orders, setOrders] = useState(Array<Order>());
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadSuccess, setLoadSuccess] = useState(false);
    const perPage = 2;

    // Request new trending orders from API using basic pagination
    const getTrendingOrders = () => {

        setLoading(true)

        axios.get(`http://localhost:5000/trending/all?perPage=${perPage}&page=${pageNumber}`)
            .then(res=>{
                
                setLoading(false);
                setLoadSuccess(true);
                
                let sortedArry = ItemListController.sortArray(res.data.orders);
                setOrders([...orders, ...sortedArry]);

                // If we reach the last page, start over again
                setTotalPages(res.data.totalCount);
                setPageNumber(pageNumber+1);
                if(pageNumber >= totalPages){
                    setPageNumber(1);
                }
            })
            .catch(err=>{
                console.log("ERROR")
                console.error(err)
            })
    }

    
 // Display our content with the ScrollListener, pass in a loading bar for when applicable
    return (
        <Grid container data-testid={"item-list"}>
            <ScrollListener loadSuccess={loadSuccess} 
                loadingComponent={loadingBar()} 
                isLoading={loading} 
                onBottomHit={()=>getTrendingOrders()} 
                loadOnMount={true} >
            {orders.length >= 1 ? 


                <OrderCard orders={orders} />

            :
            <React.Fragment>

            <Grid item xs={1} />

            <Grid item xs={10}>
                <Card className={'Card'}>
                    <CardContent className={'Card-no-content'}>
                        <Box className={'Box'}>
                            <Typography variant="h5" >
                            No Trending Orders Found
                            </Typography>
                        </Box>
                        <Box className={'Box'}>
                            <Button variant={'contained'} onClick={()=>getTrendingOrders()}>
                                Retry
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={1} />

            </React.Fragment>
            }
            </ScrollListener>
        </Grid>
    )

}


export default (ItemList);
