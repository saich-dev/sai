import React, { useState } from 'react';

const UpvoteAllButton = () => {
  const [isUpvoting, setIsUpvoting] = useState(false);

  const handleUpvoteAll = async () => {
    if (isUpvoting) return; // Prevent multiple clicks
    setIsUpvoting(true);
    try {
      await window.upvoteAllComments();
    } catch (error) {
      console.error('Error upvoting comments:', error);
      alert('An error occurred while upvoting.');
    } finally {
      setIsUpvoting(false);
    }
  };

  return (
    <button
      className="upvote-all-button"
      onClick={handleUpvoteAll}
      disabled={isUpvoting}
    >
      {isUpvoting ? 'Upvoting...' : 'Upvote All'}
    </button>
  );
};

export default UpvoteAllButton;
