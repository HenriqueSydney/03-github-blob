import { useEffect, useState } from 'react'

import { PostCard } from '../../components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import {
  BlogContainer,
  BlogSectionContainer,
  FilterInput,
  PostCardContainer,
} from './styles'
import { api } from '../../lib/axios'

type UserProfile = {
  profileUrl: string
  avatarUrl: string
  userName: string
  name: string
  biography: string
  followers: number
  company: string
}

type IssuesFromGithub = {
  html_url: string
  title: string
  body: string
  number: number
  created_at: string
}

type Posts = {
  url: string
  issueNumber: number
  title: string
  excerpt: string
  createdAt: string
}

const REPOSITORY = '03-github-blob'

export function Blog() {
  const [userProfile, setUserProfile] = useState({} as UserProfile)
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<Posts[]>([])
  const [numberOfPosts, setNumberOfPosts] = useState(0)

  async function getUserProfile() {
    try {
      const response = await api.get('/users/HenriqueSydney')

      const { html_url, avatar_url, name, login, bio, followers, company } =
        response.data

      const newUserProfileInfo = {
        profileUrl: html_url,
        avatarUrl: avatar_url,
        userName: login,
        name,
        biography: bio,
        followers,
        company,
      }

      setUserProfile(newUserProfileInfo)

      await fetchPostsFromGithubIssues()
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchPostsFromGithubIssues(filter = false) {
    if (filter && searchQuery.length <= 3) return

    try {
      const { data } = await api.get(
        `/search/issues?q=${encodeURIComponent(
          searchQuery,
        )}repo:HenriqueSydney/${REPOSITORY}`,
      )

      const newPostsAfterFilter = data.items.map((post: IssuesFromGithub) => {
        return {
          url: post.html_url,
          issueNumber: post.number,
          title: post.title,
          excerpt: post.body.slice(0, 250),
          createdAt: post.created_at,
        }
      })

      setPosts(newPostsAfterFilter)
      setNumberOfPosts(newPostsAfterFilter.length)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  useEffect(() => {
    fetchPostsFromGithubIssues(true)
  }, [userProfile, searchQuery])

  return (
    <BlogContainer>
      <ProfileCard userProfile={userProfile} />

      <BlogSectionContainer>
        <h2>Publicações</h2>
        {numberOfPosts === 1 && <span>{numberOfPosts} publicação</span>}
        {numberOfPosts !== 1 && <span>{numberOfPosts} publicações</span>}
      </BlogSectionContainer>

      <FilterInput
        type="text"
        placeholder="Buscar conteúdo"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />

      <PostCardContainer>
        {posts.length > 0 &&
          posts.map((post) => {
            return <PostCard key={post.title} issue={post} />
          })}
      </PostCardContainer>
    </BlogContainer>
  )
}
