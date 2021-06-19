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
            showDialog('Your Request Has Been Sent');
            $('.request-status-text').html('Your request was successful');
        } else {
            showDialog('Sorry ! We Are Unable To Accept Your Request Right Now');
            $('.request-status-text').html('');
        }
    }

    //let post_string = from_number + '&' + to_number + '&' + message;
    console.log('sent message : ',message);
    xhr.send(JSON.stringify(message));
    $('.request-status-text').html('Your request is being sent ...');
    //xhr.send();
}

function showDialog(message){
  $('.alert-dialog-content').html(message);
  $('.alert-dialog').fadeIn(500); // alert box to inform the user that the message is sent
}
