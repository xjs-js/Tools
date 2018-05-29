// 微博相册批量下载


function myfunc() {
    var myArray = new Array();
    all_images = document.getElementsByClassName("photo_pict");
    for(var i = 0; i < all_images.length; i++) {
        src = all_images[i].src;
        src = src.substr(0, src.indexOf('?'));
        src = src.replace("thumb300", "large");
        
        myArray.push(src);
        // console.log(src);
    }
    return myArray;
}

arr = myfunc();

for (var i = 0; i < arr.length; i++) {
    document.writeln(arr[i]);
    document.writeln("<br>");
}
