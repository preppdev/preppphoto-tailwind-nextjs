import React from 'react'
import SectionContainer from 'components/SectionContainer'
import Footer from 'components/sections/Footer'
import Header from 'components/sections/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <div className="w-full-relative mx-auto hidden h-screen sm:block"></div>
          <main className="mb-auto bg-white dark:bg-gray-900">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
