export default function showMessage(content: string) {
  const elementP = document.createElement("p");
  const elementPStryle = elementP.style;

  elementP.textContent = content;

  elementP.className =
    "w-[70%] bg-sky-800 text-center text-3xl font-bold rounded-lg p-2.5 text-[SILVER]";

  elementPStryle.position = "fixed";
  elementPStryle.bottom = "5px";
  elementPStryle.left = "50%";
  elementPStryle.transform = "translateX(-50%)";

  elementPStryle.animation = "animationShowMessage 2s linear";

  elementPStryle.zIndex = "1";

  document.body.appendChild(elementP);

  setTimeout(() => {
    elementP.remove();
  }, 3000);
}
