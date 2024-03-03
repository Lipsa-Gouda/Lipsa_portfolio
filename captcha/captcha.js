//  var getRandomNumber = () =>
//  {
//      return number = Math.round(Math.random() *9);

//  }
 var RandomChar =(type)=>
 {
    var min,max;
    switch(type)
    {
        case 'n':
        return number = Math.round(Math.random() *9);
        

        case 'U':
        min = 65;
        max = 90;
        break;
       case'L':
       min = 97;
       max = 122;
       break;
    }
    var randomAsciino = Math.round(Math.random() * (max - min) + min);
    return String.fromCharCode(randomAsciino);
 }
 console.log(RandomChar ('n'));
 console.log(RandomChar('U'));
 console.log(RandomChar('L'));

//  captcha in single line
var getCaptchavalue =()=>
{
    pattern = 'ULnLU';
    var captchatext = '';
    var pattern = pattern.split('');
    // split convert pattern into array
    for (i = 0;i< pattern.length;i++)
    {
        captchatext +=RandomChar(pattern[i]);
    }
    return captchatext;
}
 console.log(getCaptchavalue());