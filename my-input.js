Vue.component('my-input', {
  props: {
    title: String,
    placeholder: String,
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
    :placeholder="placeholder" 
    :required="required">
    </label>
</div>
`,

});
