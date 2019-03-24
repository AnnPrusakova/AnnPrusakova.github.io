$(document).ready(function(){
    $('.header').height($(window).height());
   
   })

   function submitContactForm(){
       var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
       var name = $('#inputName').val();
       var secondname = $('#inputSecondName').val();
       var email = $('#inputEmail').val();
       var phone = $('#inputPhone').val();
       var message = $('#inputMessage').val();
       if(name.trim() == '' ){
           alert('Пожалуйста введите своё имя.');
           $('#inputName').focus();
           return false;
       }else if(secondname.trim() == '' ){
        alert('Пожалуйста введите свою фамилию.');
        $('#inputSecondName').focus();
        return false;
    }else if(email.trim() == '' ){
           alert('Пожалуйста введите свой e-mail.');
           $('#inputEmail').focus();
           return false;
       }else if(email.trim() != '' && !reg.test(email)){
           alert('Пожалуйста введите действительный e-mail.');
           $('#inputEmail').focus();
           return false;
       }else if(phone.trim() == '' ){
        alert('Пожалуйста введите свой телефон.');
        $('#inputPhone').focus();
        return false;
    }else if(message.trim() == '' ){
           alert('Пожалуйста введите своё сообщение.');
           $('#inputMessage').focus();
           return false;
       }else{
           $.ajax({
               type:'POST',
               url:'submit_form.php',
               data:'contactFrmSubmit=1&name='+name+'&secondname='+secondname+'&email='+email+'&phone='+phone+'&message='+message,
               beforeSend: function () {
                   $('.submitBtn').attr("disabled","disabled");
                   $('.modal-body').css('opacity', '.5');
               },
               success:function(msg){
                   if(msg == 'ok'){
                       $('#inputName').val('');
                       $('#inputeSecondName').val('');
                       $('#inputEmail').val('');
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


  