#!/bin/bash
# Mission Control Web 启动脚本

echo "🚀 Mission Control Web"
echo "======================"
echo ""

cd /root/.openclaw/workspace/mission-control-web

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

echo ""
echo "🌐 启动开发服务器..."
echo ""
echo "访问地址:"
echo "  - 本地: http://localhost:3000"
echo "  - 网络: http://$(hostname -I | awk '{print $1}'):3000"
echo ""

npm run dev
