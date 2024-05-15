'use client'

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'

function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) =>{

  }

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className='mt-16 prompt_layout'>
        {data.map((post) => (
          <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
        ))}
      </div>
    )
  }

  const searchPosts = async (e) => {
    e.preventDefault();

    // RESET POSTS
    const response = await fetch('/api/prompt');
    const data = await response.json();
    setPosts(data)

    //FILTER POSTS
    const filteredPosts = data.filter((post) => (
      post.prompt.toLowerCase().includes(searchText.toLowerCase())) ||
      post.tag.toLowerCase().includes(searchText.toLowerCase()) ||
      post.creator.username.toLowerCase().includes(searchText.toLowerCase())
    )
    setPosts(filteredPosts)
  }

  const handleTagClick = async (tag) => {
    const response = await fetch('/api/prompt');
    const data = await response.json();
    console.log(data)
    const filterByTag = data.filter((post) => post.tag === tag)
    setPosts(filterByTag)
  }

  useEffect(() =>{
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center' onSubmit={searchPosts}>
        <input
          name='searchInput'
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          required
          className='search_input peer'
          onChange={(e) => setSearchText(e.target.value)}
           />
      </form>

      <PromptCardList
      data={posts}
      handleTagClick={handleTagClick} />
    </section>
  )
}

export default Feed
