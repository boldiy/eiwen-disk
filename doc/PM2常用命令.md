### PM2常用命令

PM2 是一款非常优秀的 Node 进程管理工具，能够充分利用多核 CPU且能够负载均衡、能够帮助应用在崩溃后、指定时间和超出最大内存限制等情况下实现自动重启，PM2 是开源的，包含后台运行、守护进程，监控，日志功能。

1. 安装： ```npm i pm2 -g```
2. 查看当前版本：``pm2 -v``  
3. 查看应用：``pm2 status || pm2 list``
4. 启动程序： ``pm2 start index.js`` 
5. 启动程序（指定名称）：``pm2 start [AppName||AppID] --name disk``
6. 启动程序（所有）：``pm2 start all``
7. 查看日志（指定）：``pm2 logs [AppName||AppID]``
8. 停止应用（根据名称）：``pm2 stop [AppName||AppID]``
9. 停止应用（根据ID）：``pm2 stop 1``
10. 重启应用（所有）：``pm2 restart all``
11. 重启应用（指定）：``pm2 restart [AppName||AppID]``
12. 重载应用（所有）：``pm2 reload all``
13. 重载应用（指定）：``pm2 reload [AppName||AppID]``
14. 删除应用（指定）：``pm2 delete [AppName||AppID]``
15. 删除应用（所有）：``pm2 delete all``
16. 查看应用监视器：``pm2 monit``
17. 查看应用详情信息：``pm2 show [AppName||AppID]``