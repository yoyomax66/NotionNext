const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.yomax66.xyz' },
    { title: '访问文档中心获取更多帮助', url: 'https://www.yomax66.xyz/doc' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享运维',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'YOMAX66.XYZ',
  HEO_HERO_TITLE_4: '从零开始的',
  HEO_HERO_TITLE_5: '小白修炼之路~',
  HEO_HERO_TITLE_LINK: 'https://www.yomax66.xyz/tag/从零开始',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '初入江湖', url: '/tag/Linux%20网络服务' },
  HEO_HERO_CATEGORY_2: { title: '得窥门径', url: '/tag/集群' },
  HEO_HERO_CATEGORY_3: { title: '如鱼得水', url: '/tag/云计算' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修金融与技术',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/yoyomax66/NotionNext', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Linux',
      img_1: '/images/heo/SkillIconsLinuxLight.webp',
      color_1: '#f4f2ed',
      title_2: 'Bash',
      img_2: '/images/heo/SkillIconsBashDark.webp',
      color_2: '#242938'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Kubernetes',
      img_2: '/images/heo/SkillIconsKubernetes.webp',
      color_2: '#326ce5'
    },
    {
      title_1: 'Mysql',
      img_1: '/images/heo/SkillIconsMysqlLight.webp',
      color_1: '#f4f2ed',
      title_2: 'Redis',
      img_2: '/images/heo/SkillIconsRedisDark.webp',
      color_2: '#242938'
    },
    {
      title_1: 'Python',
      img_1: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_1: '#ffffff',
      title_2: 'Openstack',
      img_2: '/images/heo/SkillIconsOpenstackDark.webp',
      color_2: '#242938'
    },
    {
      title_1: 'Prometheus',
      img_1: '/images/heo/SkillIconsPrometheus.webp',
      color_1: '#e6522c',
      title_2: 'Grafana',
      img_2: '/images/heo/SkillIconsGrafanaDark.webp',
      color_2: '#242938'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'aws',
      img_2: '/images/heo/SkillIconsAwsLight.webp',
      color_2: '#f4f2ed'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
