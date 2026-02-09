"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>Nešto je pošlo po zlu</h2>
      <button onClick={reset}>Pokušaj ponovo</button>
    </div>
  );
}
