import Vue from "vue";
import { Button, Loading, Cell, Col, Row ,Tabbar,CellGroup , TabbarItem, NavBar, 
  Overlay, Toast, Dialog ,Form, Field,Popup ,Icon,Tab, Tabs, Grid, GridItem, Swipe, SwipeItem, Lazyload,Notify ,CountDown,Image as VanImage,
  List,PullRefresh ,Sticky
 } from 'vant';  // 按需引入
Vue.use(Swipe);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Field);
Vue.use(TabbarItem);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(CountDown );
Vue.use(GridItem);
Vue.use(Button)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Loading)
Vue.use(Sticky)
Vue.use(Overlay)
Vue.use(Toast) //this.$toast默认自动挂载
Vue.use(Notify );
Vue.use(Dialog );

Vue.use(Lazyload);



