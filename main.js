var fotoArray = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.jpg"
    ]

    var i = 0;
    function changeImg(){
        document.getElementById('slideshow').src = fotoArray[i];
        if(i<fotoArray.length - 1){
            i++;
        }else{
            i = 0;
        }
        setTimeout('changeImg()', 2500);
    }
 