import React from 'react'
import Head from 'next/head'

import axios from 'axios'

import { Col, Row, Icon, Breadcrumb, Affix } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../static/style/pages/detailed.css'

// import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Tocify from '../components/tocify.tsx'


import servPath from '../config/apiUrl.js'


const Detailed = (props) => {

  //let html = `gfdusfguy7`

  const tocify = new Tocify()

  const renderer = new marked.Renderer()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor} class="anchor-fix" ><h${level}>${level}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })

  let html = marked(props.article_content)

  // console.log(`props是`)
  // console.log(props.article_content)




  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item> <a href="/">首页</a> </Breadcrumb.Item>
                <Breadcrumb.Item> <a href="/list">博客列表</a> </Breadcrumb.Item>
                <Breadcrumb.Item> xxxx </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React 实战Blog
            </div>
              <div className="list-icon center">
                <span><Icon type="calendar" />2019-10-30</span>
                <span><Icon type="folder" />学习笔记</span>
                <span><Icon type="fire" />2001人</span>
              </div>
              <div className="detailed-content">
                {/* <ReactMarkdown
                  source={markdown}
                  escapeHtml={false} /> */}

                {/* 这里可以把标签解析 */}
                <div className="detailed-content"
                  dangerouslySetInnerHTML={{ __html: html }}>

                </div>


              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav">
                文章目录
            </div>
              {tocify && tocify.render()}
              {/* <MarkNav
                className="article-menu"
                // source={markdown}
                source={html}
                ordered={false} /> */}
            </div>
          </Affix>

        </Col>
      </Row>
      <Footer />

    </div>
  )
}


Detailed.getInitialProps = async (context) => {

  //console.log("id是", context.query.id)

  let id = context.query.id
  const promise = new Promise((resolve) => {

    // axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
    axios(servPath.getArticleById + id).then(
      (res) => {
        resolve(res.data.data[0])
        //console.log(res.data)
      }
    )
  })

  return await promise

}



export default Detailed