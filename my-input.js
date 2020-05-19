Vue.component('my-input', {
  props: {
    title: String,
    placeholderr: String,
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
  },
  template: `
<div>
    <label>{{title}}{{required?'*':''}}<br>
    <input :type= "type" 
    :placeholder="placeholderr" 
    :required="required"
    :class="{invalid: isValid}"
    @blur="validate"
    @input="validate">
    </label>
</div>
`,
  methods: {
    validate: function(e){
    this.isValid=e.target.required && !e.target.value
    },
  },

  data: function () {
    return {isValid: false}
  }
});
