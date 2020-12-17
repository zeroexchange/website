import './styles.scss';

import React from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`

const MainLayout = ({ hasSnow, children }) => {
  return (
    <LayoutContainer className="darkblue-bg">
      {hasSnow && <div className="snow-bg snow"></div>}
      <main id="Main" style={{ flexGrow: 1 }}>
        {children}
      </main>
    </LayoutContainer>
  )
}

export default MainLayout
