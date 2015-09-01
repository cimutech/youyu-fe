# 有渔前端团队

该项目是运用 [Jekyll](http://jekyllrb.com) 生成静态网站之后，部署（上传）到 公司 [GitHub](https://github.com/cimutech) 的[项目主页](https://github.com/cimutech/youyu-fe/tree/gh-pages)上。

## 如何开发和部署

### 准备工作

* 建立两个目录
* 一个关联到内网 GitLab 的 `youyu-ui-library` 用于开发（以下称为「开发目录」）
* 另一个关联到 `https://github.com/cimutech/youyu-fe.git` 并切换到 `gh-pages` 分支用来部署（以下称为「部署目录」）

### 开发

在开发目录中编写源码（具体方法参照 [Jekyll](http://jekyllrb.com) 官网），然后终端输入 `bundle exec jekyll serve` 来运行查看结果。

### 部署

* 在部署目录中 `pull` 一下最新的代码
* 终端中的当前位置设置为在开发目录中
* 输入 `bundle exec jekyll build -d 部署目录的相对路径` 生成静态网页到部署目录中
* `commit` 并 `push` 到 GitHub 上

上述操作都做完，即可访问 [http://fe.youyu.im/](http://fe.youyu.im/) 查看效果。

## 自动化任务

### 生成[有渔 UI 库](http://fe.youyu.im/docs/ui/)的样例页面

```shell
rake ui_examples
```

该任务会根据 `_data/navs.json` 中所定义的数据生成样例页面文件 到 `_docs/ui/examples/` 文件夹里。

### 运行程序

```shell
rake run
```

**该任务会调用 `rake ui_examples`**

### 部署

```shell
rake deploy
```

**该任务会调用 `rake ui_examples`**
