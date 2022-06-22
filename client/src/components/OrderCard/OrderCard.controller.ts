

// Either return days or hours for our time stamp
const calculateTime = (date: Date) => {
    let currentTime = new Date();
    let diffMs = Math.abs(currentTime.getTime() - date.getTime()); 
    let diffMins = Math.ceil(diffMs / (1000 * 60)); 
    if (diffMins < 60){
        return diffMins + "m ago"
    }
    let diffHrs = Math.ceil(diffMs / (1000 * 3600)); 
    return diffHrs + "h ago"
}

const OrderCardController = {
    calculateTime:calculateTime,
}

export default OrderCardController;