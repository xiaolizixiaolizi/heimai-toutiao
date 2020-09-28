export default {
  data() {
    return {
      defaultArticle: {
        art_id: "", //文章id
        title: "", //	文章标题
        aut_id: "", //作者id
        aut_name: "", //作者name
        ch_id: "", //
        comm_count: "", //评论数
        collect_count: "", //
        cover: [], //封面
        is_top: "", //是否置顶，0-不置顶，1-置顶
        like_count: "", //文章id
        pubdate: "", //发布时间
        trace: {}, //文章id
      },
    }
  },
  computed: {


  }, 
  methods: {  
    initDefaultArticle() {
      this.defaultArticle = { ...this.defaultArticle, ...this.article };
    },
    
  },
  created() { 
   
  },
  mounted() {

  },
  watch: {
    article: {
      handler() {
        this.initDefaultArticle();
      },
      immediate: true,
    },
  },


}