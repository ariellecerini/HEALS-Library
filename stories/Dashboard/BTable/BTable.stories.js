import BTable from './BTable.vue';

export default {
  title: 'Bootstrap/Table',
  component: BTable,
//   argTypes: {
//     title: { control: {type: 'String'}}
//   },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BTable },
  template: '<b-table striped hover v-bind="$props"></b-table>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: "Diabetes Review",
  items: [
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    
};

