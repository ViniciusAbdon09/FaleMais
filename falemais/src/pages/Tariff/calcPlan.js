const pricePerMinute = (origin, destiny) =>{
    // table order
    if (origin === 11 && destiny === 16){
        return 1.90
    } else if (origin === 16 && destiny === 11) {
        return 2.90
    } else if (origin === 11 && destiny === 17) {
        return 1.70
    } else if (origin === 17 && destiny === 11) {
        return 2.70
    } else if (origin === 11 && destiny === 18) {
        return 0.90
    } else if (origin === 18 && destiny === 11) {
        return 1.90
    }
}

const noPlan = (origin, destiny, minutes) => {
    return minutes * pricePerMinute(origin, destiny)
}

const calcPlan = (origin, destiny, plan, minutes) => {
    if (minutes <= plan) { 
        return 0.0;
    }else {
        return (minutes - plan) * ((pricePerMinute(origin, destiny) * 0.1) + pricePerMinute(origin, destiny))
    }
}

export {calcPlan, noPlan}