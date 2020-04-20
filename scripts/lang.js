var ch=0;
function mlang() {
    if(ch==0){
        document.getElementById('ua').style.display='block';
        document.getElementById('en').style.display='block';
        ch=1;
    }else if(ch==1){
        document.getElementById('ua').style.display='none';
        document.getElementById('en').style.display='none';
        ch=0;
    }
}
