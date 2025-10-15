function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;

    const all = document.querySelectorAll("*");
    all.forEach((el) => {
      if (!el.style.color) el.style.color = color;
    });
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const p = document.createElement("p");
  p.textContent = "Welcome Holberton!";
  p.style.margin = "16px 0";
  p.style.fontFamily = "sans-serif";
  document.body.appendChild(p);

  function makeButton(text, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = text;
    btn.style.marginRight = "8px";
    btn.style.padding = "8px 12px";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", onClick);
    return btn;
  }

  const btnSpooky = makeButton("Spooky", spooky);
  const btnDark = makeButton("Dark mode", darkMode);
  const btnScream = makeButton("Scream mode", screamMode);

  const controls = document.createElement("div");
  controls.style.margin = "12px 0";
  controls.appendChild(btnSpooky);
  controls.appendChild(btnDark);
  controls.appendChild(btnScream);
  document.body.appendChild(controls);
}

main();
