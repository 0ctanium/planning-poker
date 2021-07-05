import { User } from '/types/index'
import { Dispatch, SetStateAction } from 'react'

export interface UserContext {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>> | null
  loadingUser: boolean
}
