function sendWhatsappMsg(message) {
    console.log('called sendWhatsappMsg')
    const from_number = 'From=whatsapp:+14155238886';
    const to_number = 'To=whatsapp:+14372464771';
    //let message = 'Body=Hi from Move';

    //let url = 'https://git.heroku.com/move-web-page.git';
    let url = 'https://move-web-page.herokuapp.com/ver';

    let xhr = new XMLHttpRequest();
    //xhr.open("POST", url, true);
    xhr.open("GET", url, true);

    //Send the proper header information along with the request
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Authorization", "Basic " + btoa(sid + ':' + key))
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log('on response');
        }
    }

    //let post_string = from_number + '&' + to_number + '&' + message;

    let formData = new FormData();
    //formData.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    formData.append('To','whatsapp:+14372464771');
    formData.append('From','whatsapp:+14155238886');
    formData.append('Body', message);

    //xhr.send(formData);
    xhr.send();
    //xhr.send();
}

//sendWhatsappMsg();
