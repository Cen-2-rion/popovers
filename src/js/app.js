import Popover from "./popover";

const form = document.querySelector(".form");

// контент поповера
const content = [
  {
    id: "btn popover",
    title: "Popover title",
    text: "And here's some amazing content. It's very engaging. Right?",
  },
];

const collection = new Popover();

form.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;

  // ищем поповер по id у кнопки, удаляем его и выходим из функции
  const removed = collection.popovers.find((p) => {
    if (p.id === target.id) {
      collection.removePopover(p.id);

      return true;
    }
  });

  if (!removed) {
    // ищем контент поповера по id у кнопки
    const contentEl = content.find((c) => c.id === target.id);

    // если контент поповера найден, показываем его
    if (contentEl) {
      collection.showPopover(contentEl, target);
    }
  }
});
