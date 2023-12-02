import { Select } from 'ant-design-vue'
import { DefaultOptionType } from 'ant-design-vue/es/select'
import { defineComponent, ref, watch, Ref, onMounted, unref, toRaw } from 'vue'
const SelectComp = defineComponent({
  name: 'SelectComp',
  props: {
    items: {
      type: Array
    },
    isSingle: {
      type: Boolean,
      default: () => true
    },
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { slots }) {
    const selectedItems = ref([]) as Ref<string[]>
    onMounted(() => {
      selectedItems.value = toRaw(props.selectedItems) as string[]
    })

    const options = ref(
      props.items?.map((item) => ({
        value: item,
        label: item
      })) as DefaultOptionType[]
    )

    return () => (
      <Select
        mode={props.isSingle ? 'single' : 'multiple'}
        options={options.value}
        v-model:value={selectedItems.value}
        class="w-[100%]"
        showArrow={true}
      />
    )
  }
})
export default SelectComp
