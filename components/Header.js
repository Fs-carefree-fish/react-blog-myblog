import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servPath from '../config/apiUrl'

import '../static/style/components/header.css'

import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {

  const [navArray, setNavArray] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(servPath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }

    fetchData()

  }, [])

  const handleClick = (e) => {
    if (e.key == 0) {
      //跳转到首页
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }



  return (
    <div className="header">
      <Row type="flex" justify="center">

        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">假闲鱼</span>
          <span className="header-txt">自由无忧无虑假闲鱼</span>
        </Col>

        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal"
            onClick={handleClick}>

            <Menu.Item key="0">
              <Icon type="home" />
              博客首页
            </Menu.Item>

            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }

            {/* <Menu.Item key="video">
              <Icon type="profile" />
              笔记
            </Menu.Item>

            <Menu.Item key="life">
              <Icon type="smile" />
              生活
            </Menu.Item> */}

          </Menu>
        </Col>
      </Row>
    </div>
  )
}


export default Header
