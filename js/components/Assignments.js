import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
  components: { AssignmentList, AssignmentCreate },
  template: /* html */ `
    <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="En cours"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Terminés"></assignment-list>

      <assignment-create @add="add"></assignment-create>
    </section>
  `,


  data() {
    return {
      assignments: [],
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete),
      }
    },
  },

  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(assignments => {
          this.assignments = assignments;
    });
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    }

  },
}