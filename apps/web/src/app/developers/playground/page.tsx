import { Header } from "@/components/layout/PageHeader"
import { PlaygroundForm } from "@/components/forms/PlaygroundForm"
import { cn } from "@/lib/utils"

export default function DeveloperPlaygroundPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="API Playground"
        description="Test API requests with query parameters and methods"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlaygroundForm />
        </div>
      </section>
    </main>
  )
}