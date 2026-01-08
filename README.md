# Simon Game & Mini Projects 🎮

Welcome to my **Simon Game** repository! This project is a web-based implementation of the classic electronic memory game "Simon," built to practice DOM manipulation and game logic in JavaScript. This folder also includes a bonus Todo List application.

## 📂 Projects Included

### 1. 🧠 The Simon Game
A test of memory where the player must repeat a growing sequence of colors.

* **File Structure:**
    * `simon_games.html`: Main game interface.
    * `simon_games.css`: Styling for the 4-color grid and flash animations.
    * `simon_games.js`: Core game logic.

* **Key Features:**
    * **Game Loop:** The game generates a random sequence of colors (Red, Green, Blue, Yellow) that grows every level.
    * **User Interaction:** Detects button clicks and compares the user's sequence against the game's sequence.
    * **Visual Feedback:** Buttons flash white (user press) or black (game hint) to indicate activity.
    * **High Score Tracking:** Displays the highest level reached during the session.
    * **Game Over State:** Flash red screen effect when the wrong button is pressed.

* **How to Play:**
    1.  Press any key on your keyboard to start the game.
    2.  Watch the sequence of flashing colors.
    3.  Repeat the sequence by clicking the colored buttons in the correct order.
    4.  The sequence gets longer with every correct round!

### 2. 📝 Simple To-Do App
A lightweight task manager created to practice event delegation.

* **File Structure:** `todoApp.html`, `todoAPP.js`
* **Functionality:**
    * Add new tasks via an input field.
    * Delete tasks using a "delete" button appended to each list item.
    * **Event Delegation:** Uses a single event listener on the parent `<ul>` to handle clicks for all delete buttons, optimizing performance.

---

## 🛠️ Technologies Used
* **HTML5:** Semantic structure for the game board and lists.
* **CSS3:** Flexbox layout and visual effects (box-shadow, border-radius).
* **JavaScript (ES6+):** Event listeners, arrays, `setTimeout` for animations, and DOM manipulation.

---

## 👨‍💻 Author

**Yug Thummar**
* This project demonstrates proficiency in JavaScript logic, array manipulation, and interactive DOM events.
