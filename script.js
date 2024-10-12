const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "SEND ME THEN !!!!!!!!";
  gif.src = "https://media.giphy.com/media/evCPQk1auQyRwpelDr/giphy.gif?cid=790b7611fdubprvrrul6nuv6f2kfer9gytj4f8ovkafuy609&ep=v1_stickers_search&rid=giphy.gif&ct=s";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  
  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
