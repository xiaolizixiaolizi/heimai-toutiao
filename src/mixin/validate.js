export default {
  data() {
    return {}
  },
  computed: {


  }, 
  methods: {  
    phoneValidator(val) {
      const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      return phoneReg.test(val);
    },
    codeValidator(val) {
      return val.length === 6;
    },
    //******************************** 登录表单验证******************************** */
    initLoginFormRule(){
      // this.userLoginRule是在被混入对象中定义
      this.userLoginRule={
        user: [
          { required: true,message:"手机号码不能为空", trigger: "onBlur",},
          {validator: this.phoneValidator, message: "手机号码格式不正确", trigger: "onBlur",},
        ],
        code: [
          {required: true,"message":'验证码不能为空',trigger: "onBlur",},
        { validator: this.codeValidator, message: "验证码格式不正确" ,trigger: "onBlur",}],
      };
    }
  },
  created() { 
    // 登录表单验证规则
   this.initLoginFormRule()
  },
  mounted() {

  },


}