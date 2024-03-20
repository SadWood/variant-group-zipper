# Variant Group Zipper VS Code Extension

## 简介

Variant Group Zipper 是一个 VS Code 扩展，它提供了两个命令：`vgz.unzip`和`vgz.zip`，用于处理文本中的特定格式。

## 功能

- `vgz.unzip`：这个命令会找到选中的文本中所有匹配`(\w+):(\((.*?)\))`正则表达式的部分，并将其转换为`${p1}:${s}`的格式，其中`p1`是匹配的第一部分，`s`是匹配的第三部分中的每个空格分隔的子字符串。

- `vgz.zip`：这个命令会将选中的文本分割成单词，然后将每个单词分割成前缀和剩余部分。对于每个前缀，它会收集所有相同前缀的剩余部分，并将其转换为`${prefix}:(${values.join(' ')})`的格式，其中`values`是所有相同前缀的剩余部分。

## 如何使用

1. 在 VS Code 中打开你想要处理的文件。
2. 选择你想要处理的文本。
3. 执行`vgz.unzip`或`vgz.zip`命令。

## 已知问题

如果你遇到任何问题，请在 GitHub 上提交一个 issue。

## 发布说明

### 0.1.0

- 初始发布，包含`vgz.unzip`和`vgz.zip`两个命令。
