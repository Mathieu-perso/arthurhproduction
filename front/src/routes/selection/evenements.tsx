import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/selection/evenements')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/selection/evenements"!</div>
}
