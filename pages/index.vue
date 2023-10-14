<script setup lang="ts">
import type { AdInfo } from '~/types'

defineProps<AdInfo>()

const cards = ref<AdInfo[]>([
  {
    title: 'Creative Product Titles',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: '/export.png',
    description: 'Craft compelling, attention-grabbing product descriptions effortlessly, making your products stand out in the crowded marketplace',
  },

  {
    title: 'Product Description',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: '/inscription.png',
    description: 'attention-grabbing product descriptions effortlessly, making your products stand out in the crowded marketplace. Say goodbye to the struggle of finding the perfect description',
  },

  {
    title: 'Product FAQ',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: 'faq.png',
    description: 'Your all-in-one solution for effortlessly creating comprehensive and informative Frequently Asked Questions (FAQ) sections for your business, website, or application.',

  },

  {
    title: 'Product Review',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: 'review.png',
    description: 'Your ultimate companion for managing and leveraging customer reviews to boost your business\'s credibility and customer satisfaction.',
  },

  {
    title: 'Facebook Ad Copy',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: 'facebook.png',
    description: 'Elevate your brand\'s presence, captivate your audience, and drive conversions through strategic and magnetic ad text that resonates with your target market.',
  },

  {
    title: 'Google Ad Copy',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: 'google.svg',
    description: 'Optimize your advertising efforts, captivate your audience, and drive unmatched results through strategic and impactful ad text that leaves a lasting impression.',
  },

  {
    title: 'Tiktok Ad Copy',
    link: {
      label: 'SELECT',
      redirect: '/content',
    },
    image: 'tiktok-icon.png',
    description: ' Reach the hearts and minds of users, boost brand awareness, and drive conversions through engaging and magnetic ad text designed to thrive in the TikTok ecosystem.',
  },
])
</script>

<template>
  <h2 class="text-center text-4xl font-500 dark:text-white">
    Here you can see the DropProShip Tools
  </h2>
  <AdCardSection :cards="cards" />
</template>
