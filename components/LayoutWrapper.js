import React from 'react'
import SectionContainer from 'components/SectionContainer'
import Footer from 'components/sections/Footer'
import Header from 'components/sections/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Header />
        <div className="mt-4 flex h-screen flex-col justify-between">
          <div className="w-full-relative mx-auto hidden h-screen sm:block" />
          <main>{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
