var incrementButton=document.getElementsByClassName('inc');
      
for(var i=0; i < incrementButton.length; i++){
    var button=incrementButton[i];
    button.addEventListener('click',function(event){
        var buttonClicked=event.target;
       
        var input=buttonClicked.parentElement.children[0];
        console.log(input);
        var inputValue=input.value;
        
        var newValue=parseInt(inputValue) + 1;
        
        input.value=newValue;
    })
}