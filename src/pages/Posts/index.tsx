import { useEffect, useState } from 'react'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import PacmanLoader from 'react-spinners/PacmanLoader'

import { api } from '../../lib/axios'

import { PostHeader } from './PostHeader'

import { LoadingContainer, PostContainer, PostSectionContainer } from './styles'

import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

type PostType = {
  user: string
  title: string
  body: string
  createdAt: string
  comments: number
  html_url: string
}

export function Post() {
  const [post, setPost] = useState({} as PostType)
  const THEME = useTheme()

  const { issueId } = useParams()

  async function getIssue() {
    try {
      const response = await api.get(
        `/repos/HenriqueSydney/03-github-blob/issues/${issueId}`,
      )

      const { title, user, body, created_at, comments, html_url } =
        response.data
      console.log(response.data)
      const postInfo = {
        user: user.login,
        title,
        body,
        createdAt: created_at,
        comments,
        html_url,
      }

      setPost(postInfo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIssue()
  }, [])

  if (post.comments === undefined) {
    return (
      <LoadingContainer>
        <PacmanLoader
          color={THEME.blue}
          size={20}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoadingContainer>
    )
  }

  return (
    <PostContainer>
      <PostHeader postInfo={post} />

      <PostSectionContainer>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.body}
        </ReactMarkdown>
      </PostSectionContainer>
    </PostContainer>
  )
}
