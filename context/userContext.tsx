import { useState, useEffect, createContext, FC } from 'react'
import firebase from '/serivces/firebase/client'
import { UserContext } from '/types/context'
import { User } from '/types'

export const userContext = createContext<UserContext>({
  user: null,
  setUser: null,
  loadingUser: true,
})

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName } = user
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName })
        } else setUser(null)
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <userContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </userContext.Provider>
  )
}
