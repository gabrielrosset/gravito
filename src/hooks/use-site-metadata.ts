import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              bio
              name
              photo
              company {
                name
                logo
                baseline
              }
              contacts {
                rss
                line
                email
                weibo
                gitlab
                medium
                github
                twitter
                codepen
                youtube
                facebook
                linkedin
                telegram
                instagram
                soundcloud
                html5
                css3
                javascript
                angular
                reactJs
                sass
                less
                gulp
                grunt
                android
                ios
                ionic
                reactNative
                fastlane
                firebase
                sentry
                npm
                nodeJs
                csharp
                java
                php
                symfony
                wordpress
                moodle
                prestashop
                docker
                kubernetes
                terraform
                ansible
                jenkins
                gcp
                azure
                aws
                oauth
                graphql
                elasticsearch
                redis
                mongodb
                mysql
                mariadb
                postgres
                jwt
                appSignal
                scrollDown
              }
            }
            menu {
              path
              label
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
