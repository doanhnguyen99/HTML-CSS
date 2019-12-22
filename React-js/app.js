function myFunction()
{
    var x = document.getElementById('myTopnav');
    if(x.className === 'custom'){
        x.className += ' responsive';
    }else{
        x.className = 'custom';
    }
}