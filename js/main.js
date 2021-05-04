// Typing effect
window.addEventListener('load', (event) => {

    var i = 0,
    resumeTxt = " I'm the most successful person ever to run for the presidency, by far. Nobody's ever been more successful than me. I'm the most successful person ever to run. Ross Perot isn't successful like me. Romney ― I have a Gucci store that's worth more than Romney. Sorry losers and haters, but my IQ is one of the highest ― and you all know it! Please don't feel so stupid or insecure, it's not your fault."
    speed = 200,
    typingResume = document.getElementById("typing-resume");
  
    function typeWriter() {
      if (i < resumeTxt.length) {
        typingResume.innerHTML += resumeTxt.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    }
    typeWriter();
  });
  