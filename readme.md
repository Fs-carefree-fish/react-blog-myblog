## pm2 进程守护 pm2 start server --name myblog
## 一、安装：
npm install pm2 -g
## 二、启动：
pm2 start app.js
pm2 start app.js --name my-api       #my-api为PM2进程名称
pm2 start app.js -i 0                #根据CPU核数启动进程个数
pm2 start app.js --watch             #实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload
## 三、查看进程：
pm2 list
pm2 show 0 或者 # pm2 info 0         #查看进程详细信息，0为PM2进程id 
## 四、监控：
pm2 monit
## 五、停止：
pm2 stop all                         #停止PM2列表中所有的进程
pm2 stop 0                           #停止PM2列表中进程为0的进程
## 六、重载：
pm2 reload all                       #重载PM2列表中所有的进程
pm2 reload 0                         #重载PM2列表中进程为0的进程
## 七、重启：
pm2 restart all                      #重启PM2列表中所有的进程
pm2 restart 0                        #重启PM2列表中进程为0的进程
## 八、删除PM2进程：
pm2 delete 0                         #删除PM2列表中进程为0的进程
pm2 delete all                       #删除PM2列表中所有的进程
## 九、日志操作：
pm2 logs [--raw]                     #Display all processes logs in streaming
pm2 flush                            #Empty all log file
pm2 reloadLogs                       #Reload all logs
## 十、升级PM2：
npm install pm2@lastest -g           #安装最新的PM2版本
pm2 updatePM2                        #升级pm2
## 十一、更多命令参数请查看帮助：
pm2 --help
