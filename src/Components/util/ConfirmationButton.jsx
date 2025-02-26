import React, { useState } from "react";

export default function ConfirmationButton({
  children,
  className,
  onConfirmedClick,
  confirmationMessage = "Are your sure? ",
  positiveText = "Yes",
  negativeText = "No",
}) {
  const [isConfirming, setIsConfirming] = useState(false);
  return !isConfirming ? (
    <button className={className} onClick={() => setIsConfirming(true)}>
      {children}
    </button>
  ) : (
    <div className="flex items-center">
      <p className="mr-4">{confirmationMessage}</p>
      <button
        className="mr-4 hover:text-blue-500"
        onClick={() => {
          onConfirmedClick();
          setIsConfirming(false);
        }}
      >
        {positiveText}
      </button>
      <button
        className="hover:text-red-500"
        onClick={() => setIsConfirming(false)}
      >
        {negativeText}
      </button>
    </div>
  );
}
