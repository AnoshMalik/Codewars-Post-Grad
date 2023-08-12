function distinct(a) {
    let x = [...new Set(a)];
    console.log(x);
    return x;
}

distinct([11,11,4.5,4.5,9,9]);