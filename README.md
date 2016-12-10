# ES6-Primer
ECMAScript6 入门

###安装Babel转换器
####1.配置文件

*	在文件根目录下新建文件`.babelrc`，并写入

		{
		  "presets": [],
		  "plugins": []
		}

* 安装`es2015`转码规则

		npm install babel-preset-es2015 --save-dev

* 安装`React`转码规则

		npm install babel-preset-react --save-dev
*	安装`ES7`不同阶段语法提案的转码规则（共有4个阶段），选装一个

		npm install babel-preset-stage-2 --save-dev

* 在配置文件写入

		{
		    "presets": [
		      "es2015",
		      "react",
		      "stage-2"
		    ],
		    "plugins": []
		}

####2.命令行转码
*	安装babel-cli转码工具

		npm install babel-cli -g 
*	用法

		//转码结果输出到标准输出
		babel example.js
		
		//转码结果写入一个文件
		//--out-file 或 -o 参数指定输出文件
		babel example.js --out-file compiled.js
		//或者
		babel example.js -o compiled.js
		
		//整个目录转码
		//--out-dir 或 -d 参数指定输出目录
		babel src --out-dir lib
		//或者
		babel src -d lib
		
		//-s 参数生成source map文件
		babel src -d lib -s
*	将`babel-cli`安装在项目之中

		npm install babel-cli --save-dev

*	改写`package.json`(可以手动创建，也可以使用`npm init`创建，输入相关项即可)

		{
		  // ...
		  "devDependencies": {
		    "babel-cli": "^6.0.0"
		  },
		  "scripts": {
		    "build": "babel src -d lib"
		  },
		}
*	转码命令

		npm run build

