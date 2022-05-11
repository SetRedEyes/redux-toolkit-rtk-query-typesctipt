import { useEffect } from 'react'
import PostContainer from './components/PostContainer'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { loadUsersList } from './store/reducers/actionCreators'
import { getUsersState,  } from './store/reducers/users'
import './App.css';
import PostContainer2 from './components/PostContainer2'

const App = () => {
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(getUsersState())

  // useEffect(() => {
  //   dispatch(loadUsersList())
  // }, [])

  return (
    <div className='App'>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((u) => (
        <div key={u.id}>
          {u.id}: {u.name} - {u.email}
        </div>
      ))} */}
      <PostContainer/>
      <PostContainer2/>
    </div>
  )
}

export default App
