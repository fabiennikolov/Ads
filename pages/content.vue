<script setup lang="ts">
import axios from 'axios'
import type { TitleMap } from '~/types'

const chatgptApi = axios.create({
  baseURL: 'https://api.openai.com/v1/engines/davinci/completions',
  headers: {
    Authorization: 'Bearer YOUR_API_KEY',
  },
})

const selectedContentType = ref('')
const productDescription = ref('')
const generatedContent = ref('')
const ProductFeatures = ref('')

async function generate() {
  // Generate the prompt for ChatGPT
  const prompt = `Write ${selectedContentType.value}: ${productDescription.value} with key features: ${ProductFeatures.value}`

  // Send the prompt to ChatGPT and get the response
  const response = await chatgptApi.post('', { prompt })

  // Display the generated response in the result component
  generatedContent.value = response.data.choices[0].text
}

const titleMap: TitleMap = {
  'Creative Product Title for': 'Creative Product Titles',
  'Product Description for': 'Product Description',
  'ProductFAQ for': 'Product FAQ',
  'Product Review Text for': 'Product Review',
  'FacebookAd text for': 'Facebook Ad Copy',
  'GoogleAd text for': 'Google Ad Copy',
  'TiktokAd text for': 'Tiktok Ad Copy',
}

function generateTitle() {
  return titleMap[selectedContentType.value] || 'Content generator'
}
</script>

<template>
  <div
    class="my10 xl:(grid grid-cols-2) sm:(flex flex-col)"
  >
    <div class="product-title-generator max-w-100 w100 sm:(mx2 mxa) xl:(ml30 mt30)">
      <div class="flex">
        <p class="font-bold" for="contentType">
          Content Type:
        </p>
        <select v-model="selectedContentType" class="mt-2 block w-full border rounded-md bg-white px-3 py-2 text-black shadow-sm focus:border-red-500">
          <option value="Creative Product Title for">
            Creative Product Titles
          </option>
          <option value="Product Description for">
            Product Description
          </option>
          <option value="ProductFAQ for">
            Product FAQ
          </option>
          <option value="Product Review Text for">
            Product Review
          </option>
          <option value="FacebookAd text for">
            Facebook Ad Copy
          </option>
          <option value="GoogleAd text for">
            Google Ad Copy
          </option>
          <option value="TiktokAd text for">
            Tiktok Ad Copy
          </option>
        </select>
      </div>

      <h1 class="my5 text-start text-3xl font-bold uppercase text-red-6/80">
        {{ generateTitle() }}
      </h1>
      <div class="flex">
        <p class="font-bold">
          Product Name:
        </p>
        <input v-model="productDescription" type="text" class="mt-2 block w-full border rounded-md bg-white px-3 py-2 text-black shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500">
      </div>

      <div v-if="selectedContentType !== 'ProductTitle'" class="mt-5">
        <p class="font-bold">
          Key Features:
        </p>
        <textarea id="content_message" v-model="ProductFeatures" rows="4" class="mt3 block w-full resize-none border border-[#E7EFFF] rounded-[5px] bg-white p-[15px_60px_15px_15px] text-sm text-black text-gray-900 focus:border-red-500 placeholder:opacity-50 focus:outline-none focus:ring-red-500" placeholder="Example: The Self Cleaning Hair Brush is a game-changer when it comes to hair care" maxlength="500" style="height: 125px;" />
      </div>
      <div class="mt5">
        <button type="button" class="rounded px-4 py-2 leading-relaxed text-white btn hover:bg-red-5" aria-label="Generate content" @click="generate">
          Write For Me
        </button>
      </div>
    </div>
    <div v-if="generatedContent" class="mt-40 flex">
      <label class="font-bold">Generated Content:</label>
      <textarea v-model="generatedContent" />
    </div>
  </div>
</template>
