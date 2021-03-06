import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgQuery = graphql`
  query {
    avatarImage: file(relativePath: { eq: "profile.png"}) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Avatar = () => {
  const { avatarImage } = useStaticQuery(ImgQuery)

  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
