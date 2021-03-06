import React, { Component } from 'react'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../ContentHeader'
import Helmet from 'react-helmet'

export default class ContentWrapper extends Component {
  render () {
    const { children, pageTitle, breadcrumb, contentHeaderTitle, isNeedLoggedin } = this.props
    return (
      <>
        {isNeedLoggedin && <LoginCheck />}
        <Helmet>
          <title>{pageTitle}</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <div className='content-wrapper'>
          <ContentHeader
            title={contentHeaderTitle}
            breadcrumb={breadcrumb}
          />
          <section className='content'>
            <div className='container-fluid'>
              {children}
            </div>
          </section>
        </div>
      </>
    )
  }
}
