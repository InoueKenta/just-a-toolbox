<template>
  <main class="prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10">
    <h1>
      RANDOMIZER
    </h1>

    <div class="tabs not-prose">
      <a class="tab tab-lg tab-lifted tab-active">Number</a>
      <a class="tab tab-lg tab-lifted">Text</a>
      <a class="tab tab-lg tab-lifted">UUID</a>
    </div>

    <section class="pt-3">
      <div class="join">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Min</span>
          </label>
          <input type="number" v-model="min" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Max</span>
          </label>
          <input type="number" v-model="max" class="input input-bordered w-full max-w-xs" />
        </div>
      </div>
    </section>

    <section class="pt-3">
      <div class="join">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">How many number you want to generate?</span>
          </label>
          <input type="number" v-model="number_to_generate" class="input input-bordered w-full max-w-xs" />
        </div>
      </div>
    </section>

    <section class="pt-3">
      <div class="form-control w-52">
        <label class="cursor-pointer label">
          <span class="label-text">Decimal Mode?</span>
          <input type="checkbox" v-model="isDecimal" class="toggle toggle-primary" />
        </label>
      </div>

      <Transition>
        <div class="form-control w-full max-w-xs" v-if="isDecimal">
          <label class="label">
            <span class="label-text">How many decimal places?</span>
          </label>
          <input type="number" v-model="decimal" step="1" class="input input-bordered w-full max-w-xs" />
        </div>
      </Transition>

    </section>

    <section class="pt-5">
      <button class="btn btn-primary" @click="generateRandom">GENERATE IT!!!</button>
    </section>

    <section class="pt-10">
      <div class="mockup-code not-prose">
        <pre v-for="(rnd, index) in generated" :key="index"><code>{{ rnd }}</code></pre>
      </div>
    </section>

  </main>
</template>


<script setup>
import { ref, computed, onMounted } from "vue";

const min = ref(0)
const max = ref(100)
const number_to_generate = ref(1)


const isDecimal = ref(false)
const decimal = ref(3)

const precision = computed(() => {
  return isDecimal.value ? decimal.value : 0
})

const generated = ref([])

const generateRandom = () => {
  generated.value = []
  for (let i = 0; i < number_to_generate.value; i++) {
    let randomNumber = Math.random() * (max.value - min.value) + min.value;
    generated.value.push(randomNumber.toFixed(precision.value))
  }
}

onMounted(() => {
  generateRandom()
})

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>