# 有渔前端团队

该项目是运用 [Jekyll](http://jekyllrb.com) 生成静态网站之后，部署（上传）到 公司 [GitHub](https://github.com/cimutech) 的[项目主页](https://github.com/cimutech/youyu-fe/tree/gh-pages)上。

## 如何开发和部署

### 开发

将内网 GitLab 上的 `youyu-ui-library` 仓库克隆到本地（开发目录），开始编写源码（具体方法参照 [Jekyll](http://jekyllrb.com) 官网），然后终端输入 `rake run` 来运行查看结果。

### 部署

在终端中将当前位置设置为开发目录，输入 `rake deploy` 后自动开始将代码编译到开发目录同级的 `y2fe-release` 文件夹中（如果不存在则自动创建），然后提交到 GitHub 上。最后一步，访问 [http://fe.youyu.im/](http://fe.youyu.im/) 查看效果。

## 文件结构

除了 `_data` 和 `_includes` 之外，其他 Jekyll 标准的文件夹就不做多说明。

```
.
├─── _assets                          === 资源文件（结构与 rails 一样）
│
├─┬─ _build                           === 编译配置
│ └─── config.yml                     --- 部署时的配置
│
├─┬─ _data                            === 编译所需数据
│ ├─┬─ docs                           --- 文档
│ │ ├─┬─ ui                           --- 有渔 UI 库文档
│ │ │ └─── examples.yml               --- 有渔 UI 库文档的示例
│ │ ├─┬─ youyu                        --- 有渔工具库文档
│ │ │ └─── apis.yml                   --- 有渔工具库文档的 API
│ │ ├─── list.yml                     --- 文档列表
│ │ └─── pages.yml                    --- 文档页面
│ ├─── libs.yml                       --- 有渔 UI 库所依赖的第三方插件
│ └─── navs.json                      --- 导航及菜单
│
├─┬─ _demos                           === 示例
│ ├─┬─ layouts                        --- 页面布局类
│ │ └─── dashboard-for-students.html  --- 新设计的 dashboard
│ └─── index.html                     --- 示例列表页
│
├─┬─ _docs                            === 文档页面
│ ├─┬─ ui                             --- 有渔 UI 库相关
│ │ ├─┬─ basic                        --- 基本样式与 UI 约定（自动生成）
│ │ │ └─── ...
│ │ ├─┬─ components                   --- 组件（自动生成）
│ │ │ └─── ...
│ │ └─── index.html                   --- 有渔 UI 库首页
│ ├─┬─ youyu                          --- 有渔工具库相关
│ │ ├─┬─ apis                         --- API（自动生成）
│ │ │ └─── ...
│ │ ├─┬─ intro                        --- 有渔工具库介绍页
│ │ │ └─── turbolinks.html            --- Turbolinks 的一些事
│ │ └─── index.html                   --- 有渔工具库首页
│ ├─── asset-files.yml                --- 资源文件说明页
│ └─── index.html                     --- 文档首页
│
└─┬─ _includes
  ├─┬─ docs
  │ ├─┬─ ui
  │ │ ├─── example.html               --- 示例页章节
  │ │ ├─── example_page.html          --- 示例页
  │ │ ├─── snippet.html               --- 示例代码
  │ │ └─── source.html                --- 组件来源
  │ ├─┬─ youyu
  │ │ └─── api_page.html              --- API 页
  │ ├─── content_toc.html             --- 文档内容目录
  │ ├─── page.html                    --- 文档页
  │ └─── section.html                 --- 内容章节
  ├─┬─ layout
  │ └─── breadcrumb.html              --- 面包屑
  └─── head.html                      --- <head> 标签内部
```

`_assets` 中的文件结构与有渔项目中的 `app/assets` 基本保持一致，尤其是跟有渔库及主题相关的文件，在修改后要更新到有渔项目中。它们分别为：

* `components`
* `helper`
* `project`
* `themes`
* `youyu`
