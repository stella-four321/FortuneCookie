function myFunction(){
    let x = Math.floor((Math.random() * 10) + 1);
    let y = Math.floor((Math.random() * 100) + 1);

    switch(x){
        case 1:
            document.getElementById('demo1').innerHTML = "Today is your day!";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 2:
            document.getElementById('demo1').innerHTML = "Be aware of the sky.";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 3:
            document.getElementById('demo1').innerHTML = "Your Phone might Die...";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 4:
            document.getElementById('demo1').innerHTML = "Music will brighten your day.";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 5:
            document.getElementById('demo1').innerHTML = "The rumor is true :O";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 6:
            document.getElementById('demo1').innerHTML = "Take care of your special person <br/>today.";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 7:
            document.getElementById('demo1').innerHTML = "Stop laying on your bed";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 8:
            document.getElementById('demo1').innerHTML = "You're hungry, make yourself <br/>some food.";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 9:
            document.getElementById('demo1').innerHTML = "Stop being so dramatic";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
        case 10:
            document.getElementById('demo1').innerHTML = "The love is strong";
            document.getElementById('demo2').innerHTML = "Your lucky number is: " + y;
            break;
    }

  }