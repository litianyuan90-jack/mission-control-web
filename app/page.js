'use client'

import { useState } from 'react'
import { 
  LayoutDashboard, 
  Bot, 
  Brain, 
  CheckSquare, 
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  Play,
  Pause,
  MoreVertical,
  Activity,
  Cpu,
  Zap
} from 'lucide-react'

// 导航项
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Bot, label: 'Agents', active: false },
  { icon: Brain, label: 'Memory', active: false },
  { icon: CheckSquare, label: 'Tasks', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
]

// Agent数据
const agents = [
  { name: 'Ops-01', role: '运营协调', status: 'online', task: '监控中', avatar: '🎯' },
  { name: 'Dev-01', role: '开发Agent', status: 'busy', task: 'MC开发中', avatar: '💻' },
  { name: 'Research-01', role: '研究Agent', status: 'online', task: '空闲', avatar: '🔬' },
  { name: 'Writer-01', role: '写作Agent', status: 'online', task: '空闲', avatar: '✍️' },
]

// 活动数据
const activities = [
  { time: '2分钟前', text: 'A股内容生成完成', type: 'success' },
  { time: '5分钟前', text: 'AI资讯聚合完成', type: 'success' },
  { time: '1小时前', text: 'GenericAgent跟踪报告', type: 'info' },
  { time: '3小时前', text: '关税计算器更新', type: 'info' },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <div className="flex h-screen bg-background">
      {/* 左侧导航栏 */}
      <aside className="w-64 bg-surface border-r border-surface-light flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-surface-light">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Mission Control</h1>
              <p className="text-xs text-text-muted">OpenClaw</p>
            </div>
          </div>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === item.label
                    ? 'bg-primary text-white'
                    : 'text-text-muted hover:bg-surface-light hover:text-text'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* 底部设置 */}
        <div className="p-4 border-t border-surface-light">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-muted hover:bg-surface-light hover:text-text transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部栏 */}
        <header className="h-16 bg-surface border-b border-surface-light flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">{activeTab}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-surface-light border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="relative p-2 rounded-xl hover:bg-surface-light transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            </button>
          </div>
        </header>

        {/* 内容区域 */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Welcome back, Jack! 👋</h3>
              <p className="text-text-muted">Here&apos;s what&apos;s happening with your AI agents today.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* 左侧：Agent状态 */}
              <div className="col-span-2 space-y-6">
                {/* Active Agents */}
                <div className="bg-surface rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold">Active Agents</h4>
                    <button className="text-primary text-sm hover:underline">View all</button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {agents.map((agent) => (
                      <div
                        key={agent.name}
                        className="bg-surface-light rounded-xl p-4 flex items-center gap-4"
                      >
                        <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-2xl">
                          {agent.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold">{agent.name}</h5>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                agent.status === 'online'
                                  ? 'bg-success'
                                  : agent.status === 'busy'
                                  ? 'bg-warning'
                                  : 'bg-text-muted'
                              }`}
                            />
                          </div>
                          <p className="text-sm text-text-muted">{agent.role}</p>
                          <p className="text-xs text-primary mt-1">{agent.task}</p>
                        </div>
                        <button className="p-2 hover:bg-surface rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-text-muted" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-6">Recent Activity</h4>
                  
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-surface-light rounded-xl"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.type === 'success'
                              ? 'bg-success'
                              : activity.type === 'warning'
                              ? 'bg-warning'
                              : 'bg-primary'
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm">{activity.text}</p>
                        </div>
                        <span className="text-xs text-text-muted">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右侧边栏 */}
              <div className="space-y-6">
                {/* System Health */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-6">System Health</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-success" />
                        <span className="text-sm">System Status</span>
                      </div>
                      <span className="text-sm text-success font-medium">Healthy</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-primary" />
                        <span className="text-sm">CPU Usage</span>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-warning" />
                        <span className="text-sm">Active Tasks</span>
                      </div>
                      <span className="text-sm font-medium">3 running</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-surface-light">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Uptime</span>
                      <span>99.9%</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-6">Quick Actions</h4>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary hover:bg-primary-hover rounded-xl transition-colors text-left">
                      <Plus className="w-5 h-5" />
                      <span>Generate Content</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-surface-light hover:bg-surface rounded-xl transition-colors text-left">
                      <Play className="w-5 h-5" />
                      <span>Start Agent</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-surface-light hover:bg-surface rounded-xl transition-colors text-left">
                      <Pause className="w-5 h-5" />
                      <span>Pause All</span>
                    </button>
                  </div>
                </div>

                {/* Next Tasks */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Next Tasks</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-surface-light rounded-xl">
                      <p className="text-sm font-medium">AI资讯聚合</p>
                      <p className="text-xs text-text-muted mt-1">明天 08:00</p>
                    </div>
                    
                    <div className="p-3 bg-surface-light rounded-xl">
                      <p className="text-sm font-medium">A股内容生成</p>
                      <p className="text-xs text-text-muted mt-1">3天后 09:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
