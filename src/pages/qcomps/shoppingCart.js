import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(currentPending => currentPending + 1); // Use functional update
    await delay(3000);
    setPending(currentPending => currentPending - 1); // Use functional update
    setCompleted(currentCompleted => currentCompleted + 1); // Use functional update
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
