export const getGeneratedElectric = (v:number) => {
    if(v < 3){
        return 0
    }else if(3 <= v && v < 11){
        return 2000 * ( (( v - 3.0 ) / 8.0 ) ** 3)
    }else if(11 <= v && v < 25){
        return 2000
    }else{
        return 0;
    }
}