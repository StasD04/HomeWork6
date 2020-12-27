function triangle(symbol, rows) {
    var tri = ""
    if (rows < 3) {
        for (i=0; i<3; i++) 
	        { console.log(tri+=symbol) }
    }
    else {
        for (i=0; i<rows; i++) 
            { console.log(tri+=symbol) }
    }
}
triangle('@',1);