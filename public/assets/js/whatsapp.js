function sendWhatsappMsg(message) {
    console.log('called sendWhatsappMsg');

    //let url = 'https://move-web-page.herokuapp.com/ver';
    let url = 'https://move-web-page.herokuapp.com';

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.open("GET", url, true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xhr.setRequestHeader("Authorization", "Basic " + btoa(sid + ':' + key))
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log('SENT OK');
            $('alert-dialog').show(); // alert box to inform the user that the message is sent
        }
    }

    //let post_string = from_number + '&' + to_number + '&' + message;
    console.log('sent message : ',message);
    xhr.send(JSON.stringify(message));
    //xhr.send();
}

function test(){
  $('.alert-dialog').show(1000);
}

//sendWhatsappMsg();
