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
    err: {
      type: String,
      default: ''
    },
    pattern:{
      type: String,
      default: ''
    }

  },
  template: `
<div>
    <label>{{title}}{{required?'*':''}}<br>
    <input :type= "type" 
    :placeholder="placeholder" 
    :required="required"
    :class="{blur: isBlur}"
    @focus="isBlur = false"
    @blur="checkBlur"
    @input="checkInput"
    @change="validate"
   >
    <div 
    class="error"
    :class="{hide:isHide}">{{err}}</div>
    </label>
</div>
`,
  methods: {
    checkBlur: function (e) {
      this.isBlur = (e.target.required && !e.target.value);
    },
    validate: function (e) {
      this.isHide=(new RegExp(this.pattern)).test(String(e.target.value).toLowerCase());
    },
    checkInput: function (e) {
      this.$emit('input', e.target.value);
    }
  },

  data: function () {
    return {
      isBlur:false,
      isHide: true,
    }
  }
});
