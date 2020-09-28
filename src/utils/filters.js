
import dayjs from '@/plugins/day'

export default {
    // 数字每隔三位加逗号
    numFormat(val) {
        let b = String(val);
        let len = b.length;
        if (len <= 3) {
        return b;
        } else {
        let r = len % 3;
        return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
        }
    },
    // 数字保留两位小数
    numDecimalTwo(val) {
        return Number(val).toFixed(2);
    },
     dateFormatter(date, fmt = "yyyy-MM-dd hh:mm:ss") { // 
      var o = {
        "M+": date.getMonth() + 1,                 //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    },

    // 
    /**
     * 处理相对时间函数
     * @param {string} date
     * @return {string}中文相对时间
     */
    formatRelativeTime(date){
      return dayjs(date).from(dayjs())
    }
}