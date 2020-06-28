var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
  var fizzBuzz = document.getElementById('FizzBuzz');
  for (var i = 1; i <= 100; i++) {
    if (!(i%15)) {
      fizzBuzz.innerHTML += "<li class=\"fizzbuzz\"> FizzBuzz </li>";
    } else if (!(i%3)) {
      fizzBuzz.innerHTML += "<li class=\"fizz\"> Fizz </li>";
    } else if (!(i%5)) {
      fizzBuzz.innerHTML += "<li class=\"buzz\"> Buzz </li>";
    } else {
      fizzBuzz.innerHTML += "<li>" + i + "</li>";
    }
  }

  btn.className = "hidden";
  fizzBuzz.classList.remove("hidden").add("show");
})
