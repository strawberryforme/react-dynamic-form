## 1. 安装创建目录
```
npx create-react-app react-jike
```

### 1.1 报错
One of your dependencies, babel-preset-react-app, is importing the
“@babel/plugin-proposal-private-property-in-object” package without
declaring it in its dependencies. This is currently working because
“@babel/plugin-proposal-private-property-in-object” is already in your
node_modules folder for unrelated reasons, but it may break at any tim

```
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

## 2.设置目录
### 设置目录如下
```
--src
index.js
index.css
App.js
1.pages: 页面组件 
2.components: 通用组件
3.store： 组件状态状态
4.router: 路由组件； BOM
5.apis 接口目录； 网络；
6.assets 静态资源目录； image
7.utils 工具函数; JS
删除其他没有用的目录。
```

## 3.安装scss预编译
npm install sass -D; 
将.scss -> sass -> .css; 
sass嵌套语法
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "sass": "^1.72.0";多了一个。
  }

## 4.安装antd
npm install antd --save
  "dependencies": {
    "antd": "^5.15.2",
  }

## 5.配置路由
安装路由包 react-router-dom
基础路由 Layout Login
router/index.js 引入路由配置，到处router实例。
文件入口渲染RouterProvieds;传入router实例。

npm i react-router-dom
  "dependencies": {
    "react-router-dom": "^6.22.3",
  },

router的indexjs里面
导出createBrowserRouter。

在indexjs去掉appjs，并且导入router。

## 6.创建pages路由
1.一般创建一个目录。都会创建一个index.js 从而到处其Layout；


## 7.配置别名路径。
'./'->
1.针对路径转换，修改webpack别名配置路径，craco
2.针对联想提示，修改vscode配置jsconfig.json；
npm i @craco/craco -D

'@/pages/Layout' === 'src/pages/layout' === '../pages/layout'

vscode启动的时候，自当去配置jsconfig.json；
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}

## 8. 导出svg
import { MySVGIcon } from './login.svg';

export default {
  MySVGIcon
}