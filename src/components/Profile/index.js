import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

const PersonalInfoQuery = graphql`
    query blogMetadata {
    site {
      siteMetadata {
        author
        description
        title
        position
      }
    }
  }
`

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, title, position, description },
    },
  } = useStaticQuery(PersonalInfoQuery)

  return (
    <div className="profile-wapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  )
}

export default Profile