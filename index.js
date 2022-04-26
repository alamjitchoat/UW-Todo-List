/*
 * Name: Alamjit Choat
 * Date: January 25, 2022
 * Section: CSE 154 AD
 *
 * This is the JS to implement the todo list.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addTask);
  }

  /**
   * Adds a list element to the "Todo list"
   */
  function addTask() {
    let newTask = gen("li"); // create a new list element
    let userInput = id("task"); // grab userinput from input id = task
    newTask.textContent = userInput.value; // set new list item to user input
    id("alltasks").appendChild(newTask); // add new task
    newTask.value = ""; // blank
    userInput.value = ""; // blank
    newTask.addEventListener("click", removeTask); // click to remove tasks
  }

  /**
   * Removes a list item that was clicked
   */
  function removeTask() {
    this.parentNode.removeChild(this);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the created element based on the specific value.
   * @param {string} tagName - Element to create
   * @returns {object} DOM object assoicated with tagName
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();