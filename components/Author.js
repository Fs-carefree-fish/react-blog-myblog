
import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="../static/img/touxiang.jpg" />
        <div className="author-introduction">
          web前端
          <Divider>社交账号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    </div>
  )
}

export default Author