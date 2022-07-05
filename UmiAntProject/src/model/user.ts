import { useCallback, useState } from "react"

export default function () {
  const [user, setUser] = useState<API.IUser>()
  const singin = useCallback((name: string, password: string) => {
      setUser({
          id: 1,
          name: name,
          password: password
      })
  }, [])
  const singout = useCallback(() => {
      setUser({} as API.IUser)
  }, [])
  return {
      user,
      singin,
      singout
  }
}