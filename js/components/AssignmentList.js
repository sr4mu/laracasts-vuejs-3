import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js';

export default {
  components: { Assignment, AssignmentTags },

  template: /* html */ `
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">
        {{title}}
        <span>({{ assignments.length }})</span>
      </h2>

      <assignment-tags
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
      ></assignment-tags>

      <ul class="border border-gray-500 rounded divide-y divide-gray-500 mt-4">
        <assignment
          v-for="assignment in filteredAssignments"
          :key="assignment.id"
          :assignment="assignment"
        ></assignment>
      </ul>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },


  data() {
    return {
      currentTag: 'tous'
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === 'tous') {
        return this.assignments;
      }

      return this.assignments.filter(a => a.tag === this.currentTag);
    },
  },
}