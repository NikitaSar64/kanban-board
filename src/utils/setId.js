function setId(arr){
    return arr.reduce((prev, cur) => { return prev + cur.id }, 1);
}

export default setId;