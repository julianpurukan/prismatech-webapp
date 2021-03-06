import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { LoginSelectors } from '../../Containers/Login/redux'
import { TablepaginationSelectors } from '../../features/TablePagination/redux'
import { getUserColumn } from '../../Utils/TableColumn'
import TablePaginationContainer from '../../features/TablePagination/TablePaginationContainer'
class ContentListUser extends Component {
  render () {
    return (
      <section className='content'>
        <div className='container-fluid'>
          <div className='card'>
            <div className='card-header'>
              {/* <h3 className='box-title'>Data Table With Full Features</h3> */}
            </div>
            <div className='card-body'>
              {(this.props.tablepaginationResponseCode !== 'MBDD00' && this.props.tablepaginationResponseDescription !== '') && <span style={{ color: 'red' }}>{this.props.tablepaginationResponseDescription}</span>}
              <TablePaginationContainer url='/plink/merchant/findBy' columns={getUserColumn()} userMerchantCode={this.props.userMerchantCode} table='user' />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login),
    tablepaginationResponseDescription: TablepaginationSelectors.responseDescription(state.tablepagination),
    tablepaginationResponseCode: TablepaginationSelectors.responseCode(state.tablepagination)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ContentListUser))
