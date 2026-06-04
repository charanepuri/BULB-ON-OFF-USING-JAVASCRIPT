## `README.md`

````markdown
# Bulb On/Off Simulation Using JavaScript

A simple, interactive web application that simulates turning a light bulb on and off. This project demonstrates basic DOM (Document Object Model) manipulation, event handling, and how JavaScript can dynamically change HTML attribute values (such as the `src` attribute of an image).

## 🚀 Live Demo

You can view the live interactive demo here:  
👉 **[Live Demo Link](https://charanepuri.github.io/BULB-ON-OFF-USING-JAVASCRIPT/)** _(Update this link if your GitHub Pages setup is live)_

## 💡 Features

- **Interactive UI:** Clickable buttons to instantly toggle the bulb state.
- **Dynamic Image Swapping:** Efficiently handles state transitions by dynamically swapping the light bulb asset images (`pic_bulbon.gif` and `pic_bulboff.gif`).
- **Beginner-Friendly Architecture:** Clean, readable, and vanilla frontend code ideal for mastering foundational JavaScript concepts.

## 🛠️ Tech Stack

- **HTML5:** Structures the webpage layout, images, and user control buttons.
- **CSS3:** Provides layout alignments and clean visual styling for the elements.
- **JavaScript (Vanilla JS):** Core logic to manage the application state and handle user interaction via click events.

## 📁 Repository Structure

```text
BULB-ON-OFF-USING-JAVASCRIPT/
│
├── index.html          # Main HTML document containing structure and JS logic
├── pic_bulbon.gif      # Image asset representing the glowing/active bulb
└── pic_bulboff.gif     # Image asset representing the dark/inactive bulb
```
````

## ⚡ How to Run Locally

1. **Clone the repository:**

```bash
git clone [https://github.com/charanepuri/BULB-ON-OFF-USING-JAVASCRIPT.git](https://github.com/charanepuri/BULB-ON-OFF-USING-JAVASCRIPT.git)

```

2. **Navigate into the project directory:**

```bash
cd BULB-ON-OFF-USING-JAVASCRIPT

```

3. **Launch the application:**
   Simply double-click the `index.html` file to open it directly in any modern web browser (Chrome, Edge, Firefox, Safari), or serve it locally using an extension like VS Code's _Live Server_.

## 📖 Code Concept Explained

The core functionality leverages JavaScript event listeners to alter the image source attribute dynamically upon clicking a button:

```javascript
function turnOn() {
  document.getElementById("myImage").src = "pic_bulbon.gif";
}

function turnOff() {
  document.getElementById("myImage").src = "pic_bulboff.gif";
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or open a pull request if you want to enhance the UI or add features like a toggle switch.

```

```
