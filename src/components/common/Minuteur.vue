<template>
    <div v-if="!isExpired" class="minuteur-container">
        <!-- Main countdown display -->
        <div class="minuteur shadow-lg" :class="{ finished: isFinished }">

            <h4
                class="mb-10 text-4xl font-semibold"
            >{{ title }}</h4>

            <div class="countdown-display">
                <div class="countdown-box days">
                <span class="number">{{ String(timeLeft.days).padStart(2, '0') }}</span>
                <span class="label">Jours</span>
                </div>

                <div class="separator">:</div>

                <div class="countdown-box hours">
                <span class="number">{{ String(timeLeft.hours).padStart(2, '0') }}</span>
                <span class="label">Heures</span>
                </div>

                <div class="separator">:</div>

                <div class="countdown-box minutes">
                <span class="number">{{ String(timeLeft.minutes).padStart(2, '0') }}</span>
                <span class="label">Minutes</span>
                </div>

                <div class="separator">:</div>

                <div class="countdown-box seconds">
                <span class="number">{{ String(timeLeft.seconds).padStart(2, '0') }}</span>
                <span class="label">Secondes</span>
                </div>
            </div>

        </div>

    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import confetti from 'canvas-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const props = withDefaults(
  defineProps<{
    date: string; // Format: dd-mm-yyyy
    title?: string;
  }>(),
  {
    date: '',
    title: ""
  }
);

const timeLeft = ref<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const isFinished = ref(false);
const isExpired = ref(false);
let intervalId: number | null = null;
let confettiIntervalId: number | null = null;

const parseDate = (dateString: string): Date | null => {
  const parts = dateString.split('-');
  if (parts.length !== 3) return null;

  const [day, month, year] = parts;
  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    23,
    59,
    59
  );

  return date;
};

const calculateTimeLeft = (): void => {
  const targetDate = parseDate(props.date);

  if (!targetDate) {
    console.error('Format de date invalide. Utilisez dd-mm-yyyy');
    return;
  }

  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    // Check if we're past the target date (more than 24 hours)
    if (difference < -86400000) {
      // 24 hours in milliseconds
      isExpired.value = true;
      isFinished.value = false;
      if (confettiIntervalId !== null) {
        clearInterval(confettiIntervalId);
      }
    } else {
      // We're on the same day as the target or just passed it
      if (!isFinished.value) {
        isFinished.value = true;
        triggerConfetti();
      }
      timeLeft.value = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  } else {
    isFinished.value = false;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeLeft.value = { days, hours, minutes, seconds };
  }
};

const triggerConfetti = (): void => {
  // Confetti burst initial
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF8A00', '#FFB703', '#FF6A00', '#FEC89A', '#9C4A00'],
  });

  // Confetti continu pendant 3 secondes
  let count = 0;
  confettiIntervalId = window.setInterval(() => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6, x: Math.random() },
      colors: ['#FF8A00', '#FFB703', '#FF6A00', '#FEC89A', '#9C4A00'],
    });

    count++;
    if (count >= 6) {
      if (confettiIntervalId !== null) {
        clearInterval(confettiIntervalId);
      }
    }
  }, 500);
};

onMounted(() => {
  calculateTimeLeft();
  intervalId = window.setInterval(calculateTimeLeft, 1000);
  if (isFinished.value)
  {
    setInterval(() => triggerConfetti(), 5000)
  }
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  if (confettiIntervalId !== null) {
    clearInterval(confettiIntervalId);
  }
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 10px rgba(234, 177, 102, 0.3),
      inset 0 0 10px rgba(234, 166, 102, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(234, 166, 102, 0.6),
      inset 0 0 15px rgba(234, 177, 102, 0.2);
  }
}

.minuteur-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.minuteur {
  border-radius: 16px;
  padding: 40px;
  animation: glow 2s ease-in-out infinite;
  transition: all 0.3s ease;
  max-width: 600px;
  width: 100%;
}

.minuteur.finished {
  animation: pulse 0.5s ease-in-out;
}

.countdown-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.countdown-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid var(--primary);
  border-radius: 12px;
  padding: 20px 15px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.countdown-box:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: var(--primary-hover);
  transform: translateY(-2px);
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.separator {
  font-size: 2rem;
  font-weight: 300;
  margin: 0 5px;
}

.finished-message {
  text-align: center;
  padding: 20px;
}

.celebration-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: pulse 0.5s ease-in-out infinite;
}

.finished-message h2 {
  font-size: 2rem;
  margin: 10px 0;
  font-weight: 700;
}

.finished-message p {
  font-size: 1.1rem;
  margin: 10px 0 0 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .minuteur {
    padding: 30px 20px;
  }

  .countdown-box {
    min-width: 65px;
    padding: 15px 10px;
  }

  .number {
    font-size: 2rem;
  }

  .label {
    font-size: 0.65rem;
  }

  .separator {
    font-size: 1.5rem;
    margin: 0 3px;
  }

  .finished-message h2 {
    font-size: 1.5rem;
  }

  .celebration-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .minuteur-container {
    padding: 20px 10px;
  }

  .minuteur {
    padding: 20px 15px;
  }

  .countdown-box {
    min-width: 55px;
    padding: 12px 8px;
  }

  .number {
    font-size: 1.5rem;
  }

  .label {
    font-size: 0.6rem;
  }

  .separator {
    font-size: 1.2rem;
    margin: 0 2px;
  }
}
</style>