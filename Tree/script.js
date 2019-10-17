function myFunction(curentFolder){
    if(curentFolder.nextElementSibling.classList == 0){
        curentFolder.nextElementSibling.classList.add('list');
        curentFolder.src="./plus.png";

    }else{
        curentFolder.nextElementSibling.classList.remove('list');
        curentFolder.src="./minus.png";
    }
}