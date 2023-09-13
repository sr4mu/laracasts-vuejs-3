export default {
  template: /* html */ `
    <form @submit.prevent="add">
      <div class="border border-gray-500 rounded text-black">
        <input v-model="newAssignment" placeholder="Nouveau devoir..." class="rounded-l p-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-r">Créer</button>
      </div>
    </form>
  `,

  data() {
    return {
      newAssignment: '',
    }
  },

  methods: {
    add(event) {
      this.$emit('add', this.newAssignment);
      this.newAssignment = '';
    },
  }
}

