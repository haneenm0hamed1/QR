//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
let ImgBox= document.getElementById('imgbox')
let QrImage= document.getElementById('qrImage')
let QrText=document.getElementById('qrText')
function GenrateQr(){
 if(QrText.value.length >0){
    QrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QrText.value

    ImgBox.style.display='flex'
 }
}