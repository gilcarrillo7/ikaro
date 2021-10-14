import React, { useEffect, useRef } from "react"
import { Element, scroller } from "react-scroll"

import Layout from "../components/layout"
import Section from "../components/section/Section"
//import Seo from "../components/seo"

import SectionA from "../sections/SectionA"
import SectionB from "../sections/SectionB"
import SectionC from "../sections/SectionC"
import SectionD from "../sections/SectionD"

const IndexPage = () => {
  const sections = useRef(new Array(4))

  let removed = false
  let handle = null

  const getIndxSection = scrollPos => {
    let indx = 0
    let difference = sections.current[sections.current.length - 1].offsetTop
    for (let i = 0; i < sections.current.length; i++) {
      let ndiff = Math.abs(sections.current[i].offsetTop - scrollPos)
      if (ndiff < difference) {
        difference = ndiff
        indx = i
      }
    }
    return indx
  }

  const onScroll = () => {
    if (handle) {
      clearTimeout(handle)
    }
    handle = setTimeout(() => {
      const indx = getIndxSection(window.scrollY) + 1
      if (window.innerWidth >= 640)
        scroller.scrollTo(`section${indx}`, {
          duration: 500,
          delay: 100,
          smooth: true,
        })
    }, 200)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      if (removed) {
        return
      }
      removed = true
      if (handle) {
        clearTimeout(handle)
      }
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return (
    <Layout>
      <div ref={el => (sections.current[0] = el)}>
        <Element id="section1">
          <Section>
            <SectionA />
          </Section>
        </Element>
      </div>
      <div ref={el => (sections.current[1] = el)}>
        <Element id="section2">
          <Section>
            <SectionB />
          </Section>
        </Element>
      </div>
      <div ref={el => (sections.current[2] = el)}>
        <Element id="section3">
          <Section>
            <SectionC />
          </Section>
        </Element>
      </div>
      <div ref={el => (sections.current[3] = el)}>
        <Element id="section4">
          <Section>
            <SectionD />
          </Section>
        </Element>
      </div>
    </Layout>
  )
}

export default IndexPage
