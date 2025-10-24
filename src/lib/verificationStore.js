// Simple in-memory store for verification codes
// In production, you should use Redis or a database
class VerificationStore {
  constructor() {
    this.codes = new Map();
  }

  set(email, data) {
    this.codes.set(email, data);
    console.log(`Stored verification code for ${email}:`, data);
  }

  get(email) {
    const data = this.codes.get(email);
    console.log(`Retrieved verification code for ${email}:`, data);
    return data;
  }

  delete(email) {
    const result = this.codes.delete(email);
    console.log(`Deleted verification code for ${email}:`, result);
    return result;
  }

  // Clean up expired codes
  cleanup() {
    const now = Date.now();
    for (const [email, data] of this.codes.entries()) {
      if (data.expires < now) {
        this.delete(email);
      }
    }
  }

  // Get all stored codes (for debugging)
  getAll() {
    return Array.from(this.codes.entries());
  }
}

// Create a singleton instance
const verificationStore = new VerificationStore();

// Clean up expired codes every minute
setInterval(() => {
  verificationStore.cleanup();
}, 60000);

export default verificationStore;
