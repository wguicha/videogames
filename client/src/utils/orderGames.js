/* eslint-disable eqeqeq */
export const orderGames = (games, orderParams) => {
    return games.sort((x,y) => {
        let propX = "";
        let propY = "";
        switch (orderParams.prop){
            case "name":
                propX = x.name.toUpperCase();
                propY = y.name.toUpperCase();
                if(orderParams.mode == "asc"){
                    if (propX < propY) {
                        return -1;
                    }
                    if (propX > propY) {
                        return 1;
                    }
                    return 0;
                } else {
                    if (propX > propY) {
                        return -1;
                    }
                    if (propX < propY) {
                        return 1;
                    }
                    return 0;
                }
            case "releaseDate":
                propX = x[orderParams.prop].toUpperCase();
                propY = y[orderParams.prop].toUpperCase();
                if(orderParams.mode == "asc"){
                    if (propX < propY) {
                        return -1;
                    }
                    if (propX > propY) {
                        return 1;
                    }
                    return 0;
                } else {
                    if (propX > propY) {
                        return -1;
                    }
                    if (propX < propY) {
                        return 1;
                    }
                    return 0;
                }
            case "rating":
            propX = parseFloat(x[orderParams.prop]);
            propY = parseFloat(y[orderParams.prop]);
                if(orderParams.mode == "asc"){
                    if (propX < propY) {
                        return -1;
                    }
                    if (propX > propY) {
                        return 1;
                    }
                    return 0;
                } else {
                    if (propX < propY) {
                        return 1;
                    }
                    if (propX > propY) {
                        return -1;
                    }
                    return 0;
                }
            default:
                if(orderParams.mode == "asc"){
                    return x.id - y.id;
                } else {
                    return y.id - x.id;
                }
        }
    })

}