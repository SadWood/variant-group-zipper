# Variant Group Zipper VS Code Extension

## 简介

Variant Group Zipper 是一个 VS Code 扩展，解决使用 TailwindCSS、UnoCSS、WindiCSS 等原子化 CSS 框架时涉及 Variant Group 的相关问题。

## 功能

- `vgz.unzip`：这个命令会将选中的 Class，例如：`md:(text-white/75 bg-gray-50 border-l-1 border-[#2FCAF9])`，转换为：`md:text-white/75 md:bg-gray-50 md:border-l-1 md:border-[#2FCAF9]`。

- `vgz.zip`：这个命令会将选中的 Class，例如：`md:text-white/75 md:bg-gray-50 md:border-l-1 md:border-[#2FCAF9]`，转换为：`md:(text-white/75 bg-gray-50 border-l-1 border-[#2FCAF9])`。

## 如何使用

1. 在 VS Code 中打开你想要处理的文件。
2. 选择你想要处理的 Class。
3. 执行`vgz.unzip`或`vgz.zip`命令。

## 已知问题

如果你遇到任何问题，请在 GitHub 上提交一个 issue。

## 发布说明

### 0.1.0

- 初始发布，包含`vgz.unzip`和`vgz.zip`两个命令。
