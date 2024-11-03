<template>
    <div>
      <form @submit.prevent="handleVerification">
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAAzIBPoGfl-cZYSk" ref="turnstile"></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "TurnstileVerification",
    data() {
      return {
        turnstileResponse: null,
      };
    },
    mounted() {
      // Make sure the Turnstile widget initializes when the component mounts
      window.onloadTurnstileCallback = () => {
        // You can access the Turnstile here if needed
      };
    },
    methods: {
      async handleVerification() {
        // Get the Turnstile response token
        this.turnstileResponse = document.querySelector('.cf-turnstile input[name="cf-turnstile-response"]')?.value;
  
        if (this.turnstileResponse) {
          // Send the token to the backend for validation
          try {
            const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                secret: '0x4AAAAAAAzIBNcCSp40j2Y6aHfeAzcnzqo',
                response: this.turnstileResponse,
              }),
            });
            const data = await result.json();
            if (data.success) {
              // Handle successful verification (e.g., redirect or grant access)
              this.$router.push({ name: '/' });
            } else {
              alert('Verification failed. Please try again.');
            }
          } catch (error) {
            console.error('Error verifying Turnstile:', error);
          }
        } else {
          alert('Please complete the verification.');
        }
      },
    },
  };
  </script>
  