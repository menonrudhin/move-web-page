function sendWhatsappMsg(message) {
    console.log('called sendWhatsappMsg')
    const from_number = 'From=whatsapp:+14155238886';
    const to_number = 'To=whatsapp:+14372464771';

    //let url = 'https://move-web-page.herokuapp.com/ver';
    let url = 'https://move-web-page.herokuapp.com';

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.open("GET", url, true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("Authorization", "Basic " + btoa(sid + ':' + key))
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log('SENT OK');
        }
    }

    //let post_string = from_number + '&' + to_number + '&' + message;
    console.log('sent message : ',message);
    xhr.send(JSON.stringify(message));
    //xhr.send();
}

//sendWhatsappMsg();
