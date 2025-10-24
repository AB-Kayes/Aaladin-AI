"use client";
import { useState } from "react";
import Button from "./Button";

const VerificationModal = ({ isOpen, onClose, email, onVerify, isLoading }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }
    setError("");
    onVerify(code);
  };

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h3 className="h4 mb-2">Verify Your Email</h3>
          <p className="body-2 text-n-4">
            We've sent a 6-digit verification code to
          </p>
          <p className="body-2 text-n-1 font-medium">{email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-n-3 mb-2">
              Verification Code
            </label>
            <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
              <input
                type="text"
                value={code}
                onChange={handleCodeChange}
                placeholder="000000"
                className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 placeholder-n-4 focus:outline-none transition-colors text-center text-2xl tracking-widest"
                maxLength={6}
              />
            </div>
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" onClick={onClose} className="flex-1" white>
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isLoading || code.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="body-2 text-n-4">
            Didn't receive the code? Check your spam folder or try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
