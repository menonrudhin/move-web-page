function sendWhatsappMsg(message) {
    console.log('called sendWhatsappMsg')
    const sid = 'AC9c8ddeeab8067bae8de729a30b0ce273';
    const key = 'fb4c46a4145103cd6e3ff4f94742fd67';
    const from_number = 'From=whatsapp:+14155238886';
    const to_number = 'To=whatsapp:+14372464771';
    //let message = 'Body=Hi from Move';

    //let url = 'https://api.twilio.com/2010-04-01/Accounts/' + sid + '/Messages.json?To=whatsapp:+14372464771';
    let url = 'https://api.twilio.com/2010-04-01/Accounts/' + sid + '/Messages.json';

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true, sid, key);

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

    xhr.send(formData);
    //xhr.send();
}

//sendWhatsappMsg();