const showText = document.getElementById("showText");
document.addEventListener("keydown", function(e) {

  if (e.ctrlKey && e.code === "KeyE") {
    e.preventDefault();

    const textArea = document.createElement("textarea");
    textArea.value = showText.innerText;

    showText.replaceWith(textArea);

    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.code === "KeyS") {
        e.preventDefault();

        const newText = document.createElement("div");
        newText.style.color = "green";
        newText.innerText = textArea.value;
        
        textArea.replaceWith(newText);

        document.removeEventListener("keydown");
      }
    });
  }
});