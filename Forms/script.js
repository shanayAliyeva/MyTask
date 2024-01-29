document.addEventListener('DOMContentLoaded', function () {
  // Get the form and radio buttons
  var form = document.getElementById('myForm');
  var huquqiRadio = document.getElementById('huquqi');
  var fizikiRadio = document.getElementById('fiziki');

  // Add the onchange event listener to the form
  form.addEventListener('change', function () {
    if (huquqiRadio.checked) {
      console.log('You selected Huquqi!');
      document.getElementById('form-body-fiziki').style.display = 'none';
      document.getElementById('form-body-huquqi').style.display = 'flex';
    } else if (fizikiRadio.checked) {
      console.log('You selected Fiziki!');
      document.getElementById('form-body-huquqi').style.display = 'none';
      document.getElementById('form-body-fiziki').style.display = 'flex';
    }
  });

  var selectYear = document.getElementById('year');
  for (var year = 1990; year <= 2024; year++) {
    var option = document.createElement('option');
    option.value = year;
    option.text = year;
    selectYear.appendChild(option);
  }

  var selectYear = document.getElementById('day');
  for (var day = 1; day <= 31; day++) {
    var optionDay = document.createElement('option');
    optionDay.value = day;
    optionDay.text = day;
    selectYear.appendChild(optionDay);
  }

  var form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Huquqi form
    console.log('Huquqi form value');

    var nameOfHuquqi = document.getElementById('nameh').value;
    console.log(nameOfHuquqi);

    var addressOfHuquqi = document.getElementById('addressh').value;
    console.log(addressOfHuquqi);

    var operType = document.getElementById('oper_nameh').value;
    console.log(operType);

    var contactHuquqi = document.getElementById('contacth').value;
    console.log(contactHuquqi);

    var emailHuquqi = document.getElementById('emailh').value;
    console.log(emailHuquqi);





    // Fiziki form
    console.log('Fiziki form value');
    // var nameOfHuquqi = document.getElementById('namef').value;
    // console.log(nameOfHuquqi);

    var addressOfFiziki = document.getElementById('addressf').value;
    console.log(addressOfFiziki);

    var operTypeFiziki = document.getElementById('oper_namef').value;
    console.log(operTypeFiziki);

    var contactFiziki = document.getElementById('contactf').value;
    console.log(contactFiziki);

    var emailFiziki = document.getElementById('emailf').value;
    console.log(emailFiziki);


    // IKinci form
    console.log('Ikinci form value');

    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    console.log(day + ' ' + month + ' ' + year);

    var senderInfo = document.getElementById('senderInfo').value;
    console.log(senderInfo);

    var lastUseInfo = document.getElementById('lastUseInfo').value;
    console.log(lastUseInfo);

    var ucot = document.getElementById('ucot').value;
    console.log(ucot);

    var contract = document.getElementById('contract').value;
    console.log(contract);

    var menshe_sertifikati = document.getElementById('menshe_sertifikati').value;
    console.log(menshe_sertifikati);

    var icaze_erize = document.getElementById('icaze_erize').value;
    console.log(icaze_erize);

    form.reset();
    document.getElementById('form-body-fiziki').style.display = 'none';
    document.getElementById('form-body-huquqi').style.display = 'flex';
  });
});
