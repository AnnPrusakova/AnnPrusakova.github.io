

   function submitForm(){
       var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
       var name = $('#inputName').val();
       var secondname = $('#inputSecondName').val();
       
       var phone = $('#inputPhone').val();
       
       if(name.trim() == '' ){
           alert('Пожалуйста введите своё имя.');
           $('#inputName').focus();
           return false;
       }else if(secondname.trim() == '' ){
        alert('Пожалуйста введите свою фамилию.');
        $('#inputSecondName').focus();
        return false;
    }else if(phone.trim() == '' ){
        alert('Пожалуйста введите свой телефон.');
        $('#inputPhone').focus();
        return false;
    }else{
           $.ajax({
               type:'POST',
               url:'submit_form1.php',
               data:'contactFrmSubmit=1&name='+name+'&secondname='+secondname+'&phone='+phone+'&message='+message,
               beforeSend: function () {
                   $('.submitBtn').attr("disabled","disabled");
                   $('.modal-body').css('opacity', '.5');
               },
               success:function(msg){
                   if(msg == 'ok'){
                       $('#inputName').val('');
                       $('#inputeSecondName').val('');
                       $('#inputPhone').val('');
                       $('#inputMessage').val('');
                       $('.statusMsg').html('<span style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</p>');
                   }else{
                       $('.statusMsg').html('<span style="color:red;">Some problem occurred, please try again.</span>');
                   }
                   $('.submitBtn').removeAttr("disabled");
                   $('.modal-body').css('opacity', '');
               }
           });
       }
   }


  