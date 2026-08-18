export interface ApiKey {
  id: string
  name: string
  key: string
  permissions: string[]
  createdAt: string
  status: "active" | "revoked"
}