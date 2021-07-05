// Custom hook that shorthands the context!
import { useContext } from 'react'
import { userContext } from '/context/userContext'
import { UserUser } from '/types/hooks'
import { UserContext } from '/types/context'

export const useUser: UserUser = () => useContext<UserContext>(userContext)
