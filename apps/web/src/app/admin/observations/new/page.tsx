import { Header } from "@/components/layout/PageHeader"
import { ObservationForm } from "@/components/forms/ObservationForm"
import { cn } from "@/lib/utils"

export default function AdminObservationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Record Observation"
        description="Add new price observation for a commodity"
        showBreadcrumb={true}
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ObservationForm />
        </div>
      </section>
    </main>
  )
}