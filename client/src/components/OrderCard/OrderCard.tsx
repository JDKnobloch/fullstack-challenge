import React from "react";
import {Card, CardContent, Typography, Box, Chip, Stack, CardMedia, Grid} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Order from "../../types/Order";
import Product from "../../types/Product";
import { OrderTypeProps } from "./OrderCard.types";
import OrderCardController from "./OrderCard.controller";

const formatter = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',
});

const OrderCard: React.FC<OrderTypeProps> = ({orders, ...rest}) => {
    return (
        <React.Fragment>
          {orders.map((order: Order)=>{
                return order.products.map((product: Product)=>{
                    // Typically wouldn't use this _id, as it tends to notate internal ID
                    return <Grid style={{padding:"1%"}} item xs={12} key={product._id} data-testid={'order-card-' + product._id.toString()}>
                        <Card sx={{display: 'flex', padding: "1.5%", borderRadius: "20px"}}>
                            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>

                                    <Typography variant="h5" >
                                        {product.name}
                                    </Typography>

                                    <Typography variant="subtitle1" color="text.secondary">
                                        Hogwarts • 0.5mi
                                    </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center'}}>

                                    <Typography variant="h6" >
                                        <s>{formatter.format(product.price + 1)}</s>
                                    </Typography>

                                    <Typography sx={{pl:1}} variant="h6" color='limegreen' >
                                    {formatter.format(product.price)}
                                    </Typography>

                                </Box>
                                    <Stack alignContent="flex-start" direction="row" spacing={1}>
                                        <Chip icon={<AccountCircleIcon />} label={<b>{product.quantity} recent orders</b>} />
                                        <Chip icon={<AccessTimeIcon />} label={ <b>{OrderCardController.calculateTime(new Date(order.purchasedAt))}</b>} />
                                    </Stack>
                                </Box>
                            </CardContent>
                            <CardMedia sx={{margin: "auto"}}>
                                <FavoriteBorderIcon />
                            </CardMedia>
                        </Card>
                    </Grid>
                })
            })}
        </React.Fragment>
    )
}


export default (OrderCard);
