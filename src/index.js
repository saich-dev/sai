import React from 'react';
import ReactDOM from 'react-dom';
import UpvoteAllButton from './components/UpvoteAllButton';
import './styles/styles.css';

// Function to simulate delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to scroll to the bottom to load all comments
const scrollToLoadAllComments = async () => {
  const distance = 1000;
  const delayMs = 1000;
  while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
    window.scrollBy(0, distance);
    await delay(delayMs);
  }
};

// Function to upvote all comments and replies
const upvoteAllComments = async () => {
  // Scroll to load all comments
  await scrollToLoadAllComments();

  // Select all upvote buttons
  const upvoteButtons = Array.from(document.querySelectorAll('button[data-testid="upvote-button"]'));


  if (upvoteButtons.length === 0) {
    alert('No comments available to upvote.');
    return;
  }

  // Filter out already upvoted buttons
  const buttonsToUpvote = upvoteButtons.filter(
    (button) => button.getAttribute('aria-pressed') !== 'true'
  );

  if (buttonsToUpvote.length === 0) {
    alert('All comments are already upvoted.');
    return;
  }

  for (let button of buttonsToUpvote) {
    try {
      button.click();
      // Random delay between 1-3 seconds
      const randomDelay = Math.floor(Math.random() * 2000) + 1000;
      await delay(randomDelay);
    } catch (error) {
      console.error('Error clicking upvote button:', error);
      // Optionally, continue with the next button
    }
  }

  alert('All possible comments have been upvoted!');
};

// Inject the React component into the page
const injectReactApp = () => {
  const app = document.createElement('div');
  app.id = 'reddit-upvote-extension';
  document.body.appendChild(app);
  ReactDOM.render(<UpvoteAllButton />, app);
};

// Expose the upvoteAllComments function to the global scope
window.upvoteAllComments = upvoteAllComments;

// Initialize the extension
injectReactApp();
