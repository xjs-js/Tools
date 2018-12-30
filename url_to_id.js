function idx(c){
    c = c.charCodeAt();
    if( c >= 48 && c <= 57 )  return ( c - 48 );
    if( c >= 97 && c <= 122 ) return ( c - 97 + 10 );
    return ( c - 65 + 36 );
}
function getUid(url){
    url = url.replace(/\.\w+$/g, '');
    var hash = url.match(/[0-9a-zA-Z]{32}$/);
    if(hash == null) return '';
    hash = hash[0].slice(0,8);
    var uid = 0;
    if(hash[0]=='0' && hash[1] == '0') k=62;
    else                               k=16;
    for (i = 0; i < 8; i++) uid = uid * k + idx(hash[i]);
    return "https://weibo.com/u/" + uid;
}