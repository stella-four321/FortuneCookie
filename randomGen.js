function myFunction(){    

    //Generate Random Color
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
      }
      genNew.addEventListener("click", setBg);
      setBg();
      
    const setquote = () => {
        const randomInt = Math.floor((Math.random() * 20) + 1);
        document.getElementById('quote').innerHTML = myquote(randomInt);
    }
    genNew.addEventListener("click", setquote);
    setquote();

    const setNum = () => {
        const ranLuckyNum = Math.floor((Math.random() * 100) + 1);
        document.getElementById('luckyNumber').innerHTML = "Your lucky number is: " + ranLuckyNum;
    }
    genNew.addEventListener("click", setNum);
    setNum();


    function myquote(myRandomInt) {
        switch(myRandomInt){
            case 1: return "Today is your day!";
            case 2: return "Be aware of the sky.";
            case 3: return "Your phone might Die...";
            case 4: return "Music will brighten your <br/>day.";
            case 5: return "The rumor is true :O";
            case 6: return "Take care of your special <br/>person today.";
            case 7: return "Stop laying on your bed";
            case 8: return "You're hungry, make <br/>yourself some food.";
            case 9: return "Stop being so dramatic";
            case 10: return "The love is strong";
            case 11: return "You'll fall today, but you <br/>can still walk. So don't worry";
            case 12: return "What you just did, you <br/>did fine.";
            case 13: return "Don't assume what <br/>you don't know";
            case 14: return "CHILLAX!";
            case 15: return "You're thinking too much. <br/>People don't care about you";
            case 16: return "Don't be scared when you look <br/>into the mirror today";
            case 17: return "People are looking at you."
            case 18: return "It's nice out. Go for <br/>a walk."
            case 19: return "Stop day dreaming. <br/>Start doing."
            case 20: return "Cats are cute."
            case 21: return
            case 22: return
        }
        
    }

    

    //Switch statement for quote & lucky number
   

  }
  