---
author: wtb
pubDatetime: 2026-05-16T18:30:00+08:00
title: 个人访问令牌 (Token)登陆github的教程
slug: 个人访问令牌 (Token)登陆github的教程
featured: true
draft: false
tags:
  - Git
  - github
description: git
slug: github-token-tutorial

---
###  个人访问令牌 (Token)登陆github的教程

为了让你以后或者其他小伙伴随时翻阅，这里为你整理一份标准、精美、永远不会迷路的 GitHub 个人访问令牌（Personal Access Token, 简称 PAT）生成与使用全能教程。

📌 为什么不能用网页密码登录终端？
GitHub 为了防止用户的明文密码在终端或第三方软件中泄露，全面取消了通过“用户名+密码”推送代码的机制。现在，Token（令牌）就是你在终端里的“临时专属数字密码”，它拥有特定 scope（权限）和有效期，比网页密码安全得多。

第一部分：在 GitHub 网页端生成 Token
1. 进入开发者设置
登录 GitHub，点击网页右上角你的个人头像 $\rightarrow$ 在下拉菜单中选择 Settings（设置）。
在左侧菜单栏一路拉到最底部，找到并点击带有 <> 图标的 Developer settings（开发者设置）。
2. 选择经典版 Token
在刷新后的左侧菜单栏中，依次点击：
Personal access tokens $\rightarrow$ Tokens (classic)。
⚠️ 注意：千万不要错点成上面的 GitHub Apps 或 Fine-grained tokens，经典版（Classic）是对所有终端工具兼容性最好的版本。
3. 创建新令牌
点击页面右上角的 Generate new token 按钮，并在弹出的下拉菜单中选择 Generate new token (classic)。
4. 填写令牌配置
进入表单页面后，按照以下规范填写：
Note（备注）：给这个令牌起个名字，方便以后辨认。例如：mac-mini-terminal 或 vercel-deploy。
Expiration（有效期）：建议选择 90 days（90天）或 No expiration（永久有效，适合个人博客长期维护）。
Select scopes（勾选权限）：务必且只需勾选第一大项 repo。勾选它意味着你允许这个令牌在终端里读写你的代码仓库。
5. 复制并妥善保存 Token
拉到页面最底部，点击绿色的 Generate token 按钮。
页面会生成一串以 ghp_ 开头的超长字符串。立刻点击右侧的复制图标并把它保存到你的备忘录里。
🛑 硬核警告：这个界面一旦刷新或关闭，这串 ghp_ 密钥将永远隐藏，无法再次查看！如果你不小心关掉了，只能删掉重新生成一个。

第二部分：在本地终端（Terminal）使用 Token
当你本地运行 git push（推送代码）或者克隆私有仓库时，终端会弹出来两行提示：
Bash

Username for 'https://github.com':


Password for 'https://xxxx@github.com':


正确的通关姿势：
在 Username 后面：输入你的 GitHub 用户名（例如 xxxUser）或注册邮箱，然后敲回车。
在 Password 后面：千万不要输入你登录 GitHub 网站的那个密码！ 3. 直接把你刚刚复制的、以 ghp_ 开头的完整 Token 粘贴进去，然后敲回车。
💡 Mac 避坑小常识：
在 Mac 终端里粘贴或输入密码时，屏幕上不会显示任何星号 * 或光标闪烁（这是 Unix 系统的隐私保护机制）。你尽管放心地直接 Command + V 粘贴进去，即使屏幕看起来是空的，直接敲回车即可！

第三部分：如何让 Mac 永远记住这个 Token（一劳永逸）
如果每次 git push 都要去复制一次 Token 简直要抓狂。我们可以让 Mac 的“钥匙串”自动托管它。
在你的终端里运行下面这行命令，开启 Git 凭证自动存储：
Bash

git config --global credential.helper trend


注：在 macOS 系统上，它会自动关联你的 Keychain（钥匙串访问）。
接下来：你只需要按照“第二部分”的步骤手动成功输入一次用户名和 Token，Mac 就会永久记住它。以后你再运行 git push，代码就会像丝般顺滑地直接飞上 GitHub，再也不会弹窗打扰你了！
