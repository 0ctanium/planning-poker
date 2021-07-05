import firebase from 'firebase'

export type User = Pick<firebase.User, 'uid' | 'displayName'>
