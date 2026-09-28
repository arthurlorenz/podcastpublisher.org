<template>
  <span class="brand-lockup">
    <img src="/podcast-publisher-mark.svg" alt="" width="28" height="34">
    <span class="brand-wordmark">Podcast Publisher</span>
  </span>
</template>

<style scoped>
.brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  color: var(--brand-ink);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.brand-lockup img {
  display: block;
  width: 1.75rem;
  height: 2.125rem;
}

.brand-wordmark {
  /* Center the text on the microphone, below the droplet's full center. */
  transform: translateY(0.25rem);
}

@media (max-width: 480px) {
  .brand-lockup {
    font-size: 1.05rem;
    gap: 0.4rem;
  }

  .brand-lockup img {
    width: 1.55rem;
    height: 1.875rem;
  }

  .brand-wordmark {
    transform: translateY(0.22rem);
  }
}
</style>
