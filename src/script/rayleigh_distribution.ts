export const calcAverage = () => {
    console.log(7.0 * Math.sqrt(2 / Math.PI))
    return 7.0 * Math.sqrt(2 / Math.PI);
}

export const calcRayleighDistribution = (v:number,aveV:number) => {
    return (v / ( aveV ** 2 )) * Math.exp( - ( ( v ** 2 ) / ( 2 * (aveV ** 2 ))));
}