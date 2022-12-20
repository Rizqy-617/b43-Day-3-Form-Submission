function submitData() {
    // Mengambil data dari ID
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let phone = document.getElementById("phone").value ;
    let subject = document.getElementById("subject").value ;
    let message = document.getElementById("message").value ;

    // Pengkondisian
    if (name == '') {
        return
    }else if (email == '') {
        return
    }else if (phone == '') {
        return
    }else if (subject == '') {
        return
    }else if (message == '') {
        return
    } ;

    let emailReceiver = "rizqyandriansyah617@gmail.com";

    let link = document.createElement('a') ;
    link.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya di nomor ${phone}`
    link.click() ;

}