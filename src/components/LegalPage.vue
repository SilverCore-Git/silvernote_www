<template>
  <smoth-scroll-wraper>
    <div class="legal-page pb-20 pt-40 bg">
      <div class="legal-container ">
        <!-- Header -->
        <div class="legal-header ">
          <h1>{{ config.title }}</h1>
          <p v-if="config.lastUpdated" class="last-updated">
            Dernière mise à jour: {{ formatDate(config.lastUpdated) }}
          </p>
        </div>

        <!-- Table of contents -->
        <div class="toc">
          <h2>Sommaire</h2>
          <ul>
            <li v-for="(section, index) in config.sections" :key="index">
              <a :href="`#section-${index}`">{{ section.heading }}</a>
            </li>
          </ul>
        </div>

        <!-- Sections -->
        <div class="legal-content">
          <section
            v-for="(section, index) in config.sections"
            :key="index"
            :id="`section-${index}`"
            class="legal-section"
          >
            <h2>{{ section.heading }}</h2>
            <p class="section-text">{{ section.content }}</p>
          </section>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p>
            Pour toute question ou commentaire, n'hésitez pas à
            <router-link to="/contact">nous contacter</router-link>.
          </p>
        </div>
      </div>
    </div>
  </smoth-scroll-wraper>
</template>

<script setup lang="ts">
import SmothScrollWraper from '@/components/common/smothScrollWraper.vue';

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalConfig {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

defineProps<{
  config: LegalConfig;
}>();

const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.legal-header {
  padding: 60px 40px;
  text-align: center;
}

.legal-header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.last-updated {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
  font-style: italic;
}

.toc {
  background: #f8f9fa;
  padding: 40px;
  border-bottom: 1px solid #e9ecef;
}

.toc h2 {
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  color: #333;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  gap: 20px;
}

.toc li {
  margin-bottom: 12px;
  break-inside: avoid;
}

.toc a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.toc a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.legal-content {
  padding: 40px;
}

.legal-section {
  margin-bottom: 40px;
  scroll-margin-top: 80px;
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary);
}

.section-text {
  color: #555;
  line-height: 1.8;
  font-size: 1rem;
  margin: 0;
  white-space: pre-wrap;
}

.legal-footer {
  background: #f8f9fa;
  padding: 30px 40px;
  text-align: center;
  border-top: 1px solid #e9ecef;
  color: #666;
}

.legal-footer a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.legal-footer a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 30px 10px;
  }

  .legal-container {
    border-radius: 8px;
  }

  .legal-header {
    padding: 40px 20px;
  }

  .legal-header h1 {
    font-size: 1.8rem;
  }

  .toc {
    padding: 25px 20px;
  }

  .toc ul {
    columns: 1;
  }

  .legal-content {
    padding: 25px 20px;
  }

  .legal-section {
    margin-bottom: 30px;
  }

  .legal-section h2 {
    font-size: 1.1rem;
  }

  .legal-footer {
    padding: 20px;
  }
}
</style>
