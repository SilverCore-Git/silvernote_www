<template>
    <h2 class="text-4xl lg:text-6xl font-bold">Silvernote sort dans :</h2>
  <div class="countdown mb-4">
    <div v-if="isCountingDown">
      <span class="value">{{ formattedTime.days }}</span> jours
      <span class="value">{{ formattedTime.hours }}</span> heures
      <span class="value">{{ formattedTime.minutes }}</span> minutes
      <span class="value">{{ formattedTime.seconds }}</span> secondes
    </div>
    <div v-else class="finished-message">
      Le compte à rebours est **terminé** ! 🎉
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FormattedTimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const props = defineProps<{
  targetDate: string | Date;
}>();


const timeLeft = ref<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const intervalId = ref<number | null>(null);
const isCountingDown = ref(true);


const formatNumber = (value: number): string => {
  return value < 10 ? `0${value}` : String(value);
};

const calculateTimeLeft = () => {
    
  const targetTime = new Date(props.targetDate).getTime();
  const currentTime = new Date().getTime();
  const difference = targetTime - currentTime; 

  if (difference <= 0) {
    isCountingDown.value = false;
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
    }
    return;
  }

  isCountingDown.value = true;
  
  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  const days = Math.floor(difference / MS_PER_DAY);
  
  const hours = Math.floor((difference % MS_PER_DAY) / MS_PER_HOUR);
  
  const minutes = Math.floor((difference % MS_PER_HOUR) / MS_PER_MINUTE);
  
  const seconds = Math.floor((difference % MS_PER_MINUTE) / MS_PER_SECOND);
  
  timeLeft.value = { days, hours, minutes, seconds };
};


const startCountdown = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
  }
  
  calculateTimeLeft();
  
  intervalId.value = setInterval(calculateTimeLeft, 1000);
};

const stopCountdown = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};


const formattedTime = computed<FormattedTimeLeft>(() => {
  return {
    days: formatNumber(timeLeft.value.days),
    hours: formatNumber(timeLeft.value.hours),
    minutes: formatNumber(timeLeft.value.minutes),
    seconds: formatNumber(timeLeft.value.seconds),
  };
});

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  stopCountdown();
});

watch(() => props.targetDate, () => {
    startCountdown();
}, { immediate: true }); 


</script>

<style scoped>
.countdown {
  font-family: sans-serif;
  font-size: 1.5em;
  text-align: center;
  border-radius: 8px;
}
.value {
  font-weight: bold;
  font-size: 1.8em;
  color: white;
  margin: 0 5px;
}
.finished-message {
  font-size: 1.2em;
  color: #dc3545;
  font-weight: 600;
}
</style>