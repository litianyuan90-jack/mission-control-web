#!/bin/bash
# GitHub Pages 部署脚本

echo "🚀 Mission Control Web - GitHub Pages 部署"
echo "=========================================="
echo ""

# 请修改以下变量
GITHUB_USERNAME="你的GitHub用户名"
REPO_NAME="mission-control-web"

echo "步骤："
echo ""
echo "1. 在 GitHub 创建仓库: https://github.com/new"
echo "   仓库名: $REPO_NAME"
echo "   选择 Public"
echo ""
echo "2. 运行以下命令："
echo ""
echo "   cd /root/.openclaw/workspace/mission-control-web"
echo "   git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 在 GitHub 仓库设置中启用 Pages："
echo "   Settings → Pages → Source → GitHub Actions"
echo ""
echo "4. 访问地址："
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "✅ 完成！"
