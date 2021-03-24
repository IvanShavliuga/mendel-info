<template>
<tbody>
  <tr v-if="count === 2">
    <app-element
      :short-name="elements[0].shortname"
      :background="elements[0].bgcolor"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      :short-name="elements[1].shortname"
      :background="elements[1].bgcolor"
    />
  </tr>
  <tr v-if="count === 8">
    <app-element
      :short-name="elements[start - 1].shortname"
      :background="elements[start - 1].bgcolor"
    />
    <app-element
      :short-name="elements[start].shortname"
      :background="elements[start].bgcolor"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      v-for="ind in (count - 2)"
      :key="elements[start + ind].index"
      :short-name="elements[start + ind].shortname"
      :background="elements[start + ind].bgcolor"
    />
  </tr>
  <tr v-if="count === 18 && jampStart === 0">
    <app-element
      v-for="ind in count"
      :key="elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
    />
  </tr>
  <tr v-if="count === 18 && jampStart !== 0">
    <app-element
      v-for="ind in 3"
      :key="elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
    />
    <app-element
      v-for="ind in 15"
      :key="elements[start + jampOffset + ind + 1].index"
      :short-name="elements[start + jampOffset + ind + 1].shortname"
      :background="elements[start + jampOffset + ind + 1].bgcolor"
    />
  </tr>
</tbody>
</template>
<script>
import appElement from './Element.vue'
export default {
  props: {
    count: {
      type: Number
    },
    start: {
      type: Number
    },
    elements: {
      type: Array
    },
    jampStart: {
      type: Number
    },
    jampOffset: {
      type: Number
    }
  },
  components: {
    appElement
  }
}
</script>
