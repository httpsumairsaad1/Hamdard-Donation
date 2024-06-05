import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ProjectCard from '../components/ProjectCards/ProjectCard'
import FeaturesPost from '../components/FeaturesPost/FeaturesPost'
import LatestCause from '../components/Line-LastestCause/LatestCause'
// import NavBarShape from '../components/Navbar/NavBarShape'
import BlogCard from '../components/BlogCards/BlogCards'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const Home = () => {
  return (
    <>
    {/* <NavBarShape/> */}
    <Navbar />
    <HeroSection />
    <ProjectCard />
    <FeaturesPost />
    <LatestCause />
    <BlogCard/>
    <Footer />
    </>
  )
}

export default Home