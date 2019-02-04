$("#invoer").click(function() {

  if ($("input").filter(function() {
      return $.trim($(this).val()).length <= 4
    }).length == 0) {

    alert("alles is ingevuly");

    if (password1.value == password2.value) {
      alert("PASS = gelijk");
      $("#password1, #password2").css("background", "white");
    } else {
      alert("PASS = NIET GELIJK");
      $("#password1, #password2").css("background", "red");
    }

    let email = $('input[name="email"]').val()
    let intRegex = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i)

    if ((!intRegex.test(email))) {
      alert("GEEN GELDIG E-MAIL");
      $("#emailIn").css("background", "red");
    } else {
      alert("geldig e-mail");
      $('#emailIn').css("background", "white");
      $("input").val("")
    }

    $("#Gnaam").css("background", "white");

  } else {
    alert("VULL ALLES IN");

    $("input").filter(function() {
      return $.trim($(this).val()).length <= 4
    }).css("background", "red")

    $("input").filter(function() {
      return $.trim($(this).val()).length >= 5
    }).css("background", "white")

  }

})
