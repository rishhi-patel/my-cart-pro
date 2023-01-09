import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form className='form-inline my-2 my-lg-0' onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='form-control mr-sm-2'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-dark'
        className='btn btn-secondary my-2 my-sm-0'
      >
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
