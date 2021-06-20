<template>
<tbody>
  <tr v-if="count === 2">
    <app-element
      :index="0"
      :short-name="elements[0].shortname"
      :background="elements[0].bgcolor"
      :type-element="elements[0].type"
      :select-element="elements[0].select"
      :mode-view="modeView"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      :index="1"
      :short-name="elements[1].shortname"
      :background="elements[1].bgcolor"
      :type-element="elements[1].type"
      :select-element="elements[1].select"
      :mode-view="modeView"
    />
  </tr>
  <tr v-if="count === 8">
    <app-element
      :index="start - 1"
      :short-name="elements[start - 1].shortname"
      :background="elements[start - 1].bgcolor"
      :type-element="elements[start - 1].type"
      :select-element="elements[start - 1].select"
      :mode-view="modeView"
    />
    <app-element
      :index="start"
      :short-name="elements[start].shortname"
      :background="elements[start].bgcolor"
      :type-element="elements[start].type"
      :select-element="elements[start].select"
      :mode-view="modeView"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      v-for="ind in (count - 2)"
      :index="-1 + elements[start + ind].index"
      :key="elements[start + ind].index"
      :short-name="elements[start + ind].shortname"
      :background="elements[start + ind].bgcolor"
      :type-element="elements[start + ind].type"
      :select-element="elements[start + ind].select"
      :mode-view="modeView"
    />
  </tr>
  <tr v-if="count === 18 && jampStart === 0">
    <app-element
      v-for="ind in count"
      :index="-1 + elements[start + ind - 2].index"
      :key="elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
      :type-element="elements[start + ind - 2].type"
      :select-element="elements[start + ind - 2].select"
      :mode-view="modeView"
    />
  </tr>
  <tr v-if="count === 18 && jampStart !== 0">
    <app-element
      v-for="ind in 3"
      :key="elements[start + ind - 2].index"
      :index="-1 + elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
      :type-element="elements[start + ind - 2].type"
      :select-element="elements[start + ind - 2].select"
      :mode-view="modeView"
    />
    <app-element
      v-for="ind in 15"
      :index="-1 + elements[start + jampOffset + ind + 1].index"
      :key="elements[start + jampOffset + ind + 1].index"
      :short-name="elements[start + jampOffset + ind + 1].shortname"
      :background="elements[start + jampOffset + ind + 1].bgcolor"
      :type-element="elements[start + jampOffset + ind + 1].type"
      :select-element="elements[start + jampOffset + ind + 1].select"
      :mode-view="modeView"
    />
  </tr>
  <tr v-if="count === 14">
    <app-element
      v-for="ind in 14"
      :index="-1 + elements[start + ind - 1].index"
      :key="elements[start + ind - 1].index"
      :short-name="elements[start + ind - 1].shortname"
      :background="elements[start + ind - 1].bgcolor"
      :type-element="elements[start + ind - 1].type"
      :select-element="elements[start + ind - 1].select"
      :mode-view="modeView"
    />
  </tr>
</tbody>
</template>
<style>
tr {
  border: none;
}
</style>
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
    },
    modeView: {
      type: Boolean
    }
  },
  components: {
    appElement
  }
}
</script>
